import { useTranslations } from "next-intl";

const Page = () => {
    const t = useTranslations();

    return (
        <div className="">
            <h1>{t('HomePage.title')}</h1>
        </div>
    );
}
export default Page;