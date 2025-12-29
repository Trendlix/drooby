import {
    Users,
    History,
    Wallet,
    Tag,
    Bell,
    Settings,
    Shield,
    HelpCircle,
    MessageCircle,
} from "lucide-react";
import type { IMenuItemsConfig } from "../../types/profile";

export const getMenuItemsConfig = (): IMenuItemsConfig => {
    return {
        account: [
            {
                icon: Users,
                titleKey: "recipientProfiles",
                descriptionKey: "recipientProfilesDesc",
                href: "/recipients",
            },
            {
                icon: History,
                titleKey: "purchaseHistory",
                descriptionKey: "purchaseHistoryDesc",
                href: "/history",
            },
            {
                icon: Wallet,
                titleKey: "walletCashback",
                descriptionKey: "walletCashbackDesc",
                href: "/wallet",
            },
            {
                icon: Tag,
                titleKey: "myCoupons",
                descriptionKey: "myCouponsDesc",
                href: "/coupons",
            },
        ],
        preferences: [
            {
                icon: Bell,
                titleKey: "notifications",
                descriptionKey: "notificationsDesc",
                href: "/notifications",
            },
            {
                icon: Settings,
                titleKey: "appSettings",
                descriptionKey: "appSettingsDesc",
                onClick: () => {
                    console.log("Settings clicked");
                },
            },
            {
                icon: Shield,
                titleKey: "privacySecurity",
                descriptionKey: "privacySecurityDesc",
                href: "/profile/privacy",
            },
        ],
        support: [
            {
                icon: HelpCircle,
                titleKey: "helpCenter",
                descriptionKey: "helpCenterDesc",
                href: "/profile/help",
            },
            {
                icon: MessageCircle,
                titleKey: "contactSupport",
                descriptionKey: "contactSupportDesc",
                href: "/support",
            },
        ],
    };
};

