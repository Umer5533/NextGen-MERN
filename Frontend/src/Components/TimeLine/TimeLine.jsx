import React from "react";
import forGif from "../../assets/forwardGif.gif"
import GetstartedBtn from "../GetStartedBtb/GetstartedBtn";
const TimeLine = ({prop}) => {
  return (
    <div>
      <div className=" mt-36 md:mt-0  lg:mb-36 ">
        <div className=" lg:w-11/12 mx-auto ">
          <h2 className="capitalize text-4xl font-bold lg:font-extrabold text-custom-darkblue-rgb w-11/12 lg:w-8/12 text-center mx-auto lg:leading-relaxed">How Does this Work?</h2>
          <div className="flex flex-col  md:flex-row lg:mt-20 gap-8 items-center md:items-start justify-center pt-20 pb-20    rounded bg-white cursor-pointer shadow-custom-inset-2xl shadow-blue-100">
            <div className="flex flex-col  md:flex-row justify-between items-center  md:items-start ">
              <div className="w-6/12 md:ml-8 text-center ">
                <h3 className="text-xl font-bold text-custom-darkblue-rgb ">Step 1</h3>
                <p className="text-base text-gray-500 mt-2 ">You give the brief & upload the file via FTP</p>
              </div>
              <div className="mt-8">
                <img className="rotate-90 md:rotate-0" src={forGif} alt="" />
              </div>
            </div>
            <div className="flex flex-col  md:flex-row justify-between   items-center  md:items-start ">
              <div className="w-6/12 md:ml-8 text-center">
                <h3 className="text-xl font-bold text-custom-darkblue-rgb">Step 2</h3>
                <p className="text-base text-gray-500 mt-2">We edit the video according to the brief</p>
              </div>
              <div className="mt-8">
                <img className="rotate-90 md:rotate-0" src={forGif} alt="" />
              </div>
            </div>
            <div className="flex flex-col  md:flex-row justify-between  items-center  md:items-start ">
              <div className="w-6/12 md:ml-8 text-center">
                <h3 className="text-xl font-bold text-custom-darkblue-rgb">Step 3</h3>
                <p className="text-base text-gray-500 mt-2">You review the final output for approval</p>
              </div>
              <div className="mt-8">
                <img className="rotate-90 md:rotate-0" src={forGif} alt="" />
              </div>
            </div>
            <div className="flex flex-col  md:flex-row justify-between  items-center  md:items-start">
              <div className="w-7/12 md:ml-8 text-center">
                <h3 className="text-xl font-bold text-custom-darkblue-rgb">Step 4</h3>
                <p className="text-base text-gray-500 mt-2">Edited file ready to download via FTP</p>
              </div>
              
            </div>
         
           
          </div>
          <GetstartedBtn  prop='custom-lightblue-rgb'/>

        </div>
      </div>
    </div>
  );
};

export default TimeLine;
