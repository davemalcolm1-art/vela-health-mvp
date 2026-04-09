import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Eligibility Assessment',
      cost: 'Free',
      duration: '10 minutes',
      description: 'Complete our online assessment: health history, goals, current symptoms, medications, existing pathology. This determines whether the program is clinically appropriate before any cost is incurred. Disqualifying conditions are flagged and you\'ll be directed to appropriate care.',
    },
    {
      number: 2,
      title: 'Blood Panel',
      cost: '~$150',
      duration: 'Paid to lab directly',
      description: 'We issue a pathology referral. You attend any Australian Clinical Labs or Sonic Healthcare collection centre nationally — 300+ locations. Panel is matched to your program category. Results are reviewed by your doctor before your consultation.\n\nPanel includes: IGF-1 · Testosterone (total and free) · SHBG · LH · FSH · Cortisol · Fasting glucose · HbA1c · Full lipid panel · CRP · Liver and kidney function · Thyroid (TSH, T3, T4) · Vitamin D · Ferritin · B12 · CBC',
    },
    {
      number: 3,
      title: 'Telehealth Consultation',
      cost: '$350',
      duration: '30 minutes',
      description: '30-minute video consultation with an AHPRA-registered doctor. Doctor reviews your blood panel, health history, and goals. Informed consent process completed. Doctor determines whether a protocol is clinically appropriate and issues an individualised care plan.\n\nImportant: Not all patients will receive a prescription. Clinical assessment governs all decisions. If the doctor determines a program is not appropriate for you at this time, we\'ll refund your consultation fee in full.',
    },
    {
      number: 4,
      title: 'Prescription & Dispensing',
      cost: 'Varies by protocol',
      duration: '5–10 business days',
      description: 'Where clinically appropriate, your doctor submits a prescription to our partner compounding pharmacy. All compounds are prepared under sterile conditions by TGA-licensed Australian pharmacies with PRASA-audited sterile suites. Cold-chain shipping to your door within 5–10 business days. Self-administration guide and clinical support provided.',
    },
    {
      number: 5,
      title: '4-Week Check-In',
      cost: 'Included',
      duration: 'Questionnaire + follow-up',
      description: 'Structured questionnaire to assess initial tolerance and flag any concerns. Clinical team follows up directly. Protocol adjustments where clinically indicated.',
    },
    {
      number: 6,
      title: '12-Week Review',
      cost: '$200',
      duration: 'Repeat blood panel + consultation',
      description: 'Repeat blood panel. Telehealth review with your doctor. Protocol continuation, adjustment, or discontinuation based on clinical evidence. This cycle repeats quarterly.',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-section-heading text-foreground mb-4">
            A clinical process, not a subscription signup.
          </h1>
          <p className="text-subheading text-foreground/70 max-w-2xl mx-auto">
            Here's exactly what happens from your first visit to your first quarterly review.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Timeline connector */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-24 w-1 h-16 bg-accent/30 md:left-1/2 md:-translate-x-1/2"></div>
                )}

                <div className="flex gap-6 md:gap-0 md:grid md:grid-cols-2 md:gap-12 items-start">
                  {/* Left side - Step number and title */}
                  <div className="flex gap-6 md:text-right md:pr-12">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accent-foreground font-serif font-bold text-xl">
                        {step.number}
                      </div>
                    </div>
                    <div className="md:hidden">
                      <h3 className="text-2xl font-serif font-bold text-foreground mb-1">
                        {step.title}
                      </h3>
                      <p className="text-small text-foreground/60">
                        {step.cost} · {step.duration}
                      </p>
                    </div>
                    <div className="hidden md:block">
                      <h3 className="text-2xl font-serif font-bold text-foreground mb-1">
                        {step.title}
                      </h3>
                      <p className="text-small text-foreground/60">
                        {step.cost} · {step.duration}
                      </p>
                    </div>
                  </div>

                  {/* Right side - Description */}
                  <div className="md:pl-12">
                    <p className="text-body text-foreground/70 whitespace-pre-line">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-section-heading text-background mb-6">
            Ready to get started?
          </h2>
          <Link href="/quiz">
            <a>
              <Button className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-3">
                Start your eligibility assessment
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
