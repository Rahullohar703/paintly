import type { ProcessStep } from '../types';

export const companyConfig = {
  name: 'Paintly',
  tagline: 'A Fresh Coat. A Better Space.',
  introLabel: 'PROFESSIONAL PAINTING SERVICES ACROSS INDIA',
  heroHeadline: 'A Fresh Coat. A Better Space.',
  heroSubhead: 'From thoughtfully painted apartments and independent homes to commercial workspaces, Paintly delivers professional painting with quality workmanship, Asian Paints / Berger certified materials, and transparent per-sqft quotations.',
  contact: {
    email: 'support@paintly.in',
    address: 'Available across Metro & Tier-1 Cities in India',
    hours: 'Monday – Saturday: 9:00 AM – 7:00 PM IST',
    ctaPrompt: 'Request a Free Site Callback',
    whatsAppPrompt: 'Instant WhatsApp Assistance'
  },
  socials: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com'
  }
};

export const trustCommitments = [
  {
    title: 'Certified Master Painters',
    description: 'Trained, background-verified painting crews skilled in surface putty leveling and precision masking.',
    icon: 'ShieldCheck'
  },
  {
    title: '100% Genuine Brand Paints',
    description: 'Sealed containers from Asian Paints (Royale/Apex), Berger, and Dulux opened directly on your site.',
    icon: 'Sparkles'
  },
  {
    title: 'Transparent Written Rates',
    description: 'Accurate room measurement quotations. No hidden putty or labor charges added midway through work.',
    icon: 'FileText'
  },
  {
    title: 'Furniture & Floor Masking',
    description: 'Ram Board floor lining and complete plastic wrapping of sofas, TV units, beds, and fixtures.',
    icon: 'Clock'
  }
];

export const whyChoosePillars = [
  {
    number: '01',
    title: 'Accurate In-Person Measurement',
    description: 'We do not guess room sizes. Our supervisors inspect the walls and measure carpet and wall areas so you get a fair, exact quotation.'
  },
  {
    number: '02',
    title: 'Wall Seepage & Moisture Diagnosis',
    description: 'Every site visit includes checks on skirting, bathrooms, and exterior walls to treat dampness before applying paint.'
  },
  {
    number: '03',
    title: 'Two Coats Putty & Primer Standard',
    description: 'Proper substrate preparation: filling micro-cracks, dual-coat acrylic putty skimming, and dust-free sanding for a glass-like finish.'
  },
  {
    number: '04',
    title: 'Daily Site Cleanup',
    description: 'Our team consolidates tools, vacuums sanding dust, and ensures your home remains livable throughout the project duration.'
  },
  {
    number: '05',
    title: 'Milestone Payments',
    description: 'Transparent milestone payments: advance for paint and materials, progress payment on first coat, and balance upon completion walkthrough.'
  }
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Book a Free Site Visit',
    subtitle: 'Zero Cost • 15 Minutes',
    description: 'Share your BHK configuration or commercial property details. Our project advisor visits at your preferred time slot.',
    deliverables: [
      'In-person room measurement & wall inspection',
      'Wall moisture & dampness test',
      'Shade card & color consultation'
    ],
    icon: 'ClipboardList'
  },
  {
    number: '02',
    title: 'Itemized Digital Quotation',
    subtitle: 'Fixed Price Guarantee',
    description: 'Receive an instant WhatsApp and email quote breaking down exact paint brand grades, putty scope, timelines, and costs.',
    deliverables: [
      'Paint grade selection (Economy, Royale, Luxury)',
      'Clear project completion date',
      'No hidden extras contract'
    ],
    icon: 'Search'
  },
  {
    number: '03',
    title: 'Masking & Preparation',
    subtitle: '100% Protection',
    description: 'Our painters tape floors, wrap all furniture in protective film, seal switchboards, and begin crack filling and putty leveling.',
    deliverables: [
      'Heavy-duty floor protection',
      'Furniture center-staging',
      'Two-coat putty application'
    ],
    icon: 'FileCheck'
  },
  {
    number: '04',
    title: 'Precision Painting',
    subtitle: '2-Coat Minimum',
    description: 'Application of primer plus two coats of certified washable emulsion with clean cut-ins and zero roller stipple flashing.',
    deliverables: [
      'Genuine factory-sealed paint cans',
      'Uniform mil thickness application',
      'Daily site tidy-up'
    ],
    icon: 'Paintbrush'
  },
  {
    number: '05',
    title: 'Quality Check & Handover',
    subtitle: 'Final Walkthrough',
    description: 'We remove all masking tape, deep clean the floor borders, conduct a joint inspection walk, and hand over labeled touch-up paints.',
    deliverables: [
      'Formal punch-list resolution',
      'Clean post-paint tidy-up',
      'Touch-up container handover'
    ],
    icon: 'CheckCircle'
  }
];

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Our Process', href: '/process' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];
