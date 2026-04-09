import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Our Programs', href: '/programs' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-serif font-bold text-foreground hover:opacity-80 transition-opacity">
            VELA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-sans text-foreground hover:text-accent transition-colors">
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link href="/quiz" className="inline-block">
              <Button className="bg-accent text-accent-foreground hover:opacity-90">
                Check Eligibility
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm font-sans text-foreground hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <Link href="/quiz" className="block" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-accent text-accent-foreground hover:opacity-90">
                  Check Eligibility
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
