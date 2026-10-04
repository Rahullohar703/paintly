import React from 'react';
import { Heart, UserCheck, Clock, ShieldCheck, XCircle, CheckCircle2 } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ArrowFillButton } from '../components/common/ArrowFillButton';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section className="pt-8 pb-14 md:pt-14 md:pb-20 border-b border-[#E5E3DE] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'About Us' }]} className="mb-6" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#fbf2ee] text-xs font-bold uppercase tracking-wider text-[#D9683B]">
                <Heart className="h-4 w-4" />
                Painters Who Care
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#20211F] tracking-tight leading-[1.15]">
                Painting Your House Like It Was Our Own.
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[#73736F] leading-relaxed">
                We started Paintly because getting your house painted shouldn’t give you a headache. No paint drops on your sofas, no surprise bills, and no painters who vanish halfway through the job.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <ArrowFillButton
                  to="/quote"
                  size="lg"
                  text="Book Free Home Visit"
                  baseBg="#D9683B"
                  fillBg="#20211F"
                  textColor="#ffffff"
                  fillTextColor="#FAF9F6"
                  badgeBg="rgba(255, 255, 255, 0.2)"
                  className="shadow-md"
                />

                <ArrowFillButton
                  to="/services"
                  size="lg"
                  text="See What We Paint"
                  baseBg="#ffffff"
                  fillBg="#F1F0EC"
                  textColor="#20211F"
                  fillTextColor="#20211F"
                  badgeBg="#E5E3DE"
                  badgeTextColor="#20211F"
                  className="border border-[#D1CEC6] shadow-xs"
                />
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border-2 border-[#E5E3DE] shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80"
                  alt="Paintly craftsman carefully taping edges before painting"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE CONTRACTOR STANDARD: UNREGULATED MARKET VS THE PAINTLY PROTOCOL */}
      <section className="py-20 md:py-28 border-b border-[#E5E3DE] bg-[#F1F0EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9683B]">
              Contractor Standards
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#20211F]">
              The Traditional Painter vs The Paintly Protocol
            </h2>
            <p className="text-sm sm:text-base text-[#73736F] leading-relaxed">
              Why discerning homeowners, architects, and busy families trust our documented engineering workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            {/* Conventional Painter */}
            <div className="rounded-3xl border border-[#E5E3DE] bg-white p-8 sm:p-10 space-y-6 flex flex-col justify-between shadow-xs">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-500">
                    <XCircle className="w-5 h-5 text-rose-500" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">Unregulated Practice</span>
                    <h3 className="font-heading text-xl font-bold text-[#20211F]">Conventional Painters</h3>
                  </div>
                </div>

                <ul className="space-y-4 text-xs sm:text-sm text-[#4A4B46]">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</span>
                    <span className="leading-snug"><strong>Minimal protection:</strong> Old newspapers loosely taped; paint mist and splatters on floors, marble, and switches.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</span>
                    <span className="leading-snug"><strong>Unverified paint cans:</strong> Diluted paints or opened containers brought from other sites that flake within months.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</span>
                    <span className="leading-snug"><strong>Vague Verbal Estimates:</strong> Low initial quotes that escalate with surprise bills for tape, putty, or overtime halfway through.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</span>
                    <span className="leading-snug"><strong>Messy Abandonment:</strong> Dust, dried drips, and unwashed tools left for the homeowner to clean up alone.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[#E5E3DE] text-xs text-stone-500 font-medium">
                Risk of wall peeling, hidden expenses & property damage
              </div>
            </div>

            {/* The Paintly Standard */}
            <div className="rounded-3xl bg-[#20211F] text-white p-8 sm:p-10 space-y-6 flex flex-col justify-between shadow-xl ring-2 ring-[#D9683B]/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9683B]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#D9683B]/20 border border-[#D9683B]/30 flex items-center justify-center text-[#D9683B]">
                    <CheckCircle2 className="w-5 h-5 text-[#D9683B]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#D9683B] uppercase tracking-wider">Documented Protocol</span>
                    <h3 className="font-heading text-xl font-bold text-white">The Paintly Standard</h3>
                  </div>
                </div>

                <ul className="space-y-4 text-xs sm:text-sm text-[#E5E3DE]">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#D9683B]/20 border border-[#D9683B]/40 text-[#D9683B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                    <span className="leading-snug"><strong>Hermetic Masking:</strong> Heavy-gauge polythene film sealed around every electronic item, sofa, bed, and floor perimeter.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#D9683B]/20 border border-[#D9683B]/40 text-[#D9683B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                    <span className="leading-snug"><strong>100% Sealed Batch Cans:</strong> Genuine Asian Paints & Berger buckets unboxed and seal-broken in front of you.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#D9683B]/20 border border-[#D9683B]/40 text-[#D9683B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                    <span className="leading-snug"><strong>Itemized Fixed-Price Contract:</strong> Every wall square foot, paint grade, and milestone cost locked on paper beforehand.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#D9683B]/20 border border-[#D9683B]/40 text-[#D9683B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                    <span className="leading-snug"><strong>Spotless Handover & 3-Yr Warranty:</strong> Floors swept clean, furniture replaced, and signed warranty certificate issued.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-[#CDCAC2] font-medium relative z-10 flex items-center justify-between">
                <span>Certified 3-Year No-Peel Guarantee</span>
                <span className="text-[#D9683B] font-bold">100% Written Assurance</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CORE COMMITMENTS */}
      <section className="py-20 md:py-28 border-b border-[#E5E3DE] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9683B]">
              Our Guarantees
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#20211F]">
              Professional Standards You Can Count On
            </h2>
            <p className="text-sm sm:text-base text-[#73736F]">
              Every project is managed with courteous communication, punctual timelines, and lasting accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl border border-[#E5E3DE] p-8 space-y-4 shadow-xs hover:border-[#20211F]/30 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF9F6] border border-[#E5E3DE] flex items-center justify-center text-[#D9683B]">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#20211F]">Vetted & Polite Craftsmen</h3>
              <p className="text-xs sm:text-sm text-[#73736F] leading-relaxed">
                All our painters are background-checked, uniformed professionals who respect family privacy, maintain a quiet work environment, and follow strict non-smoking, clean-site guidelines.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-[#E5E3DE] p-8 space-y-4 shadow-xs hover:border-[#20211F]/30 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF9F6] border border-[#E5E3DE] flex items-center justify-center text-[#D9683B]">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#20211F]">Strict Milestone Timelines</h3>
              <p className="text-xs sm:text-sm text-[#73736F] leading-relaxed">
                We commit to exact start dates and finish days in writing. A dedicated project supervisor tracks daily progress so your home is ready and handed over without unexpected delays.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-[#E5E3DE] p-8 space-y-4 shadow-xs hover:border-[#20211F]/30 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF9F6] border border-[#E5E3DE] flex items-center justify-center text-[#D9683B]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#20211F]">Post-Handover Support</h3>
              <p className="text-xs sm:text-sm text-[#73736F] leading-relaxed">
                We never disappear after payment. Every project includes leftover labelled paint cans for future touch-ups and our supervisor remains directly reachable on WhatsApp for any warranty claims.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-16 md:py-24 bg-[#20211F] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Want an Honest, Mess-Free Painting Experience?
          </h2>
          <p className="text-base sm:text-lg text-[#CDCAC2] max-w-xl mx-auto">
            Book a free 15-minute home visit. We will measure your rooms, show you genuine paint shade cards, and give you an exact price.
          </p>
          <div className="pt-2">
            <ArrowFillButton
              to="/quote"
              size="lg"
              text="Schedule Free Home Visit"
              baseBg="#D9683B"
              fillBg="#FAF9F6"
              textColor="#ffffff"
              fillTextColor="#20211F"
              badgeBg="rgba(255, 255, 255, 0.2)"
              badgeTextColor="#ffffff"
              className="shadow-2xl"
            />
          </div>
        </div>
      </section>

    </div>
  );
};
