import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "../Banner/banner.css";
const VideoCategories = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    responsive: [
        {
          breakpoint: 1023, // Screen width where the settings will be applied
          settings: {
            slidesToShow: 1, // Number of slides to show on mobile screens
            slidesToScroll: 1,
          }
        },
      ],

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
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <>
      <div className="bg-custom-skyblue-rgb pt-20 lg:pt-28 mt-24 mb-20 lg:mt-32 lg:mb-36 ">
        <div className=" lg:w-11/12 mx-auto ">
          <h2 className="capitalize text-4xl font-bold lg:font-extrabold text-custom-darkblue-rgb w-11/12 lg:w-8/12 text-center mx-auto lg:leading-relaxed">
            Some of the Popular Video Categories We Support
          </h2>
          <div className=" slider-container mt-10 w-11/12 mx-auto">
            <Slider className="h-72 lg:h-96"  {...settings}>
              <div className=" ">
                <div className="flex  flex-col lg:flex-row  justify-center items-center lg:gap-x-4 gap-y-4  h-60 lg:h-20 ">
                  <div className="flex-1 w-full lg:w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-fuchsia-400 text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-200 cursor-default">
                      Corporate Videos
                    </Link>
                  </div>
                  <div className="flex-1 w-full lg:w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-fuchsia-400 text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-200 cursor-default">
                      Film Re-Editing
                    </Link>
                  </div>
                  <div className="flex-1 w-full lg:w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-fuchsia-400 text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-200 cursor-default">
                      Holiday Vacation Video
                    </Link>
                  </div>
                  <div className="flex-1 w-full lg:w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-fuchsia-400 text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-200 cursor-default">
                      Interview Videos
                    </Link>
                  </div>
                </div>
              </div>

              <div className=" ">
                <div className="flex  flex-col lg:flex-row  justify-center items-center lg:gap-x-4 gap-y-4  h-60 lg:h-20 ">
                  <div className="flex-1 w-full lg:w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-fuchsia-400 text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-200 cursor-default">
                      Product Video
                    </Link>
                  </div>
                  <div className="flex-1 w-full lg:w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-fuchsia-400 text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-200 cursor-default">
                     Video Brochure
                    </Link>
                  </div>
                  <div className="flex-1 w-full lg:w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-fuchsia-400 text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-200 cursor-default">
                     Davinci Resolve Editing
                    </Link>
                  </div>

                </div>
              </div>

              <div>
                <div className="flex  flex-col lg:flex-row  justify-center items-center lg:gap-x-4 gap-y-4  h-60 lg:h-20 ">
                  <div className="flex-1 w-full lg:w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-fuchsia-400 text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-200 cursor-default">
                      Real Estate Video 
                    </Link>
                  </div>
                  <div className="flex-1 w-full lg:w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-fuchsia-400 text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-200 cursor-default">
                      Video Summary
                    </Link>
                  </div>
                  <div className="flex-1 w-full lg:w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-fuchsia-400 text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-200 cursor-default">
                      Sales Pitch Video
                    </Link>
                  </div>
                  <div className="flex-1 w-full lg:w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-fuchsia-400 text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-200 cursor-default">
                      Sports Video
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex  flex-col lg:flex-row  justify-center items-center lg:gap-x-4 gap-y-4  h-60 lg:h-20 ">
                  <div className="flex-1 w-full lg:w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-fuchsia-400 text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-200 cursor-default">
                      Testimonial Video
                    </Link>
                  </div>
                  <div className="flex-1 w-full lg:w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-fuchsia-400 text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-200 cursor-default">
                      Virtual Reality Post Production
                    </Link>
                  </div>
                  <div className="flex-1 w-full lg:w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-fuchsia-400 text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-200 cursor-default">
                      Video Clipping
                    </Link>
                  </div>
                 
                </div>
              </div>

              <div>
                <div className="flex  flex-col lg:flex-row  justify-center items-center lg:gap-x-4 gap-y-4  h-60 lg:h-20 ">
                  <div className="flex-1 w-full lg:w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-fuchsia-400 text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-200 cursor-default">
                      Video Stabilizing
                    </Link>
                  </div>
                  <div className="flex-1 w-full lg:w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-fuchsia-400 text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-200 cursor-default">
                     Video Tagging
                    </Link>
                  </div>
                  <div className="flex-1 w-full lg:w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-fuchsia-400 text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-200 cursor-default">
                      360 Video
                    </Link>
                  </div>
                  <div className="flex-1 w-full lg:w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-fuchsia-400 text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-200 cursor-default">
                      Wedding Video
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex  flex-col lg:flex-row  justify-center items-center lg:gap-x-4 gap-y-4  h-60 lg:h-20 ">
                  <div className="flex-1 w-full lg:w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-fuchsia-400 text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-200 cursor-default">
                      Edius Pro Editing
                    </Link>
                  </div>
                  <div className="flex-1 w-full lg:w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-fuchsia-400 text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-200 cursor-default">
                      Final Cut Editing
                    </Link>
                  </div>
                  <div className="flex-1 w-full lg:w-1/4 text-center">
                    <Link className="block w-full bg-white hover:bg-fuchsia-400 text-gray-800 hover:text-white   px-6 lg:px-8 py-4 rounded capitalize transition-all duration-200 cursor-default">
                      Premiere Pro Editing
                    </Link>
                  </div>
                  
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCategories;


