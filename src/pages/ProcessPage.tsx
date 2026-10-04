import React from 'react';
import { Sparkles, Check } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ArrowFillButton } from '../components/common/ArrowFillButton';

export const ProcessPage: React.FC = () => {
  return (
    <div className="space-y-0">
      
      {/* 1. HERO: SUPER SIMPLE */}
      <section className="pt-8 pb-14 md:pt-14 md:pb-20 border-b border-[#E5E3DE] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'How We Work' }]} className="mb-6" />

          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#fbf2ee] text-xs font-bold uppercase tracking-wider text-[#D9683B]">
              <Sparkles className="h-4 w-4" />
              Zero Confusion • 3 Easy Steps
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#20211F] tracking-tight leading-[1.15]">
              How Painting Works With Us.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#73736F] leading-relaxed">
              You don’t have to run around buying paint buckets, argue with local painters, or sweep plaster dust off your floor. We take care of everything from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE 3 SIMPLE STEPS */}
      <section className="py-16 md:py-24 border-b border-[#E5E3DE] bg-[#F1F0EC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* STEP 1 */}
          <div className="rounded-3xl border-2 border-[#E5E3DE] bg-white p-7 sm:p-10 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-3 flex md:flex-col items-center md:items-start gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D9683B] text-white font-extrabold text-2xl font-heading shadow-md">
                  1
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D9683B]">Step One</span>
                  <p className="font-heading text-lg font-bold text-[#20211F]">Free Home Visit</p>
                </div>
              </div>

              <div className="md:col-span-9 space-y-4">
                <h3 className="font-heading text-2xl font-bold text-[#20211F]">
                  We visit your house & check your walls (100% Free)
                </h3>
                <p className="text-sm sm:text-base text-[#73736F] leading-relaxed">
                  Our friendly painting supervisor visits your home whenever it suits you. We inspect your walls, take room measurements, check for any flaking plaster or dampness, and show you real color shade cards. You get an exact written quotation on paper or WhatsApp.
                </p>

                <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-[#E5E3DE] space-y-2 text-xs sm:text-sm text-[#20211F]">
                  <p className="font-bold uppercase tracking-wider text-[11px] text-[#73736F]">What happens in this step:</p>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#D9683B]" />
                    <span>Free in-person wall inspection and room measurements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#D9683B]" />
                    <span>Browse 2,000+ Asian Paints and Berger color shade cards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#D9683B]" />
                    <span>Final written price quotation — zero surprise costs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="rounded-3xl border-2 border-[#E5E3DE] bg-white p-7 sm:p-10 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-3 flex md:flex-col items-center md:items-start gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#20211F] text-white font-extrabold text-2xl font-heading shadow-md">
                  2
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#20211F]">Step Two</span>
                  <p className="font-heading text-lg font-bold text-[#20211F]">Safe Painting</p>
                </div>
              </div>

              <div className="md:col-span-9 space-y-4">
                <h3 className="font-heading text-2xl font-bold text-[#20211F]">
                  We cover your furniture & paint neatly
                </h3>
                <p className="text-sm sm:text-base text-[#73736F] leading-relaxed">
                  Before a single drop of paint is touched, our polite painters move and wrap your sofas, beds, TV, dining table, and electrical switchboards in protective plastic and masking tape. Then we repair wall holes, apply primer, and paint two fresh coats of genuine paint.
                </p>

                <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-[#E5E3DE] space-y-2 text-xs sm:text-sm text-[#20211F]">
                  <p className="font-bold uppercase tracking-wider text-[11px] text-[#73736F]">What happens in this step:</p>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#D9683B]" />
                    <span>Every piece of furniture wrapped securely in clean plastic sheets</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#D9683B]" />
                    <span>Cracks and holes filled with smooth wall putty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#D9683B]" />
                    <span>2 full coats of paint with crisp ceiling and border lines</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="rounded-3xl border-2 border-[#E5E3DE] bg-white p-7 sm:p-10 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-3 flex md:flex-col items-center md:items-start gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-600 text-white font-extrabold text-2xl font-heading shadow-md">
                  3
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Step Three</span>
                  <p className="font-heading text-lg font-bold text-[#20211F]">Clean & Relax</p>
                </div>
              </div>

              <div className="md:col-span-9 space-y-4">
                <h3 className="font-heading text-2xl font-bold text-[#20211F]">
                  We clean up, put everything back & hand over warranty
                </h3>
                <p className="text-sm sm:text-base text-[#73736F] leading-relaxed">
                  We peel off all masking tape, vacuum the floors, and gently place all furniture back exactly where it belongs. Our supervisor walks through every room with you under bright lights. You only make the final payment when you are smiling and 100% happy.
                </p>

                <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-[#E5E3DE] space-y-2 text-xs sm:text-sm text-[#20211F]">
                  <p className="font-bold uppercase tracking-wider text-[11px] text-[#73736F]">What happens in this step:</p>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600" />
                    <span>Floors vacuumed and tidied — zero paint stains</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600" />
                    <span>Inspection walkthrough under bright light with site supervisor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600" />
                    <span>3-Year Warranty Card handed to you + spare touchup paint jar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. FINAL CTA */}
      <section className="py-16 md:py-24 bg-[#20211F] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Ready to Start? Book a Free Home Visit
          </h2>
          <p className="text-base sm:text-lg text-[#CDCAC2] max-w-xl mx-auto">
            Takes 30 seconds. No advance payment required. Our friendly supervisor will visit your home at your convenience.
          </p>
          <div className="pt-2 flex justify-center">
            <ArrowFillButton
              to="/quote"
              size="lg"
              text="Book Free Visit (No Payment)"
              bgColor="#D9683B"
              fillBgColor="#FAF9F6"
              textColor="#ffffff"
              fillTextColor="#20211F"
              arrowColor="#ffffff"
              className="shadow-2xl"
            />
          </div>
        </div>
      </section>

    </div>
  );
};
