import Link from "next/link";
import React from "react";

interface DataType {
   id: number;
   item_bg?: string;
   icon: string;
   title: string;
   contact_info?: {
      info_link: string;
      info_title: string;
   }[];
   contact_info_text?: JSX.Element;
}[]

const contact_data: DataType[] = [
   {
      id: 1,
      item_bg:"contact-info-item--green",
      icon: "flaticon-phone-call",
      title: "Phone Number",
      contact_info: [
         {
            info_link: "callto:+25776720000",
            info_title: "+ 25776720000"
         },
         {
            info_link: "callto:+25761078184",
            info_title: "+ 25761078184"
         }
      ]
   },
   {
      id: 2,
      item_bg: "contact-info-item--yellow",
      icon: "Flaticon envelope",
      title: "Email Address",
      contact_info: [
         {
            info_link: "info@guerisondesames.org",
            info_title: "info@guerisondesames.org"
         },
       
      ]
   },
   {
      id: 3,
      icon: "flaticon-pin",
      title: "Address",
      contact_info_text: (<>Nyakabiga, Bujumbura Mairie <br /></>),
   },
]

const ContactInfo = ({contactData}: any) => {
   return (
      <div className="contact-info-area pb-85">
         <div className="container">
            <div className="row justify-content-center">
               {contact_data.map((item) => (
                  <div key={item.id} className="col-md-4 col-sm-6">
                     <div className={`contact-info-item ${item.item_bg}`}>
                        <div className="contact-info__icon"><i className={item.icon}></i></div>
                        <h5>{item.title}</h5>
                        <div className="contact-info__text">
                           {item.contact_info ? (item.contact_info.map((info, index) => (
                              <React.Fragment key={index}>
                                 <Link href={info.info_link}>{info.info_title}</Link><br />
                              </React.Fragment>
                           ))) : (item.contact_info_text)}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default ContactInfo
