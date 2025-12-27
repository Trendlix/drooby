"use client";

import { Mail, Globe } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import clsx from "clsx";
import { IconWithTitle } from "./iconWithTitle";

export const PrivacyContactBox = () => {
  const t = useTranslations("Privacy");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div
      className={clsx(
        "bg-[#3A9A991A] dark:bg-main-casual-black rounded-2xl p-4 sm:p-5 md:p-6",
        "border border-main-white-marble dark:border-main-casual-black"
      )}
    >
        <IconWithTitle
                Icon={Mail}
                title={t("questionsTitle")}
                BgColor="#2D7A79" 
              />
  
           
      <div   className={clsx(
                  "text-sm text-main-bold-gray dark:text-main-white-marble  dark:border-main-casual-black last:border-b-0 pb-3 sm:pb-4 mt-3 sm:mt-4",
                  isRTL ? "text-right pr-0 sm:pr-8 md:pr-16" : "text-left pl-0 sm:pl-8 md:pl-16"
                )}>
       
          <p className="text-sm text-main-bold-gray dark:text-main-white-marble mb-3 ">
        
             {t("questionsDescription")}
          </p>
          <a
            href={`mailto:${t("contactEmail")}`}
            className="text-sm text-main-mediterranean-green hover:underline font-medium flex items-center break-all sm:break-normal"
          >
               <Mail size={16} className={clsx("shrink-0", isRTL ? "ml-2" : "mr-2")} />
            {t("contactEmail")}
          </a>
          <p className="text-xs text-main-bold-gray dark:text-main-white-marble mt-2 flex items-center">
          <Globe size={16} className={clsx("text-main-mediterranean-green shrink-0", isRTL ? "ml-2" : "mr-2")} />
            {t("location")}
          </p>
        </div>
 
    </div>
  );
};

