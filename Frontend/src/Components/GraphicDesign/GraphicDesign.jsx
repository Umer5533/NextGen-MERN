import React from "react";
import designBanner from "../../assets/design.jpg";

import thumbnails from "../../assets/videoServices/thumbnail.png";
import poster from "../../assets/videoServices/poster.png";
import flyer from "../../assets/videoServices/flyer.png";
import logo from "../../assets/videoServices/logo.png";
import book from "../../assets/videoServices/book.png";
import { BenefitsToChooseUs } from "../BenefitsToChooseUs/BenefitsToChooseUs";

import grapgicIllus from "../../assets/graphicillus.png";
import GetstartedBtn from "../GetStartedBtb/GetstartedBtn";
import BackToServicesBtn from "../BackToServicesBtn/BackToServicesBtn";
import UserChatPanel from "../UserChatPanel/UserChatPanel";
import { Link } from "react-router-dom";

const GraphicDesign = () => {
  return (
    <>
      <div>
        <div className="absolute top-0 left-0 right-0   w-full z-0">
          <img className=" w-full object-cover" src={designBanner} alt="" />
        </div>

        <h2
          className={`inline-block absolute  top-10 left-4 md:left-10 font-bold text-4xl md:text-5xl lg:text-6xl text-black `}
        >
          NEXT
          <span className="font-medium uppercase text-2xl md:text-3xl">
            Gen
          </span>
        </h2>

        <div className="flex justify-center items-center h-custom-height-700px w-full ">
          <h2 className="capitalize text-6xl font-bold  lg:font-extrabold text-black  lg:leading-relaxed z-10">
            what we offer
          </h2>
        </div>

        <div className="mt-20 mb-20 ">
          <div class="w-11/12 mx-auto p-4 ">
            <div class="flex flex-wrap ">
              <div class="w-full  sm:w-1/2 lg:w-1/3 p-2 h-custom-height-500px z-20">
              <Link to='/thumbnail'>
                <div class="group flex flex-col  bg-white p-8 shadow-lg hover:shadow-none h-full justify-end hover:justify-center transition  hover:bg-fuchsia-400 rounded ">
                  <div className="w-44 h-44">
                    <img
                      className="h-full w-full object-cover"
                      src={thumbnails}
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold mb-4 group-hover:text-white transition ">
                      Thumbnail Design
                    </h1>
                    <p className=" group-hover:text-white transition ">
                      At NextGen, we specialize in creating eye-catching
                      thumbnails. We designs visually appealing thumbnails
                      tailored to your brand's identity, ensuring your videos,
                      social media posts stand out in a crowded digital
                      landscape.
                    </p>
                  </div>
                </div>
                </Link>
              </div>
              <div class="w-full  sm:w-1/2 lg:w-1/3 p-2 h-custom-height-500px z-20">
              <Link to='/poster'>
                <div class="group flex flex-col  bg-white p-8 shadow-lg hover:shadow-none h-full justify-end hover:justify-center transition  hover:bg-fuchsia-400 rounded ">
                  <div className="w-44 h-44">
                    <img
                      className="h-full w-full object-cover"
                      src={poster}
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold mb-4 group-hover:text-white transition ">
                      Poster Design
                    </h1>
                    <p className=" group-hover:text-white transition ">
                      NextGen offers professional poster design services that
                      make a lasting impact. Whether you need posters for
                      events, promotions, or advertisements, our creative
                      designers work closely with you to produce stunning
                      visuals.
                    </p>
                  </div>
                </div>
                </Link>
              </div>
              <div class="w-full  sm:w-1/2 lg:w-1/3 p-2 h-custom-height-500px z-20">
              <Link to='/flyer'>
                <div class="group flex flex-col  bg-white p-8 shadow-lg hover:shadow-none h-full justify-end hover:justify-center transition  hover:bg-fuchsia-400 rounded ">
                  <div className="w-44 h-44">
                    <img
                      className="h-full w-full object-cover"
                      src={flyer}
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold mb-4 group-hover:text-white transition ">
                      Flyer Design
                    </h1>
                    <p className=" group-hover:text-white transition ">
                      Promote your business, event, or service with high-quality
                      flyers from NextGen. Our flyer designs are crafted to grab
                      attention and communicate your message clearly and
                      concisely. We focus on creating visually appealing layouts
                      that drive engagement and deliver results.
                    </p>
                  </div>
                </div>
                </Link>
              </div>
              <div class="w-full  sm:w-1/2 lg:w-1/3 p-2 h-custom-height-500px">
              <Link to='/logodesign'>
                <div class="group flex flex-col  bg-white p-8 shadow-lg hover:shadow-none h-full justify-end hover:justify-center transition  hover:bg-fuchsia-400 rounded ">
                  <div className="w-44 h-44">
                    <img
                      className="h-full w-full object-cover"
                      src={logo}
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold mb-4 group-hover:text-white transition ">
                      Logo Design
                    </h1>
                    <p className=" group-hover:text-white transition ">
                      At NextGen, we understand that a logo is the cornerstone
                      of your brand's identity. Our expert designers create
                      unique and memorable logos that reflect your brand's
                      values and vision.
                    </p>
                  </div>
                </div>
                </Link>
              </div>
              <div class="w-full  sm:w-1/2 lg:w-1/3 p-2 h-custom-height-500px">
              <Link to='/bookcover'>
                <div class="group flex flex-col  bg-white p-8 shadow-lg hover:shadow-none h-full justify-end hover:justify-center transition  hover:bg-fuchsia-400 rounded ">
                  <div className="w-44 h-44">
                    <img
                      className="h-full w-full object-cover"
                      src={book}
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold mb-4 group-hover:text-white transition ">
                      Book Cover Design
                    </h1>
                    <p className=" group-hover:text-white transition ">
                      NextGen offers professional book cover design services
                      that capture the essence of your story and entice readers.
                      Our designers combine creativity and market insights to
                      produce covers.
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
            <img className="-full" src={grapgicIllus} alt="" />
          </div>
          <GetstartedBtn prop="custom-lightblue-rgb" />
        </div>

        <BackToServicesBtn />
        <UserChatPanel/>
      </div>
    </>
  );
};

export default GraphicDesign;
