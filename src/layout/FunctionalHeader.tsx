'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface FunctionalHeaderProps {
  title: string;
  breadcrumb?: BreadcrumbItem[];
}

const BreadcrumbItem = ({
  children,
  href,
  isLast,
}: {
  children: React.ReactNode;
  href: string;
  isLast: boolean;
}) => {
  if (isLast) {
    return (
      <span className="text-[#2160AD] font-medium" aria-current="page">
        {children}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className="text-gray-600 hover:text-[#2160AD] transition-colors text-sm"
    >
      {children}
    </Link>
  );
};

const BreadcrumbSeparator = () => (
  <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
);

export default function FunctionalHeader({
  title,
  breadcrumb = [],
}: FunctionalHeaderProps) {
  const pathname = usePathname();

  // Determine which breadcrumb is active based on current path
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-[#2160AD]/5 px-6 py-4">
      <div className="flex items-end justify-between min-h-[3rem]">
        <div className="flex flex-col justify-end">
          {/* Breadcrumb */}
          {breadcrumb.length > 0 && (
            <nav aria-label="breadcrumb" className="mb-2">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                {breadcrumb.map((item, index) => {
                  const isLast = index === breadcrumb.length - 1;
                  const active = isLast || isActive(item.href);

                  return (
                    <React.Fragment key={index}>
                      {index > 0 && (
                        <li role="presentation" aria-hidden="true">
                          <BreadcrumbSeparator />
                        </li>
                      )}
                      <li>
                        <BreadcrumbItem
                          href={item.href}
                          isLast={isLast}
                        >
                          {item.label}
                        </BreadcrumbItem>
                      </li>
                    </React.Fragment>
                  );
                })}
              </ol>
            </nav>
          )}

          {/* Page Title */}
          <h1 className="text-[26px] font-medium leading-none text-[#2160AD]">
            {title}
          </h1>
        </div>

        {/* Optional: Right-side actions */}
        <div>{/* Add buttons, filters, etc. here */}</div>
      </div>
    </header>
  );
}