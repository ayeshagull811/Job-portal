import axios from "axios";
import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

function JobForm() {
    // const [JobForm, setJobform] = useState({
    //   title: "",
    //   company: "",
    //   location: "",
    //   type: "",
    // });
    // console.log("job created",JobForm)
    // const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setJobform((prev) => ({
    //     ...prev,
    //     [name]: value,
    //   }));
    // };
    // const handleSubmit = async (e) => {
    //   e.preventDefault();
  
    //   try {
    //     const res = await axios.post(
    //       "http://localhost:8000/Jobs/post",
    //       JobForm
    //     );
    //     alert(res.data.message);
    //   } catch (err) {
    //     console.error(err);
    //     alert("job not created");
    //   }
    // };
    const { formData, setFormData, navigate } = useOutletContext();

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleNext = (e) => {
      e.preventDefault();
      navigate("../postjob/JobDetails");
    };
  
  return (
    <div className="ml-8 bg-white mt-5 w-fit pb-5 rounded-xl shadow pr-4 pl-6 py-4">
      <p className="text-xl font-semibold mb-1">Basic Information</p>
      <p className="text-gray-600 mb-6">
        start with the essential details about this postion.
      </p>
      <form className="space-y-6" onSubmit={handleNext}>
        <label htmlFor="jobtitle" className="text-sm font-medium text-gray-700">
          Job Title
        </label>
        <br />
        <input
          type="text"
          id="jobtitle"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g. Senior Software Engineer"
          className="mt-1 w-140 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <div className="flex justify-between gap-6">
          <div>
            <label
              htmlFor="department"
              className=" text-sm font-medium text-gray-700"
            >
              Department
            </label>
            <br />
            <input
              type="text"
              id="department"
              name="company"
          value={formData.company}
          onChange={handleChange}
              placeholder="e.g. Engineering Marketing"
              className="mt-1 w-65 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div>
            <label
              htmlFor="location"
              className="text-sm font-medium text-gray-700"
            >
              Location Type
            </label>
            <br />
            <select
              name=""
              id="location"
              className="mt-1 w-65 border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              <option value="">Select location type</option>
              <option value="remote">Remote</option>
              <option value="onsite">On-site</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between gap-6">
          <div>
            <label
              htmlFor="employ"
              className="text-sm font-medium text-gray-700"
            >
              Employment Type
            </label>
            <br />
            <select
              
              id="employ"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="mt-1 w-65 border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              <option value="">Select employment type</option>
              <option value="full-time">Full-Time</option>
              <option value="part-time">Part-Time</option>
              <option value="internship">Internship</option>
              <option value="contract">Contract</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="location"
              className="text-sm font-medium text-gray-700"
            >
              Location
            </label>
            <br />
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. New York, NK"
              className="mt-1 w-65 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
        </div>
        <div className="flex justify-between mt-8">
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition">
            Previos
          </button>
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
}

export default JobForm;
