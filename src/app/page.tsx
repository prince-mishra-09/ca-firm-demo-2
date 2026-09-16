import { HomeHero } from "@/components/sections/HomeHero";
import { CredentialStrip } from "@/components/sections/CredentialStrip";
import { HomeServices } from "@/components/sections/HomeServices";
import { HomeFirmProfile } from "@/components/sections/HomeFirmProfile";
import { HomeApproach } from "@/components/sections/HomeApproach";
import { HomeIndustries } from "@/components/sections/HomeIndustries";
import { HomePartners } from "@/components/sections/HomePartners";
import { HomeTestimonials } from "@/components/sections/HomeTestimonials";
import { HomeInsights } from "@/components/sections/HomeInsights";
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
      <HomeIndustries />
      <HomePartners />
      <HomeTestimonials />
      <HomeInsights />
      <HomeContact />
    </div>
  );
}
