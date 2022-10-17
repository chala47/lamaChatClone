import React, { useContext } from 'react'
import back from '../contents/images/back.png'
import cam from '../contents/images/cam.png';
import more from '../contents/images/more.png';
import add from '../contents/images/add.png';
import profile from "../contents/images/profile.png";
import { ChatContext } from './user/ChatContext';

export const Header = ({displayName,toggle}) => {

  const {data}=useContext(ChatContext);

  return (
    <div className="header">
      <div className="back">
        <img src={back} alt="" onClick={toggle} />
      </div>
      <div className='chatuser'>
      <img
        src={
          data.user.photoURL ? data.user.photoURL : profile
        }
        alt=""
      />
      <span className="title">{displayName}</span>
      </div>
      <div className="setting">
        <img src={cam} alt="" />
        <img src={add} alt="" />
        <img src={more} alt="" />
      </div>
    </div>
  );
}
