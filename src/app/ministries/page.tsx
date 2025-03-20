import EventSlider from "@/components/events/events-slider";
import Wrapper from "@/layout/Wrapper";
import { sanityClient } from "../../../sanity.client";

export const metadata = {
   title: "Event Slider Charite - Charity & Donation React Next js Template",
};


async function getMinistries() {
  const heroQuery = `*[_type == "ministries"][0]`;

  const ministriesData = await sanityClient.fetch(heroQuery, {}, { next: { revalidate: 10 } });

  return { ministriesData };
}
const index = async () => {
   const { ministriesData } = await getMinistries(); // ✅ Fetching data inside Server Component

   console.log(ministriesData)
   return (
      <Wrapper>
         <EventSlider />
      </Wrapper>
   )
}

export default index