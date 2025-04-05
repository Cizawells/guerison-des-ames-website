import Donate from "@/components/portfolio/donate";
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

const index = () => {
   
   return (
      <Wrapper>
         <Donate />
      </Wrapper>
   )
}

export default index