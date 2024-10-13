import React, { useRef } from "react";
import { Link } from "react-router-dom";
import forGif from "../../assets/forwardGif.gif";
import "./services.css";
import nextbtn from "../../assets/next.png";
import previousbtn from "../../assets/previous.png";

import video from "../../assets/viderservices.jpg";
import graphic from "../../assets/graphic.jpg";
import seo from "../../assets/seo.jpg";

import p1 from "../../assets/p1.jpeg";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.jpeg";
import p4 from "../../assets/p4.jpg";
import p5 from "../../assets/p5.jpg";
import p6 from "../../assets/p6.jpg";
import p7 from "../../assets/p7.jpg";
import UserChatPanel from "../UserChatPanel/UserChatPanel";
// import p8 from "../../assets/p8.png";

const Services = () => {
  // const slider = useRef();
  // let tx = 0;
  //     const slideforward = ()=>{
  //         if(tx> -67){
  //             tx-=16.7;
  //         }
  //         slider.current.style.transform = `translateX(${tx}%)`
  //     }
  //     const slidebackward = ()=>{
  //         if(tx < 0){
  //             tx+=16.7;
  //         }
  //         slider.current.style.transform = `translateX(${tx}%)`
  //     }

  return (
    <>
      <div className="h-screen">
        <h2
          className={`inline-block absolute  top-10 left-4 md:left-10 font-bold text-4xl md:text-5xl lg:text-6xl text-custom-pink-rgb `}
        >
          NEXT
          <span className="font-medium uppercase text-2xl md:text-3xl">
            Gen
          </span>
        </h2>
        <div className="flex  h-full">
          <div className="flex items-center justify-center w-6/12 ">
            <div className="w-10/12">
              <h1 className="text-3xl md:text-4xl text-custom-blue-rgb font-bold capitalize  mb-10">
                Empower your brand with experts – Choose NextGen, Pakistan's
                premier video editing agency, for a seamless and lucrative
                outsourcing partnership!
              </h1>
              <Link to='/about-us' className=" bg-custom-pink-rgb      text-white px-6 lg:px-8 py-4 rounded ">
                Learn More
              </Link>
              <Link to='/portfolio' className=" bg-custom-lightblue-rgb text-white px-6 lg:px-8 py-4 ml-4 rounded">
                Explore More
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center w-6/12 ">
            <div className="h-2/5  w-full relative">
              <div className="absolute top-52 right-72 w-80 hover:w-96  rotate-6 hover:rotate-0 hover:z-20 shadow-2xl md:shadow-lg hover:shadow-blue-400 md:shadow-blue-100 transition">
                <img className="w-full rounded" src={p1} alt="" />
              </div>
              <div className="absolute top-8 right-80 w-80 hover:w-96  -rotate-6 hover:rotate-0 hover:z-20  shadow-2xl md:shadow-lg hover:shadow-blue-400 md:shadow-blue-100 transition">
                <img className="w-full rounded" src={p4} alt="" />
              </div>
              <div className="absolute -top-10 right-40 w-80 hover:w-96   rotate-6 hover:rotate-0 hover:z-20 shadow-2xl md:shadow-lg hover:shadow-blue-400 md:shadow-blue-100 transition">
                <img className="w-full rounded" src={p6} alt="" />
              </div>
              <div className="absolute top-36 right-36 w-80 hover:w-96  rotate-12 hover:rotate-0 hover:z-20  shadow-2xl md:shadow-lg hover:shadow-blue-400 md:shadow-blue-100 transition">
                <img className="w-full rounded " src={p2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-custom-image  bg-center  md:mt-32 lg:mb-32">
        <div className="  pt-20 pb-20   backdrop-blur-xl">
          <div className=" lg:w-9/12 mx-auto ">
            <div>
              <p className="uppercase text-lg w-11/12 lg:w-8/12  mx-auto ">
                what we do
              </p>
              <h2 className="uppercase text-4xl font-bold lg:font-extrabold text-custom-darkblue-rgb w-11/12 lg:w-8/12  mx-auto lg:leading-relaxed">
                our services
              </h2>
            </div>

            <div className=" lg:mt-16 ">
              <div className=" flex flex-col gap-16 h-80 md:flex-row    md:items-center  rounded-ss-full   rounded-es-full  rounded-se-100rem  bg-white  shadow-custom-leftservicesShadow-inset shadow-blue-100">
                <div className="ml-8 w-72 h-72 rounded-full">
                  <img
                    className="w-72 h-72 rounded-full object-cover"
                    src={video}
                    alt=""
                  />
                </div>

                <div className="w-7/12">
                  <h1 className="capitalize font-bold text-xl mb-2">
                    Transform Thoughts into Videos with Our{" "}
                    <span className=" text-custom-lightblue-rgb">
                      video editing{" "}
                    </span>
                    services!
                  </h1>
                  <p>
                    Welcome to our premier video editing services, where
                    creativity meets precision. At NextGen, we specialize in
                    transforming raw footage into captivating visual stories.
                    Whether you’re a filmmaker, content creator, business, or
                    individual, our expert team is dedicated to bringing your
                    vision to life with impeccable quality and attention to
                    detail.
                  </p>
                  <p className="flex justify-end mt-8">
                    <Link to='/VideoEditing' className=" bg-custom-lightblue-rgb text-white px-6 lg:px-8 py-4 ml-4 rounded">
                      Categories
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:mt-16  ">
              <div className=" flex flex-col gap-16 h-80 md:flex-row   md:items-center  md:justify-end   rounded-se-full rounded-ee-full rounded-ss-100rem bg-white  shadow-custom-rightservicesShadow-inset shadow-blue-100">
                <div className="mr-8 w-72 h-72 rounded-full order-2">
                  <img
                    className="w-72 h-72 rounded-full object-cover"
                    src={graphic}
                    alt=""
                  />
                </div>

                <div className="w-7/12 ">
                  <h1 className="capitalize font-bold text-xl mb-2">
                    Transform Vision into Visuals with Our{" "}
                    <span className=" text-custom-lightblue-rgb">
                      Graphic Design{" "}
                    </span>
                    Services!
                  </h1>
                  <p>
                    At NextGen, we specialize in bringing your ideas to life
                    through our top-notch graphic design services. Whether you
                    need a captivating logo, eye-catching marketing materials,
                    or a complete brand overhaul, our talented team of designers
                    is here to help.
                  </p>
                  <p className="flex justify-end mt-8">
                    <Link to='/graphic-design' className=" bg-custom-lightblue-rgb text-white px-6 lg:px-8 py-4 ml-4 rounded">
                      Categories
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className=" lg:mt-16 ">
              <div className=" flex flex-col gap-16 h-80 md:flex-row    md:items-center    rounded-ss-full rounded-es-full rounded-se-100rem bg-white  shadow-custom-leftservicesShadow-inset shadow-blue-100">
                <div className="ml-8 w-72 h-72 rounded-full">
                  <img
                    className="w-72 h-72 rounded-full object-cover"
                    src={seo}
                    alt=""
                  />
                </div>

                <div className="w-7/12">
                  <h1 className="capitalize font-bold text-xl mb-2">
                    Boost Online Presence with Our Expert{" "}
                    <span className=" text-custom-lightblue-rgb">Digital Marketing</span>{" "}
                    Services!
                  </h1>
                  <p>
                    At NextGen, we specialize in enhancing your online
                    visibility and driving organic traffic to your website
                    through our comprehensive Search Engine Optimization
                    services. Our goal is to ensure your business ranks higher
                    in search engine results, attracts more visitors, and
                    converts them into loyal customers.
                  </p>
                  <p className="flex justify-end mt-8">
                    <Link to='/digitalmarketing' className=" bg-custom-lightblue-rgb text-white px-6 lg:px-8 py-4 ml-4 rounded">
                      Categories
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex  justify-center items-cente w-10/12 h-80 mt-20 mb-20 mx-auto bg-re-300">
        <div className="w-11/12  ">
          <h2 className="capitalize text-5xl font-bold lg:font-extrabold text-custom-darkblue-rgb  lg:leading-relaxed">
            Have a Project in Mind
          </h2>
          <p className="text-xl w-8/12 mb-20">
            Send us your project details and get a free, personalized quote that
            best suits your budget and time constraints
          </p>
          <Link to='/contact' className=" bg-custom-lightblue-rgb text-white px-8 lg:px-10 py-4  rounded">
                      Get Started
                    </Link>
        </div>
      </div>
      <UserChatPanel/>
    
    </>
    
  );
};

export default Services;
