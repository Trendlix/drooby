"use client";

import { useTranslations, useLocale } from "next-intl";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "@/i18n/routing";
import clsx from "clsx";

export const SupportChatHeader = () => {
  const t = useTranslations("SupportChat");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const router = useRouter();

  return (
    <div className="bg-white dark:bg-main-black-charcoal border-b border-main-white-marble/60">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        <button
          onClick={() => router.back()}
          className={clsx(
            "flex items-center justify-center w-10 h-10 rounded-full hover:bg-main-titanium-white dark:hover:bg-main-black-charcoal transition-colors",
            isRTL && "order-3"
          )}
          aria-label={t("back")}
        >
          <ArrowLeft size={20} className={isRTL ? "rotate-180" : ""} />
        </button>

        <div className="flex-1 flex flex-col items-center text-center px-4">
          <h1
            className={clsx(
              "text-base sm:text-lg font-medium text-main-matte-black dark:text-main-white-marble",
              isRTL && "text-right"
            )}
          >
            {t("title")}
          </h1>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-2 h-2 rounded-full bg-main-bright-emerald-green"></div>
            <span className="text-xs sm:text-sm text-main-bold-gray dark:text-main-white-marble">
              {t("agentName")} - {t("online")}
            </span>
          </div>
        </div>

        <div className={clsx("text-sm text-main-mediterranean-green font-medium", isRTL && "order-1")}>
          {locale === "ar" ? "English" : "العربية"}
        </div>
      </div>
    </div>
  );
};

