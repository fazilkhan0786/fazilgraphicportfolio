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
      className={`font-[Patrick_Hand] text-sm md:text-base text-neutral-500 mb-6 flex items-center flex-wrap gap-1.5 ${className}`}
    >
      <ol className="flex items-center flex-wrap gap-1.5 list-none p-0 m-0">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {index > 0 && <span className="text-neutral-400 select-none">/</span>}
              {isLast ? (
                <span
                  className="text-[#e63946] font-bold truncate max-w-[240px] sm:max-w-md inline-block"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.path}
                  onClick={(e) => handleClick(e, item.path)}
                  className="hover:text-[#e63946] underline-hand transition-colors"
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
