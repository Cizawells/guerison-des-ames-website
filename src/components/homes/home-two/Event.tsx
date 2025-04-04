import event_data from "@/data/EventData"
import Image from "next/image"
import Link from "next/link"
import { urlFor } from "../../../../sanity.image"

const Event = ({programsData = []}: any) => {
   return (
      <div className="our-event-two bgs-cover pt-120 pb-90 rel z-1" style={{ backgroundImage: `url(/assets/img/events/1.jpg)` }}>
         <div className="container container-1090">
            <div className="row justify-content-center">
               <div className="col-xl-7 col-lg-8 col-md-10">
                  <div className="section-title text-center mb-55">
                     <span className="section-title__subtitle mb-10">Our Programs</span>
                     <h3>Join us in our different <span>Programs</span></h3>
                  </div>
               </div>
            </div>
            
            <div className="row justify-content-center">
            {programsData.map((item: any) => (
   <div key={item.id} className="col-lg-6">
      <div className={`event-two-item ${item.item_bg}`}>
         {/* Image Wrapper */}
         <div className="image" style={{ width: "150px", height: "100px", position: "relative", overflow: "hidden" }}>
            <Image 
               src={urlFor(item.image).url()} 
               alt="Event" 
               fill 
               style={{ objectFit: "cover" }} 
            />
         </div>

         {/* Content */}
         <div className="content">
            <h5><Link href="/event-details">{item.name}</Link></h5>
            <ul>
               <li><i className="flaticon-time"></i> {item.time}</li>
            </ul>
         </div>
      </div>
   </div>
))}

            </div>
         </div>
      </div>
   )
}

export default Event
