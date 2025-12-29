"use client";

import { ReactNode } from "react";
import { useLocale } from "next-intl";
import clsx from "clsx";

interface ProfileSectionProps {
  title: string;
  children: ReactNode;
}

export const ProfileSection = ({ title, children }: ProfileSectionProps) => {
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div className="mb-6">
      <h3
        className={clsx(
          "text-lg font-medium text-main-section-title-gray mb-4 px-1",
          isRTL && "text-right"
        )}
      >
        {title}
      </h3>
      <div className="space-y-2 border border-main-titanium-white rounded-2xl ">{children}</div>
    </div>
  );
};
