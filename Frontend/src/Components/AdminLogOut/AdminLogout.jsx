import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AdminAuthProvider'


const AdminLogout = () => {
const [authUser, setAuthUser] = useAuth()

const handleLogout = () =>{
    try {
        setAuthUser({
            ...authUser,
            user:null 
        }) 
        localStorage.removeItem("Admin")
        window.location.reload();
    } catch (error) {
        
    }
} 

  return (
    <div>
        <Link onClick={handleLogout} className='block px-4 py-2 bg-red-400 hover:bg-red-500 transition text-white rounded-md cursor-pointer'>Logout</Link>
    </div>
  )
}

export default AdminLogout