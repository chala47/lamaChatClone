import React from "react";
import Chats from "./Chats";
import { Navbar } from "./Navbar";
import { Serach } from "./Serach";

export const SideBar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Serach />
      <Chats/>

    </div>
  );
};
