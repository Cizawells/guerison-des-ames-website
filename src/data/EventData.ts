import { StaticImageData } from "next/image";

import eventThumb_1 from "@/assets/img/events/event1.jpg";
import eventThumb_2 from "@/assets/img/events/event2.jpg";
import eventThumb_3 from "@/assets/img/events/event3.jpg";
import eventThumb_4 from "@/assets/img/events/event4.jpg";
import eventThumb_5 from "@/assets/img/events/event5.jpg";
import eventThumb_6 from "@/assets/img/events/event6.jpg";



import event3Thumb_1 from "@/assets/img/events/event-three1.jpg";
import event3Thumb_2 from "@/assets/img/events/event-three2.jpg";
import event3Thumb_3 from "@/assets/img/events/event-three3.jpg";

import eventInnerThumb_1 from "@/assets/img/events/event-three1.jpg";
import eventInnerThumb_2 from "@/assets/img/events/event-three2.jpg";
import eventInnerThumb_3 from "@/assets/img/events/event-three3.jpg";
import eventInnerThumb_4 from "@/assets/img/events/event-three4.jpg";
import eventInnerThumb_5 from "@/assets/img/events/event-three5.jpg";
import eventInnerThumb_6 from "@/assets/img/events/event-three6.jpg";
import eventInnerThumb_7 from "@/assets/img/events/event-three7.jpg";
import eventInnerThumb_8 from "@/assets/img/events/event-three8.jpg";
import eventInnerThumb_9 from "@/assets/img/events/event-three9.jpg";

interface DataType {
   id: number;
   page:string;
   thumb: StaticImageData | string;
   title: string;
   date?: string | number;
   city: string;
   time?:string;
   item_bg?:string;
   desc?:string;
}

const event_data: DataType[] = [


   // home two

   {
      id: 1,
      page:"home_2",
      thumb: "/assets/img/events/1.jpg",
      title: "morning worship",
      time: "Monday - Friday, 06:00am - 08:00am",
      city: "melbourne City",
      date:25,
   },
   {
      id: 2,
      page:"home_2",
      thumb: "/assets/img/events/2.jpg",
      title: "Youth service",
      time: "Tuesday, 5pm - 7pm",
      city: "Kinchiden, USA",
      date:28,
      item_bg:"event-two-item--green"
   },
   {
      id: 3,
      page:"home_2",
      thumb: "/assets/img/events/3.jpg",
      title: "Women service",
      time: "Wednesday, 5pm - 7pm",
      city: "Old City london",
      date:30,
      item_bg:"event-two-item--yellow"
   },
   {
      id: 4,
      page:"home_2",
      thumb: "/assets/img/events/4.jpg",
      title: "Praise and worship",
      time: "Thursday, 5pm - pm",
      city: "Mownten City",
      date:31,
   },
   {
      id: 5,
      page:"home_2",
      thumb: "/assets/img/events/4.jpg",
      title: "Day of prayer",
      time: "Friday, 9am - 5pm",
      city: "Mownten City",
      date:31,
   },
   {
      id: 6,
      page:"home_2",
      thumb: "/assets/img/events/4.jpg",
      title: "Sunday Service",
      time: "Sunday, 9am - 12am",
      city: "Mownten City",
      date:31,
   },

   // home three



   // inner page
   
   {
      id: 1,
      page:"inner_page",
      thumb: eventInnerThumb_1,
      title: "Social Affairs",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc:"Children face tough challenges: hunger amalnutrition, limited access to education and medical consectetur adipisci. Vivamus in magna",
      item_bg:"item--yellow",
   },
   {
      id: 2,
      page:"inner_page",
      thumb: eventInnerThumb_2,
      title: "Women's department",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc:"Children face tough challenges: hunger amalnutrition, limited access to education and medical consectetur adipisci. Vivamus in magna",
      item_bg:"item--green",
   },
   {
      id: 3,
      page:"inner_page",
      thumb: eventInnerThumb_3,
      title: "Youth",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc:"Children face tough challenges: hunger amalnutrition, limited access to education and medical consectetur adipisci. Vivamus in magna",
      item_bg:"item--yellow",
   },
   {
      id: 4,
      page:"inner_page",
      thumb: eventInnerThumb_4,
      title: "Cell groups Ministry",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc:"Children face tough challenges: hunger amalnutrition, limited access to education and medical consectetur adipisci. Vivamus in magna",
   },
   {
      id: 5,
      page:"inner_page",
      thumb: eventInnerThumb_5,
      title: "Intercessory Mininistry",
      time: "Jan 18, 2013",
      city: "melbourne City",
      desc:"Children face tough challenges: hunger amalnutrition, limited access to education and medical consectetur adipisci. Vivamus in magna",
      item_bg:"item--green",
   },
 
]

export default event_data;