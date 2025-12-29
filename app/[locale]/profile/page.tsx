"use client";

import { useTranslations, useLocale } from "next-intl";
import { ProfileHeader } from "../../shared/components/profile/ProfileHeader";
import { ProfileSection } from "../../shared/components/profile/ProfileSection";
import { ProfileMenuItem } from "../../shared/components/profile/ProfileMenuItem";
import { LogoutButton } from "../../shared/components/profile/LogoutButton";
import {
  userData,
  getSummaryItems,
  getMenuItemsConfig,
} from "../../shared/data/profile";
import clsx from "clsx";

const ProfilePage = () => {
  const t = useTranslations("Profile");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const summaryItems = getSummaryItems(t, userData);

  const menuConfig = getMenuItemsConfig();

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  return (
    <div className="bg-main-titanium-white pb-8"> 
    <div className={clsx("mx-auto", isRTL && "text-right")}>
      <ProfileHeader
        name={userData.name}
        email={userData.email}
        memberSince={userData.memberSince}
        avatarUrl={userData.avatarUrl}
        summaryItems={summaryItems}
      />
      <div className="px-6">
        <ProfileSection title={t("account")}>
          {menuConfig.account.map((item, index) => (
            <ProfileMenuItem
              key={index}
              icon={item.icon}
              title={t(item.titleKey)}
              description={t(item.descriptionKey)}
              href={item.href}
              onClick={item.onClick}
            />
          ))}
        </ProfileSection>

        <ProfileSection title={t("preferences")}>
          {menuConfig.preferences.map((item, index) => (
            <ProfileMenuItem
              key={index}
              icon={item.icon}
              title={t(item.titleKey)}
              description={t(item.descriptionKey)}
              href={item.href}
              onClick={item.onClick}
            />
          ))}
        </ProfileSection>

        <ProfileSection title={t("support")}>
          {menuConfig.support.map((item, index) => (
            <ProfileMenuItem
              key={index}
              icon={item.icon}
              title={t(item.titleKey)}
              description={t(item.descriptionKey)}
              href={item.href}
              onClick={item.onClick}
            />
          ))}
        </ProfileSection>
      
      
        <LogoutButton onClick={handleLogout} />
      
      </div>
    </div>
    </div>
  );
};

export default ProfilePage;
