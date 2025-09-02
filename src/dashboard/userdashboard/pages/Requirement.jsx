import React from "react";
import { useOutletContext } from "react-router-dom";

function Requirement(){
    const { formData, setFormData, navigate } = useOutletContext();

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleNext = (e) => {
      e.preventDefault();
      navigate("../postjob/Compensation");
    };
    return(
        
            <div className="ml-8 bg-white mt-5 w-fit pb-5 rounded-xl shadow pr-4 pl-6 py-4">
      <p className="text-xl font-semibold mb-1">JOB REQUIREMENTS</p>
      <p className="text-gray-600 mb-6">
        start with the essential details about this postion.
      </p>
      <form action="" onSubmit={handleNext}>
        <label htmlFor="KeySkills">Key Skills</label>
        <br />
        <textarea
          id="KeySkills"
          name="KeySkills"
          rows={5}
          cols={40}
          value={formData.KeySkills}
          onChange={handleChange}
          placeholder="Job KeySkills"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 mt-2 mb-6"
        />
        <label htmlFor="Requirements">Requirements</label>
        <br />
        <textarea
          id="Requirements"
          name="Requirements"
          rows={5}
          cols={40}
          value={formData.Requirements}
          onChange={handleChange}
          placeholder="Job Requirements"
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
        
    )
}

export default Requirement;