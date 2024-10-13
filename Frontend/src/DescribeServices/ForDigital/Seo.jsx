import React from "react";
import Pricing from "./Pricing";
import AllPagesDes from "../AllPagesDes";
import seo from "../../assets/videoServices/seo.png";

const Seo = () => {
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
              <img className="h-full w-full object-cover" src={seo} alt="" />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-4 group-hover:text-white transition ">
                SEO Services
              </h1>
              <p className=" group-hover:text-white transition ">
                At NextGen, we specialize in boosting your website’s visibility
                through targeted SEO strategies. Our expert team ensures that
                your site ranks higher on search engines.
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

export default Seo;
