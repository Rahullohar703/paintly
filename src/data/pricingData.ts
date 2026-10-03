export interface PricingPackage {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  idealFor?: string;
  priceDisplay: string;
  unit: string;
  estimatedTimeline: string;
  popular?: boolean;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
  serviceSlug: string;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: 'single-room',
    name: '1 Room / Quick Touch-up',
    badge: 'Quick & Low Cost',
    tagline: 'Perfect for a single bedroom, kids room, or rental flat touch-up.',
    priceDisplay: '₹7,999',
    unit: 'all-inclusive (paint + labor + cleaning)',
    estimatedTimeline: 'Done in 1 - 2 Days',
    features: [
      'Original Asian Paints / Berger washable paint',
      'We fill all nail holes & wall cracks',
      'Floor and switchboards covered with tape',
      'Ceiling painted clean white',
      'Room swept and cleaned before we leave',
      '1 Year Free Touch-up Help'
    ],
    ctaText: 'Book 1 Room Painting',
    serviceSlug: 'interior-painting'
  },
  {
    id: '2bhk-flat',
    name: '2 BHK Complete Home',
    badge: 'Most Popular Choice',
    popular: true,
    tagline: 'Full painting for 2 bedrooms, hall, kitchen, and balcony.',
    priceDisplay: '₹18,500 – ₹24,000',
    unit: 'total price for entire 2 BHK flat',
    estimatedTimeline: 'Done in 3 - 4 Days',
    features: [
      'Original Asian Paints Royale / Apcolite paint',
      'Sofa, bed, TV, and floors wrapped in safe plastic',
      'Smooth wall putty to fix cracks & rough spots',
      '2 full coats of fresh paint on every wall',
      'Balcony safety grill & doors painted with shine',
      'Free color advice: we show real paint shades on your wall',
      'Free leftover paint box kept with you for future touch-ups',
      '3 Years No-Peeling Warranty'
    ],
    ctaText: 'Get 2 BHK Fixed Quote',
    serviceSlug: 'interior-painting'
  },
  {
    id: '3bhk-flat',
    name: '3 BHK Complete Home',
    badge: 'Best For Bigger Homes',
    tagline: 'Full painting for 3 bedrooms, large living hall, kitchen, & passage.',
    priceDisplay: '₹28,000 – ₹36,000',
    unit: 'total price for entire 3 BHK flat',
    estimatedTimeline: 'Done in 4 - 5 Days',
    features: [
      'Luxury washable paint (dirt wipes off with a wet cloth)',
      '100% furniture safe: nothing gets a single drop of paint',
      '2 coats wall putty for glass-smooth walls',
      'Ceilings painted bright fresh white',
      'All doors, frames, and window grills painted',
      'Moisture check to fix dampness near bathrooms',
      'Complete house cleaning after painting',
      '3 Years No-Peeling Warranty'
    ],
    ctaText: 'Get 3 BHK Fixed Quote',
    serviceSlug: 'interior-painting'
  },
  {
    id: 'exterior-house',
    name: 'Full House Outside / Waterproof',
    badge: 'Stops Rain Damage',
    tagline: 'Waterproof paint for outside walls, villas, & independent bungalows.',
    priceDisplay: 'From ₹24 / sq ft',
    unit: 'includes pressure wash + water shield',
    estimatedTimeline: 'Done in 5 - 7 Days',
    features: [
      'High-pressure water wash to remove all black mold & dirt',
      'Rain-proof crack filling so water never leaks inside',
      'Asian Paints Apex Ultima sun & rain guard paint',
      'Main gate and boundary wall grill painting',
      'Keeps house cool in summer and dry in monsoon',
      'Garden, plants, and car parking covered safely',
      '5 Years Heavy Rain & Sun Warranty'
    ],
    ctaText: 'Book Free Outside Check',
    serviceSlug: 'exterior-painting'
  }
];

export interface RoomCostItem {
  id: string;
  name: string;
  simpleDescription: string;
  baseCost: number;
}

export interface MaterialTier {
  id: 'budget' | 'standard' | 'luxury';
  name: string;
  materials: string;
  tagline: string;
  multiplier: number;
}

/**
 * Easily customizable budget tiers.
 * Update material names, prices, or multipliers here whenever finalized.
 */
export const budgetTiers: MaterialTier[] = [
  {
    id: 'budget',
    name: 'Low Budget',
    materials: 'Distemper / Tractor Emulsion',
    tagline: 'Cost-effective fresh look • Great for rental flats & quick handover',
    multiplier: 0.85
  },
  {
    id: 'standard',
    name: 'Standard Quality',
    materials: 'Premium Acrylic Emulsion',
    tagline: 'Smooth, durable & long-lasting finish for family homes',
    multiplier: 1.0
  },
  {
    id: 'luxury',
    name: 'Luxury Finish',
    materials: 'Royale / Silk Luxury Sheen',
    tagline: '100% washable rich sheen • Dirt & stain resistant',
    multiplier: 1.25
  }
];

export const simpleEstimatorItems: RoomCostItem[] = [
  { id: '1bhk', name: '1 BHK Flat (Entire House)', simpleDescription: 'Hall + 1 Bedroom + Kitchen', baseCost: 11500 },
  { id: '2bhk', name: '2 BHK Flat (Entire House)', simpleDescription: 'Hall + 2 Bedrooms + Kitchen + Balcony', baseCost: 18500 },
  { id: '3bhk', name: '3 BHK Flat (Entire House)', simpleDescription: 'Hall + 3 Bedrooms + Kitchen + Balcony', baseCost: 28000 },
  { id: 'single_room', name: 'Just 1 Bedroom', simpleDescription: 'Walls + Ceiling + Door touch-up', baseCost: 4500 },
  { id: 'living_room', name: 'Just Living Room / Hall', simpleDescription: 'Main hall where guests sit', baseCost: 7000 },
  { id: 'exterior_villa', name: 'Outside House / Villa', simpleDescription: 'Waterproof outside walls', baseCost: 35000 }
];


