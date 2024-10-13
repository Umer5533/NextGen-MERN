import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider'


const Logout = () => {
const [authUser, setAuthUser] = useAuth()

const handleLogout = () =>{
    try {
        setAuthUser({
            ...authUser,
            user:null 
        }) 
        localStorage.removeItem("Users")
        window.location.reload();
    } catch (error) {
        
    }
} 

  return (
    <div>
        <Link onClick={handleLogout} className='px-3 py-2 text-red-600  rounded-md cursor-pointer'>Logout</Link>
    </div>
  )
}

export default Logout