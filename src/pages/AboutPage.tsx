import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Heart } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

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
                <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}>
                  <Link
                    to="/quote"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#D9683B] px-8 py-4 text-base font-extrabold text-white hover:bg-[#c4572b] transition-all shadow-md animate-cta-pulse"
                  >
                    <span>Book Free Home Visit</span>
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 rounded-xl border-2 border-[#20211F] bg-white px-7 py-4 text-base font-bold text-[#20211F] hover:bg-[#F1F0EC] transition-all"
                  >
                    <span>See What We Paint</span>
                  </Link>
                </motion.div>
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

      {/* 2. OUR STORY: THE OLD WAY VS THE PAINTLY WAY */}
      <section className="py-16 md:py-24 border-b border-[#E5E3DE] bg-[#F1F0EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9683B]">
              Why We Are Different
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#20211F]">
              The Old Painting Way vs The Paintly Way
            </h2>
            <p className="text-sm sm:text-base text-[#73736F]">
              See why older homeowners, families, and busy people choose us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* The Old Way */}
            <div className="rounded-3xl border-2 border-red-200 bg-red-50/50 p-7 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-red-600 font-extrabold font-heading text-xl">
                <span>❌</span>
                <span>The Usual Local Painter</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#4A4B46]">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Paint splattered over your floor tiles, marble, and fans.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Cheap local paint mixed with excess water that peels off in 6 months.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Starts with a cheap quote, then demands extra money every 2 days.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Leaves your house full of white dust and dirty newspaper.</span>
                </li>
              </ul>
            </div>

            {/* The Paintly Way */}
            <div className="rounded-3xl border-2 border-emerald-300 bg-emerald-50/50 p-7 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-emerald-700 font-extrabold font-heading text-xl">
                <span>✅</span>
                <span>The Paintly Way</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#20211F]">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Sofas, TV, and floors wrapped in fresh protective plastic sheets.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>100% genuine Asian Paints / Berger sealed cans opened in front of you.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Exact written quote on paper before starting. Zero hidden fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>We vacuum the floor and put all furniture back. 3-Year Warranty.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CORE VALUES: POLITE, ON-TIME, HONEST */}
      <section className="py-16 md:py-24 border-b border-[#E5E3DE] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl border-2 border-[#E5E3DE] p-7 space-y-3 shadow-xs">
              <span className="text-3xl">🤝</span>
              <h3 className="font-heading text-xl font-bold text-[#20211F]">Polite & Background Checked</h3>
              <p className="text-xs sm:text-sm text-[#73736F] leading-relaxed">
                All our painters are polite, verified professionals who respect your family’s privacy and peace of mind while working inside your home.
              </p>
            </div>

            <div className="bg-white rounded-3xl border-2 border-[#E5E3DE] p-7 space-y-3 shadow-xs">
              <span className="text-3xl">⏱️</span>
              <h3 className="font-heading text-xl font-bold text-[#20211F]">Clear Project Timeline</h3>
              <p className="text-xs sm:text-sm text-[#73736F] leading-relaxed">
                We agree on a clear start and completion date before work begins. Our team works dedicatedly so your home is finished and handed over on schedule.
              </p>
            </div>

            <div className="bg-white rounded-3xl border-2 border-[#E5E3DE] p-7 space-y-3 shadow-xs">
              <span className="text-3xl">📜</span>
              <h3 className="font-heading text-xl font-bold text-[#20211F]">Workmanship Support</h3>
              <p className="text-xs sm:text-sm text-[#73736F] leading-relaxed">
                We don’t disappear after getting paid. If you notice any spot requiring touch-up or edge refinement after work, our supervisor is just a message away.
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
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }} className="inline-block">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 rounded-xl bg-[#D9683B] px-8 py-4 text-base font-extrabold text-white hover:bg-[#c4572b] transition-all shadow-md animate-cta-pulse"
              >
                <span>Schedule Free Home Visit</span>
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};
