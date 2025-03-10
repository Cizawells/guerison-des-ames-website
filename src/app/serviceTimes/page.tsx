import ServiceTimes from "@/components/inner-pages/serviceTimes/ServiceTimes";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
   title: "Contact Us Charite - Charity & Donation React Next js Template",
};
const index = () => {
   return (
      <Wrapper>
         <ServiceTimes />
      </Wrapper>
   )
}

export default index