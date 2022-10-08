import React,{useState} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link,useNavigate } from "react-router-dom";
import { auth } from "../firebase";
const SignIn = () => {
  const [error,setError]=useState('');
  const navigate=useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      const user = userCredential.user;
      console.log(user);
      navigate('/home')
    })  
    .catch((error) => {
      setError(error.message)
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  };
  return (
    <>
      <div className="fromContainer">
        <div className="fomrWrapper">
          <span className="logo">Lama Chant</span>
          <span className="titile">Login</span>
          <form onSubmit={onSubmit}>
            <input name="email" type="text" placeholder="email" />
            <input name="password" type="password" placeholder="password" />
            <button type="submit">Sign in</button>
            <span>{error}</span>
          </form>
          <p>you do have an account <Link to='/login'>Sign In</Link></p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
