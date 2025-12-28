"use client";
import clsx from "clsx";
import {
	ArrowLeft,
	CircleCheckBig,
	Heart,
	RotateCcw,
	Share2,
	Shield,
	Star,
	Truck,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const ProductDetails = () => {
	const productImgs = [
		"/productDetails/iphone1.png",
		"/productDetails/iphone2.png",
		"/productDetails/iphone3.png",
	];
	const [selectedImg, setSelectedImg] = useState(1);
	return (
		<>
			<div className="px-8 pb-6 space-y-3 border-b border-[#E5E7EB]">
				<div className="pl-4 flex items-center justify-between">
					<ArrowLeft className="text-black w-5 h-5" />
					<h3 className="text-[#0A0A0A] leading-6 font-semibold">
						IPhone 16 - Product Details
					</h3>
					<div className="flex items-center gap-x-2">
						<Heart className="w-5 h-5 text-black" />
						<Share2 className="w-5 h-5 text-black" />
					</div>
				</div>
			</div>
			<ProductImages
				productImgs={productImgs}
				selectedImg={selectedImg}
				setSelectedImg={setSelectedImg}
			/>
			<ProductSpecifications />
			<ProductActions />
		</>
	);
};

const ProductImages = ({
	selectedImg,
	productImgs,
	setSelectedImg,
}: {
	selectedImg: number;
	productImgs: string[];
	setSelectedImg: (i: number) => void;
}) => {
	return (
		<div className="px-8 pb-8 w-full bg-[#F3F4F6] flex flex-col gap-3">
			<div className="flex items-center justify-center">
				<Image
					src={productImgs[selectedImg]}
					width={414}
					height={376}
					alt=""
					className="object-cover"
				/>
			</div>
			<div className="flex items-center gap-x-3">
				{productImgs.map((img, i) => (
					<div
						key={i}
						className={clsx(
							"w-22.5 h-22.5 relative rounded-2xl cursor-pointer bg-white border-2 transition-all duration-300 ease-in-out",
							{
								" border-main-mediterranean-green": i === selectedImg,
								"border-[#E5E7EB]": i !== selectedImg,
							}
						)}
						onClick={() => setSelectedImg(i)}
					>
						<Image
							src={img}
							fill
							className="object-over rounded-2xl"
							alt="product-img"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

const ProductSpecifications = () => {
	const benefits = [
		{
			icon: Truck,
			title: "Free Shipping",
			desc: "1-2 days",
		},
		{
			icon: RotateCcw,
			title: "30-day Returns",
			desc: "Easy return",
		},
		{
			icon: Shield,
			title: "24-mo Warranty",
			desc: "Manufacturer",
		},
		{
			icon: CircleCheckBig,
			title: "Verified Seller",
			desc: "Amazon",
		},
	];
	return (
		<div className="px-4 sm:px-8 py-4 flex flex-col gap-y-4">
			{/* Title + Rating */}
			<div className="space-y-2">
				<h2 className="text-[22px] sm:text-[25px] text-[#0A0A0A] leading-tight capitalize font-semibold break-words">
					iPhone 15 Pro Max
				</h2>

				<div className="flex flex-wrap items-center gap-x-2 gap-y-1 leading-6">
					<Star className="fill-[#FFB900] text-white w-5 h-5 sm:w-6 sm:h-6" />
					<p className="text-[#0A0A0A] text-sm sm:text-base">4.8</p>
					<p className="text-[#666666] text-sm sm:text-base">(2341 reviews)</p>
				</div>
			</div>

			{/* Price */}
			<div className="flex flex-wrap items-center gap-x-3 gap-y-2">
				<p className="text-lg sm:text-xl font-semibold text-main-mediterranean-green leading-6">
					4,799 SAR
				</p>

				<p className="line-through text-sm sm:text-base text-[#666666] font-medium">
					4,999 SAR
				</p>

				<p className="bg-[#D0FAE5] py-1.5 px-2 rounded-lg text-xs sm:text-sm text-[#007A55] leading-4 capitalize">
					save 200 SAR
				</p>
			</div>

			{/* Benefits */}
			<div className="grid grid-cols-2 gap-3 mt-3">
				{benefits.map((benefit, i) => (
					<div key={i} className="flex items-start gap-x-2 leading-6">
						<benefit.icon className="w-5 h-5 text-main-mediterranean-green shrink-0 mt-0.5" />

						<div className="space-y-1">
							<p className="text-sm sm:text-base text-[#0A0A0A]">
								{benefit.title}
							</p>
							<p className="text-sm sm:text-base text-[#666666]">
								{benefit.desc}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

const ProductActions = () => {
	return (
		<div className="px-8 py-3 flex items-center gap-x-3 border-t border-[#E5E7EB]">
			<button className="cursor-pointer w-[54px] h-[51px] border border-[#00000057] rounded-2xl grid place-items-center">
				<Share2 className="w-4 h-4 text-[#666666]" />
			</button>
			<button className="cursor-pointer flex-1 bg-main-mediterranean-green text-center h-full rounded-2xl text-white">
				Buy on Store
			</button>
			<button className="cursor-pointer w-[54px] h-[51px] border border-[#00000057] rounded-2xl grid place-items-center">
				<Heart className="w-4 h-4 text-[#666666]" />
			</button>
		</div>
	);
};

export default ProductDetails;
