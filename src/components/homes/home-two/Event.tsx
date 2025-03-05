import event_data from "@/data/EventData"
import Image from "next/image"
import Link from "next/link"

const Event = () => {
   return (
      <div className="our-event-two bgs-cover pt-120 pb-90 rel z-1" style={{ backgroundImage: `url(/assets/img/events/1.jpg)` }}>
         <div className="container container-1090">
            <div className="row justify-content-center">
               <div className="col-xl-7 col-lg-8 col-md-10">
                  <div className="section-title text-center mb-55">
                     <span className="section-title__subtitle mb-10">Our Programs</span>
                     <h3>Join us in ou different <span>Programs</span></h3>
                  </div>
               </div>
            </div>
            
            <div className="row justify-content-center">
               {event_data.filter((item) => item.page === "home_2").map((item) => (
                  <div key={item.id} className="col-lg-6">
                     <div className={`event-two-item ${item.item_bg}`}>
                        <div className="image">
                           <Image src={item.thumb} alt="Event" width={150} height={150}/>
                        </div>
                        <div className="content">
                           <h5><Link href="/event-details">{item.title}</Link></h5>
                           <ul>
                              <li><i className="flaticon-time"></i> {item.time}</li>
                           </ul>
                        </div>
                        <div className="date">
                           <b>{item.date}</b><span>dec</span>
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
