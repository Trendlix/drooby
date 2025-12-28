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
			<div className="px-8 pb-6 space-y-3 border-b border-[#E5E7EB]">
				<div className="pl-4 flex items-center justify-between">
					<ArrowLeft className="text-black w-5 h-5" />
					<h3 className="text-[#0A0A0A] leading-6 font-semibold">Wallet</h3>
					<History className="text-black w-5 h-5" />
				</div>
			</div>
			<div className="px-8 py-6 bg-[#F5F5F7]">
				<Banner />
				<Warning />
				<WalletTransactions />
			</div>
		</>
	);
};

const Banner = () => {
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
				<WalletIcon className="w-8 h-8 text-white" />
			</div>
			<div className="w-full grid grid-cols-3 gap-4 text-white">
				<div className="bg-[#FFFFFF1A] p-3 rounded-2xl space-y-3">
					<h4>Pending</h4>
					<p className="text-xl font-semibold">120 Point</p>
				</div>
				<div className="bg-[#FFFFFF1A] p-3 rounded-2xl space-y-3">
					<h4>Confirmed</h4>
					<p className="text-xl font-semibold">120 Point</p>
				</div>
				<div className="bg-[#FFFFFF1A] p-3 rounded-2xl space-y-3">
					<h4>Paid out</h4>
					<p className="text-xl font-semibold">120 Point</p>
				</div>
			</div>
			<Link
				href="/wallet/redeem-points"
				className="w-full bg-white text-center p-3 text-main-mediterranean-green rounded-2xl"
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
		<div className="w-full h-auto bg-white px-3.5 py-4 border border-gray-100 shadow-xl rounded-2xl">
			<div className="w-full items-stretch flex gap-6">
				<div className="relative">
					<Image
						src={card.image}
						height={138}
						width={200}
						alt={card.title}
						className="object-cover rounded-2xl h-full"
					/>
					<div className="absolute left-2 top-3 text-center py-1 px-3 text-xs rounded-md flex items-center gap-1 bg-[#FEF3C6] text-[#BB4D00]">
						<History className=" w-4 h-4" />
						<p>{card.state}</p>
					</div>
				</div>

				<div className="flex-1 flex flex-col items-start justify-between gap-3 relative">
					<div className="flex-1 space-y-3">
						<h4 className="text-lg text-main-matte-black font-semibold leading-7">
							{card.title}
						</h4>
						<div className="flex flex-row items-center gap-x-2">
							<span className="inline">👤</span>
							<div
								className="px-3 py-1 w-[85px] rounded-xl border-2 border-[#0000001A] text-center text-sm text-main-bold-gray
                        "
							>
								{card.stores} stores
							</div>
						</div>
						<p className="text-main-bold-gray leading-6 text-lg">{card.date}</p>
					</div>
					<div className="w-full flex justify-between border-t border-[#F3F4F6] pt-2">
						<p className="text-[#666] font-semibold">Purchase Amount</p>
						<p className="text-main-mediterranean-green font-bold text-xl leading-5">
							{card.price} SAR
						</p>
					</div>
					<p className="absolute top-2 right-3 text-main-mediterranean-green font-bold text-xl leading-6">
						+ {card.discount} Point
					</p>
				</div>
			</div>
		</div>
	);
};
export default Wallet;
