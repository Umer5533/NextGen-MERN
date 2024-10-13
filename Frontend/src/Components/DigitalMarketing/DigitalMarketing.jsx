import React from "react";
import Digi from "../../assets/Digi.jpeg";

import fad from "../../assets/videoServices/fad.png";
import gad from "../../assets/videoServices/gad.png";
import g2ad from "../../assets/videoServices/g2ad.png";
import tad from "../../assets/videoServices/tad.png";
import seo from "../../assets/videoServices/seo.png";

import { BenefitsToChooseUs } from "../BenefitsToChooseUs/BenefitsToChooseUs";

import DigiIllus from "../../assets/DigiIllus.png";
import GetstartedBtn from "../GetStartedBtb/GetstartedBtn";
import BackToServicesBtn from "../BackToServicesBtn/BackToServicesBtn";
import UserChatPanel from "../UserChatPanel/UserChatPanel";
import { Link } from "react-router-dom";

const DigitalMarketing = () => {
  return (
    <>
      <div>
        <div className="absolute top-0 left-0 right-0 h-screen  w-full z-0">
          <img className="h-full w-full object-cover" src={Digi} alt="" />
        </div>

        <h2
          className={`inline-block absolute  top-10 left-4 md:left-10 font-bold text-4xl md:text-5xl lg:text-6xl text-custom-pink-rgb `}
        >
          NEXT
          <span className="font-medium uppercase text-2xl md:text-3xl">
            Gen
          </span>
        </h2>

        <div className="flex justify-center items-center h-screen w-full"></div>

        <div className="mt-20 mb-20">
          <h2 className="capitalize text-4xl font-bold text-center lg:font-extrabold text-custom-darkblue-rgb  lg:leading-relaxed">
            what we offer
          </h2>
          <div class="w-11/12 mx-auto p-4">
            <div class="flex flex-wrap">
              <div class="w-full  sm:w-1/2 lg:w-1/3 p-2 h-custom-height-500px">
              <Link to='/seo'>
                <div class="group flex flex-col  bg-white p-8 shadow-lg hover:shadow-none h-full justify-end hover:justify-center transition  hover:bg-fuchsia-400 rounded ">
                  <div className="w-44 h-44">
                    <img
                      className="h-full w-full object-cover"
                      src={seo}
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold mb-4 group-hover:text-white transition ">
                      SEO Services
                    </h1>
                    <p className=" group-hover:text-white transition ">
                      At NextGen, we specialize in boosting your website’s
                      visibility through targeted SEO strategies. Our expert
                      team ensures that your site ranks higher on search
                      engines.
                    </p>
                  </div>
                </div>
                </Link>
              </div>
              <div class="w-full  sm:w-1/2 lg:w-1/3 p-2 h-custom-height-500px">
              <Link to='/facebook'>
                <div class="group flex flex-col  bg-white p-8 shadow-lg hover:shadow-none h-full justify-end hover:justify-center transition  hover:bg-fuchsia-400 rounded ">
                  <div className="w-44 h-44">
                    <img
                      className="h-full w-full object-cover"
                      src={fad}
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold mb-4 group-hover:text-white transition ">
                      Facebook Ads Services
                    </h1>
                    <p className=" group-hover:text-white transition ">
                      Reach your target audience with precision through our
                      Facebook Ads services. NextGen crafts compelling ad
                      campaigns that engage users, increase brand awareness, and
                      drive conversions.
                    </p>
                  </div>
                </div>
                </Link>
              </div>
              <div class="w-full  sm:w-1/2 lg:w-1/3 p-2 h-custom-height-500px">
              <Link to='/tiktok'>
                <div class="group flex flex-col  bg-white p-8 shadow-lg hover:shadow-none h-full justify-end hover:justify-center transition  hover:bg-fuchsia-400 rounded ">
                  <div className="w-44 h-44">
                    <img
                      className="h-full w-full object-cover"
                      src={tad}
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold mb-4 group-hover:text-white transition ">
                      TikTok Ads Services
                    </h1>
                    <p className=" group-hover:text-white transition ">
                      Capitalize on TikTok’s growing popularity with our
                      tailored TikTok Ads services. NextGen creates
                      eye-catching, viral-worthy ads that resonate with your
                      audience on this dynamic platform.
                    </p>
                  </div>
                </div>
                </Link>
              </div>
              <div class="w-full  sm:w-1/2 lg:w-1/3 p-2 h-custom-height-500px">
              <Link to='/google'>
                <div class="group flex flex-col  bg-white p-8 shadow-lg hover:shadow-none h-full justify-end hover:justify-center transition  hover:bg-fuchsia-400 rounded ">
                  <div className="w-44 h-44">
                    <img
                      className="h-full w-full object-cover"
                      src={gad}
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold mb-4 group-hover:text-white transition ">
                      Google Ads Services
                    </h1>
                    <p className=" group-hover:text-white transition ">
                      Maximize your ROI with NextGen’s Google Ads services. Our
                      team designs highly targeted campaigns that place your
                      business at the top of search results.
                    </p>
                  </div>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <BenefitsToChooseUs />

        <div className="mt-32 mb-32">
          <div className="flex justify-center w-11/12 mx-auto">
            <img className="-full" src={DigiIllus} alt="" />
          </div>
          <GetstartedBtn prop="custom-lightblue-rgb" />
        </div>

        <BackToServicesBtn />
        <UserChatPanel />
      </div>
    </>
  );
};

export default DigitalMarketing;
