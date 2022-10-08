import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Components/user/userContext';

export const PrivateRoute = ({children}) => {
  const currentuser=useContext(AuthContext);
  if(!currentuser){
    return <Navigate to='/login'/>
  }
  return children
}

export default PrivateRoute;