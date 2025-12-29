"use client";
import { useRef } from "react";

export const useDragScroll = () => {
	const ref = useRef<HTMLDivElement>(null);
	const isDown = useRef(false);
	const startX = useRef(0);
	const scrollLeft = useRef(0);

	const onMouseDown = (e: React.MouseEvent) => {
		if (!ref.current) return;
		isDown.current = true;
		startX.current = e.pageX - ref.current.offsetLeft;
		scrollLeft.current = ref.current.scrollLeft;
	};

	const onMouseLeave = () => (isDown.current = false);
	const onMouseUp = () => (isDown.current = false);

	const onMouseMove = (e: React.MouseEvent) => {
		if (!isDown.current || !ref.current) return;
		e.preventDefault();
		const x = e.pageX - ref.current.offsetLeft;
		ref.current.scrollLeft = scrollLeft.current - (x - startX.current) * 1.5;
	};

	return {
		ref,
		onMouseDown,
		onMouseLeave,
		onMouseUp,
		onMouseMove,
	};
};
