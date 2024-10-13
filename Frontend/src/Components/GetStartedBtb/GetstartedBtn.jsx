import React from 'react'
import { Link } from 'react-router-dom'
const GetstartedBtn = ({prop}) => {
  return (
    <div className='flex justify-center mt-20'>
        <Link to='/contact' className={`bg-${prop}  text-white px-8 lg:px-10 py-4  rounded`}>Get Started</Link>
    </div>
  
  )
}

export default GetstartedBtn