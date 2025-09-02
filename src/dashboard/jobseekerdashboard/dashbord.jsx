
import CompanySideBar from "./sidebar";
import CompanyTopBar from "./topbar";
import { Outlet } from "react-router-dom";

function CompanyDashboard() {
  return (
    <div className="flex h-full bg-[#f1f5f9]">
      <CompanySideBar />
    
        <div className="flex flex-col flex-1">
          <CompanyTopBar />
          <div className="p-4"><Outlet /></div>
        </div>
   
    </div>
  );
}

export default CompanyDashboard;