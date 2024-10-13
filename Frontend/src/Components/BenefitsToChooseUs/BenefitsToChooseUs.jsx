import React from "react";

import icon1 from "../../assets/videoServices/icon1.png";
import icon2 from "../../assets/videoServices/icon2.png";
import icon3 from "../../assets/videoServices/icon3.png";
import icon4 from "../../assets/videoServices/icon4.png";


export const BenefitsToChooseUs = () => {
  return (
    <>
      <div className="mt-20 mb-20 pt-12 pb-12 bg-custom-skyblue-rgb">
        <div className="w-10/12 mx-auto  p-4">
          <h2 className="capitalize text-3xl font-bold text-center text-custom-darkblue-rgb  ">
            Unique End-benefits of Hiring Our <br/> Storyboard Illustration Artists
          </h2>

          <p className=" text-center mt-2 ">
            At Video Caddy we work diligently to ensure you receive the very
            best output <br /> for your needs.The benefits of utilizing our services
            include:
          </p>

          <div class="flex flex-wrap mt-12">
            <div className="flex gap-8 justify-between w-full sm:w-1/2  p-2">
              <div>
                <img src={icon1} alt="" />
              </div>
              <div className="w-10/12">
                <h2 className="text-lg font-medium text-gray-700">Simplified Production</h2>
                <p className="leading-relaxed text-gray-500">
                  Our services are created to include all of the shots and
                  details our clients need in order to present a successful
                  storyboard and final project demonstration.
                </p>
              </div>
            </div>
            <div className="flex gap-8 justify-between w-full sm:w-1/2  p-2">
              <div>
                <img src={icon2} alt="" />
              </div>
              <div className="w-10/12">
                <h2 className="text-lg font-medium text-gray-700">Professional Interplay Testing</h2>
                <p className="leading-relaxed text-gray-500">
                  By working with us, you are able to privately test the impact
                  of your visuals and dialog properly before the final release.
                </p>
              </div>
            </div>
            <div className="flex gap-8 justify-between w-full sm:w-1/2  p-2">
              <div>
                <img src={icon3} alt="" />
              </div>
              <div className="w-10/12">
                <h2 className="text-lg font-medium text-gray-700">Advanced Tools</h2>
                <p className="leading-relaxed text-gray-500">
                  {" "}
                  By working with us, you gain access to all of the numerous
                  tools, software, and advanced skills needed to create a
                  professional storyboard for any use.
                </p>{" "}
              </div>
            </div>
            <div className="flex gap-8 justify-between w-full sm:w-1/2  p-2">
              <div>
                <img src={icon4} alt="" />
              </div>
              <div className="w-10/12">
                <h2 className="text-lg font-medium text-gray-700">A Clarified Vision</h2>
                <p className="leading-relaxed text-gray-500">
                  {" "}
                  You are better able to share your vision and passion with
                  anyone needing to see it, including producers, clients, or
                  shareholders.
                </p>{" "}
              </div>
            </div>
          </div>



        </div>
      </div>


      
    </>
  );
};
