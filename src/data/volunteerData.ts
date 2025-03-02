import { StaticImageData } from "next/image";

import volunteerThumb_1 from "@/assets/img/valunteer/valunteer1.jpg";
import volunteerThumb_2 from "@/assets/img/valunteer/valunteer2.jpg";
import volunteerThumb_3 from "@/assets/img/valunteer/valunteer3.jpg";
import volunteerThumb_4 from "@/assets/img/valunteer/valunteer4.jpg";
import volunteerThumb_5 from "@/assets/img/valunteer/valunteer5.jpg";
import volunteerThumb_6 from "@/assets/img/valunteer/valunteer6.jpg";

import volunteer2Thumb_1 from "@/assets/img/valunteer/1.jpg";
import volunteer2Thumb_2 from "@/assets/img/valunteer/2.jpg";
import volunteer2Thumb_3 from "@/assets/img/valunteer/3.jpg";
import volunteer2Thumb_4 from "@/assets/img/valunteer/4.jpg";
import volunteer2Thumb_5 from "@/assets/img/valunteer/5.jpg";
import volunteer2Thumb_6 from "@/assets/img/valunteer/6.jpg";
import volunteer2Thumb_7 from "@/assets/img/valunteer/7.jpg";
import volunteer2Thumb_8 from "@/assets/img/valunteer/8.jpg";

import volunteer3Thumb_1 from "@/assets/img/valunteer/volunteer-three1.jpg";
import volunteer3Thumb_2 from "@/assets/img/valunteer/volunteer-three2.jpg";
import volunteer3Thumb_3 from "@/assets/img/valunteer/volunteer-three3.jpg";
import volunteer3Thumb_4 from "@/assets/img/valunteer/volunteer-three4.jpg";
import volunteer3Thumb_5 from "@/assets/img/valunteer/volunteer-three5.jpg";
import volunteer3Thumb_6 from "@/assets/img/valunteer/volunteer-three6.jpg";
import volunteer3Thumb_7 from "@/assets/img/valunteer/volunteer-three7.jpg";
import volunteer3Thumb_8 from "@/assets/img/valunteer/volunteer-three8.jpg";

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   name: string;
   item_bg?: string;
   title: string
}

const volunteer_data: DataType[] = [

   // home two

   {
      id: 1,
      page: "home_2",
      thumb: volunteer2Thumb_1,
      name: "Mberabagabo Manassé",
      title: "Bishop"
   },
   {
      id: 2,
      page: "home_2",
      thumb: volunteer2Thumb_2,
      name: "Nsengiyumva Alfred",
      item_bg: "valunteer-two-item__des--yellow",
      title: "Pastor"
   },
   {
      id: 3,
      page: "home_2",
      thumb: volunteer2Thumb_3,
      name: "Bigabo Edouard",
      item_bg: "valunteer-two-item__des--green",
       title: "Pastor"
   },
   {
      id: 4,
      page: "home_2",
      thumb: volunteer2Thumb_4,
      name: "Donatien",
       title: "Pastor"
   },
   {
      id: 5,
      page: "home_2",
      thumb: volunteer2Thumb_5,
      name: "Rutabara Eric",
       title: "Pastor"
   },
   {
      id: 6,
      page: "home_2",
      thumb: volunteer2Thumb_6,
      name: "Karenga Jean Marie",
      item_bg: "valunteer-two-item__des--yellow",
       title: "Pastor"
   },
   {
      id: 7,
      page: "home_2",
      thumb: volunteer2Thumb_7,
      name: "Steve",
      item_bg: "valunteer-two-item__des--green",
       title: "Pastor"
   },
   {
      id: 8,
      page: "home_2",
      thumb: volunteer2Thumb_8,
      name: "Zikiyeri",
       title: "Pastor"
   },

 
]

export default volunteer_data;