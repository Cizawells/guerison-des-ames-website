import Portfolio from "@/components/portfolio/portfolio";
import Wrapper from "@/layout/Wrapper";
import { sanityClient } from "../../../sanity.client";

export const metadata = {
  title: "Guerison des ames church Nyakabiga",
};

async function getGalleryData() {
  const galleryQuery = `*[_type == "gallery"]`; // Fetch first gallery
  const heroQuery = `*[_type == "heroSlider"][0]`;
  const galleryData = await sanityClient.fetch(
    galleryQuery,
    {},
    { next: { revalidate: 10 } }
  );
  const heroData = await sanityClient.fetch(
    heroQuery,
    {},
    { next: { revalidate: 10 } }
  );

  return {
    galleryData,
    heroData,
  };
}

const index = async () => {
  const { galleryData, heroData } = await getGalleryData();
  return (
    <Wrapper>
      <Portfolio images={galleryData} heroData={heroData} />
    </Wrapper>
  );
};

export default index;
