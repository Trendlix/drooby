"use client";

import React from "react";
import { useDragScroll } from "../../hooks/useDragScroll";
import clsx from "clsx";

const DragScrollRow = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	const { ref, onMouseDown, onMouseLeave, onMouseUp, onMouseMove } =
		useDragScroll();

	return (
		<div
			ref={ref}
			onMouseDown={onMouseDown}
			onMouseLeave={onMouseLeave}
			onMouseUp={onMouseUp}
			onMouseMove={onMouseMove}
			className={clsx(
				"w-full mt-1 pb-3 grid grid-flow-col auto-cols-max gap-5 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing select-none",
				className
			)}
		>
			{children}
		</div>
	);
};

export default DragScrollRow;
