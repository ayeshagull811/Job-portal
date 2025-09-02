import React, { useState } from "react";
import JobSideBar from "../pages/sideBar";
import JobNavBar from "../pages/navBar";
import { Outlet, useNavigate } from "react-router-dom";

function PostJob(){
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
      company: "",
      location: "",
      type: "",
      posted: "",
      tags: [],
      minsalary: "",
      maxsalary: "",
      rating: "",
      JobDescription: "",
      KeySkills: [],
      Responsibilities: [],
      Requirements: [],
      Benefits: []
    });
  
    return(
        <div className=" flex flex-col flex-1">
           <div className=" z-10 mt-4 ml-5 mr-3"> <JobNavBar />
     
    
        <div className="flex  w-full bg-[#f1f5f9]">
          <JobSideBar />
          <div className=" "><Outlet context={{ formData, setFormData, navigate }}/></div>
        </div>
   
    </div>
        </div>
    )
}

export default PostJob;