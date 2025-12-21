import {
    ChatIcone,
    CouponIcone,
    HistoryIcone,
    HomeIcone,
    NotificationsIcone,
    SupportIcone,
    userIcone,
    UsersIcone,
    WalletIcone,
    WhishlistIcone,
    ISidebarIconeProps,
} from "../icons/layout/sidebar/SidebarIcones";

export interface IRouteItem {
    href: string;
    title: string;
    description?: string;
    icon: React.ComponentType<ISidebarIconeProps>;
}

const Routes: IRouteItem[] = [
    { title: "home", href: "/", description: "Go to homepage", icon: HomeIcone },
    { title: "chat", href: "/chat", description: "Go to chat page", icon: ChatIcone },
    { title: "wishlist", href: "/wishlist", description: "Go to wishlist page", icon: WhishlistIcone },
    { title: "wallet", href: "/wallet", description: "Go to wallet page", icon: WalletIcone },
    { title: "coupons", href: "/coupons", description: "Go to coupons page", icon: CouponIcone },
    { title: "history", href: "/history", description: "Go to history page", icon: HistoryIcone },
    { title: "recipients", href: "/recipients", description: "Go to recipients page", icon: UsersIcone },
    { title: "notifications", href: "/notifications", description: "Go to notifications page", icon: NotificationsIcone },
    { title: "support", href: "/support", description: "Go to support page", icon: SupportIcone },
    { title: "profile", href: "/profile", description: "Go to profile page", icon: userIcone },
];

export default Routes;
