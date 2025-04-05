"use client";

import FooterTwo from "@/layout/footers/FooterTwo";
import HeaderOne from "@/layout/headers/HeaderOne";
import { useRef } from "react";
import ChooseArea from "./ChooseArea";
import Event from "./Event";
import FAQ from "./FAQ";
import HeroArea from "./HeroArea";
import Testimonial from "./Testimonial";
import Volunteer from "./Volunteer";

const HomeTwo = (props: any) => {
  const eventSectionRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <HeaderOne style_1={true} style_2={true} />
      <main>
        <HeroArea heroData={props.heroData} eventSectionRef={eventSectionRef} />
        <ChooseArea heroData={props.heroData} />
        {/* <Features style={true} /> */}
        {/* <UrgentCause /> */}
        {/* <About /> */}
        {/* <OurCause /> */}
        {/* <Counter /> */}
        <Volunteer style={true} leadershipData={props?.leadershipData} />

        <Event programsData={props.programsData} ref={eventSectionRef} />
        {/* <BecomeVolunteer/> */}
        <Testimonial style={true} />
        {/* <CtaArea /> */}
        <FAQ heroData={props.heroData} />
        {/* <Brand style={false} /> */}
      </main>
      <FooterTwo footerGalleryData={props.footerGalleryData}/>
    </>
  );
};

export default HomeTwo;
