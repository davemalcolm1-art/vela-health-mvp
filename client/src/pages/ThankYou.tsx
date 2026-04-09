import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

export default function ThankYou() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-foreground text-background py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle2 className="w-20 h-20 text-accent" />
          </div>
          <h1 className="text-section-heading text-background mb-4">
            Consultation booked.
          </h1>
          <p className="text-subheading text-background/80 max-w-2xl mx-auto">
            Thank you for booking your consultation. We're looking forward to working with you.
          </p>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-card rounded-lg p-8 border border-border mb-12">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-8">
              What happens next?
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground font-serif font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                    Confirmation email
                  </h3>
                  <p className="text-body text-foreground/70">
                    You'll receive a confirmation email with your consultation details and a secure video link.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground font-serif font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                    Get your blood work done
                  </h3>
                  <p className="text-body text-foreground/70">
                    If you haven't already, attend a collection centre to get your blood panel done. We'll email you a pathology referral form.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground font-serif font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                    Prepare for your consultation
                  </h3>
                  <p className="text-body text-foreground/70">
                    Gather your blood results, health history, and any questions you have. Find a quiet space for your video call.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground font-serif font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                    Your consultation
                  </h3>
                  <p className="text-body text-foreground/70">
                    Join your video call at the scheduled time. Your doctor will review everything and determine the best approach for you.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-card rounded-lg p-8 border border-border mb-12">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-8">
              Common questions
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-sans font-semibold text-foreground mb-2">
                  What if I need to reschedule?
                </h3>
                <p className="text-body text-foreground/70">
                  You can reschedule your consultation directly through the booking link in your confirmation email. We're flexible and want to work around your schedule.
                </p>
              </div>

              <div>
                <h3 className="font-sans font-semibold text-foreground mb-2">
                  What if I haven't had blood work done?
                </h3>
                <p className="text-body text-foreground/70">
                  We'll provide you with a pathology referral. You can attend any Australian Clinical Labs or Sonic Healthcare collection centre nationally — 300+ locations. The cost is approximately $150, paid directly to the lab.
                </p>
              </div>

              <div>
                <h3 className="font-sans font-semibold text-foreground mb-2">
                  What if I'm not eligible?
                </h3>
                <p className="text-body text-foreground/70">
                  If our doctor determines a program is not appropriate for you at this time, we'll refund your consultation fee in full and refer you to appropriate care.
                </p>
              </div>

              <div>
                <h3 className="font-sans font-semibold text-foreground mb-2">
                  Can I cancel?
                </h3>
                <p className="text-body text-foreground/70">
                  Yes. You can cancel your consultation at any time. If you cancel more than 48 hours before your appointment, we'll provide a full refund.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-body text-foreground/70 mb-6">
              Questions? Contact our team at support@velahealth.com or check out our FAQ.
            </p>
            <Link href="/">
              <Button className="btn-primary">
                Back to home
              </Button>
            </Link>
          </div>

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
