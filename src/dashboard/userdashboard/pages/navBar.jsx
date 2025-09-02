import { Eye } from "lucide-react";
import React from "react";

function JobNavBar() {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-sm rounded">
      <div className="text-xl font-semibold text-gray-800">POST JOB</div>
      <div className="flex items-center space-x-4 ">
        <div className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-white rounded hover:bg-gray-200 rounded border border-gray-400">
          <Eye className="w-5 h-5 text-gray-600" />
          <button className="text-sm font-medium text-gray-700 hover:text-gray-900">Preview</button>
        </div>
        <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 bg-white rounded border border-gray-400 hover:bg-gray-200">Save Drafts</button>
      </div>
    </div>
  );
}

export default JobNavBar;
