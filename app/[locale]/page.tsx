import Header from "../shared/components/home/Header";
import RecentComparisons from "../shared/components/home/RecentComparisons";
import RecentlyViewed from "../shared/components/home/RecentlyViewed";
import SavedChats from "../shared/components/home/SavedChats";
import ShoppingProfiles from "../shared/components/home/ShoppingProfiles";

const Page = () => {
	return (
		<section className="px-6 py-8 md:px-8 md:py-12 h-full w-full">
			<div
				className="flex flex-col gap-y-12"
				style={{
					background:
						"linear-gradient(135deg, #FFF 0%, #F9FAFB 50%, #FFF 100%)",
				}}
			>
				<Header />
				<ShoppingProfiles />
				<RecentComparisons />
				<RecentlyViewed />
				<SavedChats />
			</div>
		</section>
	);
};
export default Page;
