import React, { useContext, useEffect, useRef } from "react";
import { ChatContext } from "./user/ChatContext";
import { AuthContext } from "./user/userContext";

export const Message = ({message}) => {
  const currentUser=useContext(AuthContext);
  const {data}=useContext(ChatContext);
  const ref=useRef()
  useEffect(()=>{
  ref.current?.scrollIntoView({behaviour:'smooth'})
  },[message])
  console.log("data",data)
  return (
    <div ref={ref} className={`message ${message.senderId===currentUser.uid?'owner':''}`}>
      <div className="profile">
        <img
          src={message.senderId===currentUser.uid?currentUser?.photoURL:data.user?.photoURL}
          alt=""
        />
         <span> {}</span>
      </div>
      <div className="messageContent">
      <p >{message.text}</p>
      <img src={message?.image} key={message.id}/>
    </div>
      </div>
      
  );
};
