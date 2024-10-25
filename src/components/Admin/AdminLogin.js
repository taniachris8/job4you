
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Admin = () => {
  const { user } = useContext(AuthContext);

  if (!user || user.role !== 'admin') {
    return <div>Access denied</div>;
  }

  return <div>Welcome, {user.username}! You are logged in as an admin.</div>;
};

export default Admin;
