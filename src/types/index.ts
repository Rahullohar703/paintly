export type ServiceCategory = 'residential' | 'commercial' | 'industrial' | 'specialty';

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroDescription: string;
  image: string;
  category: ServiceCategory;
  propertyTypes: string[];
  scopeOfWork: string[];
  preparationSteps: {
    step: string;
    description: string;
  }[];
  materialsAndFinishes: {
    name: string;
    description: string;
    recommendedFor: string;
  }[];
  executionHighlights: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedProjectSlugs: string[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: 'residential' | 'commercial' | 'industrial';
  categoryLabel: string;
  location: string;
  timeline: string;
  area: string;
  year: string;
  heroImage: string;
  galleryImages: string[];
  overview: string;
  challenge: string;
  solution: string;
  materialsUsed: string[];
  finishType: string;
  colorPalette: {
    name: string;
    hex: string;
    role: string;
  }[];
  beforeImage?: string;
  afterImage?: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  roleOrProperty: string;
  projectType: string;
  location: string;
  quote: string;
  rating: number;
  highlight: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface QuoteFormData {
  // Step 1: Project Information
  serviceType: string;
  propertyType: string;
  approxArea: string;
  projectLocation: string;
  projectDescription: string;

  // Step 2: Project Requirements
  projectNature: 'repainting' | 'new-construction' | 'touchup';
  scopeArea: 'interior' | 'exterior' | 'both';
  preferredFinish: string;
  startDate: string;
  budgetRange: string;

  // Step 3: Contact Information
  fullName: string;
  phone: string;
  email: string;
  preferredContact: 'phone' | 'email' | 'whatsapp';
  agreedToTerms: boolean;
}
