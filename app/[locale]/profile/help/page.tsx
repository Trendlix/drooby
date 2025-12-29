"use client";

import { useTranslations, useLocale } from "next-intl";
import { HelpCenterHeader } from "../../../shared/components/profile/HelpCenterHeader";
import { HelpCenterCategoryCard } from "../../../shared/components/profile/HelpCenterCategoryCard";
import { HelpCenterFAQ } from "../../../shared/components/profile/HelpCenterFAQ";
import { HelpCenterContactCard } from "../../../shared/components/profile/HelpCenterContactCard";
import { HelpCircle, CreditCard, Package, Gift, Shield } from "lucide-react";
import clsx from "clsx";

const HelpCenterPage = () => {
  const t = useTranslations("HelpCenter");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const categories = [
    {
      icon: HelpCircle,
      title: t("categoryGeneral"),
      color: "linear-gradient(90deg, #2B7FFF, #155DFC)",
    },
    {
      icon: CreditCard,
      title: t("categoryWallet"),
      color: "linear-gradient(90deg, #3a9a99, #2d7a79)",
    },
    {
      icon: Package,
      title: t("categoryShopping"),
      color: "linear-gradient(90deg, #AD46FF, #9810FA)",
    },
    {
      icon: Gift,
      title: t("categoryCoupons"),
      color: "linear-gradient(90deg, #ff6900, #f54900)",
    },
    {
      icon: Shield,
      title: t("categoryAccount"),
      color: "linear-gradient(90deg, #00C950, #00A63E",
    },
  ];

  const faqs = [
    { key: "faq1" },
    { key: "faq2" },
    { key: "faq3" },
    { key: "faq4" },
    { key: "faq5" },
    { key: "faq6" },
    { key: "faq7" },
    { key: "faq8" },
    { key: "faq9" },
    { key: "faq10" },
    { key: "faq11" },
    { key: "faq12" },
    { key: "faq13" },
    { key: "faq14" },
    { key: "faq15" },
    { key: "faq16" },
  ];

  const contactOptions = [
    {
      icon: "MessageCircle",
      title: t("contactLiveChat"),
      description: t("contactLiveChatDesc"),
      action: t("contactLiveChatAction"),
      color: "linear-gradient(90deg, #3a9a99, #2d7a79)",
      actionUrl: "",
    },
    {
      icon: "Mail",
      title: t("contactEmail"),
      description: t("contactEmailDesc"),
      action: t("contactEmailAction"),
      color: "linear-gradient(90deg, #2B7FFF, #155DFC)",
      actionUrl: "support@drooby.com",
    },
    {
      icon: "Phone",
      title: t("contactPhone"),
      description: t("contactPhoneDesc"),
      action: t("contactPhoneAction"),
      color: "linear-gradient(90deg, #AD46FF, #9810FA)",
      actionUrl: "+966XXXXXXXXX",
    },
  ];

  return (
    <div className="bg-[#F8F8F8] pb-4 sm:pb-6 md:pb-8 min-h-screen">
      <div className={clsx("mx-auto", isRTL && "text-right")}>
        <HelpCenterHeader />

        <div className=" mx-auto px-4 sm:px-6">
          <div className="mb-6 sm:mb-8">
            <h2
              className={clsx(
                "text-lg font-normal text-main-matte-black mb-4 sm:mb-6",
                isRTL && "text-right"
              )}
            >
              {t("browseByCategory")}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 mx-auto ">
              {categories.map((category, index) => (
                <HelpCenterCategoryCard
                  key={index}
                  icon={category.icon}
                  title={category.title}
                  color={category.color}
                />
              ))}
            </div>
          </div>

          <div className="mb-6 sm:mb-8">
            <h2
              className={clsx(
                "text-lg font-normal text-main-matte-black mb-4 sm:mb-6",
                isRTL && "text-right"
              )}
            >
              {t("frequentlyAskedQuestions")}
            </h2>
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <HelpCenterFAQ
                  key={index}
                  questionKey={faq.key}
                  answerKey={`${faq.key}Answer`}
                />
              ))}
            </div>
          </div>

          <div className="border border-main-white-marble/60 dark:bg-main-black-charcoal text-center bg-white/60 rounded-2xl py-5">
            <h2
              className={clsx(
                "text-xl sm:text-2xl font-medium text-main-section-title-gray mb-2 mt-5"
              )}
            >
              {t("stillNeedHelp")}
            </h2>
            <p
              className={clsx(
                "text-sm sm:text-base text-main-bold-gray mb-4 sm:mb-6 ",
                isRTL && "text-right"
              )}
            >
              {t("stillNeedHelpDesc")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-3/4 mx-auto">
              {contactOptions.map((option, index) => (
                <HelpCenterContactCard
                  key={index}
                  icon={option.icon}
                  title={option.title}
                  description={option.description}
                  action={option.action}
                  color={option.color}
                  actionUrl={option.actionUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterPage;
