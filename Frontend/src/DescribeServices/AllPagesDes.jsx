import React from 'react'
import { Link } from 'react-router-dom'

const AllPagesDes = ({props}) => {
  return (
    <>
    <div className='flex justify-center'>
        <Link to='/' className='block bg-fuchsia-500 text-white p-4 w-40 text-center rounded'>Home</Link>
        <Link to={props} className='block bg-blue-400 text-white p-4 w-40 text-center ml-4 rounded'>Categories</Link>
        </div>
        </>
  )
}

export default AllPagesDes