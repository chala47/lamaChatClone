import React from "react";

const SignIn = () => {
  return (
    <>
      <div className="fromContainer">
        <div className="fomrWrapper">
          <span className="logo">Lama Chant</span>
          <span className="titile">Login</span>
          <form>
            <input type="text" placeholder="dispaly name" />
            <input type="text" placeholder="email" />
            <button>Sign in</button>
          </form>
          <p>you do have an account</p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
