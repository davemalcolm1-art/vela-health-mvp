import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const programs = [
    { id: 'body-composition', title: 'Body Composition', emoji: '💪', color: 'from-blue-50 to-blue-100' },
    { id: 'energy-cognition', title: 'Energy & Cognition', emoji: '⚡', color: 'from-purple-50 to-purple-100' },
    { id: 'recovery-repair', title: 'Recovery & Repair', emoji: '🔄', color: 'from-green-50 to-green-100' },
    { id: 'skin-collagen', title: 'Skin & Collagen', emoji: '✨', color: 'from-pink-50 to-pink-100' },
    { id: 'immune-resilience', title: 'Immune Resilience', emoji: '🛡️', color: 'from-amber-50 to-amber-100' },
    { id: 'comprehensive', title: 'Comprehensive', emoji: '📊', color: 'from-teal-50 to-teal-100' },
  ];

  const steps = [
    { num: 1, title: 'Quick assessment', desc: 'See if you\'re eligible', icon: '📋' },
    { num: 2, title: 'Online consultation', desc: 'Connect with a practitioner', icon: '👨‍⚕️' },
    { num: 3, title: 'Prescription issued', desc: 'Personalized treatment plan created', icon: '💊' },
    { num: 4, title: 'Medicine delivered', desc: 'Receive medicine at home', icon: '📦' },
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
    <div className="w-full bg-background">
      {/* Hero Section - Light & Clean */}
      <section className="bg-gradient-to-b from-background via-background to-accent/5 pt-12 md:pt-16 pb-8 md:pb-12 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <p className="text-accent text-base md:text-lg font-semibold mb-2">Optimise before you intervene.</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4 leading-tight">
              Doctor-led health <span className="text-accent">optimisation.</span>
            </h1>
            <p className="text-base md:text-lg text-foreground/70 mb-6 leading-relaxed max-w-xl">
              Prescribed and monitored by AHPRA-registered practitioners. Evidence-based protocols. Available Australia-wide via telehealth.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/quiz" className="bg-accent text-primary hover:bg-accent/90 px-6 md:px-8 py-3 md:py-4 rounded-lg font-sans font-semibold inline-flex items-center justify-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg w-full sm:w-auto">
                Check eligibility
                <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
              </a>
              <a href="#process" className="border-2 border-primary text-primary hover:bg-primary/5 px-6 md:px-8 py-3 md:py-4 rounded-lg font-sans font-semibold inline-flex items-center justify-center gap-2 transition-colors duration-200 w-full sm:w-auto">
                See how it works
                <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid - Tight & Visual */}
      <section className="bg-background py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {programs.map((prog, idx) => (
              <a
                key={prog.id}
                href={`/quiz?goal=${prog.id}`}
                className={`bg-gradient-to-br ${prog.color} rounded-xl p-5 md:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group border border-white/60 min-h-[140px] md:min-h-[160px] flex flex-col justify-between fade-in`}
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="flex items-start justify-between">
                  <div className="text-3xl md:text-4xl">{prog.emoji}</div>
                  <ArrowRight className="w-4 md:w-5 h-4 md:h-5 text-primary/40 group-hover:text-primary/70 transition-colors" />
                </div>
                <h3 className="text-base md:text-lg font-serif font-bold text-primary mt-3">
                  {prog.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Above the Fold */}
      <section id="process" className="bg-gradient-to-b from-accent/5 to-background py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-accent text-base md:text-lg font-semibold mb-2">VELA MAKES IT SIMPLE</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground">
              Four steps to optimisation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 md:p-7 border border-primary/10 hover:shadow-md transition-shadow duration-300 fade-in text-center"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <div className="text-4xl md:text-5xl mb-4 flex justify-center">{step.icon}</div>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-full bg-accent text-primary font-serif font-bold flex items-center justify-center text-sm">
                    {step.num}
                  </div>
                  <h3 className="text-base md:text-lg font-serif font-bold text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm md:text-base text-foreground/60">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="bg-background py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center fade-in">
              <div className="text-2xl md:text-3xl font-serif font-bold text-accent mb-1">30,000+</div>
              <p className="text-xs md:text-sm text-foreground/70">Australians optimising</p>
            </div>
            <div className="text-center fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-2xl md:text-3xl font-serif font-bold text-accent mb-1">100%</div>
              <p className="text-xs md:text-sm text-foreground/70">Online & discreet</p>
            </div>
            <div className="text-center fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-2xl md:text-3xl font-serif font-bold text-accent mb-1">4.8★</div>
              <p className="text-xs md:text-sm text-foreground/70">Patient satisfaction</p>
            </div>
            <div className="text-center fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-2xl md:text-3xl font-serif font-bold text-accent mb-1">2-3w</div>
              <p className="text-xs md:text-sm text-foreground/70">To prescription</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why VELA - Comparison */}
      <section className="bg-gradient-to-b from-background to-accent/5 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-accent text-base md:text-lg font-semibold mb-2">WHY VELA</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground">
              The regulated difference
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <div className="bg-red-50 rounded-xl p-6 md:p-7 border border-red-200">
              <h3 className="text-lg md:text-xl font-serif font-bold text-red-900 mb-4">❌ Unregulated overseas</h3>
              <ul className="space-y-2 text-sm md:text-base text-red-800">
                <li className="flex gap-2">
                  <span className="flex-shrink-0">•</span>
                  <span>Unknown origins & impurities</span>
                </li>
                <li className="flex gap-2">
                  <span className="flex-shrink-0">•</span>
                  <span>No medical oversight</span>
                </li>
                <li className="flex gap-2">
                  <span className="flex-shrink-0">•</span>
                  <span>Unverified storage & potency</span>
                </li>
                <li className="flex gap-2">
                  <span className="flex-shrink-0">•</span>
                  <span>Zero accountability</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-6 md:p-7 border border-green-200">
              <h3 className="text-lg md:text-xl font-serif font-bold text-green-900 mb-4">✅ VELA's regulated</h3>
              <ul className="space-y-2 text-sm md:text-base text-green-800">
                <li className="flex gap-2">
                  <span className="flex-shrink-0">•</span>
                  <span>AHPRA-registered doctors</span>
                </li>
                <li className="flex gap-2">
                  <span className="flex-shrink-0">•</span>
                  <span>TGA-licensed pharmacy</span>
                </li>
                <li className="flex gap-2">
                  <span className="flex-shrink-0">•</span>
                  <span>Clinical monitoring & adjustments</span>
                </li>
                <li className="flex gap-2">
                  <span className="flex-shrink-0">•</span>
                  <span>Full accountability & oversight</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance FAQ */}
      <section className="bg-background py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-accent text-base md:text-lg font-semibold mb-2">COMPLIANCE & TRANSPARENCY</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-3">
              Clear regulatory framework
            </h2>
            <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
              Peptide therapy is regulated in Australia. We built this program around those requirements — not despite them.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 md:p-8 border border-primary/10">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-foreground/10 last:border-0">
                  <AccordionTrigger className="text-left font-serif font-bold text-foreground hover:text-accent transition-colors py-3 md:py-4 text-sm md:text-base">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 pb-3 md:pb-4 text-sm md:text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-primary to-primary/95 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-accent text-base md:text-lg font-semibold mb-3">READY TO OPTIMISE?</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-4">
            Find out if our program is right for you.
          </h2>
          <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Complete a short eligibility assessment. No commitment. No clinical recommendations until you've spoken with a doctor.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <a href="/quiz" className="bg-accent text-primary hover:bg-accent/90 px-6 md:px-8 py-3 md:py-4 rounded-lg font-sans font-semibold inline-flex items-center justify-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg w-full sm:w-auto">
              Start assessment
              <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
            </a>
            <button className="border-2 border-white text-white hover:bg-white/10 px-6 md:px-8 py-3 md:py-4 rounded-lg font-sans font-semibold transition-colors duration-200 w-full sm:w-auto">
              Join waitlist
            </button>
          </div>
          <p className="text-xs md:text-sm text-white/60">
            Takes 3–5 minutes. Your data is handled under Australia's Privacy Act.
          </p>
        </div>
      </section>
    </div>
  );
}
