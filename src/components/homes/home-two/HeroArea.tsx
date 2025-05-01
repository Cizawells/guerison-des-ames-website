"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import { urlFor } from "../../../../sanity.image";

const HeroSection = ({ heroData, eventSectionRef }: any) => {
  // const images: any = [

  // ];
  const images: any = heroData
    ? [
        urlFor(heroData.imageOne).url(),
        urlFor(heroData.imageTwo).url(),
        urlFor(heroData.imageThree).url(),
      ]
    : [];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Change background every 7 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Specify the type of ref as HTMLDivElement

  const handleScrollToEvent = () => {
    if (eventSectionRef.current) {
      eventSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image Swiping Effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0 w-full h-full flex items-center justify-center text-white text-center bg-black/40 dark-bg"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 5,
            height: "100vh", // Ensure it fills the entire viewport height
            // filter: brightness(50%)
          }}
          initial={{ opacity: 0 }} // Start with opacity 0 (invisible)
          animate={{ opacity: 2 }} // Fade in (opacity 1)
          exit={{ opacity: 0 }} // Fade out (opacity 0)
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Dark Overlay for Better Readability */}
          <div
            className="absolute inset-0 bg-black/60"
            style={{ opacity: 5 }}
          ></div>

          {/* Centered Content (Text positioned absolutely to the motion.div) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 responsive-padding">
            <div className="section-title mb-60">
              <h2>
                Guérison&nbsp;<span> des ames</span>
              </h2>
            </div>
            <h6
              className="text-4xl font-bold drop-shadow-lg"
              style={{ fontSize: "25px" }}
            >
              <ReactTyped
                strings={["we", "believe", "in", "Jesus", "our", "King"]}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </h6>

            {/* Button */}
            <div className="hero-btns pt-15 rpt-0">
              <button className="cr-btn" onClick={handleScrollToEvent}>
                Worship with us
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
