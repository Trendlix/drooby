"use client";

import { useTranslations, useLocale } from "next-intl";
import { ArrowLeft, Shield } from "lucide-react";
import { useRouter } from "@/i18n/routing";
import clsx from "clsx";

export const PrivacyHeader = () => {
  const t = useTranslations("Privacy");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const router = useRouter();

  return (
    <div className="relative mb-4 sm:mb-6 md:mb-8">
      <div className="relative py-4 sm:py-5 text-main-true-black">
        <button
          onClick={() => router.back()}
          className={clsx("absolute top-4 sm:top-5 z-20", isRTL ? "right-4 sm:right-6" : "left-4 sm:left-6")}
          aria-label={t("back")}
        >
          <ArrowLeft size={20} className={isRTL ? "rotate-180" : ""} />
        </button>
        <p className="font-medium text-base sm:text-lg text-center px-12">{t("title")}</p>
      </div>

      <div className="flex items-center justify-center bg-gradient-1 p-4 sm:p-6 overflow-hidden">
        <div className="flex flex-col items-center text-white">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-white/20 flex items-center justify-center mb-3 sm:mb-4">
            <Shield size={24} className="sm:w-8 sm:h-8 md:w-8 md:h-8" />
          </div>
          <h1 className="text-xl md:text-4xl font-medium py-2 sm:py-3">{t("title")}</h1>
          <p className="text-sm sm:text-base font-normal pb-2 sm:pb-3 pt-1 sm:pt-2 px-4 text-center">{t("subtitle")}</p>
        </div>
      </div>
    </div>
  );
};
