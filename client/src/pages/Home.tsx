import { useState } from 'react';
import { ArrowRight, BarChart3, Zap, Heart, Sparkles, Shield, Leaf, Check, ChevronDown, ChevronUp, Clipboard, TrendingUp, Award, Users } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const programs = [
  { id: 'body', title: 'Body Composition & Performance', description: 'Optimise muscle mass, strength, and metabolic health', price: '$349/month', featured: false },
  { id: 'recovery', title: 'Recovery & Repair', description: 'Support muscle recovery and tissue repair', price: '$299/month', featured: false },
  { id: 'energy', title: 'Energy & Cognitive Performance', description: 'Enhance focus, mental clarity, and sustained energy', price: '$349/month', featured: false },
  { id: 'skin', title: 'Skin & Collagen Health', description: 'Support skin elasticity and collagen production', price: '$329/month', featured: true },
  { id: 'immune', title: 'Immune Resilience & Longevity', description: 'Strengthen immune function and promote longevity', price: '$299/month', featured: false },
  { id: 'comprehensive', title: 'Comprehensive Optimisation', description: 'Full-spectrum health optimisation across all goals', price: '$599/month', featured: true },
];

const steps = [
  { num: 1, title: 'Complete eligibility assessment', desc: '(free)', time: 'Step 1' },
  { num: 2, title: 'Blood panel at any ACL or Sonic Healthcare centre', desc: '(~$150)', time: 'Step 2' },
  { num: 3, title: 'Telehealth consultation with AHPRA doctor', desc: '($350)', time: 'Step 3' },
  { num: 4, title: 'Prescription dispensed, cold-chain delivered to your door', desc: '', time: 'Step 4' },
];

const whyVela = [
  { icon: Clipboard, title: 'Every patient assessed individually', desc: 'Personalised protocols based on your health data' },
  { icon: TrendingUp, title: 'Quarterly blood monitoring', desc: 'Continuous optimisation with regular check-ins' },
  { icon: Award, title: 'AHPRA-registered doctors only', desc: 'Medical oversight you can trust' },
  { icon: Users, title: 'Human support, not AI responses', desc: 'Real practitioners, real accountability' },
];

const faqs = [
  { q: 'Is this legal in Australia?', a: 'Yes. Peptide therapy is regulated in Australia. We operate under TGA pharmacy licensing and AHPRA medical oversight. All protocols are evidence-based and compliant with Australian health regulations.' },
  { q: 'Do I need a referral from my GP?', a: 'No referral required. Our AHPRA-registered doctors conduct a full eligibility assessment. If you\'re not suitable, we\'ll let you know. If you are, we coordinate your care with full transparency.' },
  { q: 'What does the blood panel include?', a: 'A comprehensive baseline assessment covering metabolic markers, hormones, and biomarkers relevant to your chosen program. Results inform your personalised protocol.' },
  { q: 'How does the telehealth consultation work?', a: 'You\'ll have a 30-minute video consultation with an AHPRA-registered doctor to review your results, discuss your goals, and confirm your protocol. All conducted securely online.' },
  { q: 'What happens if I\'m not eligible?', a: 'We\'ll explain why and suggest alternative approaches. Our goal is your health—not every program is right for every person.' },
  { q: 'How long does the whole process take?', a: 'From assessment to first delivery: typically 2–3 weeks, depending on blood test scheduling and consultation availability.' },
];

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary/95 text-white py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-3">
              <p className="text-accent text-sm md:text-base font-semibold tracking-widest uppercase mb-4">
                Doctor-Led Health Optimisation
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                Optimise before you intervene.
              </h1>
              <p className="text-lg md:text-xl text-white/75 mb-8 max-w-2xl">
                Doctor-led health optimisation programs, prescribed and monitored by AHPRA-registered practitioners. Available Australia-wide via telehealth.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="/quiz" className="bg-accent text-primary hover:bg-accent/90 px-8 py-4 rounded-lg font-sans font-semibold inline-flex items-center justify-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg w-full sm:w-auto">
                  Check your eligibility
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#process" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-sans font-semibold transition-colors duration-200 w-full sm:w-auto">
                  How it works
                </a>
              </div>

              {/* Trust Pills */}
              <div className="flex flex-wrap gap-3">
                <div className="trust-pill">
                  <Check className="w-4 h-4" />
                  <span>AHPRA Registered</span>
                </div>
                <div className="trust-pill">
                  <Check className="w-4 h-4" />
                  <span>TGA Compliant</span>
                </div>
                <div className="trust-pill">
                  <Check className="w-4 h-4" />
                  <span>Australia-Wide</span>
                </div>
                <div className="trust-pill">
                  <Check className="w-4 h-4" />
                  <span>Quarterly Monitoring</span>
                </div>
              </div>
            </div>

            {/* Right Column - Stats Card */}
            <div className="lg:col-span-2">
              <div className="bg-primary/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="space-y-8">
                  <div className="border-b border-white/10 pb-8">
                    <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">300+</p>
                    <p className="text-white/60 text-sm">Consultations Completed</p>
                  </div>
                  <div className="border-b border-white/10 pb-8">
                    <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">12-Week</p>
                    <p className="text-white/60 text-sm">Monitoring Cycle</p>
                  </div>
                  <div>
                    <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">100%</p>
                    <p className="text-white/60 text-sm">TGA-Compliant Supply</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Trust Bar */}
      <div className="marquee">
        <div className="marquee-content">
          <span className="flex items-center gap-2 px-4">
            <span className="text-accent">✓</span> AHPRA-REGISTERED PRACTITIONERS
          </span>
          <span className="flex items-center gap-2 px-4">
            <span className="text-accent">✓</span> TGA-COMPLIANT COMPOUNDING
          </span>
          <span className="flex items-center gap-2 px-4">
            <span className="text-accent">✓</span> AUSTRALIA-WIDE TELEHEALTH
          </span>
          <span className="flex items-center gap-2 px-4">
            <span className="text-accent">✓</span> QUARTERLY BLOOD MONITORING
          </span>
          <span className="flex items-center gap-2 px-4">
            <span className="text-accent">✓</span> DOCTOR-PRESCRIBED PROTOCOLS
          </span>
          {/* Duplicate for seamless loop */}
          <span className="flex items-center gap-2 px-4">
            <span className="text-accent">✓</span> AHPRA-REGISTERED PRACTITIONERS
          </span>
          <span className="flex items-center gap-2 px-4">
            <span className="text-accent">✓</span> TGA-COMPLIANT COMPOUNDING
          </span>
          <span className="flex items-center gap-2 px-4">
            <span className="text-accent">✓</span> AUSTRALIA-WIDE TELEHEALTH
          </span>
        </div>
      </div>

      {/* Programs Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 md:mb-16">
            <p className="text-accent text-sm md:text-base font-semibold tracking-widest uppercase mb-3">Choose Your Goal</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
              Personalised programs for every objective
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((prog) => (
              <div
                key={prog.id}
                className={`rounded-xl border overflow-hidden hover:shadow-lg transition-all duration-300 ${
                  prog.featured
                    ? 'border-accent bg-white shadow-md'
                    : 'border-border bg-white'
                }`}
              >
                {/* Top Accent Bar */}
                <div className={`h-1 ${prog.featured ? 'bg-accent' : 'bg-primary'}`} />

                {/* Content */}
                <div className="p-6">
                  {prog.featured && (
                    <span className="inline-block bg-accent text-primary px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      Featured
                    </span>
                  )}
                  <h3 className="text-xl font-serif font-bold text-primary mb-2">
                    {prog.title}
                  </h3>
                  <p className="text-foreground/60 text-sm mb-4">
                    {prog.description}
                  </p>
                  <p className="text-primary font-semibold text-lg mb-4">
                    {prog.price}
                  </p>
                  <a href={`/quiz?goal=${prog.id}`} className="text-accent text-sm font-semibold hover:text-accent/80 transition-colors inline-flex items-center gap-1">
                    Check eligibility
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-accent text-sm md:text-base font-semibold tracking-widest uppercase mb-3">VELA Makes It Simple</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              Four steps to optimisation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent font-serif font-bold text-2xl">{step.num}</span>
                </div>
                <h3 className="text-lg font-serif font-bold mb-2">
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why VELA Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 md:mb-16">
            <p className="text-accent text-sm md:text-base font-semibold tracking-widest uppercase mb-3">Why VELA</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
              The regulated difference
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyVela.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white border border-border rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                  <Icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-lg font-serif font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-foreground/60 text-sm">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-accent text-sm md:text-base font-semibold tracking-widest uppercase mb-3">Compliance & Transparency</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              Clear regulatory framework
            </h2>
            <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto">
              Peptide therapy is regulated in Australia. We built this program around those requirements — not despite them.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`} className="border border-white/20 rounded-lg px-6 py-4">
                  <AccordionTrigger className="text-left text-white hover:text-accent transition-colors">
                    <span className="font-semibold text-lg">{faq.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80 pt-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-accent to-accent/90 text-primary py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary/60 text-sm md:text-base font-semibold tracking-widest uppercase mb-3">Ready to optimise?</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Find out if our program is right for you.
          </h2>
          <p className="text-base md:text-lg text-primary/80 mb-8 max-w-2xl mx-auto">
            Complete a short eligibility assessment. No commitment. No clinical recommendations until you've spoken with a doctor.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <a href="/quiz" className="bg-primary text-accent hover:bg-primary/90 px-8 py-4 rounded-lg font-sans font-semibold inline-flex items-center justify-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg w-full sm:w-auto">
              Start assessment
              <ArrowRight className="w-5 h-5" />
            </a>
            <button className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-4 rounded-lg font-sans font-semibold transition-colors duration-200 w-full sm:w-auto">
              Join waitlist
            </button>
          </div>
          <p className="text-xs md:text-sm text-primary/60">
            Takes 3–5 minutes. Your data is handled under Australia's Privacy Act.
          </p>
        </div>
      </section>

      {/* Mobile Floating CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-primary border-t border-primary/20 p-4">
        <a href="/quiz" className="w-full bg-accent text-primary hover:bg-accent/90 py-4 rounded-lg font-sans font-semibold inline-flex items-center justify-center gap-2 transition-all duration-200">
          Check your eligibility
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>

      {/* AHPRA Disclaimer */}
      <div className="bg-primary/5 border-t border-border py-8">
        <div className="container mx-auto px-4">
          <p className="text-xs md:text-sm text-foreground/60 text-center max-w-4xl mx-auto">
            AHPRA Disclaimer: This website provides general information about health optimisation services. It does not constitute medical advice. All treatments are prescribed by AHPRA-registered practitioners following individual assessment. Results vary by individual. Always consult with a healthcare professional before starting any new health regimen. TGA-licensed pharmacy. AHPRA-registered practitioners.
          </p>
        </div>
      </div>
    </div>
  );
}
