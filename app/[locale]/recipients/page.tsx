"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { ArrowLeft, Plus, User, Edit, Trash, Info } from "lucide-react";
import { useRouter } from "@/i18n/routing";
import clsx from "clsx";

interface RecipientProfile {
  id: string;
  name: string;
  iconColor: string;
  headerColor: string;
  wishlistCount: number;
  ordersCount: number;
  favoriteCategories: string[];
  sizes: {
    shirt: string;
    pants: string;
    shoes: string;
  };
  preferredColors: string[];
  isEditable: boolean;
  isDeletable: boolean;
}

const RecipientsPage = () => {
  const locale = useLocale();
  const isRTL = locale === "ar";
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(0);
  const [recipientName, setRecipientName] = useState("");

  const avatars = ["👶", "👧", "👦", "👨", "👩", "👴"];

  const [profiles] = useState<RecipientProfile[]>([
    {
      id: "1",
      name: "Me",
      iconColor: "#3a9a99",
      headerColor: "bg-[#E0E7FF]",
      wishlistCount: 7,
      ordersCount: 8,
      favoriteCategories: ["Electronics", "Fashion", "Sports"],
      sizes: {
        shirt: "L",
        pants: "32",
        shoes: "42",
      },
      preferredColors: ["Black", "Navy", "Gray"],
      isEditable: true,
      isDeletable: false,
    },
    {
      id: "2",
      name: "Mother",
      iconColor: "#ff9500",
      headerColor: "bg-orange-100",
      wishlistCount: 2,
      ordersCount: 2,
      favoriteCategories: ["Electronics", "Fashion", "Sports"],
      sizes: {
        shirt: "L",
        pants: "32",
        shoes: "42",
      },
      preferredColors: ["Black", "Navy", "Gray"],
      isEditable: true,
      isDeletable: true,
    },
  ]);

  const handleAddProfile = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setRecipientName("");
    setSelectedAvatar(0);
  };

  const handleAddRecipient = () => {
    if (recipientName.trim()) {
      // Add new profile logic here
      console.log("Adding recipient:", recipientName, "with avatar:", avatars[selectedAvatar]);
      // You can add the new profile to the profiles array here
      handleCloseModal();
    }
  };

  const handleEdit = (id: string) => {
    console.log("Edit profile:", id);
  };

  const handleDelete = (id: string) => {
    console.log("Delete profile:", id);
  };

  const handleViewWishlist = (id: string) => {
    console.log("View wishlist for:", id);
  };

  const handleShopFor = (id: string) => {
    console.log("Shop for:", id);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f7] dark:bg-main-casual-black">
      <div className="bg-white dark:bg-main-casual-black border-b border-main-white-marble/60 dark:border-main-casual-black/60">
        <div className="flex items-center justify-between px-4 sm:px-6 py-4">
          <button
            onClick={() => router.back()}
            className={clsx(
              "p-2 rounded-lg transition-colors hover:bg-main-titanium-white dark:hover:bg-main-black-charcoal",
              isRTL && "order-3"
            )}
            aria-label="Back"
          >
            <ArrowLeft size={20} className={isRTL ? "rotate-180" : ""} />
          </button>

          <h1
            className={clsx(
              "flex-1 text-center text-base sm:text-lg font-medium text-main-true-black dark:text-main-white",
              isRTL && "text-right"
            )}
          >
            Recipient Profiles
          </h1>

          <button
            onClick={handleAddProfile}
            className={clsx(
              "p-2 rounded-lg transition-colors hover:bg-main-titanium-white dark:hover:bg-main-black-charcoal",
              isRTL && "order-1"
            )}
            aria-label="Add profile"
          >
            <Plus
              size={20}
              className="text-main-bold-gray dark:text-main-white-marble"
            />
          </button>
        </div>
      </div>

      <div className="mx-4 sm:mx-6 mt-4 mb-6 p-4 bg-[#F3FFFF] dark:bg-green-900/20 border border-[#3A9A99] rounded-xl">
        <div
          className={clsx(
            "flex items-center justify-center gap-3 text-sm",
            isRTL && "flex-row-reverse"
          )}
        >
          <Info
            size={20}
            className="text-main-mediterranean-green mt-0.5 shrink-0"
          />
          <p className="text-sm text-main-true-black dark:text-main-white-marble">
            Create profiles for family members to get personalized
            recommendations and save their preferences
          </p>
        </div>
      </div>

      {/* Profile Cards */}
      <div className="flex-1 px-4 sm:px-6 pb-6 space-y-4">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="bg-white dark:bg-main-black-charcoal rounded-2xl border border-main-white-marble/60 dark:border-main-casual-black/60 overflow-hidden shadow-sm"
          >
            <div className={clsx("px-4 sm:px-6 py-4", profile.headerColor)}>
              <div
                className={clsx(
                  "flex items-center justify-between",
                  isRTL && "flex-row-reverse"
                )}
              >
                <div
                  className={clsx(
                    "flex items-center gap-3",
                    isRTL && "flex-row-reverse"
                  )}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${profile.iconColor}20` }}
                  >
                    <User size={20} style={{ color: profile.iconColor }} />
                  </div>
                  <div className={clsx("flex flex-col", isRTL && "items-end")}>
                    <h2 className="text-base sm:text-lg font-medium text-main-true-black dark:text-main-matte-black">
                      {profile.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-main-bold-gray dark:text-main-bold-gray">
                      {profile.wishlistCount} wishlist • {profile.ordersCount}{" "}
                      orders
                    </p>
                  </div>
                </div>
                <div
                  className={clsx(
                    "flex items-center gap-2",
                    isRTL && "flex-row-reverse"
                  )}
                >
                  {profile.isEditable && (
                    <button
                      onClick={() => handleEdit(profile.id)}
                      className="p-2 rounded-lg hover:bg-white/50 transition-colors"
                      aria-label="Edit profile"
                    >
                      <Edit
                        size={18}
                        className="text-main-bold-gray dark:text-main-matte-black"
                      />
                    </button>
                  )}
                  {profile.isDeletable && (
                    <button
                      onClick={() => handleDelete(profile.id)}
                      className="p-2 rounded-lg hover:bg-white/50 transition-colors"
                      aria-label="Delete profile"
                    >
                      <Trash size={18} className="text-red-500" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="px-4 sm:px-6 py-4 space-y-4">
              {/* Favorite Categories */}
              <div>
                <h3 className="text-sm font-medium text-main-bold-gray dark:text-main-white-marble mb-2">
                  Favorite Categories
                </h3>
                <div
                  className={clsx(
                    "flex flex-wrap gap-2",
                    isRTL && "flex-row-reverse"
                  )}
                >
                  {profile.favoriteCategories.map((category, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5  dark:bg-main-casual-black text-main-true-black dark:text-main-white-marble rounded-lg text-xs border border-main-white-marble/60 dark:border-main-casual-black/60 cursor-pointer "
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div>
                <h3 className="text-sm font-medium  text-main-bold-gray dark:text-main-white-marble mb-2">
                  Sizes
                </h3>
                <div
                  className={clsx("flex gap-3 ", isRTL && "flex-row-reverse")}
                >
                  {Object.entries(profile.sizes).map(([type, size]) => (
                    <div
                      key={type}
                      className="flex-1 bg-[#F9FAFB] dark:bg-main-casual-black border border-main-white-marble/60 dark:border-main-casual-black/60 rounded-lg p-3 text-center"
                    >
                      <p className="text-xs text-main-bold-gray dark:text-main-white-marble mb-1 capitalize">
                        {type}
                      </p>
                      <p className="text-sm font-medium text-main-true-black dark:text-main-white">
                        {size}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preferred Colors */}
              <div>
                <h3 className="text-sm font-medium text-main-bold-gray dark:text-main-white-marble mb-2">
                  Preferred Colors
                </h3>
                <div
                  className={clsx(
                    "flex flex-wrap gap-2",
                    isRTL && "flex-row-reverse"
                  )}
                >
                  {profile.preferredColors.map((color, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5  dark:bg-main-casual-black text-main-true-black dark:text-main-white-marble rounded-lg text-xs border border-main-white-marble/60 dark:border-main-casual-black/60 cursor-pointer "
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div
                className={clsx("flex gap-3 pt-2 flex-col md:flex-row ", isRTL && "flex-row-reverse ")}
              >
                <button
                  onClick={() => handleViewWishlist(profile.id)}
                  className="flex-1 p-4 bg-white dark:bg-main-casual-black border border-black/10 text-main-bold-gray rounded-lg text-sm font-medium hover:bg-main-mediterranean-green/5 transition-colors"
                >
                  View Wishlist
                </button>
                <button
                  onClick={() => handleShopFor(profile.id)}
                  className="flex-1 p-4 bg-main-mediterranean-green text-white rounded-lg text-sm font-medium hover:bg-main-mediterranean-green-dark transition-colors"
                >
                  Shop for {profile.name}
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Add New Profile Button */}
        <button
          onClick={handleAddProfile}
          className="w-full mt-4 px-4 py-3 bg-white dark:bg-main-black-charcoal border border-main-white-marble/60 dark:border-main-casual-black/60 rounded-xl text-main-true-black dark:text-main-white-marble font-medium hover:bg-main-titanium-white dark:hover:bg-main-casual-black transition-colors flex items-center justify-center gap-2"
        >
          <Plus size={20} />
          <span>Add New Profile</span>
        </button>
      </div>

      {/* Add New Recipient Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 dark:bg-black/70 p-4"
          onClick={handleCloseModal}
        >
          <div 
            className="bg-white dark:bg-main-black-charcoal rounded-2xl w-full max-w-md overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Gradient */}
            <div className="bg-gradient-1 px-6 py-6">
              <h2 className="text-xl font-bold text-white mb-1">
                Add New Recipient
              </h2>
              <p className="text-sm text-white/90">
                Create a profile for a family member
              </p>
            </div>

            {/* Modal Content */}
            <div className="px-6 py-6 space-y-6">
              {/* Choose Avatar Section */}
              <div>
                <label className="block text-sm font-medium text-main-true-black dark:text-main-white-marble mb-3">
                  Choose Avatar
                </label>
                <div className={clsx("flex gap-3 overflow-x-auto", isRTL && "flex-row-reverse")}>
                  {avatars.map((avatar, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedAvatar(index)}
                      className={clsx(
                        "w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition-all shrink-0",
                        selectedAvatar === index
                          ? "border-2 border-main-mediterranean-green  bg-main-mediterranean-green/10"
                          : "bg-main-titanium-white dark:bg-main-casual-black border border-main-white-marble/60 dark:border-main-casual-black/60 hover:border-main-mediterranean-green/50"
                      )}
                      aria-label={`Select avatar ${index + 1}`}
                    >
                      {avatar}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name Input Section */}
              <div>
                <label className="block text-sm font-medium text-main-true-black dark:text-main-white-marble mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  placeholder="Enter name"
                  className="w-full px-4 py-3 border border-main-white-marble/60 dark:border-main-casual-black/60 rounded-lg bg-white dark:bg-main-casual-black text-main-true-black dark:text-main-white-marble placeholder:text-main-bold-gray focus:outline-none focus:ring-2 focus:ring-main-mediterranean-green focus:border-transparent transition-all"
                />
              </div>

              {/* Action Buttons */}
              <div className={clsx("flex gap-3 pt-2", isRTL && "flex-row-reverse")}>
                <button
                  onClick={handleCloseModal}
                  className="flex-1 px-4 py-3 bg-white dark:bg-main-casual-black border border-main-white-marble/60 dark:border-main-casual-black/60 text-main-bold-gray dark:text-main-white-marble rounded-lg font-medium hover:bg-main-titanium-white dark:hover:bg-main-black-charcoal transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddRecipient}
                  disabled={!recipientName.trim()}
                  className="flex-1 px-4 py-3 bg-gradient-1 text-white rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Add Recipient
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipientsPage;
