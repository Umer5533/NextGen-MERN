import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Services from "./Components/Services/services.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Home from "./Components/Home/Home.jsx";
import VideoEditing from "./Components/VideoEditing/VideoEditing.jsx";
import GraphicDesign from "./Components/GraphicDesign/GraphicDesign.jsx";
import DigitalMarketing from "./Components/DigitalMarketing/DigitalMarketing.jsx";
import Portfolio from "./Components/Portfolio/Portfolio.jsx";
import About from "./Components/About/About.jsx"
import Signup from "./Components/SignUp/SignUp.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import ProtectedRoute from "./context/ProtectedRoute.jsx";
import AdminChat from "./Chat/AdminChat.jsx";
import UserChat from "./Chat/UserChat.jsx";
import AdminChatWrapper from "./Chat/AdminChatWrapper.jsx";
import UserChatWrapper from "./Chat/UserChatWrapper.jsx";
import AdminLogin from "./Components/AdminLogin/AdminLogin.jsx";
import AdminAuthProvider from "./context/AdminAuthProvider.jsx";
import AdminProtectedRoute from "./context/AdminProtectedRoute.jsx";
import { SocketProvider } from "./Chat/SocketContext.jsx";
import Corporatevideo from "./DescribeServices/ForVideos/Corporatevideo.jsx";
import RealEstate from "./DescribeServices/ForVideos/RealEstate.jsx";
import Productevideo from "./DescribeServices/ForVideos/Productvideos.jsx";
import Interviewvideo from "./DescribeServices/ForVideos/Interviewvideos.jsx";
import Sportsvideo from "./DescribeServices/ForVideos/SportsVideos.jsx";
import Weddingvideo from "./DescribeServices/ForVideos/WeddingVideos.jsx";
import Thumbnail from "./DescribeServices/ForGraphics/Thumbnails.jsx";
import Poster from "./DescribeServices/ForGraphics/Poster.jsx";
import Flyer from "./DescribeServices/ForGraphics/Flyer.jsx";
import LogoDesign from "./DescribeServices/ForGraphics/LogoDesign.jsx";
import BookCover from "./DescribeServices/ForGraphics/BookCover.jsx";
import Seo from "./DescribeServices/ForDigital/Seo.jsx";
import Facebook from "./DescribeServices/ForDigital/Facebook.jsx";
import Tiktok from "./DescribeServices/ForDigital/Tiktok.jsx";
import Google from "./DescribeServices/ForDigital/Google.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "portfolio",
        element: <Portfolio/>
      },
      {
        path: "Services",
        element: <Services />,
      },
      {
        path: "about-us",
        element: <About/>,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: 'VideoEditing',
        element: <ProtectedRoute element={<VideoEditing />} />
      },
      {
        path: 'graphic-design',
        element: <ProtectedRoute element={<GraphicDesign/>} />
      },
      {
        path:'digitalmarketing',
        element: <ProtectedRoute element={<DigitalMarketing/>} />
      },
      {
        path: 'signup',
        element: <Signup/>
      },
      {
        path: 'admin',
        element: <AdminProtectedRoute element={<AdminChatWrapper/>}/>
      },
      {
        path: 'userchat',
        element: <ProtectedRoute element={<UserChatWrapper/>} />
      },
      {
        path: 'adminlogin',
        element: <AdminLogin/>
      },
      {
        path: 'corporatevideos',
        element: <Corporatevideo/>
      },
      {
        path: 'realestatevideos',
        element: <RealEstate/>
      },
      {
        path: 'productvideos',
        element: <Productevideo/>
      },
      {
        path: 'interviewvideos',
        element: <Interviewvideo/>
      },
      {
        path: 'sportsvideos',
        element: <Sportsvideo/>
      },
      {
        path: 'weddingvideos',
        element: <Weddingvideo/>
      },
      {
        path: 'thumbnail',
        element: <Thumbnail/>
      },
      {
        path: 'poster',
        element: <Poster/>
      },
      {
        path: 'flyer',
        element: <Flyer/>
      },
      {
        path: 'logodesign',
        element: <LogoDesign/>
      },
      {
        path: 'bookcover',
        element: <BookCover/>
      },
      {
        path: 'seo',
        element: <Seo/>
      },
      {
        path: 'facebook',
        element: <Facebook/>
      },
      {
        path: 'tiktok',
        element: <Tiktok/>
      },
      {
        path: 'google',
        element: <Google/>
      }
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <SocketProvider> */}
    <AdminAuthProvider>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </AdminAuthProvider>
    {/* </SocketProvider> */}
  </React.StrictMode>
);
