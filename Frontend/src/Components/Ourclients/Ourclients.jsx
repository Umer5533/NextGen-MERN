import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Ourclients.css";
import "../Banner/banner.css";
import Janine from "../../assets/Janine.webp"
import rustyruth from "../../assets/rustyruth.webp"
import Balary from "../../assets/Balary.webp"
import Aaron from "../../assets/Aaron.webp"
import Jean from "../../assets/Jean.webp"
import Sherry from "../../assets/Sherry.webp"


const Ourclients = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows:false,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 1500,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1023, // Screen width where the settings will be applied
        settings: {
          slidesToShow: 1, // Number of slides to show on mobile screens
          slidesToScroll: 1,
          speed: 500,
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
    <div className="bg-custom-skyblue-rgb pt-20">
<div className="lg:w-11/12 mx-auto  mb-32 ">
<h2 className="capitalize text-4xl font-bold lg:font-extrabold text-custom-darkblue-rgb w-11/12 lg:w-8/12 text-center mx-auto lg:leading-relaxed">What Our Client Say</h2>
<div className=" slider-container ">
      <Slider className=" h-custom-height-500px md:h-96 mt-8 md:mt-12  " {...settings}>
        <div className=" h-custom-height-500px md:h-72  shadow-custom-inset-2xl shadow-blue-200 rounded-ee-2xl lg:rounded-ee-none rounded-es-2xl">
          <div className=" flex flex-col md:flex-row gap-8 md:justify-center lg:justify-between  pt-8 mt-12 w-11/12 mx-auto h-full shadow-2xl rounded-2xl">
            <div className="h-40 w-40 ml-8 "><img className="object-cover rounded-xl border-2 border-gray-500 border-solid " src={Janine} alt="" /></div>
            <div className="w-11/12 md:w-80 mx-auto md:mx-0 md:mr-8">
              <h2 className="text-2xl font-bold text-custom-darkblue-rgb">Janine</h2>
              <p className="text-base text-gray-500 mt-2">Great job! my ideas were realised and I like the result. This company is highly recommended. Thank you very much.</p>
              <h3 className="text-custom-pink-rgb text-right mr-4 mt-2">Germany</h3>
            </div>
          </div>
        </div>


        <div className="h-custom-height-500px md:h-72 shadow-custom-inset-2xl shadow-blue-200 rounded-es-2xl lg:rounded-es-none rounded-ee-2xl">
          <div className=" flex flex-col md:flex-row gap-8 md:justify-center lg:justify-between pt-8 mt-12 w-11/12 mx-auto h-full shadow-2xl rounded-2xl">
            <div className="h-40 w-40 ml-8 "><img className="object-cover rounded-xl border-2 border-gray-500 border-solid " src={rustyruth} alt="" /></div>
            <div className="w-11/12 md:w-80 mx-auto md:mx-0 md:mr-8">
              <h2 className="text-2xl font-bold text-custom-darkblue-rgb">Rustyruth</h2>
              <p className="text-base text-gray-500 mt-2">NextGen has done so many projects for me and he has always delivered top notch work. I’ll always recommend him highly to everyone reading this review.</p>
              <h3 className="text-custom-pink-rgb text-right mr-4 mt-2">India</h3>
            </div>
          </div>
        </div>


        <div className="h-custom-height-500px md:h-72 shadow-custom-inset-2xl shadow-blue-200 rounded-ee-2xl lg:rounded-ee-none rounded-es-2xl">
          <div className=" flex flex-col md:flex-row gap-8 md:justify-center lg:justify-between pt-8 mt-12 w-11/12 mx-auto h-full shadow-2xl rounded-2xl">
            <div className="h-40 w-40 ml-8 "><img className="object-cover rounded-xl border-2 border-gray-500 border-solid " src={Balary} alt="" /></div>
            <div className="w-11/12 md:w-80 mx-auto md:mx-0 md:mr-8">
              <h2 className="text-2xl font-bold text-custom-darkblue-rgb">Balary</h2>
              <p className="text-base text-gray-500 mt-2">We are extremely satisfied with NextGen's services. Their expertise and dedication are evident in every project they handle.</p>
              <h3 className="text-custom-pink-rgb text-right mr-4 mt-2">Morocco</h3>
            </div>
          </div>
        </div>


        <div className="h-custom-height-500px md:h-72 shadow-custom-inset-2xl shadow-blue-200 rounded-es-2xl lg:rounded-es-none rounded-ee-2xl">
          <div className=" flex flex-col md:flex-row gap-8 md:justify-center lg:justify-between pt-8 mt-12 w-11/12 mx-auto h-full shadow-2xl rounded-2xl">
            <div className="h-40 w-40 ml-8 "><img className="object-cover rounded-xl border-2 border-gray-500 border-solid " src={Aaron} alt="" /></div>
            <div className="w-11/12 md:w-80 mx-auto md:mx-0 md:mr-8">
              <h2 className="text-2xl font-bold text-custom-darkblue-rgb">Aaron</h2>
              <p className="text-base text-gray-500 mt-2">Have been making repeated purchases, will continue to do so.</p>
              <h3 className="text-custom-pink-rgb text-right mr-4 mt-2">Singapore</h3>
            </div>
          </div>
        </div>


        <div className="h-custom-height-500px md:h-72 shadow-custom-inset-2xl shadow-blue-200 rounded-ee-2xl lg:rounded-ee-none rounded-es-2xl">
          <div className=" flex flex-col md:flex-row gap-8 md:justify-center lg:justify-between pt-8 mt-12 w-11/12 mx-auto h-full shadow-2xl rounded-2xl">
            <div className="h-40 w-40 ml-8 "><img className="object-cover rounded-xl border-2 border-gray-500 border-solid " src={Jean} alt="" /></div>
            <div className="w-11/12 md:w-80 mx-auto md:mx-0 md:mr-8">
              <h2 className="text-2xl font-bold text-custom-darkblue-rgb">Jean</h2>
              <p className="text-base text-gray-500 mt-2">NextGen has transformed our raw footage into stunning videos. Their attention to detail is unmatched. Highly recommend.</p>
              <h3 className="text-custom-pink-rgb text-right mr-4 mt-2">United States</h3>
            </div>
          </div>
        </div>
        


        <div className="h-custom-height-500px md:h-72 shadow-custom-inset-2xl shadow-blue-200 rounded-es-2xl lg:rounded-es-none rounded-ee-2xl">
          <div className=" flex flex-col md:flex-row gap-8 md:justify-center lg:justify-between pt-8 mt-12 w-11/12 mx-auto h-full shadow-2xl rounded-2xl">
            <div className="h-40 w-40 ml-8 "><img className="object-cover rounded-xl border-2 border-gray-500 border-solid " src={Sherry} alt="" /></div>
            <div className="w-11/12 md:w-80 mx-auto md:mx-0 md:mr-8">
              <h2 className="text-2xl font-bold text-custom-darkblue-rgb">Sherry</h2>
              <p className="text-base text-gray-500 mt-2">NextGen consistently delivers high-quality work on time. They have become our go-to partner for all video editing needs.</p>
              <h3 className="text-custom-pink-rgb text-right mr-4 mt-2">United Kingdom</h3>
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

export default Ourclients;
