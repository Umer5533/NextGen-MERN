import React from 'react'
import { Link } from 'react-router-dom'
import gif from '../../assets/videoServices/gif.gif'
import { useAuth } from '../../context/AdminAuthProvider'
const UserChatPanel = () => {
    const [authUser] = useAuth(); 
  return (
    <>
    { authUser? 
    <div className='fixed w-36 bottom-4 right-2 z-50'>
        <Link  to='/admin'><img  src={gif} alt="" /></Link>
    </div> :
    <div className='fixed w-36 bottom-4 right-2 z-50'>
        <Link  to='/userchat'><img  src={gif} alt="" /></Link>
    </div>
    }
    </>
  )
}

export default UserChatPanel;