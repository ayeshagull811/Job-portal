// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import {
  Building2,
  DollarSign,
  FileText,
  GraduationCap,
  Settings,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

function JobSideBar() {
  const { auth } = useAuth();
const userId = auth?.userId;
  return (
    <div className="ml-10 bg-white mt-5 w-fit pb-5 rounded-xl shadow">
      <div className=" pl-6 py-4">
        <p className="font-bold">Progress</p>
      </div>

      <div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer hover:bg-blue-100 hover:text-blue-600 transition-colors mx-3 mb-2">
          <Building2 className="w-5 h-5 " />
          <Link  to={`/employer-dashboard/${userId}/postjob/BasicInfo`} className="text-md font-medium">Basic Info</Link>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer hover:bg-blue-100 hover:text-blue-600 transition-colors mx-3 mb-2">
          <FileText className="w-5 h-5" />
          <Link to={`/employer-dashboard/${userId}/postjob/JobDetails`}className="text-md font-medium">Job Details</Link>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer hover:bg-blue-100 hover:text-blue-600 transition-colors mx-3 mb-2">
          <GraduationCap className="w-5 h-5 " />
          <Link to={`/employer-dashboard/${userId}/postjob/Requirement`} className="text-md font-medium">Requirements</Link>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer hover:bg-blue-100 hover:text-blue-600 transition-colors mx-3 mb-2">
          <DollarSign className="w-5 h-5" />
          <Link to={`/employer-dashboard/${userId}/postjob/Compensation`} className="text-md font-medium">Compensation</Link>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer hover:bg-blue-100 hover:text-blue-600 transition-colors mx-3 mb-2">
          <Settings className="w-5 h-5" />
          <Link to={`/employer-dashboard/${userId}/postjob/Application`}className="text-md font-medium">Application</Link>
        </div>
      </div>
      <hr className="border border-gray-200 mx-5" />
      <div className="px-4 py-4 mt-5 mx-6 rounded-lg bg-blue-100 text-blue-900 text-sm">
  
          <p className="text-sm font-semibold mb-1">💡  Tip</p>
        

        <p className="text-xs mb-4 leading-snug text-blue-700">
          Use clear, specfic job titles that
          <br /> candidates would seacrh for
        </p>
    
      </div>
    </div>
  );
}

export default JobSideBar;
