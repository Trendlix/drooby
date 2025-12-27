// components/ChatMessage.tsx
"use client";

import React from "react";
import { Message } from "@/app/shared/types/chat";
import { useTypingEffect } from "@/app/shared/hooks/useTypingEffect";

interface ChatMessageProps {
	message: Message;
	onTypingComplete?: () => void;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
	message,
	onTypingComplete,
}) => {
	const { displayedText, isComplete } = useTypingEffect(
		message.content,
		20,
		message.isTyping
	);

	React.useEffect(() => {
		if (isComplete && message.isTyping && onTypingComplete) {
			onTypingComplete();
		}
	}, [isComplete, message.isTyping, onTypingComplete]);

	const isUser = message.role === "user";

	return (
		<div
			className={`flex w-full ${isUser ? "justify-end" : "justify-start"} mb-4`}
		>
			<div
				className={`flex py-6 items-start gap-3 max-w-[80%] ${
					isUser ? "flex-row-reverse" : "flex-row"
				}`}
			>
				{/* Avatar */}
				{/* <div
					className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
						isUser
							? "bg-main-mediterranean-green text-white"
							: "bg-gradient-to-br bg-gray-400 text-white"
					}`}
				>
					{isUser ? (
						<UserRound />
					) : (
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
						</svg>
					)}
				</div> */}

				<div
					className={`px-4 py-3 rounded-2xl ${
						isUser
							? "bg-main-mediterranean-green text-white rounded-tr-sm"
							: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-tl-sm"
					}`}
				>
					<p className="text-sm leading-relaxed whitespace-pre-wrap">
						{message.isTyping ? displayedText : message.content}
						{message.isTyping && !isComplete && (
							<span className="inline-block w-1 h-4 ml-1 bg-current animate-pulse" />
						)}
					</p>
				</div>
			</div>
		</div>
	);
};
