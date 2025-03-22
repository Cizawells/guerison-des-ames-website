import InnerAbout from "@/components/inner-pages/about";
import Wrapper from "@/layout/Wrapper";
import { sanityClient } from "../../../sanity.client";

export const metadata = {
   title: "About Charite - Charity & Donation React Next js Template",
};

async function getAboutData() {
   const query = `*[_type == "about"][0]`; // Fetch first gallery
   const aboutusData = await sanityClient.fetch(query, {}, { next: { revalidate: 10 } });
 
   return aboutusData;
 }

const index = async () => {
   const aboutusData = await getAboutData();
   return (
      <Wrapper>
         <InnerAbout aboutusData={aboutusData}/>
      </Wrapper>
   )
}

export default index