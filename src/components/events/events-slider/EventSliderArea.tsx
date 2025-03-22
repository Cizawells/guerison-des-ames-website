"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { urlFor } from "../../../../sanity.image";

const EventSliderArea = ({ ministriesData }: any) => {
  console.log("ministries", ministriesData)
  const eventsData = ministriesData.map((m: any, index: any) => ({
    id: index,
    thumb: urlFor(m?.ministryImage).url(),
    title: m.ministryTitle,
    time: "Monday - Friday, 06:00am - 08:00am",
    city: "melbourne City",
    date: 25,
    desc: m.ministryDescription,
  }));

  const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        type="button"
        className="left-arrow slick-arrow"
      >
        <i className="flaticon-left-chevron"></i>
      </button>
    );
  };

  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        type="button"
        className="right-arrow slick-arrow"
      >
        <i className="flaticon-next"></i>
      </button>
    );
  };

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    fade: false,
    dots: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="our-events-slider pt-120 pb-80 rel z-1">
      <div className="container">
        <Slider {...settings} className="events-slider-active row">
          {eventsData.map((item: any) => (
            <div key={item.id} className="col-lg-4">
              <div className={`event-item-three ${item.item_bg}`}>
                  <div className="image" style={{ width: "150px", height: "100px", position: "relative", overflow: "hidden" }}>
                            <Image 
                               src={item.thumb} 
                               alt="Event" 
                               fill 
                               style={{ objectFit: "cover" }} 
                            />
                         </div>
                {/* <div className="image">
                  <Image
                    src={item.thumb}
                    alt="Event"
                    width={200}
                    height={200}
                  />
                </div> */}
                <div className="content">
                  <h4>
                    <Link href={`/event-details/${item.id}`}>{item.title}</Link>
                  </h4>
                  {/* <ul className="blog-meta">
                    <li>
                      <i className="flaticon-time"></i>{" "}
                      <Link href="#">{item.time}</Link>
                    </li>
                    <li>
                      <i className="flaticon-map"></i>{" "}
                      <Link href="#">{item.city}</Link>
                    </li>
                  </ul> */}
                  <p>{item.desc}</p>
                  {/* <Link
                    className="event-btn"
                    href={`/event-details/${item.id}`}
                  >
                    Read more <i className="flaticon-chevron"></i>
                  </Link> */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default EventSliderArea;
