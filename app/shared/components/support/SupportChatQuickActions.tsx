"use client";

import { useTranslations, useLocale } from "next-intl";
import clsx from "clsx";

interface QuickAction {
  key: string;
  onClick?: () => void;
}

interface SupportChatQuickActionsProps {
  actions: QuickAction[];
  onActionClick?: (actionKey: string) => void;
}

export const SupportChatQuickActions = ({
  actions,
  onActionClick,
}: SupportChatQuickActionsProps) => {
  const t = useTranslations("SupportChat");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const handleClick = (actionKey: string) => {
    if (onActionClick) {
      onActionClick(actionKey);
    }
  };

  return (
    <div className={clsx("mb-6 ")}>
      <h3 className="text-sm font-medium text-main-mediterranean-green md:text-main-bold-gray mb-3 sm:mb-4 text-center">
        {t("quickActions")}:
      </h3>
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {actions.map((action) => (
          <button
            key={action.key}
            onClick={() => handleClick(action.key)}
            className={clsx(
              "px-1 sm:px-4 py-2 sm:py-3 rounded-xl text-xs md:text-sm font-medium text-center md:text-left",
              "bg-[#F4F4F4] md:bg-white dark:bg-main-black-charcoal",
              "border border-main-white-marble",
              "text-main-bold-gray md:text-main-true-black dark:text-main-white-marble",
         
            )}
          >
            {t(`quickAction${action.key.charAt(0).toUpperCase() + action.key.slice(1)}`)}
          </button>
        ))}
      </div>
    </div>
  );
};

