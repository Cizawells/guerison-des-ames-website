"use client";
import Breadcrumb from "@/components/common/Breadcrumb";
import FooterOne from "@/layout/footers/FooterTwo";
import HeaderOne from "@/layout/headers/HeaderOne";
import DonateArea from "./DonateArea";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";
import { urlFor } from "../../../../sanity.image";
import aboutImg_1 from "@/assets/img/about/about-left1.jpg";
import aboutImg_2 from "@/assets/img/about/about-left2.jpg";
import aboutImg_3 from "@/assets/img/about/about-left3.jpg";

const about_img_data: any[] = [aboutImg_1, aboutImg_2, aboutImg_3, aboutImg_2];

const Donate = ({ heroData, aboutusData }: any) => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    fade: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <HeaderOne style_1={true} style_2={true} />
      <main>
        <Breadcrumb page_title="Donate Now" page_list="Donate" style={false} />
        {/* <DonateArea /> */}
        <div className="row gap-100 align-items-center py-5">
          <div
            className="col-xl-6"
            style={
              {
                // backgroundImage: "url('/building.jpeg')",
                // backgroundSize: "cover",
                // backgroundPosition: "center",
                // opacity: 0.4,
              }
            }
          >
            <div className="max-w-2xl text-center">
              <h2 className="mt-6 text-xl font-bold text-gray-900">
                Bank Deposits & Transfers
              </h2>
              <div className="mt-3 text-left text-gray-800">
                <p>
                  <strong>Banque de crédit du Burundi (BCB)</strong>, A/C
                  Number: <span className="font-semibold">74974-58 (FBU)</span>,
                  Tithes and Offerings
                </p>
                <p>
                  <strong>Inyenyeri Microfinance</strong>, A/C Number:{" "}
                  <span className="font-semibold"> 445/1 (FBU)</span>,
                  Construction account
                </p>
              </div>

              <h2 className="mt-6 text-xl font-bold text-gray-900">
                Mobile transfers
              </h2>
              <div className="mt-3 text-left text-gray-800">
                <p>
                  <strong>Cash App (BCB)</strong>, Number:{" "}
                  <span className="font-semibold">+1 (202) 590-8872 (USD)</span>
                  , Irakoze Richard
                </p>
              </div>

              <Link className="cr-btn btn--style-two" href="/contact">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="col-xl-6">
            <Image
              src="/building.jpeg"
              alt="construction image"
              width={500}
              height={300}
            />
          </div>
        </div>
      </main>
      <FooterOne footerGalleryData={heroData.footerGalleryData} />
    </>
  );
};

export default Donate;
