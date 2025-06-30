"use client";

import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";
import { urlFor } from "../../../../sanity.image";

const Event = forwardRef((props: any, ref: React.Ref<HTMLDivElement>) => {
  const { programsData = [] } = props; //

  console.log("proooo", programsData);
  return (
    <div
      ref={ref} // Assign the ref to the component's container
      className="our-event-two bgs-cover pt-120 pb-90 rel z-1"
      style={{ backgroundImage: `url(/assets/img/events/1.jpg)` }}
    >
      <div className="container container-1090">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-10">
            <div className="section-title text-center mb-55">
              <span className="section-title__subtitle mb-10">
                Our Programs
              </span>
              <h3>
                <span>Join us</span>
              </h3>
            </div>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            rowGap: "15px",
          }}
        >
          {programsData.map((item: any) => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "45%",
                backgroundColor: "white",
                alignItems: "center",
                padding: "10px",
              }}
              className="program-card"
              key={item.name}
            >
              <div
                className="image mx-auto"
                style={{
                  width: "45%",
                  height: "100px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={urlFor(item.image).url()}
                  alt="Event"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Content */}
              <div className="" style={{ width: "45%" }}>
                <h5>
                  <Link href="/event-details">{item.name}</Link>
                </h5>
                <ul>
                  <li>
                    <i className="flaticon-time"></i> {item.time}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
// ✅ Assign a display name
Event.displayName = "Event";
export default Event;
