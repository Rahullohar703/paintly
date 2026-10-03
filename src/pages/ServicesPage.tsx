import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, CheckCircle2, Paintbrush } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

const simpleFriendlyLabels: Record<string, { icon: string; simpleTag: string; simpleSubtitle: string }> = {
  'interior-painting': {
    icon: '🏠',
    simpleTag: 'Living Rooms, Bedrooms & Kitchens',
    simpleSubtitle: 'Smooth, washable paint for all your rooms. We move your heavy furniture and cover it safely in clean plastic sheets.'
  },
  'exterior-painting': {
    icon: '☀️',
    simpleTag: 'Outside Walls & Balconies',
    simpleSubtitle: 'Strong weather-proof paint that protects your home from harsh monsoon rains, mold, and hot summer sun.'
  },
  'commercial-painting': {
    icon: '🏢',
    simpleTag: 'Shops, Offices & Clinics',
    simpleSubtitle: 'Fast, on-time painting on weekends or evenings so your business never stops.'
  },
  'industrial-coatings': {
    icon: '🏭',
    simpleTag: 'Warehouses & Factory Floors',
    simpleSubtitle: 'Heavy-duty epoxy coatings that can handle forklifts, heavy machinery, and tough everyday wear.'
  },
  'surface-preparation': {
    icon: '🛠️',
    simpleTag: 'Crack Repair & Dampness Treatment',
    simpleSubtitle: 'We diagnose wall dampness with digital meters, patch peeling plaster, and put smooth wall putty before painting.'
  }
};

export const ServicesPage: React.FC = () => {
  return (
    <div className="space-y-0">
      
      {/* 1. HERO: KID-SIMPLE & WELCOMING */}
      <section className="pt-8 pb-14 md:pt-14 md:pb-20 border-b border-[#E5E3DE] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'What We Paint' }]} className="mb-6" />

          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#fbf2ee] text-xs font-bold uppercase tracking-wider text-[#D9683B]">
              <Paintbrush className="h-4 w-4" />
              Simple Painting Services
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#20211F] tracking-tight leading-[1.15]">
              What We Paint For You.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#73736F] leading-relaxed">
              No complicated contractor talk. Whether you want to refresh a single bedroom, paint your entire flat, or protect outside walls from monsoon rain — we do it neatly and cleanly.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SERVICES LISTING (CLEAR, RELATABLE CARDS) */}
      <section className="py-16 md:py-24 border-b border-[#E5E3DE] bg-[#F1F0EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 1;
            const friendly = simpleFriendlyLabels[service.slug] || {
              icon: '🎨',
              simpleTag: 'Professional Painting',
              simpleSubtitle: service.shortDescription
            };

            return (
              <div
                key={service.slug}
                id={service.slug}
                className="rounded-3xl border-2 border-[#E5E3DE] bg-white overflow-hidden shadow-xs hover:border-[#CDCAC2] transition-colors"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Image Column */}
                  <div className={`lg:col-span-5 relative aspect-[16/10] lg:aspect-auto ${isEven ? 'lg:order-2' : ''}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="rounded-xl bg-[#20211F]/90 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-white flex items-center gap-1.5">
                        <span>{friendly.icon}</span>
                        <span>{service.title}</span>
                      </span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 p-7 sm:p-10 flex flex-col justify-between space-y-6 ${isEven ? 'lg:order-1' : ''}`}>
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs font-extrabold uppercase tracking-wider text-[#D9683B]">
                          {friendly.simpleTag}
                        </span>
                        <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#20211F] mt-1">
                          {service.title}
                        </h2>
                      </div>

                      <p className="text-sm sm:text-base text-[#73736F] leading-relaxed">
                        {friendly.simpleSubtitle}
                      </p>

                      {/* What We Do - Kid simple bullet points */}
                      <div className="bg-[#FAF9F6] p-4 sm:p-5 rounded-2xl border border-[#E5E3DE] space-y-2.5">
                        <p className="text-xs font-extrabold uppercase tracking-wider text-[#20211F]">
                          What is included in this service:
                        </p>
                        <ul className="space-y-2 text-xs sm:text-sm text-[#20211F]">
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 className="h-4 w-4 text-[#D9683B] flex-shrink-0 mt-0.5" />
                            <span><strong>Full furniture protection:</strong> We cover sofas, beds, TV, and floors in clean plastic sheets.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 className="h-4 w-4 text-[#D9683B] flex-shrink-0 mt-0.5" />
                            <span><strong>Wall crack & hole repair:</strong> We fill every nail hole and crack with smooth white putty.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 className="h-4 w-4 text-[#D9683B] flex-shrink-0 mt-0.5" />
                            <span><strong>2 Full coats of genuine paint:</strong> Sealed Asian Paints / Berger paint buckets opened at your home.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 className="h-4 w-4 text-[#D9683B] flex-shrink-0 mt-0.5" />
                            <span><strong>Post-paint deep cleanup:</strong> We remove all tape and vacuum the floor before leaving.</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-[#E5E3DE] flex flex-wrap items-center justify-between gap-4">
                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#20211F] hover:text-[#D9683B] transition-colors"
                      >
                        <span>Learn More Details</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>

                      <motion.div whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.96 }}>
                        <Link
                          to={`/quote?service=${service.slug}`}
                          className="inline-flex items-center gap-2 rounded-xl bg-[#D9683B] px-6 py-3 text-xs sm:text-sm font-extrabold text-white shadow-sm hover:bg-[#c4572b] transition-all"
                        >
                          <span>Book Free Home Visit</span>
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </motion.div>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. FOUR PROMISES EVERY GRANDPARENT & FAMILY APPRECIATES */}
      <section className="py-16 md:py-24 border-b border-[#E5E3DE] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9683B]">
              Our Promise
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#20211F]">
              Why Families Trust Paintly
            </h2>
            <p className="text-sm sm:text-base text-[#73736F]">
              Everything we do is designed to give you peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border-2 border-[#E5E3DE] bg-white p-6 space-y-3 shadow-xs">
              <span className="text-3xl">🛋️</span>
              <h3 className="font-heading text-lg font-bold text-[#20211F]">Zero Mess on Furniture</h3>
              <p className="text-xs sm:text-sm text-[#73736F] leading-relaxed">
                We wrap sofas, TVs, dining tables, and beds with thick plastic. Zero paint splatters on your precious belongings.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-[#E5E3DE] bg-white p-6 space-y-3 shadow-xs">
              <span className="text-3xl">🥫</span>
              <h3 className="font-heading text-lg font-bold text-[#20211F]">Original Paint Only</h3>
              <p className="text-xs sm:text-sm text-[#73736F] leading-relaxed">
                We use 100% genuine Asian Paints and Berger buckets. You can check the seals before we open them.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-[#E5E3DE] bg-white p-6 space-y-3 shadow-xs">
              <span className="text-3xl">💰</span>
              <h3 className="font-heading text-lg font-bold text-[#20211F]">Fixed Honest Price</h3>
              <p className="text-xs sm:text-sm text-[#73736F] leading-relaxed">
                The price given on paper is final. No asking for extra cash, tea money, or unexpected surprise bills.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-[#E5E3DE] bg-white p-6 space-y-3 shadow-xs">
              <span className="text-3xl">🛡️</span>
              <h3 className="font-heading text-lg font-bold text-[#20211F]">3-Year Guarantee</h3>
              <p className="text-xs sm:text-sm text-[#73736F] leading-relaxed">
                If paint peels or bubbles within 3 years, our friendly team comes back and fixes it for free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-16 md:py-24 bg-[#20211F] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Ready to Freshen Up Your Walls?
          </h2>
          <p className="text-base sm:text-lg text-[#CDCAC2] max-w-xl mx-auto">
            Book a free 15-minute home visit. Our expert brings color shade cards, measures your rooms, and gives you a clear price.
          </p>
          <div className="pt-2">
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }} className="inline-block">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 rounded-xl bg-[#D9683B] px-8 py-4 text-base font-extrabold text-white hover:bg-[#c4572b] transition-all shadow-md animate-cta-pulse"
              >
                <span>Book Free Home Visit</span>
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};
