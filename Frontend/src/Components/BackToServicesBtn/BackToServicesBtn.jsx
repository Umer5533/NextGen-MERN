import React from 'react'
import { Link } from 'react-router-dom'
import backward from '../../assets/videoServices/backword.png'
const BackToServicesBtn = () => {
  return (
    <div className='fixed w-12 bottom-4 left-2'>
        <Link to='/services'><img src={backward} alt="" /></Link>
    </div>
  )
}

export default BackToServicesBtn