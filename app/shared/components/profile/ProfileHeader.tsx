"use client";

import { useTranslations, useLocale } from "next-intl";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "@/i18n/routing";
import clsx from "clsx";
import { SummaryCard } from "./SummaryCard";
import { ISummaryItem } from "../../types/profile";

interface ProfileHeaderProps {
  name: string;
  email: string;
  memberSince: string;
  avatarUrl?: string;
  summaryItems: ISummaryItem[];
}

export const ProfileHeader = ({
  name,
  email,
  memberSince,
  avatarUrl,
  summaryItems,
}: ProfileHeaderProps) => {
  const t = useTranslations("Profile");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const router = useRouter();

  return (
    <div className="relative mb-24">
      <div className="relative bg-gradient-1 rounded-b-2xl p-6 overflow-hidden">
        <button
          onClick={() => router.back()}
          className={clsx(
            "absolute top-6 text-white z-20",
            isRTL ? "right-6" : "left-6"
          )}
          aria-label={t("back")}
        >
          <ArrowLeft size={20} className={isRTL ? "rotate-180" : ""} />
        </button>

        {/* Content */}
        <div className="flex items-center pt-10 pb-6">
          <div className="relative mb-4 mr-4">
            <div className="w-24 h-24 rounded-full bg-white/20 border-4 border-white/30 overflow-hidden">
              {avatarUrl ? (
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${avatarUrl})` }}
                  role="img"
                  aria-label={name}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
                  {name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col justify-center text-white">
            <h2 className="text-2xl font-medium mb-3">{name}</h2>
            <p className="text-sm font-normal mb-1">{email}</p>
            <p className="text-sm font-normal">
              {t("memberSince")} {memberSince}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[calc(100%-2.5rem)] z-10">
        <SummaryCard items={summaryItems} />
      </div>
    </div>
  );
};
