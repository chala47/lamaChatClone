import React,{useState,useContext} from "react";
import { doc, setDoc,where,collection, query, updateDoc, serverTimestamp, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from './user/userContext';
import profile from '../contents/images/profile.png';
export const Serach = () => {
  const [search,setSearch]=useState('')
  const [user,setuser]=useState('');
  const [err,setErr]=useState('')
  const currentUser=useContext(AuthContext);  

  const onSearch=async (name)=>{
      const dbRef=collection(db,'users')
      const q=query(dbRef,where('displayName','==',name));
      try {
        const querySnapShot = await getDocs(q);
      
        querySnapShot.forEach((doc) => {
          setuser(doc.data());
        });
      } catch (err) {
        setErr(err.message);
      }
   
  }

  const onKeydown = (event) => {
    if (event.key === "Enter") {
      onSearch(event.target.value);
    }
  };
  const onSelect = async () => {
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;

    const res = await getDoc(doc(db, "chats", combinedId));
    
    if (!res.exists()) {
      await setDoc(doc(db, "chats", combinedId), {messages:[]});
      await updateDoc(doc(db,'userChats',currentUser.uid),{
        [combinedId+".userInfo"]:{
           uid:user.uid,
           displayName:user.displayName,
           photoURL:user.photoURL?user.photoURL:null
        },
        [combinedId+".date"]:serverTimestamp()
      })

      await updateDoc(doc(db,'userChats',user.uid),{
        [combinedId+".userInfo"]:{
           uid:currentUser.uid,
           displayName:currentUser.displayName,
           photoURL:currentUser.photoURL?currentUser.photoURL:null
        },
        [combinedId+'.date']:serverTimestamp()
      })
    }
    setuser("");
    setSearch("");
  };
  return (
    <div className="search">
      <input
        name="search"
        onKeyDown={onKeydown}
        onChange={(event)=>setSearch(event.target.value)}
        type="text"
        placeholder="Find a user"
        value={search}
      />
      {err}
      {user && (
        <div className="chats" >
          <div className="userChat" onClick={onSelect}>
            <img src={user.photoURL?user.photoURL:profile} alt="" />
            <div className="userChatInfo">
              <span>{user.displayName}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
