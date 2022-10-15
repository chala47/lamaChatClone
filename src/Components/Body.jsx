import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../firebase";
import React, { useEffect, useState } from "react";
import { Message } from "./Message";
export const Body = ({ data }) => {
  const [messages, setMessages] = useState();

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      setMessages(doc.data().messages);
      return () => {
        unsub();
      };
    });
  }, [data.chatId]);
  console.log(messages)
  return (
    <div className="body">
      {messages?.map((message) => {
       return  <Message message={message} />;
      })}
    </div>
  );
};
