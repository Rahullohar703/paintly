import React from 'react';
import { Home as HomeIcon } from 'lucide-react';
import { ArrowFillButton } from '../components/common/ArrowFillButton';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-24 md:py-36 bg-[#FAF9F6] text-center px-4 sm:px-6">
      <div className="max-w-md mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#D9683B]">
          404 Error
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#20211F]">
          Page Not Found
        </h1>
        <p className="text-sm text-[#73736F] leading-relaxed">
          The page or project you requested could not be located. It may have moved or been updated.
        </p>
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <ArrowFillButton
            to="/"
            size="default"
            text="Return Home"
            icon={HomeIcon}
            bgColor="#20211F"
            fillBgColor="#D9683B"
            textColor="#ffffff"
            fillTextColor="#ffffff"
            arrowColor="#ffffff"
          />
          <ArrowFillButton
            to="/services"
            size="default"
            text="Browse Services"
            bgColor="#ffffff"
            fillBgColor="#F1F0EC"
            textColor="#20211F"
            fillTextColor="#20211F"
            arrowColor="#D9683B"
            className="border border-[#E5E3DE]"
          />
        </div>
      </div>
    </div>
  );
};
