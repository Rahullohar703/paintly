import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  BadgePercent, 
  Check,
  Palette,
  MapPin,
  Clock,
  ShieldCheck,
  FileCheck,
  Sparkles,
  Home,
  Layers,
  SearchCheck,
  ClipboardCheck,
  Star
} from 'lucide-react';
import { pricingPackages } from '../data/pricingData';
import { PricingCalculator } from '../components/common/PricingCalculator';
import { ArrowFillButton } from '../components/common/ArrowFillButton';

const wallColorOptions = [
  { name: 'Warm Cream', shade: 'Asian Paints Royale Morning Sun (0412)', hex: '#FAF3E3', description: 'Best for Living Rooms & Halls' },
  { name: 'Sky Breeze', shade: 'Asian Paints Royale Day Break (7380)', hex: '#E2EEF7', description: 'Best for Master Bedrooms' },
  { name: 'Sage Mint', shade: 'Berger Silk Glamour Mint Leaf (4T0916)', hex: '#E4EFE6', description: 'Best for Study & Balconies' },
  { name: 'Soft Peach', shade: 'Asian Paints Coral Blush (0382)', hex: '#FCEBE4', description: 'Best for Dining & Kids Rooms' },
  { name: 'Pearl White', shade: 'Royale Luxury Pure White (L101)', hex: '#F9F9F8', description: 'Classic All-Room Neutral' },
];

export const HomePage: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState(wallColorOptions[0]);

  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION: GROUNDED, HONEST, REAL */}
      <section className="relative pt-6 pb-16 md:pt-12 md:pb-24 border-b border-[#E5E3DE] bg-gradient-to-b from-[#FAF9F6] to-[#F1F0EC]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Big, clear headline and easy actions */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fbf2ee] border border-[#D9683B]/20 text-xs sm:text-sm font-bold text-[#D9683B]">
                <span className="flex h-2 w-2 rounded-full bg-[#D9683B] animate-ping" />
                <span>HOUSE PAINTING CONTRACTORS IN INDIA</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#20211F] tracking-tight leading-[1.15]">
                We Paint Your House. <br />
                <span className="text-[#D9683B]">Neat & Clean. On Time. Fair Price.</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[#73736F] leading-relaxed max-w-xl">
                Got dirty walls, peeling paint, or damp patches? We cover your sofas and beds with plastic sheets, repair wall cracks with smooth putty, and paint with 100% original <strong>Asian Paints & Berger</strong>. Clear written quotation with zero surprise costs.
              </p>

              {/* Big, interactive buttons with expanding fill & dual arrows */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <ArrowFillButton
                  to="/quote"
                  size="lg"
                  text="Book Free Home Visit"
                  baseBg="#D9683B"
                  fillBg="#20211F"
                  textColor="#ffffff"
                  fillTextColor="#FAF9F6"
                  badgeBg="rgba(255, 255, 255, 0.2)"
                  className="shadow-lg hover:shadow-xl w-full sm:w-auto"
                />

                <ArrowFillButton
                  href="#pricing"
                  size="lg"
                  text="See Price Packages"
                  baseBg="#ffffff"
                  fillBg="#F1F0EC"
                  textColor="#20211F"
                  fillTextColor="#20211F"
                  badgeBg="#E5E3DE"
                  badgeTextColor="#D9683B"
                  icon={BadgePercent}
                  className="border border-[#D1CEC6] shadow-sm w-full sm:w-auto"
                />
              </div>

              {/* 3 Craftsman Guarantees */}
              <div className="pt-3 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-semibold text-[#20211F]">
                <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-xs p-3 rounded-xl border border-[#20211F]/10 shadow-xs">
                  <div className="w-7 h-7 rounded-lg bg-[#FAF9F6] border border-[#20211F]/10 flex items-center justify-center shrink-0 text-[#D9683B]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="leading-tight font-medium">100% Sealed Paint Cans</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-xs p-3 rounded-xl border border-[#20211F]/10 shadow-xs">
                  <div className="w-7 h-7 rounded-lg bg-[#FAF9F6] border border-[#20211F]/10 flex items-center justify-center shrink-0 text-[#D9683B]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="leading-tight font-medium">Full Plastic Masking</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-xs p-3 rounded-xl border border-[#20211F]/10 shadow-xs">
                  <div className="w-7 h-7 rounded-lg bg-[#FAF9F6] border border-[#20211F]/10 flex items-center justify-center shrink-0 text-[#D9683B]">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <span className="leading-tight font-medium">Written Fixed Quote</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Real, Clean Painter Photo */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative group overflow-hidden rounded-3xl border-2 border-[#E5E3DE] shadow-lg bg-white">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=80"
                    alt="Professional house painter rolling fresh smooth paint onto a residential wall"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                </div>

                {/* Badge 1 */}
                <div className="absolute top-4 left-4 rounded-xl bg-white/95 backdrop-blur-md px-3.5 py-2.5 border border-[#20211F]/10 shadow-md flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#FAF9F6] border border-[#20211F]/10 flex items-center justify-center shrink-0 text-[#D9683B]">
                    <Home className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#20211F]">Free Home Visit</p>
                    <p className="text-[10px] text-[#73736F]">Room check & original shade cards</p>
                  </div>
                </div>

                {/* Badge 2 */}
                <div className="absolute bottom-4 right-4 rounded-xl bg-[#20211F]/95 backdrop-blur-md px-3.5 py-2 border border-white/10 text-white shadow-md flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-emerald-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold">100% Genuine Paint</p>
                    <p className="text-[10px] text-[#CDCAC2]">Asian Paints & Berger sealed cans</p>
                  </div>
                </div>
              </div>

              {/* Color Swatch Guide Bar */}
              <div className="mt-4 p-4 rounded-2xl bg-white border border-[#E5E3DE] shadow-xs">
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#20211F]">
                    <Palette className="h-4 w-4 text-[#D9683B]" />
                    <span>Popular Asian Paints Shades:</span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#D9683B]">
                    {selectedColor.description}
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {wallColorOptions.map((opt) => (
                    <button
                      key={opt.name}
                      type="button"
                      onClick={() => setSelectedColor(opt)}
                      className={`p-2 rounded-xl border text-center transition-all flex flex-col items-center gap-1 cursor-pointer ${
                        selectedColor.name === opt.name
                          ? 'border-[#D9683B] ring-2 ring-[#D9683B]/20 bg-[#FAF9F6]'
                          : 'border-[#E5E3DE] hover:border-[#CDCAC2] bg-white'
                      }`}
                    >
                      <span 
                        className="h-6 w-6 rounded-full border border-black/15 shadow-inner"
                        style={{ backgroundColor: opt.hex }}
                      />
                      <span className="text-[10px] font-bold text-[#20211F] truncate max-w-full">
                        {opt.name}
                      </span>
                    </button>
                  ))}
                </div>
                <div className="mt-2 text-center">
                  <span className="text-[11px] text-[#73736F]">
                    Selected: <strong className="text-[#20211F]">{selectedColor.shade}</strong>
                  </span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 2. ARCHITECTURAL EXECUTION METHODOLOGY */}
      <section className="py-20 md:py-24 bg-white border-b border-[#E5E3DE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9683B]">
              Execution Methodology
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#20211F]">
              How We Deliver Perfection, Step by Step
            </h2>
            <p className="text-sm sm:text-base text-[#73736F] leading-relaxed">
              No guesswork, no paint droplets on furniture, and no hidden charges. Every home follows our strict contractor protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phase 01 */}
            <div className="group rounded-3xl border border-[#E5E3DE] bg-[#FAF9F6] p-7 sm:p-8 flex flex-col justify-between hover:border-[#20211F]/30 hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#20211F] text-white">
                    Phase 01 • Day 0
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-white border border-[#E5E3DE] flex items-center justify-center text-[#D9683B] group-hover:scale-110 transition-transform">
                    <SearchCheck className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold text-[#20211F] leading-snug">
                  On-Site Technical Survey & Dampness Diagnostic
                </h3>

                <p className="text-xs sm:text-sm text-[#73736F] leading-relaxed">
                  Our project engineer visits your home with digital pinless moisture meters and laser measures. We map hairline wall cracks, check for underlying seepage, and let you select genuine shades on physical fandecks.
                </p>

                <div className="pt-2 space-y-2 border-t border-[#E5E3DE]/70 text-xs text-[#20211F]">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#D9683B] shrink-0" />
                    <span>Laser square-footage & moisture audit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#D9683B] shrink-0" />
                    <span>Itemized written quote with zero price creep</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#D9683B] shrink-0" />
                    <span>100% Free visit with zero sales pressure</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 02 */}
            <div className="group rounded-3xl border border-[#E5E3DE] bg-[#FAF9F6] p-7 sm:p-8 flex flex-col justify-between hover:border-[#20211F]/30 hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#D9683B] text-white">
                    Phase 02 • Days 1 – 3
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-white border border-[#E5E3DE] flex items-center justify-center text-[#D9683B] group-hover:scale-110 transition-transform">
                    <Layers className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold text-[#20211F] leading-snug">
                  Clean-Shield Masking & Double-Coat Precision
                </h3>

                <p className="text-xs sm:text-sm text-[#73736F] leading-relaxed">
                  Every sofa, television, bed, and floor tile is vacuumed and hermetically sealed with heavy-duty film. Walls are prepared with acrylic putty skimming, sealed with primer, and roller-coated with 2 coats of original emulsion.
                </p>

                <div className="pt-2 space-y-2 border-t border-[#E5E3DE]/70 text-xs text-[#20211F]">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#D9683B] shrink-0" />
                    <span>100% Sealed cans unboxed before your eyes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#D9683B] shrink-0" />
                    <span>Hermetic furniture & floor protection film</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#D9683B] shrink-0" />
                    <span>Dust-free sanding & flawless roller texture</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 03 */}
            <div className="group rounded-3xl border border-[#E5E3DE] bg-[#FAF9F6] p-7 sm:p-8 flex flex-col justify-between hover:border-[#20211F]/30 hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-700 text-white">
                    Phase 03 • Day 4
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-white border border-[#E5E3DE] flex items-center justify-center text-[#D9683B] group-hover:scale-110 transition-transform">
                    <ClipboardCheck className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold text-[#20211F] leading-snug">
                  40-Point Inspection & Warranty Handover
                </h3>

                <p className="text-xs sm:text-sm text-[#73736F] leading-relaxed">
                  All masking tape is gently peeled, floors are thoroughly swept, and furniture is returned to its exact placement. Our supervisor walks through every room with high-lumen inspection lights before signing off.
                </p>

                <div className="pt-2 space-y-2 border-t border-[#E5E3DE]/70 text-xs text-[#20211F]">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#D9683B] shrink-0" />
                    <span>High-lumen edge & perimeter quality audit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#D9683B] shrink-0" />
                    <span>Zero debris, spotless floor & furniture reset</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#D9683B] shrink-0" />
                    <span>Signed 3-Year Warranty Certificate handover</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <ArrowFillButton
              to="/quote"
              size="lg"
              text="Schedule Your Technical Survey"
              baseBg="#20211F"
              fillBg="#D9683B"
              textColor="#FAF9F6"
              fillTextColor="#ffffff"
              badgeBg="rgba(255, 255, 255, 0.15)"
              className="shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE 30-SECOND PRICING ESTIMATOR */}
      <section className="py-16 md:py-24 bg-[#F1F0EC] border-b border-[#E5E3DE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingCalculator />
        </div>
      </section>

      {/* 4. HONEST PRICING PACKAGES (CLEAR CARDS) */}
      <section id="pricing" className="py-16 md:py-24 border-b border-[#E5E3DE] bg-[#FAF9F6] scroll-mt-28 sm:scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9683B]">
              Transparent Pricing
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#20211F]">
              All-Inclusive Price Packages
            </h2>
            <p className="text-sm sm:text-base text-[#73736F]">
              Clear upfront estimates. Every package includes original paint cans, skilled labor, crack repairs, and post-painting cleanup.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
            {pricingPackages.map((pkg) => (
              <motion.div
                key={pkg.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 h-full ${
                  pkg.popular
                    ? 'bg-[#20211F] text-white border-transparent ring-2 ring-[#D9683B]/60 shadow-2xl relative overflow-hidden'
                    : 'bg-white border border-[#E5E3DE] shadow-xs hover:border-[#20211F]/30 hover:shadow-lg'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 w-36 h-36 bg-[#D9683B]/15 rounded-full blur-3xl pointer-events-none" />
                )}

                <div className="flex-1 flex flex-col relative z-10">
                  <div className="flex items-center justify-between gap-1.5 mb-4">
                    <span className={`text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-[#D9683B] to-[#F29C38] text-white shadow-sm'
                        : 'bg-[#FAF9F6] border border-[#E5E3DE] text-[#20211F]'
                    }`}>
                      {pkg.popular ? `★ ${pkg.badge}` : pkg.badge}
                    </span>
                    <span className={`text-[11px] font-bold flex items-center gap-1 shrink-0 whitespace-nowrap ${
                      pkg.popular ? 'text-[#CDCAC2]' : 'text-[#73736F]'
                    }`}>
                      <Clock className="w-3.5 h-3.5 text-[#D9683B]" />
                      <span>{pkg.estimatedTimeline}</span>
                    </span>
                  </div>

                  <h3 className={`font-heading text-lg sm:text-xl font-bold ${
                    pkg.popular ? 'text-white' : 'text-[#20211F]'
                  }`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-xs mt-1 min-h-[32px] leading-relaxed ${
                    pkg.popular ? 'text-[#CDCAC2]' : 'text-[#73736F]'
                  }`}>
                    {pkg.tagline}
                  </p>

                  {/* Price */}
                  <div className={`mt-4 pb-4 border-b ${
                    pkg.popular ? 'border-white/10' : 'border-[#E5E3DE]'
                  }`}>
                    <div className={`font-heading font-extrabold text-xl sm:text-2xl xl:text-[23px] whitespace-nowrap tracking-tight leading-tight ${
                      pkg.popular ? 'text-white' : 'text-[#20211F]'
                    }`}>
                      {pkg.priceDisplay}
                    </div>
                    <span className={`block text-xs mt-1 font-medium leading-snug min-h-[28px] ${
                      pkg.popular ? 'text-[#A2A29D]' : 'text-[#73736F]'
                    }`}>
                      {pkg.unit}
                    </span>
                  </div>

                  {/* Specifications */}
                  <div className="mt-5 space-y-2.5 text-xs flex-1">
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          pkg.popular 
                            ? 'bg-[#D9683B]/25 text-[#D9683B]' 
                            : 'bg-[#FAF9F6] border border-[#E5E3DE] text-[#20211F]'
                        }`}>
                          <Check className="h-2.5 w-2.5" />
                        </div>
                        <span className={`leading-snug ${
                          pkg.popular ? 'text-[#E5E3DE]' : 'text-[#3E3E3B]'
                        }`}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`pt-5 mt-5 border-t flex justify-center relative z-10 ${
                  pkg.popular ? 'border-white/10' : 'border-[#E5E3DE]'
                }`}>
                  <ArrowFillButton
                    to={`/quote?service=${pkg.serviceSlug}`}
                    size="default"
                    text={pkg.ctaText}
                    baseBg={pkg.popular ? '#D9683B' : '#20211F'}
                    fillBg={pkg.popular ? '#ffffff' : '#D9683B'}
                    textColor="#ffffff"
                    fillTextColor={pkg.popular ? '#20211F' : '#ffffff'}
                    badgeBg={pkg.popular ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.15)'}
                    badgeTextColor="#ffffff"
                    badgeFillBg={pkg.popular ? '#20211F' : '#ffffff'}
                    badgeFillTextColor={pkg.popular ? '#ffffff' : '#D9683B'}
                    className="w-full shadow-sm"
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. RECENT HOMES PAINTED (REAL, AUTHENTIC PROJECT GALLERY) */}
      <section className="py-20 md:py-28 border-b border-[#E5E3DE] bg-[#F1F0EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9683B]">
              Real Homes Painted
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#20211F]">
              Recent Painting Work Across India
            </h2>
            <p className="text-sm sm:text-base text-[#73736F]">
              See actual rooms painted with genuine Asian Paints & Berger finishes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="rounded-3xl border-2 border-[#E5E3DE] bg-white overflow-hidden shadow-xs hover:border-[#CDCAC2] transition-colors flex flex-col justify-between">
              <div>
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                    alt="Living room in 3 BHK flat painted in warm neutral Asian Paints Royale"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-[#20211F]/85 backdrop-blur-sm px-3 py-1 text-xs font-bold text-white rounded-lg">
                    3 BHK Flat
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-[#73736F]">
                    <MapPin className="h-3.5 w-3.5 text-[#D9683B]" />
                    <span>Indiranagar, Bengaluru</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#20211F]">
                    Living Room & Hall Repainting
                  </h3>
                  <p className="text-xs sm:text-sm text-[#73736F] leading-relaxed">
                    Full sofa and floor masking. Repaired old hairline plaster cracks, 2 coats of Asian Paints Royale Luxury Emulsion (Warm Cream). Completed in 4 days.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-[#E5E3DE]/60 mt-4 flex items-center justify-between text-xs font-bold">
                <span className="text-[#D9683B]">Asian Paints Royale</span>
                <span className="text-[#73736F]">⏱️ 4 Days</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="rounded-3xl border-2 border-[#E5E3DE] bg-white overflow-hidden shadow-xs hover:border-[#CDCAC2] transition-colors flex flex-col justify-between">
              <div>
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80"
                    alt="Master bedroom with fresh smooth walls and clean window frame paint"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-[#20211F]/85 backdrop-blur-sm px-3 py-1 text-xs font-bold text-white rounded-lg">
                    2 BHK Flat
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-[#73736F]">
                    <MapPin className="h-3.5 w-3.5 text-[#D9683B]" />
                    <span>Sector 62, Noida (Delhi NCR)</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#20211F]">
                    Master Bedroom & Ceiling Finish
                  </h3>
                  <p className="text-xs sm:text-sm text-[#73736F] leading-relaxed">
                    Bed and wardrobe wrapped in clean plastic. Ceiling painted in flat white, bedroom walls coated in Berger Silk Glamour (Day Breeze). Completed in 3 days.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-[#E5E3DE]/60 mt-4 flex items-center justify-between text-xs font-bold">
                <span className="text-[#D9683B]">Berger Silk Glamour</span>
                <span className="text-[#73736F]">⏱️ 3 Days</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="rounded-3xl border-2 border-[#E5E3DE] bg-white overflow-hidden shadow-xs hover:border-[#CDCAC2] transition-colors flex flex-col justify-between">
              <div>
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80"
                    alt="Independent villa exterior with fresh waterproof coating"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-[#20211F]/85 backdrop-blur-sm px-3 py-1 text-xs font-bold text-white rounded-lg">
                    Independent Villa
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-[#73736F]">
                    <MapPin className="h-3.5 w-3.5 text-[#D9683B]" />
                    <span>Whitefield, Bengaluru</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#20211F]">
                    Exterior Rainproof Painting
                  </h3>
                  <p className="text-xs sm:text-sm text-[#73736F] leading-relaxed">
                    Pressure washed exterior dirt, sealed window cracks with exterior sealant, applied Asian Paints Apex Ultima rain protection. Completed in 6 days.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-[#E5E3DE]/60 mt-4 flex items-center justify-between text-xs font-bold">
                <span className="text-[#D9683B]">Asian Paints Apex Ultima</span>
                <span className="text-[#73736F]">⏱️ 6 Days</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }} className="inline-block">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 rounded-xl bg-[#20211F] px-8 py-4 text-sm font-bold text-white hover:bg-[#D9683B] transition-colors shadow-sm"
              >
                <span>Get a Free Price for Your Home</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 6. WHAT WE PAINT: 3 SIMPLE SERVICES */}
      <section className="py-20 md:py-28 border-b border-[#E5E3DE] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9683B]">
              Our Services
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#20211F]">
              What We Paint
            </h2>
            <p className="text-base text-[#73736F]">
              Whatever your painting requirement is, we have a friendly team ready to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Inside Your Home (Interior)',
                desc: 'Painting for bedrooms, living room, hall, kitchen, and ceilings with washable Asian Paints / Berger.',
                img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=80',
                slug: 'interior-painting',
                tag: 'Bedrooms & Living Rooms'
              },
              {
                title: 'Outside Walls (Exterior Waterproofing)',
                desc: 'Protects outside walls and balconies from heavy monsoon rain, sunlight, fungus, and dampness.',
                img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80',
                slug: 'exterior-painting',
                tag: 'Monsoon Rain Protection'
              },
              {
                title: 'Wall Repair & Putty Skimming',
                desc: 'Fixing damp walls, peeling paint, flaking plaster, and filling cracks so walls are completely smooth.',
                img: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=1200&q=80',
                slug: 'surface-preparation',
                tag: 'Crack & Dampness Fix'
              }
            ].map((srv) => (
              <motion.div
                key={srv.slug}
                whileHover={{ y: -4 }}
                className="rounded-2xl border-2 border-[#E5E3DE] bg-white overflow-hidden shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={srv.img}
                      alt={srv.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 bg-[#20211F]/80 backdrop-blur-sm px-3 py-1 text-xs font-bold text-white rounded-lg">
                      {srv.tag}
                    </span>
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-heading text-xl font-bold text-[#20211F]">
                      {srv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#73736F] leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#E5E3DE]/60 mt-4 flex items-center justify-between">
                  <Link
                    to={`/services/${srv.slug}`}
                    className="text-xs font-bold text-[#20211F] hover:text-[#D9683B] flex items-center gap-1"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>

                  <Link
                    to={`/quote?service=${srv.slug}`}
                    className="text-xs font-bold text-[#D9683B] hover:underline"
                  >
                    Book Free Visit →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. REAL CLIENT REVIEWS IN SIMPLE LANGUAGE */}
      <section className="py-20 md:py-28 bg-[#F1F0EC] border-b border-[#E5E3DE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9683B]">
              Real Feedback
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#20211F]">
              What Our Customers Say
            </h2>
            <p className="text-sm sm:text-base text-[#73736F]">
              Real experiences from families and homeowners across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Sunita Sharma',
                initials: 'SS',
                loc: 'Delhi NCR (2 BHK Flat)',
                quote: 'They wrapped my sofa, bed, and TV in thick plastic. Not a single drop of paint fell on the marble floor. Very polite painters.',
                stars: 5
              },
              {
                name: 'Ramesh Iyer',
                initials: 'RI',
                loc: 'Bengaluru (3 BHK Apartment)',
                quote: 'They gave me the exact quote on day one. Finished in 4 days and didn’t ask for a single extra rupee. Super reliable.',
                stars: 5
              },
              {
                name: 'Col. Gurpreet Singh',
                initials: 'GS',
                loc: 'Chandigarh (Independent Villa)',
                quote: 'They checked the dampness in the guest bedroom before painting and fixed it properly. Beautiful Royale finish.',
                stars: 5
              },
              {
                name: 'Anand Patel',
                initials: 'AP',
                loc: 'Ahmedabad (1 BHK Rental Flat)',
                quote: 'Got the flat painted in just 2 days before the new tenant moved in. Fast work, neat borders, and very fair price.',
                stars: 5
              }
            ].map((t, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-[#E5E3DE] bg-white p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:border-[#20211F]/20 hover:shadow-md transition-all duration-200"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex text-[#D9683B] gap-1">
                      {[...Array(t.stars)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#D9683B] text-[#D9683B]" />
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/80">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      <span>Verified Handover</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#20211F] leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E5E3DE] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#FAF9F6] border border-[#E5E3DE] flex items-center justify-center font-heading font-extrabold text-xs text-[#20211F] shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-heading text-sm font-bold text-[#20211F]">
                      {t.name}
                    </p>
                    <p className="text-[11px] text-[#73736F]">
                      {t.loc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. SIMPLE QUESTIONS & ANSWERS (BOOMER FRIENDLY FAQ) */}
      <section className="py-20 md:py-28 bg-white border-b border-[#E5E3DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9683B]">
              Common Questions
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#20211F]">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-[#73736F]">
              Simple answers to what most homeowners ask us.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Do I have to move all my heavy furniture out of the house?',
                a: 'No! You don’t need to do any heavy lifting. Our team gently moves your sofas, beds, and tables to the center of the room and wraps them completely in clean protective plastic.'
              },
              {
                q: 'Will there be paint smell inside the house?',
                a: 'No. We use genuine low-odor Asian Paints and Berger paints that have no harsh chemical smell. You and your family can sleep comfortably in your home.'
              },
              {
                q: 'How long will it take to paint a 2 BHK or 3 BHK flat?',
                a: 'A standard 2 BHK takes 3 to 4 days, while a 3 BHK takes 4 to 5 days. We stick to this schedule so your normal daily routine is not disturbed.'
              },
              {
                q: 'How do I know the paint cans are original?',
                a: 'All paint containers are sealed directly from the authorized warehouse and opened in your presence at your house.'
              },
              {
                q: 'How do payments work?',
                a: 'We follow transparent milestone payments: an initial advance to purchase paints and materials, a progress payment after wall prep and first coat, and the final balance upon completion walkthrough.'
              }
            ].map((faq, fIdx) => (
              <div key={fIdx} className="rounded-2xl border-2 border-[#E5E3DE] bg-[#FAF9F6] p-5 sm:p-6 space-y-2">
                <h3 className="font-heading text-base sm:text-lg font-bold text-[#20211F] flex items-start gap-2.5">
                  <span className="text-[#D9683B]">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#73736F] pl-6 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. FINAL CALL TO ACTION (WARM & GROUNDED) */}
      <section className="py-20 md:py-28 bg-[#20211F] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-xs font-bold uppercase tracking-widest text-[#FAF9F6]">
            <span className="h-2 w-2 rounded-full bg-[#D9683B] animate-pulse" />
            100% Free Home Visit • No Obligation
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ready to Give Your House a Fresh Look?
          </h2>

          <p className="text-base sm:text-lg text-[#CDCAC2] max-w-xl mx-auto leading-relaxed">
            Tell us about your home. Our expert will visit, measure your rooms, show you genuine paint shade cards, and give you an exact price.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <ArrowFillButton
              to="/quote"
              size="lg"
              text="Book Free Home Visit"
              bgColor="#D9683B"
              fillBgColor="#20211F"
              textColor="#ffffff"
              fillTextColor="#ffffff"
              arrowColor="#ffffff"
              className="w-full sm:w-auto shadow-2xl"
            />

            <ArrowFillButton
              to="/contact"
              size="lg"
              text="Request Free Callback"
              bgColor="rgba(255, 255, 255, 0.08)"
              fillBgColor="#D9683B"
              textColor="#ffffff"
              fillTextColor="#ffffff"
              arrowColor="#ffffff"
              className="w-full sm:w-auto border-white/20 shadow-md"
            />
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs sm:text-sm text-[#A2A29D]">
            <span>✓ 100% Free Home Visit</span>
            <span>•</span>
            <span>✓ Fixed Written Quotation</span>
            <span>•</span>
            <span>✓ Original Asian Paints & Berger</span>
          </div>

        </div>
      </section>

    </div>
  );
};
