"use client";
import clsx from "clsx";
import {
	ArrowLeft,
	Gift,
	Heart,
	LucideProps,
	Percent,
	Wallet,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { FilterItem } from "../../wishlist";
import { useRouter } from "next/navigation";

const redeemCards = [
	{
		title: "100 SAR OFF",
		merchant: "Noon.sa",
		description: "Get 100 SAR off on orders above 500 SAR",
		points: 200,
		isFeatured: true,
		icon: "/coupons/noon.png",
		labelBg: "#F3E8FF",
		labelColor: "#8200DB",
		label: "Discount",
		labelIcon: Percent,
	},
	{
		title: "50 SAR OFF",
		merchant: "Amazon.sa",
		description: "Free standard shipping on any order",
		points: 120,
		isFeatured: false,
		icon: "/coupons/noon.png",
		labelBg: "#DBEAFE",
		labelColor: "#1447E6",
		label: "Free Shipping",
		labelIcon: Gift,
	},
];
const RedeemPoints = () => {
	const router = useRouter();
	return (
		<>
			<div className="px-8 pb-8 space-y-8 border-b border-[#E5E7EB]">
				<div className="pl-4 flex items-center justify-between">
					<ArrowLeft
						className="text-black w-5 h-5 cursor-pointer"
						onClick={() => router.back()}
					/>
					<h3 className="text-[#0A0A0A] leading-6 font-semibold">
						Redeem Points
					</h3>
					<div className="flex items-center gap-x-2 opacity-0">
						<Heart className="w-5 h-5 text-black" />
					</div>
				</div>
				<PointsBanner />
			</div>
			<div className="bg-[#F2F2F4] px-8 py-7">
				<div className="flex flex-col gap-3">
					{redeemCards.map((card, i) => (
						<RedeemCard key={i} card={{ ...card, actionLabel: "Redeem" }} />
					))}
				</div>
				<Offers />
			</div>
		</>
	);
};

const PointsBanner = () => {
	return (
		<div className="bg-main-mediterranean-green w-full h-auto flex flex-col gap-y-[48px] rounded-2xl p-6">
			<div className="flex items-center justify-between">
				<div className="space-y-2">
					<p className="text-white capitalize text-sm leading-5 tracking-[0.7px]">
						Drooby Points
					</p>
					<h2 className="font-bold text-[24px] leading-8 mt-2 text-white leading-6">
						450 Point
					</h2>
				</div>
				<Wallet className="w-8 h-8 text-white" />
			</div>
		</div>
	);
};

type RedeemCardProps = {
	title: string;
	merchant: string;
	description: string;
	points: number;
	isFeatured?: boolean;
	actionLabel?: string;
	icon: string;
	labelBg: string;
	labelColor: string;
	label: string;
	labelIcon: React.ForwardRefExoticComponent<
		Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
	>;
};

const RedeemCard = ({ card }: { card: RedeemCardProps }) => {
	return (
		<div
			className={clsx(
				"w-full rounded-2xl border px-4 py-3 flex items-center justify-between gap-4 bg-[#FFFBEB] border-[#FDE68A] relative"
			)}
		>
			<div className="w-full flex items-start gap-3">
				<Image
					src={card.icon}
					width={25}
					height={25}
					className="rounded-full object-cover"
					alt={card.merchant}
				/>

				<div className="space-y-2 flex-1">
					<div className="flex items-center gap-2">
						<p className="text-sm font-semibold text-[#0A0A0A]">{card.title}</p>

						<span
							className="text-xs px-2 py-1 rounded-md uppercase flex items-center"
							style={{ backgroundColor: card.labelBg, color: card.labelColor }}
						>
							<card.labelIcon className="w-3 h-3 inline mr-1" />
							<span>{card.label}</span>
						</span>

						{card.isFeatured && (
							<span className="text-xs px-2 py-0.5 rounded-lg bg-[#F59E0B] text-white absolute top-3 right-4">
								Featured
							</span>
						)}
					</div>
					<p className="text-xs text-[#6B7280]">{card.merchant}</p>
					<p className="text-xs text-[#6B7280]">{card.description}</p>

					<div className="flex justify-between mt-6 pt-2 border-t border-t-[#E5E7EB] items-center">
						<div>
							<div className="text-base mt-1">
								<p className="text-[#6B7280]">Points Required</p>{" "}
								<p className="text-main-mediterranean-green font-semibold">
									{card.points} Points
								</p>
							</div>
						</div>
						<button className="h-8 px-4 rounded-lg text-xs font-medium bg-main-mediterranean-green text-white hover:opacity-90">
							{card.actionLabel}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

const Offers = () => {
	const [selectedFilter, setSelectedFilter] = useState("all-offers");
	return (
		<div className="mt-6 flex flex-col gap-6">
			<div className="w-full flex items-center gap-3">
				{["All Offers", "Discounts", "Free Shipping"].map((filter, i) => (
					<FilterItem
						count={0}
						selected={selectedFilter}
						setSelected={setSelectedFilter}
						title={filter}
						value={filter.replaceAll(" ", "-").toLowerCase()}
						isCompare
						key={i}
					/>
				))}
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
				{[...redeemCards, ...redeemCards].map((card, i) => (
					<OfferCard card={{ ...card, actionLabel: "Redeem" }} key={i} />
				))}
			</div>
		</div>
	);
};

const OfferCard = ({ card }: { card: RedeemCardProps }) => {
	return (
		<div
			className={clsx(
				"w-full rounded-2xl border border-[#0000001A] px-4 py-3 flex items-center justify-between gap-4 bg-white"
			)}
		>
			<div className="w-full flex items-start gap-3">
				<Image
					src={card.icon}
					width={25}
					height={25}
					className="rounded-full object-cover"
					alt={card.merchant}
				/>

				<div className="space-y-2 flex-1">
					<p className="text-sm font-semibold text-[#0A0A0A]">{card.title}</p>
					<p className="text-xs text-[#6B7280]">{card.merchant}</p>
					<p className="text-xs text-[#6B7280]">{card.description}</p>

					<span
						className="w-fit text-xs px-2 py-1 rounded-md uppercase flex items-center"
						style={{ backgroundColor: card.labelBg, color: card.labelColor }}
					>
						<card.labelIcon className="w-3 h-3 inline mr-1" />
						<span>{card.label}</span>
					</span>
					<span className="text-xs text-[#6B7280]">Min. purchase: 300 SAR</span>

					<div className="flex justify-between mt-3 pt-2 border-t border-t-[#E5E7EB] items-center">
						<div>
							<div className="text-base mt-1">
								<p className="text-[#6B7280]">Points Required</p>{" "}
								<p className="text-main-mediterranean-green font-semibold">
									{card.points} Points
								</p>
							</div>
						</div>
						<button className="h-8 px-4 rounded-lg text-xs font-medium bg-main-mediterranean-green text-white hover:opacity-90">
							{card.actionLabel}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RedeemPoints;
