import React from "react";

const Register = () => {
  return (
    <>
      <div className="fromContainer">
        <div className="fomrWrapper">
          <span className="logo">Lama Chat</span>
          <span className="title">Register</span>
          <form>
            <input type="text" placeholder="dispaly name" />
            <input type="text" placeholder="email" />
            <input type="text" placeholder="password" />
            <input style={{display:'none'}} type="file" id='file' />
            <label htmlFor="file">
                <img src=''alt=''/>
                <span>Add an avatar</span>
            </label>
            <button>Sign up</button>
          </form>
          <p>you do have an account</p>
        </div>
      </div>
    </>
  );
};

export default Register;
