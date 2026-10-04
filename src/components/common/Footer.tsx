import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, MessageSquare } from 'lucide-react';
import { companyConfig, navLinks } from '../../data/companyData';
import { servicesData } from '../../data/servicesData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#20211F] text-[#FAF9F6] border-t border-white/10">
      {/* MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* COLUMN 1: BRAND */}
          <div className="lg:col-span-2 space-y-5">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-block group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9683B] rounded-lg"
              aria-label="Paintly Home"
            >
              <div className="bg-white rounded-lg px-2.5 py-1.5 inline-flex items-center shadow-xs transition-transform duration-200 group-hover:scale-105">
                <img
                  src="/paintly-logo.png"
                  alt="Paintly - Painting Spaces Better"
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-[#A2A29D] text-sm leading-relaxed max-w-sm">
              Professional painting contractor agency delivering residential, commercial, and industrial painting solutions with quality workmanship, organized project execution, and transparent quotations.
            </p>

            <p className="text-xs uppercase tracking-widest text-[#D9683B] font-semibold">
              &ldquo;{companyConfig.tagline}&rdquo;
            </p>

            {/* SOCIALS (Crisp inline SVGs) */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={companyConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-[#FAF9F6] transition-colors hover:border-[#D9683B] hover:text-[#D9683B]"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={companyConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-[#FAF9F6] transition-colors hover:border-[#D9683B] hover:text-[#D9683B]"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.456 5 15.658 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <a
                href={companyConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-[#FAF9F6] transition-colors hover:border-[#D9683B] hover:text-[#D9683B]"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* COLUMN 2: QUICK NAVIGATION */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-[#A2A29D] hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/quote"
                  className="text-[#D9683B] hover:underline font-medium inline-flex items-center gap-1"
                >
                  <span>Get a Free Quote</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: SERVICES */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-[#A2A29D] hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: DIRECT CONTACT */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Direct Contact
            </h3>
            <ul className="space-y-3 text-sm text-[#A2A29D]">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#D9683B] flex-shrink-0 mt-0.5" />
                <span>{companyConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#D9683B] flex-shrink-0" />
                <a
                  href={`mailto:${companyConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {companyConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="h-4 w-4 text-[#25D366] flex-shrink-0" />
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors text-xs font-semibold text-[#FAF9F6]"
                >
                  Request a Free Callback
                </Link>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse ml-1" />
                <Link
                  to="/quote"
                  className="hover:text-white transition-colors text-xs text-[#A2A29D]"
                >
                  Instant Online Quote (No Phone Needed)
                </Link>
              </li>
            </ul>

            <div className="mt-4 pt-3 border-t border-white/10 text-xs text-[#73736F]">
              <p>Operating Hours:</p>
              <p className="text-[#A2A29D] font-medium">{companyConfig.contact.hours}</p>
            </div>
          </div>

        </div>

        {/* BOTTOM SUBFOOTER */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#73736F]">
          <p>© {currentYear} Paintly Painting Contractors. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-[#A2A29D] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/process" className="hover:text-[#A2A29D] transition-colors">
              Execution Standards
            </Link>
            <Link to="/contact" className="hover:text-[#A2A29D] transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
