import React from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon } from 'lucide-react';

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
        <div className="pt-4 flex items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-md bg-[#20211F] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#D9683B] transition-colors"
          >
            <HomeIcon className="h-4 w-4" />
            <span>Return Home</span>
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 rounded-md border border-[#E5E3DE] bg-white px-5 py-2.5 text-xs font-semibold text-[#20211F] hover:bg-[#F1F0EC]"
          >
            <span>Browse Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
