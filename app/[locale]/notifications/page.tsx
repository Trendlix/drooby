"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Eye } from "lucide-react";
import clsx from "clsx";
import { NotificationsHeader } from "../../shared/components/notifications/NotificationsHeader";
import { NotificationsFilterTabs, NotificationFilter } from "../../shared/components/notifications/NotificationsFilterTabs";
import { NotificationsList } from "../../shared/components/notifications/NotificationsList";
import { INotification } from "../../shared/components/notifications/NotificationItem";
import { notificationsData, getUnreadCount } from "../../shared/data/notifications/notificationsData";

const NotificationsPage = () => {
  const t = useTranslations("Notifications");
  const locale = useLocale();
  const isRTL = locale === "ar";
  
  const [notifications, setNotifications] = useState<INotification[]>(notificationsData);
  const [activeFilter, setActiveFilter] = useState<NotificationFilter>("all");

  const unreadCount = getUnreadCount(notifications);

  const handleMarkAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notif) => ({ ...notif, isRead: true }))
    );
  };

  const handleSettingsClick = () => {
    console.log("Settings clicked");
   
  };

  const handleNotificationClick = (notification: INotification) => {
   
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === notification.id ? { ...notif, isRead: true } : notif
      )
    );

    console.log("Notification clicked:", notification);
  };

  return (
    <div className="flex flex-col h-screen bg-white md:bg-main-titanium-white dark:bg-main-casual-black">
      <NotificationsHeader
        unreadCount={unreadCount}
        onMarkAllAsRead={handleMarkAllAsRead}
        onSettingsClick={handleSettingsClick}
      />
      
      <NotificationsFilterTabs
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
    
      <div className="bg-white m-3  rounded-xl flex justify-center items-center  dark:bg-main-casual-black border-b border-main-white-marble/60 dark:border-main-casual-black/60 px-6 py-3">
        <button
          onClick={handleMarkAllAsRead}
          className={clsx(
            "flex items-center justify-center gap-2 text-sm text-main-black",
            isRTL ? "flex-row-reverse" : "flex-row"
          )}
        >
          <Eye size={16} className="text-[#28303F]" />
          <span>{t("markAllAsRead")}</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <NotificationsList
          notifications={notifications}
          activeFilter={activeFilter}
          onNotificationClick={handleNotificationClick}
        />
      </div>
    </div>
  );
};

export default NotificationsPage;
