import { LucideIcon } from "lucide-react";

export interface IUserData {
    name: string;
    email: string;
    memberSince: string;
    avatarUrl?: string;
    points: number;
    orders: string;
    saved: string;
    walletBalance: string;
    ordersCount: number;
    activeCoupons: number;
}
 
export interface ISummaryItem {
    label: string;
    value: string | number;
}

export interface IMenuItem {
    icon: LucideIcon;
    titleKey: string;
    descriptionKey: string;
    href?: string;
    onClick?: () => void;
}

export interface IMenuItemsConfig {
    account: IMenuItem[];
    preferences: IMenuItem[];
    support: IMenuItem[];
}

