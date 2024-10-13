import React from "react";
import Pricing from "./Pricing";
import AllPagesDes from "../AllPagesDes";
import tad from "../../assets/videoServices/tad.png";

const Tiktok = () => {
  return (
    <>
      <h2
        className={`inline-block absolute  top-10 left-4 md:left-10 font-bold text-4xl md:text-5xl lg:text-6xl text-custom-pink-rgb `}
      >
        NEXT
        <span className="font-medium uppercase text-2xl md:text-3xl">Gen</span>
      </h2>

      <div className="flex h-screen w-full  items-center ">
        <div className="w-8/12">
          <div className="w-10/12 mx-auto">
            <div className="w-44 h-44 mt-12">
              <img className="h-full w-full object-cover" src={tad} alt="" />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-4 group-hover:text-white transition ">
                TikTok Ads Services
              </h1>
              <p className=" group-hover:text-white transition ">
                Capitalize on TikTok’s growing popularity with our tailored
                TikTok Ads services. NextGen creates eye-catching, viral-worthy
                ads that resonate with your audience on this dynamic platform.
              </p>
            </div>
            <div className="mt-20">
              <AllPagesDes props={"/digitalmarketing"} />
            </div>
          </div>
        </div>
        <div className="w-4/12 flex justify-end mr-10">
          <Pricing />
        </div>
      </div>
    </>
  );
};

export default Tiktok;
