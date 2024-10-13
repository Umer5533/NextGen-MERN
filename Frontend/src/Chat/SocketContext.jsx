import React, { createContext, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';
import { toast } from 'react-toastify';

// Create the Socket Context
const SocketContext = createContext();

// Custom hook to use the Socket Context
export const useSocket = () => useContext(SocketContext);

// Socket Provider Component
export const SocketProvider = ({ children }) => {
  const [socket] = useState(() => io('http://localhost:5000'));

  useEffect(() => {
    // Request notification permission
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  useEffect(() => {
    // Handle global notification events
    socket.on('notification', (notification) => {
      if (notification.to === 'user' || notification.to === 'admin') {
        // Trigger a browser notification
        if (Notification.permission === 'granted') {
          new Notification('NextGen', { body: notification.message });
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
      socket.off('notification');
    };
  }, [socket]);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};
