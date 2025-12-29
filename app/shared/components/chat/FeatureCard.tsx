import { LucideProps, Sparkles } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

const FeatureCard = ({
	feature,
}: {
	feature: {
		icon: ForwardRefExoticComponent<
			Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
		>;
		bgColor: string;
		title: string;
		description: string;
	};
}) => {
	return (
		<div className=" bg-white px-6 py-6 border border-gray-100 shadow-xl rounded-2xl">
			<div className="w-full flex gap-5">
				<div
					className="w-[56px] h-[56px] grid place-items-center rounded-2xl"
					style={{
						background: feature.bgColor,
						boxShadow:
							"0 10px 15px -3px rgba(0, 0, 0, 0.10), 0 4px 6px -4px rgba(0, 0, 0, 0.10)",
					}}
				>
					<feature.icon className="text-white" />
				</div>
				<div className="space-y-0.5 flex flex-col items-start flex-1">
					<h4 className="text-lg text-main-matte-black font-semibold leading-7">
						{feature.title}
					</h4>
					<p className="text-sm text-main-bold-gray">{feature.description}</p>
				</div>
				<div className="w-8 h-8 rounded-full bg-[#F3F4F6] grid place-items-center">
					<Sparkles className="text-main-mediterranean-green w-4 h-4" />
				</div>
			</div>
		</div>
	);
};

export default FeatureCard;
