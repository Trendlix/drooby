"use client";

import { useTranslations, useLocale } from "next-intl";
import { ArrowLeft, Settings, Eye } from "lucide-react";
import { useRouter } from "@/i18n/routing";
import clsx from "clsx";

interface NotificationsHeaderProps {
  unreadCount: number;
  onMarkAllAsRead: () => void;
  onSettingsClick: () => void;
}

export const NotificationsHeader = ({
  unreadCount,
  onMarkAllAsRead,
  onSettingsClick,
}: NotificationsHeaderProps) => {
  const t = useTranslations("Notifications");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const router = useRouter();

  return (
    <div className="bg-white dark:bg-main-casual-black dark:border-main-casual-black/60">
      <div className="px-4 sm:px-6 py-1">
        <div className="flex items-center justify-between ">
          <button
            onClick={() => router.back()}
            className={clsx(
              "p-2 rounded-lg transition-colors",
              isRTL && "order-3"
            )}
            aria-label={t("back")}
          >
            <ArrowLeft size={20} className={isRTL ? "rotate-180" : ""} />
          </button>

          <div className={clsx("flex-1", isRTL ? "text-right" : "text-left")}>
            <div
              className={clsx(
                "flex items-center gap-2 justify-center",
                isRTL && "flex-row-reverse"
              )}
            >
              <p className="text-sm font-normal text-main-true-black dark:text-main-white">
                {t("title")}
              </p>
        
            </div>
            {unreadCount > 0 && (
              <p className="text-xs text-main-bold-gray dark:text-main-white-marble mt-1 text-center">
                {unreadCount} {t("unread")}
              </p>
            )}
          </div>

          <button
            onClick={onSettingsClick}
            className={clsx(
              "p-2 hover:bg-main-titanium-white dark:hover:bg-main-black-charcoal rounded-lg transition-colors",
              isRTL && "order-1"
            )}
            aria-label={t("settings")}
          >
            <Settings
              size={20}
              className="text-main-bold-gray dark:text-main-white-marble"
            />
          </button>
        </div>

       
      </div>
    </div>
  );
};
