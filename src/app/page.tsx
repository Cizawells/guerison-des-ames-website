import HomeOne from "@/components/homes/home-two";
import Wrapper from "@/layout/Wrapper";
import { sanityClient } from "../../sanity.client";

export const metadata = {
  title: "Charite - Charity & Donation React Next.js Template",
};

async function getHeroData() {
  const heroQuery = `*[_type == "heroSlider"][0]`;
  const testimonialsQuery = `*[_type == "testimonial"]`;

  const heroData = await sanityClient.fetch(heroQuery, {}, { next: { revalidate: 10 } });
  const testimonialsData = await sanityClient.fetch(testimonialsQuery, {}, { next: { revalidate: 10 } });

  return { heroData, testimonialsData };
}

export default async function Index() {
  const { heroData, testimonialsData } = await getHeroData(); // ✅ Fetching data inside Server Component

  console.log("✅ Data fetched:", heroData, testimonialsData); // Should log data in terminal (not browser console)

  return (
    <Wrapper>
      <HomeOne heroData={heroData} testimonialsData={testimonialsData} />
    </Wrapper>
  );
}
