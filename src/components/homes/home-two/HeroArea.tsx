"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ReactTyped } from "react-typed";
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
    }, 7000); // Change background every 7 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image Swiping Effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0 w-full h-full flex items-center justify-center text-white text-center"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100vh", // Ensure it fills the entire viewport height
          }}
          initial={{ opacity: 0 }}  // Start with opacity 0 (invisible)
          animate={{ opacity: 1 }}   // Fade in (opacity 1)
          exit={{ opacity: 0 }}      // Fade out (opacity 0)
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Dark Overlay for Better Readability */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Centered Content (Text positioned absolutely to the motion.div) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10" style={{paddingTop: "30%"}}>
            <h4 className="text-4xl font-bold drop-shadow-lg">Welcome to EMGA</h4>
            <h6 className="text-4xl font-bold drop-shadow-lg">
              <ReactTyped
                strings={["we", "believe", "in", "Jesus", "our", "King"]}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </h6>

            {/* Button */}
            <div className="hero-btns pt-15 rpt-0">
              <Link className="cr-btn" href="#">Worship with us</Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
