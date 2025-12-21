"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
    const { theme } = useTheme();

    const toggleTheme = () => {
        const nextTheme = theme === "dark" ? "light" : "dark";
        window.dispatchEvent(new CustomEvent("theme-change-request", {
            detail: { theme: nextTheme }
        }));
    };


    return (
        <div
            aria-label="Theme Switcher"
            className="absolute top-4 right-4 cursor-pointer z-50"
            onClick={toggleTheme}
        >
            <Sun className={theme === "dark" ? "hidden" : "block"} />
            <Moon className={theme === "dark" ? "block" : "hidden"} />
        </div>
    );
};

export default ThemeSwitcher;
