import Donate from "@/components/portfolio/donate";
import Wrapper from "@/layout/Wrapper";
import { sanityClient } from "../../../sanity.client";

export const metadata = {
  title: "Guerison des ames church Nyakabiga",
};

async function getHeroData() {
  const heroQuery = `*[_type == "heroSlider"][0]`; // Fetch first gallery
  const query = `*[_type == "about"][0]`; // Fetch first gallery

  const heroData = await sanityClient.fetch(
    heroQuery,
    {},
    { next: { revalidate: 10 } }
  );
  const aboutusData = await sanityClient.fetch(
    query,
    {},
    { next: { revalidate: 10 } }
  );

  return { heroData, aboutusData };
}

const index = async () => {
  const { heroData, aboutusData } = await getHeroData();
  return (
    <Wrapper>
      <Donate heroData={heroData} aboutusData={aboutusData} />
    </Wrapper>
  );
};

export default index;
