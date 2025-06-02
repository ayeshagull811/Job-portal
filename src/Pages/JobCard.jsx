import React, { useContext, useEffect, useState } from "react";
import JobDetail from "./JobDetails";
import { Filter } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";





function JobCard() {
  const API_URL = "http://localhost:8000/Jobs/get";
  const [data, setData] = useState([]);



  useEffect(() => {
    axios.get(API_URL)
    .then((res) => {
      console.log("res: ", res.data);
      setData(res.data);
    });
  }, []);




  return (
    <div className="bg-gray-100">



      <div className="flex justify-between">
        <p className="text-2xl font-bold text-gray-800 mt-15 ml-10">
          {data.length} Jobs Available
        </p>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 bg-white py-2 border rounded-xl text-gray-700 hover:bg-gray-100 mt-15 ml-10">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className=" gap-2 px-5 py-2 border rounded-xl text-gray-700 hover:bg-gray-100 mt-15 mr-12 bg-white">
            Most Recent
          </button>
        </div>
      </div>


      <div className="">
        {data.map((job) => {
          return <JobDetail key={job.id} Data={job} />;
        })}
      </div>


      <div className="flex items-center justify-center">
        <Link>
          <button className="px-6 py-3 bg-gray-100 border border-gray-400 my-15 text-purple-700 rounded-lg shadow hover:bg-gray-100 transition">
            View All Jobs
          </button>
        </Link>
      </div>


    </div>
  );
}

export default JobCard;
