import React, { useEffect, useState } from 'react'
import './NavComponent.css'
import {Link} from 'react-scroll'
import {NavLink} from 'react-router-dom'
import menuIcon from '../../assets/menuu.png'
import Login from '../Login/Login'
import { useAuth } from '../../context/AuthProvider.jsx'
import Logout from '../LogOut/Logout.jsx'

const NavComponent = () => {


    const [authUser, setAuthUser] =  useAuth();
console.log(authUser)

    const [sticky, setsticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setsticky(true) : setsticky(false);
        })
    },[])

    const [mobileMenu, setmobileMenu] = useState(false)
    const toggleMenu = ()=>{
            mobileMenu ? setmobileMenu(false) : setmobileMenu(true);
    }

 

  return (
      <>
      {/* <h2 className={`text-custom-pink-rgb ${mobileMenu ? 'anchor': 'h2Opacity'}`} >NEXTGen</h2> */}
    {/* <nav className={`Container ${sticky? 'bg-custom-lightblue-rgb dark-nav' : ''}`}> */}
    <nav className="fixed lg:absolute lg:w-6/12 lg:right-10 right-4 top-10 bg-custo-lightblue-rgb lg:bg-white rounded">

        <ul className={ ` lg:w-full lg:py-1 rounded  bg-custom-lightblue-rgb lg:text-center ${mobileMenu ? '' : 'hideMobileNav'}`}>
            <li ><NavLink onClick={toggleMenu} className = {({isActive})=> ` hover:text-custom-pink-rgb transition-all ${mobileMenu ? 'my': 'anchor '} ${isActive? 'lg:text-white lg:hover:text-white lg:bg-custom-pink-rgb lg:px-6 lg:py-3 rounded  ' : ''}`} to="/" >Home</NavLink></li>
            <li ><NavLink onClick={toggleMenu} className = {({isActive})=> ` hover:text-custom-pink-rgb transition-all ${mobileMenu ? 'my': 'anchor '} ${isActive? 'lg:text-white lg:hover:text-white lg:bg-custom-pink-rgb lg:px-6 lg:py-3 rounded  ' : ''}`} to="/services" >Services</NavLink></li>
            <li ><NavLink onClick={toggleMenu} className=  {({isActive})=> ` hover:text-custom-pink-rgb transition-all ${mobileMenu ? 'my': 'anchor '} ${isActive? 'lg:text-white lg:hover:text-white lg:bg-custom-pink-rgb lg:px-6 lg:py-3 rounded  ' : ''}`} to='/portfolio' >Portfolio</NavLink></li>
            <li ><NavLink onClick={toggleMenu} className=  {({isActive})=> ` hover:text-custom-pink-rgb transition-all ${mobileMenu ? 'my': 'anchor '} ${isActive? 'lg:text-white lg:hover:text-white lg:bg-custom-pink-rgb lg:px-6 lg:py-3 rounded  ' : ''}`} to='/about-us' >About Us</NavLink></li>
            <li ><NavLink onClick={toggleMenu} className = {({isActive})=> ` hover:text-custom-pink-rgb transition-all ${mobileMenu ? 'my': 'anchor '} ${isActive? 'lg:text-white lg:hover:text-white lg:bg-custom-pink-rgb lg:px-6 lg:py-3 rounded' : ' '}`}  to='/contact' >Contact</NavLink></li>
           
           {
            authUser? <li><Logout/></li> :
            <li ><NavLink onClick={({toggleMenu}, ()=>document.getElementById('my_modal_3').showModal())} className = {({isActive})=> ` hover:text-custom-pink-rgb transition-all ${mobileMenu ? 'my': 'anchor '} ${isActive? 'lg:text-white lg:hover:text-custom-pink-rgb  lg:px-6 lg:py-3 rounded' : ' '}`}   >Login</NavLink></li>
           }
           
           
        </ul>

<Login/>

        <img src={menuIcon} alt="" className='open' onClick={toggleMenu} />

      
    </nav>
      </>
  )
}

export default NavComponent