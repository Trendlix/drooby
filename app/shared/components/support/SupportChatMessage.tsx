"use client";

import { useLocale } from "next-intl";
import clsx from "clsx";
import Image from "next/image";

interface SupportChatMessageProps {
  sender: string;
  message: string;
  timestamp: string;
  avatar?: string;
  isAgent?: boolean;
}

export const SupportChatMessage = ({
  sender,
  message,
  timestamp,
  avatar,
  isAgent = false,
}: SupportChatMessageProps) => {
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div
      className={clsx(
        "flex items-start gap-3 mb-4 flex-col"
      )}
    >
      {/* avatar */}
      <div className="flex items-center gap-3">
        <div
          className={clsx(
            "w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0",
            isAgent
              ? "bg-main-mediterranean-green text-white"
              : "bg-main-titanium-white dark:bg-main-black-charcoal text-main-matte-black dark:text-main-white-marble"
          )}
        >
          {avatar ? (
            <Image
              src={avatar}
              alt={sender}
              width={48}
              height={48}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <span className="text-sm sm:text-base font-medium">
              {sender.charAt(0).toUpperCase()}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-medium text-main-matte-black dark:text-main-white-marble">
            {sender}
          </span>
        </div>
      </div>
      {/* message */}
      <div
        className={clsx(
          "inline-block rounded-2xl  py-2.5  sm:py-3 border border-main-white-marble px-3 sm:px-4",
          "bg-white dark:bg-main-black-charcoal text-main-matte-black dark:text-main-white-marble"
        )}
      >
        <p className="text-sm sm:text-base leading-relaxed text-left">
          {message}
        </p>

        <span className="text-xs text-main-bold-gray dark:text-main-white-marble mt-1 block">
          {timestamp}
        </span>
      </div>
    </div>
  );
};
