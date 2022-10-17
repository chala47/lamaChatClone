import React, {useState } from "react";
import { Chat } from "../Components/Chat";
import { SideBar } from "../Components/SideBar";

export const Home = () => {
  const [open,setOpen]=useState(true);

  const toggle=()=>{
     setOpen(!open);
  }

  return (
    <div className="home">
      <div className="container">
        <SideBar open={open} toggle={toggle}/>
        <Chat  open={open} toggle={toggle}/>
      </div>
    </div>
  );
};
export default Home;
