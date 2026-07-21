/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Mohammad Fazil Firojkhan Malek
 * Dedicated Contact & Enquiry Form Page with Web3Forms & Full Social Matrix
 */

import React, { useState } from "react";
import { analyticsActions } from "../utils/analytics";
import { sanitizeInput, checkRateLimit } from "../utils/security";

const WEB3FORMS_ACCESS_KEY = "9af2abb9-1185-449c-9df9-320ba94e8808";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    serviceType: "Website Building & UI/UX Design",
    budget: "₹1k - ₹5k",
    message: "",
    honeypot: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [rateLimitError, setRateLimitError] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "malekfazilkhan07@gmail.com";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setRateLimitError(false);
    setSubmitError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Anti-spam honeypot bot trap

    // Rate Limiter: Prevent submissions more than once every 5 seconds
    if (!checkRateLimit("enquiry_form_submit", 5000)) {
      setRateLimitError(true);
      return;
    }

    // Sanitize inputs
    const cleanName = sanitizeInput(formData.fullName, 100);
    const cleanEmail = sanitizeInput(formData.email, 120);
    const cleanMessage = sanitizeInput(formData.message, 2000);

    if (!cleanName || !cleanEmail || !cleanMessage) {
      alert("Please enter valid name, email, and project message.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const formPayload = new FormData();
      formPayload.append("access_key", WEB3FORMS_ACCESS_KEY);
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
        analyticsActions.trackSendEmail();
        setSubmitted(true);
      } else {
        setSubmitError(result.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setSubmitError("Network error. Please check your internet connection or email directly.");
    } finally {
      setIsSubmitting(false);
    }

  };

  const copyEmail = () => {
    navigator.clipboard?.writeText(email);
    setCopied(true);
    analyticsActions.trackCopyEmail();
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    { label: "Personal LinkedIn", url: "https://www.linkedin.com/in/fazilkhan-malek-392082377", icon: "💼", tag: "@fazilkhan-malek" },
    { label: "Personal GitHub", url: "https://github.com/fazilkhan0786", icon: "🐙", tag: "@fazilkhan0786" },
    { label: "Personal Instagram", url: "https://www.instagram.com/fazilkhan_078?igsh=MXFlZnA3OWEzenQzZQ%3D%3D&utm_source=qr", icon: "📸", tag: "@fazilkhan_078" },
    { label: "Company Instagram", url: "https://www.instagram.com/nuroved.ai?igsh=emEzeWtqcTEwMmZl&utm_source=qr", icon: "🏢", tag: "@promacle" },
  ];

  return (
    <div className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="reveal text-center mb-12">
        <span className="font-[Patrick_Hand] text-lg text-[#e63946] block mb-2">// GET IN TOUCH</span>
        <h1 className="font-[Caveat] font-bold text-6xl md:text-8xl leading-none">
          let's build <span className="text-[#e63946]">together</span>
        </h1>
        <p className="font-[Kalam] text-xl text-neutral-600 max-w-2xl mx-auto mt-4 leading-relaxed">
          whether you need website building, UI/UX design, graphic design, startup collaboration, video editing, or healthcare AI microservices, drop an inquiry below.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Left Column — Interactive Working Enquiry Form */}
        <div className="lg:col-span-7 reveal wiggle-box bg-[#fffef7] p-8 md:p-10 border-3 border-black rounded-2xl relative shadow-lg">
          <div className="tape absolute -top-4 left-10 w-24 h-7 rotate-[-2deg]" />
          <h2 className="font-[Permanent_Marker] text-2xl md:text-3xl mb-2 text-neutral-900">
            Project Inquiry &amp; Working Enquiry Form
          </h2>
          <p className="font-[Patrick_Hand] text-neutral-600 text-base mb-6">
            Fill out the details below. Messages are delivered straight to my email (malekfazilkhan07@gmail.com).
          </p>

          {submitted ? (
            <div className="bg-green-100 border-2 border-green-500 p-8 rounded-xl text-center space-y-4 font-[Kalam]">
              <div className="text-5xl">🎉</div>
              <h3 className="font-[Permanent_Marker] text-2xl text-green-800">Inquiry Delivered!</h3>
              <p className="text-green-900 text-lg">
                Thank you, <strong>{formData.fullName}</strong>. Your message regarding{" "}
                <strong>{formData.serviceType}</strong> has been sent directly to my inbox. I will reply to <strong>{formData.email}</strong> shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    fullName: "",
                    email: "",
                    serviceType: "Website Building & UI/UX Design",
                    budget: "₹1k - ₹5k",
                    message: "",
                    honeypot: ""
                  });
                }}
                className="btn-hand btn-filled !py-2 !px-6 text-sm mt-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Spam Bot Honeypot Field */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {rateLimitError && (
                <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-xl text-sm font-[Kalam]">
                  ⏳ Please wait a few seconds before submitting another request.
                </div>
              )}

              {submitError && (
                <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-xl text-sm font-[Kalam]">
                  ⚠️ {submitError}
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-[Permanent_Marker] text-sm block mb-1 text-neutral-800">
                    Your Full Name <span className="text-[#e63946]">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="e.g. Alex Mercer"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-black rounded-xl font-[Patrick_Hand] text-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#e63946]"
                  />
                </div>

                <div>
                  <label className="font-[Permanent_Marker] text-sm block mb-1 text-neutral-800">
                    Email Address <span className="text-[#e63946]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-black rounded-xl font-[Patrick_Hand] text-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#e63946]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-[Permanent_Marker] text-sm block mb-1 text-neutral-800">
                    Service Required
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-black rounded-xl font-[Patrick_Hand] text-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#e63946]"
                  >
                    <option value="Website Building & UI/UX Design">Website Building &amp; UI/UX Design</option>
                    <option value="UI/UX Designing">UI/UX Designing</option>
                    <option value="Graphic Designing">Graphic Designing &amp; Branding</option>
                    <option value="Video Editing">Video Editing &amp; Motion Graphics</option>
                    <option value="Startup Collaboration">Startup Collaboration &amp; Advisory</option>
                    <option value="Healthcare AI & Microservices">Healthcare AI &amp; Microservices (NuroVed)</option>
                    <option value="Flutter Mobile App Development">Flutter Mobile App Development</option>
                  </select>
                </div>

                <div>
                  <label className="font-[Permanent_Marker] text-sm block mb-1 text-neutral-800">
                    Estimated Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-black rounded-xl font-[Patrick_Hand] text-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#e63946]"
                  >
                    <option value="<₹5k">Under ₹5,000</option>
                    <option value="₹5k - ₹25k">₹5,000 - ₹25,000</option>
                    <option value="₹25k - ₹1L">₹25,000 - ₹1,00,000</option>
                    <option value="₹1L+">₹1,00,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-[Permanent_Marker] text-sm block mb-1 text-neutral-800">
                  Project Details / Message <span className="text-[#e63946]">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Describe your project requirements, scope, and target launch timeline..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border-2 border-black rounded-xl font-[Kalam] text-base bg-white focus:outline-none focus:ring-2 focus:ring-[#e63946]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-hand btn-filled w-full text-xl !py-3 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? "⏳ Sending Inquiry..." : "✉️ Submit Enquiry →"}
              </button>
            </form>
          )}
        </div>

        {/* Right Column — Social Profiles Matrix & Quick Info */}
        <div className="lg:col-span-5 space-y-8">
          {/* Quick Direct Email */}
          <div className="reveal sketch-card !p-6 relative">
            <h3 className="font-[Permanent_Marker] text-2xl mb-2 flex items-center gap-2">
              <span>✉️</span> Direct Mail &amp; Contact
            </h3>
            <p className="font-[Kalam] text-neutral-700 text-base mb-4">
              prefer direct email? click below to send or copy address directly:
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${email}?subject=let's build something`}
                onClick={() => analyticsActions.trackSendEmail()}
                className="btn-hand btn-filled !py-2 !px-4 !text-sm"
              >
                Send Email
              </a>
              <button onClick={copyEmail} className="btn-hand !py-2 !px-4 !text-sm">
                {copied ? "✓ Copied!" : "📋 Copy Address"}
              </button>
            </div>
          </div>

          {/* Social Profiles Matrix */}
          <div className="reveal wiggle-box bg-[#fffdf5] p-6 border-3 border-black rounded-2xl">
            <h3 className="font-[Permanent_Marker] text-2xl mb-4 text-neutral-900 flex items-center gap-2">
              <span>🌐</span> Social Matrix &amp; Profiles
            </h3>
            <div className="space-y-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="me noopener noreferrer"
                  onClick={() => analyticsActions.trackSocialClick(s.label, s.url)}
                  className="flex items-center justify-between p-3 bg-white border-2 border-black rounded-xl hover:bg-[#fff9b0] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{s.icon}</span>
                    <div>
                      <span className="font-[Permanent_Marker] text-base block">{s.label}</span>
                      <span className="font-[Patrick_Hand] text-xs text-neutral-500">{s.tag}</span>
                    </div>
                  </div>
                  <span className="font-[Patrick_Hand] text-lg text-[#e63946]">↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Location Badge */}
          <div className="reveal sticky-note sticky-orange !p-6" style={{ transform: "rotate(1.5deg)" }}>
            <p className="font-[Permanent_Marker] text-xl mb-1">📍 Location</p>
            <p className="font-[Kalam] text-base leading-snug">
              Mohammad Fazil Malek (Fazilkhan)<br />
              Ahmedabad, Gujarat, India<br />
              <span className="text-xs font-[Patrick_Hand] text-neutral-600">Computer Engineering Student @ GTU</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
