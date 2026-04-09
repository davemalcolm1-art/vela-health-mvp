import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Quiz responses table - stores completed eligibility quiz submissions
 */
export const quizResponses = mysqlTable("quiz_responses", {
  id: int("id").autoincrement().primaryKey(),
  email: varchar("email", { length: 320 }).notNull(),
  primaryGoal: varchar("primaryGoal", { length: 100 }).notNull(),
  healthBaseline: varchar("healthBaseline", { length: 255 }),
  symptoms: text("symptoms"),
  medications: text("medications"),
  bloodWorkHistory: varchar("bloodWorkHistory", { length: 255 }),
  sportStatus: varchar("sportStatus", { length: 100 }),
  lifestyleFactors: text("lifestyleFactors"),
  eligible: int("eligible").default(1).notNull(), // 1 = eligible, 0 = ineligible
  ineligibilityReason: text("ineligibilityReason"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type QuizResponse = typeof quizResponses.$inferSelect;
export type InsertQuizResponse = typeof quizResponses.$inferInsert;

/**
 * Waitlist signups table - stores email captures from waitlist CTAs
 */
export const waitlistSignups = mysqlTable("waitlist_signups", {
  id: int("id").autoincrement().primaryKey(),
  email: varchar("email", { length: 320 }).notNull().unique(),
  source: varchar("source", { length: 100 }).notNull(), // 'homepage', 'quiz_exit', 'results_page', etc.
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type WaitlistSignup = typeof waitlistSignups.$inferSelect;
export type InsertWaitlistSignup = typeof waitlistSignups.$inferInsert;

/**
 * Quiz results table - stores the results/recommendations shown to users
 */
export const quizResults = mysqlTable("quiz_results", {
  id: int("id").autoincrement().primaryKey(),
  quizResponseId: int("quizResponseId").notNull().references(() => quizResponses.id),
  recommendedProgram: varchar("recommendedProgram", { length: 100 }).notNull(),
  personalizedMessage: text("personalizedMessage"),
  emailCaptured: int("emailCaptured").default(0).notNull(), // 1 = email captured, 0 = not yet
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type QuizResult = typeof quizResults.$inferSelect;
export type InsertQuizResult = typeof quizResults.$inferInsert;


