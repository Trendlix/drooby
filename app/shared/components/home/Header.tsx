import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
	const t = useTranslations();
	return (
		<div className="w-full flex flex-col gap-y-12">
			<div>
				<h1 className="text-[25px] md:text-[36px] text-main-matte-black font-medium leading-10 -tracking-[0.9px]">
					{t("HomePage.title")}
				</h1>
				<p className="mt-3 text-main-bold-gray">
					What would you like to shop for today?
				</p>
			</div>
			<Banner />
		</div>
	);
};

const Banner = () => {
	return (
		<div className="hidden md:flex bg-main-mediterranean-green w-full h-57 rounded-2xl p-8 items-center justify-between">
			<div className="text-white flex flex-col">
				<p className="text-white uppercase text-sm leading-5 tracking-[0.7px]">
					<Sparkles className="inline mr-1 w-4 h-4" /> AI-Powered Search
				</p>
				<h2 className="font-medium text-[24px] leading-8 mt-4.5">
					Start a New Search
				</h2>
				<p className="mt-1 text-sm lg:text-[15px] leading-6 max-w-md lg:max-w-max">{`Tell me what you're looking for, and I'll find the best deals across all stores in the KSA`}</p>
				<Link
					href="/en/chat"
					className="flex items-center gap-x-3 py-2 px-4 max-w-fit text-center capitalize bg-white text-main-mediterranean-green mt-6 rounded-lg text-sm leading-5 font-medium"
				>
					<MessageSquare className="w-4 h-4" />
					start chat
					<ArrowRight className="w-4 h-4" />
				</Link>{" "}
			</div>
			<Image src="/logo2.png" width={115} height={146} alt="drooby logo" />
		</div>
	);
};

export default Header;
