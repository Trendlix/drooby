"use client";

import { MessageCircle, Mail, Phone } from "lucide-react";
import { useLocale } from "next-intl";
import clsx from "clsx";

interface HelpCenterContactCardProps {
  icon: string;
  title: string;
  description: string;
  action: string;
  color: string;
  actionUrl?: string;
}

const iconMap = {
  MessageCircle,
  Mail,
  Phone,
};

export const HelpCenterContactCard = ({
  icon,
  title,
  description,
  action,
  color,
  actionUrl,
}: HelpCenterContactCardProps) => {
  const locale = useLocale();
  const isRTL = locale === "ar";
  const IconComponent = iconMap[icon as keyof typeof iconMap] || MessageCircle;

  const handleClick = () => {
    if (actionUrl) {
      if (icon === "Mail") {
        window.location.href = `mailto:${actionUrl}`;
      } else if (icon === "Phone") {
        window.location.href = `tel:${actionUrl}`;
      } else {
        // For Live Chat, you can add your chat widget trigger here
        console.log("Open live chat");
      }
    }
  };

  return (
    <div className="bg-white dark:bg-main-black-charcoal rounded-2xl p-4 sm:p-5 border border-main-white-marble/60">
      <div className="flex flex-col items-center text-center">
        <div
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-3 sm:mb-4"
          style={{ background: `${color}` }}
        >
          <IconComponent size={24} className="text-white" />
        </div>
        <h3
          className={clsx(
            "text-base sm:text-lg font-medium text-main-section-title-gray dark:text-main-white-marble mb-2",
            isRTL && "text-right"
          )}
        >
          {title}
        </h3>
        <p
          className={clsx(
            "text-xs sm:text-sm text-main-bold-gray dark:text-main-white-marble mb-4",
            isRTL && "text-right"
          )}
        >
          {description}
        </p>
        <button
          onClick={handleClick}
          className={clsx(
            "w-full bg-gradient-1 text-white rounded-3xl py-2 sm:py-3 px-4 font-medium text-sm sm:text-base hover:opacity-90 transition-opacity duration-200",
            isRTL && "text-right"
          )}
        >
          {action}
        </button>
      </div>
    </div>
  );
};

