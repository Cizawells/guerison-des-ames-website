"use client"
import Image from "next/image"
import { useState } from "react"
import VideoPopup from "@/modals/VideoPopup"
import FaqAnswerQuestion from "@/components/common/FaqAnswerQuestion";

import faqThumb from "@/assets/img/video/2.jpg";
import { urlFor } from "../../../../sanity.image";

const FAQ = ({heroData}: any) => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <div className="faq-area-two py-120">
            <div className="container">
               <div className="row gap-60">
                  <div className="col-lg-6">
                     <div className="faq-video-part rel">
                        <Image src={urlFor(heroData.thumbnailVideoTwo).url()} alt="Video" />
                        <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="video-play video-play--two" data-effect="mfp-zoom-in"><i className="fa fa-play"></i></a>
                     </div>
                  </div>
                  <FaqAnswerQuestion />
               </div>
            </div>
         </div>
         
         {/* video modal start */}
         <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId={"5NvSZ6jLoo"}
         />
         {/* video modal end */}
      </>
   )
}

export default FAQ
