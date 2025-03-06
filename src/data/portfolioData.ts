import { StaticImageData } from "next/image"

import portfolioThumb_1 from "@/assets/img/portfolio/1.jpg";
import portfolioThumb_2 from "@/assets/img/portfolio/2.jpg";
import portfolioThumb_3 from "@/assets/img/portfolio/3.jpg";
import portfolioThumb_4 from "@/assets/img/portfolio/4.jpg";
import portfolioThumb_5 from "@/assets/img/portfolio/5.jpg";
import portfolioThumb_6 from "@/assets/img/portfolio/6.jpg";

interface DataType {
   id: number,
   thumb: StaticImageData | string;
   title: string;
   category: string;
}[];

const portfolio_data: DataType[] = [
   {
      id: 1,
      thumb: "/assets/img/portfolio/1.jpg",
      title: "Helping Homeless People",
      category: "Homeless",
   },
   {
      id: 2,
      thumb: "/assets/img/portfolio/2.jpg",
      title: "Helping Homeless People",
      category: "Homeless",
   },
   {
      id: 3,
      thumb: "/assets/img/portfolio/3.jpg",
      title: "Helping Homeless People",
      category: "Homeless",
   },
   {
      id: 4,
      thumb: "/assets/img/portfolio/4.jpg",
      title: "Helping Homeless People",
      category: "Homeless",
   },
   {
      id: 5,
      thumb: portfolioThumb_5,
      title: "Helping Homeless People",
      category: "Homeless",
   },
   {
      id: 6,
      thumb: portfolioThumb_6,
      title: "Helping Homeless People",
      category: "Homeless",
   },
]

export default portfolio_data;