import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const categoryCards = [
	{
		name: "Sneakers",
		image: "/home/shirt4.jpg",
		link: "/en",
	},
	{
		name: "Running Shoes",
		image: "/home/shirt5.jpg",
		link: "/en",
	},
	{
		name: "Sports Shoes",
		image: "/home/shirt6.jpg",
		link: "/en-shirts",
	},
	{
		name: "Sports Shoes",
		image: "/home/shirt7.jpg",
		link: "/en",
	},
	{
		name: "Sports Shoes",
		image: "/home/scarf.jpg",
		link: "/en",
	},
	{
		name: "Jeans",
		image: "/home/jacket.jpg",
		link: "/en",
	},
];

const RecentlyViewed = () => {
	return (
		<div className="w-full">
			<div className="w-full flex justify-between">
				<h2 className="font-medium text-[24px] leading-8">Recently Viewed</h2>
				<Link
					href="/en"
					className="text-main-mediterranean-green text-sm capitalize"
				>
					view all
					<ArrowRight className="w-4 h-4 inline ml-1" />
				</Link>
			</div>
			<div className="w-full mt-6 grid grid-cols-6 gap-4">
				{categoryCards.map((category, i) => (
					<CategoryCard category={category} key={i} />
				))}
			</div>
		</div>
	);
};

const CategoryCard = ({
	category,
}: {
	category: { image: string; name: string; link: string };
}) => {
	return (
		<div className="w-full">
			<div className="w-full h-43 relative">
				<Image
					src={category.image}
					fill
					alt="shirt"
					className="object-cover rounded-2xl"
				/>
				<div className="w-full h-full absolute inset-0 flex justify-center items-center">
					<Link
						href={category.link ?? "/en"}
						className="w-9 h-9 rounded-full bg-white grid place-items-center"
					>
						<ArrowRight className="text-main-mediterranean-green w-4 h-4" />
					</Link>
				</div>
			</div>
			<h3 className="text-[#484848] font-medium leading-6 mt-3">
				{category.name}
			</h3>
		</div>
	);
};

export default RecentlyViewed;
