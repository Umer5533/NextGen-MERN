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
        <p className="capitalize">15 Minute Discovery  Call</p> <p>PKR 14,525</p>
      </div>
      <div className="mb-4">
        <p>
        I will jump on a quick 15 minute discovery call to introduce myself and tell you more about my plans
        </p>
      </div>
      <div className="flex mb-4 ">
        <div className="flex items-center">
          <span>
            <img className="w-4 mr-3" src={time} alt="" />
          </span>
          <p className="font-bold"> 7-day delivery</p>
        </div>

       
      </div>

      <div>
        <ul>
          <li  className="mb-2">
            <img className="inline w-4" src={check} alt="" />

            <span className="ml-3 ">Action plan</span>
          </li>
          <li className="mb-2">
            <img className="inline w-4" src={check} alt="" />

            <span className="ml-3 ">Target audience and buyer persona</span>
          </li>
          <li className="mb-2">
            <img className="inline w-4" src={check} alt="" />

            <span className="ml-3 ">1 competitor analyzed</span>
          </li>
         
        </ul>
      </div>
      <div className="mt-6">
        <Link to='/userchat' className="bg-blue-400 text-white block text-center rounded pt-3 pb-3">Discuss Plan </Link>
      </div>
    </div>
  );
  const Sta = () => (
    <div className="p-7">
      <div className="flex justify-between  mb-5">
        <p className="capitalize">Detailed Marketing Plan</p> <p>PKR 76,979</p>
      </div>
      <div className="mb-4">
        <p>
        Tailored action plan to determine what mediums you should be using to grow your business
        </p>
      </div>
      <div className="flex mb-4 ">
        <div className="flex items-center">
          <span>
            <img className="w-4 mr-3" src={time} alt="" />
          </span>
          <p className="font-bold"> 5-day delivery</p>
        </div>

    
      </div>

      <div>
        <ul>
          <li  className="mb-2">
            <img className="inline w-4" src={check} alt="" />

            <span className="ml-3 ">Action plan</span>
          </li>
          <li className="mb-2">
            <img className="inline w-4" src={check} alt="" />

            <span className="ml-3 ">Target audience and buyer persona</span>
          </li>
          <li className="mb-2">
            <img className="inline w-4" src={check} alt="" />

            <span className="ml-3 ">Goals and KPIs</span>
          </li>
          <li className="mb-2">
            <img className="inline w-4" src={check} alt="" />

            <span className="ml-3 ">Budget allocation</span>
          </li>
          <li className="mb-2">
            <img className="inline w-4" src={check} alt="" />

            <span className="ml-3 ">Channels & tools</span>
          </li>
         
        </ul>
      </div>
      <div className="mt-6">
        <Link to='/userchat' className="bg-blue-400 text-white block text-center rounded pt-3 pb-3">Discuss Plan </Link>
      </div>
    </div>
  );
  const Pre = () => (
    <div className="p-7">
      <div className="flex justify-between  mb-5">
        <p className="capitalize">Full Service Marketing Plan</p> <p>PKR 100,218</p>
      </div>
      <div className="mb-4">
        <p>
        Standard package + marketing tricks + advanced marketing growth hacks for serious growth        </p>
      </div>
      <div className="flex mb-4 ">
        <div className="flex items-center">
          <span>
            <img className="w-4 mr-3" src={time} alt="" />
          </span>
          <p className="font-bold"> 7-day delivery</p>
        </div>

        
      </div>

      <div>
        <ul>
          <li  className="mb-2">
            <img className="inline w-4" src={check} alt="" />

            <span className="ml-3 ">Action plan</span>
          </li>
          <li className="mb-2">
            <img className="inline w-4" src={check} alt="" />

            <span className="ml-3 ">Target audience and buyer persona</span>
          </li>
          <li className="mb-2">
            <img className="inline w-4" src={check} alt="" />

            <span className="ml-3 ">Goals and KPIs</span>
          </li>
          <li className="mb-2">
            <img className="inline w-4" src={check} alt="" />

            <span className="ml-3 ">Budget allocation</span>
          </li>
          <li className="mb-2">
            <img className="inline w-4" src={check} alt="" />

            <span className="ml-3 ">Channels & tools</span>
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
