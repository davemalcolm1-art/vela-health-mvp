export default function BookConsultation() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-section-heading text-foreground mb-4">
            Book a consultation
          </h1>
          <p className="text-subheading text-foreground/70 max-w-2xl mx-auto">
            Schedule a 30-minute telehealth consultation with one of our AHPRA-registered doctors.
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-card rounded-lg p-8 border border-border mb-12">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
              What to expect
            </h2>
            <div className="space-y-4 text-body text-foreground/70">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-foreground mb-1">
                    Secure video call
                  </h3>
                  <p>30-minute consultation via secure video with your doctor</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-foreground mb-1">
                    Full assessment
                  </h3>
                  <p>Your doctor reviews your blood work, health history, and goals</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-foreground mb-1">
                    Informed consent
                  </h3>
                  <p>Complete informed consent process and discuss your options</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-foreground mb-1">
                    Personalised plan
                  </h3>
                  <p>If appropriate, your doctor issues an individualised care plan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Calendly Placeholder */}
          <div className="bg-card rounded-lg p-12 border border-border text-center">
            <p className="text-foreground/70 mb-4">
              Calendly booking widget will appear here
            </p>
            <p className="text-small text-foreground/50">
              Placeholder for Calendly embed
            </p>
          </div>

          {/* Important Notes */}
          <div className="mt-12 space-y-6">
            <div className="bg-muted rounded-lg p-6 border border-border">
              <h3 className="font-sans font-semibold text-foreground mb-3">
                Before your consultation
              </h3>
              <ul className="space-y-2 text-body text-foreground/70">
                <li>• Ensure you have your blood panel results ready</li>
                <li>• Have your health history and current medications available</li>
                <li>• Find a quiet space for your video call</li>
                <li>• Test your internet connection beforehand</li>
              </ul>
            </div>

            <div className="bg-muted rounded-lg p-6 border border-border">
              <h3 className="font-sans font-semibold text-foreground mb-3">
                Consultation fee
              </h3>
              <p className="text-body text-foreground/70">
                $350 per consultation. If our doctor determines a program is not appropriate for you at this time, we'll refund your consultation fee in full.
              </p>
            </div>
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
