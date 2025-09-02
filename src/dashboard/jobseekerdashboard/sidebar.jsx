import {Bookmark, Briefcase, Building2, FileText, Home,  Search, Settings, User, } from "lucide-react";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


function CompanySideBar() {
    const Navigation = useNavigate();
    const {id} = useParams()
  return (
    <>
      <div className=" bg-white">
        <div className="flex pl-6 py-4">
          <Building2 className="text-blue-600 w-6 h-6" />
          <p className="text-lg text-6xl font-bold bg-gradient-to-r from-purple-700 to-pink-800 bg-clip-text text-transparent">
            ProHire
          </p>
        </div>
        <hr  className="border border-gray-200"/>
        <div className="px-4 mt-5">
          <Link to={`/jobseeker-dashboard/${id}/dashboard`} >
            <div className="group flex items-center  gap-2 px-4 py-2 rounded-md border-r-4 border-transparent hover:border-r-blue-600 cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 ">
                <Home className="w-5 h-5" />
                <Link to={`/jobseeker-dashboard/${id}/dashboard`} className="text-md font-medium">Dashboard</Link>
              </div>
              </Link>
              <div className="group flex items-center  gap-2 px-4 py-2 rounded-md border-r-4 border-transparent hover:border-r-blue-600 cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 ">
                <Search className="w-5 h-5 " />
                 <Link  className="text-md font-medium">Search Jobs</Link>
              </div>
              <div className="group flex items-center  gap-2 px-4 py-2 rounded-md border-r-4 border-transparent hover:border-r-blue-600 cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 ">
                <Bookmark className="w-5 h-5 " />
                 <Link  className="text-md font-medium">Saved Jobs</Link>
              </div>
              <Link  to={`/jobseeker-dashboard/${id}/Applications`}>
              <div className="group flex items-center  gap-2 px-4 py-2 rounded-md border-r-4 border-transparent hover:border-r-blue-600 cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 ">
                <FileText className="w-5 h-5" />
                <Link to={`/jobseeker-dashboard/${id}/Applications`} className="text-md font-medium">Applications</Link>
              </div></Link>
              <div className="group flex items-center  gap-2 px-4 py-2 rounded-md border-r-4 border-transparent hover:border-r-blue-600 cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 ">
                <User className="w-5 h-5" />
                <p className="text-md font-medium">Profile</p>
              </div>
              <div className="group flex items-center  gap-2 px-4 py-2 rounded-md border-r-4 border-transparent hover:border-r-blue-600 cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 ">
                <Settings className="w-5 h-5" />
                <p className="text-md font-medium">Settings</p>
              </div>
        </div>
         <div className=" p-4 rounded-xl bg-[#f5f5ff] shadow-sm text-sm mx-4 my-7">
      <p className="text-gray-800 font-medium mb-1">Career Goal Progress</p>

      <div className="flex items-center space-x-2 text-blue-600 font-medium mb-2">
        <Briefcase className="w-4 h-4" />
        <span>Software Engineer</span>
      </div>

      <div className="w-full bg-blue-100 rounded-full h-2.5 mb-2">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: '65%' }}
        />
      </div>
   {/* <input type="range" className="range-slider" /> */}

      <p className="text-blue-600 font-medium">65% match rate</p>
    </div>
      </div>
    </>
  );
}

export default CompanySideBar;
