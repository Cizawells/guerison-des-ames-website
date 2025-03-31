import InnerAbout from "@/components/inner-pages/about";
import Wrapper from "@/layout/Wrapper";
import { sanityClient } from "../../../sanity.client";

export const metadata = {
   title: "Guerison des ames church Nyakabiga",
 };
 

async function getAboutData() {
   const query = `*[_type == "about"][0]`; // Fetch first gallery
   const leadershipQuery = `*[_type == "leadership"]`;
   const aboutusData = await sanityClient.fetch(query, {}, { next: { revalidate: 10 } });
   const leadershipData = await sanityClient.fetch(leadershipQuery, {}, { next: { revalidate: 10 } });
 
   return {
      aboutusData,
      leadershipData
   };
 }

const index = async () => {
   const {aboutusData, leadershipData} = await getAboutData();
   return (
      <Wrapper>
         <InnerAbout aboutusData={aboutusData} leadershipData={leadershipData}/>
      </Wrapper>
   )
}

export default index