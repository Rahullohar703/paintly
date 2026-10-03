import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Check, 
  MessageSquare, 
  Phone, 
  Mail, 
  ShieldCheck
} from 'lucide-react';
import type { QuoteFormData } from '../types';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const QuotePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service') || 'interior-painting';

  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState<QuoteFormData>({
    serviceType: initialService,
    propertyType: '2 BHK Apartment / Flat',
    approxArea: '800 - 1,500 sq ft',
    projectLocation: '',
    projectDescription: '',
    projectNature: 'repainting',
    scopeArea: 'interior',
    preferredFinish: 'Luxury Washable Emulsion (Royale/Apcolite)',
    startDate: 'Within 2-4 weeks',
    budgetRange: '₹15,000 - ₹35,000',
    fullName: '',
    phone: '',
    email: '',
    preferredContact: 'whatsapp',
    agreedToTerms: true
  });

  // Keep in sync if search param changes
  useEffect(() => {
    if (searchParams.get('service')) {
      setFormData((prev) => ({ ...prev, serviceType: searchParams.get('service')! }));
    }
  }, [searchParams]);

  // Validation per step
  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.serviceType) newErrors.serviceType = 'Please select a service type.';
      if (!formData.propertyType) newErrors.propertyType = 'Please select your property type.';
      if (!formData.projectLocation.trim()) newErrors.projectLocation = 'Please provide the project location or neighborhood.';
    }

    if (currentStep === 2) {
      if (!formData.preferredFinish) newErrors.preferredFinish = 'Please select a preferred finish.';
      if (!formData.startDate) newErrors.startDate = 'Please specify an expected start date.';
    }

    if (currentStep === 3) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your name.';
      if (!formData.phone.trim() || formData.phone.length < 10) {
        newErrors.phone = 'Please enter a valid 10-digit mobile number for WhatsApp quote.';
      }
      if (formData.email.trim() && !formData.email.includes('@')) {
        newErrors.email = 'Please enter a valid email or leave blank.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, 4));
      window.scrollTo({ top: 180, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) {
      setStep(3);
      return;
    }

    setIsSubmitting(true);
    // Simulate quotation request submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }, 700);
  };

  // WhatsApp summary link generator
  const getWhatsAppMessage = () => {
    const text = `*New Paintly Quotation Inquiry*
• *Name:* ${formData.fullName}
• *Phone:* ${formData.phone}
• *Email:* ${formData.email}
• *Service:* ${formData.serviceType}
• *Property:* ${formData.propertyType}
• *Area:* ${formData.approxArea}
• *Location:* ${formData.projectLocation}
• *Scope:* ${formData.scopeArea} (${formData.projectNature})
• *Timeline:* ${formData.startDate}
• *Finish:* ${formData.preferredFinish}
• *Description:* ${formData.projectDescription || 'None provided'}`;

    return `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="space-y-0">
      
      {/* 1. HERO */}
      <section className="pt-8 pb-10 md:pt-14 md:pb-14 border-b border-[#E5E3DE] bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <Breadcrumbs items={[{ label: 'Get a Quote' }]} className="justify-center mb-2" />

          <span className="text-xs font-bold uppercase tracking-widest text-[#D9683B]">
            Transparent Estimations
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#20211F] tracking-tight">
            Request an Itemized Quotation
          </h1>
          <p className="text-sm sm:text-base text-[#73736F] max-w-xl mx-auto leading-relaxed">
            Complete the 4-step form below to specify your painting requirements. We provide itemized breakdowns with specified materials, preparation, and fixed milestones.
          </p>

          {/* STEP PROGRESS BAR */}
          {!isSubmitted && (
            <div className="pt-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-between relative">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#E5E3DE] -translate-y-1/2 -z-0" />
                <div
                  className="absolute top-1/2 left-0 h-0.5 bg-[#D9683B] -translate-y-1/2 -z-0 transition-all duration-300"
                  style={{ width: `${((step - 1) / 3) * 100}%` }}
                />

                {[
                  { num: 1, label: 'Project Info' },
                  { num: 2, label: 'Requirements' },
                  { num: 3, label: 'Contact' },
                  { num: 4, label: 'Review' }
                ].map((s) => {
                  const isCompleted = step > s.num;
                  const isCurrent = step === s.num;
                  return (
                    <div key={s.num} className="relative z-10 flex flex-col items-center">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all ${
                          isCompleted
                            ? 'bg-[#D9683B] text-white'
                            : isCurrent
                            ? 'bg-[#20211F] text-white ring-4 ring-[#FAF9F6]'
                            : 'bg-white border-2 border-[#E5E3DE] text-[#73736F]'
                        }`}
                      >
                        {isCompleted ? <Check className="h-4 w-4" /> : s.num}
                      </div>
                      <span className="text-[11px] font-semibold text-[#20211F] mt-1.5 hidden sm:block">
                        {s.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 2. FORM CONTAINER */}
      <section className="py-12 md:py-20 border-b border-[#E5E3DE] bg-[#F1F0EC]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          
          {isSubmitted ? (
            <div className="bg-white rounded-2xl border border-[#E5E3DE] p-8 md:p-12 text-center space-y-6 shadow-xs animate-in fade-in duration-300">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-2">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#20211F]">
                Quotation Request Received
              </h2>
              <p className="text-sm text-[#73736F] max-w-lg mx-auto leading-relaxed">
                Thank you, <strong className="text-[#20211F]">{formData.fullName}</strong>. Our estimating department will review your specifications for <strong className="text-[#20211F]">{formData.propertyType}</strong> in <strong className="text-[#20211F]">{formData.projectLocation}</strong> and prepare your preliminary estimate.
              </p>

              {/* Direct WhatsApp Action */}
              <div className="p-6 rounded-xl bg-[#FAF9F6] border border-[#E5E3DE] max-w-md mx-auto space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-[#20211F]">
                  Want instant consultation?
                </p>
                <p className="text-xs text-[#73736F]">
                  Send your submitted scope directly to our project estimators on WhatsApp.
                </p>
                <a
                  href={getWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full rounded-md bg-[#25D366] px-4 py-3 text-sm font-semibold text-white hover:bg-[#20ba59] transition-colors"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Send Summary on WhatsApp</span>
                </a>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/"
                  className="px-6 py-2.5 rounded-md bg-[#20211F] text-white text-xs font-semibold hover:bg-[#D9683B] transition-colors"
                >
                  Return to Homepage
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setStep(1);
                  }}
                  className="px-6 py-2.5 rounded-md border border-[#E5E3DE] bg-white text-xs font-semibold text-[#20211F] hover:bg-[#F1F0EC]"
                >
                  Submit Another Project
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-[#E5E3DE] p-6 sm:p-10 shadow-xs">
              
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* ================= STEP 1: PROJECT INFORMATION ================= */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#20211F]">
                        Step 1: Project Information
                      </h2>
                      <p className="text-xs text-[#73736F] mt-1">
                        Tell us about your property and general painting requirements.
                      </p>
                    </div>

                    {/* Service Type Selection */}
                    <div>
                      <label className="block text-xs font-semibold text-[#20211F] mb-2">
                        Service Category *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {[
                          { id: 'interior-painting', label: 'Interior Painting' },
                          { id: 'exterior-painting', label: 'Exterior Painting' },
                          { id: 'commercial-painting', label: 'Commercial Painting' },
                          { id: 'industrial-painting', label: 'Industrial & Epoxy' },
                          { id: 'surface-preparation', label: 'Surface Preparation & Repaint' }
                        ].map((srv) => (
                          <button
                            key={srv.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, serviceType: srv.id })}
                            className={`flex items-center justify-between p-3 rounded-lg border text-left text-xs font-medium transition-all ${
                              formData.serviceType === srv.id
                                ? 'border-[#D9683B] bg-[#fbf2ee] text-[#20211F] font-bold'
                                : 'border-[#E5E3DE] bg-[#FAF9F6] text-[#73736F] hover:border-[#CDCAC2]'
                            }`}
                          >
                            <span>{srv.label}</span>
                            {formData.serviceType === srv.id && (
                              <CheckCircle2 className="h-4 w-4 text-[#D9683B]" />
                            )}
                          </button>
                        ))}
                      </div>
                      {errors.serviceType && <p className="text-red-600 text-xs mt-1">{errors.serviceType}</p>}
                    </div>

                    {/* Property Type Selection */}
                    <div>
                      <label className="block text-xs font-semibold text-[#20211F] mb-2">
                        Property Type *
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full rounded-md border border-[#E5E3DE] bg-[#FAF9F6] px-3.5 py-2.5 text-sm text-[#20211F] focus:border-[#D9683B] focus:bg-white focus:outline-none"
                      >
                        <option value="1 BHK Apartment / Flat">1 BHK Apartment / Flat</option>
                        <option value="2 BHK Apartment / Flat">2 BHK Apartment / Flat</option>
                        <option value="3 BHK Apartment / Flat">3 BHK Apartment / Flat</option>
                        <option value="4 BHK / Villa / Independent House">4 BHK / Villa / Independent House</option>
                        <option value="Builder Floor / Duplex">Builder Floor / Duplex</option>
                        <option value="Commercial Office / Workspace">Commercial Office / Workspace</option>
                        <option value="Retail Store / Showroom">Retail Store / Showroom</option>
                        <option value="Warehouse / Industrial Facility">Warehouse / Industrial Facility</option>
                      </select>
                    </div>

                    {/* Approximate Area & Location */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#20211F] mb-1.5">
                          Approximate Painting Area
                        </label>
                        <select
                          value={formData.approxArea}
                          onChange={(e) => setFormData({ ...formData, approxArea: e.target.value })}
                          className="w-full rounded-md border border-[#E5E3DE] bg-[#FAF9F6] px-3.5 py-2.5 text-sm text-[#20211F] focus:border-[#D9683B] focus:bg-white focus:outline-none"
                        >
                          <option value="Under 1,000 sq ft">Under 1,000 sq ft (1-2 Rooms)</option>
                          <option value="1,000 - 2,500 sq ft">1,000 - 2,500 sq ft (Standard Home / Office)</option>
                          <option value="2,500 - 5,000 sq ft">2,500 - 5,000 sq ft (Large Villa / Commercial)</option>
                          <option value="5,000 - 15,000 sq ft">5,000 - 15,000 sq ft (Multi-Floor Facility)</option>
                          <option value="15,000+ sq ft">15,000+ sq ft (Industrial Warehouse)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#20211F] mb-1.5">
                          Project Location / City *
                        </label>
                        <input
                          type="text"
                          value={formData.projectLocation}
                          onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                          placeholder="e.g. Indiranagar Bengaluru, Rohini Delhi, Andheri Mumbai, Baner Pune"
                          className="w-full rounded-md border border-[#E5E3DE] bg-[#FAF9F6] px-3.5 py-2.5 text-sm text-[#20211F] focus:border-[#D9683B] focus:bg-white focus:outline-none"
                        />
                        {errors.projectLocation && (
                          <p className="text-red-600 text-xs mt-1">{errors.projectLocation}</p>
                        )}
                      </div>
                    </div>

                    {/* Brief description */}
                    <div>
                      <label className="block text-xs font-semibold text-[#20211F] mb-1.5">
                        Brief Project Description (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.projectDescription}
                        onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                        placeholder="Mention any high ceilings, crack repairs needed, or color preferences..."
                        className="w-full rounded-md border border-[#E5E3DE] bg-[#FAF9F6] px-3.5 py-2.5 text-sm text-[#20211F] focus:border-[#D9683B] focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>
                )}

                {/* ================= STEP 2: PROJECT REQUIREMENTS ================= */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#20211F]">
                        Step 2: Project Requirements
                      </h2>
                      <p className="text-xs text-[#73736F] mt-1">
                        Select surface condition, finishes, and scheduling timelines.
                      </p>
                    </div>

                    {/* Nature of Project */}
                    <div>
                      <label className="block text-xs font-semibold text-[#20211F] mb-2">
                        Project Nature
                      </label>
                      <div className="grid grid-cols-3 gap-2.5">
                        {[
                          { id: 'repainting', label: 'Repainting Existing Walls' },
                          { id: 'new-construction', label: 'New Construction / Bare Plaster' },
                          { id: 'touchup', label: 'Specific Rooms / Touch-Up' }
                        ].map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, projectNature: item.id as any })}
                            className={`p-3 rounded-lg border text-xs font-medium transition-all text-center ${
                              formData.projectNature === item.id
                                ? 'border-[#D9683B] bg-[#fbf2ee] text-[#20211F] font-bold'
                                : 'border-[#E5E3DE] bg-[#FAF9F6] text-[#73736F] hover:border-[#CDCAC2]'
                            }`}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Scope Area */}
                    <div>
                      <label className="block text-xs font-semibold text-[#20211F] mb-2">
                        Interior or Exterior Scope
                      </label>
                      <div className="grid grid-cols-3 gap-2.5">
                        {[
                          { id: 'interior', label: 'Interior Only' },
                          { id: 'exterior', label: 'Exterior Only' },
                          { id: 'both', label: 'Interior & Exterior' }
                        ].map((area) => (
                          <button
                            key={area.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, scopeArea: area.id as any })}
                            className={`p-3 rounded-lg border text-xs font-medium transition-all text-center ${
                              formData.scopeArea === area.id
                                ? 'border-[#D9683B] bg-[#fbf2ee] text-[#20211F] font-bold'
                                : 'border-[#E5E3DE] bg-[#FAF9F6] text-[#73736F] hover:border-[#CDCAC2]'
                            }`}
                          >
                            {area.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Preferred Sheen / Finish */}
                    <div>
                      <label className="block text-xs font-semibold text-[#20211F] mb-1.5">
                        Preferred Paint Finish / Sheen
                      </label>
                      <select
                        value={formData.preferredFinish}
                        onChange={(e) => setFormData({ ...formData, preferredFinish: e.target.value })}
                        className="w-full rounded-md border border-[#E5E3DE] bg-[#FAF9F6] px-3.5 py-2.5 text-sm text-[#20211F] focus:border-[#D9683B] focus:bg-white focus:outline-none"
                      >
                        <option value="Eggshell / Velvet (Low Sheen)">Eggshell / Velvet (Soft low-sheen, wipeable)</option>
                        <option value="Dead-Flat / Ultra-Matte">Dead-Flat / Ultra-Matte (Zero sheen, hides flaws)</option>
                        <option value="Satin / Semi-Gloss (Moisture-Resistant)">Satin / Semi-Gloss (Moisture-resistant for kitchen/bath)</option>
                        <option value="Elastomeric Waterproof (Exterior)">Elastomeric Waterproof (Exterior crack-bridging)</option>
                        <option value="Industrial Epoxy / Polyurethane">Industrial Epoxy / Polyurethane (Heavy duty floors)</option>
                        <option value="Not Sure - Need Recommendation">Not Sure - Need Paintly Recommendation</option>
                      </select>
                    </div>

                    {/* Start Date & Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#20211F] mb-1.5">
                          Target Start Date
                        </label>
                        <select
                          value={formData.startDate}
                          onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                          className="w-full rounded-md border border-[#E5E3DE] bg-[#FAF9F6] px-3.5 py-2.5 text-sm text-[#20211F] focus:border-[#D9683B] focus:bg-white focus:outline-none"
                        >
                          <option value="Immediately / Urgent">Immediately (Within 1 week)</option>
                          <option value="Within 2-4 weeks">Within 2 to 4 weeks</option>
                          <option value="1-2 months">In 1 to 2 months</option>
                          <option value="Flexible / Planning stage">Flexible / Planning stage</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#20211F] mb-1.5">
                          Estimated Budget Bracket (Optional)
                        </label>
                        <select
                          value={formData.budgetRange}
                          onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                          className="w-full rounded-md border border-[#E5E3DE] bg-[#FAF9F6] px-3.5 py-2.5 text-sm text-[#20211F] focus:border-[#D9683B] focus:bg-white focus:outline-none"
                        >
                          <option value="Under ₹15,000">Under ₹15,000</option>
                          <option value="₹15,000 - ₹35,000">₹15,000 - ₹35,000</option>
                          <option value="₹35,000 - ₹75,000">₹35,000 - ₹75,000</option>
                          <option value="₹75,000 - ₹1,50,000">₹75,000 - ₹1,50,000</option>
                          <option value="₹1,50,000+">₹1,50,000+ (Villa / Commercial)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* ================= STEP 3: CONTACT INFORMATION ================= */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#20211F]">
                        Step 3: Contact Information
                      </h2>
                      <p className="text-xs text-[#73736F] mt-1">
                        Where should our estimating team send your preliminary quotation?
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#20211F] mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full rounded-md border border-[#E5E3DE] bg-[#FAF9F6] px-3.5 py-2.5 text-sm text-[#20211F] focus:border-[#D9683B] focus:bg-white focus:outline-none"
                        />
                        {errors.fullName && <p className="text-red-600 text-xs mt-1">{errors.fullName}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#20211F] mb-1.5">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 98765 43210"
                          className="w-full rounded-md border border-[#E5E3DE] bg-[#FAF9F6] px-3.5 py-2.5 text-sm text-[#20211F] focus:border-[#D9683B] focus:bg-white focus:outline-none"
                        />
                        {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#20211F] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="julian@example.com"
                        className="w-full rounded-md border border-[#E5E3DE] bg-[#FAF9F6] px-3.5 py-2.5 text-sm text-[#20211F] focus:border-[#D9683B] focus:bg-white focus:outline-none"
                      />
                      {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
                    </div>

                    {/* Preferred contact channel */}
                    <div>
                      <label className="block text-xs font-semibold text-[#20211F] mb-2">
                        Preferred Contact Method
                      </label>
                      <div className="grid grid-cols-3 gap-2.5">
                        {[
                          { id: 'whatsapp', label: 'WhatsApp', icon: MessageSquare },
                          { id: 'phone', label: 'Phone Call', icon: Phone },
                          { id: 'email', label: 'Email', icon: Mail }
                        ].map((method) => {
                          const Icon = method.icon;
                          return (
                            <button
                              key={method.id}
                              type="button"
                              onClick={() => setFormData({ ...formData, preferredContact: method.id as any })}
                              className={`flex items-center justify-center gap-2 p-3 rounded-lg border text-xs font-medium transition-all ${
                                formData.preferredContact === method.id
                                  ? 'border-[#D9683B] bg-[#fbf2ee] text-[#20211F] font-bold'
                                  : 'border-[#E5E3DE] bg-[#FAF9F6] text-[#73736F] hover:border-[#CDCAC2]'
                              }`}
                            >
                              <Icon className="h-4 w-4" />
                              <span>{method.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Consent checkbox */}
                    <div className="pt-2">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.agreedToTerms}
                          onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                          className="mt-1 h-4 w-4 rounded border-gray-300 text-[#D9683B] focus:ring-[#D9683B]"
                        />
                        <span className="text-xs text-[#73736F]">
                          I consent to Paintly contacting me with an itemized estimate and scheduling details for this inquiry. We respect your privacy.
                        </span>
                      </label>
                      {errors.agreedToTerms && (
                        <p className="text-red-600 text-xs mt-1">{errors.agreedToTerms}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* ================= STEP 4: REVIEW & SUBMIT ================= */}
                {step === 4 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#20211F]">
                        Step 4: Review Your Quotation Scope
                      </h2>
                      <p className="text-xs text-[#73736F] mt-1">
                        Please review the entered specifications before final submission.
                      </p>
                    </div>

                    <div className="rounded-xl border border-[#E5E3DE] bg-[#FAF9F6] p-6 space-y-4 text-xs">
                      
                      {/* Section 1 */}
                      <div className="space-y-2 pb-3 border-b border-[#E5E3DE]">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-[#20211F] uppercase tracking-wider text-[11px]">
                            1. Project Information
                          </span>
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="text-[#D9683B] font-semibold hover:underline"
                          >
                            Edit
                          </button>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[#73736F]">
                          <p>Service: <strong className="text-[#20211F]">{formData.serviceType}</strong></p>
                          <p>Property: <strong className="text-[#20211F]">{formData.propertyType}</strong></p>
                          <p>Approx Area: <strong className="text-[#20211F]">{formData.approxArea}</strong></p>
                          <p>Location: <strong className="text-[#20211F]">{formData.projectLocation}</strong></p>
                        </div>
                      </div>

                      {/* Section 2 */}
                      <div className="space-y-2 pb-3 border-b border-[#E5E3DE]">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-[#20211F] uppercase tracking-wider text-[11px]">
                            2. Requirements & Timing
                          </span>
                          <button
                            type="button"
                            onClick={() => setStep(2)}
                            className="text-[#D9683B] font-semibold hover:underline"
                          >
                            Edit
                          </button>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[#73736F]">
                          <p>Nature: <strong className="text-[#20211F]">{formData.projectNature}</strong></p>
                          <p>Scope: <strong className="text-[#20211F]">{formData.scopeArea}</strong></p>
                          <p>Finish: <strong className="text-[#20211F]">{formData.preferredFinish}</strong></p>
                          <p>Timeline: <strong className="text-[#20211F]">{formData.startDate}</strong></p>
                        </div>
                      </div>

                      {/* Section 3 */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-[#20211F] uppercase tracking-wider text-[11px]">
                            3. Contact Details
                          </span>
                          <button
                            type="button"
                            onClick={() => setStep(3)}
                            className="text-[#D9683B] font-semibold hover:underline"
                          >
                            Edit
                          </button>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[#73736F]">
                          <p>Name: <strong className="text-[#20211F]">{formData.fullName}</strong></p>
                          <p>Phone: <strong className="text-[#20211F]">{formData.phone}</strong></p>
                          <p>Email: <strong className="text-[#20211F]">{formData.email}</strong></p>
                          <p>Preferred: <strong className="text-[#20211F] uppercase">{formData.preferredContact}</strong></p>
                        </div>
                      </div>

                    </div>

                    <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5">
                      <ShieldCheck className="h-4 w-4 text-[#D9683B] flex-shrink-0 mt-0.5" />
                      <span>
                        Our estimates are fixed-rate proposals based on verified on-site room measurements. No surprise extras once quotation is signed.
                      </span>
                    </div>
                  </div>
                )}

                {/* FORM CONTROLS */}
                <div className="pt-4 border-t border-[#E5E3DE] flex items-center justify-between gap-4">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-md border border-[#E5E3DE] bg-white text-xs font-semibold text-[#20211F] hover:bg-[#FAF9F6]"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" />
                      <span>Back</span>
                    </button>
                  ) : <div />}

                  {step < 4 ? (
                    <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="inline-flex items-center gap-1.5 px-6 py-3 rounded-xl bg-[#20211F] text-xs font-bold text-white hover:bg-[#D9683B] transition-colors cursor-pointer"
                      >
                        <span>Continue to Step {step + 1}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#D9683B] text-sm font-extrabold text-white hover:bg-[#c4572b] transition-colors disabled:opacity-50 shadow-md cursor-pointer animate-cta-pulse"
                      >
                        {isSubmitting ? (
                          <span>Processing Scope...</span>
                        ) : (
                          <>
                            <span>Confirm Free Home Visit</span>
                            <CheckCircle2 className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </motion.div>
                  )}
                </div>

              </form>

            </div>
          )}

        </div>
      </section>

      {/* 3. TRUST BANNER */}
      <section className="py-12 bg-[#FAF9F6] border-b border-[#E5E3DE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <p className="font-heading text-sm font-bold text-[#20211F]">Zero-Obligation Estimate</p>
              <p className="text-xs text-[#73736F] mt-1">Written scope and price breakdown provided free of charge.</p>
            </div>
            <div>
              <p className="font-heading text-sm font-bold text-[#20211F]">Accurate Site Inspection</p>
              <p className="text-xs text-[#73736F] mt-1">Room measurements and wall check for exact paint coverage.</p>
            </div>
            <div>
              <p className="font-heading text-sm font-bold text-[#20211F]">Direct WhatsApp Support</p>
              <p className="text-xs text-[#73736F] mt-1">Chat directly with estimators during business hours.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
