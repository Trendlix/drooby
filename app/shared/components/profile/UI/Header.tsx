import clsx from "clsx";

interface HeaderProps {
  title: string;
  isRTL: boolean;
}

export const Header = ({ title, isRTL }: HeaderProps) => {
  return <h3 className={clsx("text-sm sm:text-base font-medium text-main-matte-black dark:text-main-white", isRTL && "text-right")}>{title}</h3>;
};