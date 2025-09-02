import React from "react";
import TopBar from "./topbar";
import SideBar from "./sidebar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex h-full bg-[#f1f5f9]">
      <SideBar  />
    
        <div className="flex flex-col flex-1">
          <TopBar />
          <div><Outlet/></div>
        </div>
   
    </div>
  );
}

export default Dashboard;
