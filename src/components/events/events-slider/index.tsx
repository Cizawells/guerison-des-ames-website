import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footers/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"
import Brand from "@/components/common/Brand"
import EventSliderArea from "./EventSliderArea"

const EventSlider = () => {
   return (
      <>
         <HeaderOne style_1={true} style_2={true} />
         <main>
            <Breadcrumb page_title="Our Ministries" page_list="Event" style={false} />
            <EventSliderArea/>
            {/* <Brand style={true} /> */}
         </main>
         <FooterOne />
      </>
   )
}

export default EventSlider;
