import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { companyConfig } from '../data/companyData';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="space-y-0">
      
      {/* 1. HERO */}
      <section className="pt-8 pb-12 md:pt-14 md:pb-16 border-b border-[#E5E3DE] bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} className="mb-6" />

          <span className="text-xs font-bold uppercase tracking-widest text-[#D9683B]">
            Legal & Data Governance
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#20211F] tracking-tight mt-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#73736F] mt-2">
            Last updated: October 2026 • Paintly Painting Contractors
          </p>
        </div>
      </section>

      {/* 2. BODY CONTENT */}
      <section className="py-16 md:py-24 border-b border-[#E5E3DE] bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 prose prose-neutral max-w-none text-sm text-[#73736F] leading-relaxed space-y-8">
          
          <div>
            <h2 className="font-heading text-xl font-bold text-[#20211F] mb-3">
              1. Information We Collect
            </h2>
            <p>
              When you interact with Paintly, request an itemized quotation, or submit an inquiry through our website, we may collect the following personal and property details:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>Full name, telephone number, and email address</li>
              <li>Property location, physical address, and square footage estimates</li>
              <li>Specific painting scope requirements, preferred start dates, and finish specifications</li>
              <li>Photographic attachments or architectural drawings you provide for evaluation</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-[#20211F] mb-3">
              2. How We Use Your Information
            </h2>
            <p>
              We process your details solely for legitimate business operations related to your painting inquiry, specifically:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>Preparing accurate material, labor, and timeline quotations</li>
              <li>Scheduling on-site inspections and room measurements</li>
              <li>Communicating project updates, scope revisions, and milestone completions</li>
              <li>Responding to customer support questions via phone, email, or WhatsApp</li>
            </ul>
            <p className="mt-3">
              We never sell, rent, or trade your personal information to third-party marketing companies.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-[#20211F] mb-3">
              3. Data Security & Storage
            </h2>
            <p>
              We take the security of your contact details seriously. All communication via our online quotation forms is encrypted using industry standard Transport Layer Security (TLS/SSL). Project records are maintained in secure databases accessible only by authorized estimation and operations staff.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-[#20211F] mb-3">
              4. Cookies & Website Analytics
            </h2>
            <p>
              Our website uses basic technical cookies to preserve your multi-step form state as you navigate between steps. We also collect anonymized traffic insights to identify high-traffic pages and optimize device performance across mobile and desktop devices. No personal identifying information is tracked or sold through cookies.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-[#20211F] mb-3">
              5. Your Rights
            </h2>
            <p>
              You have the right to request access to the personal data we hold about you, request corrections to incomplete or inaccurate details, or request that your contact information be removed from our estimate records upon completion or cancellation of your inquiry.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-[#20211F] mb-3">
              6. Contacting Our Data Privacy Team
            </h2>
            <p>
              If you have any questions about this Privacy Policy or wish to modify your communication preferences, please reach out to us:
            </p>
            <p className="mt-2 text-[#20211F] font-medium">
              Paintly Painting Contractors<br />
              Email: {companyConfig.contact.email}<br />
              Support: Online Callback & WhatsApp Desk<br />
              Address: {companyConfig.contact.address}
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};
