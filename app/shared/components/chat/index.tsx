"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Message } from "@/app/shared/types/chat";
import { ChatMessage } from "@/app/shared/components/chat/ChatMessage";
import { ChatInput } from "@/app/shared/components/chat/ChatInput";
import Logo from "../ui/Logo";
import FeatureCard from "./FeatureCard";
import {
	ShoppingBag,
	Tag,
	TrendingUp,
	Package,
	Heart,
	Share,
	Share2,
} from "lucide-react";

// Fixed reply message
const FIXED_REPLY = `Hello! I'm an AI assistant. This is a demo response with a typing effect. I can help you with various tasks, answer questions, and have conversations. Feel free to ask me anything!`;

const generateId = () => Math.random().toString(36).substring(2, 9);

export const features = [
	{
		icon: ShoppingBag,
		bgColor: "linear-gradient(135deg, #8E51FF 0%, #AD46FF 100%)",
		title: "Find Products",
		description: "Search across multiple stores",
	},
	{
		icon: Tag,
		bgColor: "linear-gradient(135deg, #00B8DB 0%, #2B7FFF 100%)",
		title: "Compare Prices",
		description: "Get the best price comparison",
	},
	{
		icon: TrendingUp,
		bgColor: "linear-gradient(135deg, #FF6900 0%, #FB2C36 100%)",
		title: "Trending Deals",
		description: "See what's hot right now",
	},
	{
		icon: Package,
		bgColor: "linear-gradient(135deg, #00BC7D 0%, #00BBA7 100%)",
		title: "Track Orders",
		description: "Check your order status",
	},
];

const actions = [
	{
		icon: Heart,
		label: "My Wishlist",
	},
	{
		icon: TrendingUp,
		label: "Wallet & Points",
	},
	{
		icon: Share2,
		label: "Shopping for Others",
	},
];
export default function ClientChatPage() {
	const [messages, setMessages] = useState<Message[]>([]);
	const [isTyping, setIsTyping] = useState(false);
	const messagesEndRef = useRef<HTMLDivElement>(null);

	const scrollToBottom = useCallback(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, []);

	useEffect(() => {
		scrollToBottom();
	}, [messages, scrollToBottom]);

	const handleSendMessage = (content: string) => {
		const userMessage: Message = {
			id: generateId(),
			role: "user",
			content,
		};

		setMessages((prev) => [...prev, userMessage]);
		setIsTyping(true);

		setTimeout(() => {
			const assistantMessage: Message = {
				id: generateId(),
				role: "assistant",
				content: FIXED_REPLY,
				isTyping: true,
			};
			setMessages((prev) => [...prev, assistantMessage]);
		}, 500);
	};

	const handleTypingComplete = useCallback(() => {
		setIsTyping(false);
		setMessages((prev) =>
			prev.map((msg, idx) =>
				idx === prev.length - 1 ? { ...msg, isTyping: false } : msg
			)
		);
	}, []);

	return (
		<div
			className="flex flex-col dark:bg-gray-900 h-full"
			style={{
				background: "linear-gradient(135deg, #FFF 0%, #F9FAFB 50%, #FFF 100%)",
			}}
		>
			<main className="h-full flex-1 overflow-y-auto">
				<div className="h-full max-w-4xl mx-auto">
					{messages.length === 0 ? (
						<div className="flex flex-col items-center justify-center h-full text-center pt-16 pb-5">
							<>
								<Logo />
								<h2 className="text-[48px] font-semibold text-main-matte-black dark:text-white mt-8 leading-12 -tracking-[1.2px]">
									{`Hello! I'm`}{" "}
									<span className="text-main-mediterranean-green">Drooby</span>
								</h2>
								<p className="text-main-bold-gray dark:text-gray-400 max-w-2xl leading-6.5 mt-7 px-4">
									{`Your AI shopping assistant, tailored just for you. Find the best deals across all major stores in seconds.`}
								</p>
							</>
							<div className="flex-1">
								<div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
									{features.map((feature, i) => (
										<FeatureCard feature={feature} key={i} />
									))}
								</div>
							</div>
							<div className="hidden md:flex items-center gap-3">
								{actions.map(({ icon: Icon, label }, index) => (
									<button
										key={index}
										className="flex items-center gap-3.5 px-4 py-2 border-2 border-[#0000001A] rounded-full hover:bg-black/5 transition cursor-pointer"
									>
										<Icon className="w-4 h-4" />
										<span className="text-sm text-[#0A0A0A] leading-5">
											{label}
										</span>
									</button>
								))}
							</div>
						</div>
					) : (
						messages.map((message, index) => (
							<ChatMessage
								key={message.id}
								message={message}
								onTypingComplete={
									index === messages.length - 1 && message.role === "assistant"
										? handleTypingComplete
										: undefined
								}
							/>
						))
					)}
					<div ref={messagesEndRef} />
				</div>
			</main>

			<div className="w-full">
				<ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
			</div>
		</div>
	);
}
