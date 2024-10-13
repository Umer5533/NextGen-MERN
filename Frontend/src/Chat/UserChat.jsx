import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
// import { useSocket } from "./SocketContext";
import "./Chat.css"; // For custom styles
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import send from "../assets/videoServices/send.png";
import chatvec from "../assets/videoServices/chat-vec.png";
import { Link } from "react-router-dom";

const socket = io("http://localhost:5000");

const UserChat = ({ userId, username }) => {
  // const socket = useSocket(); // Access the global socket instance
  // Accept userId and username as props
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null); // Reference for the messages container

    // Request notification permission
    useEffect(() => {
      if (Notification.permission !== 'granted') {
        Notification.requestPermission();
      }
    }, []);

  useEffect(() => {
    socket.emit("load messages", userId); // Load messages for the specific user

    socket.on("load messages", (msgs) => {
      setMessages(msgs);
    });

    socket.on("chat message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
      
      if (msg.role === "admin") {
      toast.info(`New message from NextGen: ${msg.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    });




    socket.on('notification', (notification) => {
      if (notification.to === 'user' && notification.userId === userId) {
        // Trigger browser notification for user
        if (Notification.permission === 'granted') {
          new Notification('NexGen', { body: notification.message });
        } else if (Notification.permission !== 'denied') {
          Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
              new Notification('NextGen', { body: notification.message });
            }
          });
        }
      }
    });

    return () => {
      socket.off("load messages");
      socket.off("chat message");
      socket.off("notification");

    };
  }, [socket, userId]); // Re-run when userId changes

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (input && username) {
      const message = { username, message: input, role: "user", userId }; // Include userId
      socket.emit("chat message", message);
      setInput("");
    }
  };

  return (
    <>
      <div className="flex ">
        <div className="w-6/12 bg-custom-skyblue-rgb">
          <h2
            className={`inline-block absolute  top-8 left-4 md:left-10 font-bold text-5xl   text-custom-pink-rgb `}
          >
            NEXT<span className="font-medium uppercase text-2xl ">Gen</span>
          </h2>

          <div className="flex justify-between">
            <div>
             <p className="mt-48 ml-12 text-2xl text-gray-500">Hi there, <br /> <span className="capitalize text-5xl text-custom-pink-rgb font-bold">{username} </span><br />What would like to know?</p>
            
            </div>
            <div>
              <img className="w-72" src={chatvec} alt="" />
            </div>
          </div>

<div className="flex justify-center items-end h-40">
          <div >
          <Link to='/' className=" bg-custom-pink-rgb text-white px-6 lg:px-8 py-4 rounded  ">Home</Link>
                    <Link to='/services' className=" bg-custom-lightblue-rgb text-white px-6 lg:px-8 py-4 ml-4 rounded">
                      Services
                    </Link>
          </div>
          </div>
        </div>
        <div className="flex h-screen bg-white justify-center items-end w-6/12 ">
          <div className="chat-container">
            <h1>
              Chat is your's now <span className="capitalize">{username} </span>{" "}
            </h1>
            <div className="messages-container-user my-scrollable-userAdmin-div">
              {messages.map((msg, index) => (
                <div className="block">
                  <div
                    className={`flex ${
                      msg.role === "admin" ? "justify-start" : " justify-end "
                    }`}
                  >
                    <div
                      key={index}
                      className={`message-bubble  ${
                        msg.role === "admin"
                          ? "admin-bubble"
                          : " user-bubble  color-user"
                      }`}
                    >
                      {/* <strong>{msg.username}</strong>: */}
                      <div>{msg.message}</div>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <form onSubmit={sendMessage} className="message-form">
              <input
                type="text"
                placeholder="Type a message"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="message-input"
              />
              <button type="submit" className="send-button">
                <img
                  className=" hover:scale-110 hover:drop-shadow-2xl transition"
                  src={send}
                  alt=""
                />
              </button>
            </form>
          </div>
        </div>
       
        {/* <ToastContainer /> */}

      </div>
    </>
  );
};

export default UserChat;
