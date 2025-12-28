"use client";
import { Link } from "@/i18n/routing";
import clsx from "clsx";
import {
	ArrowLeft,
	Gift,
	History,
	Info,
	Wallet as WalletIcon,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
const Wallet = () => {
	return (
		<>
			<div className="px-4 sm:px-8 pb-6 space-y-3 border-b border-[#E5E7EB]">
				<div className="flex items-center justify-between">
					<ArrowLeft className="w-5 h-5" />
					<h3 className="font-semibold">Wallet</h3>
					<History className="w-5 h-5" />
				</div>
			</div>

			<div className="px-4 sm:px-8 py-6 bg-[#F5F5F7]">
				<div className="max-w-screen-lg mx-auto space-y-6">
					<Banner />
					<Warning />
					<WalletTransactions />
				</div>
			</div>
		</>
	);
};

const Banner = () => {
	return (
		<div className="bg-main-mediterranean-green rounded-2xl p-5 sm:p-6 space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<p className="text-white text-sm tracking-wide">Drooby Points</p>
					<h2 className="text-2xl font-bold text-white">450 Point</h2>
				</div>
				<WalletIcon className="w-8 h-8 text-white" />
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-white">
				{["Pending", "Confirmed", "Paid out"].map((label) => (
					<div key={label} className="bg-[#FFFFFF1A] p-3 rounded-xl space-y-1">
						<h4 className="text-sm">{label}</h4>
						<p className="text-lg font-semibold">120 Point</p>
					</div>
				))}
			</div>

			<Link
				href="/wallet/redeem-points"
				className="block w-full bg-white text-center py-3 rounded-xl text-main-mediterranean-green font-medium"
			>
				<Gift className="inline w-5 h-5 mr-1" />
				Redeem
			</Link>
		</div>
	);
};

const Warning = () => {
	return (
		<div className="w-full bg-white border rounded-2xl border-main-mediterranean-green p-4 flex items-center gap-2 mt-6">
			<Info className="w-5 h-5 text-main-mediterranean-green" />
			<p className="text-[#0A0A0A]">
				Drooby points will be confirmed after the store verify it.
			</p>
		</div>
	);
};

const WalletTransactions = () => {
	const filters = [
		{ label: "Pending", value: "pending" },
		{ label: "Active", value: "active" },
		{ label: "Completed", value: "completed" },
	];
	const [selectedFilter, setSelectedFilter] = useState("pending");
	return (
		<div className="w-full mt-4">
			<div className="w-full grid grid-cols-3 gap-2 bg-white p-1 rounded-2xl">
				{filters.map((filter) => (
					<div
						key={filter.value}
						onClick={() => setSelectedFilter(filter.value)}
						className={clsx(
							"text-center py-2 rounded-2xl cursor-pointer transition-colors",
							selectedFilter === filter.value
								? "bg-[#FEF3C6] text-[#BB4D00]"
								: "text-[#6B7280] hover:bg-gray-100"
						)}
					>
						{filter.label}
					</div>
				))}
			</div>
			<div className="flex flex-col mt-6 gap-5">
				<ProductCard
					card={{
						discount: 112,
						image: "/wishlist/sneaker2.png",
						price: 1211,
						stores: 7,
						title: "Adidas F50 Boots",
						date: "Est. 2025-11-30",
						state: selectedFilter,
					}}
				/>
				<ProductCard
					card={{
						discount: 112,
						image: "/wishlist/sneaker2.png",
						price: 1211,
						stores: 7,
						title: "Adidas F50 Boots",
						date: "Est. 2025-11-30",
						state: selectedFilter,
					}}
				/>
			</div>
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
		date: string;
		state: string;
	};
}) => {
	return (
		<div className="bg-white p-4 rounded-2xl shadow border border-[#E5E7EB]">
			<div className="flex flex-col sm:flex-row gap-4">
				<div className="relative w-full sm:w-[180px]">
					<Image
						src={card.image}
						width={300}
						height={200}
						alt={card.title}
						className="rounded-xl object-cover w-full h-[160px] sm:h-full"
					/>
					<span className="absolute top-2 left-2 bg-[#FEF3C6] text-[#BB4D00] text-xs px-2 py-1 rounded-md flex items-center gap-1">
						<History className="w-3 h-3" />
						{card.state}
					</span>
				</div>

				<div className="flex-1 flex flex-col justify-between gap-3">
					<div className="space-y-2">
						<h4 className="font-semibold text-lg">{card.title}</h4>

						<div className="flex items-center gap-2 text-sm">
							<span>👤</span>
							<span className="border border-[#E5E7EB] px-2 py-0.5 rounded-lg">
								{card.stores} stores
							</span>
						</div>

						<p className="text-gray-500 text-sm">{card.date}</p>
					</div>

					<div className="flex justify-between items-center border-t border-t-[#E5E7EB] pt-3">
						<p className="text-sm text-gray-500">Purchase Amount</p>
						<p className="font-bold text-main-mediterranean-green">
							{card.price} SAR
						</p>
					</div>

					<p className="self-end font-bold text-main-mediterranean-green">
						+ {card.discount} Point
					</p>
				</div>
			</div>
		</div>
	);
};

export default Wallet;
