"use client";

import { ReactNode } from "react";
import { useLocale } from "next-intl";
import clsx from "clsx";

interface PrivacySectionProps {
  title: string;
  children: ReactNode;
}

export const PrivacySection = ({ title, children }: PrivacySectionProps) => {
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div className="mb-4 sm:mb-6">
      <h3
        className={clsx(
          "text-base sm:text-lg font-medium text-main-matte-black mb-3 sm:mb-4 px-1",
          isRTL && "text-right"
        )}
      >
        {title}
      </h3>
      <div>
        {children}
      </div>
    </div>
  );
};

