import React, { useState } from "react";
import NavComponent from "./Components/NavBar/NavComponent";

import Footer from "./Components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import useScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import  { Toaster } from 'react-hot-toast';
import { ToastContainer } from "react-toastify";


const App = () => {
  useScrollToTop();
  const location = useLocation();
  const noNavFooterPaths = ['/signup','/admin','/userchat', '/adminlogin', '/corporatevideos', '/realestatevideos',  '/productvideos', '/interviewvideos', '/sportsvideos', '/weddingvideos' , '/thumbnail', '/poster', '/flyer', '/logodesign', '/bookcover', '/seo', '/facebook', '/tiktok', '/google'];

  const shouldShowNavFooter = !noNavFooterPaths.includes(location.pathname);
  const user = JSON.parse(localStorage.getItem("Users")); // Retrieve user info from local storage

  return (
    <>
      {shouldShowNavFooter && <NavComponent />}
      <Outlet context={user}/>
      {shouldShowNavFooter && <Footer/>}
      <Toaster />
      <ToastContainer />
    </>
  );
};

export default App;
