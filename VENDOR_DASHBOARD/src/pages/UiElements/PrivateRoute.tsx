import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem('user');

  return user && user.refreshToken ? <Navigate to="/auth/signin" /> : children;
};

export default PrivateRoute;
