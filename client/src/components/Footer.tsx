import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-2">VELA</h3>
            <p className="text-sm opacity-80">Optimise before you intervene.</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans font-semibold mb-4 text-sm uppercase tracking-wide">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <a className="opacity-80 hover:opacity-100 transition-opacity">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/how-it-works">
                  <a className="opacity-80 hover:opacity-100 transition-opacity">How It Works</a>
                </Link>
              </li>
              <li>
                <Link href="/programs">
                  <a className="opacity-80 hover:opacity-100 transition-opacity">Programs</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="opacity-80 hover:opacity-100 transition-opacity">About</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="opacity-80 hover:opacity-100 transition-opacity">Blog</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-sans font-semibold mb-4 text-sm uppercase tracking-wide">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#privacy" className="opacity-80 hover:opacity-100 transition-opacity">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="opacity-80 hover:opacity-100 transition-opacity">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#refund" className="opacity-80 hover:opacity-100 transition-opacity">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-sans font-semibold mb-4 text-sm uppercase tracking-wide">Follow</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#instagram" className="opacity-80 hover:opacity-100 transition-opacity">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#linkedin" className="opacity-80 hover:opacity-100 transition-opacity">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#tiktok" className="opacity-80 hover:opacity-100 transition-opacity">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 my-8 pt-8">
          {/* ABN and Compliance Info */}
          <div className="mb-6 text-xs opacity-70 space-y-2">
            <p>ABN: [INSERT ABN]</p>
          </div>

          {/* AHPRA Disclaimer */}
          <div className="bg-background/10 p-6 rounded-lg mb-6">
            <p className="text-xs leading-relaxed opacity-90">
              This website contains general health information only. It does not constitute medical advice and does not advertise, supply, or promote prescription-only medicines. All prescription decisions are made solely by an AHPRA-registered medical practitioner following an individual clinical consultation. VELA Health operates in compliance with the Therapeutic Goods Act 1989, the Therapeutic Goods Advertising Code 2021, and AHPRA Guidelines on Advertising Regulated Health Services.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-xs opacity-70 text-center">
            <p>© 2026 VELA Health. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
