import React,{useState} from "react";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

const Register = () => {
  const [error,setError]=useState('');
  const onSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(auth, email, password).then((userCredential)=>{
       console.log(userCredential.user);
        <Link  to='/home'/>
    }).catch((error) => {
      setError(error.message);
      const errorCode = error.code;
      const errorMessage = error.message;

      // ..
    });
  };

  return (
    <>
      <div className="fromContainer">
        <div className="fomrWrapper">
          <span className="logo">Chala Chat</span>
          <span className="title">Register</span>
          <form onSubmit={onSubmit}>
            <input name="name" type="text" placeholder="dispaly name" />
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
            <span>{error}</span>
          </form>
          <p>you do have an account <Link to='/login'>Sign In</Link></p>
        </div>
      </div>
    </>
  );
};

export default Register;
