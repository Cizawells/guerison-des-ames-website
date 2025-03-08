import Image from "next/image"
import Count from "./Count"

import faqThumb from "@/assets/img/about/1.jpg"

const FaqContent = () => {
   return (
      <>
         <Image src={faqThumb} alt="Man" />
         <div className="experiences-years">
            <span className="experiences-years__number">25</span>
            <span className="experiences-years__text">Years</span>
         </div>
         <div className="counter-item counter-text-wrap">
            <div className="counter-item__content">
               {/* <span className="count-text" data-speed="3000" data-stop="80000"><Count number={80000} /></span> */}
               <h5 className="counter-title">Thanks giving</h5>
            </div>
         </div>
         
         <div className="project-complete">
            <div className="project-complete__icon">
               <i className="flaticon-charity"></i>
            </div>
            <div className="project-complete__content">
               <h5>Prayer requests</h5>
               <span></span>
            </div>
         </div>
      </>
   )
}

export default FaqContent
