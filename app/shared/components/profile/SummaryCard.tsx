"use client";

import { useLocale } from "next-intl";
import clsx from "clsx";
import { ISummaryItem } from "../../types/profile";

interface SummaryCardProps {
    items: ISummaryItem[];
}

export const SummaryCard = ({ items }: SummaryCardProps) => {
    const locale = useLocale();
    const isRTL = locale === "ar";

    return (
        <div className="bg-main-white dark:bg-main-black-charcoal rounded-xl p-5 shadow-xl border border-main-white-marble dark:border-main-casual-black z-10">
            <div className="grid grid-cols-3 gap-4">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={clsx(
                            "flex flex-col",
                            isRTL ? "items-end text-right" : "items-center text-center"
                        )}
                    >
                        <span className="text-lg font-medium text-main-bold-gray dark:text-main-white-marble mb-1">
                            {item.label}
                        </span>
                        <span className="text-sm font-normal text-main-mediterranean-green">
                            {item.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

