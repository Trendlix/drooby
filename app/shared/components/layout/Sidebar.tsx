"use client";

import { Link, usePathname } from "@/i18n/routing";
import Routes, { IRouteItem } from "../../core/routes";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useWishlistStore } from "../../store/useWishlistStore";

interface ISidebarItemProps {
	route: IRouteItem;
}

const SidebarItem = ({ route }: ISidebarItemProps) => {
	const t = useTranslations("Sidebar");
	const pathname = usePathname();
	const isActive = pathname === route.href;

	const Icon = route.icon;
	const count = useWishlistStore((state) => state.count);

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
					isActive
						? "text-main-white"
						: "text-main-bold-gray dark:text-main-white-marble"
				)}
			/>

			<span className="truncate text-sm">{t(route.title)}</span>

			{isActive && (
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

	return (
		<aside className="w-64 h-screen p-4 border-e border-main-white-marble/60 dark:border-main-casual-black/60 flex flex-col sticky top-0 overflow-y-auto bg-main-titanium-white dark:bg-main-casual-black transition-colors duration-300">
			<div className="flex flex-col gap-1">
				{mainRoutes.map((route) => (
					<SidebarItem key={route.href} route={route} />
				))}
			</div>

			<div className="my-4 border-t border-main-white-marble/60 dark:border-main-casual-black/60" />

			<div className="flex flex-col gap-1">
				{secondaryRoutes.map((route) => (
					<SidebarItem key={route.href} route={route} />
				))}
			</div>
		</aside>
	);
};
