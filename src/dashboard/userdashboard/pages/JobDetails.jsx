import React from "react";
import { useOutletContext } from "react-router-dom";

function JobDetails() {
    const { formData, setFormData, navigate } = useOutletContext();

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleNext = (e) => {
      e.preventDefault();
      navigate("../postjob/Requirement");
    };
  return (
    <div className="ml-8 bg-white mt-5 w-fit pb-5 rounded-xl shadow pr-4 pl-6 py-4">
      <p className="text-xl font-semibold mb-1">JOB DETAILS</p>
      <p className="text-gray-600 mb-6">
        start with the essential details about this postion.
      </p>
      <form action=""  onSubmit={handleNext}>
        <label htmlFor="description">Description</label>
        <br />
        <textarea
          id="description"
          name="JobDescription"
          rows={5}
          cols={40}
         
          value={formData.JobDescription}
          onChange={handleChange}
          placeholder="Job description"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 mt-2 mb-6"
        />
        <label htmlFor="Benefits">Benefits</label>
        <br />
        <textarea
          id="Benefits"
          name="Benefits"
          rows={5}
          cols={40}
          
          value={formData.Benefits}
          onChange={handleChange}
          placeholder="Job Benefits"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 mt-2 mb-6"
        />
        <label htmlFor="Responsibilities">Responsibilities</label>
        <br />
        <textarea
          id="Responsibilities"
          name="Responsibilities"
          rows={5}
          cols={40}
          value={formData.Responsibilities}
          onChange={handleChange}
          placeholder="Job Responsibilities"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 mt-2 mb-6"
        />
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

export default JobDetails;
