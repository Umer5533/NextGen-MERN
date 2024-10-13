import React, { useState } from "react";
import revision from "../../assets/videoServices/revision.png";
import time from "../../assets/videoServices/time.png";
import check from "../../assets/videoServices/check.png";
import { Link } from "react-router-dom";

const Pricing = () => {
  // State to keep track of the selected service
  const [selectedService, setSelectedService] = useState("bas");

  // Components for different services
  const Bas = () => (
    <div className="p-7">
      <div className="flex justify-between  mb-5">
        <p className="uppercase">basic</p> <p>PKR 8,715</p>
      </div>
      <div className="mb-4">
        <p>
        BASIC PACKAGE (1 Graphic) Simple work (message before placing order)
        </p>
      </div>
      <div className="flex mb-4 ">
        <div className="flex items-center">
          <span>
            <img className="w-4 mr-3" src={time} alt="" />
          </span>
          <p className="font-bold"> 1-day delivery</p>
        </div>

        <div className="flex items-center ml-6 ">
          <span>
            <img className="w-4 mr-3" src={revision} alt="" />
          </span>
          <p className="font-bold"> 5 Revision</p>
        </div>
      </div>

     
      <div className="mt-6">
        <Link to='/userchat' className="bg-blue-400 text-white block text-center rounded pt-3 pb-3">Discuss Plan </Link>
      </div>
    </div>
  );
  const Sta = () => (
    <div className="pr-5 pl-5 pt-7 pb-7">
      <div className="flex justify-between  mb-5">
        <p className="uppercase">standard</p> <p>PKR 18,882</p>
      </div>
      <div className="mb-4">
        <p>
        STANDARD PACKAGE (1 Graphic) medium design (Icons, social media design, basic one pager design)
        </p>
      </div>
      <div className="flex mb-4 ">
        <div className="flex items-center">
          <span>
            <img className="w-4 mr-3" src={time} alt="" />
          </span>
          <p className="font-bold"> 2-day delivery</p>
        </div>

        <div className="flex items-center ml-4 ">
          <span>
            <img className="w-4 mr-3" src={revision} alt="" />
          </span>
          <p className="font-bold"> Unlimited Revisions</p>
        </div>
      </div>

      <div>
        <ul>
          <li  className="mb-2">
            <img className="inline w-4" src={check} alt="" />

            <span className="ml-3 ">Include source file</span>
          </li>
          
        </ul>
      </div>
      <div className="mt-6">
        <Link to='/userchat' className="bg-blue-400 text-white block text-center rounded pt-3 pb-3">Discuss Plan </Link>
      </div>
    </div>
  );
  const Pre = () => (
    <div className="pr-5 pl-5 pt-7 pb-7">
      <div className="flex justify-between  mb-5">
        <p className="uppercase">premium</p> <p>PKR 29,049</p>
      </div>
      <div className="mb-4">
        <p>
        PREMIUM PACKAGE (1 Graphic) Advanced design (Social media post, ads, YouTube thumbnail, flyer, brochure)
        </p>
      </div>
      <div className="flex mb-4 ">
        <div className="flex items-center">
          <span>
            <img className="w-4 mr-3" src={time} alt="" />
          </span>
          <p className="font-bold"> 3-day delivery</p>
        </div>

        <div className="flex items-center  ml-4 ">
          <span>
            <img className="w-4 mr-3" src={revision} alt="" />
          </span>
          <p className="font-bold"> Unlimited Revisions</p>
        </div>
      </div>

      <div>
        <ul>
          <li  className="mb-2">
            <img className="inline w-4" src={check} alt="" />

            <span className="ml-3 ">Include source file</span>
          </li>
          
        </ul>
      </div>

      <div className="mt-6">
        <Link to='/userchat' className="bg-blue-400 text-white block text-center rounded pt-3 pb-3">Discuss Plan </Link>
      </div>
    </div>
  );

  // Function to render the selected service component
  const renderService = () => {
    switch (selectedService) {
      case "bas":
        return <Bas />;
      case "sta":
        return <Sta />;
      case "pre":
      default:
        return <Pre />;
    }
  };

  return (
    <div className=" border border-blue-300 w-96  rounded-lg">
      {/* Buttons to select services */}
      <div className="flex justify-around">
        <button
          onClick={() => setSelectedService("bas")}
          className={` w-full p-3  ${
            selectedService === "bas" ? "bg-white border-b-2 border-blue-300 text-blue-300" : " text-white bg-blue-300"
          }`}
        >
          Basic
        </button>
        <button
          onClick={() => setSelectedService("sta")}
          className={` w-full p-3  ${
            selectedService === "sta" ? "bg-white border-b-2 border-blue-300 text-blue-300" : " text-white bg-blue-300"
          }`}
        >
          Standard
        </button>
        <button
          onClick={() => setSelectedService("pre")}
          className={` w-full p-3  ${
            selectedService === "pre" ? "bg-white border-b-2 border-blue-300 text-blue-300" : " text-white bg-blue-300"
          }`}
        >
          Premium
        </button>
      </div>

      {/* Display the selected service */}
      <div>{renderService()}</div>
    </div>
  );
};

export default Pricing;
