import ServiceTimes from "@/components/inner-pages/serviceTimes";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
   title: "Guerison des ames church Nyakabiga",
 };
 
const index = () => {
   return (
      <Wrapper>
         <ServiceTimes />
      </Wrapper>
   )
}

export default index