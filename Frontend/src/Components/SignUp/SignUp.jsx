import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';


import close from "../../assets/close.png";
import Login from "../Login/Login";
import axios from "axios";
const Signup = () => {
    const location = useLocation();
     const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        const userInfo ={
            fullname : data.fullname,
            email : data.email,
            password : data.password
        }
        await axios.post("http://localhost:5000/user/signup", userInfo )
        .then((res)=>{
            console.log(res.data)
            if(res.data){
              toast.success("Signup Successufuily")
              setTimeout(() => {
                navigate(from,{replace: true})
                window.location.reload();
              }, 1000);

            }
            localStorage.setItem("Users", JSON.stringify(res.data.user));
        }).catch((err) =>{
            if(err.response){
                console.log(err);
                toast.error("Error: " + err.response.data.message);
            }
        })
      }

      const handleLoginClick = () => {
        navigate("/"); // Navigate to the home page
        setTimeout(() => {
          document.getElementById("my_modal_3").showModal(); // Open the login modal
        }, 100); // Delay to ensure navigation happens before modal opens
      };

  return (
    <>
      <div className="flex h-screen w-full justify-center items-center bg-white">
        <div className="daisy-modal-box " >
          <div className="flex justify-end items-center ">
            <div className="flex h-10 w-12 justify-end items-center">
              <Link to='/'>
                {" "}
                <img
                  className="w-7 hover:w-8 hover:rotate-90 transition-all"
                  src={close}
                  alt=""
                />{" "}
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Signup</h2>

          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                // htmlFor="email"
              >
                Username
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your name"
                {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && <span className="text-sm italic text-red-600">This field is required</span>}
             
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
                {...register("email", { required: true })}
                />
                <br />
                {errors.email && <span className="text-sm italic text-red-600">This field is required</span>}
              
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
                {...register("password", { required: true })}
                />
                <br />
                {errors.password && <span className="text-sm italic text-red-600">This field is required</span>}
            
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Signup
              </button>

              <div>
                <p className="text-sm">
                  Have Account?{" "}
                  <Link onClick={handleLoginClick}
                 
                  className="text-lg text-blue-500 underline">
                    Login
                  </Link>{" "}
                </p>
                <Login/>
              </div>
            </div>
          </form>
          
        </div>
        </div>
    </>
  );
};

export default Signup;
