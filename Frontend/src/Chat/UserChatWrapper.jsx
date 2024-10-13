import React from 'react';
import { useOutletContext } from 'react-router-dom';
import UserChat from './UserChat';

const UserChatWrapper = () => {
  const user = useOutletContext();

  const storedUser = JSON.parse(localStorage.getItem("Users"));

  return <UserChat userId={user?.id} username={storedUser?.fullname} />;
};

export default UserChatWrapper;