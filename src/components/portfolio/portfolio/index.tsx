import Breadcrumb from "@/components/common/Breadcrumb"
import ChooseArea from "@/components/homes/home-one/ChooseArea"
import FAQ from "@/components/homes/home-three/FAQ"
import Testimonial from "@/components/homes/home-three/Testimonial"
import FooterOne from "@/layout/footers/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"
import PortfolioArea from "./PortfolioArea"

const Portfolio = ({images}: any) => {
   return (
      <>
         <HeaderOne style_1={true} style_2={true} />
         <main>
            <Breadcrumb page_title="Our Gallery" page_list="Portfolio" style={false} />
            <PortfolioArea images={images}/>
            <ChooseArea />
            {/* <Testimonial /> */}
            {/* <FAQ style={true} /> */}
         </main>
         <FooterOne />
      </>
   )
}

export default Portfolio;
