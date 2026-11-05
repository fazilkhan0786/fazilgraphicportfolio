/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Mohammad Fazil Firojkhan Malek
 * Project Details Retro Window Modal (project_details.exe)
 * Faithfully matches retro window system with comprehensive architecture breakdown
 */

import React, { useEffect, useCallback } from "react";
import { ProjectIconDispatcher } from "./RetroProjectsVisuals";

export interface ProjectDetailItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  status: string;
  description: string;
  problem: string;
  solution: string;
  impactMetrics: string[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectDetailsModalProps {
  project: ProjectDetailItem | null;
  onClose: () => void;
  onNavigateContact?: () => void;
}

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  project,
  onClose,
  onNavigateContact
}) => {
  // Handle keyboard Escape
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!project) return;

    // Lock body scroll
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, handleKeyDown]);

  if (!project) return null;

  const handleContactClick = () => {
    onClose();
    if (onNavigateContact) {
      onNavigateContact();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-[#18130e]/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="w-full max-w-3xl max-h-[92vh] flex flex-col bg-[#fbf8ef] border-[2.5px] border-[#1a1a1a] rounded-2xl shadow-[12px_12px_0px_#7c3aed] overflow-hidden select-text animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Retro Window Title Bar */}
        <div className="bg-[#ffd93d] border-b-[2.5px] border-[#1a1a1a] px-3.5 py-2.5 sm:px-5 sm:py-3 flex items-center justify-between select-none shrink-0">
          <div className="flex items-center gap-2">
            {/* Terminal control dots */}
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-3 h-3 rounded-full bg-[#ef4444] border border-[#1a1a1a]" />
              <span className="w-3 h-3 rounded-full bg-[#f59e0b] border border-[#1a1a1a]" />
              <span className="w-3 h-3 rounded-full bg-[#10b981] border border-[#1a1a1a]" />
            </div>
            <span className="font-mono font-bold text-xs sm:text-sm text-[#1a1a1a] ml-2 truncate max-w-[220px] sm:max-w-md">
              // PROJECT_DETAILS.EXE — {project.name.toUpperCase()}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline font-mono text-xs font-semibold text-[#1a1a1a]/70">
              ESC to close
            </span>
            <button
              onClick={onClose}
              className="w-7 h-7 sm:w-8 sm:h-8 bg-white border-2 border-[#1a1a1a] rounded-md shadow-[2px_2px_0px_#1a1a1a] flex items-center justify-center font-mono font-bold text-sm text-[#1a1a1a] hover:bg-[#ef4444] hover:text-white transition-colors cursor-pointer"
              aria-label="Close project modal"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-6">
          {/* Header row with project icon, title, and status */}
          <div className="flex items-start justify-between gap-4 border-b-2 border-[#1a1a1a]/15 pb-5">
            <div className="flex items-start gap-3.5">
              <ProjectIconDispatcher projectId={project.id} className="w-12 h-12 shrink-0" />
              <div>
                <h2
                  id="project-modal-title"
                  className="font-display font-black text-2xl sm:text-3xl text-[#1a1a1a] leading-tight"
                >
                  {project.name}
                </h2>
                <p className="font-mono text-xs font-bold text-[#e63946] mt-0.5">
                  {project.tagline}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-1.5 shrink-0">
              <span className="font-mono text-xs font-bold text-[#1a1a1a] bg-[#ffd93d] border border-[#1a1a1a] px-2.5 py-0.5 rounded shadow-[1px_1px_0px_#1a1a1a]">
                {project.category}
              </span>
              <span className="font-mono text-[11px] font-bold text-[#1a1a1a] bg-white border border-[#1a1a1a] px-2 py-0.5 rounded">
                ● {project.status}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-mono text-xs font-bold text-[#6b635b] uppercase mb-1">
              // Overview
            </h3>
            <p className="font-body text-sm sm:text-base text-[#1a1a1a] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Engineering Challenge & Solution Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#fee2e2] border-2 border-[#1a1a1a] rounded-xl p-4 shadow-[3px_3px_0px_#1a1a1a]">
              <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-[#b91c1c] uppercase mb-1.5">
                <span>⚠️</span>
                <span>The Challenge</span>
              </div>
              <p className="font-body text-xs sm:text-sm text-[#3e3832] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="bg-[#dcfce7] border-2 border-[#1a1a1a] rounded-xl p-4 shadow-[3px_3px_0px_#1a1a1a]">
              <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-[#15803d] uppercase mb-1.5">
                <span>⚡</span>
                <span>Engineering Solution</span>
              </div>
              <p className="font-body text-xs sm:text-sm text-[#3e3832] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Impact & Key Metrics */}
          {project.impactMetrics && project.impactMetrics.length > 0 && (
            <div className="bg-white border-2 border-[#1a1a1a] rounded-xl p-4 sm:p-5 shadow-[4px_4px_0px_#1a1a1a]">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 bg-[#ffd93d] border border-[#1a1a1a] rounded-xs" />
                <h3 className="font-display font-black text-sm sm:text-base text-[#1a1a1a] uppercase tracking-wide">
                  Verified Impact &amp; Architecture Highlights
                </h3>
              </div>
              <ul className="space-y-2">
                {project.impactMetrics.map((metric, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 font-body text-xs sm:text-sm text-[#3e3832]">
                    <span className="text-[#059669] font-bold text-base leading-none">✓</span>
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Badges */}
          <div>
            <h3 className="font-mono text-xs font-bold text-[#6b635b] uppercase mb-2">
              // Technologies &amp; Architecture Stack
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((st) => (
                <span
                  key={st}
                  className="bg-white border border-[#1a1a1a] font-mono text-xs text-[#1a1a1a] font-semibold px-2.5 py-1 rounded-md shadow-[1px_1px_0px_#1a1a1a]"
                >
                  {st}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Action Controls */}
          <div className="pt-4 border-t-2 border-[#1a1a1a]/15 flex flex-wrap items-center justify-between gap-3 select-none">
            <div className="flex flex-wrap items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1a1a1a] text-white border-2 border-[#1a1a1a] rounded-lg shadow-[2px_2px_0px_#ffd93d] px-3.5 py-2 font-mono font-bold text-xs hover:bg-[#333] transition-colors inline-flex items-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>GitHub Repository ↗</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ffd93d] text-[#1a1a1a] border-2 border-[#1a1a1a] rounded-lg shadow-[2px_2px_0px_#1a1a1a] px-3.5 py-2 font-mono font-bold text-xs hover:bg-[#fde047] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Live Project Demo ↗</span>
                </a>
              )}
            </div>

            <button
              onClick={handleContactClick}
              className="btn-retro-primary !text-xs !py-2 !px-4"
            >
              Build similar system →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
