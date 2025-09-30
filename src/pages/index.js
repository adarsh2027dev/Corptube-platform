// pages/index.js
import React from "react";
import AuthPage from "./authpage"; 
import Sidebar from "./Sidebar";

const HomePage = () => {
  return (
    <div>
 
      <div className="flex bg-black h-screen">
        <Sidebar />
      </div>
      

    </div>
  );
};

export default HomePage;
