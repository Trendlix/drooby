// components/ChatInput.tsx
"use client";

import { Send } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

interface ChatInputProps {
	onSendMessage: (message: string) => void;
	disabled?: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({
	onSendMessage,
	disabled = false,
}) => {
	const [input, setInput] = useState("");
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	// Auto-resize textarea
	useEffect(() => {
		if (textareaRef.current) {
			textareaRef.current.style.height = "auto";
			textareaRef.current.style.height = `${Math.min(
				textareaRef.current.scrollHeight,
				200
			)}px`;
		}
	}, [input]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (input.trim() && !disabled) {
			onSendMessage(input.trim());
			setInput("");
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSubmit(e);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="relative border-t border-[#E5E7EB99] dark:border-gray-700 bg-[#FFFFFFCC] p-3 pb-4"
		>
			<div className="flex gap-2 p-4 max-w-4xl mx-auto">
				<div className="flex-1 relative">
					<textarea
						ref={textareaRef}
						value={input}
						onChange={(e) => setInput(e.target.value)}
						onKeyDown={handleKeyDown}
						placeholder="Ask me anything about products, prices, or deals..."
						disabled={disabled}
						rows={1.5}
						className="w-full pl-6 py-5 pr-12 text-sm bg-[#FFFFFF] dark:bg-gray-800 
                     border-2 border-[#E5E7EB] dark:border-gray-700 rounded-3xl 
                     resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 
                      disabled:opacity-50 disabled:cursor-not-allowed
                     text-gray-900 dark:text-gray-100 placeholder:text-[15px] placeholder:text-[#0A0A0A80] no-scrollbar"
						style={{
							boxShadow:
								"0 1px 3px 0 rgba(0, 0, 0, 0.10), 0 1px 2px -1px rgba(0, 0, 0, 0.10)",
						}}
					/>
				</div>
				<button
					type="submit"
					disabled={!input.trim() || disabled}
					className="w-16 grid place-items-center bg-gradient-1 text-white rounded-3xl 
                   disabled:opacity-50 disabled:cursor-not-allowed transition-colors
                   focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer"
					style={{
						boxShadow:
							"0 10px 15px -3px rgba(0, 0, 0, 0.10), 0 4px 6px -4px rgba(0, 0, 0, 0.10)",
					}}
				>
					<Send className="w-5 h-5" />
				</button>
			</div>
			<p className="text-center mt-2 text-sm text-[#999] leading-[16px]">
				Drooby can make mistakes. Consider checking important information.
			</p>
		</form>
	);
};
