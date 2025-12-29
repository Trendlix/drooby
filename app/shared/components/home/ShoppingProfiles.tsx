import { ArrowRight } from "lucide-react";
import Link from "next/link";
import DragScrollRow from "../layout/DragScrollRow";

export const profiles = [
	{
		avatar: "🧝‍♀️",
		bgColor: "linear-gradient(135deg, #FB64B6 0%, #FF637E 100%)",
		title: "Mother",
		wishlist: 2,
		orders: 2,
	},
	{
		avatar: "👤",
		bgColor: "linear-gradient(135deg, #51A2FF 0%, #00D3F2 100%)",
		title: "Me",
		wishlist: 5,
		orders: 8,
	},
	{
		avatar: "👧",
		bgColor: "linear-gradient(135deg, #C27AFF 0%, #A684FF 100%)",
		title: "Mariam",
		wishlist: 7,
		orders: 3,
	},
];
const ShoppingProfiles = () => {
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
				{profiles.map((profile, i) => (
					<ProfileCard profile={profile} key={i} />
				))}
			</DragScrollRow>
		</div>
	);
};

const ProfileCard = ({
	profile,
}: {
	profile: {
		avatar: string;
		bgColor: string;
		title: string;
		wishlist: number;
		orders: number;
	};
}) => {
	return (
		<div className="w-[369px] 2xl:w-full bg-white px-6 py-6 border border-gray-100 shadow-xl rounded-2xl">
			<div className="w-full flex gap-5 items-center">
				<div
					className="w-14 h-14 grid place-items-center rounded-2xl"
					style={{
						background: profile.bgColor,
						boxShadow:
							"0 10px 15px -3px rgba(0, 0, 0, 0.10), 0 4px 6px -4px rgba(0, 0, 0, 0.10)",
					}}
				>
					<span className="text-[30px]">{profile.avatar}</span>
				</div>
				<div className="space-y-0.5 flex flex-col items-start flex-1">
					<h4 className="text-lg text-main-matte-black font-semibold leading-7">
						{profile.title}
					</h4>
					<p className="text-sm text-main-bold-gray">
						{profile.wishlist} wishlist . {profile.orders} Orders
					</p>
				</div>
				<div
					className="w-12.5 h-12.5 rounded-full bg-main-mediterranean-green grid place-items-center"
					style={{
						background: "linear-gradient(180deg, #3A9A99 0%, #2D7A79 100%)",
						boxShadow:
							"0 10px 15px -3px rgba(0, 0, 0, 0.10), 0 4px 6px -4px rgba(0, 0, 0, 0.10",
					}}
				>
					<ArrowRight className="text-white w-5 h-5" />
				</div>
			</div>
		</div>
	);
};

export default ShoppingProfiles;
