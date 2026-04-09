import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, CheckCircle2, Users, Shield, Stethoscope, TrendingUp, Zap, Heart } from 'lucide-react';

export default function Home() {
  const programs = [
    {
      id: 'body-composition',
      title: 'Body Composition',
      description: 'Building muscle, reducing fat, improving recomposition',
      icon: '💪',
      color: 'from-blue-100 to-blue-50',
      stat: 'Up to 12% fat loss',
    },
    {
      id: 'energy-cognition',
      title: 'Energy & Cognition',
      description: 'Sustained energy, mental clarity, reducing fatigue',
      icon: '⚡',
      color: 'from-purple-100 to-purple-50',
      stat: '3x energy improvement',
    },
    {
      id: 'recovery-repair',
      title: 'Recovery & Repair',
      description: 'Injury recovery, gut health, reducing inflammation',
      icon: '🔄',
      color: 'from-green-100 to-green-50',
      stat: '50% faster recovery',
    },
    {
      id: 'skin-collagen',
      title: 'Skin & Collagen',
      description: 'Skin quality, collagen support, anti-ageing',
      icon: '✨',
      color: 'from-pink-100 to-pink-50',
      stat: 'Visible in 8 weeks',
    },
    {
      id: 'immune-resilience',
      title: 'Immune Resilience',
      description: 'Immune function, cellular health, longevity',
      icon: '🛡️',
      color: 'from-amber-100 to-amber-50',
      stat: '40% fewer sick days',
    },
    {
      id: 'comprehensive',
      title: 'Comprehensive',
      description: 'Multiple goals, full program',
      icon: '📊',
      color: 'from-teal-100 to-teal-50',
      stat: 'All benefits combined',
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
    <div className="w-full bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/95 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent text-lg font-semibold mb-3">Optimise before you intervene.</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                Doctor-led health optimisation.
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Prescribed and monitored by AHPRA-registered practitioners. Evidence-based protocols. Available Australia-wide via telehealth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="/quiz" className="bg-accent text-primary hover:bg-accent/90 px-8 py-4 rounded-lg font-sans font-semibold inline-flex items-center justify-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Check eligibility
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#how-it-works" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-sans font-semibold inline-flex items-center justify-center gap-2 transition-colors duration-200">
                  See how it works
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              <div className="space-y-2 text-sm text-white/80">
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
            <div className="hidden md:flex items-center justify-center">
              <div className="w-full aspect-square bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center border-2 border-accent/20">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏥</div>
                  <p className="text-white/60 italic">[IMAGE: Healthcare professional in modern clinic setting]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Credibility Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center fade-in">
              <div className="text-3xl md:text-4xl font-serif font-bold text-accent mb-2">30,000+</div>
              <p className="text-foreground/70 text-sm md:text-base">Australians optimising their health</p>
            </div>
            <div className="text-center fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl md:text-4xl font-serif font-bold text-accent mb-2">100%</div>
              <p className="text-foreground/70 text-sm md:text-base">Online & discreet</p>
            </div>
            <div className="text-center fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl md:text-4xl font-serif font-bold text-accent mb-2">4.8★</div>
              <p className="text-foreground/70 text-sm md:text-base">Patient satisfaction</p>
            </div>
            <div className="text-center fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl md:text-4xl font-serif font-bold text-accent mb-2">2-3 weeks</div>
              <p className="text-foreground/70 text-sm md:text-base">From assessment to prescription</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section - Visual Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <p className="text-accent text-lg font-semibold mb-3">Our Programs</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              Goal-driven health <span className="text-accent">optimisation</span>
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl">
              Choose the program that aligns with your health goals. Each includes personalised assessment, blood work, doctor consultation, and ongoing monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <a
                key={program.id}
                href={`/quiz?goal=${program.id}`}
                className={`bg-gradient-to-br ${program.color} rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group fade-in border border-white/50`}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{program.icon}</div>
                  <ArrowRight className="w-5 h-5 text-primary/40 group-hover:text-primary/70 transition-colors" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-2">
                  {program.title}
                </h3>
                <p className="text-primary/70 text-sm md:text-base leading-relaxed mb-4">
                  {program.description}
                </p>
                <div className="pt-4 border-t border-primary/20">
                  <p className="text-sm font-semibold text-accent">{program.stat}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <p className="text-accent text-lg font-semibold mb-3">The Process</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              A clinical process, <span className="text-accent">not a subscription signup.</span>
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl">
              Here's exactly what happens from your first visit to your first quarterly review.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { step: 1, title: 'Eligibility Assessment', desc: 'Complete a quick quiz to see if you\'re a candidate', icon: '📋' },
              { step: 2, title: 'Blood Panel', desc: 'Arrange a pathology test at your local clinic', icon: '🩸' },
              { step: 3, title: 'Doctor Consultation', desc: 'Connect with an AHPRA-registered doctor via video', icon: '👨‍⚕️' },
              { step: 4, title: 'Prescription & Compounding', desc: 'Personalised protocol created by our pharmacy', icon: '💊' },
              { step: 5, title: '4-Week Check-In', desc: 'Monitoring and adjustment of your protocol', icon: '📞' },
              { step: 6, title: 'Quarterly Review', desc: 'Ongoing clinical oversight and optimisation', icon: '📊' },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 fade-in border border-primary/10" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-accent text-primary font-serif font-bold flex items-center justify-center text-sm">
                    {item.step}
                  </div>
                  <h3 className="text-lg md:text-xl font-serif font-bold text-foreground">
                    {item.title}
                  </h3>
                </div>
                <p className="text-foreground/70 text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="/how-it-works" className="inline-flex items-center justify-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors">
              Learn the full process
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Why VELA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <p className="text-accent text-lg font-semibold mb-3">Why VELA</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              The <span className="text-accent">regulated</span> difference
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-50 rounded-xl p-8 border border-red-200">
              <h3 className="text-xl font-serif font-bold text-red-900 mb-4">❌ Unregulated overseas peptides</h3>
              <ul className="space-y-3 text-red-800">
                <li className="flex gap-3">
                  <span className="flex-shrink-0">•</span>
                  <span>Unknown origins & impurities</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0">•</span>
                  <span>No medical oversight or dosage guidance</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0">•</span>
                  <span>Unverified storage & potency</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0">•</span>
                  <span>Zero accountability if adverse effects occur</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-8 border border-green-200">
              <h3 className="text-xl font-serif font-bold text-green-900 mb-4">✅ VELA's regulated approach</h3>
              <ul className="space-y-3 text-green-800">
                <li className="flex gap-3">
                  <span className="flex-shrink-0">•</span>
                  <span>AHPRA-registered doctor prescriptions</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0">•</span>
                  <span>TGA-licensed compounding pharmacy</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0">•</span>
                  <span>Documented clinical monitoring & adjustments</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0">•</span>
                  <span>Full accountability & medical oversight</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & FAQ Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <p className="text-accent text-lg font-semibold mb-3">Compliance & Transparency</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              We operate within a clear <span className="text-accent">regulatory framework.</span>
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl">
              Peptide therapy is a regulated medical practice in Australia. Prescriptions require an AHPRA-registered doctor, supply requires a TGA-licensed pharmacy, and ongoing care requires documented clinical monitoring. We built this program around those requirements — not despite them.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 md:p-12">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-foreground/10 last:border-0">
                  <AccordionTrigger className="text-left font-serif font-bold text-foreground hover:text-accent transition-colors py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-primary to-primary/95 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <p className="text-accent text-lg font-semibold mb-3">Ready to optimise?</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Find out if our program is right for you.
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Complete a short eligibility assessment. No commitment. No clinical recommendations until you've spoken with a doctor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a href="/quiz" className="bg-accent text-primary hover:bg-accent/90 px-8 py-4 rounded-lg font-sans font-semibold inline-flex items-center justify-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl">
              Start eligibility assessment
              <ArrowRight className="w-5 h-5" />
            </a>
            <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-sans font-semibold transition-colors duration-200">
              Join the waitlist
            </button>
          </div>
          <p className="text-sm text-white/60">
            Takes 3–5 minutes. Your data is handled under Australia's Privacy Act.
          </p>
        </div>
      </section>
    </div>
  );
}
