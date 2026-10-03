import type { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'interior-painting',
    slug: 'interior-painting',
    title: 'Interior Painting',
    shortDescription: 'Professional interior painting for apartments, villas, homes, offices, and other indoor spaces.',
    heroDescription: 'From high ceiling living spaces to bespoke bedrooms and private studies, our interior painting blends precise cut-ins, ultra smooth wall prep, and low-VOC paints for spaces you love living in.',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1600&q=80',
    category: 'residential',
    propertyTypes: [
      'Luxury Villas & Estates',
      'Modern High-Rise Apartments',
      'Townhouses & Duplexes',
      'Architectural Homes',
      'Private Executive Offices'
    ],
    scopeOfWork: [
      'Full wall and ceiling painting with crisp, clean border trim lines',
      'Baseboard, door frame, window casing, and crown molding coating',
      'Feature accent walls with limewash, microcement, or textural finishes',
      'Cabinetry and bespoke built-in furniture spray refinishing',
      'Moisture-resistant bathroom and kitchen ceiling treatments'
    ],
    preparationSteps: [
      {
        step: 'Comprehensive Masking & Floor Covering',
        description: 'Floors, fixtures, and furniture are covered with heavy-duty drop cloths and sealed plastic barriers before any tool touches a wall.'
      },
      {
        step: 'Surface Assessment & Defect Repair',
        description: 'Every nail pop, hairline crack, indentation, and drywall seam is filled with premium spackling compound and reinforced.'
      },
      {
        step: 'Mechanical Sanding & Leveling',
        description: 'Dustless orbital sanding creates an even Level 4/5 substrate readiness without filling your living space with dust.'
      },
      {
        step: 'Substrate Priming & Stain Blocking',
        description: 'High-adhesion acrylic primers seal patched areas, preventing flashing and ensuring uniform sheen across all lighting angles.'
      }
    ],
    materialsAndFinishes: [
      {
        name: 'Matte & Flat Acrylic',
        description: 'Non-reflective finish that hides surface imperfections; ideal for ceilings and master bedrooms.',
        recommendedFor: 'Ceilings, Low-traffic living rooms'
      },
      {
        name: 'Eggshell & Velvet Sheen',
        description: 'Subtle soft luster offering wipeable durability with zero harsh glare.',
        recommendedFor: 'Family rooms, Hallways, Dining areas'
      },
      {
        name: 'Satin & Semi-Gloss Enamel',
        description: 'Tough, moisture-resistant film engineered to withstand frequent wiping and humidity.',
        recommendedFor: 'Kitchens, Bathrooms, Baseboards, Trim'
      }
    ],
    executionHighlights: [
      'Zero-VOC and ultra-low-odor paint formulations safe for families and pets',
      'Daily site tidy-up and progress review by dedicated site supervisor',
      'Rigorous two-coat minimum standard over primed substrate',
      'Final touch-up kit left with homeowner containing labeled paint samples'
    ],
    faqs: [
      {
        question: 'Do I need to move all my furniture out of the house?',
        answer: 'No. Our crew moves large furniture items into the center of the room and covers them completely with protective plastic and canvas drop cloths. We only ask that you clear fragile valuables and personal items from shelves.'
      },
      {
        question: 'How long does an interior painting project typically take?',
        answer: 'A standard 3-bedroom residence typically requires 3 to 5 business days, including full surface preparation, double coat application, and final detailing.'
      },
      {
        question: 'Are the paints safe to sleep in the house while painting?',
        answer: 'Yes. We exclusively use premium low-VOC and zero-VOC paint systems from top manufacturers, ensuring minimal to no odor and zero toxic off-gassing.'
      }
    ],
    relatedProjectSlugs: ['minimalist-concrete-residence', 'harbor-view-penthouse']
  },
  {
    id: 'exterior-painting',
    slug: 'exterior-painting',
    title: 'Exterior Painting',
    shortDescription: 'Weather resistant exterior finishes, building repainting, and protective coatings.',
    heroDescription: 'Defend your property against UV radiation, torrential rain, and humidity. Paintly delivers exterior facade restorations that combine architectural elegance with engineered durability.',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80',
    category: 'residential',
    propertyTypes: [
      'Residential Villas & Bungalows',
      'Gated Community Enclaves',
      'Multi-Family Apartment Complexes',
      'Commercial Building Facades',
      'Heritage & Masonry Structures'
    ],
    scopeOfWork: [
      'Stucco, concrete, brick, and fiber-cement cladding coating',
      'Elastomeric waterproofing membranes for hairline-cracked masonry',
      'Exterior woodwork, pergolas, eaves, and soffit staining/enameling',
      'Metal railings, balcony balustrades, and architectural metal protection',
      'Pressure washing and biological growth anti-fungal treatments'
    ],
    preparationSteps: [
      {
        step: 'High-Pressure Surface Washing',
        description: 'Removal of chalking paint, dirt, efflorescence, and mildew using calibrated commercial pressure washing units.'
      },
      {
        step: 'Masonry & Render Remediation',
        description: 'Chipping away hollow render, sealing structural cracks with polyurethane elastomeric sealant, and spot re-plastering.'
      },
      {
        step: 'Peeling Paint Scraping & Feathering',
        description: 'Scraping loose paint to a sound edge and feather-sanding boundaries to guarantee a seamless coat transition.'
      },
      {
        step: 'Deep Penetrating Alkali-Resistant Primer',
        description: 'Application of masonry stabilization primer that neutralizes wall alkalinity and binds porous substrates.'
      }
    ],
    materialsAndFinishes: [
      {
        name: 'Elastomeric Waterproof Coating',
        description: 'Flexible 100% acrylic membrane capable of bridging recurring dynamic micro-cracks over exterior masonry.',
        recommendedFor: 'Stucco walls, Plastered exterior facades'
      },
      {
        name: 'UV-Shield Exterior Emulsion',
        description: 'Formulated with advanced cross-linking resins to resist fade, chalking, and dirt pick-up over years of sun exposure.',
        recommendedFor: 'All exterior vertical surfaces'
      },
      {
        name: 'Direct-to-Metal Polyurethane Enamel',
        description: 'Anti-corrosion finish for structural steel, aluminum gates, and exterior trim.',
        recommendedFor: 'Railings, Balcony frames, Iron gates'
      }
    ],
    executionHighlights: [
      'Certified scaffolding, boom-lift, and safety harness rigging',
      'Weather-monitored scheduling avoiding moisture and extreme temperature windows',
      'Plant, landscaping, and driveway perimeter shielding with breathable tarps',
      'Multi-year warranty against flaking, peeling, and blistering'
    ],
    faqs: [
      {
        question: 'How do you protect our landscaping and outdoor paving?',
        answer: 'We wrap delicate bushes, shrubs, and trees with breathable canvas covers and protect stone walkways, driveways, and outdoor furniture with heavy duty drop cloths.'
      },
      {
        question: 'What is the best time of year to paint building exteriors?',
        answer: 'Dry seasons with temperatures between 10°C and 32°C (50°F to 90°F) and low relative humidity are ideal. We continuously monitor ambient moisture meters before applying any exterior coating.'
      },
      {
        question: 'How often does an exterior paint job need repainting?',
        answer: 'With our premium preparation and exterior acrylic or elastomeric coatings, exterior finishes generally retain their beauty and protection for 8 to 12 years.'
      }
    ],
    relatedProjectSlugs: ['historic-heritage-facade', 'harbor-view-penthouse']
  },
  {
    id: 'commercial-painting',
    slug: 'commercial-painting',
    title: 'Commercial Painting',
    shortDescription: 'Professional painting services for offices, retail stores, showrooms, hotels, and commercial properties.',
    heroDescription: 'Minimizing business downtime while elevating corporate image. Paintly executes commercial painting for offices, boutique retail, hospitality, and corporate headquarters with structured schedules.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    category: 'commercial',
    propertyTypes: [
      'Corporate Headquarters & Coworking Hubs',
      'Flagship Retail Stores & Showrooms',
      'Boutique Hotels & Restaurants',
      'Medical Clinics & Healthcare Facilities',
      'Educational Institutions & Campuses'
    ],
    scopeOfWork: [
      'High-traffic wall coatings with scrubbable scuff-resistant formulations',
      'Acoustic ceiling spraying and open-plenum black-out/white-out finishes',
      'Brand-matched custom color palette implementation',
      'Night-shift and weekend painting to eliminate daytime business disruption',
      'Dry-erase ideation whiteboard wall coatings'
    ],
    preparationSteps: [
      {
        step: 'Commercial Phasing & Logistics Plan',
        description: 'Detailed zoning plan dividing your facility into phases so your staff or customers continue operations seamlessly.'
      },
      {
        step: 'Asset & Data Infrastructure Protection',
        description: 'Workstations, electronic equipment, server racks, and carpet tiles are completely dust-sealed.'
      },
      {
        step: 'Heavy-Duty Commercial Patching',
        description: 'Corner guard repairs, high-impact scuff smoothing, and fire-door prep according to building codes.'
      },
      {
        step: 'Rapid-Cure Low-Odor Priming',
        description: 'Application of high-performance zero-VOC primers that dry quickly with undetectable scent.'
      }
    ],
    materialsAndFinishes: [
      {
        name: 'Scuff-Resistant Acrylic Latex',
        description: 'Patented technology resisting black heel marks and chair rub in busy commercial hallways.',
        recommendedFor: 'Office corridors, Meeting rooms, Breakrooms'
      },
      {
        name: 'Single-Pack Epoxy & Enamel',
        description: 'Chemical-resistant and easily sanitized surfaces for restrooms, clinics, and cafeterias.',
        recommendedFor: 'Restrooms, Cleanrooms, High-sanitization areas'
      },
      {
        name: 'Dry-Fall Ceiling Coatings',
        description: 'Overspray drops as dry dust within 10 feet, allowing rapid spraying of structural open ceilings.',
        recommendedFor: 'Exposed structural ceilings, Warehouses, Retail lofts'
      }
    ],
    executionHighlights: [
      'Off-hours flexibility: overnight, split-shift, and weekend crews',
      'OSHA-compliant safety standards and background-checked personnel',
      'Dedicated Commercial Project Manager with single point of contact',
      'Strict adherence to commercial lease handover deadlines'
    ],
    faqs: [
      {
        question: 'Can you paint our commercial office over the weekend or at night?',
        answer: 'Yes, the majority of our commercial office clients utilize our overnight or weekend execution teams so normal business operations are 100% uninterrupted.'
      },
      {
        question: 'Can you match our exact corporate brand colors?',
        answer: 'Absolutely. We utilize digital spectrophotometer color-matching to replicate your brand Pantone or RAL color codes precisely.'
      },
      {
        question: 'Do you carry commercial liability insurance and worker compensation?',
        answer: 'Yes. Paintly carries comprehensive commercial general liability coverage and all crew members are fully insured.'
      }
    ],
    relatedProjectSlugs: ['apex-creative-headquarters', 'artisan-retail-flagship']
  },
  {
    id: 'industrial-painting',
    slug: 'industrial-painting',
    title: 'Industrial Painting',
    shortDescription: 'Painting and coating services for factories, warehouses, industrial floors, and other large facilities.',
    heroDescription: 'Engineered protective coatings built for demanding environments. From high-build epoxy floorings to corrosion-inhibiting structural steel primers, we protect heavy assets.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80',
    category: 'industrial',
    propertyTypes: [
      'Manufacturing Plants & Fabrication Facilities',
      'Logistics Warehouses & Distribution Centers',
      'Food & Beverage Processing Facilities',
      'Automotive Workshops & Garages',
      'Cold Storage Facilities & Chemical Depots'
    ],
    scopeOfWork: [
      'High-build 100% solids epoxy and polyurethane floor coatings',
      'Safety line demarcation, forklift pathways, and hazard zone striping',
      'Corrosion protection for structural steel columns, joists, and trusses',
      'Silo, tank, pipe identification, and industrial ductwork coatings',
      'Dust-proofing and densification for porous bare concrete slabs'
    ],
    preparationSteps: [
      {
        step: 'Diamond Grinding & Shot Blasting',
        description: 'Mechanical profiling of concrete to ICRI CSP-2 to CSP-4 standard ensuring chemical and physical mechanical interlock.'
      },
      {
        step: 'Moisture Vapor Emission Testing (MVER)',
        description: 'Testing substrate relative humidity and hydrostatic pressure to prevent coating delamination or blistering.'
      },
      {
        step: 'Joint & Control Crack Reconstruction',
        description: 'V-grooving and polyurea joint filling to absorb dynamic heavy forklift traffic impact.'
      },
      {
        step: 'Penetrating Epoxy Primer Sealer',
        description: 'Low-viscosity 100% solids epoxy primer wicks into open concrete capillaries.'
      }
    ],
    materialsAndFinishes: [
      {
        name: '100% Solids High-Build Epoxy',
        description: 'Heavy duty impact and chemical resistant self-leveling flooring system.',
        recommendedFor: 'Warehouse floors, Production lines, Laboratories'
      },
      {
        name: 'Aliphatic Polyurethane Topcoat',
        description: 'Extreme abrasion and UV-stable clear or tinted topcoat with chemical stain resistance.',
        recommendedFor: 'High-traffic corridors, Loading bays'
      },
      {
        name: 'Zinc-Rich Epoxy Primer & Polyurethane Steel Topcoat',
        description: 'Cathodic sacrificial protection preventing corrosion on structural steel frames.',
        recommendedFor: 'Steel trusses, Columns, Cranes, Piping'
      }
    ],
    executionHighlights: [
      'Fast-cure polyaspartic systems with return-to-service in as little as 24 hours',
      'Non-slip aggregate broadcasting tailored to OSHA slip coefficient safety criteria',
      'Industrial airless sprayers and diamond grinding equipment with HEPA filtration',
      'Strict site containment preventing cross-contamination in active plants'
    ],
    faqs: [
      {
        question: 'How quickly can our industrial warehouse floor return to forklift traffic?',
        answer: 'Standard epoxy systems require 48 to 72 hours for full mechanical cure, while our rapid-cure polyaspartic options can handle heavy forklift traffic in just 24 hours.'
      },
      {
        question: 'How do you test concrete before applying epoxy flooring?',
        answer: 'We conduct calcium chloride moisture dome tests and relative humidity probe testing to ensure the concrete is within allowable limits before coating.'
      },
      {
        question: 'Can you apply OSHA-compliant safety colors and yellow hazard striping?',
        answer: 'Yes, we specialize in complete facility demarcation including pedestrian aisles, forklift intersections, fire extinguisher clearances, and loading bays.'
      }
    ],
    relatedProjectSlugs: ['meridian-logistics-distribution-hub']
  },
  {
    id: 'surface-preparation',
    slug: 'surface-preparation',
    title: 'Surface Preparation and Repainting',
    shortDescription: 'Wall repairs, putty, sanding, priming, surface treatment, and repainting.',
    heroDescription: 'A finish is only as good as the surface beneath it. Paintly invests 70% of project time into comprehensive restoration, skimming, crack bridging, and micro-sanding.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1600&q=80',
    category: 'specialty',
    propertyTypes: [
      'Aging Residential Homes with Damaged Plaster',
      'Pre-Lease Commercial Tenant Restorations',
      'Historic Renovations Requiring Delamination Stripping',
      'Water-Damaged Drywall & Ceilings',
      'Previously Painted Spaces with Blistering or Flaking'
    ],
    scopeOfWork: [
      'Multi-coat acrylic wall putty and skimming for glass-smooth Level 5 finish',
      'Crack stabilization using fiber mesh tape and elastomeric compounds',
      'Old peeling paint scraping, chemical stripping, and mechanical feathering',
      'Mold, mildew, and moisture stain remediation with stain-blocking barrier primers',
      'Re-caulking baseboards, door frames, and architectural millwork gaps'
    ],
    preparationSteps: [
      {
        step: 'Acoustic & Visual Substrate Audit',
        description: 'Tapping and inspecting every square foot to detect hollow plaster, water intrusion, or detached backing.'
      },
      {
        step: 'Mechanical Paint Removal & Scraping',
        description: 'Removing all failing layers down to the solid substrate; zero painting over loose debris.'
      },
      {
        step: 'Dual-Coat Skim Coat Application',
        description: 'Applying ultra-fine polymer-modified wall putty across entire wall spans to erase micro-ripples.'
      },
      {
        step: 'Dust-Free Orbital Sanding & Raking Light Inspection',
        description: 'Inspection under high-intensity raking halogen lamps to catch and smooth even microscopic imperfections.'
      }
    ],
    materialsAndFinishes: [
      {
        name: 'Polymer-Modified Acrylic Skim Putty',
        description: 'High-tensile smoothing compound that resists shrinkage and hairline cracking.',
        recommendedFor: 'Full wall skim coating, Ceiling restoration'
      },
      {
        name: 'Shellac & Oil-Based Stain Blockers',
        description: 'Permanent sealers for water stains, smoke soot, and tannin bleed-through.',
        recommendedFor: 'Water leak marks, Kitchen grease areas'
      },
      {
        name: 'Polyurethane Elastomeric Joint Sealant',
        description: 'Paintable flexible sealant for high-movement architectural joints and trim seams.',
        recommendedFor: 'Baseboard gaps, Window trim, Crown moldings'
      }
    ],
    executionHighlights: [
      'Festool dust extraction systems capturing 99.9% of airborne particles during sanding',
      'Level 5 architectural finish certification capability',
      'No shortcuts: we never paint over damp or unbonded surfaces',
      'Full moisture meter diagnostics performed prior to application'
    ],
    faqs: [
      {
        question: 'Why do you place so much emphasis on surface preparation?',
        answer: 'Over 85% of paint failures (peeling, flaking, bubbling) are caused by inadequate surface preparation. Thorough skimming, cleaning, and priming guarantees your paint adheres flawlessly for years.'
      },
      {
        question: 'Can you fix water damage stains on ceilings and walls?',
        answer: 'Yes. Once the plumbing source is repaired and the area is dry, we treat the stain with synthetic shellac stain-blocking primers before skimming and repainting so the stain never bleeds through.'
      },
      {
        question: 'What is a Level 5 drywall finish?',
        answer: 'A Level 5 finish involves a full skim coat of compound over the entire wall or ceiling surface, producing a completely uniform, mirror-smooth canvas that eliminates visible drywall seams under critical lighting.'
      }
    ],
    relatedProjectSlugs: ['historic-heritage-facade', 'minimalist-concrete-residence']
  }
];
