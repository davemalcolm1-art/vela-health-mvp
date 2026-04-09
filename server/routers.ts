import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createQuizResponse, createQuizResult, getQuizResponseById, getQuizResultByResponseId, updateQuizResultEmailCaptured, createWaitlistSignup, getWaitlistSignupByEmail } from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  quiz: router({
    submitQuiz: publicProcedure
      .input(z.object({
        email: z.string().email(),
        primaryGoal: z.string(),
        healthBaseline: z.string().optional(),
        symptoms: z.string().optional(),
        medications: z.string().optional(),
        bloodWorkHistory: z.string().optional(),
        sportStatus: z.string().optional(),
        lifestyleFactors: z.string().optional(),
        eligible: z.number().default(1),
        ineligibilityReason: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        try {
          // Create quiz response
          const quizResult = await createQuizResponse({
            email: input.email,
            primaryGoal: input.primaryGoal,
            healthBaseline: input.healthBaseline,
            symptoms: input.symptoms,
            medications: input.medications,
            bloodWorkHistory: input.bloodWorkHistory,
            sportStatus: input.sportStatus,
            lifestyleFactors: input.lifestyleFactors,
            eligible: input.eligible,
            ineligibilityReason: input.ineligibilityReason,
          });

          // Determine recommended program based on primary goal
          const programMap: Record<string, string> = {
            'body-composition': 'Body Composition Program',
            'energy-cognition': 'Energy & Cognition Program',
            'recovery-repair': 'Recovery & Repair Program',
            'skin-collagen': 'Skin & Collagen Program',
            'immune-resilience': 'Immune Resilience Program',
            'comprehensive': 'Comprehensive Program',
            'not-sure': 'Personalized Consultation',
          };

          const recommendedProgram = programMap[input.primaryGoal] || 'Personalized Consultation';

          // Create quiz result
          const resultData = await createQuizResult({
            quizResponseId: (quizResult as any).insertId,
            recommendedProgram,
            personalizedMessage: `Based on your responses, we recommend our ${recommendedProgram}. Our clinical team will review your assessment and contact you shortly.`,
            emailCaptured: 0,
          });

          // Notify owner of new quiz submission
          await notifyOwner({
            title: 'New Quiz Submission',
            content: `New eligibility quiz completed by ${input.email}. Primary goal: ${input.primaryGoal}. Eligible: ${input.eligible === 1 ? 'Yes' : 'No'}`,
          });

          return {
            success: true,
            quizResponseId: (quizResult as any).insertId,
            recommendedProgram,
          };
        } catch (error) {
          console.error('Quiz submission error:', error);
          throw error;
        }
      }),

    getResult: publicProcedure
      .input(z.object({ quizResponseId: z.number() }))
      .query(async ({ input }) => {
        const result = await getQuizResultByResponseId(input.quizResponseId);
        return result;
      }),

    captureEmail: publicProcedure
      .input(z.object({
        quizResponseId: z.number(),
        email: z.string().email(),
      }))
      .mutation(async ({ input }) => {
        try {
          const result = await getQuizResultByResponseId(input.quizResponseId);
          if (!result) {
            throw new Error('Quiz result not found');
          }

          await updateQuizResultEmailCaptured(result.id, input.email);

          // Notify owner of email capture
          await notifyOwner({
            title: 'Quiz Lead Email Captured',
            content: `Email captured: ${input.email}. Program: ${result.recommendedProgram}`,
          });

          return { success: true };
        } catch (error) {
          console.error('Email capture error:', error);
          throw error;
        }
      }),
  }),

  waitlist: router({
    signup: publicProcedure
      .input(z.object({
        email: z.string().email(),
        source: z.string().default('homepage'),
      }))
      .mutation(async ({ input }) => {
        try {
          // Check if already on waitlist
          const existing = await getWaitlistSignupByEmail(input.email);
          if (existing) {
            return { success: false, message: 'Email already on waitlist' };
          }

          await createWaitlistSignup({
            email: input.email,
            source: input.source,
          });

          // Notify owner of new waitlist signup
          await notifyOwner({
            title: 'New Waitlist Signup',
            content: `New waitlist signup: ${input.email} (source: ${input.source})`,
          });

          return { success: true };
        } catch (error) {
          console.error('Waitlist signup error:', error);
          throw error;
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
