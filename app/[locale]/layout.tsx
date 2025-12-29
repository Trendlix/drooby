import { ThemeProvider } from "next-themes";
import ThemeSwitcher from "../shared/components/layout/ThemeSwitcher";
import ThemeWave from "../shared/components/layout/ThemeWave";
import { Sidebar } from "../shared/components/layout/Sidebar";
import { BottomNavigation } from "../shared/components/layout/BottomNavigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import clsx from "clsx";


export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {

    const { locale } = await params;
    const isEnglish = locale === "en";

	const messages = await getMessages();

    return (
        <ThemeProvider attribute="class" defaultTheme="light">
            <NextIntlClientProvider messages={messages} locale={locale}>
                <div className={clsx(isEnglish && "font-roc-grotesk")}>
                    <ThemeWave />
                    {/* <ThemeSwitcher /> */}
                    <div className="flex min-h-screen">
                        <Sidebar />
                        <main className="flex-1 pb-20 lg:pb-0">
                            {children}
                        </main>
                    </div>
                    <BottomNavigation />
                </div>
            </NextIntlClientProvider>
        </ThemeProvider>
    );
}
