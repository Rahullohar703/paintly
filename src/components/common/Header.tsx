import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navLinks } from '../../data/companyData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E5E3DE] shadow-[0_2px_15px_rgba(0,0,0,0.03)]'
          : 'bg-[#FAF9F6] border-b border-transparent'
      }`}
    >
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#20211F] text-[#FAF9F6] px-4 py-2 text-xs font-medium text-center border-b border-white/10 flex items-center justify-center gap-2">
        <span className="inline-block h-2 w-2 rounded-full bg-[#D9683B] animate-pulse" />
        <span>Professional Painting Services Across India • <strong>Free In-Person Home Visit & Estimate</strong></span>
        <Link to="/quote" className="underline font-bold text-[#D9683B] hover:text-white transition-colors ml-1 hidden sm:inline">
          Book Free Visit →
        </Link>
      </div>

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isScrolled ? 'py-3.5' : 'py-5'}`}>
        <div className="flex items-center justify-between">
          {/* BRAND LOGO */}
          <Link
            to="/"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9683B]"
            aria-label="Paintly Home"
          >
            <img
              src="/paintly-logo.png"
              alt="Paintly - Painting Spaces Better"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === '/'}
                className={({ isActive }) =>
                  `px-3 py-1.5 text-sm font-medium transition-colors rounded-md ${
                    isActive
                      ? 'text-[#20211F] bg-[#F1F0EC] font-semibold'
                      : 'text-[#73736F] hover:text-[#20211F] hover:bg-[#F1F0EC]/60'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* RIGHT ACTIONS WITH ANIMATION */}
          <div className="hidden md:flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="text-xs font-semibold text-[#73736F] hover:text-[#20211F] flex items-center gap-1.5 transition-colors px-2 py-1 rounded"
              >
                <span>Request Callback</span>
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05, y: -1 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/quote"
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#20211F] px-4 py-2 text-sm font-semibold text-[#FAF9F6] transition-all hover:bg-[#D9683B] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9683B]"
              >
                <span>Get Free Estimate</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-[#20211F] hover:bg-[#F1F0EC] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9683B]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E5E3DE] bg-[#FAF9F6] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === '/'}
                className={({ isActive }) =>
                  `px-3 py-2.5 text-base font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-[#20211F] bg-[#F1F0EC] font-semibold'
                      : 'text-[#73736F] hover:text-[#20211F] hover:bg-[#F1F0EC]/50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#E5E3DE] flex flex-col gap-2.5">
            <Link
              to="/quote"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-[#D9683B] px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#c4572b] transition-colors"
            >
              <span>Get Free Estimate</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            
            <Link
              to="/contact"
              className="flex w-full items-center justify-center gap-2 rounded-md border border-[#E5E3DE] bg-white px-4 py-2.5 text-center text-sm font-medium text-[#20211F]"
            >
              <span>Request a Callback</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
