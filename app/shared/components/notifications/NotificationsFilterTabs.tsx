"use client";

import { useTranslations, useLocale } from "next-intl";
import clsx from "clsx";

export type NotificationFilter = "all" | "priceDrops" | "stock" | "cashback" | "coupons";

interface NotificationsFilterTabsProps {
  activeFilter: NotificationFilter;
  onFilterChange: (filter: NotificationFilter) => void;
}

export const NotificationsFilterTabs = ({
  activeFilter,
  onFilterChange,
}: NotificationsFilterTabsProps) => {
  const t = useTranslations("Notifications");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const filters: { key: NotificationFilter; labelKey: string }[] = [
    { key: "all", labelKey: "filterAll" },
    { key: "priceDrops", labelKey: "filterPriceDrops" },
    { key: "stock", labelKey: "filterStock" },
    { key: "cashback", labelKey: "filterCashback" },
    { key: "coupons", labelKey: "filterCoupons" },
  ];

  return (
    <div className="bg-white dark:bg-main-casual-black border-b border-main-white-marble/60 dark:border-main-casual-black/60 px-4 sm:px-6">
      <div className={clsx("flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide py-3", isRTL && "flex-row-reverse")}>
        {filters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => onFilterChange(filter.key)}
            className={clsx(
              "px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200",
              activeFilter === filter.key
                ? "bg-main-mediterranean-green text-white shadow-md"
                : "bg-main-titanium-white dark:bg-main-black-charcoal text-main-bold-gray dark:text-main-white-marble hover:bg-main-white-marble/50"
            )}
          >
            {t(filter.labelKey)}
          </button>
        ))}
      </div>
    </div>
  );
};

