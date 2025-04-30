import "@/assets/css/responsive.css"; // Add this line to import globally
import HomeOne from "@/components/homes/home-two";

import Wrapper from "@/layout/Wrapper";
import { ToastContainer } from "react-toastify";
import { sanityClient } from "../../sanity.client";

export const metadata = {
  title: "Guerison des ames church",
};

async function getHeroData() {
  const heroQuery = `*[_type == "heroSlider"][0]`;
  const leadershipQuery = `*[_type == "leadership"] | order(_createdAt desc)`;
  const ProgramsQuery = `*[_type == "programs"] | order(_createdAt desc)`;
  const causesQuery = `*[_type == "causes"]`; // Fetch first gallery
  const heroData = await sanityClient.fetch(
    heroQuery,
    {},
    { next: { revalidate: 10 } }
  );
  const leadershipData = await sanityClient.fetch(
    leadershipQuery,
    {},
    { next: { revalidate: 10 } }
  );
  const programsData = await sanityClient.fetch(
    ProgramsQuery,
    {},
    { next: { revalidate: 10 } }
  );
  const footerGalleryData = await sanityClient.fetch(
    ProgramsQuery,
    {},
    { next: { revalidate: 10 } }
  );
  const causesData = await sanityClient.fetch(
    causesQuery,
    {},
    { next: { revalidate: 10 } }
  );

  return {
    heroData,
    leadershipData,
    programsData,
    footerGalleryData,
    causesData,
  };
}

export default async function Index() {
  const {
    heroData,
    leadershipData,
    programsData,
    footerGalleryData,
    causesData,
  } = await getHeroData(); // ✅ Fetching data inside Server Component

  return (
    <Wrapper>
      <ToastContainer position="top-center" autoClose={3000} />

      <HomeOne
        heroData={heroData}
        leadershipData={leadershipData}
        programsData={programsData}
        footerGalleryData={footerGalleryData}
        causesData={causesData}
      />
    </Wrapper>
  );
}
