import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import axios from "axios";

import close from "../../assets/close.png";
import toast from "react-hot-toast";
const AdminLogin = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        const userInfo ={
            email : data.email,
            password : data.password
        }
        await axios.post("http://localhost:5000/user/adminlogin", userInfo )
        .then((res)=>{
            console.log(res.data)
            if(res.data){
                toast.success("Login successfully as a admin")
                
                setTimeout(() => {
                    // navigate("/admin");
                  window.location.href = '/admin'
                }, 1000);

            }
            localStorage.setItem("Admin", JSON.stringify(res.data.user));
        }).catch((err) =>{
            if(err.response){
                console.log(err);
               toast.error("Error: " + err.response.data.message);
            }
        })
      }


  


  return (
    <>
      <div className="flex h-screen w-full justify-center items-center bg-white">
        <div className="daisy-modal-box">
          <div className="flex justify-end items-center">
            <div className="flex h-10 w-12 justify-end items-center">
              <Link to='/'
              >
                
                <img
                  className="w-7 hover:w-8 hover:rotate-90 transition-all"
                  src={close}
                  alt=""
                />
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Admin Login</h2>

          <form method="dialog" onSubmit={handleSubmit(onSubmit)} >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email"
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
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Password"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && <span className="text-sm italic text-red-600">This field is required</span>}
            </div>
            <div className="flex items-center justify-start">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>

              <div>
              
              </div>
            </div>
          </form>
          
        </div>
        </div>
    </>
  );
};

export default AdminLogin;
