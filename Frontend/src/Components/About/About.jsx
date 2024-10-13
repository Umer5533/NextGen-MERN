import React from "react";
import "./About.css";
// import aboutimg from "../../assets/aboutus.jpg";
// import playicon from "../../assets/playbtn.png";
import sufyan from "../../assets/videoServices/sufyan.jpg";
import hammad from "../../assets/videoServices/hammmad.jpeg";
import Ourclients from "../Ourclients/Ourclients";
import GetstartedBtn from "../GetStartedBtb/GetstartedBtn";
import UserChatPanel from "../UserChatPanel/UserChatPanel";

const About = () => {
  return (
    <>
      <div className="about-us-page">
               <div className="bg-custom-skyblue-rgb text-white h-screen flex items-center">
          <div className=" mx-auto md:h-96 flex flex-col md:flex-row items-center w-10/12">
            <div className="flex md:h-full items-start  md:mr-10 text-center  md:text-right w-full md:w-1/2 mt-10 md:mt-0">
              <div>
                <h1 className="text-2xl font-bold text-gray-600">
                  Welcome to NextGen Media Solutions
                </h1>
                <p className="mt- text-gray-600">
                  We provide services like video editing, graphic designing, and
                  digital marketing.
                  {/* <br /> */}
                  Innovative Solutions for Modern Businesses.
                  {/* <br /> */}
                  We've worked with companies all over the world, no matter how
                  big or small.
                </p>
              </div>
            </div>

            <div className="flex justify-center md:justify-center w-full md:w-4/12">
              <img
                src={sufyan}
                alt="Founder"
                className="h-96  w-auto rounded-full mx-auto md:mx-0"
              />
            </div>
            <div className="flex md:h-full items-end  md:ml-10 text-center  md:text-left w-full md:w-1/2 mt-10 md:mt-0">
              <div>
                <h2 className="text-2xl font-bold text-gray-600">
                  Sufyan Malik
                </h2>
                <p className="  font-bold  text-custom-pink-rgb">
                  Founder & CEO of NextGen
                </p>
                <p className=" text-gray-600">
                  Sufyan Malik, the visionary founder of NextGen, is a dynamic
                  leader driven by a passion for innovation and excellence.
                  Sufyan has established NextGen as a powerhouse in video
                  editing, digital marketing, and graphic designing services.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" mx-auto  w-11/12 mt-32 ">
          <h2 className="text-3xl font-bold text-center mb-10">Our Team</h2>
          <div className="flex flex-col md:flex-row justify-around items-center">

            <div className="text-center w-80">
              <img
                src={sufyan}
                alt="Team Member 1"
                className="w-60 h-72 object-cover object-top rounded-full mx-auto"
              />
              <h3 className="text-xl mt-4">Sufyan Malik</h3>
              <p className="mt-2">Video Editing Specialist</p>
              <p className="mt-2">
                Expert in Adobe Premiere Pro and Final Cut Pro.
              </p>
            </div>
            <div className="text-center w-80">
             <img
                src={hammad}
                alt="Team Member 2"
                className="w-60 h-72 object-cover object-center rounded-full mx-auto"
              />
              <h3 className="text-xl mt-4">Hammad</h3>
              <p className="mt-2">Graphic Designer</p>
              <p className="mt-2">
                Skilled in Adobe Photoshop and Illustrator.
              </p>
            </div>
             
          </div>
        </div>

        <div className="bg-gray-100 p-10">
          <div className=" mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Our Vision, Mission, and Values
            </h2>
            <div className="text-center">
              <h3 className="text-xl font-semibold">Vision</h3>
              <p className="mt-4">
                To be the leading provider of digital media solutions,
                transforming creative ideas into reality.
              </p>
              <h3 className="text-xl font-semibold mt-8">Mission</h3>
              <p className="mt-4">
                To deliver top-notch video editing, graphic design, and digital
                marketing services that drive success for our clients.
              </p>
              <h3 className="text-xl font-semibold mt-8">Values</h3>
              <p className="mt-4">
                Innovation, Excellence, Integrity, and Customer Satisfaction.
              </p>
            </div>
          </div>
        </div>

        <Ourclients />
        {/* Bottom Content */}
        <div className="bottom-content mb-20  p-8 text-center">
          <h2 className="text-3xl font-bold">Why Choose NextGen?</h2>
          <p className="mt-4 w-8/12 mx-auto text-lg">
            At NextGen, we believe in pushing the boundaries of creativity and
            technology to deliver solutions that not only meet but exceed our
            clients' expectations. Join us on our journey to innovation and
            success.
          </p>
          <GetstartedBtn prop="custom-lightblue-rgb" />
        </div>
      </div>
      <UserChatPanel/>
    </>
  );
};

export default About;
