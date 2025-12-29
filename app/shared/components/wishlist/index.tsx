/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import {
	ArrowDown,
	ArrowLeft,
	Search,
	Share2,
	Trash2,
	Users,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const wishlistProfiles = [
	{
		profileName: "Me",
		count: 12,
		avatar: "👤",
		categories: {
			electronics: [
				{
					image: "/wishlist/sneaker1.png",
					name: "Wireless Headphones",
					stores: 3,
					price: 180,
					discount: 15,
					link: "/products/wireless-headphones",
				},
				{
					image: "/wishlist/sneaker2.png",
					name: "Smart Watch Series 5",
					stores: 2,
					price: 240,
					discount: 10,
					link: "/products/smart-watch",
				},
			],
			gifts: [
				{
					image: "/wishlist/sneaker3.png",
					name: "Luxury Perfume",
					stores: 4,
					price: 95,
					discount: 20,
					link: "/products/luxury-perfume",
				},
			],
			shirts: [
				{
					image: "/wishlist/sneaker1.png",
					name: "Black Cotton Shirt",
					stores: 5,
					price: 65,
					discount: 5,
					link: "/products/black-cotton-shirt",
				},
			],
		},
	},
	{
		profileName: "Mariam",
		avatar: "👧",
		count: 8,
		categories: {
			gifts: [
				{
					image: "/wishlist/sneaker3.png",
					name: "Leather Handbag",
					stores: 2,
					price: 210,
					discount: 25,
					link: "/products/leather-handbag",
				},
				{
					image: "/wishlist/sneaker2.png",
					name: "Silk Scarf",
					stores: 3,
					price: 70,
					discount: 10,
					link: "/products/silk-scarf",
				},
			],
			electronics: [
				{
					image: "/wishlist/sneaker1.png",
					name: "Kitchen Mixer",
					stores: 1,
					price: 320,
					discount: 12,
					link: "/products/kitchen-mixer",
				},
			],
			shirts: [
				{
					image: "/wishlist/sneaker2.png",
					name: "Floral Blouse",
					stores: 4,
					price: 85,
					discount: 8,
					link: "/products/floral-blouse",
				},
			],
		},
	},
	{
		profileName: "Dad",
		count: 6,
		avatar: "👨",
		categories: {
			electronics: [
				{
					image: "/wishlist/sneaker3.png",
					name: "Bluetooth Earbuds",
					stores: 3,
					price: 120,
					discount: 18,
					link: "/products/bluetooth-earbuds",
				},
			],
			gifts: [
				{
					image: "/wishlist/sneaker1.png",
					name: "Gold Necklace",
					stores: 2,
					price: 450,
					discount: 30,
					link: "/products/gold-necklace",
				},
			],
			shirts: [
				{
					image: "/wishlist/sneaker2.png",
					name: "Oversized T-Shirt",
					stores: 6,
					price: 55,
					discount: 10,
					link: "/products/oversized-tshirt",
				},
			],
		},
	},
];
const WishlistClient = () => {
	const router = useRouter();
	const [selectedProfile, setSelectedProfile] = useState("all");
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [categories, setCategories] = useState<string[]>(() => {
		const allCategories = wishlistProfiles.flatMap((profile) =>
			Object.keys(profile.categories)
		);
		return ["all", ...Array.from(new Set(allCategories))];
	});
	const [products, setProducts] = useState<
		{
			image: string;
			name: string;
			stores: number;
			price: number;
			discount: number;
			link: string;
		}[]
	>([]);

	const activeProfile =
		selectedProfile === "all"
			? null
			: wishlistProfiles.find(
					(p) =>
						p.profileName.toLowerCase().replaceAll(" ", "-") === selectedProfile
			  );
	useEffect(() => {
		if (selectedProfile === "all") {
			const allCategories = wishlistProfiles.flatMap((profile) =>
				Object.keys(profile.categories)
			);
			setCategories(["all", ...Array.from(new Set(allCategories))]);
		} else if (activeProfile) {
			setCategories(["all", ...Object.keys(activeProfile.categories)]);
		}

		setSelectedCategory("all");
	}, [activeProfile, selectedProfile]);

	useEffect(() => {
		let items: {
			image: string;
			name: string;
			stores: number;
			price: number;
			discount: number;
			link: string;
		}[] = [];

		if (selectedProfile === "all") {
			wishlistProfiles.forEach((profile) => {
				// Check if selectedCategory is "all"
				if (selectedCategory === "all") {
					Object.values(profile.categories).forEach((productsArr) => {
						items.push(...productsArr);
					});
				} else {
					// Only push products of the selected category if it exists
					const categoryProducts =
						profile.categories[
							selectedCategory as keyof typeof profile.categories
						];
					if (categoryProducts) {
						items.push(...categoryProducts);
					}
				}
			});
		} else if (activeProfile) {
			if (selectedCategory === "all") {
				Object.values(activeProfile.categories).forEach((productsArr) => {
					items.push(...productsArr);
				});
			} else {
				items =
					activeProfile.categories[
						selectedCategory as keyof typeof activeProfile.categories
					] ?? [];
			}
		}

		setProducts(items);
	}, [selectedProfile, selectedCategory, activeProfile]);

	return (
		<>
			<div className="py-3 space-y-3">
				<div className="pl-4 flex items-center justify-between">
					<ArrowLeft
						className="text-black w-5 h-5 cursor-pointer"
						onClick={() => router.back()}
					/>
					<h3 className="text-[#0A0A0A] leading-6">Wishlist</h3>
					<Search className="w-5 h-5 text-black" />
				</div>
			</div>
			<div className="pb-4 w-full flex items-center gap-2  border-b border-[#E5E7EB]">
				<FilterItem
					count={wishlistProfiles.reduce(
						(prev, current) => prev + current.count,
						0
					)}
					title="All"
					selected={selectedProfile}
					setSelected={setSelectedProfile}
					value="all"
				/>
				{wishlistProfiles.map((profile, i) => (
					<FilterItem
						key={i}
						count={profile.count}
						title={profile.profileName}
						selected={selectedProfile}
						setSelected={setSelectedProfile}
						value={profile.profileName.toLowerCase().replaceAll(" ", "-")}
						avatar={profile.avatar}
					/>
				))}
			</div>
			<div className="py-3 flex items-center gap-2">
				{categories.map((cat, i) => (
					<FilterItem
						key={i}
						count={0}
						title={cat}
						selected={selectedCategory}
						value={cat.toLowerCase().replaceAll(" ", "-")}
						setSelected={setSelectedCategory}
					/>
				))}
			</div>
			<div
				style={{
					background:
						"linear-gradient(135deg, #FFF 0%, #F9FAFB 50%, #FFF 100%)",
				}}
				className="w-full flex flex-col gap-3"
			>
				{products.map((p, i) => (
					<ProductCard
						key={i}
						card={{
							image: p.image,
							price: p.price,
							stores: p.stores,
							title: p.name,
							discount: p.discount,
						}}
					/>
				))}
				<div className="w-full h-auto bg-white px-3.5 py-4 border border-gray-100 shadow-xl rounded-2xl text-center text-[#0A0A0A] leading-5">
					<Users className="text-black w-5 h-5 inline mr-2" /> Share Wishlist
				</div>
			</div>
		</>
	);
};

export const FilterItem = ({
	count,
	title,
	selected,
	setSelected,
	value,
	avatar,
	isCompare,
}: {
	title: string;
	value: string;
	selected: string;
	setSelected: (value: string) => void;
	count: number;
	avatar?: string;
	isCompare?: boolean;
}) => {
	return (
		<div
			className={clsx(
				"h-auto py-2 px-4 text-xs md:text-base text-center flex items-center justify-center gap-2 rounded-xl cursor-pointer transition-colors duration-200 ease-in-out",
				{
					"bg-main-mediterranean-green text-white": value === selected,
					"font-medium": isCompare && value === selected,
					"bg-[#FBFBFB] text-[#828282]": value !== selected && isCompare,
					"bg-[#F3F4F6] text-black": !isCompare && value !== selected,
				}
			)}
			onClick={() => setSelected(value.toLowerCase().replaceAll(" ", "-"))}
		>
			<p className="capitalize">{`${avatar ?? ""} ${title}`}</p>
			{count > 0 && (
				<span
					className={clsx(
						"hidden md:block h-[22px]  rounded-[8px] bg-[#E5E7EB] text-[#898989] border border-[#00000000] text-xs py-0.5 px-2",
						{
							"bg-[#FFFFFF33] text-white": value === selected,
						}
					)}
				>
					{count}
				</span>
			)}
		</div>
	);
};

const ProductCard = ({
	card,
}: {
	card: {
		image: string;
		title: string;
		price: number;
		stores: number;
		discount: number;
	};
}) => {
	return (
		<div className="w-full bg-white px-3.5 py-4 border border-gray-100 shadow-xl rounded-2xl">
			<div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
				{/* Image */}
				<Image
					src={card.image}
					height={140}
					width={140}
					alt={card.title}
					className="object-cover rounded-2xl w-full sm:w-[140px]"
				/>

				{/* Content */}
				<div className="flex flex-col flex-1 gap-3 relative">
					<h4 className="text-base sm:text-lg font-semibold text-main-matte-black">
						{card.title}
					</h4>

					<div className="flex items-center gap-2">
						<span>👤</span>
						<div className="px-3 py-1 rounded-xl border text-sm text-main-bold-gray">
							{card.stores} stores
						</div>
					</div>

					{/* Price + Actions */}
					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
						<div className="flex items-center gap-3">
							<p className="text-lg text-main-mediterranean-green">
								{card.price} SAR
							</p>

							{card.discount && (
								<p className="bg-[#D0FAE5] px-2 py-1 rounded-lg text-xs text-[#3A9A99]">
									<ArrowDown className="inline w-3 h-3 mr-0.5" />
									{card.discount} SAR
								</p>
							)}
						</div>

						<div className="flex items-center gap-3">
							<Link
								href="/en"
								className="w-full sm:w-[182px] h-[42px] px-3 py-2.5 text-center rounded-xl text-white text-sm bg-main-mediterranean-green"
							>
								Compare
							</Link>

							<button className="w-10 h-10 border border-[#F8F8F8] rounded-xl grid place-items-center">
								<Share2 className="w-4 h-4 text-[#666666]" />
							</button>
						</div>
					</div>

					<Trash2 className="absolute top-2 right-2 text-red-600 w-5 h-5" />
				</div>
			</div>
		</div>
	);
};

export default WishlistClient;
