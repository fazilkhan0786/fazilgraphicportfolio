/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Mohammad Fazil Firojkhan Malek
 * Dedicated Contact & Enquiry Form Page with Web3Forms & Full Social Matrix
 * Faithfully matches media_1793866065586.jpg
 */

import React, { useState, useEffect, useCallback } from "react";
import { analyticsActions } from "../utils/analytics";
import { sanitizeInput, checkRateLimit } from "../utils/security";
import Breadcrumbs from "../components/Breadcrumbs";
import { CONTACT_INFO } from "../constants/contact";
import {
  RetroContactComputerIllustration,
  DocumentInquiryIcon,
  DirectContactChatIcon,
  OnlineNetworkIcon,
  MailOutlineIcon,
  WhatsAppBrandIcon,
  CopyClipboardIcon,
  LinkedInBrandIcon,
  GitHubBrandIcon,
  InstagramBrandIcon,
  LocationPinMarkerIcon
} from "../components/RetroContactVisuals";
import { RetroHandshakeIcon } from "../components/RetroServicesVisuals";

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "9af2abb9-1185-449c-9df9-320ba94e8808";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SERVICE_OPTIONS = [
  "Product Development",
  "UI/UX Design",
  "AI/ML Solutions",
  "Technical Consulting",
  "Graphic Design",
  "Website Development",
  "Flutter & Mobile App Development",
  "Startup Collaboration",
  "Healthcare AI & Microservices (NuroVed)",
  "Other / General Inquiry"
];

function getInitialParam(key: string): string | null {
  if (typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

interface ContactPageProps {
  onNavigate?: (path: string) => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const initialServiceParam = getInitialParam("service");
  const initialService = initialServiceParam
    ? (SERVICE_OPTIONS.find((opt) => opt.toLowerCase() === initialServiceParam.toLowerCase()) || initialServiceParam)
    : "Product Development";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    serviceType: initialService,
    budget: "₹5k - ₹25k",
    message: initialServiceParam
      ? `Hi Fazil, I'm reaching out regarding your ${initialServiceParam} services. Let's discuss scope, timeline, and next steps.`
      : "",
    botcheck: ""
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get("service");
    if (serviceParam) {
      const decoded = decodeURIComponent(serviceParam);
      const matched = SERVICE_OPTIONS.find(
        (opt) => opt.toLowerCase() === decoded.toLowerCase()
      ) || decoded;

      setFormData((prev) => ({
        ...prev,
        serviceType: matched,
        message: prev.message || `Hi Fazil, I'm reaching out regarding your ${decoded} services. Let's discuss scope, timeline, and next steps.`
      }));
    }
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [rateLimitError, setRateLimitError] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = CONTACT_INFO.email;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setRateLimitError(false);
    setSubmitError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent double submission
    if (formData.botcheck) return; // Silent discard for automated bot submissions
    if (!checkRateLimit("enquiry_form_submit", 5000)) {
      setRateLimitError(true);
      return;
    }

    const cleanName = sanitizeInput(formData.fullName.trim(), 100);
    const cleanEmail = sanitizeInput(formData.email.trim(), 120);
    const cleanMessage = sanitizeInput(formData.message.trim(), 2000);

    if (!cleanName || cleanName.length < 2) {
      setSubmitError("Please enter your name or company name.");
      return;
    }

    if (!cleanEmail || !EMAIL_REGEX.test(cleanEmail)) {
      setSubmitError("Please provide a valid email address so I can reply to your inquiry.");
      return;
    }

    if (!cleanMessage || cleanMessage.length < 10) {
      setSubmitError("Please provide a brief description of what you would like to build (at least 10 characters).");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const formPayload = new FormData();
      formPayload.append("access_key", WEB3FORMS_ACCESS_KEY);
      // Native Web3Forms honeypot parameter (must remain empty for legitimate human visitors)
      formPayload.append("botcheck", formData.botcheck || "");
      formPayload.append("name", cleanName);
      formPayload.append("email", cleanEmail);
      formPayload.append("service_required", formData.serviceType);
      formPayload.append("budget_range", formData.budget);
      formPayload.append("message", cleanMessage);
      formPayload.append("subject", `New Portfolio Inquiry from ${cleanName}`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload
      });

      const result = await response.json();

      if (result.success) {
        analyticsActions.trackFormSubmissionSuccess(formData.serviceType, formData.budget);
        setSubmitted(true);
      } else {
        setSubmitError(result.message || "Message could not be sent. Please try again or reach out directly via email.");
      }
    } catch {
      setSubmitError("Message could not be sent due to a temporary network interruption. Please try again or email malekfazilkhan07@gmail.com directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = useCallback(() => {
    if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
        analyticsActions.trackCopyEmail();
        setTimeout(() => setCopied(false), 2000);
      }).catch(() => {
        setCopied(false);
      });
    }
  }, [email]);

  const socialLinks = [
    {
      label: "LinkedIn",
      url: CONTACT_INFO.social.linkedin,
      icon: <LinkedInBrandIcon className="w-5 h-5 shrink-0" />
    },
    {
      label: "GitHub",
      url: CONTACT_INFO.social.github,
      icon: <GitHubBrandIcon className="w-5 h-5 shrink-0" />
    },
    {
      label: "Instagram",
      url: CONTACT_INFO.social.instagram,
      icon: <InstagramBrandIcon className="w-5 h-5 shrink-0" />
    }
  ];

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto relative overflow-hidden">
      {/* Decorative Pixel Checkerboard Accents in Corner matching Reference */}
      <div
        className="hidden md:block w-12 h-10 rounded-sm pixel-checkerboard-purple border border-[#1a1a1a]/30 absolute left-6 top-32 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="hidden md:block w-10 h-8 rounded-sm pixel-checkerboard-coral border border-[#1a1a1a]/30 absolute right-6 top-64 pointer-events-none"
        aria-hidden="true"
      />

      {/* Semantic Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "Contact", path: "/contact/" }
        ]}
        onNavigate={onNavigate}
        className="mb-8"
      />

      {/* =========================================================================
          HERO SECTION — Two-Column Composition matching media_1793866065586.jpg
          ========================================================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center mb-12">
        {/* Left Column: Heading, Purple Tag, Red Block, and Description */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          <span className="inline-block bg-[#c8b6ff] border-2 border-[#1a1a1a] text-[#1a1a1a] font-mono text-xs font-extrabold px-3 py-1 rounded shadow-[2px_2px_0px_#1a1a1a] uppercase mb-4 tracking-wider">
            // CONTACT
          </span>

          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-[#1a1a1a] tracking-tight leading-[1.15] mb-5 comic-sparks">
            LET'S BUILD SOMETHING{" "}
            <span className="inline-block bg-[#e63946] text-white px-2.5 py-0.5 border-2 border-[#1a1a1a] shadow-[2.5px_2.5px_0px_#1a1a1a]">
              GREAT TOGETHER.
            </span>
          </h1>

          <div className="border-l-4 border-[#e63946] pl-3.5 py-1 max-w-xl">
            <p className="font-body text-base sm:text-lg text-[#3e3832] font-bold leading-relaxed">
              Have a project, collaboration idea, or just want to say hello? Send me a message.
            </p>
          </div>
        </div>

        {/* Right Column: Illustrated Retro Computer with Envelope Screen */}
        <div className="lg:col-span-5 flex items-center justify-center lg:justify-end z-10">
          <RetroContactComputerIllustration className="max-w-[230px] sm:max-w-[270px]" />
        </div>
      </section>

      {/* =========================================================================
          MAIN CONTACT SECTION — 2-Column Desktop Layout
          Left: Large Retro Project Inquiry Window
          Right: 3 Stacked Information Cards
          ========================================================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-start">
        {/* =====================================================================
            LEFT COLUMN: Large Retro Project Inquiry Window
            ===================================================================== */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="border-[2.5px] border-[#1a1a1a] rounded-2xl shadow-[8px_8px_0px_#7c3aed] bg-[#fbf8ef] overflow-hidden">
            {/* Window Title Bar */}
            <div className="bg-[#ffd93d] border-b-[2.5px] border-[#1a1a1a] px-3.5 py-2 flex items-center justify-between select-none">
              {/* Left 3 Window Dots */}
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#e63946] border border-[#1a1a1a] shadow-[0.5px_0.5px_0px_#1a1a1a]" />
                <span className="w-3 h-3 rounded-full bg-[#ffd93d] border border-[#1a1a1a] shadow-[0.5px_0.5px_0px_#1a1a1a]" />
                <span className="w-3 h-3 rounded-full bg-[#86efac] border border-[#1a1a1a] shadow-[0.5px_0.5px_0px_#1a1a1a]" />
              </div>

              {/* Right 3 Window Control Buttons */}
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 bg-white border border-[#1a1a1a] rounded-sm text-[9px] font-mono font-bold flex items-center justify-center text-neutral-600 shadow-[1px_1px_0px_#1a1a1a]">
                  _
                </span>
                <span className="w-4 h-4 bg-white border border-[#1a1a1a] rounded-sm text-[9px] font-mono font-bold flex items-center justify-center text-neutral-600 shadow-[1px_1px_0px_#1a1a1a]">
                  □
                </span>
                <span className="w-4 h-4 bg-[#e63946] border border-[#1a1a1a] rounded-sm text-[9px] font-mono font-bold flex items-center justify-center text-white shadow-[1px_1px_0px_#1a1a1a]">
                  ✕
                </span>
              </div>
            </div>

            {/* Window Interior Content */}
            <div className="p-5 sm:p-7 md:p-8">
              {/* Header inside Window */}
              <div className="flex items-center gap-3.5 mb-2">
                <div className="bg-[#c8b6ff] border-2 border-[#1a1a1a] rounded-lg p-2.5 shadow-[2px_2px_0px_#1a1a1a] shrink-0">
                  <DocumentInquiryIcon className="w-6 h-6 text-[#1a1a1a]" />
                </div>
                <div className="border-r-2 border-[#1a1a1a] h-10 mx-1 shrink-0 hidden sm:block" />
                <div>
                  <h2 className="font-display font-extrabold text-2xl md:text-3xl text-[#1a1a1a] tracking-tight leading-none">
                    PROJECT INQUIRY
                  </h2>
                  <p className="font-mono text-xs md:text-sm font-bold text-neutral-600 mt-1">
                    Tell me a little about what you're building.
                  </p>
                </div>
              </div>

              {/* Horizontal Divider */}
              <div className="border-t-2 border-[#1a1a1a]/25 my-5" />

              {/* Form Handling (Submitted vs Active Form) */}
              {submitted ? (
                <div className="bg-[#dcfce7] border-2 border-[#1a1a1a] p-6 sm:p-8 rounded-xl text-center space-y-4 shadow-[3px_3px_0px_#1a1a1a]">
                  <div className="w-12 h-12 bg-[#86efac] border-2 border-[#1a1a1a] rounded-full mx-auto flex items-center justify-center font-bold text-2xl text-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a]">
                    ✓
                  </div>
                  <h3 className="font-display font-extrabold text-2xl text-[#1a1a1a]">
                    Inquiry Delivered Successfully!
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-neutral-800 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="font-bold">{formData.fullName}</strong>. Your inquiry regarding{" "}
                    <strong className="font-bold">{formData.serviceType}</strong> has been transmitted directly to my personal inbox. I will review and reply to <strong className="font-bold">{formData.email}</strong> within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        serviceType: "Product Development",
                        budget: "₹5k - ₹25k",
                        message: "",
                        botcheck: ""
                      });
                    }}
                    className="inline-flex items-center justify-center px-6 py-2.5 bg-[#ffd93d] hover:bg-[#ffea79] border-2 border-[#1a1a1a] rounded-lg font-mono text-xs font-black text-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
                  >
                    Send Another Message ↺
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Web3Forms native anti-spam honeypot (visually hidden, ignored by screen readers and legitimate users) */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    checked={Boolean(formData.botcheck)}
                    onChange={(e) => setFormData((prev) => ({ ...prev, botcheck: e.target.checked ? "bot" : "" }))}
                    className="hidden"
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  {/* Rate limit warning */}
                  {rateLimitError && (
                    <div className="p-3 bg-[#ffe4e6] border-2 border-[#1a1a1a] text-[#e63946] rounded-lg text-xs font-mono font-bold shadow-[2px_2px_0px_#1a1a1a]">
                      ⚠️ Please wait a few seconds before submitting another request.
                    </div>
                  )}

                  {/* Submission error warning */}
                  {submitError && (
                    <div className="p-3 bg-[#ffe4e6] border-2 border-[#1a1a1a] text-[#e63946] rounded-lg text-xs font-mono font-bold shadow-[2px_2px_0px_#1a1a1a]">
                      ✕ {submitError}
                    </div>
                  )}

                  {/* Row 1: Your Name & Email Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-xs font-black uppercase tracking-wider text-[#1a1a1a] block mb-1.5">
                        YOUR NAME
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="Your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full bg-white border-2 border-[#1a1a1a] rounded-lg px-3.5 py-2.5 font-mono text-xs sm:text-sm font-bold text-[#1a1a1a] placeholder:text-neutral-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[#ffd93d] focus:border-[#1a1a1a] shadow-[1.5px_1.5px_0px_#1a1a1a] transition-all"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-xs font-black uppercase tracking-wider text-[#1a1a1a] block mb-1.5">
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white border-2 border-[#1a1a1a] rounded-lg px-3.5 py-2.5 font-mono text-xs sm:text-sm font-bold text-[#1a1a1a] placeholder:text-neutral-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[#ffd93d] focus:border-[#1a1a1a] shadow-[1.5px_1.5px_0px_#1a1a1a] transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Service Required & Estimated Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-xs font-black uppercase tracking-wider text-[#1a1a1a] block mb-1.5">
                        SERVICE REQUIRED
                      </label>
                      <div className="relative">
                        <select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          className="w-full bg-white border-2 border-[#1a1a1a] rounded-lg px-3.5 py-2.5 font-mono text-xs sm:text-sm font-bold text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#ffd93d] focus:border-[#1a1a1a] shadow-[1.5px_1.5px_0px_#1a1a1a] transition-all appearance-none pr-8 cursor-pointer"
                        >
                          {SERVICE_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                          {!SERVICE_OPTIONS.includes(formData.serviceType) && (
                            <option value={formData.serviceType}>{formData.serviceType}</option>
                          )}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-[#1a1a1a] font-bold text-xs">
                          ▼
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="font-mono text-xs font-black uppercase tracking-wider text-[#1a1a1a] block mb-1.5">
                        ESTIMATED BUDGET
                      </label>
                      <div className="relative">
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full bg-white border-2 border-[#1a1a1a] rounded-lg px-3.5 py-2.5 font-mono text-xs sm:text-sm font-bold text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#ffd93d] focus:border-[#1a1a1a] shadow-[1.5px_1.5px_0px_#1a1a1a] transition-all appearance-none pr-8 cursor-pointer"
                        >
                          <option value="<₹5k">Under ₹5,000</option>
                          <option value="₹5k - ₹25k">₹5,000 - ₹25,000</option>
                          <option value="₹25k - ₹1L">₹25,000 - ₹1,00,000</option>
                          <option value="₹1L+">₹1,00,000+</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-[#1a1a1a] font-bold text-xs">
                          ▼
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Project Details */}
                  <div>
                    <label className="font-mono text-xs font-black uppercase tracking-wider text-[#1a1a1a] block mb-1.5">
                      PROJECT DETAILS
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Share your idea, goals, scope, and timeline..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-white border-2 border-[#1a1a1a] rounded-lg p-3.5 font-mono text-xs sm:text-sm font-bold text-[#1a1a1a] placeholder:text-neutral-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[#ffd93d] focus:border-[#1a1a1a] shadow-[1.5px_1.5px_0px_#1a1a1a] transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button: Red Block */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#e63946] hover:bg-[#d90429] text-white border-2 border-[#1a1a1a] rounded-xl font-display font-black text-base md:text-lg tracking-wider uppercase shadow-[3.5px_3.5px_0px_#1a1a1a] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_#1a1a1a] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#1a1a1a] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    <span>{isSubmitting ? "SENDING INQUIRY..." : "SEND INQUIRY"}</span>
                    <span className="text-xl">↗</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* =====================================================================
            RIGHT COLUMN: 3 Stacked Information Cards
            1. Direct Contact (Mint green)
            2. Find Me Online (Pink)
            3. Availability Status (Yellow)
            ===================================================================== */}
        <div className="lg:col-span-5 space-y-6 flex flex-col">
          {/* Card 1: DIRECT CONTACT (Mint green) */}
          <div className="bg-[#86efac] border-[2.5px] border-[#1a1a1a] rounded-2xl p-5 sm:p-6 shadow-[6px_6px_0px_#059669]">
            <div className="flex items-center gap-3.5 mb-2">
              <div className="bg-white border-2 border-[#1a1a1a] rounded-lg p-2 shadow-[2px_2px_0px_#1a1a1a] shrink-0">
                <DirectContactChatIcon className="w-6 h-6 text-[#1a1a1a]" />
              </div>
              <div className="border-r-2 border-[#1a1a1a] h-9 mx-1 shrink-0" />
              <div>
                <h3 className="font-display font-extrabold text-xl text-[#1a1a1a] leading-none">
                  DIRECT CONTACT
                </h3>
                <p className="font-mono text-xs font-bold text-neutral-800 mt-1">
                  Prefer a direct conversation?
                </p>
              </div>
            </div>

            {/* 3 Action Buttons in a Row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-2.5 mt-5">
              <a
                href={`mailto:${email}?subject=Project%20Inquiry`}
                onClick={() => analyticsActions.trackSendEmail()}
                className="bg-white hover:bg-[#ffd93d] border-2 border-[#1a1a1a] rounded-lg py-2.5 px-2 font-mono text-xs font-black text-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] hover:shadow-[3px_3px_0px_#1a1a1a] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] transition-all flex items-center justify-center gap-1.5 text-center cursor-pointer select-none"
              >
                <MailOutlineIcon className="w-3.5 h-3.5 shrink-0" />
                <span>Email Me</span>
              </a>

              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => analyticsActions.trackWhatsAppClick()}
                className="bg-white hover:bg-[#ffd93d] border-2 border-[#1a1a1a] rounded-lg py-2.5 px-2 font-mono text-xs font-black text-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] hover:shadow-[3px_3px_0px_#1a1a1a] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] transition-all flex items-center justify-center gap-1.5 text-center cursor-pointer select-none"
              >
                <WhatsAppBrandIcon className="w-3.5 h-3.5 shrink-0" />
                <span>WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="bg-white hover:bg-[#ffd93d] border-2 border-[#1a1a1a] rounded-lg py-2.5 px-2 font-mono text-xs font-black text-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] hover:shadow-[3px_3px_0px_#1a1a1a] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] transition-all flex items-center justify-center gap-1.5 text-center cursor-pointer select-none"
              >
                <CopyClipboardIcon className="w-3.5 h-3.5 shrink-0" />
                <span>{copied ? "Copied!" : "Copy Email"}</span>
              </button>
            </div>
          </div>

          {/* Card 2: FIND ME ONLINE (Pastel pink) */}
          <div className="bg-[#fbcfe8] border-[2.5px] border-[#1a1a1a] rounded-2xl p-5 sm:p-6 shadow-[6px_6px_0px_#e11d48]">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="bg-white border-2 border-[#1a1a1a] rounded-lg p-2 shadow-[2px_2px_0px_#1a1a1a] shrink-0">
                <OnlineNetworkIcon className="w-6 h-6 text-[#1a1a1a]" />
              </div>
              <div className="border-r-2 border-[#1a1a1a] h-9 mx-1 shrink-0" />
              <div>
                <h3 className="font-display font-extrabold text-xl text-[#1a1a1a] leading-none">
                  FIND ME ONLINE
                </h3>
              </div>
            </div>

            {/* Social Links Rows */}
            <div className="space-y-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="me noopener noreferrer"
                  onClick={() => analyticsActions.trackSocialClick(s.label, s.url)}
                  className="w-full bg-white hover:bg-[#ffd93d] border-2 border-[#1a1a1a] rounded-lg px-4 py-2.5 flex items-center justify-between font-display font-bold text-sm text-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] hover:shadow-[3px_3px_0px_#1a1a1a] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    {s.icon}
                    <span>{s.label}</span>
                  </div>
                  <span className="text-base text-neutral-600 group-hover:text-[#1a1a1a] transition-colors">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Card 3: AVAILABILITY STATUS (Pastel yellow) */}
          <div className="bg-[#ffd93d] border-[2.5px] border-[#1a1a1a] rounded-2xl p-4 sm:p-4.5 shadow-[4px_4px_0px_#1a1a1a] flex items-center">
            <div className="flex items-center gap-3">
              <span className="w-3.5 h-3.5 rounded-full bg-[#22c55e] border-2 border-[#1a1a1a] shrink-0 animate-pulse shadow-[1px_1px_0px_#1a1a1a]" />
              <div className="border-r-2 border-[#1a1a1a] h-5 mx-0.5 shrink-0" />
              <span className="font-mono text-xs sm:text-[13px] font-black tracking-wider text-[#1a1a1a] uppercase leading-tight">
                OPEN TO SELECT PROJECTS &amp; COLLABORATIONS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BOTTOM CTA BANNER — 2-Segment Composition with Pink Offset Shadow
          Left: Handshake + Have an idea? Let's make it real.
          Right: Location pin + Ahmedabad, Gujarat • Working worldwide
          ========================================================================= */}
      <section className="relative mt-8 mb-6">
        <div className="border-[2.5px] border-[#1a1a1a] rounded-2xl shadow-[6px_6px_0px_#f472b6] bg-white overflow-hidden grid grid-cols-1 md:grid-cols-12 items-stretch">
          {/* Left Segment: Yellow with Handshake */}
          <div className="md:col-span-6 bg-[#ffd93d] border-b-2 md:border-b-0 md:border-r-[2.5px] border-[#1a1a1a] p-4 sm:p-5 flex items-center gap-3.5">
            <RetroHandshakeIcon className="w-10 h-8 shrink-0" />
            <div className="border-r-2 border-[#1a1a1a] h-7 mx-0.5 shrink-0 hidden sm:block" />
            <h3 className="font-display font-extrabold text-base sm:text-lg text-[#1a1a1a] leading-tight">
              Have an idea? Let's make it real.
            </h3>
          </div>

          {/* Right Segment: Cream with Location Pin */}
          <div className="md:col-span-6 bg-[#fbf8ef] p-4 sm:p-5 flex items-center gap-3">
            <LocationPinMarkerIcon className="w-5 h-5 shrink-0 text-[#e63946]" />
            <p className="font-mono text-xs sm:text-sm font-bold text-[#3e3832]">
              Ahmedabad, Gujarat • Working worldwide
            </p>
          </div>
        </div>

        {/* Decorative Pixel Checkerboard Motif outside bottom-right */}
        <div
          className="hidden md:grid grid-cols-4 grid-rows-2 w-10 h-5 border border-[#1a1a1a] overflow-hidden absolute -bottom-7 right-2"
          aria-hidden="true"
        >
          <span className="bg-[#c8b6ff]" />
          <span className="bg-transparent" />
          <span className="bg-[#c8b6ff]" />
          <span className="bg-transparent" />
          <span className="bg-transparent" />
          <span className="bg-[#c8b6ff]" />
          <span className="bg-transparent" />
          <span className="bg-[#c8b6ff]" />
        </div>
      </section>
    </div>
  );
}
