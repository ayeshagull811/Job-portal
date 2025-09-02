import { Lock, Mail } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SiGoogle } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import axios from "axios";
import Footer from "./Footer";
import Header from "./Header";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
    const { setAuth } = useAuth(); 
  const navigate = useNavigate();    
  const [loginForm, setloginform] = useState({
    email: "",
    password: "",
  });
  console.log("login form:",loginForm)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setloginform((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8000/users/loginpage",
        loginForm,
         {
    headers: {
      "Content-Type": "application/json",
    },
  }
      );
      alert(res.data.message);
      const userData = res.data.user || res.data;
      console.log("user id:", userData.id);

      localStorage.setItem("userId", userData.id);
  const user = res.data.user;
 console.log("Form submitted");
 console.log("user data",user);
 console.log("api res",res);
 
 setAuth({
  isAuthenticated: true,
  userType: user.role, // 'user' or 'company'
  userId: user._id,
});

if (user.role === 'company') {
  navigate(`/employer-dashboard/${userData._id}`);
} else {
  navigate(`/jobseeker-dashboard/${userData._id}`);
}
console.log("login data",res.data.user);
    } catch (err) {
      console.error(err);
  if (err.response) {
    alert(err.response.data.message); // backend ka message
  } else {
    alert("login failed");
  }
    }
  };
  return (
    <>
     <Header/>
    <form onSubmit={handleSubmit}>
      <div className=" flex items-center justify-center bg-gray-100 px-4">
        <div className="max-w-150 bg-white p-8 rounded-lg shadow-md m-10">
          <p className="text-3xl font-semibold text-gray-900 mb-2 text-center">
            Welcome Back!
          </p>
          <p className="text-gray-600 mb-6 text-center">
            Sign in to continue your job search
          </p>
          <label for="email" className=" text-sm font-medium text-gray-700">
            Email Address
          </label>
          <br />
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 mt-4 ">
            <Mail className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              name="email"
              value={loginForm.email}
              onChange={handleChange}
              className="w-full outline-none text-gray-900 placeholder-gray-400"
            />
          </div>
          <br />
          <label
            for="password"
            className="mt-4 text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <br />
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 mt-4 mb-9">
            <Lock className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              name="password"
              value={loginForm.password}
              onChange={handleChange}
              className="w-full outline-none text-gray-900 placeholder-gray-400"
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-sm">
              <input
                type="checkbox"
                name="remember"
                className="h-4 w-4  border-gray-600 rounded mx-2 "
              />
              Remember me
            </label>
            <Link className="text-sm text-purple-600 hover:underline ">
              Forget password?
            </Link>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-800 via-puple-600 to-purple-500 w-full bg-blue-600 text-white  py-3 rounded-md hover:bg-purple-700  mb-6 transition"
          >
            Sign In
            {/* <Link to="/employer-dashboard">Sign In</Link> */}
          </button>
          <div className="flex items-center justify-center gap-2 my-6">
            <div className="flex-grow border-b border-gray-300"></div>
            <span className="text-gray-500 text-sm">Or continue with</span>
            <div className="flex-grow border-b border-gray-300"></div>
          </div>
          <div className="flex gap-2 my-10">
            <button className="flex w-80 justify-center items-center text-center gap-2 border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 transition">
              <SiGoogle className="w-5 h-4" />
              Google
            </button>
            <button className="flex w-80 items-center justify-center gap-2 border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 transition">
              <SiLinkedin className="w-5 h-5 text-black" />
              Linkedin
            </button>
          </div>
          <p className="text-center text-sm text-gray-600">
            Don't have an account?
            <Link to="/Signup" className="text-purple-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </form>
     <Footer/>
    </>
  );
}
export default LoginPage;
