import { BarChart2, Building2, ClipboardList, FileText, LayoutDashboard, Plus, PlusCircle, Settings, UserPlus, Users } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

function SideBar() {
    const { setAuth } = useAuth(); 
    const navigate = useNavigate();   
  const [data, setData] = useState([]);
  const { id } = useParams();
  const userId = id || localStorage.getItem("userId");
  console.log("Route param id:", id);

  useEffect(() => {
    const fetchTasks = async () => {

      console.log("user id in local storage", userId);

      if (!userId) {
        console.error("No user ID found.");
        return;
      }

      try {
        const res = await axios.get(
          "http://localhost:8000/users/loginpage",
          { withCredentials: true }
        );
        alert(res.data.message);
        const userData = res.data.user || res.data;
        console.log("user id:", userData.id);
  
        localStorage.setItem("userId", userData.id);
    const user = res.data.user;
    setAuth({
      isAuthenticated: true,
      userType: res.data.user.role,
      userId: res.data.user._id
    });
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [id]);
  return (
    
      <div className="bg-white w-fit">
        <div className="flex pl-6 py-4">
          <Building2 className="text-blue-600 w-6 h-6" />
          <p className="text-lg text-6xl font-bold bg-gradient-to-r from-purple-700 to-pink-800 bg-clip-text text-transparent">
            ProHire
          </p>
        </div>
        <hr  className="border border-gray-200"/>
        <div className="px-4 mt-5">
            <div className="group flex items-center  gap-2 px-4 py-2 rounded-md border-r-4 border-transparent hover:border-r-blue-600 cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 ">
                <BarChart2 className="w-5 h-5" />
                <p className="text-md font-medium">Dashboard</p>
              </div>
              <Link  to={`/employer-dashboard/${userId}/postjob`}>
              <div className="group flex items-center  gap-2 px-4 py-2 rounded-md border-r-4 border-transparent hover:border-r-blue-600 cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 ">
                <Plus className="w-5 h-5 " />
                 <p className="text-md font-medium">Post Job</p>
              </div>
              </Link>
              <Link   to={`/employer-dashboard/${userId}/managejobs`}>
              <div className="group flex items-center  gap-2 px-4 py-2 rounded-md border-r-4 border-transparent hover:border-r-blue-600 cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 ">
                <FileText className="w-5 h-5" />
                <p className="text-md font-medium">Manage Jobs</p>
              </div>
              </Link>
              <div className="group flex items-center  gap-2 px-4 py-2 rounded-md border-r-4 border-transparent hover:border-r-blue-600 cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 ">
                <Users className="w-5 h-5" />
                <p className="text-md font-medium">Candidates</p>
              </div>
              <div className="group flex items-center  gap-2 px-4 py-2 rounded-md border-r-4 border-transparent hover:border-r-blue-600 cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 ">
                <Settings className="w-5 h-5" />
                <p className="text-md font-medium">Settings</p>
              </div>
        </div>
        <div className="w-50 h-40 p-3 mx-3 mt-4 rounded-lg border border-blue-300 bg-blue-100 text-blue-900">
            <p className="text-sm font-semibold mb-1">Quick Post</p>
            <p className="text-xs mb-4 leading-snug text-blue-700">Need to hire urgently? Post a job in under<br/> 2 minutes.</p>
            <button  className="w-full bg-blue-600 text-white text-sm py-2 rounded-md hover:bg-blue-700 transition-colors">Post Job Now</button>
        </div>
      </div>
  );
}

export default SideBar;
