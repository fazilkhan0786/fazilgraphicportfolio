/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Fazil Malek
 * Semantic, Accessible Breadcrumbs matching paper notebook theme
 */

import React from "react";
import { BreadcrumbItem } from "../routes";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  onNavigate?: (path: string) => void;
}

export default function Breadcrumbs({ items, className = "", onNavigate }: BreadcrumbsProps) {
  if (!items || items.length <= 1) return null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (onNavigate && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <nav
      aria-label="Breadcrumbs"
      className={`font-mono text-xs font-bold text-[#6b635b] flex items-center flex-wrap gap-1.5 ${className}`}
    >
      <ol className="flex items-center flex-wrap gap-1.5 list-none p-0 m-0">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {index > 0 && <span className="text-[#1a1a1a]/40 select-none">/</span>}
              {isLast ? (
                <span
                  className="bg-[#ffd93d] text-[#1a1a1a] border border-[#1a1a1a] px-2 py-0.5 rounded shadow-[1px_1px_0px_#1a1a1a] truncate max-w-[240px] sm:max-w-md inline-block"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.path}
                  onClick={(e) => handleClick(e, item.path)}
                  className="text-[#1a1a1a] hover:text-[#e63946] hover:underline transition-colors"
                >
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
