"use client";

import { useTranslations, useLocale } from "next-intl";
import { SupportChatHeader } from "../../shared/components/support/SupportChatHeader";
import { SupportChatMessage } from "../../shared/components/support/SupportChatMessage";
import { SupportChatQuickActions } from "../../shared/components/support/SupportChatQuickActions";
import { SupportChatInfoBanner } from "../../shared/components/support/SupportChatInfoBanner";
import { SupportChatInput } from "../../shared/components/support/SupportChatInput";
import clsx from "clsx";

const SupportPage = () => {
  const t = useTranslations("SupportChat");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const quickActions = [
    { key: "trackOrder" },
    { key: "cashbackIssue" },
    { key: "couponNotWorking" },
    { key: "storeInquiry" },
  ];

  const handleActionClick = (actionKey: string) => {
    
    console.log("Action clicked:", actionKey);
  };

  const handleSendMessage = (message: string) => {
    console.log("Sending message:", message);
  
  };

  const handleAttachFile = () => {
    console.log("Attach file clicked");
  
  };


  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString(locale === "ar" ? "ar-SA" : "en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="flex flex-col h-screen bg-white md:bg-main-titanium-white dark:bg-main-casual-black">
      <SupportChatHeader />

      <div className="flex-1 overflow-y-auto">
        <div
          className={clsx(
            "mx-auto px-4 sm:px-6 py-4 sm:py-6",
            isRTL && "text-right"
          )}
        >
          <SupportChatMessage
            sender={t("agentName")}
            message={t("welcomeMessage")}
            timestamp={getCurrentTime()}
            isAgent={true}
          />

          <SupportChatQuickActions
            actions={quickActions}
            onActionClick={handleActionClick}
          />

          
        </div>
      </div>

      <SupportChatInput
        onSendMessage={handleSendMessage}
        onAttachFile={handleAttachFile}
      />
    </div>
  );
};

export default SupportPage;
