import React, { useState,useContext } from 'react'
import { signOut } from 'firebase/auth'; 
import { auth } from '../firebase';
import { AuthContext } from './user/userContext';
import { ChatContext } from './user/ChatContext';

export const Navbar = () => {
  const userContex=useContext(AuthContext);
  const {dispatch}=useContext(ChatContext);
  const onSignOut=()=>{
    signOut(auth);
    dispatch({type:'RESET'})
  }
  return (
    <div className='navbar'>
        <sapn className='logo'>Lama chat</sapn>
        <div className='user'>
        <img src={userContex.photoURL} alt=''/>
        <span>{userContex.displayName}</span>
        <button onClick={onSignOut}>logout</button>
        </div>
        </div>
  )
}
