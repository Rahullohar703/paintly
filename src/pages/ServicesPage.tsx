import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  ArrowRight, 
  CheckCircle2, 
  Paintbrush,
  Home,
  Sun,
  Building2,
  Factory,
  Wrench,
  Sparkles,
  ShieldCheck,
  FileText,
  Award
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ArrowFillButton } from '../components/common/ArrowFillButton';

const serviceIcons: Record<string, React.ReactNode> = {
  'interior-painting': <Home className="w-4 h-4 text-[#D9683B]" />,
  'exterior-painting': <Sun className="w-4 h-4 text-[#D9683B]" />,
  'commercial-painting': <Building2 className="w-4 h-4 text-[#D9683B]" />,
  'industrial-coatings': <Factory className="w-4 h-4 text-[#D9683B]" />,
  'surface-preparation': <Wrench className="w-4 h-4 text-[#D9683B]" />
};

const serviceSubtitles: Record<string, { tag: string; subtitle: string }> = {
  'interior-painting': {
    tag: 'Living Rooms, Bedrooms & Kitchens',
    subtitle: 'Smooth, washable paint for all your rooms. We move your heavy furniture and cover it safely in clean plastic sheets.'
  },
  'exterior-painting': {
    tag: 'Outside Walls & Balconies',
    subtitle: 'Strong weather-proof paint that protects your home from harsh monsoon rains, mold, and hot summer sun.'
  },
  'commercial-painting': {
    tag: 'Shops, Offices & Clinics',
    subtitle: 'Fast, on-time painting on weekends or evenings so your business operations never stop.'
  },
  'industrial-coatings': {
    tag: 'Warehouses & Factory Floors',
    subtitle: 'Heavy-duty epoxy coatings that can handle forklifts, heavy machinery, and tough everyday wear.'
  },
  'surface-preparation': {
    tag: 'Crack Repair & Dampness Treatment',
    subtitle: 'We diagnose wall dampness with digital meters, patch peeling plaster, and apply smooth wall putty before painting.'
  }
};

export const ServicesPage: React.FC = () => {
  return (
    <div className="space-y-0">
      
      {/* 1. HERO */}
      <section className="pt-8 pb-14 md:pt-14 md:pb-20 border-b border-[#E5E3DE] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'What We Paint' }]} className="mb-6" />

          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#fbf2ee] text-xs font-bold uppercase tracking-wider text-[#D9683B]">
              <Paintbrush className="h-4 w-4" />
              Contractor Capabilities
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#20211F] tracking-tight leading-[1.15]">
              Specialized Painting Services.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#73736F] leading-relaxed">
              From residential bedroom refreshes and whole-apartment restorations to commercial coatings and exterior monsoon defense — executed with laser-level precision.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SERVICES LISTING */}
      <section className="py-16 md:py-24 border-b border-[#E5E3DE] bg-[#F1F0EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 1;
            const meta = serviceSubtitles[service.slug] || {
              tag: 'Contractor Service',
              subtitle: service.shortDescription
            };
            const icon = serviceIcons[service.slug] || <Paintbrush className="w-4 h-4 text-[#D9683B]" />;

            return (
              <div
                key={service.slug}
                id={service.slug}
                className="rounded-3xl border border-[#E5E3DE] bg-white overflow-hidden shadow-xs hover:border-[#CDCAC2] transition-colors"
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
                      <span className="rounded-xl bg-[#20211F]/90 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-white flex items-center gap-2 border border-white/10 shadow-sm">
                        <span className="w-5 h-5 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                          {icon}
                        </span>
                        <span>{service.title}</span>
                      </span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 p-7 sm:p-10 flex flex-col justify-between space-y-6 ${isEven ? 'lg:order-1' : ''}`}>
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs font-extrabold uppercase tracking-wider text-[#D9683B]">
                          {meta.tag}
                        </span>
                        <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#20211F] mt-1">
                          {service.title}
                        </h2>
                      </div>

                      <p className="text-sm sm:text-base text-[#73736F] leading-relaxed">
                        {meta.subtitle}
                      </p>

                      {/* Dynamic Inclusions per Service */}
                      <div className="bg-[#FAF9F6] p-5 sm:p-6 rounded-2xl border border-[#E5E3DE] space-y-3">
                        <p className="text-xs font-extrabold uppercase tracking-wider text-[#20211F]">
                          Included in Scope of Work:
                        </p>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-[#20211F]">
                          {service.scopeOfWork.slice(0, 4).map((item, sIdx) => (
                            <li key={sIdx} className="flex items-start gap-2.5">
                              <CheckCircle2 className="h-4 w-4 text-[#D9683B] flex-shrink-0 mt-0.5" />
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-[#E5E3DE] flex flex-wrap items-center justify-between gap-4">
                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#20211F] hover:text-[#D9683B] transition-colors"
                      >
                        <span>View Technical Specifications</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>

                      <motion.div whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.96 }}>
                        <Link
                          to={`/quote?service=${service.slug}`}
                          className="inline-flex items-center gap-2 rounded-xl bg-[#D9683B] px-6 py-3 text-xs sm:text-sm font-extrabold text-white shadow-sm hover:bg-[#c4572b] transition-all"
                        >
                          <span>Book Free Survey</span>
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

      {/* 3. FOUR PROMISES */}
      <section className="py-20 md:py-28 border-b border-[#E5E3DE] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9683B]">
              Our Guarantee
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#20211F]">
              Why Discerning Homeowners Choose Paintly
            </h2>
            <p className="text-sm sm:text-base text-[#73736F]">
              Contractor precision without the typical residential painting stress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-3xl border border-[#E5E3DE] bg-white p-6 sm:p-7 space-y-4 shadow-xs hover:border-[#20211F]/30 hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-2xl bg-[#FAF9F6] border border-[#E5E3DE] flex items-center justify-center text-[#D9683B]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#20211F]">Hermetic Furniture Wrap</h3>
              <p className="text-xs sm:text-sm text-[#73736F] leading-relaxed">
                We wrap sofas, TVs, dining tables, and beds with thick polyethylene film. Zero paint splatters on your belongings.
              </p>
            </div>

            <div className="rounded-3xl border border-[#E5E3DE] bg-white p-6 sm:p-7 space-y-4 shadow-xs hover:border-[#20211F]/30 hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-2xl bg-[#FAF9F6] border border-[#E5E3DE] flex items-center justify-center text-[#D9683B]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#20211F]">Sealed Warehouse Cans</h3>
              <p className="text-xs sm:text-sm text-[#73736F] leading-relaxed">
                We use 100% genuine Asian Paints and Berger buckets. All container seals are checked and broken on-site in your presence.
              </p>
            </div>

            <div className="rounded-3xl border border-[#E5E3DE] bg-white p-6 sm:p-7 space-y-4 shadow-xs hover:border-[#20211F]/30 hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-2xl bg-[#FAF9F6] border border-[#E5E3DE] flex items-center justify-center text-[#D9683B]">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#20211F]">Itemized Written Quote</h3>
              <p className="text-xs sm:text-sm text-[#73736F] leading-relaxed">
                The price given on paper is final and binding. Zero unexpected price escalations or mid-project material surcharges.
              </p>
            </div>

            <div className="rounded-3xl border border-[#E5E3DE] bg-white p-6 sm:p-7 space-y-4 shadow-xs hover:border-[#20211F]/30 hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-2xl bg-[#FAF9F6] border border-[#E5E3DE] flex items-center justify-center text-[#D9683B]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#20211F]">3-Year Written Warranty</h3>
              <p className="text-xs sm:text-sm text-[#73736F] leading-relaxed">
                If paint peels or bubbles within 3 years, our warranty team attends and corrects the area free of charge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-20 md:py-28 bg-[#20211F] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Ready to Freshen Up Your Walls?
          </h2>
          <p className="text-base sm:text-lg text-[#CDCAC2] max-w-xl mx-auto">
            Book a free 15-minute home visit. Our expert brings color shade cards, measures your rooms, and gives you a clear price.
          </p>
          <div className="pt-2">
            <ArrowFillButton
              to="/quote"
              size="lg"
              text="Book Free Home Visit"
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
