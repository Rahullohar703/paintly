import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ArrowFillButton } from '../components/common/ArrowFillButton';

export const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial' | 'industrial'>('all');

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <div className="space-y-0">
      
      {/* 1. HERO */}
      <section className="pt-8 pb-16 md:pt-14 md:pb-20 border-b border-[#E5E3DE] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Our Projects' }]} className="mb-6" />

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9683B]">
                Selected Portfolio
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#20211F] tracking-tight leading-[1.1]">
                Real Homes & Spaces We've Painted.
              </h1>
              <p className="text-base sm:text-lg text-[#73736F] leading-relaxed">
                Take a look at real apartments, independent houses, and offices painted with genuine Asian Paints and Berger across India.
              </p>
            </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { key: 'all', label: 'All Projects' },
                  { key: 'residential', label: 'Residential' },
                  { key: 'commercial', label: 'Commercial' },
                  { key: 'industrial', label: 'Industrial' }
                ].map((tab) => (
                  <motion.button
                    key={tab.key}
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    onClick={() => setFilter(tab.key as any)}
                    className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                      filter === tab.key
                        ? 'bg-[#20211F] text-white shadow-xs'
                        : 'bg-white text-[#73736F] border border-[#E5E3DE] hover:text-[#20211F]'
                    }`}
                  >
                    {tab.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. GALLERY SECTION */}
        <section className="py-16 md:py-24 border-b border-[#E5E3DE] bg-[#F1F0EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {filteredProjects.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-xl border border-[#E5E3DE] p-8 max-w-lg mx-auto">
                <ImageIcon className="h-10 w-10 text-[#CDCAC2] mx-auto mb-3" />
                <h3 className="font-heading text-lg font-bold text-[#20211F]">No projects found</h3>
                <p className="text-xs text-[#73736F] mt-1">There are currently no featured projects under this category.</p>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter('all')}
                  className="mt-4 px-4 py-2 text-xs font-semibold rounded bg-[#20211F] text-white hover:bg-[#D9683B] cursor-pointer"
                >
                  Reset Filter
                </motion.button>
              </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.slug}
                  className="rounded-xl border border-[#E5E3DE] bg-white overflow-hidden group shadow-xs transition-all hover:shadow-md flex flex-col justify-between"
                >
                  {/* Image container */}
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="rounded bg-[#20211F]/80 backdrop-blur-sm px-2 py-0.5 text-[11px] font-medium text-white">
                        {project.categoryLabel}
                      </span>
                      {project.beforeImage && (
                        <span className="rounded bg-white/90 backdrop-blur-sm px-2 py-0.5 text-[11px] font-medium text-[#20211F]">
                          Before & After
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <h2 className="font-heading text-xl font-bold text-[#20211F] group-hover:text-[#D9683B] transition-colors">
                          {project.title}
                        </h2>
                        <Link
                          to={`/projects/${project.slug}`}
                          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#E5E3DE] text-[#20211F] hover:bg-[#D9683B] hover:text-white hover:border-[#D9683B] transition-colors"
                          aria-label={`View ${project.title}`}
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </div>

                      <p className="text-xs text-[#73736F] mt-1">
                        {project.location} • {project.area} • Completed in {project.year}
                      </p>

                      <p className="text-xs text-[#73736F] mt-3 leading-relaxed line-clamp-3">
                        {project.overview}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#E5E3DE] flex items-center justify-between text-xs">
                      <span className="text-[#73736F] truncate max-w-[180px]">
                        Finish: <strong className="text-[#20211F] font-semibold">{project.finishType}</strong>
                      </span>
                      <Link
                        to={`/projects/${project.slug}`}
                        className="font-semibold text-[#D9683B] hover:underline flex items-center gap-1"
                      >
                        <span>Case Study</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* 3. CTA */}
      <section className="py-16 md:py-24 bg-[#20211F] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
            Have a Similar Property to Paint?
          </h2>
          <p className="text-base text-[#A2A29D] max-w-xl mx-auto">
            Discuss your design intent, substrate condition, or commercial schedule with our painting specialists.
          </p>
          <div className="pt-2 flex justify-center">
            <ArrowFillButton
              to="/quote"
              size="lg"
              text="Get an Itemized Estimate"
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
