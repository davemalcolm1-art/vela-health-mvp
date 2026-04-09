import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-section-heading text-foreground mb-4">
            Why we built this, and how we run it.
          </h1>
          <p className="text-subheading text-foreground/70 max-w-2xl mx-auto">
            A transparent look at our clinical philosophy, governance, and regulatory approach.
          </p>
        </div>
      </section>

      {/* The Thesis */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-section-heading text-foreground mb-8">
            The Thesis
          </h2>
          <div className="space-y-6 text-body text-foreground/70">
            <p>
              Most health interventions are reactive. You wait until something breaks, then you fix it. But for professionals in their 30s, 40s, and 50s who are already healthy and high-performing, there's a better approach: proactive optimisation.
            </p>
            <p>
              Peptide therapy sits upstream of hormonal intervention. It's the intelligent step before TRT, before GLP-1, before invasive procedures. It's measurable, reversible, and grounded in clinical evidence. But it's also regulated, which means it requires a doctor, a pharmacy, and a system built around compliance.
            </p>
            <p>
              We built VELA Health to make that system accessible. Not as a supplement company. Not as a grey-market supplier. As a regulated medical service, run by AHPRA-registered practitioners, dispensing through TGA-licensed pharmacies, and monitoring every patient with quarterly blood work.
            </p>
            <p>
              Science before shortcuts. Data before guesswork. Peptides before TRT.
            </p>
          </div>
        </div>
      </section>

      {/* Clinical Governance */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-section-heading text-foreground mb-8">
            Clinical Governance
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                Every patient is assessed individually
              </h3>
              <p className="text-body text-foreground/70 mb-4">
                Before any prescription is issued, an AHPRA-registered doctor reviews your health history, blood panel, and goals. This is not an automated process. It's a clinical assessment. If we determine a program is not appropriate for you, we refund your consultation fee in full and refer you to appropriate care.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                Informed consent is mandatory
              </h3>
              <p className="text-body text-foreground/70 mb-4">
                Before any prescription, you complete a full informed consent process with your doctor. You understand the mechanism, the risks, the monitoring requirements, and the expected timeline. You're not a customer. You're a patient.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                Monitoring is ongoing
              </h3>
              <p className="text-body text-foreground/70 mb-4">
                4-week check-in. 12-week blood panel and review. Quarterly reviews thereafter. We're not selling you a product and disappearing. We're managing your care.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                Disqualifying conditions are respected
              </h3>
              <p className="text-body text-foreground/70 mb-4">
                Some patients shouldn't be on peptides. We identify these during the eligibility assessment and refer them to appropriate care. This is not a business decision. It's a clinical one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-section-heading text-foreground mb-8">
            Regulatory Compliance
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                AHPRA Registration
              </h3>
              <p className="text-body text-foreground/70">
                All prescribing doctors are AHPRA-registered medical practitioners. Their registration is verified before any patient interaction. You can verify any doctor's registration at <a href="https://www.ahpra.gov.au" className="text-accent hover:underline">ahpra.gov.au</a>.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                TGA Licensing
              </h3>
              <p className="text-body text-foreground/70">
                All compounding pharmacies are TGA-licensed and PRASA-audited. Every batch includes a Certificate of Analysis (COA). We don't use overseas suppliers or grey-market sources.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                Therapeutic Goods Act 1989
              </h3>
              <p className="text-body text-foreground/70">
                We comply with the Therapeutic Goods Act 1989 and the Therapeutic Goods Advertising Code 2021. We don't make therapeutic claims. We don't name specific compounds in advertising. We don't publish patient testimonials.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                Privacy Act 1988
              </h3>
              <p className="text-body text-foreground/70">
                All patient data is handled under the Privacy Act 1988. We don't sell data to third parties. We don't use patient information for marketing. Your data is yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Doctors */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-section-heading text-foreground mb-8">
            Our Clinical Team
          </h2>
          <p className="text-body text-foreground/70 mb-8">
            Our clinical team are AHPRA-registered practitioners with experience in integrative and preventive medicine. Doctor profiles and credentials are provided at consultation booking. We're building a team of clinicians who understand both the science and the regulatory landscape.
          </p>
          <div className="bg-muted rounded-lg p-8 border border-border">
            <p className="text-body text-foreground/70 italic">
              Doctor profiles coming soon. We're currently onboarding our clinical team and will publish full credentials and experience here.
            </p>
          </div>
        </div>
      </section>

      {/* Our Pharmacies */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-section-heading text-foreground mb-8">
            Our Pharmacy Partners
          </h2>
          <p className="text-body text-foreground/70 mb-8">
            All our pharmacy partners are TGA-licensed and PRASA-audited. They operate under sterile compounding standards and produce a Certificate of Analysis (COA) for every batch. Cold-chain shipping is managed to maintain stability and integrity.
          </p>
          <div className="bg-muted rounded-lg p-8 border border-border">
            <p className="text-body text-foreground/70 italic">
              Pharmacy partner details coming soon. We're finalising partnerships and will publish full details here.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy & Data */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-section-heading text-foreground mb-8">
            Privacy & Data Handling
          </h2>
          <div className="space-y-6 text-body text-foreground/70">
            <p>
              Your health data is sensitive. We treat it accordingly. All data is encrypted in transit and at rest. Access is restricted to your clinical team. We don't sell data to third parties. We don't use your information for marketing purposes beyond your own care.
            </p>
            <p>
              You have the right to access, correct, or delete your data. You have the right to know how your data is used. You have the right to lodge a complaint with the Office of the Australian Information Commissioner (OAIC) if you believe your privacy has been breached.
            </p>
            <p>
              For full details, see our Privacy Policy (coming soon).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
