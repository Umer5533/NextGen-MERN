import React from "react";
import hicon1 from "../../assets/hicon1.png";
import hicon2 from "../../assets/hicon2.png";
import hicon3 from "../../assets/hicon3.png";
function QualityWeServe() {
  return (
    <div>
      <div className="lg:w-11/12 mx-auto mt-20 lg:mt-28 ">
      <h2 className="capitalize text-3xl font-bold lg:font-extrabold text-custom-darkblue-rgb w-11/12 lg:w-8/12 text-center mx-auto lg:leading-relaxed">Unlock finesse With Our Video Editing
      and Post-Production Services</h2>
        <div className="grid grid-cols-1 grid-rows-auto lg:grid-cols-3 lg:grid-rows-1 mt-8">
          <div className="shadow-xl pb-8 hover:shadow-blue-200">
            <div className="flex justify-center items-center">
              <img src={hicon1} alt="" />
              <h1 className="text-2xl font-semibold text-custom-darkblue-rgb ml-4">Picture Service</h1>
            </div>
            <div className="ml-28 lg:ml-24 mt-4 leading-loose ">
              <p >- Conform</p>
              <p >- Color Correction</p>
              <p >- Titles</p>
              <p >- Caption</p>
              <p >- Dubbing</p>
              <p >- Editorial</p>
              <p >- Storyboard</p>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 shadow-xl pb-8 hover:shadow-blue-200">
            <div className="flex justify-center items-center">
              <img src={hicon2} alt="" />
              <h1 className="text-2xl font-semibold text-custom-darkblue-rgb ml-4">Visual Effects</h1>
            </div>
            <div className="ml-28 mt-4 leading-loose ">
              <p>- Rotoscoping</p>
              <p>- Motion tracking</p>
              <p>- Chroma Removal</p>
              <p>- Motion Graphics</p>
              <p>- Composition</p>
              <p>- Beauty</p>
              <p>- Cleanup</p>
              <p>- Animation</p>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 shadow-xl pb-8 hover:shadow-blue-200">
            <div className="flex justify-center  items-center">
              <img src={hicon3} alt="" />
              <h1 className="text-2xl font-semibold text-custom-darkblue-rgb ml-4">Audio Service</h1>
            </div>
            <div className="ml-28 lg:ml-24 mt-4 leading-loose ">
              <p>- Ad Jingle Creation</p>
              <p>- Corporate Audio</p>
              <p>- Radio Program</p>
              <p>- Music Mixing</p>
              <p>- Audio Conversion</p>
              <p>- Podcast Editing</p>
              <p>- Adobe Audition</p>
              <p>- Soundtrack Pro</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QualityWeServe;
