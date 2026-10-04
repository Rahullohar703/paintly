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
    name: 'Single Room & Touch-Up',
    badge: 'Quick Refresh',
    tagline: 'Ideal for an accent wall, single bedroom, or rental turnover.',
    priceDisplay: '₹7,999',
    unit: 'All-inclusive (materials, labor & masking)',
    estimatedTimeline: '1 – 2 Days',
    features: [
      'Asian Paints / Berger washable interior emulsion',
      'Crack bridging & smooth acrylic wall putty',
      'Floor tiles & switchboards masked in film',
      'Ceiling coated in luminous pure white',
      '1-Year Free touch-up workmanship warranty'
    ],
    ctaText: 'Book 1 Room',
    serviceSlug: 'interior-painting'
  },
  {
    id: '2bhk-flat',
    name: '2 BHK Signature Living',
    badge: 'Most Requested',
    popular: true,
    tagline: 'Full interior refresh for 2 bedrooms, hall, kitchen & passage.',
    priceDisplay: '₹18,500 – ₹24,000',
    unit: 'Fixed estimate for full 2 BHK apartment',
    estimatedTimeline: '3 – 4 Days',
    features: [
      'Asian Paints Royale Luxury Matt / Apcolite',
      'Full furniture & electronic plastic film wrap',
      '2 coats acrylic putty skim for smooth walls',
      'Dual-coat precision roller finish on all walls',
      '3-Year No-Peel written warranty certificate'
    ],
    ctaText: 'Get 2 BHK Quote',
    serviceSlug: 'interior-painting'
  },
  {
    id: '3bhk-flat',
    name: '3 BHK Estate Interior',
    badge: 'Large Residence',
    tagline: 'Comprehensive luxury coating across 3 bedrooms & living areas.',
    priceDisplay: '₹28,000 – ₹36,000',
    unit: 'Fixed estimate for full 3 BHK apartment',
    estimatedTimeline: '4 – 5 Days',
    features: [
      'Washable Silk / Royale sheen topcoat finish',
      'Zero-splatter masking for curtains & ACs',
      'Moisture scan & dampness repair before paint',
      'Door frames, baseboards & metal grills included',
      '3-Year No-Peel written warranty certificate'
    ],
    ctaText: 'Get 3 BHK Quote',
    serviceSlug: 'interior-painting'
  },
  {
    id: 'exterior-house',
    name: 'Exterior Facade & Shield',
    badge: 'Weather Defense',
    tagline: 'High-durability waterproof protection for villas & homes.',
    priceDisplay: 'From ₹24 / sq ft',
    unit: 'Includes pressure washing & fungal shield',
    estimatedTimeline: '5 – 7 Days',
    features: [
      'High-pressure power wash & fungal sterilization',
      'Rain-proof elastomeric crack sealing primer',
      'Asian Paints Apex Ultima anti-algae shield',
      'Boundary walls, balcony railings & gates coated',
      '5-Year Monsoon & UV Sun-Fade warranty'
    ],
    ctaText: 'Get Exterior Quote',
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


