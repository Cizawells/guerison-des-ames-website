import Portfolio from "@/components/portfolio/portfolio";
import Wrapper from "@/layout/Wrapper";
import { sanityClient } from "../../../sanity.client";


export const metadata = {
   title: "Portfolio Charity - Charity & Donation React Next js Template",
};

async function getGalleryData() {
   const query = `*[_type == "gallery"][0]`; // Fetch first gallery
   const galleryData = await sanityClient.fetch(query, {}, { next: { revalidate: 10 } });
 
   return galleryData;
 }

const index = async () => {
   const galleryData = await getGalleryData();
   console.log("galleryData", galleryData)
   return (
      <Wrapper>
         <Portfolio images={galleryData}/>
      </Wrapper>
   )
}

export default index