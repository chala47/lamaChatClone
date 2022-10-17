import React, { useState } from "react";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { auth, storage,db } from "../firebase";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const file = event.target.file.files[0];
    try {
      const userResource = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if(file){
        const storageRef = ref(storage,name);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
          (err)=>{
            setError(err.message)
          },
          ()=>{
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
              await updateProfile(userResource.user,{
                displayName:name,
                photoURL:downloadURL
              });
              await setDoc(doc(db, "users", userResource.user.uid), {
                uid:userResource.user.uid,
                displayName:name,
                email: email,
                photoURL:downloadURL
              })
              await setDoc(doc(db, "userChats", userResource.user.uid), {})
            });
          }
        )
      }else{
        await updateProfile(userResource.user,{displayName:name});
        await setDoc(doc(db, "users", userResource.user.uid), {
          uid:userResource.user.uid,
          displayName:name,
          email: email,
        })
        await setDoc(doc(db, "userChats", userResource.user.uid), {})
      }
      navigate('/')   
    } catch (err) {
      setError(err.message.split('(')[1].replace(')',''))
    }
  };

  return (
    <>
      <div className="fromContainer">
        <div className="fomrWrapper">
          <span className="logo">Chala Chat</span>
          <span className="title">Register</span>
          <form onSubmit={onSubmit}>
            <input name="name" required type="text" placeholder="dispaly name" />
            <input name="email" type="text" placeholder="email" />
            <input name="password" type="text" placeholder="password" />
            <input
              name="file"
              style={{ display: "none" }}
              type="file"
              id="file"
            />
            <label htmlFor="file">
              <img src="" alt="" />
              <span>Add an avatar</span>
            </label>
            <button type="submit">Sign up</button>
          </form>
          <span>{error}</span>
          <p>
            you do have an account <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
