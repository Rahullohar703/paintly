import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  ArrowRight, 
  BadgePercent, 
  Check,
  Palette,
  MapPin
} from 'lucide-react';
import { pricingPackages } from '../data/pricingData';
import { PricingCalculator } from '../components/common/PricingCalculator';

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

              {/* Big, easy-to-click buttons with animations */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/quote"
                    className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#D9683B] px-8 py-4 text-base font-extrabold text-white shadow-md hover:bg-[#c4572b] transition-all animate-cta-pulse w-full sm:w-auto"
                  >
                    <span>Book Free Home Visit</span>
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                  <a
                    href="#pricing"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#20211F] bg-white px-7 py-4 text-base font-bold text-[#20211F] hover:bg-[#F1F0EC] transition-all w-full sm:w-auto"
                  >
                    <BadgePercent className="h-5 w-5 text-[#D9683B]" />
                    <span>See Price Packages</span>
                  </a>
                </motion.div>
              </div>

              {/* 3 Honest Promises */}
              <div className="pt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm font-bold text-[#20211F]">
                <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-[#E5E3DE] shadow-xs">
                  <span className="text-lg">🛋️</span>
                  <span>Furniture Plastic Covering</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-[#E5E3DE] shadow-xs">
                  <span className="text-lg">📜</span>
                  <span>Clear Written Quotation</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-[#E5E3DE] shadow-xs">
                  <span className="text-lg">🥫</span>
                  <span>Original Sealed Paint Cans</span>
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
                <div className="absolute top-4 left-4 rounded-xl bg-white/95 backdrop-blur-md px-3.5 py-2.5 border border-[#E5E3DE] shadow-md flex items-center gap-2.5">
                  <span className="text-xl">🏠</span>
                  <div>
                    <p className="text-xs font-bold text-[#20211F]">Free Home Visit</p>
                    <p className="text-[10px] text-[#73736F]">Room check & original shade cards</p>
                  </div>
                </div>

                {/* Badge 2 */}
                <div className="absolute bottom-4 right-4 rounded-xl bg-[#20211F]/90 backdrop-blur-md px-3.5 py-2 border border-white/10 text-white shadow-md flex items-center gap-2">
                  <span className="text-xl">🛡️</span>
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

      {/* 2. THREE REAL STEPS (HOW IT WORKS) */}
      <section className="py-16 md:py-20 bg-white border-b border-[#E5E3DE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9683B]">
              Simple & Straightforward
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#20211F]">
              How It Works: 3 Simple Steps
            </h2>
            <p className="text-sm sm:text-base text-[#73736F]">
              You don't have to worry about buying paint, finding workers, or cleaning the mess.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAF9F6] rounded-2xl border-2 border-[#E5E3DE] p-7 space-y-3 shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D9683B] text-white font-extrabold text-xl font-heading shadow-sm">
                1
              </div>
              <h3 className="font-heading text-xl font-bold text-[#20211F]">
                Free In-Person Home Visit
              </h3>
              <p className="text-sm text-[#73736F] leading-relaxed">
                Our experienced supervisor visits your home at your convenience. We inspect your walls for cracks and dampness, take room measurements, show you original shade cards, and give you an exact price on paper. <strong>100% free visit, zero obligation.</strong>
              </p>
            </div>

            <div className="bg-[#FAF9F6] rounded-2xl border-2 border-[#E5E3DE] p-7 space-y-3 shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#20211F] text-white font-extrabold text-xl font-heading shadow-sm">
                2
              </div>
              <h3 className="font-heading text-xl font-bold text-[#20211F]">
                We Cover Everything & Paint
              </h3>
              <p className="text-sm text-[#73736F] leading-relaxed">
                Before any paint is opened, our painters cover your sofa, bed, TV, fans, and floors with fresh plastic sheets and masking tape. We fill cracks with smooth wall putty, apply primer, and paint two coats of genuine brand paint.
              </p>
            </div>

            <div className="bg-[#FAF9F6] rounded-2xl border-2 border-[#E5E3DE] p-7 space-y-3 shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white font-extrabold text-xl font-heading shadow-sm">
                3
              </div>
              <h3 className="font-heading text-xl font-bold text-[#20211F]">
                Clean Handover & Inspection
              </h3>
              <p className="text-sm text-[#73736F] leading-relaxed">
                We remove all plastic tape, sweep and tidy the floors, and put all furniture back in its place. Our supervisor walks through every room with you to inspect each wall before final project handover.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }} className="inline-block">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 rounded-xl bg-[#D9683B] px-8 py-4 text-base font-extrabold text-white shadow-md hover:bg-[#c4572b] transition-all animate-cta-pulse"
              >
                <span>Book Your Free Home Visit</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
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
      <section id="pricing" className="py-20 md:py-28 border-b border-[#E5E3DE] bg-[#FAF9F6] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPackages.map((pkg) => (
              <motion.div
                key={pkg.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className={`rounded-3xl border-2 p-6 sm:p-7 flex flex-col justify-between transition-all ${
                  pkg.popular
                    ? 'border-[#D9683B] bg-white shadow-xl ring-4 ring-[#D9683B]/10 relative'
                    : 'border-[#E5E3DE] bg-white shadow-xs hover:border-[#CDCAC2]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full ${
                      pkg.popular
                        ? 'bg-[#D9683B] text-white'
                        : 'bg-[#F1F0EC] text-[#73736F]'
                    }`}>
                      {pkg.badge}
                    </span>
                    <span className="text-xs font-bold text-[#73736F]">
                      ⏱️ {pkg.estimatedTimeline}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[#20211F]">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-[#73736F] mt-1.5 min-h-[36px] leading-relaxed">
                    {pkg.tagline}
                  </p>

                  {/* Price */}
                  <div className="mt-5 pb-5 border-b border-[#E5E3DE]">
                    <span className="font-heading text-3xl font-extrabold text-[#20211F]">
                      {pkg.priceDisplay}
                    </span>
                    <span className="block text-xs text-[#73736F] mt-1 font-medium">
                      {pkg.unit}
                    </span>
                  </div>

                  {/* Features */}
                  <div className="mt-5 space-y-2.5 text-xs text-[#20211F]">
                    <p className="font-bold text-[11px] uppercase tracking-wider text-[#73736F]">
                      What is included:
                    </p>
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-[#D9683B] flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E5E3DE]">
                  <motion.div whileHover={{ scale: 1.025, y: -2 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      to={`/quote?service=${pkg.serviceSlug}`}
                      className={`flex items-center justify-center gap-1.5 w-full rounded-xl py-3.5 text-xs sm:text-sm font-bold transition-all shadow-xs ${
                        pkg.popular
                          ? 'bg-[#D9683B] text-white hover:bg-[#c4572b] shadow-md'
                          : 'bg-[#20211F] text-white hover:bg-[#D9683B]'
                      }`}
                    >
                      <span>{pkg.ctaText}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </motion.div>
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
                loc: 'Delhi NCR (2 BHK Flat)',
                quote: 'They wrapped my sofa, bed, and TV in thick plastic. Not a single drop of paint fell on the marble floor. Very polite painters.',
                stars: 5
              },
              {
                name: 'Ramesh Iyer',
                loc: 'Bengaluru (3 BHK Apartment)',
                quote: 'They gave me the exact quote on day one. Finished in 4 days and didn’t ask for a single extra rupee. Super reliable.',
                stars: 5
              },
              {
                name: 'Col. Gurpreet Singh',
                loc: 'Chandigarh (Independent Villa)',
                quote: 'They checked the dampness in the guest bedroom before painting and fixed it properly. Beautiful Royale finish.',
                stars: 5
              },
              {
                name: 'Anand Patel',
                loc: 'Ahmedabad (1 BHK Rental Flat)',
                quote: 'Got the flat painted in just 2 days before the new tenant moved in. Fast work, neat borders, and very fair price.',
                stars: 5
              }
            ].map((t, idx) => (
              <div
                key={idx}
                className="rounded-2xl border-2 border-[#E5E3DE] bg-white p-6 flex flex-col justify-between shadow-xs"
              >
                <div className="space-y-3">
                  <div className="flex text-[#D9683B]">
                    {[...Array(t.stars)].map((_, i) => (
                      <span key={i} className="text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#20211F] leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E5E3DE]">
                  <p className="font-heading text-sm font-bold text-[#20211F]">
                    {t.name}
                  </p>
                  <p className="text-[11px] text-[#73736F] mt-0.5">
                    {t.loc}
                  </p>
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
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Link
                to="/quote"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#D9683B] px-9 py-4 text-base font-extrabold text-white shadow-xl hover:bg-[#c4572b] transition-all animate-cta-pulse"
              >
                <span>Book Free Home Visit</span>
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-colors"
              >
                <span>Request Free Callback</span>
              </Link>
            </motion.div>
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
