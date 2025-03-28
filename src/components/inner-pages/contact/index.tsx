import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footers/FooterTwo"
import HeaderOne from "@/layout/headers/HeaderOne"
import Brand from "@/components/common/Brand"
import ContactArea from "./ContactArea"
import ContactInfo from "./ContactInfo"
import LocationMap from "./LocationMap"


const Contact = ({contactData}: any) => {
   return (
      <>
         <HeaderOne style_1={true} style_2={true} />
         <main>
            <Breadcrumb page_title="Contact Us" page_list="Contact" style={false} />
            {/* <Brand style={true} /> */}
            <ContactArea contactData={contactData}/>
            <ContactInfo contactData={contactData}/>
            <LocationMap/>
         </main>
         <FooterOne />
      </>
   )
}

export default Contact;
