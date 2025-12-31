"use client";
import { useTranslations, useLocale } from "next-intl";
import {
  ArrowLeft,
  Settings,
  Sun,
  Moon,
  Check,
  Bell,

  DollarSign,
  MapPin,
  Dot,
  Globe,
} from "lucide-react";
import { useRouter, usePathname } from "@/i18n/routing";
import { useTheme } from "next-themes";
import clsx from "clsx";
import { useState, useEffect } from "react";

const AppSettingsPage = () => {
  const t = useTranslations("AppSettings");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const router = useRouter();
  const pathname = usePathname();
  const { theme: currentTheme, setTheme: setThemeGlobal } = useTheme();

  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [language, setLanguage] = useState<"english" | "arabic">(
    locale === "ar" ? "arabic" : "english"
  );
  const [currency, setCurrency] = useState("Saudi Riyal (Saudi Arabia)");
  const [location, setLocation] = useState("Riyadh, Saudi Arabia");
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [priceDropAlerts, setPriceDropAlerts] = useState(true);

  useEffect(() => {
    if (currentTheme) {
      setTheme(currentTheme as "light" | "dark");
    }
  }, [currentTheme]);

  useEffect(() => {
    const savedSettings = localStorage.getItem("appSettings");
    if (savedSettings) {
      try {
        const settings = JSON.parse(savedSettings);
        if (settings.theme) setTheme(settings.theme);
        if (settings.currency) setCurrency(settings.currency);
        if (settings.location) setLocation(settings.location);
        if (settings.pushNotifications !== undefined)
          setPushNotifications(settings.pushNotifications);
        if (settings.emailNotifications !== undefined)
          setEmailNotifications(settings.emailNotifications);
        if (settings.priceDropAlerts !== undefined)
          setPriceDropAlerts(settings.priceDropAlerts);
      } catch (error) {
        console.error("Error loading settings:", error);
      }
    }
  }, []);

  const handleSave = () => {
    const settings = {
      theme,
      language,
      currency,
      location,
      pushNotifications,
      emailNotifications,
      priceDropAlerts,
    };
    localStorage.setItem("appSettings", JSON.stringify(settings));

    // Change theme if it's different
    if (theme !== currentTheme) {
      // Dispatch theme change event to trigger animation (if ThemeWave is listening)
      window.dispatchEvent(
        new CustomEvent("theme-change-request", {
          detail: { theme },
        })
      );
      // Also set theme directly as fallback
      setThemeGlobal(theme);
    }

    // Change language if it's different
    const newLocale = language === "english" ? "en" : "ar";
    if (newLocale !== locale) {
      // Replace locale in pathname
      const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
      const newPath = `/${newLocale}${pathWithoutLocale}`;
      router.push(newPath);
      // Note: The page will reload with new locale, but settings are saved in localStorage
      return;
    }

    console.log("Settings saved", settings);
  };

  const handleReset = () => {
    setTheme("light");
    setLanguage(locale === "ar" ? "arabic" : "english");
    setCurrency("Saudi Riyal (Saudi Arabia)");
    setLocation("Riyadh, Saudi Arabia");
    setPushNotifications(true);
    setEmailNotifications(true);
    setPriceDropAlerts(true);
  };

  return (
    <div className="bg-[#F8F8F8] pb-4 sm:pb-6 md:pb-8 min-h-screen">
      <div className={clsx("mx-auto", isRTL && "text-right")}>
        {/* Header with back button */}
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

          {/* Banner */}
          <div className="bg-main-mediterranean-green p-4 sm:p-6 md:p-8 overflow-hidden">
            <div className="flex flex-col items-center text-white">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-white/20 flex items-center justify-center mb-3 sm:mb-4">
                <Settings size={24} className="sm:w-8 sm:h-8 md:w-8 md:h-8" />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium py-2 sm:py-3 text-center">
                {t("title")}
              </h1>
              <p className="text-sm sm:text-base font-light pb-4 sm:pb-6 pt-1 sm:pt-2 px-4 text-center">
                {t("subtitle")}
              </p>
            </div>
          </div>
        </div>

        {/* Settings Content */}
        <div className="w-full md:max-w-[70%] mx-auto px-4 sm:px-6">
          {/* Appearance Section */}
          <div className="mb-6 sm:mb-8">
            <h3
              className={clsx(
                "text-lg font-medium text-main-section-title-gray mb-4 sm:mb-6",
                isRTL && "text-right"
              )}
            >
              {t("appearance")}
            </h3>
            <div className="bg-white dark:bg-main-black-charcoal rounded-2xl p-4 sm:p-6 border border-main-white-marble/60">
              <div
                className="mb-4 sm:mb-6
              "
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#AD46FF] flex items-center justify-center shrink-0">
                    <Sun size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4
                      className={clsx(
                        "text-sm sm:text-base font-medium text-main-title-gray dark:text-main-white ",
                        isRTL && "text-right"
                      )}
                    >
                      {t("theme")}
                    </h4>
                    <p
                      className={clsx(
                        "text-xs sm:text-sm text-main-bold-gray dark:text-main-white-marble ",
                        isRTL && "text-right"
                      )}
                    >
                      {t("themeDescription")}
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {/* Light Theme Option */}
                  <button
                    onClick={() => setTheme("light")}
                    className={clsx(
                      "w-full flex items-center justify-between p-3 sm:p-4 rounded-xl border transition-all",
                      theme === "light"
                        ? "border-main-mediterranean-green bg-main-mediterranean-green/10"
                        : "border-main-white-marble/60 dark:border-main-casual-black/60 bg-white dark:bg-main-casual-black",
                      isRTL && "flex-row-reverse"
                    )}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div
                        className={clsx(
                          "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                          "border-[#99A1AF] dark:border-main-white-marble/40"
                        )}
                      >
                        {theme === "light" ? (
                          <Dot size={20} className="text-[#030213]" />
                        ) : (
                          <></>
                        )}
                      </div>

                      <div
                        className={clsx(
                          "flex items-center gap-3 sm:gap-4",
                          isRTL && "flex-row-reverse"
                        )}
                      >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-1 flex items-center justify-center shrink-0">
                          <Sun size={20} className="text-white" />
                        </div>
                        <div
                          className={clsx("text-left", isRTL && "text-right")}
                        >
                          <p className="text-sm sm:text-base font-medium text-main-title-gray dark:text-main-white">
                            {t("light")}
                          </p>
                          <p className="text-xs sm:text-sm text-main-bold-gray dark:text-main-white-marble">
                            {t("lightDescription")}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {theme === "light" && (
                        <Check
                          size={18}
                          className="text-main-mediterranean-green"
                        />
                      )}
                    </div>
                  </button>

                  {/* Dark Theme Option */}
                  <button
                    onClick={() => setTheme("dark")}
                    className={clsx(
                      "w-full flex items-center justify-between p-3 sm:p-4 rounded-xl border transition-all",
                      theme === "dark"
                        ? "border-main-mediterranean-green bg-main-mediterranean-green/10"
                        : "border-main-white-marble/60 dark:border-main-casual-black/60 bg-white dark:bg-main-casual-black",
                      isRTL && "flex-row-reverse"
                    )}
                  >
                    <div
                      className={clsx(
                        "flex items-center gap-3 sm:gap-4",
                        isRTL && "flex-row-reverse"
                      )}
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div
                          className={clsx(
                            "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                            "border-[#99A1AF] dark:border-main-white-marble/40"
                          )}
                        >
                          {theme === "dark" ? (
                            <Dot size={20} className="text-[#030213]" />
                          ) : (
                            <></>
                          )}
                        </div>

                        <div
                          className={clsx(
                            "flex items-center gap-3 sm:gap-4",
                            isRTL && "flex-row-reverse"
                          )}
                        >
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#F3F4F6] flex items-center justify-center shrink-0">
                            <Moon size={20} className="text-[#99A1AF]" />
                          </div>
                          <div
                            className={clsx("text-left", isRTL && "text-right")}
                          >
                            <p className="text-sm sm:text-base font-medium text-main-title-gray dark:text-main-white">
                              {t("dark")}
                            </p>
                            <p className="text-xs sm:text-sm text-main-bold-gray dark:text-main-white-marble">
                              {t("darkDescription")}
                            </p>
                          </div>
                        </div>
                      </div>
                     
                    </div>
                    <div className="flex items-center gap-2">
                        {theme === "dark" && (
                          <Check
                            size={18}
                            className="text-main-mediterranean-green"
                          />
                        )}
                      </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Language & Region Section */}
          <div className="mb-6 sm:mb-8">
            <h3
              className={clsx(
                "text-lg font-medium text-main-section-title-gray mb-4 sm:mb-6",
                isRTL && "text-right"
              )}
            >
              {t("languageRegion")}
            </h3>
            <div className="bg-white dark:bg-main-black-charcoal rounded-2xl p-4 sm:p-6 border border-main-white-marble/60 space-y-4 sm:space-y-6">
              {/* Language */}
              <div className="border-b border-[#E5E7EB99] pb-5" >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-1 flex items-center justify-center shrink-0">
                        <Globe size={20} className="text-white" />
                    </div>
               
                <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex-1">
                        <h4
                            className={clsx(
                                "text-sm sm:text-base font-medium text-main-title-gray dark:text-main-white",
                                isRTL && "text-right"
                            )}
                        >
                            {t("language")}
                        </h4>
                        <p
                            className={clsx(
                                "text-xs sm:text-sm text-main-bold-gray dark:text-main-white-marble",
                                isRTL && "text-right"
                            )}
                        >
                            {t("languageDescription")}
                        </p>
                    </div>
                </div>
                </div>
                <div className="space-y-3">
                  {/* English Option */}
                  <button
                    onClick={() => setLanguage("english")}
                    className={clsx(
                      "w-full flex items-center justify-between p-3 sm:p-4 rounded-xl border transition-all",
                      language === "english"
                        ? "border-main-mediterranean-green bg-main-mediterranean-green/10"
                        : "border-main-white-marble/60 dark:border-main-casual-black/60 bg-white dark:bg-main-casual-black",
                      isRTL && "flex-row-reverse"
                    )}
                  >
                    <div
                      className={clsx(
                        "flex items-center gap-3 sm:gap-4",
                        isRTL && "flex-row-reverse"
                      )}
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shrink-0 text-white font-bold text-sm sm:text-base">
                        🇬🇧
                      </div>
                      <div className={clsx("text-left", isRTL && "text-right")}>
                        <p className="text-sm sm:text-base font-medium text-main-title-gray dark:text-main-white">
                          {t("english")}
                        </p>
                        <p className="text-xs sm:text-sm text-main-bold-gray dark:text-main-white-marble">
                          {t("english")}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      
                      {language === "english" && (
                        <Check
                          size={18}
                          className="text-main-mediterranean-green"
                        />
                      )}
                    </div>
                  </button>

                  {/* Arabic Option */}
                  <button
                    onClick={() => setLanguage("arabic")}
                    className={clsx(
                      "w-full flex items-center justify-between p-3 sm:p-4 rounded-xl border transition-all",
                      language === "arabic"
                        ? "border-main-mediterranean-green bg-main-mediterranean-green/10"
                        : "border-main-white-marble/60 dark:border-main-casual-black/60 bg-white dark:bg-main-casual-black",
                      isRTL && "flex-row-reverse"
                    )}
                  >
                    <div
                      className={clsx(
                        "flex items-center gap-3 sm:gap-4",
                        isRTL && "flex-row-reverse"
                      )}
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shrink-0 text-white font-bold text-sm sm:text-base">
                        🇸🇦
                      </div>
                      <div className={clsx("text-left", isRTL && "text-right")}>
                        <p className="text-sm sm:text-base font-medium text-main-title-gray dark:text-main-white">
                          {t("arabic")}
                        </p>
                        <p className="text-xs sm:text-sm text-main-bold-gray dark:text-main-white-marble">
                          {t("arabic")}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                    
                      {language === "arabic" && (
                        <Check
                          size={18}
                          className="text-main-mediterranean-green"
                        />
                      )}
                    </div>
                  </button>
                </div>
              </div>

              {/* Currency */}
              <div className="border-b border-[#E5E7EB99] pb-5">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6"> 
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#00A63E] flex items-center justify-center shrink-0">
                        <DollarSign size={20} className="text-white" />
                    
                    </div>
                <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex-1">
                        <h4
                            className={clsx(
                                "text-sm sm:text-base font-medium text-main-title-gray dark:text-main-white",
                                isRTL && "text-right"
                            )}
                        >
                            {t("currency")}
                        </h4>
                        <p
                            className={clsx(
                                "text-xs sm:text-sm text-main-bold-gray dark:text-main-white-marble",
                                isRTL && "text-right"
                            )}
                        >
                            {t("currencyDescription")}
                        </p>
                    </div>      
                </div>
                </div>
                <div className="relative md:ml-10">
                  {/* <DollarSign
                    size={20}
                    className={clsx(
                      "absolute top-1/2 transform -translate-y-1/2 text-main-bold-gray dark:text-main-white-marble",
                      isRTL ? "right-4" : "left-5"
                    )}
                  /> */}
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className={clsx(
                      "w-full p-2 sm:p-4 pl-11 pr-11 rounded-full border border-[#D1D5DC] dark:border-main-casual-black/60",
                      "bg-[#F3F3F5] dark:bg-main-casual-black text-main-title-gray dark:text-main-white",
                      "focus:outline-none focus:ring-2 focus:ring-main-mediterranean-green focus:border-transparent",
                      "appearance-none cursor-pointer",
                      isRTL && "text-right"
                    )}
                  >
                    <option value="Saudi Riyal (Saudi Arabia)">
                      {t("saudiRiyal")} - ر.س
                    </option>
                  </select>
                  <div
                    className={clsx(
                      "absolute top-1/2 transform -translate-y-1/2 pointer-events-none",
                      isRTL ? "left-4" : "right-4"
                    )}
                  >
                    <svg
                      className="w-5 h-5 text-main-bold-gray dark:text-main-white-marble"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Default Shopping Region Location */}
              <div>
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6"> 
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#155DFC] flex items-center justify-center shrink-0">
                        <MapPin size={20} className="text-white" />
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4">  
                        <div className="flex-1">
                            <h4
                                className={clsx(
                                    "text-sm sm:text-base font-medium text-main-title-gray dark:text-main-white",
                                    isRTL && "text-right"
                                )}
                            >
                                {t("defaultLocation")}
                            </h4>
                            <p
                                className={clsx(
                                    "text-xs sm:text-sm text-main-bold-gray dark:text-main-white-marble",
                                    isRTL && "text-right"
                                )}
                            >
                                {t("defaultLocationDescription")}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative md:ml-10">
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className={clsx(
                      "w-full p-2 sm:p-4 pl-11 pr-11 rounded-full border border-[#D1D5DC] dark:border-main-casual-black/60",
                      "bg-[#F3F3F5] dark:bg-main-casual-black text-main-title-gray dark:text-main-white",
                      "focus:outline-none focus:ring-2 focus:ring-main-mediterranean-green focus:border-transparent",
                      "appearance-none cursor-pointer",
                      isRTL && "text-right"
                    )}
                  >
                    <option value="Riyadh, Saudi Arabia">{t("riyadh")}</option>
                  </select>
                  <div
                    className={clsx(
                      "absolute top-1/2 transform -translate-y-1/2 pointer-events-none",
                      isRTL ? "left-4" : "right-4"
                    )}
                  >
                    <svg
                      className="w-5 h-5 text-main-bold-gray dark:text-main-white-marble"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Notifications Section */}
          <div className="mb-6 sm:mb-8">
            <h3
              className={clsx(
                "text-lg font-medium text-main-section-title-gray mb-4 sm:mb-6",
                isRTL && "text-right"
              )}
            >
              {t("notifications")}
            </h3>
            <div className="bg-white dark:bg-main-black-charcoal rounded-2xl p-4 sm:p-6 border border-main-white-marble/60 space-y-4">
              {/* Push Notifications */}
              <div
                className={clsx(
                  "flex items-center justify-between p-3 sm:p-4 rounded-xl",
                  isRTL && "flex-row-reverse"
                )}
              >
                <div
                  className={clsx(
                    "flex items-center gap-3 sm:gap-4 flex-1",
                    isRTL && "flex-row-reverse"
                  )}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#E7000B] flex items-center justify-center shrink-0">
                    <Bell size={20} className="text-white" />
                  </div>
                  <div className={clsx("flex-1", isRTL && "text-right")}>
                    <p className="text-sm sm:text-base font-medium text-main-title-gray dark:text-main-white">
                      {t("pushNotifications")}
                    </p>
                    <p className="text-xs sm:text-sm text-main-bold-gray dark:text-main-white-marble">
                      {t("pushNotificationsDescription")}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setPushNotifications(!pushNotifications)}
                  className={clsx(
                    "relative w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-main-mediterranean-green focus:ring-offset-2",
                    pushNotifications
                      ? "bg-main-mediterranean-green"
                      : "bg-main-white-marble/60 dark:bg-main-casual-black"
                  )}
                >
                  <span
                    className={clsx(
                      "absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200",
                      pushNotifications
                        ? isRTL
                          ? "right-1"
                          : "left-1 translate-x-6"
                        : isRTL
                        ? "right-1"
                        : "left-1"
                    )}
                  />
                </button>
              </div>

              {/* Email Notifications */}
              <div
                className={clsx(
                  "flex items-center justify-between p-3 sm:p-4 rounded-xl",
                  isRTL && "flex-row-reverse"
                )}
              >
                <div
                  className={clsx(
                    "flex items-center gap-3 sm:gap-4 flex-1",
                    isRTL && "flex-row-reverse"
                  )}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#155DFC] flex items-center justify-center shrink-0">
                    <Bell size={20} className="text-white" />
                  </div>
                  <div className={clsx("flex-1", isRTL && "text-right")}>
                    <p className="text-sm sm:text-base font-medium text-main-title-gray dark:text-main-white">
                      {t("emailNotifications")}
                    </p>
                    <p className="text-xs sm:text-sm text-main-bold-gray dark:text-main-white-marble">
                      {t("emailNotificationsDescription")}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setEmailNotifications(!emailNotifications)}
                  className={clsx(
                    "relative w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-main-mediterranean-green focus:ring-offset-2",
                    emailNotifications
                      ? "bg-main-mediterranean-green"
                      : "bg-main-white-marble/60 dark:bg-main-casual-black"
                  )}
                >
                  <span
                    className={clsx(
                      "absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200",
                      emailNotifications
                        ? isRTL
                          ? "right-1"
                          : "left-1 translate-x-6"
                        : isRTL
                        ? "right-1"
                        : "left-1"
                    )}
                  />
                </button>
              </div>

              {/* Price Drop Alerts */}
              <div
                className={clsx(
                  "flex items-center justify-between p-3 sm:p-4 rounded-xl",
                  isRTL && "flex-row-reverse"
                )}
              >
                <div
                  className={clsx(
                    "flex items-center gap-3 sm:gap-4 flex-1",
                    isRTL && "flex-row-reverse"
                  )}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-1 flex items-center justify-center shrink-0">
                    <Bell
                      size={20}
                      className="text-white"
                    />
                  </div>
                  <div className={clsx("flex-1", isRTL && "text-right")}>
                    <p className="text-sm sm:text-base font-medium text-main-title-gray dark:text-main-white">
                      {t("priceDropAlerts")}
                    </p>
                    <p className="text-xs sm:text-sm text-main-bold-gray dark:text-main-white-marble">
                      {t("priceDropAlertsDescription")}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setPriceDropAlerts(!priceDropAlerts)}
                  className={clsx(
                    "relative w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-main-mediterranean-green focus:ring-offset-2",
                    priceDropAlerts
                      ? "bg-main-mediterranean-green"
                      : "bg-main-white-marble/60 dark:bg-main-casual-black"
                  )}
                >
                  <span
                    className={clsx(
                      "absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200",
                      priceDropAlerts
                        ? isRTL
                          ? "right-1"
                          : "left-1 translate-x-6"
                        : isRTL
                        ? "right-1"
                        : "left-1"
                    )}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div
            className={clsx(
              "flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6",
              isRTL && "sm:flex-row-reverse"
            )}
          >
            <button
              onClick={handleReset}
              className={clsx(
                "flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-xl border border-main-white-marble/60 dark:border-main-casual-black/60",
                "bg-white dark:bg-main-casual-black text-main-title-gray dark:text-main-white",
                "font-medium text-sm sm:text-base",
                "hover:bg-main-titanium-white dark:hover:bg-main-black-charcoal transition-colors",
                "focus:outline-none focus:ring-2 focus:ring-main-mediterranean-green focus:ring-offset-2"
              )}
            >
              {t("resetToDefault")}
            </button>
            <button
              onClick={handleSave}
              className={clsx(
                "flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-xl",
                "bg-main-mediterranean-green text-white",
                "font-medium text-sm sm:text-base",
                "hover:bg-main-myrtle-green transition-colors",
                "focus:outline-none focus:ring-2 focus:ring-main-mediterranean-green focus:ring-offset-2"
              )}
            >
              {t("saveChanges")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSettingsPage;
