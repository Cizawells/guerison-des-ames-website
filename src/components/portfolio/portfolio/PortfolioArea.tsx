"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { urlFor } from "../../../../sanity.image";

const tab_title: string[] = ["All", "Worship", "Preaching", "Children", "Audience"];

type DataType = {
  id: number;
  thumb: string;
  title: string;
  category: string;
};

const PortfolioArea = ({images}: any) => {
const portfolioCounts: number[] = [images.images.length, 2, 5, 3, 3];

  const portfolio_data: DataType[] = images?.images?.map((image: any, index: number) => ({
    id: index + 1,
    thumb: image?.image?.asset ? urlFor(image.image).url() : "/placeholder.jpg", // Get image URL or fallback
    title: image.image.alt || "Untitled", // Use alt text or a default title
    category: image.category || "Uncategorized",
  })) || [];
  console.log("pooooooo", portfolio_data)
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };

  const renderPortfolioItems = () => {
    const endIndex = portfolioCounts[activeTab];
    return portfolio_data.slice(0, endIndex).map((item) => (
      <div key={item.id} className="col-xl-4 col-md-6 item cleanWater foodHealth">
        <div className="portfolio-item image">
          <Image src={item.thumb} alt="Portfolio" width={300} height={300}/>
          <div className="portfolio-item__over">
            <a className="details-btn" href="portfolio-details.html">
              <i className="flaticon-chevron"></i>
            </a>
            <h5>
              <Link href="/portfolio-details">{item.title}</Link>
            </h5>
            <span className="category">{item.category}</span>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="portfolio-page-area pt-120 pb-90 rel z-1">
      <div className="container">
        <ul className="portfolio-filter pb-35">
          {tab_title.map((tab, index) => (
            <li
              key={index}
              onClick={() => handleTabClick(index)}
              className={activeTab === index ? "current" : ""}
            >
              {tab}
            </li>
          ))}
        </ul>
        
        <div className="tab-content">
          {tab_title.map((_, index) => (
            <div
              key={index}
              className={`tab-pane fade ${activeTab === index ? "show active" : ""}`}
              id="description"
            >
              <div className="row portfolio-active justify-content-center">
                {renderPortfolioItems()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioArea;