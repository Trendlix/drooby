"use client";
import { ArrowLeft, Copy, Search, Tag } from "lucide-react";
import React, { useMemo, useState } from "react";
import { FilterItem } from "../wishlist";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CouponsClient = () => {
	const router = useRouter();
	const coupons = [
		{
			discount: 100,
			code: "WELCOME100",
			description: "Welcome bonus on first purchase",
			merchant: "Noon.sa",
			icon: "/coupons/noon.png",
			isActive: true,
		},
		{
			discount: 300,
			code: "WELCOME300",
			description: "Welcome bonus on first purchase",
			merchant: "Noon.sa",
			icon: "/coupons/noon.png",
			isActive: true,
		},
		{
			discount: 500,
			code: "WELCOME500",
			description: "Welcome bonus on first purchase",
			merchant: "Noon.sa",
			icon: "/coupons/noon.png",
			isActive: false,
		},
	];
	const [filter, setFilter] = useState("all");

	const filteredCoupons = useMemo(() => {
		if (filter === "all") return coupons;
		if (filter === "active") return coupons.filter((c) => c.isActive);
		if (filter === "used") return coupons.filter((c) => !c.isActive);
		return coupons;
	}, [filter]);

	return (
		<>
			<div className="px-8 py-3 space-y-3">
				<div className="pl-4 flex items-center justify-between">
					<ArrowLeft
						className="text-black w-5 h-5 cursor-pointer"
						onClick={() => router.back()}
					/>
					<h3 className="text-[#0A0A0A] leading-6">Coupons</h3>
					<Search className="w-5 h-5 text-black" />
				</div>
			</div>
			<div className="px-8 py-4 w-full flex items-center gap-2 border-b border-[#E5E7EB]">
				<FilterItem
					count={coupons.length}
					title="All Coupons"
					selected={filter}
					setSelected={setFilter}
					value="all"
				/>
				<FilterItem
					count={coupons.filter((c) => c.isActive).length}
					title="Active"
					selected={filter}
					setSelected={setFilter}
					value="active"
				/>
				<FilterItem
					count={coupons.filter((c) => !c.isActive).length}
					title="Used"
					selected={filter}
					setSelected={setFilter}
					value="used"
				/>
			</div>
			<div className="px-8 pb-12 w-full flex-1 flex flex-col gap-3 pt-4 bg-[#F5F5F7]">
				{filteredCoupons.map((coupon, i) => (
					<CouponCard
						key={i}
						code={coupon.code}
						description={coupon.description}
						discount={coupon.discount}
						icon={coupon.icon}
						isActive={coupon.isActive}
						merchant={coupon.merchant}
					/>
				))}
				<div className="w-full h-auto bg-white px-3.5 py-4 border border-gray-100 shadow-xl rounded-2xl text-center text-[#0A0A0A] leading-5">
					<Tag className="text-black w-5 h-5 inline mr-2" /> Enter Coupon Code
				</div>
			</div>
		</>
	);
};

const CouponCard = ({
	code,
	description,
	icon,
	isActive,
	discount,
	merchant,
}: {
	discount: number;
	code: string;
	description: string;
	merchant: string;
	icon: string;
	isActive: boolean;
}) => {
	const handleCopy = async () => {
		await navigator.clipboard.writeText(code);
	};

	return (
		<div
			className={clsx(
				"w-full rounded-2xl border space-y-5 transition-opacity bg-white border-[#E5E7EB]"
			)}
		>
			<div
				className={clsx("flex items-center gap-2 p-4 rounded-t-2xl relative", {
					"bg-[#636363]": !isActive,
					"bg-[#F9FAFB] ": isActive,
				})}
			>
				<Image
					src={icon}
					width={25}
					height={25}
					className="rounded-full object-cover"
					alt={merchant}
				/>
				<p
					className={clsx("text-sm font-medium ", {
						"text-[#0A0A0A]": isActive,
						"text-white ": !isActive,
					})}
				>
					{merchant}
				</p>
				{!isActive && (
					<p className="absolute right-6 top-4 text-xs w-[50px] h-[25px] py-1 px-2 text-center bg-white text-[#364153] border border-[#00000000] rounded-[8px]">
						Used
					</p>
				)}
			</div>

			<div className="p-4 space-y-5">
				<p className="text-main-mediterranean-green font-semibold text-lg">
					{discount} SAR OFF
				</p>

				<p className="text-[#6B7280]">{description}</p>

				<div className="flex items-center justify-between rounded-xl border border-main-mediterranean-green bg-[#F0FDFA] p-4">
					<div className="space-y-2">
						<p className="text-[#6B7280] text-sm">Coupon Code</p>
						<p className="text-main-mediterranean-green font-semibold truncate">
							{code}
						</p>
					</div>

					<button
						onClick={handleCopy}
						className="flex items-center gap-1 text-xs text-main-mediterranean-green hover:opacity-80 cursor-pointer bg-white px-4 py-2 rounded-[8px] border border-main-mediterranean-green"
					>
						<Copy className="w-3.5 h-3.5" />
						Copy
					</button>
				</div>
				<Link
					href="/en"
					className="underline text-main-mediterranean-green text-sm px-3"
				>
					View Details
				</Link>
			</div>
		</div>
	);
};

export default CouponsClient;
