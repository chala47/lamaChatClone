import { onSnapshot, doc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { ChatContext } from "./user/ChatContext";
import { AuthContext } from "./user/userContext";

const Chats = () => {
  const currentUuser = useContext(AuthContext);
  const {data,dispatch}=useContext(ChatContext);
  const [chat, setChat] = useState();

  useEffect(() => {
    const getchat = () => {
      const unsub = onSnapshot(
        doc(db, "userChats", currentUuser.uid),
        (doc) => {
          setChat(doc.data());
        }
      );
      return () => {
        unsub();
      };
    };
    currentUuser.uid && getchat();
  }, [currentUuser.uid]);

  console.log(chat);

  const onSelect=(chatuser)=>{
     dispatch({type:'CHANGE_USER',payload:chatuser})
  }
  
  return (
    <>
      {" "}
      {chat && (
        <div className="chats">
          {Object.keys(chat).map(uid => {
            return <div className="userChat" onClick={()=>onSelect(chat[uid].userInfo)}>
              <img src={chat[uid].userInfo.photoURL} alt="" />
              <div className="userChatInfo">
                <span>{chat[uid].userInfo.displayName}</span>
                <p>{chat[uid]?.lastMessage}</p>
              </div>
            </div>;
          })}
        </div>
      )}
    </>
  );
};

export default Chats;
