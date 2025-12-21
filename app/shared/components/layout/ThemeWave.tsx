"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import clsx from "clsx";
import { useLocale } from "next-intl";


const ThemeWave = () => {
    const { setTheme, resolvedTheme } = useTheme();
    const locale = useLocale();
    const isRTL = locale === "ar";
    const wave1Ref = useRef<HTMLDivElement>(null);
    const wave2Ref = useRef<HTMLDivElement>(null);
    const wave3Ref = useRef<HTMLDivElement>(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const { contextSafe } = useGSAP();

    const startAnimation = contextSafe((nextTheme: string) => {
        if (isAnimating) return;
        setIsAnimating(true);

        const w1 = wave1Ref.current;
        const w2 = wave2Ref.current;
        const w3 = wave3Ref.current;
        if (!w1 || !w2 || !w3) return;

        const tl = gsap.timeline({
            onComplete: () => {
                setIsAnimating(false);
                gsap.set([w1, w2, w3], { display: "none" });
            }
        });

        const startX = isRTL ? "-200%" : "200%";
        const endX = isRTL ? "200%" : "-200%";
        const waveColor = nextTheme === "dark" ? "#0a0a0a" : "#f2f2f4";
        const accentColor = nextTheme === "dark" ? "#3a9a99" : "#00b8db";

        tl.set([w1, w2, w3], {
            display: "block",
            x: startX,
            skewX: isRTL ? 45 : -45,
        })
            .set(w1, { backgroundColor: accentColor, opacity: 0.2 })
            .set(w2, { backgroundColor: accentColor, opacity: 0.4 })
            .set(w3, { backgroundColor: waveColor, opacity: 1 })

            .to([w1, w2, w3], {
                x: "0%",
                duration: 0.8,
                stagger: isRTL ? -0.08 : 0.08,
                ease: "power4.inOut",
            })
            .add(() => {
                setTheme(nextTheme);
            }, "-=0.3")
            .to([w1, w2, w3], {
                x: endX,
                duration: 0.8,
                stagger: isRTL ? -0.08 : 0.08,
                ease: "power4.inOut",
            }, "+=0.05");
    });

    useEffect(() => {
        const handleThemeChangeRequest = (e: any) => {
            const nextTheme = e.detail.theme;
            if (nextTheme !== resolvedTheme) {
                startAnimation(nextTheme);
            }
        };

        window.addEventListener("theme-change-request", handleThemeChangeRequest);
        return () => window.removeEventListener("theme-change-request", handleThemeChangeRequest);
    }, [resolvedTheme, isRTL, startAnimation]);

    return (
        <div className={clsx(
            "fixed inset-0 z-[9999] overflow-hidden",
            isAnimating ? "pointer-events-auto" : "pointer-events-none"
        )}>
            <div
                ref={wave1Ref}
                className="absolute top-[-50%] bottom-[-50%] left-[-50%] right-[-50%] hidden"
            />
            <div
                ref={wave2Ref}
                className="absolute top-[-50%] bottom-[-50%] left-[-50%] right-[-50%] hidden"
            />
            <div
                ref={wave3Ref}
                className="absolute top-[-50%] bottom-[-50%] left-[-50%] right-[-50%] hidden shadow-[0_0_100px_rgba(0,0,0,0.2)]"
            />
        </div>
    );
};

export default ThemeWave;
