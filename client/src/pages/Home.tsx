import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Home() {
  const programs = [
    {
      id: 'body-composition',
      title: 'Body Composition',
      description: 'Building muscle, reducing fat, improving recomposition',
      color: 'bg-blue-50',
    },
    {
      id: 'energy-cognition',
      title: 'Energy & Cognition',
      description: 'Sustained energy, mental clarity, reducing fatigue',
      color: 'bg-purple-50',
    },
    {
      id: 'recovery-repair',
      title: 'Recovery & Repair',
      description: 'Injury recovery, gut health, reducing inflammation',
      color: 'bg-green-50',
    },
    {
      id: 'skin-collagen',
      title: 'Skin & Collagen',
      description: 'Skin quality, collagen support, anti-ageing',
      color: 'bg-pink-50',
    },
    {
      id: 'immune-resilience',
      title: 'Immune Resilience',
      description: 'Immune function, cellular health, longevity',
      color: 'bg-amber-50',
    },
    {
      id: 'comprehensive',
      title: 'Comprehensive',
      description: 'Multiple goals, full program',
      color: 'bg-teal-50',
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
      answer: 'After your eligibility assessment and blood panel, you\'ll book a 30-minute video consultation with an AHPRA-registered doctor. They\'ll review your results, discuss your goals, and determine whether a protocol is clinically appropriate. The entire consultation happens securely from your home.',
    },
    {
      question: 'What happens if I\'m not eligible?',
      answer: 'If our doctor determines a program is not appropriate for you at this time, we\'ll refund your consultation fee in full and provide guidance on appropriate care pathways.',
    },
    {
      question: 'How long does the whole process take?',
      answer: 'From eligibility assessment to first prescription typically takes 2–3 weeks. The eligibility quiz takes 10 minutes, blood work 1–2 weeks, consultation 30 minutes, and pharmacy compounding 5–10 business days.',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section - Warm & Welcoming */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-24 md:py-40 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <p className="tagline mb-4 text-accent">Optimise before you intervene.</p>
              <h1 className="text-hero text-white mb-6 leading-tight">
                Doctor-led health optimisation.
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-lg">
                Prescribed and monitored by AHPRA-registered practitioners. Evidence-based protocols. Available Australia-wide via telehealth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="/quiz" className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2">
                  Check eligibility
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#how-it-works" className="btn-ghost w-full sm:w-auto inline-flex items-center justify-center">
                  See how it works
                </a>
              </div>
              <div className="space-y-3 text-sm text-white/80">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>AHPRA-registered practitioners</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>TGA-compliant compounding</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>Telehealth available Australia-wide</span>
                </div>
              </div>
            </div>
            
            {/* [ANIMATION: hero image fades in with gentle upward drift] */}
            <div className="hidden md:flex bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl h-96 items-center justify-center border border-white/10 fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-center">
                <p className="text-white/40 text-lg">[IMAGE: Lifestyle shot of woman in modern home office, natural light, smiling while looking at laptop screen, warm aesthetic]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section - Color-coded & Warm */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <p className="tagline mb-2">Our Programs</p>
            <h2 className="text-section-heading text-foreground mb-4">
              Goal-driven health optimisation
            </h2>
            <p className="text-subheading text-foreground/70 max-w-2xl mx-auto">
              Choose the program that aligns with your health goals. Each includes personalised assessment, blood work, doctor consultation, and ongoing monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <a key={program.id} href={`/quiz?goal=${program.id}`} className={`premium-card ${program.color} fade-in block`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-serif font-bold text-foreground flex-1">
                    {program.title}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                </div>
                <p className="text-body text-foreground/70">
                  {program.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - Clean & Clear */}
      <section id="how-it-works" className="py-24 md:py-32 section-warm-bg">
        <div className="container mx-auto px-4 text-center fade-in">
          <p className="tagline mb-2">The Process</p>
          <h2 className="text-section-heading text-foreground mb-4">
            A clinical process, not a subscription signup.
          </h2>
          <p className="text-subheading text-foreground/70 max-w-2xl mx-auto mb-12">
            Here's exactly what happens from your first visit to your first quarterly review.
          </p>
          <a href="/how-it-works" className="btn-secondary inline-flex items-center justify-center gap-2 mx-auto">
            Learn the full process
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Trust & Credibility Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center fade-in">
              <div className="text-4xl font-serif font-bold text-accent mb-2">30,000+</div>
              <p className="text-foreground/70">Australians trust VELA Health</p>
            </div>
            <div className="text-center fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-serif font-bold text-accent mb-2">100%</div>
              <p className="text-foreground/70">Online & discreet consultations</p>
            </div>
            <div className="text-center fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-serif font-bold text-accent mb-2">4.8★</div>
              <p className="text-foreground/70">Average patient satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance FAQ Section - Warm & Accessible */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto fade-in">
            <div className="text-center mb-12">
              <p className="tagline mb-2">Compliance & Transparency</p>
              <h2 className="text-section-heading text-foreground mb-4">
                We operate within a clear regulatory framework.
              </h2>
              <p className="text-body text-foreground/70">
                Peptide therapy is a regulated medical practice in Australia. Prescriptions require an AHPRA-registered doctor, supply requires a TGA-licensed pharmacy, and ongoing care requires documented clinical monitoring. We built this program around those requirements — not despite them.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6 bg-white fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                  <AccordionTrigger className="text-foreground font-serif font-semibold hover:text-accent transition-colors py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 text-body pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Warm & Inviting */}
      <section className="py-24 md:py-32 bg-primary text-white">
        <div className="container mx-auto px-4 text-center fade-in">
          <p className="tagline mb-2 text-accent">Ready to optimise?</p>
          <h2 className="text-section-heading text-white mb-4">
            Find out if our program is right for you.
          </h2>
          <p className="text-subheading text-white/80 max-w-2xl mx-auto mb-8">
            Complete a short eligibility assessment. No commitment. No clinical recommendations until you've spoken with a doctor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a href="/quiz" className="bg-accent text-white hover:bg-accent/90 px-8 py-3 inline-flex items-center justify-center gap-2 rounded-lg font-sans font-semibold transition-all duration-200 shadow-md hover:shadow-lg">
              Start eligibility assessment
              <ArrowRight className="w-4 h-4" />
            </a>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-sans font-semibold hover:bg-white/10 transition-colors">
              Join the waitlist
            </button>
          </div>
          <p className="text-small text-white/60">
            Takes 3–5 minutes. Your data is handled under Australia's Privacy Act.
          </p>
        </div>
      </section>
    </div>
  );
}
