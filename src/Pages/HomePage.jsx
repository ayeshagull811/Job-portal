import React, { useEffect, useState } from "react";
import { Search, MapPin, Briefcase, BriefcaseBusiness } from "lucide-react";
import { Link } from "react-router-dom";
import JobDetail from "./JobDetails";
import JobCard from "./JobCard";

function HomePage({ data }) {
  
  return (
    <>
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 py-16 px-4 text-center text-white">
        <div className="text-center mb-8">
          <p className="text-3xl font-bold text-white mb-2 ">
            Discover Your Dream Job
          </p>
          <p className="text-gray-300 mb-6">
            Find opportunities that match your skills and aspirations
          </p>
          <div className="max-w-6xl mx-auto flex justify-center items-center  bg-white/10 p-3 rounded-xl border border-white/15 shadow-lg flex flex-col md:flex-row gap-3 ">
            <div className="flex items-center border border-gray-300 w-130 pl-5 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30">
              <Search className="w-7 h-7 text-gray-400 mr-4" />
              <input
                type="text"
                placeholder="Job , title, keyboards or company"
                className="w-full outline-none text-gray-900 placeholder-gray-400"
              />
            </div>
            <div className="flex items-center border border-gray-300  pl-5 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 ">
              <MapPin className="w-7 h-7 text-gray-400 mr-4" />
              <input
                type="text"
                placeholder="Location"
                id="password"
                className="w-full outline-none text-gray-900 placeholder-gray-400"
              />
            </div>
            <div className="flex items-center border border-gray-300  pl-5 py-3  pr-4 py-2 rounded-lg bg-white/20 border border-white/30">
              <BriefcaseBusiness className="w-7 h-7 text-gray-400 mr-4" />
              <select className="w-full text-gray-400 bg-transparent">
                <option className="bg-purple-400">Job Type</option>
                <option className="bg-purple-400">Full-time</option>
                <option className="bg-purple-400">Part-time</option>
              </select>
            </div>
            <div>
              <button className="w-50 border border-gray-300 rounded px-4 py-3 hover:bg-purple-700 rounded-lg text-purple-900">
                Search
              </button>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-white">
            <p>Popular:</p>
            <Link className="bg-white/20 px-4 py-1 rounded-full">Remote</Link>
            <Link className="bg-white/20 px-4 py-1 rounded-full">
              Developer
            </Link>
            <Link className="bg-white/20 px-4 py-1 rounded-full">Design</Link>
            <Link className="bg-white/20 px-4 py-1 rounded-full">
              Marketing
            </Link>
          </div>
        </div>
      </div>
      <JobCard />
    </>
  );
}
export default HomePage;
