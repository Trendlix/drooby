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
