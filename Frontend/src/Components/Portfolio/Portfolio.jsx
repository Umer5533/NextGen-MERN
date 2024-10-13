import React from 'react'
import v1 from '../../assets/videoServices/v1.mp4'
import v2 from '../../assets/videoServices/v2.mp4'
import v3 from '../../assets/videoServices/v3.mp4'
import v4 from '../../assets/videoServices/v4.mp4'
import v5 from '../../assets/videoServices/v5.mp4'
import v6 from '../../assets/videoServices/v6.mp4'
import GetstartedBtn from '../GetStartedBtb/GetstartedBtn'
import UserChatPanel from '../UserChatPanel/UserChatPanel'

const videoProjects = [
    {
      title: 'Project ',
      description: 'Crime Documentary',
      videoUrl:  v1
    },
    {
      title: 'Project ',
      description: 'Lamborghini Urus Advertisment',
      videoUrl: v2
    },
    {
      title: 'Project ',
      description: 'Talking Head Video',
      videoUrl: v3
    },
    {
      title: 'Project ',
      description: 'GIFTOCK Website Promo',
      videoUrl: v4
    },
    {
      title: 'Project ',
      description: 'World Most Powerful Passport',
      videoUrl: v5
    },
    {
      title: 'Project ',
      description: 'Real Estate Video',
      videoUrl: v6
    }
  ];

const Portfolio = () => {
  return (
    <>
    <div className="portfolio-page">
    <h2 className={`inline-block absolute  top-10 left-4 md:left-10 font-bold text-4xl md:text-5xl lg:text-6xl text-custom-pink-rgb `} >NEXT<span className="font-medium uppercase text-2xl md:text-3xl">Gen</span></h2>

      {/* Banner */}
      <div className="flex flex-col justify-end p-20 h-96 bg-custom-skyblue-rgb ">
      <h1 className="text-4xl md:text-4xl text-custom-blue-rgb font-semibold capitalize">
      Our Work Speaks for Itself
                    </h1>
        <p className="mt-4 text-xl">Check out our latest video editing projects. We bring your vision to life!</p>
      </div>

      {/* Video Projects */}
      <div className=" mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {videoProjects.map((project, index) => (
          <div key={index} className="video-project bg-white shadow-lg rounded-lg overflow-hidden">
            <video controls className="w-full h-48 object-cover">
              <source src={project.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="p-4">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="mt-2 text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Content */}
      <div className="bottom-content  p-12 text-center mb-20">
        <h2 className="text-2xl font-bold">Ready to Get Started?</h2>
        <p className="mt-4 text-lg">Contact us today to discuss your next project. Let's make something amazing together!</p>
        <GetstartedBtn prop="custom-lightblue-rgb"/>
      </div>
      <UserChatPanel/>
    </div>
    </>
  )
}

export default Portfolio