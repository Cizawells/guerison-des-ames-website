"use client";

import Image from "next/image"
import Link from "next/link"
import {ReactTyped } from "react-typed";
import heroShape from "@/assets/img/shapes/three-round-green.png"
import { useEffect, useState } from "react";


const HeroArea = () => {
   const images = [
      "/assets/img/hero/1.jpg",
      "/assets/img/hero/2.jpg",
    ];

    const [currentImage, setCurrentImage] = useState(images[0]);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prevImage) => {
          const currentIndex = images.indexOf(prevImage);
          return images[(currentIndex + 1) % images.length];
        });
      }, 3000); // Change image every 3 seconds
  
      return () => clearInterval(interval);
    }, []);


   return (
      <div
      className="hero-area-two bgs-cover overlay py-250"
      style={{
        backgroundImage: `url(${currentImage})`,
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className="container">
        <div className="hero-content mt-110 rmt-0 mb-65 text-center text-white rel z-1">
                    {/* Auto-writing text effect */}
                    <h6>Welcome To:</h6>
          <h1>
            <ReactTyped 
              strings={["first", "second"]}
              typeSpeed={5} // Typing speed
              backSpeed={5} // Backspacing speed
              loop
            />
            </h1>

          <div className="hero-btns pt-15 rpt-0">
            <Link className="cr-btn" href="#">
              Donate Now
            </Link>
          </div>
          <Image
            className="hero-shape-two top_image_bounce"
            src={heroShape}
            alt="Shape"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
   )
}

export default HeroArea
