# VELA Health MVP — Project TODO

## Design System & Core Infrastructure
- [x] Global CSS variables and Tailwind config (deep navy, sage green, off-white, typography)
- [x] Google Fonts integration (Cormorant Garamond, Inter)
- [x] Layout wrapper and responsive grid system
- [x] Navigation component (sticky header with logo, nav items, CTA button)
- [x] Footer component with AHPRA disclaimer, ABN placeholder, links
- [x] Micro-interactions (fade-in on scroll, hover states, smooth transitions)

## Database & Backend
- [x] Create quiz_responses table to store quiz submissions
- [x] Create waitlist_signups table for email capture
- [x] Create tRPC procedures for quiz submission and email capture
- [x] Implement owner notification system for quiz leads and waitlist signups
- [x] Add validation and error handling for all submissions

## Pages & Features
- [x] Homepage
  - [x] Hero section with headline, subheading, dual CTAs
  - [x] Trust signals row (AHPRA, TGA, telehealth)
  - [x] Program cards (6 goals + comprehensive)
  - [x] Compliance FAQ accordion (6 questions)
  - [x] Final CTA section with waitlist option
- [x] How It Works page
  - [x] Hero section
  - [x] 6-step vertical timeline (eligibility, blood panel, consultation, prescription, 4-week check-in, 12-week review)
  - [x] Bottom CTA to quiz
- [x] Our Programs page
  - [x] 6 program cards (body composition, energy, recovery, skin, immune, comprehensive)
  - [x] Each card links to quiz with goal pre-selected
  - [x] No compound names per AHPRA
- [x] About / Our Approach page
  - [x] Clinic thesis section
  - [x] Clinical governance section
  - [x] Regulatory compliance section
  - [x] Doctor profiles placeholder
  - [x] Pharmacy partners placeholder
  - [x] Privacy policy summary
- [x] Eligibility Quiz (8-step flow)
  - [x] Intro screen
  - [x] Step 1: Primary goal selection
  - [x] Step 2: Current health baseline
  - [x] Step 3: Specific symptoms/concerns
  - [x] Step 4: Current medications/supplements
  - [x] Step 5: Blood work history
  - [x] Step 6: Sport/competition status
  - [x] Step 7: Lifestyle factors
  - [x] Step 8: Contact info and email capture
  - [x] Progress bar on all steps
  - [ ] Exit-intent email capture modal
  - [ ] Loading animation before results (2 seconds)
  - [ ] Soft disqualification flow for ineligible patients
- [x] Quiz Results page
  - [x] Personalised program recommendation
  - [x] Email capture gate before Calendly widget
  - [x] Calendly embed placeholder
  - [x] AHPRA disclaimer
  - [x] Trigger owner notification on email submission
- [x] Book a Consultation page
  - [x] Full Calendly embed placeholder
  - [x] Clinic info and process explanation
- [x] Thank You / Confirmation page
  - [x] Confirmation message
  - [x] Next steps information
  - [x] Link back to homepage
- [x] Blog page
  - [x] Placeholder blog post cards
  - [x] Coming soon messaging

## Email & Notifications
- [x] Email capture form component (reusable)
- [x] Owner notification trigger on waitlist signup
- [x] Owner notification trigger on quiz completion
- [x] Email validation and duplicate prevention

## Testing & QA
- [ ] Unit tests for quiz logic
- [ ] Unit tests for email capture
- [x] Responsive design testing (mobile, tablet, desktop)
- [x] AHPRA compliance review (no compound names, no testimonials, disclaimer present)
- [ ] Cross-browser testing
- [ ] Accessibility audit (keyboard navigation, color contrast)

## Deployment & Final Steps
- [x] Verify all pages load correctly
- [x] Check all CTAs route to correct pages
- [ ] Confirm quiz flow works end-to-end
- [ ] Test email capture and notifications
- [x] Final AHPRA compliance check
- [ ] Performance optimization
- [ ] Create checkpoint and prepare for delivery
