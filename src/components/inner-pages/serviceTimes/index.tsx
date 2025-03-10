import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footers/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"
import Brand from "@/components/common/Brand"
import ServicesTimes from "./ServiceTimes"

const Contact = () => {
   return (
      <>
         <HeaderOne style_1={true} style_2={true} />
         <main>
            <Breadcrumb page_title="Service times" page_list="Services" style={false} />
            {/* <Brand style={true} /> */}
            <ServicesTimes/>
         </main>
         <FooterOne />
      </>
   )
}

export default Contact;
