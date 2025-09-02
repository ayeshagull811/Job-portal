import {
  Briefcase,
  Clock,
  MapPin,
  Star,
  Upload,
  UploadIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import axios from "axios";
import Footer from "./Footer";
import Header from "./Header";

function ApplyNow(props) {
   const [applyForm , setapplyForm] = useState({
    fullname:"",
      email:"",
      coverletter:"",
      phoneNumber:"",
      appliedjob:""
   })
   const handleChange = (e) => {
  const { name, value } = e.target;
  setapplyForm((prev) => ({
    ...prev,
    [name]: value,
  }));
};
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8000/applyjob/applynow",
        applyForm,
        
      );
      alert(res.data.message); 
    } catch (err) {
      console.error(err);
      alert("fail to apply for job");
    }
  };
  const { id } = useParams();
  console.log("job id", id)
 
  const [applyJob , setapplyJob]= useState([]);
  useEffect(() => {
     axios.get(`http://localhost:8000/Jobs/getById/${id}`)
        .then((res) => {
           console.log('apply for job by id: ', res.data.data)
          setapplyJob(res.data.data); // Save job data from backend
          setapplyForm((prev) => ({
    ...prev,
  appliedjob: res.data.data._id,
  }));
        })
         .catch((err) => {
              console.error("Error fetching job:", err);
           });
  },[id])
    
    console.log("job data", applyJob);
  
  return (
    <>
     <Header/>
    <section className="bg-gray-100 py-10">
    <form onSubmit={handleSubmit}>
      <div className="bg-white p-8 rounded-2xl shadow-md  mx-20">
        <div>
          <p className="font-bold text-2xl text-center">{applyJob.title}</p>
          <div className="flex justify-between">
            <div className="flex items-center gap-5 max-md:flex-col max-md:items-start">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT9yJBpgSDzIniWvWL0Bk571IB3O6PFe-R7Q&s"
                alt=""
                className="w-15 h-15 rounded-md shadow-md"
              />
              <div>
                <p className="flex items-center text-gray-600 font-medium mt-1 gap-1">
                  {applyJob.company}. <Star color="#facc15" className="w-4 h-4" />
                  {applyJob.rating}
                </p>
                <div className="flex flex-wrap gap-3 text-gray-500 mt-4 text-sm ">
                  <p className="flex items-center gap-1 px-3 py-2 rounded-xl bg-gray-100">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    {applyJob.location}
                  </p>
                  <p className="flex items-center gap-1 px-3 py-2 rounded-xl bg-gray-100">
                    <Briefcase className="w-4 h-4 text-gray-400" />
                    {applyJob.type}
                  </p>
                  <p className="flex items-center gap-1 px-3 py-2 rounded-xl bg-gray-100">
                    <Clock
                      className="w-4 h-4 text-gray-400"
                      strokeWidth={1.5}
                    />
                    {applyJob.posted}
                  </p>
                  <p className="flex items-center gap-1 px-3 py-2 rounded-xl bg-purple-100 text-purple-700">
                    $ {applyJob.minsalary}-$ {applyJob.maxsalary}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Link to={`/jobdescription/${applyJob._id}`}>
                <button className="bg- px-6 py-2 text-gray-800 border border-gray-500 rounded-xl">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
        <hr className="mt-10 text-gray-300"/>
        <div>
          <p className="text-center font-bold mt-15 mb-5 text-2xl">
            Application Form
          </p>
          <div className="bg-gray-100 p-3">
            <p className="text-center font-semibold ">Personal Information</p>
            <div className="flex justify-between mt-6">
              <div>
                <label
                  htmlFor="fullname"
                  className="block text-center text-gray-700 text-sm font-semibold"
                >
                  Full Name
                </label>
                <br />
                <input
                  type="text"
                  id="fullname"
                  onChange={handleChange}
                  name="fullname"
                  value={applyForm.fullname}
                  className="border border-gray-300 rounded px-35 py-2"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-center text-gray-700 text-sm font-semibold"
                >
                  Email Address
                </label>
                <br />
                <input
                  type="text"
                  id="email"
                   name="email"
                  onChange={handleChange}
                  value={applyForm.email}
                 
                  className="border border-gray-300 rounded px-35 py-2"
                />
              </div>
            </div>
            <div className="flex justify-between mt-3">
              <div>
                <label
                  htmlFor="phonenumber"
                  className="block text-center text-gray-700 text-sm v"
                >
                  Phone Number
                </label>
                <br />
                <input
                  type="tel"
                  id="phonenumber"
                  name="phoneNumber"
                  onChange={handleChange}
                  value={applyForm.phoneNumber}
                  className="border border-gray-300 rounded px-35 py-2"
                />
              </div>
              <div>
                <label className="block text-center text-gray-700 text-sm font-semibold">
                  Resume/CV
                </label>
                <br />
                <UploadIcon className="absolute left-190 top-147 text-gray-500 " />
                <label
                  htmlFor="resume-upload"
                  className="relative border border-gray-300 rounded px-15 pl-39 text-gray-500 my-5 py-2 border-dotted border-2 top-2"
                >
                  Upload Resume (PDF, DOC, DOCX)
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  id="resume-upload"
                  className="hidden"
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-3 mt-10">
            <p className="text-center font-semibold mt-5 mb-5">
              Application Information
            </p>
            <label
              for="description"
              className="block text-center text-gray-700 text-sm font-semibold mb-2"
            >
              Cover Letter
            </label>
            <textarea
              id="description"
              name="coverletter"
              rows={5}
              cols={40}
              value={applyForm.coverletter}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 mt-2 mb-6"
            />
            <div className="flex justify-between  mb-10">
              <div>
                <label
                  htmlFor="linkedind"
                  className="block text-center text-gray-700 text-sm font-semibold"
                >
                  Linkedin Profile
                </label>
                <br />
                <input
                  type="text"
                  id="linkedind"
                  className="border border-gray-300 rounded px-18 py-2"
                />
              </div>
              <div>
                <label
                  htmlFor="GitHub"
                  className="block text-center text-gray-700 text-sm font-semibold"
                >
                  GitHub Profile
                </label>
                <br />
                <input
                  type="text"
                  id="GitHub"
                  className="border border-gray-300 rounded px-18 py-2"
                />
              </div>
              <div>
                <label
                  htmlFor="Portfolio"
                  className="block text-center text-gray-700 text-sm font-semibold"
                >
                  Portfolio Profile
                </label>
                <br />
                <input
                  type="text"
                  id="Portfolio"
                  className="border border-gray-300 rounded px-18 py-2"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <div>
                  <label
                    htmlFor="start"
                    className="block text-center text-gray-700 text-sm font-semibold"
                  >
                    Earliest Start Date
                  </label>
                  <br />
                  <input
                    type="text"
                    id="start"
                    className="border border-gray-300 rounded px-39 py-3"
                  />
                </div>
                <div>
                  <label
                    htmlFor="question"
                    className="block text-center text-gray-700 text-sm font-semibold"
                  >
                    How did you hear about us?
                  </label>
                  <br />
                  <input
                    type="text"
                    id="question"
                    className="border border-gray-300 rounded px-39 py-3"
                  />
                </div>
              </div>
              <label>
                <input
                  type="checkbox"
                  name="agree"
                  value="yes"
                  className="mr-2 mt-10"
                />
                I am willing to relocate if necessary
              </label>
            </div>
          </div>
          <div className="flex justify-center items-center bg-purple-100 p-5 rounded mt-10">
            <AlertCircle className="text-purple-800 w-10 h-10 mr-1" />
            <p className="text-center text-purple-800 ml-1">
              By submitting this application, I certify that all information
              provided is accurate and complete to the best of my knowledge. I
              understand that any false statements or omissions may disqualify
              me from further consideration for employment.
            </p>
          </div>
          <div className="flex ml-155 mt-10">
            <button className="border py-4 px-8 m-2 border-gray-400 rounded-xl">Back to Details</button>
            <button className="border py-4 px-8 m-2 border-gray-400 rounded-xl bg-gradient-to-r from-purple-800 via-purple-600 to-purple-500 text-white font-bold">Submit Application</button>
          </div>
        </div>
      </div>
      </form>
    </section>
    <Footer/>
    </>
  );
}

export default ApplyNow;
