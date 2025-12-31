"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Paperclip, Send } from "lucide-react";
import clsx from "clsx";
import { SupportChatInfoBanner } from "./SupportChatInfoBanner";

interface SupportChatInputProps {
  onSendMessage?: (message: string) => void;
  onAttachFile?: () => void;
  placeholder?: string;
}

export const SupportChatInput = ({
  onSendMessage,
  onAttachFile,
  placeholder,
}: SupportChatInputProps) => {
  const t = useTranslations("SupportChat");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() && onSendMessage) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    
    <div className=" dark:bg-main-black-charcoal ">
      
     <SupportChatInfoBanner />
      <div
        className={clsx(
          "flex items-center gap-2 sm:gap-3 bg-white p-3 sm:p-4",
        
        )}
      >
        <button
          onClick={onAttachFile}
          className={clsx(
            "p-2 rounded-full dark:hover:bg-main-black-charcoal/80 transition-colors",
            "text-main-bold-gray dark:text-main-white-marble",
            "shrink-0"
          )}
          aria-label={t("attachFile")}
        >
          <Paperclip size={20} />
        </button>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder || t("inputPlaceholder")}
          className={clsx(
            "flex-1",
            "text-sm sm:text-base text-main-matte-black dark:text-main-white-marble",
            "placeholder-main-bold-gray dark:placeholder-main-white-marble/60",
            "bg-main-titanium-white dark:bg-main-black-charcoal",
            "rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3",
            "border border-main-white-marble/60",
            isRTL && "text-right"
          )}
        />
        <button
          onClick={handleSend}
          disabled={!message.trim()}
          className={clsx(
            "p-2 rounded-xl transition-colors shrink-0",
            "bg-main-mediterranean-green text-white hover:bg-main-mediterranean-green-dark"
          )}
          aria-label={t("send")}
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};
