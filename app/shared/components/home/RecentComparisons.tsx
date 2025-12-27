import { ArrowRight, Heart, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const comparisonCards = [
	{
		image: "/home/shirt1.jpg",
		stores: 2,
		price: 122,
		title: "Women's Twill Cotton Half",
	},
	{
		image: "/home/shirt2.png",
		stores: 4,
		price: 4799,
		title: "Classic Linen Button Shirt",
	},
	{
		image: "/home/shirt3.png",
		stores: 5,
		price: 4799,
		title: "Oversized Casual Denim Shirt",
	},
];

const RecentComparisons = () => {
	return (
		<div className="w-full">
			<div className="w-full flex justify-between">
				<h2 className="font-medium text-[24px] leading-8">
					Recent Comparisons
				</h2>
				<Link
					href="/en"
					className="text-main-mediterranean-green text-sm capitalize"
				>
					view all
					<ArrowRight className="w-4 h-4 inline ml-1" />
				</Link>
			</div>
			<div className="w-full mt-6 grid grid-cols-3 gap-5">
				{comparisonCards.map((card, i) => (
					<ComparisonCard card={card} key={i} />
				))}
			</div>
		</div>
	);
};

const ComparisonCard = ({
	card,
}: {
	card: {
		image: string;
		title: string;
		price: number;
		stores: number;
	};
}) => {
	return (
		<div className="w-full h-auto bg-white px-3.5 py-4 border border-gray-100 shadow-xl rounded-2xl">
			<div className="w-full flex gap-3 items-center">
				<Image
					src={card.image}
					height={138}
					width={100}
					alt={card.title}
					className="object-cover rounded-2xl"
				/>

				<div className="w-full h-full">
					<div className="flex flex-col items-start flex-1 gap-3">
						<h4 className="text-lg text-main-matte-black font-semibold leading-7">
							{card.title}
						</h4>
						<p className="text-xl font-semibold text-main-mediterranean-green leading-6">
							{card.price} SAR
						</p>
						<div
							className="px-3 py-1 w-[85px] rounded-xl border-2 border-[#0000001A] text-center text-sm text-main-bold-gray
                        "
						>
							{card.stores} stores
						</div>
						<div
							className="w-full flex justify-between py-3
                    "
						>
							<div className="flex-1">
								<Link
									href="/en"
									className="px-4 py-3 text-center rounded-xl text-white text-sm font-medium leading-5 bg-main-mediterranean-green"
								>
									View Comparison
								</Link>
							</div>
							<div className="flex items-center gap-x-2">
								<Heart className="w-6 h-6" />
								<Share2 className="w-6 h-6" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecentComparisons;
