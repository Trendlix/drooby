import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import DragScrollRow from "../layout/DragScrollRow";

export const savedChatsItems = [
	{
		name: "Black Shirt",
		description:
			"Shirt that fits perfectly with white pants and classic jeans.",
		link: "/en/chat",
	},
	{
		name: "Summer Dress",
		description: "Lightweight dress perfect for warm days and casual outings.",
		link: "/en/chat",
	},
	{
		name: "Casual Sneakers",
		description: "Comfortable sneakers designed for everyday urban lifestyle.",
		link: "/en",
	},
	{
		name: "Denim Jacket",
		description: "Stylish denim jacket that adds a bold layer to any outfit.",
		link: "/en/chat",
	},
	{
		name: "White T-Shirt",
		description: "Minimal and versatile white t-shirt made from soft cotton.",
		link: "/en/chat",
	},
	{
		name: "Leather Bag",
		description: "Premium leather bag suitable for work, travel, and weekends.",
		link: "/en/chat",
	},
	{
		name: "Sport Watch",
		description: "Durable watch with modern design and water resistance.",
		link: "/en/chat",
	},
	{
		name: "Slim Jeans",
		description: "Slim-fit jeans that balance comfort and modern style.",
		link: "/en/chat",
	},
	{
		name: "Hoodie",
		description:
			"Soft hoodie designed to keep you warm without sacrificing style.",
		link: "/en",
	},
];

const SavedChats = () => {
	return (
		<div className="w-full">
			<div className="w-full flex items-center justify-between">
				<h2 className="font-medium text-xl md:text-[24px] leading-8">
					Shopping Profiles
				</h2>
				<Link
					href="/en"
					className="text-main-mediterranean-green text-sm capitalize"
				>
					view all
					<ArrowRight className="w-4 h-4 inline ml-1" />
				</Link>
			</div>
			<DragScrollRow className="mt-6 grid grid-flow-col 2xl:grid-cols-3 gap-5 cursor-grab 2xl:cursor-auto">
				{savedChatsItems.map((chat, i) => (
					<ChatCard {...chat} key={i} />
				))}
			</DragScrollRow>
		</div>
	);
};

export const ChatCard = ({
	name,
	description,
	link,
	className,
	isHistory = false,
}: {
	name: string;
	description: string;
	link: string;
	className?: string;
	isHistory?: boolean;
}) => {
	return (
		<div
			className={clsx(
				"w-[150px] bg-[#F5F5F7] rounded-3xl pt-7.5 pb-3 px-4 flex flex-col items-center justify-between gap-y-6",
				className
			)}
		>
			<div
				className={clsx("w-full", {
					"text-left": isHistory,
					"text-center": !isHistory,
				})}
			>
				<p className="text-[#0A0A0A] font-semibold">{name}</p>
				<p
					className="text-[#9D9D9D] text-xs font-medium mt-2
                      line-clamp-2"
				>
					{description}
				</p>
			</div>

			<Link
				href={link ?? "/en"}
				className="w-9 h-9 rounded-full bg-main-mediterranean-green
                   grid place-items-center"
			>
				<ArrowRight className="text-white w-4 h-4" />
			</Link>
		</div>
	);
};
export default SavedChats;
