import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2 } from 'lucide-react';

export default function Home() {
  const programs = [
    {
      id: 'body-composition',
      title: 'Body Composition',
      description: 'Building muscle, reducing fat, improving recomposition',
      icon: '🏋️',
    },
    {
      id: 'energy-cognition',
      title: 'Energy & Cognition',
      description: 'Sustained energy, mental clarity, reducing fatigue',
      icon: '⚡',
    },
    {
      id: 'recovery-repair',
      title: 'Recovery & Repair',
      description: 'Injury recovery, gut health, reducing inflammation',
      icon: '🔄',
    },
    {
      id: 'skin-collagen',
      title: 'Skin & Collagen',
      description: 'Skin quality, collagen support, anti-ageing',
      icon: '✨',
    },
    {
      id: 'immune-resilience',
      title: 'Immune Resilience',
      description: 'Immune function, cellular health, longevity',
      icon: '🛡️',
    },
    {
      id: 'comprehensive',
      title: 'Comprehensive',
      description: 'Multiple goals, full program',
      icon: '📊',
    },
  ];

  const faqItems = [
    {
      question: 'Is this legal in Australia?',
      answer: 'Yes. Peptide therapy is legal in Australia when prescribed by an AHPRA-registered doctor and dispensed by a TGA-licensed compounding pharmacy. Most therapeutic peptides are classified as Schedule 4 (prescription-only) medicines under the Poisons Standard. Our clinical model is built around full compliance with TGA and AHPRA requirements.',
    },
    {
      question: 'Do I need a referral from my GP?',
      answer: 'No. You can access our program directly. Our doctors conduct a full clinical assessment including a blood panel review before any prescription is issued. If we identify something that requires input from your GP or a specialist, we\'ll let you know.',
    },
    {
      question: 'What does the blood panel include?',
      answer: 'The panel varies by program but typically includes: IGF-1, testosterone (total and free), SHBG, cortisol, fasting glucose, HbA1c, full lipid panel, CRP, liver and kidney function, thyroid function, vitamin D, ferritin, B12, and full blood count. Your doctor may add to this based on your history.',
    },
    {
      question: 'How does the telehealth consultation work?',
      answer: 'Via secure video call with an AHPRA-registered doctor. The consultation runs approximately 30 minutes. Your doctor reviews your blood panel, health history, and goals, completes informed consent, and determines whether a program is clinically appropriate.',
    },
    {
      question: 'What is a compounding pharmacy?',
      answer: 'A TGA-licensed pharmacy that prepares medications to a doctor\'s specific prescription. All our pharmacy partners operate under sterile compounding standards, hold current TGA licences, and produce a Certificate of Analysis (COA) for every batch.',
    },
    {
      question: 'Will this affect my eligibility for competitive sport?',
      answer: 'Some protocols may include substances that appear on the WADA prohibited list. If you compete in WADA-tested sport, you must discuss this with your doctor before starting any program. We flag this in the eligibility quiz and take it seriously.',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-foreground text-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-hero text-background mb-6">
                Optimise before you intervene.
              </h1>
              <p className="text-subheading text-background/80 mb-8">
                Doctor-led health optimisation programs, prescribed and monitored by AHPRA-registered practitioners. Available Australia-wide via telehealth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/quiz">
                  <a>
                    <Button className="btn-primary w-full sm:w-auto">
                      Find out if our program is right for you
                    </Button>
                  </a>
                </Link>
                <a href="#how-it-works" className="btn-ghost w-full sm:w-auto inline-flex items-center justify-center">
                  See how it works
                </a>
              </div>
              <div className="space-y-2 text-sm text-background/70">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>AHPRA-registered practitioners</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>TGA-compliant compounding</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Telehealth available Australia-wide</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block bg-background/10 rounded-lg h-96 flex items-center justify-center">
              <p className="text-background/50 text-center">Hero Image Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-section-heading text-foreground mb-4">
              Our Programs
            </h2>
            <p className="text-subheading text-foreground/70 max-w-2xl mx-auto">
              Goal-driven health optimisation, tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <Link key={program.id} href={`/quiz?goal=${program.id}`}>
                <a className="card-hover bg-card rounded-lg p-8 border border-border hover:border-accent transition-colors">
                  <div className="text-4xl mb-4">{program.icon}</div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                    {program.title}
                  </h3>
                  <p className="text-body text-foreground/70">
                    {program.description}
                  </p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-section-heading text-foreground mb-4">
            A clinical process, not a subscription signup.
          </h2>
          <p className="text-subheading text-foreground/70 max-w-2xl mx-auto mb-12">
            Here's exactly what happens from your first visit to your first quarterly review.
          </p>
          <Link href="/how-it-works">
            <a>
              <Button className="btn-primary">
                Learn the full process
              </Button>
            </a>
          </Link>
        </div>
      </section>

      {/* Compliance FAQ Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-section-heading text-foreground mb-4 text-center">
              We operate within a clear regulatory framework. Here's what that means for you.
            </h2>
            <p className="text-body text-foreground/70 text-center mb-12">
              Peptide therapy is a regulated medical practice in Australia. Prescriptions require an AHPRA-registered doctor, supply requires a TGA-licensed pharmacy, and ongoing care requires documented clinical monitoring. We built this program around those requirements — not despite them.
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-foreground font-sans font-semibold hover:text-accent transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 text-body">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-section-heading text-background mb-4">
            Find out if our program is right for you.
          </h2>
          <p className="text-subheading text-background/80 max-w-2xl mx-auto mb-8">
            Complete a short eligibility assessment. No commitment. No clinical recommendations until you've spoken with a doctor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link href="/quiz">
              <a>
                <Button className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-3">
                  Start eligibility assessment
                </Button>
              </a>
            </Link>
            <button className="btn-ghost">
              Join the waitlist
            </button>
          </div>
          <p className="text-small text-background/60">
            Takes 3–5 minutes. Your data is handled under Australia's Privacy Act.
          </p>
        </div>
      </section>
    </div>
  );
}
