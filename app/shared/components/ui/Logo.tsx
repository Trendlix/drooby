import clsx from "clsx";
import Image from "next/image";

const Logo = ({
	className,
	logoHeight = 70,
	logoWidth = 70,
}: {
	className?: string;
	logoHeight?: number;
	logoWidth?: number;
}) => {
	return (
		<div
			className={clsx(
				"w-24 h-24 grid place-items-center rounded-3xl bg-gradient-1",
				className
			)}
			style={{ boxShadow: "0 25px 50px -12px rgba(58, 154, 153, 0.30)" }}
		>
			<Image
				src="/logo.svg"
				width={logoWidth}
				height={logoHeight}
				alt="drooby-logo"
			/>
		</div>
	);
};

export default Logo;
