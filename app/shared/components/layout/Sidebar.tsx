"use client";

import { Link, usePathname } from "@/i18n/routing";
import Routes, { IRouteItem } from "../../core/routes";
import clsx from "clsx";
import { useTranslations } from "next-intl";

interface ISidebarItemProps {
    route: IRouteItem;
}

const SidebarItem = ({ route }: ISidebarItemProps) => {
    const t = useTranslations('Sidebar');
    const pathname = usePathname();
    const isActive = pathname === route.href;

    const Icon = route.icon;

    return (
        <Link
            href={route.href}
            className={clsx(
                "group relative flex items-center gap-3 px-4 py-3 rounded-xl capitalize transition-all duration-300 ease-in-out font-medium",
                isActive
                    ? "bg-main-mediterraneanGreen text-white shadow-lg shadow-main-mediterraneanGreen/20 scale-[1.02]"
                    : "text-main-boldGray dark:text-white/60 hover:text-main-mediterraneanGreen dark:hover:text-main-mediterraneanGreen hover:bg-main-mediterraneanGreen/5 active:scale-95"
            )}
            aria-current={isActive ? "page" : undefined}
            aria-label={t(route.title)}
            title={t(`${route.title}_desc`)}
        >
            <Icon
                size={22}
                color="currentColor"
                className="transition-transform duration-300 group-hover:scale-110"
            />

            <span className="truncate text-sm">
                {t(route.title)}
            </span>

            {isActive && (
                <span className="absolute end-3 w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse" />
            )}
        </Link>
    );
};

export const Sidebar = () => {
    const mainRoutes = Routes.slice(0, 6);
    const secondaryRoutes = Routes.slice(6);

    return (
        <aside className="w-64 h-screen p-4 border-e border-main-whiteMarble/60 dark:border-main-casualBlack/60 flex flex-col sticky top-0 overflow-y-auto bg-white dark:bg-main-casualBlack transition-colors duration-300">
            <div className="flex flex-col gap-1">
                {mainRoutes.map((route) => (
                    <SidebarItem key={route.href} route={route} />
                ))}
            </div>

            <div className="my-4 border-t border-main-whiteMarble/60 dark:border-main-casualBlack/60" />

            <div className="flex flex-col gap-1">
                {secondaryRoutes.map((route) => (
                    <SidebarItem key={route.href} route={route} />
                ))}
            </div>
        </aside>
    );
};


