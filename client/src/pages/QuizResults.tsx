import { useState } from 'react';
import { useRoute, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';
import { CheckCircle2 } from 'lucide-react';

export default function QuizResults() {
  const [match, params] = useRoute('/quiz/results/:quizId');
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState('');
  const [emailCaptured, setEmailCaptured] = useState(false);
  const [loading, setLoading] = useState(false);

  const quizId = params?.quizId ? parseInt(params.quizId) : null;

  const getResultQuery = trpc.quiz.getResult.useQuery(
    { quizResponseId: quizId || 0 },
    { enabled: !!quizId }
  );

  const captureEmailMutation = trpc.quiz.captureEmail.useMutation();

  const handleEmailCapture = async () => {
    if (!email) {
      toast.error('Please enter your email');
      return;
    }

    setLoading(true);
    try {
      await captureEmailMutation.mutateAsync({
        quizResponseId: quizId!,
        email,
      });
      setEmailCaptured(true);
      toast.success('Email captured! You can now book your consultation.');
    } catch (error) {
      toast.error('Failed to capture email. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (!match || !quizId) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif font-bold text-foreground mb-4">
            Quiz not found
          </h1>
          <Button onClick={() => setLocation('/quiz')} className="btn-primary">
            Start over
          </Button>
        </div>
      </div>
    );
  }

  if (getResultQuery.isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
          </div>
          <p className="text-foreground/70 mt-4">Reviewing your assessment...</p>
        </div>
      </div>
    );
  }

  const result = getResultQuery.data;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-foreground text-background py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle2 className="w-16 h-16 text-accent" />
          </div>
          <h1 className="text-section-heading text-background mb-4">
            Assessment complete.
          </h1>
          <p className="text-subheading text-background/80 max-w-2xl mx-auto">
            Based on your responses, we've prepared a personalised recommendation.
          </p>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          {result && (
            <div className="bg-card rounded-lg p-8 border border-border mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                {result.recommendedProgram}
              </h2>
              <p className="text-body text-foreground/70 mb-8">
                {result.personalizedMessage}
              </p>

              <div className="bg-muted rounded-lg p-6 border border-border">
                <h3 className="font-sans font-semibold text-foreground mb-3">
                  What happens next?
                </h3>
                <ol className="space-y-3 text-body text-foreground/70">
                  <li className="flex gap-3">
                    <span className="font-semibold text-accent">1.</span>
                    <span>Our clinical team reviews your assessment</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-accent">2.</span>
                    <span>We contact you within 24 hours to confirm eligibility</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-accent">3.</span>
                    <span>You book a consultation with one of our doctors</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-accent">4.</span>
                    <span>Your doctor reviews your blood work and determines the best approach</span>
                  </li>
                </ol>
              </div>
            </div>
          )}

          {/* Email Capture */}
          {!emailCaptured && (
            <div className="bg-card rounded-lg p-8 border border-border mb-12">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                Book your consultation
              </h3>
              <p className="text-body text-foreground/70 mb-6">
                Enter your email to unlock the booking calendar. Our clinical team will review your assessment and confirm your eligibility before your consultation.
              </p>

              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-4 rounded-lg bg-background border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50"
                />
                <Button
                  onClick={handleEmailCapture}
                  disabled={loading}
                  className="w-full btn-primary"
                >
                  {loading ? 'Capturing email...' : 'Unlock booking calendar'}
                </Button>
              </div>
            </div>
          )}

          {/* Calendly Placeholder */}
          {emailCaptured && (
            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                Select a consultation time
              </h3>
              <div className="bg-muted rounded-lg p-12 border border-border text-center">
                <p className="text-foreground/70 mb-4">
                  Calendly booking widget will appear here
                </p>
                <p className="text-small text-foreground/50">
                  Placeholder for Calendly embed
                </p>
              </div>
            </div>
          )}

          {/* AHPRA Disclaimer */}
          <div className="mt-12 bg-background/50 p-6 rounded-lg border border-border">
            <p className="text-xs text-foreground/60 leading-relaxed">
              This website contains general health information only. It does not constitute medical advice and does not advertise, supply, or promote prescription-only medicines. All prescription decisions are made solely by an AHPRA-registered medical practitioner following an individual clinical consultation. VELA Health operates in compliance with the Therapeutic Goods Act 1989, the Therapeutic Goods Advertising Code 2021, and AHPRA Guidelines on Advertising Regulated Health Services.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
