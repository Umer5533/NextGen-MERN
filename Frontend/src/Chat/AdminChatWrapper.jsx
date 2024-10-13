import React, { useEffect, useState } from "react";
import { useOutletContext, Link } from "react-router-dom";
import AdminChat from "./AdminChat";
import axios from "axios";
import AdminLogout from "../Components/AdminLogOut/AdminLogout";

const AdminChatWrapper = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token from localStorage:", token);
    axios
      .get("http://localhost:5000/users-with-messages", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <>
    <div className="flex flex-1 justify-center items-end w-full h-screen">
      <div className="bg-white w-full">
        <div className="flex justify-between items-center pt-4 pr-8 pl-8">
          <div className="">
            <h1 className="text-2xl">Admin's Chat</h1>
          </div>
          <div className="flex">
            <div className="mr-4 flex justify-center items-center ">
              <Link to="/" className='block px-4 py-2 bg-custom-pink-rgb hover:bg-fuchsia-500 transition text-white rounded-md cursor-pointer'>Home</Link>
            </div>
            <AdminLogout />
          </div>
        </div>
        <div className="admin-chat-wrapper  pt-6 ">
          <div className="user-list">
            <h2>Users</h2>
            <ul className="my-scrollable-div">
              {users.map((user) => (
                <li key={user._id} onClick={() => setSelectedUser(user)}>
                  {user.fullname}
                </li>
              ))}
            </ul>
          </div>
          {selectedUser && (
            <AdminChat
              userId={selectedUser._id}
              username={selectedUser.fullname}
            />
          )}
        </div>
      </div>
      </div>
    </>
  );
};

export default AdminChatWrapper;
