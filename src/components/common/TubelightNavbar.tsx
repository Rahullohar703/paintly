import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ArrowRight,
  Home,
  Layers,
  Briefcase,
  Workflow,
  Info,
  PhoneCall,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { ArrowFillButton } from './ArrowFillButton';

export interface NavItem {
  label: string;
  href: string;
  icon?: LucideIcon;
  badge?: string;
  isExternal?: boolean;
}

export interface TubelightNavbarProps {
  items?: NavItem[];
  logoSrc?: string;
  iconSrc?: string;
  logoAlt?: string;
  brandName?: string;
  brandHighlight?: string;
  brandBadge?: string;
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  activeHref?: string;
  onNavigate?: (item: NavItem) => void;
  theme?: 'warm' | 'dark';
  className?: string;
}

const DEFAULT_ITEMS: NavItem[] = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Services', href: '/services', icon: Layers },
  { label: 'Projects', href: '/projects', icon: Briefcase },
  { label: 'Process', href: '/process', icon: Workflow },
  { label: 'About', href: '/about', icon: Info },
  { label: 'Contact', href: '/contact', icon: PhoneCall },
];

/**
 * Modern floating glassmorphism pill navigation bar with "Tubelight Lamp" active glow.
 * Supports theme matching website palette (Warm Cream + Charcoal + Terracotta #D9683B)
 * and the official brand logo image.
 */
export const TubelightNavbar: React.FC<TubelightNavbarProps> = ({
  items = DEFAULT_ITEMS,
  iconSrc = '/paintly%20(180%20x%20180%20px).jpg',
  logoAlt = 'Paintly - Painting Spaces Better',
  brandName = 'PAINT',
  brandHighlight = 'LY',
  brandBadge,
  ctaText = 'Free Estimate',
  ctaHref = '/quote',
  onCtaClick,
  activeHref: controlledActiveHref,
  onNavigate,
  theme = 'warm',
  className = '',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [internalActive, setInternalActive] = useState<string>(items[0]?.href || '/');

  const location = useLocation();
  const currentPath = location.pathname;

  // Determine current active item
  const currentActive = controlledActiveHref ?? (currentPath || internalActive);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogoClick = () => {
    setInternalActive('/');
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate({ label: 'Home', href: '/' });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleItemClick = (item: NavItem) => {
    setInternalActive(item.href);
    if (onNavigate) {
      onNavigate(item);
    }
    setMobileMenuOpen(false);
  };

  const isItemActive = (href: string) => {
    if (href === '/' && (currentActive === '/' || currentActive === '')) {
      return true;
    }
    if (href !== '/' && currentActive.startsWith(href)) {
      return true;
    }
    return currentActive === href;
  };

  const isWarm = theme === 'warm';

  return (
    <div
      className={`fixed top-3 sm:top-4 left-0 right-0 z-50 flex flex-col items-center pointer-events-none px-3 sm:px-6 transition-all duration-300 ${className}`}
      role="region"
      aria-label="Floating Navigation Bar"
    >
      {/* 1. MAIN FLOATING PILL CONTAINER */}
      <nav
        className={`pointer-events-auto rounded-full backdrop-blur-md flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 gap-2 sm:gap-4 lg:gap-8 max-w-5xl w-full lg:w-auto relative transition-all duration-300 ${
          isWarm
            ? 'bg-[#FAF9F6]/92 border border-[#E5E3DE] shadow-[0_8px_30px_rgba(32,33,31,0.08)]'
            : 'bg-[#0c0c12]/90 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.6)]'
        }`}
        aria-label="Main Navigation"
      >
        {/* Subtle Ambient Top Edge Highlight */}
        <div
          className={`absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent pointer-events-none ${
            isWarm
              ? 'via-[#D9683B]/30 to-transparent'
              : 'via-cyan-500/40 to-transparent'
          }`}
        />

        {/* 2. BRAND LOGO (OFFICIAL LOGO IMAGE OR DUAL-TONE TYPOGRAPHY) */}
        <div className="flex items-center gap-2.5 pl-1 sm:pl-2">
          <Link
            to="/"
            onClick={handleLogoClick}
            className={`flex items-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 rounded-full py-0.5 transition-transform active:scale-95 ${
              isWarm ? 'focus-visible:ring-[#D9683B]' : 'focus-visible:ring-cyan-400'
            }`}
            aria-label={logoAlt || `${brandName}${brandHighlight} Home`}
          >
            <div className="flex items-center gap-2">
              <img
                src={iconSrc}
                alt="Paintly"
                className="h-8 w-8 sm:h-9 sm:w-9 rounded-xl object-contain shadow-xs border border-[#20211F]/10 transition-transform duration-200 group-hover:scale-105"
              />
              <span className={`font-heading font-extrabold text-base sm:text-lg tracking-tight flex items-center select-none ${
                isWarm ? 'text-[#20211F]' : 'text-white'
              }`}>
                {brandName}
                <span className={isWarm ? 'text-[#D9683B]' : 'text-cyan-400'}>
                  {brandHighlight}
                </span>
              </span>
            </div>
          </Link>

          {/* Optional Sub-Badge */}
          {brandBadge && (
            <span
              className={`hidden sm:inline-flex items-center text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full select-none ${
                isWarm
                  ? 'border border-[#D9683B]/30 bg-[#D9683B]/10 text-[#D9683B] shadow-[0_0_8px_rgba(217,104,59,0.12)]'
                  : 'border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.15)]'
              }`}
            >
              {brandBadge}
            </span>
          )}
        </div>

        {/* 3. DESKTOP NAV LINKS WITH "TUBELIGHT LAMP" ACTIVE INDICATOR */}
        <div
          className={`hidden lg:flex items-center p-1 rounded-full relative transition-colors ${
            isWarm
              ? 'bg-[#20211F]/[0.03] border border-[#20211F]/[0.08]'
              : 'bg-white/[0.03] border border-white/[0.08]'
          }`}
        >
          {items.map((item) => {
            const active = isItemActive(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => handleItemClick(item)}
                className={`relative px-4 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full select-none ${
                  active
                    ? isWarm
                      ? 'text-[#D9683B] font-semibold'
                      : 'text-white font-semibold'
                    : isWarm
                      ? 'text-[#73736F] hover:text-[#20211F]'
                      : 'text-gray-300 hover:text-white'
                }`}
                aria-current={active ? 'page' : undefined}
              >
                {/* TUBELIGHT ACTIVE INDICATOR */}
                {active && (
                  <motion.div
                    layoutId="tubelight-lamp-glow"
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 32,
                    }}
                    className={`absolute inset-0 rounded-full -z-10 ${
                      isWarm ? 'bg-[#D9683B]/10' : 'bg-cyan-500/15'
                    }`}
                  >
                    {/* Glowing lamp filament bar at top edge */}
                    <div
                      className={`absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-1 rounded-t-full ${
                        isWarm
                          ? 'bg-[#D9683B] shadow-[0_0_12px_#D9683B]'
                          : 'bg-cyan-400 shadow-[0_0_12px_#38bdf8]'
                      }`}
                    />
                    {/* Soft atmospheric lamp glow */}
                    <div
                      className={`absolute -top-1 left-1/2 -translate-x-1/2 w-12 h-3.5 blur-sm rounded-full pointer-events-none ${
                        isWarm ? 'bg-[#D9683B]/25' : 'bg-cyan-400/25'
                      }`}
                    />
                  </motion.div>
                )}

                <span className="relative z-10 flex items-center gap-1.5">
                  {item.label}
                  {item.badge && (
                    <span
                      className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold ${
                        isWarm
                          ? 'bg-[#D9683B]/15 text-[#D9683B]'
                          : 'bg-cyan-400/20 text-cyan-300'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </span>
              </Link>
            );
          })}
        </div>

        {/* 4. RIGHT-SIDE CALL TO ACTION (CTA) & MOBILE TOGGLE */}
        <div className="flex items-center gap-2">
          {/* Action CTA with expanding wave and dual-sliding arrows */}
          <ArrowFillButton
            to={ctaHref}
            onClick={onCtaClick}
            size="sm"
            text={ctaText}
            baseBg={isWarm ? '#20211F' : '#0c0c12'}
            fillBg={isWarm ? '#D9683B' : '#06b6d4'}
            textColor="#ffffff"
            fillTextColor="#ffffff"
          />

          {/* 5. RESPONSIVE MOBILE HAMBURGER BUTTON (< lg) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full transition-colors focus:outline-none focus-visible:ring-2 ${
              isWarm
                ? 'bg-[#20211F]/5 border border-[#E5E3DE] text-[#20211F] hover:bg-[#20211F]/10 focus-visible:ring-[#D9683B]'
                : 'bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 focus-visible:ring-cyan-400'
            }`}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* 5. RESPONSIVE MOBILE DROPDOWN CARD (<AnimatePresence>) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className={`pointer-events-auto mt-2 w-[calc(100vw-2rem)] max-w-md rounded-2xl backdrop-blur-xl shadow-2xl p-4 flex flex-col gap-3 relative overflow-hidden transition-colors ${
              isWarm
                ? 'bg-[#FAF9F6]/98 border border-[#E5E3DE] text-[#20211F]'
                : 'bg-[#0c101a]/95 border border-white/10 text-white'
            }`}
          >
            {/* Top decorative gradient glow */}
            <div
              className={`absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent ${
                isWarm
                  ? 'via-[#D9683B]/40 to-transparent'
                  : 'via-cyan-400/50 to-transparent'
              }`}
            />

            {/* Mobile Header Brand Identity Card */}
            <Link
              to="/"
              onClick={handleLogoClick}
              className={`flex items-center gap-3 p-2.5 rounded-xl transition-all cursor-pointer ${
                isWarm
                  ? 'bg-[#20211F]/[0.03] hover:bg-[#20211F]/[0.06] border border-[#20211F]/[0.06]'
                  : 'bg-white/[0.04] hover:bg-white/[0.08] border border-white/10'
              }`}
              aria-label="Paintly Home"
            >
              <img
                src={iconSrc}
                alt="Paintly Emblem"
                className="w-10 h-10 rounded-xl object-contain shadow-xs border border-white/80 shrink-0"
              />
              <div className="flex flex-col min-w-0">
                <span className={`font-bold text-sm tracking-tight truncate ${
                  isWarm ? 'text-[#20211F]' : 'text-white'
                }`}>
                  Paintly Painting Contractors
                </span>
                <span className={`text-[11px] truncate ${
                  isWarm ? 'text-[#73736F]' : 'text-gray-400'
                }`}>
                  A Fresh Coat. A Better Space.
                </span>
              </div>
            </Link>

            {/* Mobile Nav Items */}
            <div className="flex flex-col gap-1">
              {items.map((item) => {
                const active = isItemActive(item.href);
                const IconComponent = item.icon || Layers;

                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => handleItemClick(item)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                      active
                        ? isWarm
                          ? 'bg-[#D9683B]/10 text-[#D9683B] border border-[#D9683B]/20 font-semibold shadow-[0_2px_8px_rgba(217,104,59,0.08)]'
                          : 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/25 shadow-[0_0_12px_rgba(6,182,212,0.15)] font-semibold'
                        : isWarm
                          ? 'text-[#73736F] hover:text-[#20211F] hover:bg-[#20211F]/5 border border-transparent'
                          : 'text-gray-300 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                          active
                            ? isWarm
                              ? 'bg-[#D9683B]/15 text-[#D9683B]'
                              : 'bg-cyan-500/20 text-cyan-400'
                            : isWarm
                              ? 'bg-[#20211F]/5 text-[#73736F]'
                              : 'bg-white/5 text-gray-400 group-hover:text-white'
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span>{item.label}</span>
                    </div>

                    {active ? (
                      <span
                        className={`h-2 w-2 rounded-full ${
                          isWarm
                            ? 'bg-[#D9683B] shadow-[0_0_8px_#D9683B]'
                            : 'bg-cyan-400 shadow-[0_0_8px_#38bdf8]'
                        }`}
                      />
                    ) : (
                      item.badge && (
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                            isWarm
                              ? 'bg-[#20211F]/5 text-[#73736F]'
                              : 'bg-white/10 text-gray-300'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Full-width Bottom CTA inside Mobile Card */}
            <div
              className={`pt-2 border-t ${
                isWarm ? 'border-[#E5E3DE]' : 'border-white/10'
              }`}
            >
              <Link
                to={ctaHref}
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onCtaClick) onCtaClick();
                }}
                className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-white transition-all active:scale-[0.98] ${
                  isWarm
                    ? 'bg-[#D9683B] hover:bg-[#c4572b] shadow-[0_4px_14px_rgba(217,104,59,0.35)]'
                    : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_15px_rgba(6,182,212,0.35)]'
                }`}
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TubelightNavbar;
