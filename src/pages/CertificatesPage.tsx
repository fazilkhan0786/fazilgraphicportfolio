/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Mohammad Fazil Firojkhan Malek
 * Dedicated Certificates & Achievements Page
 */

import { useState, useEffect } from "react";
import { analyticsActions } from "../utils/analytics";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  category: "AI & Machine Learning" | "Computer Science" | "Hackathons" | "Experience & Vol.";
  description: string;
  skills: string[];
  verifyUrl?: string;
}

const certificatesData: Certificate[] = [
  {
    id: "harvard-cs50x",
    title: "CS50x: Introduction to Computer Science",
    issuer: "Harvard University (HarvardX)",
    date: "Dec 2024",
    image: "images/CS50_Computer-Science_Certificate.png",
    category: "Computer Science",
    description: "Harvard University's flagship introduction to the intellectual enterprises of computer science and the art of programming. Covers algorithms, data structures, encapsulation, resource management, security, software engineering, and web development.",
    skills: ["C", "Python", "SQL", "HTML/CSS", "Algorithms", "Data Structures", "Memory Management"],
    verifyUrl: "https://cs50.harvard.edu/x"
  },
  {
    id: "harvard-cs50p",
    title: "CS50P: Introduction to Programming with Python",
    issuer: "Harvard University (HarvardX)",
    date: "Nov 2024",
    image: "images/CS50_Introduction-Python_Certificate.png",
    category: "Computer Science",
    description: "An intensive introduction to programming using Python. Covered writing and testing code; functions, arguments, and return values; variables and types; conditionals and loops; exceptions; libraries; unit tests; file I/O; regular expressions; and object-oriented programming.",
    skills: ["Python", "Unit Testing", "Regex", "Object-Oriented Programming (OOP)", "File I/O", "APIs"],
    verifyUrl: "https://cs50.harvard.edu/python"
  },
  {
    id: "aws-ml-academy",
    title: "AWS Academy Graduate - Machine Learning",
    issuer: "Amazon Web Services (AWS)",
    date: "Dec 2024",
    image: "images/AWS_ML_Certificate.png",
    category: "AI & Machine Learning",
    description: "In-depth academy course on the machine learning pipeline, focusing on AWS SageMaker. Hands-on learning of data engineering, exploratory data analysis, modeling (supervised and unsupervised), training, evaluation, and deploying ML models to production on cloud architecture.",
    skills: ["AWS SageMaker", "Machine Learning Pipeline", "Supervised Learning", "Model Deployment", "Cloud AI"],
    verifyUrl: "https://aws.amazon.com/training/aws-academy/"
  },
  {
    id: "aws-ai-ml-academy",
    title: "AWS Academy Graduate - Cloud Foundations / AI & ML",
    issuer: "Amazon Web Services (AWS)",
    date: "Jan 2025",
    image: "images/AWS_AI-ML_Certificate.png",
    category: "AI & Machine Learning",
    description: "Core cloud infrastructure conceptualization paired with AWS cloud AI services. Covered key services such as Amazon Rekognition, Polly, Lex, SageMaker Canvas, and foundation model deployment strategies.",
    skills: ["AWS Cloud Foundations", "AI/ML Services", "Computer Vision", "Natural Language Processing", "SageMaker Canvas"],
    verifyUrl: "https://aws.amazon.com/training/aws-academy/"
  },
  {
    id: "aws-prompt-engineering",
    title: "AWS Academy Graduate - Prompt Engineering",
    issuer: "Amazon Web Services (AWS)",
    date: "Feb 2025",
    image: "images/AWS_Prompt_Engineering_Certificate.png",
    category: "AI & Machine Learning",
    description: "Focused study on designing and optimizing prompts for Large Language Models (LLMs). Explores zero-shot, few-shot prompting, chain-of-thought methodologies, security considerations like prompt injection, and deployment using AWS Bedrock.",
    skills: ["Prompt Engineering", "Large Language Models", "Generative AI", "Claude & Bedrock", "AI Safety"],
    verifyUrl: "https://aws.amazon.com/training/aws-academy/"
  },
  {
    id: "dprofiz-internship-completion",
    title: "Software Developer & IoT Intern",
    issuer: "Dprofiz Ltd",
    date: "Nov 2023",
    image: "images/Internship_Fazil_Internship_Certificate.png",
    category: "Experience & Vol.",
    description: "Awarded for successfully completing a software engineering and IoT development internship. Led implementation of clean-tech reporting, Geo-mapping features, and gamified community reward dashboards.",
    skills: ["IoT Systems", "Flutter", "Firebase Integration", "RESTful APIs", "Git & Team Collaboration"]
  },
  {
    id: "dprofiz-offer-letter",
    title: "Dprofiz Internship Offer Letter",
    issuer: "Dprofiz Ltd",
    date: "Aug 2023",
    image: "images/Dprofiz_Fazil_Internship-Offer_Letter.png",
    category: "Experience & Vol.",
    description: "Official selection and appointment offer as a Software Developer Intern at Dprofiz Ltd. Marked the beginning of professional startup engineering collaborations.",
    skills: ["Professional Engineering", "Agile Methodologies", "Project Planning"]
  },
  {
    id: "hts25-hack-x",
    title: "Hack-x HTS25 Achievement Certificate",
    issuer: "Hack-x Hackathon Committee",
    date: "Mar 2025",
    image: "images/HTS25_Hack-x_Certificate.png",
    category: "Hackathons",
    description: "Recognition of active participation and prototype building under intense time constraints during the HTS25 Hack-x Hackathon, addressing real-world problem statements.",
    skills: ["Rapid Prototyping", "Full-Stack Development", "Team Coordination", "Hackathon"]
  },
  {
    id: "hts26-hack-x",
    title: "Hack-x HTS26 Achievement Certificate",
    issuer: "Hack-x Hackathon Committee",
    date: "Mar 2026",
    image: "images/HTS26_Hack-x_Certificate.png",
    category: "Hackathons",
    description: "Earned for pioneering software design, architectural viability, and coding execution under a 36-hour sprint at the HTS26 Hack-x Hackathon.",
    skills: ["Systems Engineering", "Pitching & Presentation", "Collaborative Coding"]
  },
  {
    id: "unplugged-26",
    title: "UNPLUGGED '26 Achievement & Hackathon",
    issuer: "Unplugged Tech Meetup & Hackathon",
    date: "Jan 2026",
    image: "images/UNPLUGGED26_Certificate.png",
    category: "Hackathons",
    description: "Awarded for designing and building outstanding interactive software architectures under severe constraints at the UNPLUGGED '26 technology sprint.",
    skills: ["Product Design", "Hardware-Software Interface", "Innovative Thinking"]
  },
  {
    id: "programming-relay-gtu",
    title: "Programming Relay Winner / Competitor",
    issuer: "GTU Computer Engineering Department",
    date: "Sep 2024",
    image: "images/Programming_Relay.png",
    category: "Computer Science",
    description: "Earned during the GTU Departmental Tech Fest for rapid-fire algorithmic problem solving, passing complex competitive programming challenges in a team-relay format.",
    skills: ["Competitive Programming", "C++", "Data Structures", "Speed Coding"]
  },
  {
    id: "ssip-startup-awareness",
    title: "SSIP Innovation & Start-up Awareness",
    issuer: "Student Start-up & Innovation Policy (SSIP), Gov. of Gujarat",
    date: "Oct 2024",
    image: "images/SSIP_Awareness_Certificate.png",
    category: "Experience & Vol.",
    description: "Certified awareness of Gujarat's Student Start-up & Innovation Policy. Covers intellectual property rights (IPR), government incubation programs, and venture funding criteria.",
    skills: ["Entrepreneurship", "Incubation Pipelines", "Intellectual Property & Patents"]
  },
  {
    id: "pitchcraft-volunteering",
    title: "PitchCraft Volunteering & Startup Engagement",
    issuer: "PitchCraft Startup Hub",
    date: "Feb 2025",
    image: "images/PitchCraft_Volunteering_Certificate.png",
    category: "Experience & Vol.",
    description: "Volunteered and collaborated with early-stage founders to support pitch deck designs, UI/UX conceptualizations, and tech architecture mapping during the regional startup meetup.",
    skills: ["Volunteering", "Startup Pitching", "UI/UX Feedback", "Ecosystem Collaboration"]
  }
];

export default function CertificatesPage() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("All");

  const categories = ["All", "AI & Machine Learning", "Computer Science", "Hackathons", "Experience & Vol."];

  // Alternating rotation classes to give Polaroid items a natural scrapbook look
  const getRotation = (index: number) => {
    const rots = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-1.5", "rotate-1.5"];
    return rots[index % rots.length];
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const selectors = ".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-rotate, .stagger, .stagger-children, .draw-line";
      const els = document.querySelectorAll(selectors);
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("visible");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    }, 100);
    return () => clearTimeout(timer);
  }, [filterCategory]);

  const filteredCerts = filterCategory === "All"
    ? certificatesData
    : certificatesData.filter((c) => c.category === filterCategory);

  const openCert = (cert: Certificate) => {
    setSelectedCert(cert);

    analyticsActions.trackArticleRead(cert.id, cert.title);
  };

  return (
    <div className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="reveal text-center mb-12">
        <span className="font-[Patrick_Hand] text-lg text-[#e63946] block mb-2">// CREDENTIALS &amp; HONORS</span>
        <h1 className="font-[Caveat] font-bold text-6xl md:text-8xl leading-none">
          my <span className="text-[#e63946]">certificates</span>
        </h1>
        <p className="font-[Kalam] text-xl text-neutral-600 max-w-2xl mx-auto mt-4 leading-relaxed">
          a curation of my academic certifications, technical training, hackathon sprints, and professional milestones.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="reveal flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className={`tag-pill !text-base !px-5 !py-2 transition-all cursor-pointer ${
              filterCategory === cat
                ? "!bg-[#1a1a1a] !text-white"
                : "!bg-[#fffef7] text-black hover:!bg-amber-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Polaroid Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-14 px-2">
        {filteredCerts.map((cert, index) => {
          const rotationClass = getRotation(index);
          return (
            <div
              key={cert.id}
              className="reveal flex justify-center"
              style={{ transitionDelay: `${(index % 3) * 80}ms` }}
            >
              <div className="photo-wrap cursor-pointer" onClick={() => openCert(cert)}>
                {/* Polaroid Frame */}
                <div
                  className={`photo-frame w-[290px] sm:w-[320px] md:w-[340px] transform ${rotationClass} transition-all duration-300 hover:rotate-0 hover:scale-102`}
                >
                  {/* Adhesive tape at the top center */}
                  <div className="tape absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-6 rotate-[-1deg]" />

                  {/* Certificate Image Preview */}
                  <div className="relative overflow-hidden border border-black/10 rounded bg-neutral-100">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full aspect-[4/3] object-cover"
                      loading="lazy"
                    />
                    <div className="photo-inner-border" />
                  </div>

                  {/* Title & Caption */}
                  <div className="pt-4 pb-2 px-1 text-center">
                    <h3 className="font-[Permanent_Marker] text-lg text-neutral-900 leading-tight truncate">
                      {cert.title}
                    </h3>
                    <p className="font-[Patrick_Hand] text-sm text-neutral-500 mt-1">
                      {cert.issuer}
                    </p>
                    <p className="font-[Kalam] text-xs text-[#e63946] mt-1 font-bold">
                      {cert.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredCerts.length === 0 && (
        <div className="reveal text-center py-20 bg-[#fffef7] border-2 border-dashed border-black/25 rounded-lg">
          <p className="font-[Kalam] text-xl text-neutral-500">No certificates found in this category.</p>
        </div>
      )}

      {/* Detail Overlay Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-[1000] bg-[#18130e]/80 flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-[#fffdf5] border-[2.5px] border-black max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 rounded-lg relative shadow-[12px_16px_0_rgba(0,0,0,0.3)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="tape absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-6 rotate-[-1deg]" />
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 w-9 h-9 border-2 border-black rounded-full bg-[#fff9b0] font-bold text-lg flex items-center justify-center hover:bg-[#e63946] hover:text-white transition-colors cursor-pointer z-10"
              aria-label="Close details"
            >
              ✕
            </button>

            {/* Modal Content */}
            <div className="grid md:grid-cols-12 gap-6 md:gap-8 pt-4">
              {/* Full Image Preview */}
              <div className="md:col-span-7 flex flex-col justify-center">
                <div className="relative border-2 border-black rounded-lg overflow-hidden bg-neutral-100 shadow-md">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-auto object-contain max-h-[50vh]"
                  />
                </div>
                <p className="font-[Architects_Daughter] text-xs text-neutral-400 text-center mt-3">
                  Click outer overlay or ✕ to go back.
                </p>
              </div>

              {/* Details Side Panel */}
              <div className="md:col-span-5 flex flex-col justify-between">
                <div>
                  <span className="bg-[#e63946] text-white text-xs px-2.5 py-1 rounded font-bold uppercase tracking-wider inline-block mb-3">
                    {selectedCert.category}
                  </span>

                  <h2 className="font-[Permanent_Marker] text-2xl md:text-3xl leading-tight text-neutral-900 mb-2">
                    {selectedCert.title}
                  </h2>

                  <div className="font-[Patrick_Hand] text-base text-neutral-600 space-y-1 mb-4">
                    <p><strong>Issuer:</strong> {selectedCert.issuer}</p>
                    <p><strong>Granted:</strong> {selectedCert.date}</p>
                  </div>

                  <hr className="border-black/10 my-4" />

                  <h4 className="font-[Permanent_Marker] text-sm text-[#e63946] mb-1.5 uppercase">About the credential</h4>
                  <p className="font-[Kalam] text-base text-neutral-700 leading-snug mb-5">
                    {selectedCert.description}
                  </p>

                  <h4 className="font-[Permanent_Marker] text-sm text-[#e63946] mb-2 uppercase">Skills Acquired</h4>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {selectedCert.skills.map((skill) => (
                      <span key={skill} className="tag-pill !text-xs !bg-amber-50/50 !py-0.5 !px-2">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedCert.verifyUrl && (
                  <div className="mt-4 pt-4 border-t border-black/10">
                    <a
                      href={selectedCert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-hand btn-filled w-full text-center block text-lg font-bold"
                    >
                      verify credential ↗
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
