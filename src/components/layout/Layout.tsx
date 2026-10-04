import React from 'react';
import { Outlet } from 'react-router-dom';
import { TubelightNavbar } from '../common/TubelightNavbar';
import { Footer } from '../common/Footer';
import { ScrollToTop } from '../common/ScrollToTop';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#20211F]">
      <ScrollToTop />
      <TubelightNavbar />
      <main className="flex-grow pt-20 sm:pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
