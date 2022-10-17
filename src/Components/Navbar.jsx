import React, { useContext } from 'react'
import { signOut } from 'firebase/auth'; 
import { auth } from '../firebase';
import { AuthContext } from './user/userContext';
import { ChatContext } from './user/ChatContext';
import owner from "../contents/images/owner.png";
export const Navbar = () => {
  const userContex=useContext(AuthContext);
  const {dispatch}=useContext(ChatContext);
  const onSignOut=()=>{
    signOut(auth);
    dispatch({type:'RESET'})
  }
  return (
    <div className='navbar'>
        <sapn className='logo'>C-chat</sapn>
        <div className='user'>
        <img src={userContex.photoURL?userContex.photoURL:owner} alt=''/>
        <span>{userContex.displayName}</span>
        <button onClick={onSignOut}>logout</button>
        </div>
        </div>
  )
}
