"use client";

import { LucideIcon } from "lucide-react";
import clsx from "clsx";

interface HelpCenterCategoryCardProps {
  icon: LucideIcon;
  title: string;
  color: string;
}

export const HelpCenterCategoryCard = ({
  icon: Icon,
  title,
  color,
}: HelpCenterCategoryCardProps) => {
  return (
    <div className="bg-white dark:bg-main-black-charcoal rounded-2xl p-3 sm:p-4 border border-main-white-marble/60 cursor-pointer hover:shadow-md transition-shadow duration-200">
      <div className="flex flex-col items-center text-center">
        <div
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-2 sm:mb-3"
          style={{ background: `${color}` }}
        >
          <Icon size={20} className="text-white" />
        </div>
        <h3
          className={clsx(
            "text-sm font-medium text-main-matte-black dark:text-main-white-marble"
          )}
        >
          {title}
        </h3>
      </div>
    </div>
  );
};

