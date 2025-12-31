"use client";
import { CircleCheckBig , LucideIcon } from "lucide-react";
import { useLocale } from "next-intl";
import clsx from "clsx";

interface PrivacyListProps {
  icon: LucideIcon;
  title: string;
  items: string[];
}

export const PrivacyList = ({ icon: Icon, title, items }: PrivacyListProps) => {
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div className="bg-main-white dark:bg-main-black-charcoal rounded-2xl mb-4 sm:mb-5 dark:border-main-casual-black p-3 sm:p-4">
       <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1 mb-3 sm:mb-4">
          <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-1 text-white shrink-0">
            <Icon size={18} className="sm:w-5 sm:h-5" />
          </div>
          <h3
            className={clsx(
              "text-sm sm:text-base font-medium text-main-title-gray dark:text-main-white",
              isRTL ? "text-right" : "text-left"
            )}
          >
            {title}
          </h3>
        </div>
      <ul
        className={clsx(
          "space-y-2 sm:space-y-3",
          isRTL ? "text-right pr-0 sm:pr-8 md:pr-16" : "text-left pl-0 sm:pl-8 md:pl-16"
        )}
      >
        {items.map((item, index) => (
          <li
            key={index}
            className={clsx(
              "text-sm text-main-bold-gray dark:text-main-white-marble leading-relaxed flex items-start gap-2",
              isRTL ? "flex-row-reverse" : "flex-row"
            )}
          >
            <CircleCheckBig className="text-main-mediterranean-green shrink-0" size={18} />
            <span className="text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

