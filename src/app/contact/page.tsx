import Contact from "@/components/inner-pages/contact";
import Wrapper from "@/layout/Wrapper";
import { sanityClient } from "../../../sanity.client";

export const metadata = {
   title: "Guerison des ames church Nyakabiga",
 };
 


async function getContactData() {
   const query = `*[_type == "contact"][0]`; // Fetch first gallery
   const contactData = await sanityClient.fetch(query, {}, { next: { revalidate: 10 } });
 
   return {
      contactData,
   };
 }

const index = async () => {
   const {contactData} = await getContactData();
   return (
      <Wrapper>
         <Contact contactData={contactData}/>
      </Wrapper>
   )
}

export default index