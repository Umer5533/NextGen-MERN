import React from "react";
import Pricing from "./pricing";
import AllPagesDes from "../AllPagesDes";
import explain from "../../assets/videoServices/explain.png";

const Weddingvideo = () => {
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
            <div className="relative w-44 h-44 mt-12">
              <img
                className="h-full w-full object-cover absolute -top-4"
                src={explain}
                alt=""
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-4 group-hover:text-white transition ">
                Wedding Videos
              </h1>
              <p className=" group-hover:text-white transition ">
                Preserve your special day with NextGen's wedding video services.
                Our experienced videographers create beautiful and heartfelt
                wedding videos that capture the emotions, moments.
              </p>
            </div>
            <div className="mt-20">
              <AllPagesDes props={'/videoediting'}/>
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

export default Weddingvideo;
