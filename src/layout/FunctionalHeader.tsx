// layout/FunctionalHeader.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string; // ← now optional
}

interface FunctionalHeaderProps {
  title: string;
  breadcrumb?: BreadcrumbItem[];
}

const BreadcrumbSeparator = () => (
  <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0 mx-1" />
);

export default function FunctionalHeader({
  title,
  breadcrumb = [],
}: FunctionalHeaderProps) {
  const pathname = usePathname();

  const isActive = (href?: string) => {
    if (!href) return false;
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-[#2160AD]/5 px-6 py-4">
      <div className="flex items-end justify-between min-h-[3rem]">
        <div className="flex flex-col justify-end">
          {/* ---------- BREADCRUMB ---------- */}
          {breadcrumb.length > 0 && (
            <nav aria-label="breadcrumb" className="mb-2">
              <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
                {breadcrumb.map((item, idx) => {
                  const isLast = idx === breadcrumb.length - 1;
                  const hasLink = !!item.href;

                  return (
                    <React.Fragment key={idx}>
                      {idx > 0 && (
                        <li role="presentation" aria-hidden="true">
                          <BreadcrumbSeparator />
                        </li>
                      )}
                      <li>
                        {isLast ? (
                          <span
                            className="text-[#2160AD] font-medium"
                            aria-current="page"
                          >
                            {item.label}
                          </span>
                        ) : hasLink ? (
                          <Link
                            href={item.href!}
                            className="text-gray-600 hover:text-[#2160AD] transition-colors"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <span className="text-gray-600">
                            {item.label}
                          </span>
                        )}
                      </li>
                    </React.Fragment>
                  );
                })}
              </ol>
            </nav>
          )}

          {/* ---------- PAGE TITLE ---------- */}
          <h1 className="text-[26px] font-medium leading-none text-[#2160AD]">
            {title}
          </h1>
        </div>

        <div>{/* right actions */}</div>
      </div>
    </header>
  );
}