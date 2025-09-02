import axios from "axios";
import React from "react";
import { useOutletContext } from "react-router-dom";

function Compensation() {
  const { formData, setFormData, navigate } = useOutletContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/Jobs/post", formData);
      alert("Job Posted Successfully");
      // navigate("/employer-dashboard/123/managejobs"); // or your desired route
    } catch (error) {
      console.error("Submission error", error);
    }
  };

  return (
    <div className="ml-8 bg-white mt-5 w-fit pb-5 rounded-xl shadow pr-4 pl-6 py-4">
      <p className="text-xl font-semibold mb-1">JOB COMPENSATION</p>
      <p className="text-gray-600 mb-6">
        Start with the essential salary details for this position.
      </p>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <div>
            <label
              htmlFor="minsalary"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Min salary
            </label>
            <br />
            <input
              type="text"
              placeholder="minsalary"
              value={formData.minsalary}
              onChange={handleChange}
              name="minsalary"
              className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <div>
            <label
              htmlFor="maxsalary"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Max salary
            </label>
            <br />
            <input
              type="text"
              placeholder="maxsalary"
              value={formData.maxsalary}
              onChange={handleChange}
              name="maxsalary"
              className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
        </div>
        <div className="flex justify-between mt-8">
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition">
            Previos
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Compensation;
