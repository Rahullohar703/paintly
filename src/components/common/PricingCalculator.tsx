import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  Sparkles, 
  CheckCircle2
} from 'lucide-react';
import { simpleEstimatorItems, budgetTiers } from '../../data/pricingData';
import { ArrowFillButton } from './ArrowFillButton';

export const PricingCalculator: React.FC = () => {
  const [selectedHomeType, setSelectedHomeType] = useState<string>('2bhk');
  const [paintQuality, setPaintQuality] = useState<'budget' | 'standard' | 'luxury'>('standard');
  const [includeGrillsAndDoors, setIncludeGrillsAndDoors] = useState<boolean>(true);

  const selectedItem = simpleEstimatorItems.find((i) => i.id === selectedHomeType) || simpleEstimatorItems[1];
  const activeTier = budgetTiers.find((t) => t.id === paintQuality) || budgetTiers[1];

  // Simple math based on tiers
  const qualityMultiplier = activeTier.multiplier;
  const doorsMultiplier = includeGrillsAndDoors ? 1.15 : 1.0;

  const baseCalculated = Math.round(selectedItem.baseCost * qualityMultiplier * doorsMultiplier);
  const lowPrice = Math.round(baseCalculated * 0.95);
  const highPrice = Math.round(baseCalculated * 1.12);

  return (
    <div className="bg-white rounded-3xl border-2 border-[#E5E3DE] p-6 sm:p-10 shadow-sm max-w-5xl mx-auto">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto pb-8 border-b border-[#E5E3DE]">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#fbf2ee] text-[#D9683B] text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="h-4 w-4" />
          Quick Price Check
        </span>
        <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#20211F]">
          How Much Will It Cost to Paint Your Home?
        </h3>
        <p className="text-sm sm:text-base text-[#73736F] mt-2">
          Click your house size below. You will see the total price right away — includes paint, labor, wall repair, and cleaning.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start">
        
        {/* LEFT: SIMPLE CHOICES */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* STEP 1: PICK HOME SIZE */}
          <div>
            <label className="block text-sm font-extrabold text-[#20211F] mb-3">
              Step 1: What do you want to paint?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {simpleEstimatorItems.map((item) => {
                const isSelected = selectedHomeType === item.id;
                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedHomeType(item.id)}
                    className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#D9683B] bg-[#fbf2ee] shadow-sm'
                        : 'border-[#E5E3DE] bg-[#FAF9F6] hover:border-[#CDCAC2]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-base font-bold text-[#20211F]">
                        {item.name}
                      </span>
                      {isSelected && (
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#D9683B] text-white">
                          <Check className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-[#73736F] mt-1">
                      {item.simpleDescription}
                    </p>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* STEP 2: PICK PAINT QUALITY / BUDGET TIER */}
          <div>
            <label className="block text-sm font-extrabold text-[#20211F] mb-3">
              Step 2: Choose Paint Budget Tier
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {budgetTiers.map((tier) => {
                const isSelected = paintQuality === tier.id;
                return (
                  <motion.button
                    key={tier.id}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setPaintQuality(tier.id)}
                    className={`p-3.5 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                      isSelected
                        ? tier.id === 'luxury'
                          ? 'border-[#D9683B] bg-[#D9683B] text-white shadow-sm'
                          : tier.id === 'standard'
                          ? 'border-[#D9683B] bg-[#fbf2ee] text-[#20211F] ring-2 ring-[#D9683B]/20 font-bold'
                          : 'border-[#20211F] bg-[#20211F] text-white shadow-sm'
                        : 'border-[#E5E3DE] bg-[#FAF9F6] text-[#20211F] hover:border-[#CDCAC2]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-heading text-sm font-bold">{tier.name}</p>
                      {tier.id === 'luxury' && <Sparkles className="h-3.5 w-3.5" />}
                    </div>
                    <p className={`text-[11px] mt-1 font-semibold ${
                      isSelected && (tier.id === 'luxury' || tier.id === 'budget') ? 'text-white/95' : 'text-[#D9683B]'
                    }`}>
                      {tier.materials}
                    </p>
                    <p className={`text-[10px] mt-0.5 leading-snug ${
                      isSelected && (tier.id === 'luxury' || tier.id === 'budget') ? 'text-white/80' : 'text-[#73736F]'
                    }`}>
                      {tier.tagline}
                    </p>
                  </motion.button>
                );
              })}
            </div>
            <p className="text-[11px] text-[#73736F] mt-2 italic">
              *You can finalize the exact paint materials (Distemper, Tractor, Apcolite, or Royale) with our supervisor during the free visit.
            </p>
          </div>

          {/* STEP 3: DOORS & GRILLS */}
          <div>
            <label className="flex items-center gap-3 p-4 rounded-2xl border border-[#E5E3DE] bg-[#FAF9F6] cursor-pointer">
              <input
                type="checkbox"
                checked={includeGrillsAndDoors}
                onChange={(e) => setIncludeGrillsAndDoors(e.target.checked)}
                className="h-5 w-5 rounded text-[#D9683B] focus:ring-[#D9683B]"
              />
              <div>
                <span className="text-sm font-bold text-[#20211F] block">
                  Also paint main door, room doors, and window grills
                </span>
                <span className="text-xs text-[#73736F]">
                  Gives doors and grills a shiny, fresh look and protects against rust.
                </span>
              </div>
            </label>
          </div>

        </div>

        {/* RIGHT: BIG CLEAR PRICE BOX */}
        <div className="lg:col-span-5 bg-[#20211F] text-white rounded-3xl p-6 sm:p-8 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9683B] block">
              Estimated Total Cost
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${lowPrice}-${highPrice}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="mt-2"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-white">
                  ₹{lowPrice.toLocaleString('en-IN')} – ₹{highPrice.toLocaleString('en-IN')}
                </div>
                <p className="text-xs text-[#A2A29D] mt-1 font-medium">
                  For: {selectedItem.name}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Simple check list of what they get */}
          <div className="pt-4 border-t border-white/10 space-y-3 text-xs">
            <p className="font-bold text-sm text-white">Everything is included:</p>
            
            <div className="flex items-start gap-2.5 text-[#CDCAC2]">
              <CheckCircle2 className="h-4 w-4 text-[#D9683B] flex-shrink-0 mt-0.5" />
              <span><strong>Original paint cans</strong> opened in front of your eyes</span>
            </div>

            <div className="flex items-start gap-2.5 text-[#CDCAC2]">
              <CheckCircle2 className="h-4 w-4 text-[#D9683B] flex-shrink-0 mt-0.5" />
              <span><strong>Sofa, TV & floors covered</strong> safely in plastic</span>
            </div>

            <div className="flex items-start gap-2.5 text-[#CDCAC2]">
              <CheckCircle2 className="h-4 w-4 text-[#D9683B] flex-shrink-0 mt-0.5" />
              <span><strong>Wall cracks & holes filled</strong> and smoothed</span>
            </div>

            <div className="flex items-start gap-2.5 text-[#CDCAC2]">
              <CheckCircle2 className="h-4 w-4 text-[#D9683B] flex-shrink-0 mt-0.5" />
              <span><strong>Clean-up done daily:</strong> no paint drops on your floor</span>
            </div>

            <div className="flex items-start gap-2.5 text-[#CDCAC2]">
              <CheckCircle2 className="h-4 w-4 text-[#D9683B] flex-shrink-0 mt-0.5" />
              <span><strong>Clear written quote:</strong> milestone payments, no surprise extras</span>
            </div>
          </div>

          {/* Big Action button */}
          <div className="w-full flex justify-center">
            <ArrowFillButton
              to="/quote"
              size="lg"
              text="Book Free Home Visit"
              bgColor="#D9683B"
              fillBgColor="#20211F"
              textColor="#ffffff"
              fillTextColor="#ffffff"
              arrowColor="#ffffff"
              className="w-full shadow-md"
            />
          </div>

            <p className="text-[11px] text-center text-[#A2A29D]">
              Our experienced supervisor visits your home, inspects your walls, and provides a clear itemized quote on paper. 100% free with zero obligation.
            </p>
          </div>
        </div>

      </div>
  );
};
