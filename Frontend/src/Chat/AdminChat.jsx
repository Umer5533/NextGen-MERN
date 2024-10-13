import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import "./Chat.css"; // For custom styles
import send from '../assets/videoServices/send.png'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useSocket } from "./SocketContext";

const socket = io("http://localhost:5000");

const AdminChat = ({ userId, username }) => {
  // const socket = useSocket(); // Access the global socket instance

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null); // Reference for the messages container


  //  Request notification permission
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
      if (msg.userId === userId) {
        setMessages((prevMessages) => [...prevMessages, msg]);
        // Show a toast notification when a new message is received

        if (msg.role === "user") {
        toast.info(`New message from ${username}: ${msg.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      }
    });


    //  Listen for notification event
     socket.on("notification", (notification) => {
      if (notification.to === "admin" && notification.userId === userId) {
        // Trigger browser notification for admin
        if (Notification.permission === 'granted') {
          new Notification(notification.message);
        } else if (Notification.permission !== 'denied') {
          Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
              new Notification(notification.message);
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
  }, [socket, userId, username]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);


  const sendMessage = (e) => {
    e.preventDefault();
    if (input && username) {
      const message = { username, message: input, role: "admin", userId };
      socket.emit("chat message", message);
      setInput("");
    }
  };

  return (
    <>
      
        <div className="chat-container">
          <h1>Chat with <span className="capitalize">{username}</span></h1>
          <div className="messages-container-admin my-scrollable-userAdmin-div">
            {messages.map((msg, index) => (
              <div className="block">
              <div className={`flex ${
                  msg.role === "admin" ? "justify-end" : " justify-start "
                }`}>
              <div
                key={index}
                className={`message-bubble ${
                  msg.role === "admin" ? "admin-bubble" : "user-bubble color-user"
                }`}
              >
                {/* <strong>{msg.username}</strong>:  */}
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
              <img className=" hover:scale-110 hover:drop-shadow-2xl transition" src={send} alt="" />
            </button>
          </form>
          {/* <ToastContainer /> */}

        </div>
      
    </>
  );
};

export default AdminChat;
