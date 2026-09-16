import { HomeHero } from "@/components/sections/HomeHero";
import { CredentialStrip } from "@/components/sections/CredentialStrip";
import { HomeServices } from "@/components/sections/HomeServices";
import { HomeFirmProfile } from "@/components/sections/HomeFirmProfile";
import { HomeApproach } from "@/components/sections/HomeApproach";
import { HomeProcess } from "@/components/sections/HomeProcess";
import { HomePartners } from "@/components/sections/HomePartners";
import { HomeInsights } from "@/components/sections/HomeInsights";
import { HomeTools } from "@/components/sections/HomeTools";
import { HomeContact } from "@/components/sections/HomeContact";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: `${siteConfig.name} | Premium Chartered Accountancy & Tax Advisory`,
  description: siteConfig.description,
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HomeHero />
      <CredentialStrip />
      <HomeServices />
      <HomeFirmProfile />
      <HomeApproach />
      <HomeProcess />
      <HomePartners />
      <HomeInsights />
      <HomeTools />
      <HomeContact />
    </div>
  );
}
