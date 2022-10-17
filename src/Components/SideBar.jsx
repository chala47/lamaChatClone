import React from "react";
import { Navbar } from "./Navbar";
import { Serach } from "./Serach";
import Chats from "./Chats";


export const SideBar = ({open,toggle}) => {
  return (
    <div className={open?"sidebar":"sidebar closed"}>
      <Navbar />
      <Serach />
      <Chats toggle={toggle}/>

    </div>
  );
};
