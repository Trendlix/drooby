"use client";

import { useTranslations, useLocale } from "next-intl";
import { Lightbulb } from "lucide-react";
import clsx from "clsx";

export const SupportChatInfoBanner = () => {
  const t = useTranslations("SupportChat");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div
      className={clsx(
        "bg-[#EBFFFF] dark:bg-main-mediterranean-green/20 rounded-xl p-3 sm:p-4 mb-4 mx-4",
        "flex items-start justify-center gap-2 sm:gap-3 border border-main-mediterranean-green "
      )}
    >
      <Lightbulb
        size={20}
        className="text-main-mediterranean-green shrink-0 mt-0.5"
      />
      <p
        className={clsx(
          "text-xs sm:text-sm text-main-bold-gray dark:text-main-white-marble leading-relaxed",
          isRTL && "text-right"
        )}
      >
        {t("infoBanner")}
      </p>
    </div>
  );
};
