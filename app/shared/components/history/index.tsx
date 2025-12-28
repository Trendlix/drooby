import { ArrowLeft, Heart } from "lucide-react";
import { ChatCard, savedChatsItems } from "../home/SavedChats";

const History = () => {
	const historyChats = [
		{
			date: "Monday : 20th Oct 2025",
			chats: savedChatsItems,
		},
		{
			date: "Monday : 20th Oct 2025",
			chats: savedChatsItems,
		},
		{
			date: "Monday : 20th Oct 2025",
			chats: savedChatsItems,
		},
		{
			date: "Monday : 20th Oct 2025",
			chats: savedChatsItems,
		},
		{
			date: "Monday : 20th Oct 2025",
			chats: savedChatsItems,
		},
		{
			date: "Monday : 20th Oct 2025",
			chats: savedChatsItems,
		},
		{
			date: "Monday : 20th Oct 2025",
			chats: savedChatsItems,
		},
	];
	return (
		<>
			<div className="px-8 pb-6 space-y-3 border-b border-[#E5E7EB]">
				<div className="pl-4 flex items-center justify-between">
					<ArrowLeft className="text-black w-5 h-5" />
					<h3 className="text-[#0A0A0A] leading-6 font-semibold">History</h3>
					<div className="flex items-center gap-x-2 opacity-0">
						<Heart className="w-5 h-5 text-black" />
					</div>
				</div>
			</div>
			<div className="px-8 py-7 bg-[#F4F4F6] flex flex-col gap-[46px]">
				{historyChats.map((item, i) => (
					<div key={i} className="w-full">
						<h3 className="text-[#17171787] leading-7 font-semibold">
							{item.date}
						</h3>
						<div className="w-full mt-1 pb-3 no-scrollbar grid grid-flow-col gap-5 overflow-x-auto">
							{savedChatsItems.map((chat, i) => (
								<ChatCard
									{...chat}
									key={i}
									className="bg-white w-[249px] justify-normal items-start"
									isHistory
								/>
							))}
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default History;
