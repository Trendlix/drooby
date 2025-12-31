"use client";

import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { HomeIcone, WhishlistIcone, WalletIcone, userIcone } from "../../icons/layout/sidebar/SidebarIcones";
import WhiteLogo from "../../../../assets/logo-white.svg"
import Image from "next/image";

interface IBottomNavItem {
    href: string;
    title: string;
    icon: React.ComponentType<{ size?: number; color?: string; className?: string }>;
}

const bottomNavItems: IBottomNavItem[] = [
    { title: "home", href: "/", icon: HomeIcone },
    { title: "wishlist", href: "/wishlist", icon: WhishlistIcone },
    { title: "wallet", href: "/wallet", icon: WalletIcone },
    { title: "profile", href: "/profile", icon: userIcone },
];

export const BottomNavigation = () => {
    const t = useTranslations("Sidebar");
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
            {/* Navigation Bar with Wave Shape Cutout */}
            <div className="relative bg-main-black-charcoal dark:bg-main-casual-black overflow-visible">
                {/* Wave Shape - Semi-circular cutout at top center */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-7 w-20 h-20  z-0 bg-main-black-charcoal  rounded-full">
                   
                </div>
                
                {/* Navigation Container */}
                <div className="relative flex items-end justify-around px-2 pt-4 pb-3 z-10">
                    {/* Navigation Items */}
                    {bottomNavItems.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={clsx(
                                    "flex flex-col items-center justify-center flex-1 relative transition-all duration-200 pb-1",
                                    isActive && "text-main-mediterranean-green"
                                )}
                                aria-label={t(item.title)}
                            >
                                {/* Active Indicator Line */}
                                {isActive && (
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-main-mediterranean-green rounded-full" />
                                )}

                                {/* Icon */}
                                <div className={clsx(
                                    "mb-1.5 transition-colors",
                                    isActive ? "text-main-mediterranean-green" : "text-main-white"
                                )}>
                                    <Icon
                                        size={22}
                                        className={clsx(
                                            "transition-transform duration-200",
                                            isActive && "scale-110"
                                        )}
                                    />
                                </div>

                                {/* Label */}
                                <span className={clsx(
                                    "text-xs font-medium transition-colors",
                                    isActive
                                        ? "text-main-mediterranean-green"
                                        : "text-main-bold-gray dark:text-main-white-marble"
                                )}>
                                    {t(item.title)}
                                </span>
                            </Link>
                        );
                    })}

                    {/* Central Button - Positioned in Wave Cutout */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -top-5 z-30">
                        <Link
                            href="/"
                            className="relative flex items-center justify-center w-13 h-13 rounded-full bg-main-mediterranean-green shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
                            aria-label="Shop"
                        >
                            <Image 
                                src={WhiteLogo} 
                                alt="White Logo" 
                                width={25} 
                                height={25}
                                className="relative z-10"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

