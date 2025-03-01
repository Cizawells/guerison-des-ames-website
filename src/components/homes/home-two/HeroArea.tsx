"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {ReactTyped} from "react-typed";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const images = [
    "/assets/img/hero/1.jpg",
    "/assets/img/hero/2.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-area-two overlay py-250 relative overflow-hidden">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
            // initial={{ x: "-100%", scale: 1 }}
            animate={{ x: "100%", scale: 1.1 }}
            // exit={{ x: "100%", scale: 1 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>

      <div className="container relative z-10 text-center text-white">
        <div className="hero-content mt-110 rmt-0 mb-65">
          <h1>
            <ReactTyped
              strings={["We are Non-Profit & NGO Organization"]}
              typeSpeed={50}
              backSpeed={30}
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
            src="/assets/img/hero/shape.png"
            alt="Shape"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
