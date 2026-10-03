import type { TestimonialItem } from '../types';

// Sample client feedback for design and demonstration purposes.
// These entries serve as structural placeholders to be populated with verified client reviews.
export const sampleTestimonials: TestimonialItem[] = [
  {
    id: 'test-1',
    clientName: 'Marcus Vance',
    roleOrProperty: 'Homeowner',
    projectType: 'Interior Repainting',
    location: 'West End Hills',
    quote: 'The level of surface preparation Paintly delivered was remarkable. They spent two days smoothing imperfections before even opening the topcoat cans. The edges are razor sharp.',
    rating: 5,
    highlight: 'Immaculate preparation & sharp cut-ins'
  },
  {
    id: 'test-2',
    clientName: 'Elena Rostova',
    roleOrProperty: 'Principal Architect, Studio Form',
    projectType: 'Commercial Showroom & Studio',
    location: 'Design Quarter',
    quote: 'As an architectural studio, our standards for finish consistency and lighting interaction are unforgiving. Paintly followed our exact specification without shortcuts.',
    rating: 5,
    highlight: 'Architectural precision and adherence to spec'
  },
  {
    id: 'test-3',
    clientName: 'David Chen',
    roleOrProperty: 'Operations Director, Apex Studios',
    projectType: 'Commercial Office Night-Shift',
    location: 'Tech Innovation Park',
    quote: 'Executing an office repaint over 14,000 square feet without disrupting daytime team operations seemed challenging, but Paintly completed the night-shifts cleanly and on schedule.',
    rating: 5,
    highlight: 'Clean overnight execution with zero daytime disruption'
  },
  {
    id: 'test-4',
    clientName: 'Sarah Jenkins',
    roleOrProperty: 'Villa Owner',
    projectType: 'Exterior Facade & Balconies',
    location: 'Coastal District',
    quote: 'Clear written scope, daily progress updates, and a spotless site at the end of each afternoon. The quotation was transparent with no surprise extras.',
    rating: 5,
    highlight: 'Transparent pricing and respectful crew'
  }
];
