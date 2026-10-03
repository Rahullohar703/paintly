import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { projectsData } from '../data/projectsData';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { FaqAccordion } from '../components/common/FaqAccordion';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Related projects
  const relatedProjects = projectsData.filter((p) =>
    service.relatedProjectSlugs.includes(p.slug)
  );

  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section className="pt-8 pb-16 md:pt-14 md:pb-20 border-b border-[#E5E3DE] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: service.title }
            ]}
            className="mb-6"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9683B]">
                {service.category.toUpperCase()} PAINTING SERVICE
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#20211F] tracking-tight leading-[1.1]">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-[#73736F] leading-relaxed">
                {service.heroDescription}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to={`/quote?service=${service.slug}`}
                    className="inline-flex items-center gap-2 rounded-md bg-[#D9683B] px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#c4572b] transition-colors cursor-pointer"
                  >
                    <span>Request Quote for {service.title}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="#scope"
                    className="inline-flex items-center gap-2 rounded-md border border-[#CDCAC2] bg-white px-6 py-3.5 text-sm font-medium text-[#20211F] hover:bg-[#F1F0EC] transition-colors cursor-pointer"
                  >
                    <span>Explore Scope of Work</span>
                  </a>
                </motion.div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-xl border border-[#E5E3DE] shadow-sm aspect-[4/3]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SUITABLE PROPERTY TYPES & SCOPE OF WORK */}
      <section id="scope" className="py-16 md:py-24 border-b border-[#E5E3DE] bg-[#F1F0EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Suitable Property Types */}
            <div className="lg:col-span-4 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9683B]">
                Applications
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#20211F]">
                Suitable Property Types
              </h2>
              <p className="text-sm text-[#73736F] leading-relaxed">
                Tailored for residential owners, general contractors, commercial facility directors, and property managers seeking reliable painting standards.
              </p>

              <div className="space-y-2 pt-2">
                {service.propertyTypes.map((prop, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-lg border border-[#E5E3DE] bg-white p-3 text-xs font-semibold text-[#20211F]"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#D9683B]" />
                    <span>{prop}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Full Scope of Work */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-[#E5E3DE] p-8 md:p-10 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9683B]">
                Comprehensive Coverage
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#20211F]">
                Included Scope of Work
              </h2>
              <p className="text-sm text-[#73736F] leading-relaxed">
                Every {service.title.toLowerCase()} contract is governed by a transparent itemized scope. We execute the following stages without hidden exclusions:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {service.scopeOfWork.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-[#FAF9F6] border border-[#E5E3DE]">
                    <CheckCircle2 className="h-4 w-4 text-[#D9683B] flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-[#20211F] font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#E5E3DE] flex items-center justify-between text-xs text-[#73736F]">
                <span>Have custom architectural requirements?</span>
                <Link to="/contact" className="text-[#D9683B] font-semibold hover:underline">
                  Consult our project team
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. PREPARATION PROCESS (STEP BY STEP) */}
      <section className="py-16 md:py-24 border-b border-[#E5E3DE] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9683B]">
              The Core Difference
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#20211F]">
              Our Preparation Process
            </h2>
            <p className="text-sm sm:text-base text-[#73736F]">
              Over 70% of long term coating durability stems directly from proper substrate inspection, priming, and defect remediation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.preparationSteps.map((step, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[#E5E3DE] bg-white p-6 space-y-3 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <span className="text-xs font-bold text-[#D9683B] uppercase tracking-wider block mb-2">
                    Stage 0{idx + 1}
                  </span>
                  <h3 className="font-heading text-base font-bold text-[#20211F]">
                    {step.step}
                  </h3>
                  <p className="text-xs text-[#73736F] leading-relaxed mt-2">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. MATERIALS & FINISHES */}
      <section className="py-16 md:py-24 border-b border-[#E5E3DE] bg-[#F1F0EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9683B]">
              Engineered Coatings
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#20211F]">
              Materials & Finishes
            </h2>
            <p className="text-sm sm:text-base text-[#73736F]">
              We specify paint systems and sheens matched to the humidity, traffic, and aesthetic criteria of your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.materialsAndFinishes.map((mat, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[#E5E3DE] bg-white p-6 space-y-4 shadow-xs"
              >
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#20211F]">
                    {mat.name}
                  </h3>
                  <p className="text-xs text-[#73736F] leading-relaxed mt-2">
                    {mat.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E5E3DE]">
                  <span className="text-[11px] font-semibold text-[#73736F] block">
                    Recommended for:
                  </span>
                  <span className="text-xs font-bold text-[#20211F]">
                    {mat.recommendedFor}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Execution Highlights */}
          <div className="mt-12 rounded-xl border border-[#E5E3DE] bg-white p-6 md:p-8">
            <h3 className="font-heading text-lg font-bold text-[#20211F] mb-4">
              Project Execution & Environmental Safety
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {service.executionHighlights.map((hl, hIdx) => (
                <div key={hIdx} className="flex items-start gap-2.5 text-xs text-[#73736F]">
                  <Shield className="h-4 w-4 text-[#D9683B] flex-shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. RELATED PROJECTS */}
      {relatedProjects.length > 0 && (
        <section className="py-16 md:py-24 border-b border-[#E5E3DE] bg-[#FAF9F6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#D9683B]">
                  Portfolio Reference
                </span>
                <h2 className="font-heading text-3xl font-bold tracking-tight text-[#20211F] mt-1">
                  Related Projects
                </h2>
              </div>
              <Link to="/projects" className="text-xs font-semibold text-[#D9683B] hover:underline flex items-center gap-1">
                <span>View all projects</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((p) => (
                <div
                  key={p.slug}
                  className="rounded-xl border border-[#E5E3DE] bg-white overflow-hidden group shadow-xs"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={p.heroImage}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-heading text-lg font-bold text-[#20211F]">
                      {p.title}
                    </h3>
                    <p className="text-xs text-[#73736F]">
                      {p.location} • {p.area} • {p.finishType}
                    </p>
                    <div className="pt-3">
                      <Link
                        to={`/projects/${p.slug}`}
                        className="text-xs font-semibold text-[#D9683B] hover:underline inline-flex items-center gap-1"
                      >
                        <span>Read case study</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. FAQS */}
      <section className="py-16 md:py-24 border-b border-[#E5E3DE] bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9683B]">
              Common Inquiries
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#20211F]">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#73736F]">
              Answers regarding timeline, property protection, and paint materials for {service.title.toLowerCase()}.
            </p>
          </div>

          <FaqAccordion items={service.faqs} />
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-16 md:py-24 bg-[#20211F] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
            Schedule a Consultation for {service.title}
          </h2>
          <p className="text-base text-[#A2A29D] max-w-xl mx-auto">
            Get an itemized quotation covering exact preparation steps, premium paints, and fixed scheduling.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Link
                to={`/quote?service=${service.slug}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-[#D9683B] px-8 py-3.5 text-sm font-semibold text-white hover:bg-[#c4572b] transition-colors shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>Get Free Quotation</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <span>Speak With a Specialist</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};
