"use client";

import { LogOut } from "lucide-react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import clsx from "clsx";

interface LogoutButtonProps {
    onClick?: () => void;
}

export const LogoutButton = ({ onClick }: LogoutButtonProps) => {
    const t = useTranslations("Profile");
    const locale = useLocale();
    const isRTL = locale === "ar";

    return (
        <button
            onClick={onClick}
            className={clsx(
                "w-full flex items-center justify-center gap-2 py-4 rounded-xl",
                "bg-main-white dark:bg-main-black-charcoal",
                'border border-main-titanium-white ',
                "active:scale-[0.98]"
            )}
        >
            <LogOut size={20} className={isRTL ? "rotate-180" : ""} />
            <span>{t("logout")}</span>
        </button>
    );
};

