/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Fazil Malek
 * Dedicated Crawlable Privacy Policy & Data Handling Disclosures Page
 */

import Breadcrumbs from "../components/Breadcrumbs";

interface PrivacyPolicyPageProps {
  onNavigate?: (path: string) => void;
}

export default function PrivacyPolicyPage({ onNavigate }: PrivacyPolicyPageProps) {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Privacy Policy", path: "/privacy-policy/" }
  ];

  return (
    <div className="py-24 px-6 md:px-10 max-w-4xl mx-auto">
      <Breadcrumbs items={breadcrumbItems} onNavigate={onNavigate} />

      <div className="reveal text-center mb-12">
        <span className="font-[Patrick_Hand] text-lg text-[#e63946] block mb-2">
          // TRANSPARENCY &amp; LEGAL NOTICE
        </span>
        <h1 className="font-[Caveat] font-bold text-5xl md:text-7xl leading-none">
          privacy policy &amp; <span className="text-[#e63946]">disclosures</span>
        </h1>
        <p className="font-[Kalam] text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mt-4 leading-relaxed">
          clear, transparent explanations of what data is collected, how it is processed, and your rights as a visitor to fazilportfolio.me.
        </p>
      </div>

      <div className="reveal wiggle-box bg-[#fffef7] p-8 md:p-12 border-[2.5px] border-black rounded-lg relative shadow-[6px_8px_0_rgba(26,26,26,0.12)]">
        <div className="tape absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-7 rotate-[-1deg]" />

        <div className="border-b-2 border-dashed border-black/15 pb-4 mb-8 flex flex-wrap items-center justify-between text-sm font-[Patrick_Hand] text-neutral-500">
          <span>Effective Date: October 24, 2026</span>
          <span>Operator: Fazil Malek (Ahmedabad, Gujarat, India)</span>
        </div>

        <div className="space-y-8 font-[Kalam] text-neutral-800 text-lg leading-relaxed">
          <section>
            <h2 className="font-[Permanent_Marker] text-2xl text-[#1a1a1a] mb-3">
              1. Overview
            </h2>
            <p>
              This website (<a href="/" onClick={(e) => { if (onNavigate && !e.ctrlKey && !e.metaKey) { e.preventDefault(); onNavigate("/"); } }} className="text-[#e63946] underline-hand font-bold">fazilportfolio.me</a>) is the personal portfolio and engineering showcase of <strong>Fazil Malek</strong>, founder of Promacle. This policy describes how personal information is handled when you browse projects, read stories, or submit inquiries.
            </p>
          </section>

          <section>
            <h2 className="font-[Permanent_Marker] text-2xl text-[#1a1a1a] mb-3">
              2. Information You Provide Directly (Contact Form)
            </h2>
            <p>
              When you submit a message via the <a href="/contact/" onClick={(e) => { if (onNavigate && !e.ctrlKey && !e.metaKey) { e.preventDefault(); onNavigate("/contact/"); } }} className="text-[#e63946] underline-hand font-bold">Contact Page</a>, the following details are collected:
            </p>
            <ul className="list-disc list-inside space-y-1.5 mt-2 pl-2">
              <li>Your full name</li>
              <li>Your email address</li>
              <li>Selected project service type and budget range</li>
              <li>Project description / message body</li>
            </ul>
            <div className="mt-3 p-4 bg-[#faf6ee] border-2 border-black/10 rounded-md text-base font-[Patrick_Hand]">
              <strong>Processing &amp; Delivery:</strong> Form submissions are securely transmitted over HTTPS/TLS to the <strong>Web3Forms</strong> gateway, which forwards your inquiry directly to my email address (<a href="mailto:malekfazilkhan07@gmail.com" className="text-[#e63946] font-bold">malekfazilkhan07@gmail.com</a>). Your details are never published, rented, sold, or shared with third-party advertisers.
            </div>
          </section>

          <section>
            <h2 className="font-[Permanent_Marker] text-2xl text-[#1a1a1a] mb-3">
              3. Analytics &amp; Performance Measurement
            </h2>
            <p>
              This site optionally initializes <strong>Google Analytics 4 (GA4)</strong> only when configured in the environment. GA4 collects aggregated, non-personally identifiable metrics such as:
            </p>
            <ul className="list-disc list-inside space-y-1.5 mt-2 pl-2">
              <li>Pages viewed and navigation paths</li>
              <li>Approximate geographic region (country and city level)</li>
              <li>Browser type, device category, and screen resolution</li>
              <li>Conversion actions (e.g. successful form submissions or social link clicks)</li>
            </ul>
            <p className="mt-2 text-base text-neutral-600 font-[Patrick_Hand]">
              No sensitive form content, passwords, or personal identity details are sent to analytics. You can block analytics anytime using standard browser content blockers or by enabling Do-Not-Track.
            </p>
          </section>

          <section>
            <h2 className="font-[Permanent_Marker] text-2xl text-[#1a1a1a] mb-3">
              4. Cookies and Local Storage
            </h2>
            <p>
              This portfolio does not use persistent marketing or behavioral tracking cookies. Standard first-party session cookies may be placed by Google Analytics if tracking is active. All interactive features (notebook animation, tabs, search filters) run locally in your browser memory.
            </p>
          </section>

          <section>
            <h2 className="font-[Permanent_Marker] text-2xl text-[#1a1a1a] mb-3">
              5. Hosting &amp; Technical Server Logs
            </h2>
            <p>
              This site is hosted using static hosting platforms (GitHub Pages / Vercel CDN). Like virtually all web servers, standard connection metadata (IP addresses, request timestamps, user-agent strings) is temporarily processed by the hosting edge network for technical transmission, DDoS mitigation, and network security.
            </p>
          </section>

          <section>
            <h2 className="font-[Permanent_Marker] text-2xl text-[#1a1a1a] mb-3">
              6. Data Retention &amp; User Rights
            </h2>
            <p>
              Inquiries sent to my inbox are retained only as long as necessary to communicate regarding your project or business collaboration. You have the right to request access to, correction of, or deletion of any email correspondence at any time.
            </p>
            <p className="mt-2">
              To exercise these rights, simply email <a href="mailto:malekfazilkhan07@gmail.com" className="text-[#e63946] font-bold underline-hand">malekfazilkhan07@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2 className="font-[Permanent_Marker] text-2xl text-[#1a1a1a] mb-3">
              7. Changes to this Policy
            </h2>
            <p>
              Any future updates to data handling or tooling will be documented on this page with a revised effective date.
            </p>
          </section>
        </div>

        <div className="mt-10 pt-6 border-t-2 border-dashed border-black/15 text-center font-[Patrick_Hand] text-lg flex flex-wrap justify-center gap-4">
          <a
            href="/"
            onClick={(e) => {
              if (onNavigate && !e.ctrlKey && !e.metaKey) {
                e.preventDefault();
                onNavigate("/");
              }
            }}
            className="btn-hand btn-filled text-base px-6 py-2"
          >
            Return to Home
          </a>
          <a
            href="/contact/"
            onClick={(e) => {
              if (onNavigate && !e.ctrlKey && !e.metaKey) {
                e.preventDefault();
                onNavigate("/contact/");
              }
            }}
            className="btn-hand text-base px-6 py-2"
          >
            Contact Fazil Directly
          </a>
        </div>
      </div>
    </div>
  );
}
