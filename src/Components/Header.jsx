import React from "react";
import { User } from "lucide-react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

function Header() {
  return (
    <header>
    <div className="flex justify-between items-center px-6 py-1 shadow-md ">
      <div className="flex items-center gap-2">
        <Link to="/">
         <FaUser size={24} className="text-purple-700"/>
        </Link>
        <p className="text-lg text-6xl font-bold bg-gradient-to-r from-purple-700 to-pink-800 bg-clip-text text-transparent">ProHire</p>
      </div>

      <div className="flex items-center gap-6 text-sm font-medium text-gray-700">
        <p>
          <Link>Jobs</Link>
        </p>
        <p>
          <Link>Companies</Link>
        </p>
        <p>
          <Link>For Employers</Link>
        </p>
        <p>
          <Link to="login">Login</Link>
        </p>
        <p className="bg-gradient-to-r from-purple-900 via-purple-800  to-purple-700 px-6 py-2 text-white rounded-3xl">
          <Link to="/Signup">Sign Up</Link>
        </p>
      </div>
    </div>
    </header>
  );
}
export default Header;
