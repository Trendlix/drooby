"use client";

import { useTranslations, useLocale } from "next-intl";
import { PrivacyHeader } from "../../../shared/components/profile/PrivacyHeader";
import { PrivacySection } from "../../../shared/components/profile/PrivacySection";
import { PrivacyAccordion } from "../../../shared/components/profile/PrivacyAccordion";
import { PrivacyList } from "../../../shared/components/profile/PrivacyList";
import { PrivacyContactBox } from "../../../shared/components/profile/PrivacyContactBox";
import {
	Database,
	Eye,
	Users,
	Shield,
	Lock,
	Cookie,
	Calendar,
	Building,
} from "lucide-react";
import clsx from "clsx";
import { IconWithTitle } from "@/app/shared/components/profile/iconWithTitle";
import { Header } from "@/app/shared/components/profile/UI/Header";

const PrivacyPage = () => {
	const t = useTranslations("Privacy");
	const locale = useLocale();
	const isRTL = locale === "ar";

	return (
		<div className="bg-[#F8F8F8]  pb-4 sm:pb-6 md:pb-8">
			<div className={clsx("mx-auto", isRTL && "text-right")}>
				<PrivacyHeader />

				<div className="max-w-4xl mx-auto px-5">
					<div
						className={clsx(
							"mb-4 sm:mb-6 text-sm text-main-bold-gray rounded-xl p-4 sm:p-6 md:p-7 bg-white/80",
							isRTL && "text-right"
						)}
					>
						<p className="mb-3 sm:mb-4">{t("introduction")}</p>
						<p>
							{t("introduction2")}{" "}
							<a
								href={`mailto:${t("contactEmail")}`}
								className="text-main-mediterranean-green hover:underline break-all sm:break-normal"
							>
								{t("contactEmail")}
							</a>
							.
						</p>
					</div>

					<PrivacySection title={t("privacyPolicyTitle")}>
						<PrivacyAccordion icon={Database} title={t("informationWeCollect")}>
							<p>{t("informationWeCollectContent")}</p>
						</PrivacyAccordion>

						<PrivacyAccordion icon={Eye} title={t("howWeUseYourInformation")}>
							<p>{t("howWeUseYourInformationContent")}</p>
						</PrivacyAccordion>

						<PrivacyAccordion icon={Users} title={t("dataSharingDisclosure")}>
							<p>{t("dataSharingDisclosureContent")}</p>
						</PrivacyAccordion>

						<PrivacyAccordion icon={Shield} title={t("yourRightsChoices")}>
							<p>{t("yourRightsChoicesContent")}</p>
						</PrivacyAccordion>

						<PrivacyAccordion icon={Lock} title={t("dataSecurity")}>
							<p>{t("dataSecurityContent")}</p>
						</PrivacyAccordion>

						<PrivacyAccordion icon={Calendar} title={t("dataRetention")}>
							<p>{t("dataRetentionContent")}</p>
						</PrivacyAccordion>
					</PrivacySection>

					{/* Security Policies Section */}
					<PrivacySection title={t("securityPoliciesTitle")}>
						<PrivacyList
							icon={Shield}
							title={t("accountSecurityBestPractices")}
							items={[
								t("accountSecurity1"),
								t("accountSecurity2"),
								t("accountSecurity3"),
								t("accountSecurity4"),
								t("accountSecurity5"),
								t("accountSecurity6"),
							]}
						/>

						<PrivacyList
							icon={Lock}
							title={t("safeShoppingGuidelines")}
							items={[
								t("safeShopping1"),
								t("safeShopping2"),
								t("safeShopping3"),
								t("safeShopping4"),
								t("safeShopping5"),
								t("safeShopping6"),
							]}
						/>
					</PrivacySection>

					<PrivacySection title={t("cookiePolicyTitle")}>
						<div className="border border-main-white-marble/60 dark:bg-main-black-charcoal bg-main-white/80 rounded-2xl mb-1 p-3 sm:p-4">
							<IconWithTitle
								Icon={Cookie}
								title={t("howWeUseCookies")}
								BgColor="#F54900"
							/>

							<div
								className={clsx(
									"text-sm text-main-bold-gray dark:text-main-white-marble leading-relaxed mt-3 sm:mt-4",
									isRTL
										? "text-right pr-0 sm:pr-8 md:pr-16"
										: "text-left pl-0 sm:pl-8 md:pl-16"
								)}
							>
								<p className="mb-4">{t("howWeUseCookiesContent")}</p>
								<div className="space-y-3">
									<div>
										<h4 className="font-medium text-main-title-gray dark:text-main-white mb-1">
											{t("essentialCookies")}
										</h4>
										<p>{t("essentialCookiesDesc")}</p>
									</div>
									<div>
										<h4 className="font-medium text-main-title-gray dark:text-main-white mb-1">
											{t("performanceCookies")}
										</h4>
										<p>{t("performanceCookiesDesc")}</p>
									</div>
									<div>
										<h4 className="font-medium text-main-title-gray dark:text-main-white mb-1">
											{t("marketingCookies")}
										</h4>
										<p>{t("marketingCookiesDesc")}</p>
									</div>
								</div>
							</div>
						</div>
					</PrivacySection>

					<PrivacySection title={t("complianceRegulationsTitle")}>
						<div className="border border-main-white-marble/60 dark:bg-main-black-charcoal bg-main-white/80 rounded-2xl mb-1 p-3 sm:p-4">
							<IconWithTitle
								Icon={Building}
								title={t("sdaia")}
								BgColor="#00A63E"
							/>

							<div
								className={clsx(
									"text-sm text-main-bold-gray dark:text-main-white-marble  dark:border-main-casual-black last:border-b-0 pb-3 sm:pb-4 mt-3 sm:mt-4",
									isRTL
										? "text-right pr-0 sm:pr-8 md:pr-16"
										: "text-left pl-0 sm:pl-8 md:pl-16"
								)}
							>
								<p className="pb-3 text-sm border-b  border-white/10">
									{t("sdaiaContent")}
								</p>
								<Header title={t("GCCDataProtectionTitle")} isRTL={isRTL} />
								<p className="pb-3 text-sm border-b border-white/10">
									{t("gccDataProtection")}
								</p>
								<Header
									title={t("internationalStandardsTitle")}
									isRTL={isRTL}
								/>
								<p className="pb-3 text-sm border-b border-white/10">
									{t("internationalStandards")}
								</p>
							</div>
						</div>
					</PrivacySection>

					<PrivacyContactBox />
				</div>
			</div>
		</div>
	);
};

export default PrivacyPage;
