import type { ISummaryItem } from "../../types/profile";
export const getSummaryItems = (
    t: (key: string) => string,
    userData: { points: number; orders: string; saved: string }
): ISummaryItem[] => {
    return [
        { label: t("points"), value: userData.points },
        { label: t("orders"), value: userData.orders },
        { label: t("saved"), value: userData.saved },
    ];
};

