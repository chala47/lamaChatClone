import { Timestamp, updateDoc, doc, arrayUnion, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import React, { useContext, useState } from "react";
import attach from "../contents/images/attach.png";
import img from "../contents/images/img.png";
import { AuthContext } from "./user/userContext";
import { v4 as uuid } from "uuid";
import { ChatContext } from "./user/ChatContext";
import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
export const Input = () => {
  const currentUser = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const [text, setText] = useState("");
  const [image, setImage] = useState();

  const onSend = async () => {

    if (image) {
      const storageRef = ref(storage, image.name);
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
        (err) => {
          // setError(err.message)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log('downloadURL',downloadURL)
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                image: downloadURL,
                senderId: currentUser.uid,
                date: Timestamp.now(),
              }),
            });
            
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text: text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
      await updateDoc(doc(db,'userChats',currentUser.uid),{
        [ data.chatId +'.date']:serverTimestamp(),
        [ data.chatId +'.lastMessage']:text
    });
    await updateDoc(doc(db,'userChats',data.user.uid),{
        [ data.chatId +'.date']:serverTimestamp(),
        [ data.chatId +'.lastMessage']:text
    });
    }

    setImage();
    setText("");
  };

  const onEnter = async (event) => {
    if (event.key === "Enter") {
      onSend();
    }
  };

  return (
    <div className="message">
      <div className="input">
        <input
          type="text"
          placeholder="Type someting"
          onChange={(e) => setText(e.target.value)}
          onKeyDown={onEnter}
          value={text}
        />
        <div className="attach">
          <img src={attach} alt="" />
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
            style={{ display: "none" }}
          />
          <label htmlFor="image">
            <img src={img} alt="" style={{ cursor: "pointer" }} />
          </label>
          <button onClick={onSend}>send</button>
        </div>
      </div>
    </div>
  );
};
