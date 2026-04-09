import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, CheckCircle2, Users, Shield, Stethoscope } from 'lucide-react';

export default function Home() {
  const programs = [
    {
      id: 'body-composition',
      title: 'Body Composition',
      description: 'Building muscle, reducing fat, improving recomposition',
      color: 'bg-blue-50',
      image: '[IMAGE: Athletic person in gym setting, natural lighting, focused expression]',
    },
    {
      id: 'energy-cognition',
      title: 'Energy & Cognition',
      description: 'Sustained energy, mental clarity, reducing fatigue',
      color: 'bg-purple-50',
      image: '[IMAGE: Professional at desk looking energized and focused, morning light]',
    },
    {
      id: 'recovery-repair',
      title: 'Recovery & Repair',
      description: 'Injury recovery, gut health, reducing inflammation',
      color: 'bg-green-50',
      image: '[IMAGE: Person stretching or in recovery pose, calm environment]',
    },
    {
      id: 'skin-collagen',
      title: 'Skin & Collagen',
      description: 'Skin quality, collagen support, anti-ageing',
      color: 'bg-pink-50',
      image: '[IMAGE: Person with glowing skin, natural skincare aesthetic]',
    },
    {
      id: 'immune-resilience',
      title: 'Immune Resilience',
      description: 'Immune function, cellular health, longevity',
      color: 'bg-amber-50',
      image: '[IMAGE: Healthy person outdoors, vibrant and active]',
    },
    {
      id: 'comprehensive',
      title: 'Comprehensive',
      description: 'Multiple goals, full program',
      color: 'bg-teal-50',
      image: '[IMAGE: Group of diverse people looking healthy and happy]',
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
      {/* Hero Section - Warm & Welcoming */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/95 text-white py-20 md:py-32 relative overflow-hidden">
        {/* Subtle animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="tagline mb-3 text-accent text-lg">Optimise before you intervene.</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              Doctor-led health optimisation.
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Prescribed and monitored by AHPRA-registered practitioners. Evidence-based protocols. Available Australia-wide via telehealth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
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
        </div>
      </section>

      {/* Programs Section - Color-Coded Cards */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <p className="tagline mb-3 text-accent">Our Programs</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Goal-driven health optimisation
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Choose the program that aligns with your health goals. Each includes personalised assessment, blood work, doctor consultation, and ongoing monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <a
                key={program.id}
                href={`/quiz?goal=${program.id}`}
                className={`${program.color} rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer block group fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-white/40 to-white/20 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                  <div className="text-center text-foreground/40 text-sm italic">
                    {program.image}
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-2">
                      {program.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-accent flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Credibility Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center fade-in">
              <div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-3">30,000+</div>
              <p className="text-foreground/70 text-lg">Australians trust VELA Health</p>
            </div>
            <div className="text-center fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-3">100%</div>
              <p className="text-foreground/70 text-lg">Online & discreet consultations</p>
            </div>
            <div className="text-center fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-3">4.8★</div>
              <p className="text-foreground/70 text-lg">Average patient satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <p className="tagline mb-3 text-accent">The Process</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              A clinical process, not a subscription signup.
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Here's exactly what happens from your first visit to your first quarterly review.
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {[
              { step: 1, title: 'Eligibility Assessment', desc: 'Complete a quick quiz to see if you\'re a candidate' },
              { step: 2, title: 'Blood Panel', desc: 'Arrange a pathology test at your local clinic' },
              { step: 3, title: 'Doctor Consultation', desc: 'Connect with an AHPRA-registered doctor via video' },
              { step: 4, title: 'Prescription & Compounding', desc: 'Personalised protocol created by our pharmacy' },
              { step: 5, title: '4-Week Check-In', desc: 'Monitoring and adjustment of your protocol' },
              { step: 6, title: 'Quarterly Review', desc: 'Ongoing clinical oversight and optimisation' },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-primary font-serif font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-lg md:text-xl font-serif font-bold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70">
                    {item.desc}
                  </p>
                </div>
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

      {/* Compliance & Transparency Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <p className="tagline mb-3 text-accent">Compliance & Transparency</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              We operate within a clear regulatory framework.
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
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
      <section className="bg-gradient-to-br from-primary to-primary/95 text-white py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <p className="tagline mb-3 text-accent">Ready to optimise?</p>
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
