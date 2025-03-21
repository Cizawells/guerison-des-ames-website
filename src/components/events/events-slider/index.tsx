import Breadcrumb from "@/components/common/Breadcrumb";
import FooterOne from "@/layout/footers/FooterOne";
import HeaderOne from "@/layout/headers/HeaderOne";
import EventSliderArea from "./EventSliderArea";

const EventSlider = ({ ministriesData }: any) => {
  return (
    <>
      <HeaderOne style_1={true} style_2={true} />
      <main>
        <Breadcrumb
          page_title="Our Ministries"
          page_list="Ministries"
          style={false}
        />
        <EventSliderArea ministriesData={ministriesData} />
        {/* <Brand style={true} /> */}
      </main>
      <FooterOne />
    </>
  );
};

export default EventSlider;
