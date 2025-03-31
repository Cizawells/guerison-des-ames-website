import Portfolio from "@/components/portfolio/portfolio";
import Wrapper from "@/layout/Wrapper";
import { sanityClient } from "../../../sanity.client";


export const metadata = {
   title: "Guerison des ames church Nyakabiga",
 };
 

async function getGalleryData() {
   const query = `*[_type == "gallery"]`; // Fetch first gallery
   const galleryData = await sanityClient.fetch(query, {}, { next: { revalidate: 10 } });
 
   return galleryData;
 }

const index = async () => {
   const galleryData = await getGalleryData();
   return (
      <Wrapper>
         <Portfolio images={galleryData}/>
      </Wrapper>
   )
}

export default index