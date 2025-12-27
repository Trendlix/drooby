"use client";

import { Link, usePathname } from "@/i18n/routing";
import Routes, { IRouteItem } from "../../core/routes";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { NOTIFICATION_COUNT } from "../../data/notifications/notificationConfig";

interface ISidebarItemProps {
    route: IRouteItem;
    badgeCount?: number;
}

const SidebarItem = ({ route, badgeCount }: ISidebarItemProps) => {
    const t = useTranslations('Sidebar');
    const pathname = usePathname();
    const isActive = pathname === route.href;

    const Icon = route.icon;
    const showBadge = badgeCount !== undefined && badgeCount > 0 && route.href === "/notifications";

    return (
        <Link
            href={route.href}
            className={clsx(
                "group relative flex items-center gap-3 px-4 py-3 rounded-xl capitalize transition-all duration-300 ease-in-out font-medium",
                isActive
                    ? "bg-main-mediterranean-green text-main-white shadow-lg shadow-main-mediterranean-green/20 scale-[1.02]"
                    : "text-main-bold-gray dark:text-main-white-marble hover:text-main-mediterranean-green hover:bg-main-mediterranean-green/5 active:scale-95"
            )}
            aria-current={isActive ? "page" : undefined}
            aria-label={t(route.title)}
            title={t(`${route.title}_desc`)}
        >
            <Icon
                size={22}
                className={clsx(
                    "transition-transform duration-300 group-hover:scale-110",
                    isActive ? "text-main-white" : "text-main-bold-gray dark:text-main-white-marble"
                )}
            />

            <span className="truncate text-sm flex-1">
                {t(route.title)}
            </span>

            {/* Notification Badge */}
            {showBadge && (
                <span className={clsx(
                    "flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-xs font-semibold text-white",
                    isActive ? "bg-red-500" : "bg-red-500"
                )}>
                    {badgeCount > 99 ? "99+" : badgeCount}
                </span>
            )}

            {isActive && !showBadge && (
                <span className="absolute end-3 w-1.5 h-1.5 rounded-full bg-main-white/40 animate-pulse" />
            )}
        </Link>
    );
};

export const Sidebar = () => {
    const mainRoutes = Routes.slice(0, 6);
    const secondaryRoutes = Routes.slice(6);
    
    // Get notification count from config - easily changeable
    const notificationCount = NOTIFICATION_COUNT;

    return (
        <aside className="hidden lg:flex w-64 h-screen p-4 border-e border-main-white-marble/60 dark:border-main-casual-black/60 flex-col sticky top-0 overflow-y-auto bg-main-titanium-white dark:bg-main-casual-black transition-colors duration-300">
            <div className="flex flex-col gap-1">
                {mainRoutes.map((route) => (
                    <SidebarItem 
                        key={route.href} 
                        route={route} 
                        badgeCount={route.href === "/notifications" ? notificationCount : undefined}
                    />
                ))}
            </div>

            <div className="my-4 border-t border-main-white-marble/60 dark:border-main-casual-black/60" />

            <div className="flex flex-col gap-1">
                {secondaryRoutes.map((route) => (
                    <SidebarItem 
                        key={route.href} 
                        route={route}
                        badgeCount={route.href === "/notifications" ? notificationCount : undefined}
                    />
                ))}
            </div>
        </aside>
    );
};