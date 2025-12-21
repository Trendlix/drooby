import { ThemeProvider } from "next-themes";
import ThemeSwitcher from "../shared/components/layout/ThemeSwitcher";
import ThemeWave from "../shared/components/layout/ThemeWave";
import { Sidebar } from "../shared/components/layout/Sidebar";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";


export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>
}) {

    const { locale } = await params;

    const messages = await getMessages();

    return (
        <ThemeProvider attribute="class" defaultTheme="light">
            <NextIntlClientProvider messages={messages} locale={locale}>
                <ThemeWave />
                <ThemeSwitcher />
                <div className="flex min-h-screen">
                    <Sidebar />
                    <main className="flex-1 p-6">
                        {children}
                    </main>
                </div>
            </NextIntlClientProvider>
        </ThemeProvider>
    );
}