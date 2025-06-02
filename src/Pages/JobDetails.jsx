import React, { useContext } from "react";
import { Link } from "react-router-dom";

import {
  Star,
  MapPin,
  Briefcase,
  Clock,
  Bookmark,
  SquareArrowOutUpRight,
} from "lucide-react";



function JobDetail({Data}) {
  return (
    <section>
      <div className="flex justify-between bg-white p-8 rounded-2xl shadow-md mt-5 mx-10 ">
        <div className="flex items-center gap-5 max-md:flex-col max-md:items-start">
          <div className="relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT9yJBpgSDzIniWvWL0Bk571IB3O6PFe-R7Q&s"
              alt=""
              className="w-20 h-20 rounded-md shadow-md object-contain"
            />
            {Data.isFeatured && (
              <span className="absolute top-0 right-4 bg-purple-200 text-purple-700 text-xs font-bold px-2 py-1 rounded-xl">
                Featured
              </span>
            )}
            {Data.isHot && (
              <span className="absolute bottom-0 left-8 bg-orange-100 text-orange-700 text-xs font-bold px-5 py-1 rounded-xl">
                Hot
              </span>
            )}
          </div>
          <div>
            <p className="text-xl font-semibold text-black hover:underline cursor-pointer">
              <Link to={`/jobdescription/${Data._id}`}>{Data.title}</Link>
            </p>
            <p className="flex items-center text-gray-600 font-medium mt-1 gap-1">
               {Data.company}. <Star color="#facc15" className="w-4 h-4" />
              {Data.rating}
            </p>
            <div className="flex flex-wrap gap-3 text-gray-500 mt-4 text-sm ">
              <p className="flex items-center gap-1 px-3 py-2 rounded-xl bg-gray-100">
                <MapPin className="w-4 h-4 text-gray-400" />
                {Data.location}
              </p>
              <p className="flex items-center gap-1 px-3 py-2 rounded-xl bg-gray-100">
                <Briefcase className="w-4 h-4 text-gray-400" />
                {Data.type}
              </p>
              <p className="flex items-center gap-1 px-3 py-2 rounded-xl bg-gray-100">
                <Clock className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
                {Data.posted}
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mt-3">
              {Data.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-purple-200 to-pink-100 text-purple-700 px-3 py-1 rounded text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            </div>
          </div>
        </div>
        <div className="ml-110 border-l border-gray-300"></div>
        <div className="flex flex-col justify-between">
          <p className="text-purple-700 font-semibold text-lg">$ {Data.minsalary}-$ {Data.maxsalary}</p>
          <button className="flex items-center gap-1 bg-white text-gray-600  px-8 py-2 rounded-lg hover:bg-purple-50 border border-gray-500 transition">
            <Bookmark className="w-4 h-4 text-gray-600" />
            Save Job
          </button>
          <Link to={`applynow/${Data._id}`}>
            <button className="flex items-center gap-1 bg-gradient-to-r from-purple-800 via-puple-600 to-purple-600 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-yellow-500 transition">
              <SquareArrowOutUpRight className="w-4 h-4 text-white" />
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default JobDetail;
