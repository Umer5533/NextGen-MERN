import React from 'react'
import Banner from '../Banner/banner'
import QualityWeServe from '../QualityWeServe/QualityWeServe'
import VideoCategories from '../VideoCategories/VideoCategories'
import TimeLine from '../TimeLine/TimeLine'
import Ourclients from '../Ourclients/Ourclients'
import UserChatPanel from '../UserChatPanel/UserChatPanel'

const Home = () => {
  return (
    <>
    <div className=''>
    <Banner/>
    <QualityWeServe/>
    <VideoCategories/>
    <TimeLine/>
    <Ourclients/>
    <UserChatPanel/>
    </div>
   
    </>
  )
}

export default Home