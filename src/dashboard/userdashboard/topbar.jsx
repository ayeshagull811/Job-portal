import { Bell, Search } from "lucide-react";
import React from "react";

function TopBar() {
  return (
    <div className="flex justify-between items-center px-5 py-4 bg-white shadow-md w-full">
      <div className="text-xl font-semibold text-gray-800">Employer Dashboard</div>
      <div className="flex items-center gap-6">
        <div  className="flex items-center border border-gray-300 pl-4 pr-2 py-2 rounded-lg bg-white shadow-sm">
          <Search className="w-4 h-4 text-gray-400 mr-4" />
          <input
            type="text"
            placeholder="search"
            className="w-full outline-none text-gray-900 placeholder-gray-400"
          />
        </div>
        <div className="relative">
          <Bell className="w-6 h-6 text-gray-700" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.3 rounded-full">
            3
          </span>
        </div>
        <select name="" id="" className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg outline-none cursor-pointer">
            <option value="">John Doe</option>
        </select>
      </div>
    </div>
  );
}

export default TopBar;
