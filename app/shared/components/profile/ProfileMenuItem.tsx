"use client";

import { LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import clsx from "clsx";

interface ProfileMenuItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick?: () => void;
  href?: string;
}

export const ProfileMenuItem = ({
  icon: Icon,
  title,
  description,
  onClick,
  href,
}: ProfileMenuItemProps) => {
  const locale = useLocale();
  const isRTL = locale === "ar";

  const content = (
    <>
      <div className="flex items-center gap-4 flex-1">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-main-titanium-white text-main-bold-gray">
          <Icon size={20} />
        </div>
        <div className={clsx("flex-1", isRTL ? "text-right" : "text-left")}>
          <h3 className="text-base font- text-main-title-gray dark:text-main-white mb-2">
            {title}
          </h3>
          <p className="text-sm text-main-bold-gray dark:text-main-white-marble">
            {description}
          </p>
        </div>
      </div>
      <ChevronRight
        size={20}
        className={clsx(
          "text-main-bold-gray dark:text-main-white-marble transition-transform",
          isRTL && "rotate-180"
        )}
      />
    </>
  );

  const className = clsx(
    "flex items-center justify-between w-full p-4",
    "bg-main-white dark:bg-main-black-charcoal",
    "border-b border-main-white-marble dark:border-main-casual-black",
    "transition-colors duration-200 cursor-pointer",
  
  );

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {content}
    </button>
  );
};
