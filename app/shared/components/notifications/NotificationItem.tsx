"use client";

import { useTranslations, useLocale } from "next-intl";
import clsx from "clsx";
import { LucideIcon } from "lucide-react";

export interface INotification {
  id: string;
  type: "priceDrop" | "stock" | "cashback" | "coupon";
  title: string;
  description: string;
  timestamp: string;
  isRead: boolean;
  icon: LucideIcon;
  iconColor: string;
  priceInfo?: {
    currentPrice: string;
    oldPrice?: string;
  };
  store?: string;
  code?: string;
}

interface NotificationItemProps {
  notification: INotification;
  onClick?: () => void;
}

export const NotificationItem = ({ notification, onClick }: NotificationItemProps) => {
  const t = useTranslations("Notifications");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const Icon = notification.icon;

  return (
    <div
      onClick={onClick}
      className={clsx(
        "bg-white dark:bg-main-casual-black mb-1 rounded-xl p-4 sm:p-5 cursor-pointer transition-colors",
        !notification.isRead
          ? "border border-main-mediterranean-green border-l-4 dark:bg-main-mediterranean-green/10"
          : "border border-main-white-marble/60 dark:border-main-casual-black/60"
      )}
    >
      <div className={clsx("flex gap-4", isRTL && "flex-row-reverse")}>
        {/* Icon */}
        <div
          className=" w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center"
          style={{ backgroundColor: `${notification.iconColor}15` }}
        >
          <Icon
            size={24}
            className="sm:w-7 sm:h-7"
            style={{ color: notification.iconColor }}
          />
        </div>

        {/* Content */}
        <div className={clsx("flex-1 min-w-0 relative", isRTL ? "text-right" : "text-left")}>
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <h3 className="text-base sm:text-lg font-semibold text-main-title-gray dark:text-main-white mb-1">
                {notification.title}
              </h3>
              <p className="text-sm text-main-bold-gray dark:text-main-white-marble mb-2">
                {notification.description}
              </p>

              {/* Price Info */}
              {notification.priceInfo && (
                <div className={clsx("flex items-center gap-2 mb-2", isRTL && "flex-row-reverse")}>
                  <span className="text-base sm:text-lg font-semibold text-main-mediterranean-green">
                    {notification.priceInfo.currentPrice}
                  </span>
                  {notification.priceInfo.oldPrice && (
                    <span className="text-sm text-main-bold-gray line-through">
                      {notification.priceInfo.oldPrice}
                    </span>
                  )}
                </div>
              )}

              {/* Store or Code */}
              {notification.store && (
                <p className="text-xs text-main-bold-gray dark:text-main-white-marble mb-1">
                  {t("atStore")} {notification.store}
                </p>
              )}
              {notification.code && (
                <p className="text-xs text-main-bold-gray dark:text-main-white-marble mb-1">
                  {t("code")}: {notification.code}
                </p>
              )}

              <p className="text-xs text-main-bold-gray dark:text-main-white-marble">
                {notification.timestamp}
              </p>
            </div>
          </div>
          
          {/* Unread Indicator - positioned on the right side */}
          {!notification.isRead && (
            <div
              className={clsx(
                "absolute top-0 w-2.5 h-2.5 rounded-full bg-main-mediterranean-green",
                isRTL ? "left-0" : "right-0"
              )}
            />
          )}
        </div>
      </div>
    </div>
  );
};

