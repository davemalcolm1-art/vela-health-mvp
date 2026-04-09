import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function Programs() {
  const programs = [
    {
      id: 'body-composition',
      title: 'Body Composition Program',
      goal: 'Building muscle, reducing fat, improving recomposition',
      forWho: 'Professionals seeking to optimise body composition while maintaining energy and performance.',
      assessment: 'Body composition analysis, metabolic markers, hormone levels (testosterone, IGF-1), muscle protein synthesis indicators.',
      mechanism: 'Growth hormone axis support and metabolic optimisation through targeted peptide protocols.',
      bloodPanel: 'IGF-1, testosterone (total and free), SHBG, cortisol, glucose, lipid panel, liver function.',
      monitoring: 'Monthly progress assessments, quarterly blood work reviews.',
      monthlyPrice: '$200–400',
      terms: 'Minimum 12-week commitment. Adjustments based on clinical response.',
    },
    {
      id: 'energy-cognition',
      title: 'Energy & Cognition Program',
      goal: 'Sustained energy, mental clarity, reducing fatigue',
      forWho: 'High-performing professionals managing fatigue, brain fog, or declining mental performance.',
      assessment: 'Cognitive function screening, fatigue severity, sleep quality, metabolic markers, mitochondrial health indicators.',
      mechanism: 'Mitochondrial function support and neuroprotection through peptide-based protocols.',
      bloodPanel: 'Metabolic panel, thyroid function (TSH, T3, T4), B12, folate, iron studies, glucose, cortisol.',
      monitoring: 'Bi-weekly energy and cognition tracking, quarterly blood work.',
      monthlyPrice: '$250–450',
      terms: 'Minimum 12-week commitment. Cognitive improvements typically visible within 4–6 weeks.',
    },
    {
      id: 'recovery-repair',
      title: 'Recovery & Repair Program',
      goal: 'Injury recovery, gut health, reducing inflammation',
      forWho: 'Athletes, active professionals, or those managing chronic inflammation or recovering from injury.',
      assessment: 'Injury history, inflammatory markers, gut health assessment, tissue repair capacity.',
      mechanism: 'Tissue repair acceleration and anti-inflammatory support through targeted peptide protocols.',
      bloodPanel: 'CRP, inflammatory markers, collagen turnover markers, gut permeability indicators, amino acid profile.',
      monitoring: 'Weekly functional assessments, monthly inflammation markers, quarterly comprehensive review.',
      monthlyPrice: '$300–500',
      terms: 'Minimum 12-week commitment. Recovery timelines vary; clinical assessment guides protocol adjustments.',
    },
    {
      id: 'skin-collagen',
      title: 'Skin & Collagen Program',
      goal: 'Skin quality, collagen support, anti-ageing',
      forWho: 'Professionals investing in skin health, collagen integrity, and age-related skin optimisation.',
      assessment: 'Skin elasticity, hydration, collagen markers, photoaging assessment, skin barrier function.',
      mechanism: 'Collagen synthesis support and skin barrier optimisation through peptide protocols.',
      bloodPanel: 'Collagen turnover markers, hyaluronic acid levels, skin-specific biomarkers, antioxidant status.',
      monitoring: 'Monthly skin assessments, quarterly blood work, photography documentation.',
      monthlyPrice: '$250–400',
      terms: 'Minimum 12-week commitment. Visible skin improvements typically within 8–12 weeks.',
    },
    {
      id: 'immune-resilience',
      title: 'Immune Resilience Program',
      goal: 'Immune function, cellular health, longevity',
      forWho: 'Health-conscious professionals seeking to optimise immune function and cellular health.',
      assessment: 'Immune function markers, cellular senescence indicators, longevity biomarkers.',
      mechanism: 'Immune system optimisation and cellular health support through longevity-focused peptide protocols.',
      bloodPanel: 'Immune cell counts, inflammatory markers, telomere length, NAD+ levels, metabolic health markers.',
      monitoring: 'Quarterly immune function assessments, annual comprehensive longevity panel.',
      monthlyPrice: '$300–500',
      terms: 'Minimum 12-week commitment. Longevity benefits compound over time; ongoing monitoring recommended.',
    },
    {
      id: 'comprehensive',
      title: 'Comprehensive Program',
      goal: 'Multiple goals, full optimisation',
      forWho: 'Professionals seeking a complete health optimisation strategy addressing multiple domains.',
      assessment: 'Full-spectrum health assessment covering all major health domains and performance metrics.',
      mechanism: 'Integrated peptide protocols addressing multiple physiological systems simultaneously.',
      bloodPanel: 'Comprehensive panel including all markers from other programs, plus additional longevity biomarkers.',
      monitoring: 'Bi-weekly check-ins, monthly assessments, quarterly comprehensive reviews.',
      monthlyPrice: '$500–800',
      terms: 'Minimum 12-week commitment. Personalised protocol adjustments based on comprehensive data.',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-section-heading text-foreground mb-4">
            Our Programs
          </h1>
          <p className="text-subheading text-foreground/70 max-w-2xl mx-auto">
            Goal-driven health optimisation, tailored to your needs. Each program is designed around your primary health objective.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div
                key={program.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-start pb-16 border-b border-border last:border-b-0 last:pb-0 ${
                  index % 2 === 1 ? 'md:grid-cols-2 md:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div>
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                    {program.title}
                  </h2>
                  <p className="text-body text-accent font-semibold mb-6">
                    {program.goal}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-sans font-semibold text-foreground mb-2">For whom?</h4>
                      <p className="text-body text-foreground/70">{program.forWho}</p>
                    </div>

                    <div>
                      <h4 className="font-sans font-semibold text-foreground mb-2">What we assess</h4>
                      <p className="text-body text-foreground/70">{program.assessment}</p>
                    </div>

                    <div>
                      <h4 className="font-sans font-semibold text-foreground mb-2">Mechanism</h4>
                      <p className="text-body text-foreground/70">{program.mechanism}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-lg p-8 border border-border h-fit">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-sans font-semibold text-foreground mb-2">Blood panel</h4>
                      <p className="text-small text-foreground/70">{program.bloodPanel}</p>
                    </div>

                    <div>
                      <h4 className="font-sans font-semibold text-foreground mb-2">Monitoring</h4>
                      <p className="text-small text-foreground/70">{program.monitoring}</p>
                    </div>

                    <div className="border-t border-border pt-6">
                      <p className="text-small text-foreground/60 mb-2">Monthly investment</p>
                      <p className="text-2xl font-serif font-bold text-foreground mb-2">
                        {program.monthlyPrice}
                      </p>
                      <p className="text-small text-foreground/60 mb-6">{program.terms}</p>

                      <Link href={`/quiz?goal=${program.id}`} className="block">
                        <Button className="w-full btn-primary">
                          Check eligibility
                        </Button>
                      </Link>
                    </div>
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
            Not sure which program is right for you?
          </h2>
          <p className="text-subheading text-background/80 max-w-2xl mx-auto mb-8">
            Start with our eligibility assessment. Our clinical team will guide you to the right program.
          </p>
          <Link href="/quiz">
            <Button className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-3">
              Start assessment
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
