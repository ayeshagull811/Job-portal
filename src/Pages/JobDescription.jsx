import axios from "axios";
import { Briefcase, Clock, MapPin, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function JobDescription() {
  const { id } = useParams();
  console.log("job id:", id);

  const [JobsData, setJobsData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/Jobs/getById/${id}`)
      .then((res) => {
        console.log("get data by res: ", res.data.data);
        setJobsData(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching job:", err);
      });
  }, [id]);

  console.log("job data", JobsData);

  return (
    <>
     <Header/>
    <section>
      <div>
        <div className="bg-white p-8 rounded-2xl shadow-md my-10 mx-20">
          <div>
            <p className="font-bold text-2xl text-center">{JobsData.title}</p>
            <div className="flex justify-between">
              <div className="flex items-center gap-5 max-md:flex-col max-md:items-start">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT9yJBpgSDzIniWvWL0Bk571IB3O6PFe-R7Q&s"
                  alt=""
                  className="w-15 h-15 rounded-md shadow-md"
                />
                <div>
                  <p className="flex items-center text-gray-600 font-medium mt-1 gap-1">
                    {JobsData.company}.{" "}
                    <Star color="#facc15" className="w-4 h-4" />
                    {JobsData.rating}
                  </p>
                  <div className="flex flex-wrap gap-3 text-gray-500 mt-4 text-sm ">
                    <p className="flex items-center gap-1 px-3 py-2 rounded-xl bg-gray-100">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      {JobsData.location}
                    </p>
                    <p className="flex items-center gap-1 px-3 py-2 rounded-xl bg-gray-100">
                      <Briefcase className="w-4 h-4 text-gray-400" />
                      {JobsData.type}
                    </p>
                    <p className="flex items-center gap-1 px-3 py-2 rounded-xl bg-gray-100">
                      <Clock
                        className="w-4 h-4 text-gray-400"
                        strokeWidth={1.5}
                      />
                      {JobsData.posted}
                    </p>
                    <p className="flex items-center gap-1 px-3 py-2 rounded-xl bg-purple-100 text-purple-700">
                      $ {JobsData.minsalary}- $ {JobsData.maxsalary}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Link to={`/applynow/${JobsData._id}`}>
                  <button className="bg-gradient-to-r from-purple-900 via-purple-800  to-purple-700 px-6 py-2 text-white rounded-3xl">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
           <hr className="mt-10 text-gray-300"/>
          <div>
            <p className="font-bold text-center mt-20 mb-5 text-xl">
              Job Description
            </p>
            <p className="text-center">{JobsData.JobDescription}</p>
            <p className="font-bold text-center my-7 text-xl">Key Skills</p>
            <div className="flex flex-wrap">
              {JobsData.KeySkills?.map((skill, index) => (
                <p
                  key={index}
                  className="px-2 py-1 mb-2 rounded bg-purple-200 text-purple-700 mr-2"
                >
                  {skill}
                </p>
              ))}
            </div>
            <p className="font-bold text-center my-7 text-xl">
              Responsibilities
            </p>
            <ul className="text-left list-disc marker:text-blue-500 pl-5 text-left space-y-2">
              {JobsData.Responsibilities?.map((element) => (
                <li>
                 {element}
                </li>
              ))}
            </ul>
            <p className="font-bold text-center my-7 text-xl">Requirements</p>
            <ul className="text-left list-disc marker:text-blue-500 pl-5 text-left space-y-2">
              {
                JobsData.Requirements?.map((element) => (
              <li>
                {element}
              </li>
            ))}
            </ul>
            <p className="font-bold text-center my-7 text-xl">Benefits</p>
            <ul className="text-left list-disc marker:text-blue-500 pl-5 text-left space-y-2">
               {
                JobsData.Benefits?.map((element) => (
              <li>
                {element}
              </li>
            ))}
            </ul>
            <div className="flex items-center justify-center mt-20 mb-10">
              <button className="px-6 py-3 bg-purple-700 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-purple-800 transition">
                <Link to={`/applynow/${JobsData._id}`}>Apply for this Position</Link>
              </button>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center text-xl font-semibold my-8">
            Similar Jobs You Might Like
          </p>
          <div className="flex justify-center gap-x-9  flex-wrap my-10">
            <div className="flex bg-white p-6 rounded-2xl shadow-md w-[550px] gap-4 items-start">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT9yJBpgSDzIniWvWL0Bk571IB3O6PFe-R7Q&s"
                alt=""
                className="w-15 h-15 rounded-md shadow-md"
              />
              <div>
                <p className="font-semibold text-xl text-center pl-40">
                  React Developer
                </p>
                <p className="text-center pl-40 text-gray-600">
                  WebDey Solutions
                </p>
                <div className="flex gap-2 my-2">
                  <p className="flex items-center gap-1 px-2 py-1 rounded-xl bg-gray-100">
                    <MapPin className="w-3 h-3 text-gray-400" />
                    Remote
                  </p>
                  <p className="flex items-center gap-1 px-2 py-1 rounded-xl bg-gray-100">
                    <Briefcase className="w-3 h-3 text-gray-400" />
                    Full-time
                  </p>
                </div>
                <Link className="text-purple-700 font-medium hover:underline pl-45 pt-6">
                  Views Details
                </Link>
              </div>
            </div>
            <div className="flex bg-white p-6 rounded-2xl shadow-md w-[550px] gap-4 items-start">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT9yJBpgSDzIniWvWL0Bk571IB3O6PFe-R7Q&s"
                alt=""
                className="w-15 h-15 rounded-md shadow-md"
              />
              <div>
                <p className="font-semibold text-xl text-center pl-40">
                  React Developer
                </p>
                <p className="text-center pl-40 text-gray-600">
                  WebDey Solutions
                </p>
                <div className="flex gap-2 my-2">
                  <p className="flex items-center gap-1 px-2 py-1 rounded-xl bg-gray-100">
                    <MapPin className="w-3 h-3 text-gray-400" />
                    Remote
                  </p>
                  <p className="flex items-center gap-1 px-2 py-1 rounded-xl bg-gray-100">
                    <Briefcase className="w-3 h-3 text-gray-400" />
                    Full-time
                  </p>
                </div>
                <Link className="text-purple-700 font-medium hover:underline pl-45 pt-6">
                  Views Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
export default JobDescription;
