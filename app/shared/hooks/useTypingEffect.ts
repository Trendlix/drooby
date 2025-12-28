// hooks/useTypingEffect.ts
import { useState, useEffect, useCallback } from "react";

export const useTypingEffect = (
	text: string,
	speed: number = 20,
	enabled: boolean = true
) => {
	const [displayedText, setDisplayedText] = useState("");
	const [isComplete, setIsComplete] = useState(false);

	useEffect(() => {
		if (!enabled) {
			setDisplayedText(text);
			setIsComplete(true);
			return;
		}

		setDisplayedText("");
		setIsComplete(false);

		if (!text) return;

		let index = 0;
		const intervalId = setInterval(() => {
			if (index < text.length) {
				setDisplayedText((prev) => prev + text.charAt(index));
				index++;
			} else {
				setIsComplete(true);
				clearInterval(intervalId);
			}
		}, speed);

		return () => clearInterval(intervalId);
	}, [text, speed, enabled]);

	return { displayedText, isComplete };
};
