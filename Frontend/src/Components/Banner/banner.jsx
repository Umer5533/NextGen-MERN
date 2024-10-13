import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./banner.css";
import gigVideo from "../../assets/gigvideo.mp4";
import gigVideo2 from "../../assets/gigVideo2.mp4";
import arrow from "../../assets/arrow.png";
const Banner = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    arrows: false,
    pauseOnHover: false,
    appendDots: (dots) => (
      <div>
        <ul className="custom-dots">
          {React.Children.map(dots, (dot) =>
            React.cloneElement(dot, {
              className: `${dot.props.className} custom-dot`,
            })
          )}
        </ul>
      </div>
    ),
  };
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          <div className=" bg-custom-skyblue-rgb min-h-screen lg:h-screen ">
          <h2 className={`inline-block absolute  top-10 left-4 md:left-10 font-bold text-4xl md:text-5xl lg:text-6xl text-custom-pink-rgb `} >NEXT<span className="font-medium uppercase text-2xl md:text-3xl">Gen</span></h2>

            <div className="sm:w-full lg:w-11/12 mx-auto mt-36 lg:mt-48 mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-auto lg:gap-0 gap-8 grid-row-2 lg:grid-rows-1 ">
                <div className="">
                  <div className="w-11/12   mx-auto ">
                    <h1 className="text-4xl md:text-5xl text-custom-blue-rgb font-semibold capitalize">
                    Professional Video Editing & Post-Production Services
                    </h1>
                    <p className=" text-black font-normal text-lg mt-8 mb-10">
                    NexGen Media is a leading video editing and post-production outsourcing partner to video content creators and production houses worldwide.
                    </p>
                    <Link to='/about-us' className=" bg-custom-pink-rgb      text-white px-6 lg:px-8 py-4 rounded ">Learn More</Link>
                    <Link to='/services' className=" bg-custom-lightblue-rgb text-white px-6 lg:px-8 py-4 ml-4 rounded">
                      Explore More
                    </Link>
                  </div>
                </div>
                <div className="">
                  <div className="w-11/12  lg:w-4/5  mx-auto mt-12 mb-12  rounded shadow-2xl">
                    <video
                      src={gigVideo}
                      className="rounded w-full "
                      autoPlay
                      muted
                      controls
                    ></video>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-custom-skyblue-rgb min-h-screen lg:h-screen ">
          <h2 className={`inline-block absolute top-10 left-4 md:left-10 font-bold text-4xl md:text-5xl lg:text-6xl text-custom-pink-rgb `} >NEXT<span className="font-medium uppercase text-2xl md:text-3xl">Gen</span></h2>

            <div className="sm:w-full lg:w-11/12 mx-auto mt-36 lg:mt-48 mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-auto lg:gap-0 gap-8 grid-row-2 lg:grid-rows-1 ">
                <div className=" order-2">
                  <div className="w-11/12  mx-auto ">
                    <h1 className="text-4xl md:text-5xl  text-custom-blue-rgb font-semibold capitalize">
                    We've worked with companies all over the world, no matter how big or
                     small.
                    </h1>
                    <p className=" text-black font-normal text-lg mt-8 mb-10">
                    NexGen Media is a leading video editing and post-production outsourcing partner to video content creators and production houses worldwide.
                    </p>
                    <Link to='/about-us' className=" bg-custom-pink-rgb      text-white px-6 lg:px-8 py-4 rounded ">Learn More</Link>
                    <Link to='/services' className=" bg-custom-lightblue-rgb text-white px-6 lg:px-8 py-4 ml-4 rounded">
                      Explore More
                    </Link>
                  </div>
                </div>
                <div className="">
                  <div className="w-11/12  lg:w-4/5  mx-auto mt-12 mb-12  rounded shadow-2xl">
                    <video
                      src={gigVideo2}
                      className="rounded w-full "
                      autoPlay
                      muted
                      controls
                    ></video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      
    </>
  );
};

export default Banner;
