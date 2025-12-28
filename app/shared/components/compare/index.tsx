"use client";
import {
	ArrowLeft,
	CircleCheckBig,
	Gem,
	Heart,
	LucideProps,
	MapPin,
	RotateCcw,
	Share2,
	Shield,
	Star,
	Truck,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { FilterItem } from "@/app/shared/components/wishlist";
import clsx from "clsx";

export interface Benefit {
	icon: React.ForwardRefExoticComponent<
		Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
	>;
	title: string;
	desc: string;
}
export interface CompareCardProps {
	price: number;
	originalPrice?: number;
	currency?: string;
	merchant: string;
	icon: string;
	rating: number;
	reviewCount: number;
	isVerified?: boolean;
	tags: { label: string; variant: "primary" | "secondary" }[];
	benefits: Benefit[];
	onViewDetails?: () => void;
	onBuyNow?: () => void;
	onFavorite?: () => void;
	onShare?: () => void;
}
const compareResultsCards: CompareCardProps[] = [
	{
		price: 4000,
		originalPrice: 5999,
		currency: "SAR",
		merchant: "Noon",
		icon: "/coupons/noon.png",
		rating: 4.7,
		reviewCount: 1823,
		isVerified: true,
		tags: [
			{ label: "Drooby Points", variant: "primary" },
			{ label: "Fast Delivery", variant: "secondary" },
		],
		benefits: [
			{ icon: Truck, title: "Free Shipping", desc: "2-3 days" },
			{ icon: RotateCcw, title: "15-day Returns", desc: "Easy return" },
			{ icon: Shield, title: "12-mo Warranty", desc: "Manufacturer" },
			{ icon: MapPin, title: "Noon", desc: "KSA" },
		],
	},
	{
		price: 4200,
		originalPrice: 5500,
		currency: "SAR",
		merchant: "Amazon",
		icon: "/coupons/noon.png",
		rating: 4.5,
		reviewCount: 3421,
		isVerified: true,
		tags: [],
		benefits: [
			{ icon: Truck, title: "Free Shipping", desc: "1-2 days" },
			{ icon: RotateCcw, title: "30-day Returns", desc: "Free return" },
			{ icon: Shield, title: "24-mo Warranty", desc: "Extended" },
			{ icon: MapPin, title: "Amazon", desc: "UAE" },
		],
	},
	{
		price: 3800,
		originalPrice: 4999,
		currency: "SAR",
		merchant: "Jarir",
		icon: "/coupons/noon.png",
		rating: 4.3,
		reviewCount: 956,
		isVerified: true,
		tags: [],
		benefits: [
			{ icon: Truck, title: "Standard Shipping", desc: "3-5 days" },
			{ icon: RotateCcw, title: "7-day Returns", desc: "Store only" },
			{ icon: Shield, title: "12-mo Warranty", desc: "Manufacturer" },
			{ icon: MapPin, title: "Jarir", desc: "KSA" },
		],
	},
];
const ComparisonResults = () => {
	const storages = ["128GB", "256GB", "512GB", "1TB"];
	const [selectedStorage, setSelectedStorage] = useState("0");
	return (
		<>
			<div className="px-8 pb-6 space-y-3 border-b border-[#E5E7EB]">
				<div className="pl-4 flex items-center justify-between">
					<ArrowLeft className="text-black w-5 h-5" />
					<h3 className="text-[#0A0A0A] leading-6 font-semibold">
						Comparison Results
					</h3>
					<div className="flex items-center gap-x-2">
						<Heart className="w-5 h-5 text-black" />
						<Share2 className="w-5 h-5 text-black" />
					</div>
				</div>
			</div>
			<div className="flex px-8 py-6 gap-6">
				<div className="w-[120px] h-[120px] bg-[#F3F4F6] rounded-2xl relative">
					<Image
						src="/productDetails/iphone2.png"
						fill
						alt="iphone"
						className="object-cover rounded-2xl"
					/>
				</div>
				<div className="flex-1 space-y-3">
					<h2 className="text-lg text-[#0A0A0A] leading-6 capitalize font-semibold">
						iPhone 15 Pro Max
					</h2>
					<p className="text-[#666666]">{`Electronics > Smartphones`}</p>
					<div className="flex items-center gap-x-3">
						{storages.map((storage, i) => (
							<FilterItem
								count={0}
								selected={selectedStorage}
								setSelected={setSelectedStorage}
								title={storage}
								value={String(i)}
								key={i}
								isCompare
							/>
						))}
					</div>
				</div>
			</div>
			<div className="bg-[#F5F5F7] w-full">
				<PriceAnalysis />
				<div className="w-full flex flex-col gap-6 mt-4 px-8">
					{compareResultsCards.map((card, i) => (
						<CompareResultCard {...card} key={i} />
					))}
				</div>
			</div>
		</>
	);
};

const PriceAnalysis = () => {
	return (
		<div className="bg-white p-4 grid grid-cols-3 gap-4 items-center mt-4">
			<div className="flex flex-col items-center justify-center gap-2">
				<h3 className="text-main-bold-gray leading-6">Lowest Price</h3>
				<p className="font-semibold text-[#3C4DF1]">4,799 SAR</p>
			</div>
			<div className="flex flex-col items-center justify-center gap-2">
				<h3 className="text-main-bold-gray leading-6">You Save</h3>
				<p className="font-semibold text-[#009966]">200 SAR</p>
			</div>
			<div className="flex flex-col items-center justify-center gap-2">
				<h3 className="text-main-bold-gray leading-6">Stores</h3>
				<p className="font-semibold text-black">4</p>
			</div>
		</div>
	);
};

const CompareResultCard: React.FC<CompareCardProps> = ({
	price,
	originalPrice,
	currency = "SAR",
	merchant,
	icon,
	rating,
	reviewCount,
	isVerified = true,
	tags,
	benefits,
	onViewDetails,
	onBuyNow,
	onFavorite,
	onShare,
}) => {
	const [isFavorite, setIsFavorite] = useState(false);
	const handleFavorite = () => {
		setIsFavorite(!isFavorite);
		onFavorite?.();
	};
	return (
		<div className="w-full rounded-2xl border bg-white border-[#E5E7EB] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
			{/* Tags Header */}
			<div
				className={clsx("flex items-center justify-between px-4 py-2", {
					"bg-main-mediterranean-green": tags.length,
				})}
			>
				<div className="flex items-center gap-2">
					{tags.map((tag, index) => (
						<span
							key={index}
							className={clsx(
								"flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-md",
								{
									"text-[#0D9488] bg-white": tag.variant === "primary",
									"text-white": tag.variant === "secondary",
								}
							)}
						>
							{tag.variant === "primary" && (
								<Gem className="text-main-mediterranean-green w-3 h-3 inline" />
							)}
							{tag.label}
						</span>
					))}
				</div>
				<button
					onClick={handleFavorite}
					className="p-1.5 rounded-full transition-colors"
				>
					<Heart
						className={clsx("w-5 h-5", {
							"fill-red-500 text-red-500": isFavorite,
							"text-white hover:bg-[#0d948900] rounded-full":
								!isFavorite && tags.length,
							"text-main-mediterranean-green hover:bg-gray-100 rounded-full":
								!isFavorite && !tags.length,
						})}
					/>
				</button>
			</div>
			{/* Merchant Info & Price */}
			<div className="flex items-start justify-between p-4">
				<div className="flex items-start gap-3">
					{/* Merchant Logo */}
					<div className="w-12 h-12 rounded-full overflow-hidden bg-[#1A1A2E] flex items-center justify-center flex-shrink-0">
						<Image
							src={icon}
							width={48}
							height={48}
							className="object-cover"
							alt={merchant}
						/>
					</div>
					{/* Merchant Details */}
					<div className="space-y-1">
						<div className="flex items-center gap-1.5">
							<h3 className="text-base font-semibold text-[#0A0A0A]">
								{merchant}
							</h3>
							{isVerified && (
								<CircleCheckBig className="w-5 h-5 text-[#0D9488]" />
							)}
						</div>
						<div className="flex items-center gap-1">
							<Star className="w-4 h-4 text-[#FBBF24] fill-[#FBBF24]" />
							<span className="text-sm font-medium text-[#0A0A0A]">
								{rating}
							</span>
							<span className="text-sm text-[#6B7280]">
								({reviewCount.toLocaleString()})
							</span>
						</div>
					</div>
				</div>
				{/* Price */}
				<div className="text-right">
					<p className="text-xl font-bold text-[#0D9488]">
						{price.toLocaleString()} {currency}
					</p>
					{originalPrice && (
						<p className="text-sm text-[#9CA3AF] line-through">
							{originalPrice.toLocaleString()} {currency}
						</p>
					)}
				</div>
			</div>
			{/* Benefits Grid */}
			<div className="grid grid-cols-2 gap-x-4 gap-y-3 px-4 pb-4">
				{benefits.map((benefit, index) => (
					<div key={index} className="flex items-start gap-2">
						<benefit.icon className="w-4 h-4 text-[#6B7280] mt-0.5 flex-shrink-0" />
						<div>
							<p className="text-sm font-medium text-[#0A0A0A]">
								{benefit.title}
							</p>
							<p className="text-xs text-[#6B7280]">{benefit.desc}</p>
						</div>
					</div>
				))}
			</div>
			{/* Action Buttons */}
			<div className="flex items-center gap-3 p-4 border-t border-[#E5E7EB]">
				<button
					onClick={onShare}
					className="p-2.5 hover:bg-gray-100 rounded-lg transition-colors border border-[#E5E7EB]"
				>
					<Share2 className="w-5 h-5 text-[#6B7280]" />
				</button>
				<button
					onClick={onViewDetails}
					className="flex-1 py-2.5 px-4 text-sm font-medium text-[#0D9488] bg-white border border-[#0D9488] rounded-2xl cursor-pointer hover:bg-[#0D9488]/5 transition-colors"
				>
					View Details
				</button>
				<button
					onClick={onBuyNow}
					className="flex-1 py-2.5 px-4 text-sm font-medium text-white bg-[#0D9488] rounded-2xl cursor-pointer hover:bg-[#0B8178] transition-colors"
				>
					Buy on Store
				</button>
			</div>
		</div>
	);
};

export default ComparisonResults;
