import {
  TrendingDown,
  Package,
  DollarSign,
  Tag,
} from "lucide-react";
import { INotification } from "../../components/notifications/NotificationItem";

export const notificationsData: INotification[] = [
  {
    id: "1",
    type: "priceDrop",
    title: "Price Drop Alert",
    description: "iPhone 15 Pro Max is now 50 SAR cheaper on Amazon.sa",
    timestamp: "5 min ago",
    isRead: false,
    icon: TrendingDown,
    iconColor: "#00bc7d",
    priceInfo: {
      currentPrice: "4,799 SAR",
      oldPrice: "4,849 SAR",
    },
    store: "Amazon.sa",
  },
  {
    id: "2",
    type: "stock",
    title: "Back in Stock",
    description: "Apple Watch Series 9 is now available at eXtra",
    timestamp: "1 hour ago",
    isRead: false,
    icon: Package,
    iconColor: "#2b7fff",
    store: "eXtra",
  },
  {
    id: "3",
    type: "cashback",
    title: "Cashback Confirmed",
    description: "Your 55 SAR cashback from Jarir order has been confirmed",
    timestamp: "2 hours ago",
    isRead: false,
    icon: DollarSign,
    iconColor: "#9b59b6",
  },
  {
    id: "4",
    type: "coupon",
    title: "New Coupon Available",
    description: "Get 20% off on electronics at Jarir - Code: TECH20",
    timestamp: "3 hours ago",
    isRead: true,
    icon: Tag,
    iconColor: "#f39c12",
    code: "TECH20",
    store: "Jarir",
  },
  {
    id: "5",
    type: "priceDrop",
    title: "Price Drop Alert",
    description: "Nike Air Max 270 dropped by 30 SAR on Noon",
    timestamp: "5 hours ago",
    isRead: true,
    icon: TrendingDown,
    iconColor: "#00bc7d",
    priceInfo: {
      currentPrice: "519 SAR",
      oldPrice: "549 SAR",
    },
    store: "Noon",
  },
  {
    id: "6",
    type: "cashback",
    title: "Cashback Paid",
    description: "Your 75 SAR cashback has been paid to your wallet",
    timestamp: "1 day ago",
    isRead: true,
    icon: DollarSign,
    iconColor: "#9b59b6",
  },
  {
    id: "7",
    type: "coupon",
    title: "Coupon Expiring Soon",
    description: "Your SAVE50 coupon expires in 2 days",
    timestamp: "1 day ago",
    isRead: true,
    icon: Tag,
    iconColor: "#f39c12",
    code: "SAVE50",
  },
  {
    id: "8",
    type: "stock",
    title: "Back in Stock",
    description: "Sony WH-1000XM5 is available again at multiple stores",
    timestamp: "2 days ago",
    isRead: true,
    icon: Package,
    iconColor: "#2b7fff",
  },
];

export const getUnreadCount = (notifications: INotification[]): number => {
  return notifications.filter((n) => !n.isRead).length;
};

