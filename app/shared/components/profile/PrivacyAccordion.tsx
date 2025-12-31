"use client";

import { useState, ReactNode } from "react";
import { LucideIcon, ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";
import clsx from "clsx";

interface PrivacyAccordionProps {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}

export const PrivacyAccordion = ({
  icon: Icon,
  title,
  children,
}: PrivacyAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div  className="border border-main-white-marble/60 dark:bg-main-black-charcoal bg-main-white/80 rounded-2xl mb-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "flex items-center justify-between w-full p-3 sm:p-4",
          "transition-colors duration-200 cursor-pointer",
        )}
      >
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1 min-w-0">
          <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-1 text-white shrink-0">
            <Icon size={18} className="sm:w-5 sm:h-5" />
          </div>
          <h3
            className={clsx(
              "text-sm sm:text-base font-medium text-main-title-gray dark:text-main-white truncate sm:truncate-none",
              isRTL ? "text-right" : "text-left"
            )}
          >
            {title}
          </h3>
        </div>
        <ChevronDown
          size={18}
          className={clsx(
            "text-main-bold-gray dark:text-main-white-marble transition-transform duration-200 shrink-0 ml-2",
            isOpen && "rotate-180",
            isRTL && "rotate-180",
            isOpen && isRTL && "rotate-0"
          )}
        />
      </button>
      {isOpen && (
        <div
          className={clsx(
            "px-3 sm:px-4 pb-3 sm:pb-4",
            isRTL ? "text-right pr-0 sm:pr-8 md:pr-16" : "text-left pl-0 sm:pl-8 md:pl-16"
          )}
        >
          <div className="text-sm text-main-bold-gray dark:text-main-white-marble leading-relaxed">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

