import HomeOne from "@/components/homes/home-two";
import "@/assets/css/responsive.css";  // Add this line to import globally

import Wrapper from "@/layout/Wrapper";
import { sanityClient } from "../../sanity.client";

export const metadata = {
  title: "Charite - Charity & Donation React Next.js Template",
};

async function getHeroData() {
  const heroQuery = `*[_type == "heroSlider"][0]`;
  const leadershipQuery = `*[_type == "leadership"]`;
  const ProgramsQuery = `*[_type == "programs"]`;

  const heroData = await sanityClient.fetch(heroQuery, {}, { next: { revalidate: 10 } });
  const leadershipData = await sanityClient.fetch(leadershipQuery, {}, { next: { revalidate: 10 } });
  const programsData = await sanityClient.fetch(ProgramsQuery, {}, { next: { revalidate: 10 } });

  return { heroData, leadershipData, programsData};
}

export default async function Index() {
  const { heroData, leadershipData, programsData } = await getHeroData(); // ✅ Fetching data inside Server Component


  return (
    <Wrapper>
      <HomeOne heroData={heroData} leadershipData={leadershipData} programsData={programsData}/>
    </Wrapper>
  );
}
