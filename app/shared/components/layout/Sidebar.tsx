"use client";

import { Link, usePathname } from "@/i18n/routing";
import Routes, { IRouteItem } from "../../core/routes";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useWishlistStore } from "../../store/useWishlistStore";
import { NOTIFICATION_COUNT } from "../../data/notifications/notificationConfig";
import Image from "next/image";
import { Settings } from "lucide-react";
import { userData } from "../../data/profile";
import ProfileImage from "../../../../assets/images/profile.jpg";

interface ISidebarItemProps {
	route: IRouteItem;
	badgeCount?: number;
}

const SidebarItem = ({ route, badgeCount }: ISidebarItemProps) => {
	const t = useTranslations("Sidebar");
	let pathname = usePathname();
	pathname = pathname === "/" ? "/en" : pathname;
	const isActive =
		pathname.includes(route.href) ||
		(route.title === "home" &&
			(pathname.includes("/products") || pathname.includes("/compare")));

	const showBadge =
		badgeCount !== undefined &&
		badgeCount > 0 &&
		route.href === "/notifications";

	const Icon = route.icon;
	const count = useWishlistStore((state) => state.count);

	return (
		<Link
			href={route.href === "/en" ? "/" : route.href}
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
					isActive
						? "text-main-white"
						: "text-main-bold-gray dark:text-main-white-marble"
				)}
			/>

			<span className="truncate text-sm">{t(route.title)}</span>

			{showBadge && (
				<span
					className={clsx(
						"flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-xs font-semibold text-white",
						isActive ? "bg-red-500" : "bg-red-500"
					)}
				>
					{badgeCount > 99 ? "99+" : badgeCount}
				</span>
			)}

			{isActive && !showBadge && (
				<span className="absolute end-3 w-1.5 h-1.5 rounded-full bg-main-white/40 animate-pulse" />
			)}
			{route.href === "/wishlist" && count ? (
				<div
					className="w-[22.672px] h-5 rounded-lg px-2 py-0.5 absolute right-8 top-3.5 bg-[#CE0000] flex items-center justify-center"
					style={{
						background: "linear-gradient(90deg, #FB2C36 0%, #E7000B 100%)",
						boxShadow:
							"0 1px 3px 0 rgba(0, 0, 0, 0.10), 0 1px 2px -1px rgba(0, 0, 0, 0.10)",
					}}
				>
					<p className="text-sm text-white">{count}</p>
				</div>
			) : (
				""
			)}
		</Link>
	);
};

export const Sidebar = () => {
	const mainRoutes = Routes.slice(0, 6);
	const secondaryRoutes = Routes.slice(6);
	const notificationCount = NOTIFICATION_COUNT;

	return (
		<aside className="hidden lg:flex justify-between w-64 h-screen p-4 border-e border-main-white-marble/60 dark:border-main-casual-black/60 flex-col sticky top-0 overflow-y-auto bg-white dark:bg-main-casual-black transition-colors duration-300">
			<div>
				<div className="flex flex-col gap-1">
					{mainRoutes.map((route) => (
						<SidebarItem
							key={route.href}
							route={route}
							badgeCount={
								route.href === "/notifications" ? notificationCount : undefined
							}
						/>
					))}
				</div>

				<div className="my-4 border-t border-main-white-marble/60 dark:border-main-casual-black/60" />

				<div className="flex flex-col gap-1">
					{secondaryRoutes.map((route) => (
						<SidebarItem
							key={route.href}
							route={route}
							badgeCount={
								route.href === "/notifications" ? notificationCount : undefined
							}
						/>
					))}
				</div>
			</div>
			{/* User Profile Card */}
			<div className="pt-4 border-t border-main-white-marble/60 dark:border-main-casual-black/60">
				<div className="flex items-center gap-3 py-3 rounded-xl bg-white dark:bg-main-casual-black/80 border border-main-white-marble/40 dark:border-main-casual-black/40">
					{/* Profile Picture */}

					<div className="w-12 h-12 rounded-full bg-main-bold-gray/20 dark:bg-main-white-marble/20 flex items-center justify-center overflow-hidden">
						<Image
							src={ProfileImage}
							alt={userData.name}
							width={48}
							height={48}
							className="w-full h-full object-cover "
						/>
					</div>

					{/* User Info */}
					<div className="flex-1 ">
						<div className="flex items-center gap-1">
							<h3 className="text-xs text-main-bold-gray dark:text-main-white-marble ">
								{userData.name}
							</h3>
							<span className=" w-2 h-2 rounded-full bg-main-mediterranean-green border-2 border-main-titanium-white dark:border-main-casual-black"></span>
						</div>
						<p className="text-xs text-main-bold-gray/60 dark:text-main-white-marble/60 mt-0.5">
							450 Points
						</p>
					</div>

					{/* Settings Icon */}
					<Link
						href="/profile"
						className="shrink-0 p-2 rounded-lg hover:bg-main-mediterranean-green/10 text-main-bold-gray dark:text-main-white-marble hover:text-main-mediterranean-green transition-all duration-300"
						aria-label="Settings"
					>
						<Settings size={18} className="stroke-[1.5]" />
					</Link>
				</div>
			</div>
		</aside>
	);
};
