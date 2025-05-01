import InnerAbout from "@/components/inner-pages/about";
import Wrapper from "@/layout/Wrapper";
import { sanityClient } from "../../../sanity.client";

export const metadata = {
  title: "Guerison des ames church Nyakabiga",
};

async function getAboutData() {
  const query = `*[_type == "about"][0]`; // Fetch first gallery
  const leadershipQuery = `*[_type == "leadership"] | order(_createdAt desc)`;
  const footerGalleryQuery = `*[_type == "footerGallery"]`;
  const causesQuery = `*[_type == "causes"]`; // Fetch first gallery
  const aboutusData = await sanityClient.fetch(
    query,
    {},
    { next: { revalidate: 10 } }
  );
  const leadershipData = await sanityClient.fetch(
    leadershipQuery,
    {},
    { next: { revalidate: 10 } }
  );
  const footerGalleryData = await sanityClient.fetch(
    footerGalleryQuery,
    {},
    { next: { revalidate: 10 } }
  );
  const causesData = await sanityClient.fetch(
    causesQuery,
    {},
    { next: { revalidate: 10 } }
  );

  return {
    aboutusData,
    leadershipData,
    footerGalleryData,
    causesData,
  };
}

const index = async () => {
  const { aboutusData, leadershipData, footerGalleryData, causesData } =
    await getAboutData();
  return (
    <Wrapper>
      <InnerAbout
        aboutusData={aboutusData}
        leadershipData={leadershipData}
        footerGalleryData={footerGalleryData}
        causesData={causesData}
      />
    </Wrapper>
  );
};

export default index;
