"use client";

import { useTranslations, useLocale } from "next-intl";
import { ArrowLeft, Book , Search } from "lucide-react";
import { useRouter } from "@/i18n/routing";
import clsx from "clsx";
import { useState } from "react";

export const HelpCenterHeader = () => {
  const t = useTranslations("HelpCenter");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative mb-4 sm:mb-6 md:mb-8">
      <div className="relative py-4 sm:py-5 text-main-true-black">
        <button
          onClick={() => router.back()}
          className={clsx(
            "absolute top-4 sm:top-5 z-20",
            isRTL ? "right-4 sm:right-6" : "left-4 sm:left-6"
          )}
          aria-label={t("back")}
        >
          <ArrowLeft size={20} className={isRTL ? "rotate-180" : ""} />
        </button>
        <p
          className={clsx(
            "font-medium text-base sm:text-lg text-center px-12",
            isRTL && "text-right"
          )}
        >
          {t("title")}
        </p>
      </div>

      <div className="relative bg-gradient-1 p-4 sm:p-6 md:p-8 overflow-hidden">
        <div className="flex flex-col items-center text-white">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-white/20 flex items-center justify-center mb-3 sm:mb-4">
            <Book  size={24} className="sm:w-8 sm:h-8 md:w-8 md:h-8" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium py-2 sm:py-3 text-center">
            {t("title")}
          </h1>
          <p className="text-sm sm:text-base font-light pb-4 sm:pb-6 pt-1 sm:pt-2 px-4 text-center">
            {t("subtitle")}
          </p>
          <div className="w-full max-w-2xl relative ">
            <Search
              size={20}
              className={clsx(
                "absolute top-1/2 transform -translate-y-1/2 text-main-bold-gray",
                isRTL ? "right-55" : "left-55"
              )}
            />
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={clsx(
                "w-full bg-white text-center rounded-xl px-4 py-3 pl-11 pr-11 text-main-bold-gray placeholder-main-bold-gray focus:outline-none focus:ring-2 focus:ring-white/50",
                isRTL && "text-right pr-11 pl-11"
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

