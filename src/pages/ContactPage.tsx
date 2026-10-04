import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Clock, Send, CheckCircle2 } from 'lucide-react';
import { companyConfig } from '../data/companyData';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ArrowFillButton } from '../components/common/ArrowFillButton';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Project Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || (!formData.phone.trim() && !formData.email.trim())) {
      setError('Please enter your name and your 10-digit mobile number so we can call you.');
      return;
    }

    setLoading(true);
    // Simulate network submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="space-y-0">
      
      {/* 1. HERO */}
      <section className="pt-8 pb-12 md:pt-14 md:pb-16 border-b border-[#E5E3DE] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} className="mb-6" />

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9683B]">
              Direct Inquiries
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#20211F] tracking-tight leading-[1.1]">
              Talk to Our Team.
            </h1>
            <p className="text-base sm:text-lg text-[#73736F] leading-relaxed">
              Have questions regarding our painting methodology, materials, or commercial capacity? Reach out via phone, email, WhatsApp, or through the inquiry form below.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTACT CHANNELS & FORM */}
      <section className="py-16 md:py-24 border-b border-[#E5E3DE] bg-[#F1F0EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Info & Map Card */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="bg-white rounded-xl border border-[#E5E3DE] p-6 md:p-8 space-y-6 shadow-xs">
                <h2 className="font-heading text-xl font-bold text-[#20211F]">
                  Contact Information
                </h2>

                <div className="space-y-4 text-sm">
                  {/* Callback Request */}
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#FAF9F6] border border-[#E5E3DE] text-[#D9683B]">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-[#73736F]">Phone Consultation</p>
                      <p className="font-semibold text-xs text-[#20211F] mt-0.5">
                        Free Call Back Service
                      </p>
                      <p className="text-[11px] text-[#73736F]">
                        Drop your number in the form; our advisor calls you back within 30 minutes.
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#FAF9F6] border border-[#E5E3DE] text-[#D9683B]">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-[#73736F]">Email Inquiries</p>
                      <a
                        href={`mailto:${companyConfig.contact.email}`}
                        className="font-medium text-[#20211F] hover:text-[#D9683B] transition-colors"
                      >
                        {companyConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366]">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-[#73736F]">WhatsApp Assistance</p>
                      <p className="font-medium text-xs text-[#20211F] mt-0.5">
                        Quick Quotation on WhatsApp
                      </p>
                      <p className="text-[11px] text-[#73736F]">
                        Send room photos or floor plans to get an instant scope review.
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#FAF9F6] border border-[#E5E3DE] text-[#D9683B]">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-[#73736F]">Service Hubs</p>
                      <p className="font-medium text-xs text-[#20211F]">
                        Available across Delhi NCR, Bengaluru, Mumbai, Pune, Hyderabad, and major cities in India
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3.5 pt-2 border-t border-[#E5E3DE]">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#FAF9F6] border border-[#E5E3DE] text-[#73736F]">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-[#73736F]">Operational Working Hours</p>
                      <p className="font-medium text-[#20211F]">
                        {companyConfig.contact.hours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Radius Card / Styled Map Representation */}
              <div className="bg-white rounded-xl border border-[#E5E3DE] p-6 shadow-xs space-y-3">
                <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-[#20211F]">
                  Service Coverage
                </h3>
                <p className="text-xs text-[#73736F] leading-relaxed">
                  We deploy painting crews across the central metropolitan region, residential hill areas, and industrial logistics corridors.
                </p>
                <div className="relative h-44 rounded-lg bg-[#FAF9F6] border border-[#E5E3DE] flex items-center justify-center overflow-hidden">
                  {/* Subtle grid pattern map placeholder */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#20211F_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="relative z-10 flex flex-col items-center text-center p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D9683B] text-white shadow-md mb-2">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <p className="text-xs font-bold text-[#20211F]">Main Depot & Dispatch Center</p>
                    <p className="text-[11px] text-[#73736F]">{companyConfig.contact.address}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Interactive Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-xl border border-[#E5E3DE] p-8 md:p-10 shadow-xs">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-2">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-[#20211F]">
                    Thank You for Reaching Out
                  </h3>
                  <p className="text-sm text-[#73736F] max-w-md mx-auto leading-relaxed">
                    We have received your inquiry. A member of the Paintly team will review your project details and follow up within one business day.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          subject: 'General Project Inquiry',
                          message: ''
                        });
                      }}
                      className="px-6 py-2.5 rounded-md border border-[#E5E3DE] text-xs font-semibold text-[#20211F] hover:bg-[#F1F0EC]"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-[#20211F]">
                      Send Us a Message
                    </h2>
                    <p className="text-xs sm:text-sm text-[#73736F] mt-1">
                      Fill out this form for general inquiries or to discuss custom commercial requirements.
                    </p>
                  </div>

                  {error && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-[#20211F] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Rajesh Sharma"
                        className="w-full rounded-md border border-[#E5E3DE] bg-[#FAF9F6] px-3.5 py-2.5 text-sm text-[#20211F] focus:border-[#D9683B] focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-[#20211F] mb-1.5">
                        Mobile Number (for WhatsApp / Call) *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="e.g. 98765 43210"
                        className="w-full rounded-md border border-[#E5E3DE] bg-[#FAF9F6] px-3.5 py-2.5 text-sm text-[#20211F] focus:border-[#D9683B] focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-[#20211F] mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rajesh@example.com (optional)"
                        className="w-full rounded-md border border-[#E5E3DE] bg-[#FAF9F6] px-3.5 py-2.5 text-sm text-[#20211F] focus:border-[#D9683B] focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-semibold text-[#20211F] mb-1.5">
                        Inquiry Topic
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#E5E3DE] bg-[#FAF9F6] px-3.5 py-2.5 text-sm text-[#20211F] focus:border-[#D9683B] focus:bg-white focus:outline-none"
                      >
                        <option value="General Project Inquiry">General Project Inquiry</option>
                        <option value="Residential Interior / Exterior">Residential Interior / Exterior</option>
                        <option value="Commercial / Office Project">Commercial / Office Project</option>
                        <option value="Industrial Floor Coating">Industrial Floor Coating</option>
                        <option value="Architect / Designer Collaboration">Architect / Designer Collaboration</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-[#20211F] mb-1.5">
                      Project Details or Questions *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Share details regarding your property, timeline, or scope..."
                      className="w-full rounded-md border border-[#E5E3DE] bg-[#FAF9F6] px-3.5 py-2.5 text-sm text-[#20211F] focus:border-[#D9683B] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div className="pt-1 flex justify-center">
                    <ArrowFillButton
                      type="submit"
                      disabled={loading}
                      size="lg"
                      text={loading ? 'Submitting...' : 'Send Message'}
                      icon={Send}
                      bgColor="#20211F"
                      fillBgColor="#D9683B"
                      textColor="#ffffff"
                      fillTextColor="#ffffff"
                      arrowColor="#ffffff"
                      className="w-full shadow-sm hover:shadow-md"
                    />
                  </div>

                  <p className="text-[11px] text-[#73736F] text-center">
                    Looking for an instant quote? Use our{' '}
                    <a href="/quote" className="text-[#D9683B] font-semibold hover:underline">
                      Multi-Step Quote Calculator
                    </a>
                  </p>
                </form>
              )}

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
