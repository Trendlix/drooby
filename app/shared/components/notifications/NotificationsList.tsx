"use client";

import { useTranslations, useLocale } from "next-intl";
import { NotificationItem, INotification } from "./NotificationItem";
import { NotificationFilter } from "./NotificationsFilterTabs";
import clsx from "clsx";

interface NotificationsListProps {
  notifications: INotification[];
  activeFilter: NotificationFilter;
  onNotificationClick?: (notification: INotification) => void;
}

export const NotificationsList = ({
  notifications,
  activeFilter,
  onNotificationClick,
}: NotificationsListProps) => {
  const t = useTranslations("Notifications");

  const filteredNotifications =
    activeFilter === "all"
      ? notifications
      : notifications.filter((notif) => {
          const filterMap: Record<NotificationFilter, string> = {
            all: "",
            priceDrops: "priceDrop",
            stock: "stock",
            cashback: "cashback",
            coupons: "coupon",
          };
          return notif.type === filterMap[activeFilter];
        });

  if (filteredNotifications.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4">
        <p className="text-main-bold-gray dark:text-main-white-marble text-center">
          {t("noNotifications")}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-main-titanium-white dark:bg-main-casual-black min-h-screen">
      <div className=" mx-3 ">
        {filteredNotifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onClick={() => onNotificationClick?.(notification)}
          />
        ))}
      </div>
    </div>
  );
};

