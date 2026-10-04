import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ArrowFillButton } from '../components/common/ArrowFillButton';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const projectIndex = projectsData.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    return <Navigate to="/projects" replace />;
  }

  const project = projectsData[projectIndex];
  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : projectsData[0];

  return (
    <div className="space-y-0">
      
      {/* 1. HERO HEADER */}
      <section className="pt-8 pb-12 md:pt-14 md:pb-16 border-b border-[#E5E3DE] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Our Projects', href: '/projects' },
              { label: project.title }
            ]}
            className="mb-6"
          />

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9683B]">
                {project.categoryLabel}
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#20211F] tracking-tight leading-[1.1]">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg text-[#73736F] leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <ArrowFillButton
                to="/quote"
                size="default"
                text="Request Similar Quote"
                bgColor="#D9683B"
                fillBgColor="#20211F"
                textColor="#ffffff"
                fillTextColor="#ffffff"
                arrowColor="#ffffff"
                className="shadow-sm hover:shadow-md"
              />
            </div>
          </div>

          {/* Project Specifications Bar */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#E5E3DE]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#73736F]">Location</p>
              <p className="font-heading text-sm font-bold text-[#20211F] mt-0.5">{project.location}</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#73736F]">Timeline</p>
              <p className="font-heading text-sm font-bold text-[#20211F] mt-0.5">{project.timeline}</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#73736F]">Surface Area</p>
              <p className="font-heading text-sm font-bold text-[#20211F] mt-0.5">{project.area}</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#73736F]">Finish Type</p>
              <p className="font-heading text-sm font-bold text-[#20211F] mt-0.5 truncate">{project.finishType}</p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. MAIN HERO PHOTOGRAPH */}
      <section className="border-b border-[#E5E3DE] bg-[#F1F0EC] p-4 sm:p-8">
        <div className="max-w-7xl mx-auto overflow-hidden rounded-xl border border-[#E5E3DE] shadow-sm">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full aspect-[16/10] md:aspect-[21/10] object-cover"
          />
        </div>
      </section>

      {/* 3. THE CHALLENGE & SOLUTION */}
      <section className="py-16 md:py-24 border-b border-[#E5E3DE] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* The Challenge */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9683B]">
                Site Diagnostic
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#20211F]">
                The Challenge
              </h2>
              <p className="text-sm sm:text-base text-[#73736F] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* The Solution */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9683B]">
                Craftsmanship Execution
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#20211F]">
                The Paintly Solution
              </h2>
              <p className="text-sm sm:text-base text-[#73736F] leading-relaxed">
                {project.solution}
              </p>
            </div>

          </div>

          {/* Specifications: Materials & Palette */}
          <div className="mt-14 pt-10 border-t border-[#E5E3DE] grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Materials Used */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="font-heading text-lg font-bold text-[#20211F]">
                Materials & Coating Systems
              </h3>
              <ul className="space-y-2">
                {project.materialsUsed.map((mat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#73736F]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D9683B] mt-1.5 flex-shrink-0" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Color Palette Swatches */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="font-heading text-lg font-bold text-[#20211F]">
                Curated Color Specification
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.colorPalette.map((color, i) => (
                  <div key={i} className="rounded-lg border border-[#E5E3DE] bg-white p-3 space-y-2">
                    <div
                      className="h-10 w-full rounded border border-[#E5E3DE]"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div>
                      <p className="text-xs font-bold text-[#20211F]">{color.name}</p>
                      <p className="text-[10px] text-[#73736F]">{color.hex} • {color.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. BEFORE AND AFTER SLIDER (IF AVAILABLE) */}
      {project.beforeImage && project.afterImage && (
        <section className="py-16 md:py-24 border-b border-[#E5E3DE] bg-[#F1F0EC]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9683B]">
                Project Transformation
              </span>
              <h2 className="font-heading text-3xl font-bold text-[#20211F]">
                Before & After Comparison
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-[#E5E3DE] bg-white overflow-hidden shadow-xs">
                <div className="p-3.5 bg-[#FAF9F6] border-b border-[#E5E3DE] font-heading font-bold text-xs text-[#73736F] flex items-center justify-between">
                  <span>Initial Condition (Before Work)</span>
                  <span className="text-[11px] text-[#A2A29D]">Old Paint & Cracks</span>
                </div>
                <img src={project.beforeImage} alt="Before Work" className="w-full aspect-[16/11] object-cover" />
              </div>
              <div className="rounded-2xl border-2 border-[#D9683B]/30 bg-white overflow-hidden shadow-xs">
                <div className="p-3.5 bg-[#fbf2ee] border-b border-[#D9683B]/20 font-heading font-bold text-xs text-[#D9683B] flex items-center justify-between">
                  <span>Completed Paint Finish (After Paintly)</span>
                  <span className="text-[11px] font-semibold text-[#D9683B]">Fresh 2-Coat Sheen</span>
                </div>
                <img src={project.afterImage} alt="After Paintly" className="w-full aspect-[16/11] object-cover" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. ADDITIONAL GALLERY IMAGES */}
      {project.galleryImages.length > 0 && (
        <section className="py-16 md:py-24 border-b border-[#E5E3DE] bg-[#FAF9F6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9683B]">
                Visual Documentation
              </span>
              <h2 className="font-heading text-3xl font-bold text-[#20211F] mt-1">
                Project Gallery
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.galleryImages.map((imgUrl, idx) => (
                <div key={idx} className="overflow-hidden rounded-xl border border-[#E5E3DE] bg-white">
                  <img
                    src={imgUrl}
                    alt={`${project.title} detailed shot ${idx + 1}`}
                    className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. NEXT / PREVIOUS NAVIGATION */}
      <section className="py-12 border-b border-[#E5E3DE] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              to={`/projects/${prevProject.slug}`}
              className="flex items-center gap-3 text-left group"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E3DE] text-[#20211F] group-hover:border-[#D9683B] group-hover:text-[#D9683B] transition-colors">
                <ArrowLeft className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#73736F]">Previous Project</p>
                <p className="font-heading text-sm font-bold text-[#20211F] group-hover:text-[#D9683B] transition-colors">
                  {prevProject.title}
                </p>
              </div>
            </Link>

            <Link
              to="/projects"
              className="text-xs font-semibold text-[#73736F] hover:text-[#20211F] uppercase tracking-widest"
            >
              All Projects
            </Link>

            <Link
              to={`/projects/${nextProject.slug}`}
              className="flex items-center gap-3 text-right group"
            >
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#73736F]">Next Project</p>
                <p className="font-heading text-sm font-bold text-[#20211F] group-hover:text-[#D9683B] transition-colors">
                  {nextProject.title}
                </p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E3DE] text-[#20211F] group-hover:border-[#D9683B] group-hover:text-[#D9683B] transition-colors">
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-16 md:py-24 bg-[#20211F] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
            Ready to Discuss a Similar Project?
          </h2>
          <p className="text-base text-[#A2A29D] max-w-xl mx-auto">
            Contact us for a detailed site inspection, moisture diagnostic, and transparent quotation.
          </p>
          <div className="pt-2 flex justify-center">
            <ArrowFillButton
              to="/quote"
              size="lg"
              text="Request a Free Quote"
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
