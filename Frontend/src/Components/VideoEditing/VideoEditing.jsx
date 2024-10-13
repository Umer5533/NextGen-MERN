import React from "react";
import { Link } from "react-router-dom";
import VideoBanner from "../../assets/videoBanner.mp4";
import BackToServicesBtn from "../BackToServicesBtn/BackToServicesBtn";

import animation from "../../assets/videoServices/animate.png";
import commercial from "../../assets/videoServices/commercial.png";
import corporate from "../../assets/videoServices/corporate.png";
import editing from "../../assets/videoServices/editing.png";
import explain from "../../assets/videoServices/explain.png";
import tv from "../../assets/videoServices/tv.png";

import e1 from "../../assets/videoServices/e1.png";
import e2 from "../../assets/videoServices/e2.png";
import ae from "../../assets/videoServices/ae.png";
import dr from "../../assets/videoServices/dr.png";
import fc from "../../assets/videoServices/fc.png";
import pr from "../../assets/videoServices/pr.png";
import GetstartedBtn from "../GetStartedBtb/GetstartedBtn";
import UserChatPanel from "../UserChatPanel/UserChatPanel";
const VideoEditing = () => {
  return (
    <>
      <div>
        <div className="absolute top-0 left-0 w-full h-screen z-0 ">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src={VideoBanner}></source>
          </video>
        </div>

        <div className="h-screen  w-full  ">
          <h2
            className={`inline-block absolute  top-10 left-4 md:left-10 font-bold text-4xl md:text-5xl lg:text-6xl text-custom-pink-rgb `}
          >
            NEXT
            <span className="font-medium uppercase text-2xl md:text-3xl">
              Gen
            </span>
          </h2>
          <div className="flex flex-col justify-center items-center h-full  ">
            <div className="w-9/12 z-10">
              <h1 className="text-3xl md:text-4xl w-10/12 text-white font-bold capitalize  mt-20 mb-20">
                Empower your brand with experts – Choose NextGen, Pakistan's
                premier video editing agency, for a seamless and lucrative
                outsourcing partnership!
              </h1>
              <Link className=" bg-custom-pink-rgb      text-white px-6 lg:px-8 py-4 rounded ">
                Learn More
              </Link>
              <Link className=" bg-custom-lightblue-rgb text-white px-6 lg:px-8 py-4 ml-4 rounded">
                Explore More
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 mb-20">
          <h2 className="capitalize text-4xl font-bold text-center lg:font-extrabold text-custom-darkblue-rgb  lg:leading-relaxed">
            what we offer
          </h2>

          <div class="w-11/12 mx-auto p-4">
            <div class="flex flex-wrap">
              <div class="w-full  sm:w-1/2 lg:w-1/3 p-2 h-custom-height-500px">
              <Link  to='/corporatevideos'>
                <div class="group flex flex-col  bg-white p-8 shadow-lg hover:shadow-none h-full justify-end hover:justify-center transition  hover:bg-fuchsia-400 rounded ">
                  <div className="w-44 h-44">
                    <img
                      className="h-full w-full object-cover"
                      src={corporate}
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold mb-4 group-hover:text-white transition ">
                      Corporate Video Editing Services
                    </h1>
                    <p className=" group-hover:text-white transition ">
                      NextGen offers corporate video editing services that
                      enable companies to strategically leverage their corporate
                      video content in B2B and B2C marketing.
                    </p>
                  </div>
                </div>
              </Link>
              </div>
              <div class="w-full  sm:w-1/2 lg:w-1/3 p-2 h-custom-height-500px">
              <Link  to='/realestatevideos'>

                <div class="group flex flex-col  bg-white p-8 shadow-lg hover:shadow-none h-full justify-end hover:justify-center transition  hover:bg-fuchsia-400 rounded ">
                  <div className="w-44 h-44">
                    <img
                      className="h-full w-full object-cover"
                      src={animation}
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold mb-4 group-hover:text-white transition ">
                      Real Estate Video
                    </h1>
                    <p className=" group-hover:text-white transition ">
                      NextGen creates stunning real estate videos that highlight
                      the best features of your properties. Our videos are
                      designed to captivate potential buyers with high-quality
                      visual and smooth transitions.
                    </p>
                  </div>
                </div>
                </Link>

              </div>
              <div class="w-full  sm:w-1/2 lg:w-1/3 p-2 h-custom-height-500px">
              <Link  to='/productvideos'>

                <div class="group flex flex-col  bg-white p-8 shadow-lg hover:shadow-none h-full justify-end hover:justify-center transition  hover:bg-fuchsia-400 rounded ">
                  <div className="w-44 h-44">
                    <img
                      className="h-full w-full object-cover"
                      src={commercial}
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold mb-4 group-hover:text-white transition ">
                      Product Video
                    </h1>
                    <p className=" group-hover:text-white transition ">
                      Showcase your products in the best light with NextGen's
                      product video services. We produce engaging and
                      informative videos that demonstrate the features and
                      benefits of your products.
                    </p>
                  </div>
                </div>
                </Link>
              </div>
              <div class="w-full  sm:w-1/2 lg:w-1/3 p-2 h-custom-height-500px">
              <Link  to='/interviewvideos'>

                <div class="group flex flex-col  bg-white p-8 shadow-lg hover:shadow-none h-full justify-end hover:justify-center transition  hover:bg-fuchsia-400 rounded ">
                  <div className="w-44 h-44">
                    <img
                      className="h-full w-full object-cover"
                      src={tv}
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold mb-4 group-hover:text-white transition ">
                      Interview Videos
                    </h1>
                    <p className=" group-hover:text-white transition ">
                      NextGen specializes in producing professional interview
                      videos that capture insightful conversations and
                      compelling stories. Our team ensures high-quality audio
                      and video, seamless editing.
                    </p>
                  </div>
                </div>
                </Link>
              </div>
              <div class="w-full  sm:w-1/2 lg:w-1/3 p-2 h-custom-height-500px">
              <Link  to='/sportsvideos'>

                <div class="group flex flex-col  bg-white p-8 shadow-lg hover:shadow-none h-full justify-end hover:justify-center transition  hover:bg-fuchsia-400 rounded ">
                  <div className="w-44 h-44">
                    <img
                      className="h-full w-full object-cover"
                      src={editing}
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold mb-4 group-hover:text-white transition ">
                      Sports Videos
                    </h1>
                    <p className=" group-hover:text-white transition ">
                      Capture the excitement and energy of sporting events with
                      NextGen's sports video services. We deliver dynamic and
                      action-packed videos that highlight key moments, showcase
                      athletes' skills.
                    </p>
                  </div>
                </div>
                </Link>
              </div>
              <div class="w-full  sm:w-1/2 lg:w-1/3 p-2 h-custom-height-500px">
              <Link  to='/weddingvideos'>

                <div class="group flex flex-col  bg-white p-8 shadow-lg hover:shadow-none h-full justify-end hover:justify-center transition  hover:bg-fuchsia-400 rounded ">
                  <div className="relative w-44 h-44">
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
                      Preserve your special day with NextGen's wedding video
                      services. Our experienced videographers create beautiful
                      and heartfelt wedding videos that capture the emotions,
                      moments.
                    </p>
                  </div>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 mb-20 bg-custom-skyblue-rgb">
          <div className=" w-11/12 mx-auto  pt-20 pb-20">
            <div className="flex justify-between ">
              <div className=" w-20 rotate-12">
                <img src={e1} alt="" />
              </div>
              <div className="  w-20 -rotate-12">
                <img src={e2} alt="" />
              </div>
            </div>

            <div className="w-6/12 mx-auto">
              <h2 className="capitalize text-4xl font-bold text-center lg:font-extrabold text-custom-darkblue-rgb  lg:leading-relaxed">
                We Use the Latest Video Editing Software
              </h2>
            </div>
            <div className="flex w-6/12 mx-auto justify-center mt-20">
              <img className=" w-20 m-4" src={ae} alt="" />
              <img className=" w-20 m-4" src={dr} alt="" />
              <img className=" w-20 m-4" src={pr} alt="" />
              <img className=" w-20 m-4" src={fc} alt="" />
            </div>
          </div>
        </div>

        <div className="mb-32">
          <p className=" text-custom-darkblue-rgb text-center text-2xl">
            Contact NextGen for all your video editing services needs and get a
            free quote!
          </p>
          <GetstartedBtn prop="custom-lightblue-rgb" />
        </div>

        <BackToServicesBtn />
        <UserChatPanel/>
      </div>
    </>
  );
};

export default VideoEditing;
