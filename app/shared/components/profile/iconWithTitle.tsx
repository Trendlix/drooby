import clsx from "clsx";
import { useLocale } from "next-intl";
import { LucideIcon } from "lucide-react";
import { Header } from "./UI/Header";

interface IconWithTitleProps {
  Icon: LucideIcon;
  title: string;
  BgColor?: string;
}

export const IconWithTitle = ({ Icon, title, BgColor }: IconWithTitleProps) => {
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1">
      <div 
        className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl text-white shrink-0"
        style={BgColor ? { backgroundColor: BgColor } : undefined}
      >
       <Icon size={18} className="sm:w-5 sm:h-5" />
      </div>
       <Header title={title} isRTL={isRTL} />
    </div>
  );
};