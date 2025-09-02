import React, { useState } from "react";

import { SiGoogle } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { Lock, Mail, Phone, User } from "lucide-react";
import { Briefcase, MapPin, Upload } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { useAuth } from "../context/AuthContext";

function SignUpPage() {
    const { setAuth } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    PhoneNumber: "",
    email: "",
    CurrentJob: "",
    KeySkills: "",
    Location: "",
    ProfessionalBio: "",
    password: "",
    ConfirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      role: "user",
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8000/users/signuppage",
        formData
      );
      alert(res.data.message);
        setAuth({
      isAuthenticated: true,
      userType: "user",
    });

  
    navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Signup failed");
    }
  };
  console.log("form data", formData);
  const [step, setstep] = useState(1);
  const handleContinue = () => {
    setstep(2);
  };
  const clickChange = () => {
    setstep(1);
  };
  return (
    <>
    <Header/>
      {step === 1 ? (
        <section>
          <form onSubmit={handleSubmit}>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 ">
              <div className="max-w-150 w-full bg-white p-8 rounded-lg shadow-md m-10">
                <p className="text-3xl font-semibold text-gray-900 mb-2 text-center">
                  Create Your Account
                </p>
                <p className="text-gray-600 mb-6 text-center">
                  Basic information to get started
                </p>
                <div className="flex items-center justify-center mb-8">
                  <button
                    onClick={clickChange}
                    className="flex items-center justify-center w-8 h-8  text-white bg-gradient-to-r from-purple-800 via-puple-600 to-purple-500 rounded-full"
                  >
                    1
                  </button>
                  <div className="w-16 border-t border-gray-300"></div>
                  <button
                    onClick={handleContinue}
                    className="flex items-center justify-center w-8 h-8  bg-gray-300 text-gray-600   rounded-full"
                  >
                    2
                  </button>
                </div>
                <div className="flex justify-between">
                  <div>
                    <label htmlFor="first">First Name</label>
                    <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 mt-4 ">
                      <User className="w-5 h-5 text-gray-400 mr-2" />
                      <input
                        type="text"
                        placeholder="First Name"
                        id="first"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        className="w-full outline-none text-gray-900 placeholder-gray-400"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last">Last Name</label>
                    <input
                      type="text"
                      value={formData.lastname}
                      onChange={handleChange}
                      placeholder="Last Name"
                      name="lastname"
                      className="w-full outline-none text-gray-900 border border-gray-300 rounded-md px-3 py-2 mt-4 placeholder-gray-400"
                    />
                  </div>
                </div>
                <br />
                <label htmlFor="email">Email Address</label>
                <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 mt-4 ">
                  <Mail className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full outline-none text-gray-900 placeholder-gray-400"
                  />
                </div>
                <br />
                <label htmlFor="number">Phone Number</label>
                <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 mt-4 ">
                  <Phone className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="tel"
                    placeholder="+92"
                    id="number"
                    name="PhoneNumber"
                    value={formData.PhoneNumber}
                    onChange={handleChange}
                    className="w-full outline-none text-gray-900 placeholder-gray-400"
                  />
                </div>
                <div className="flex justify-between mt-5">
                  <div>
                    <label
                      htmlFor="password"
                      className="text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <br />
                    <div className="flex items-center border border-gray-300 rounded-md w-65 px-3 py-2 mt-4 mb-9">
                      <Lock className="w-5 h-5 text-gray-500 mr-2" />
                      <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full outline-none text-gray-900 placeholder-gray-400"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="confirmpassword"
                      className="mt-4 text-sm font-medium text-gray-700"
                    >
                      Confirm Password
                    </label>
                    <br />
                    <div className="flex items-center border border-gray-300 rounded-md w-65 px-3 py-2 mt-4 mb-9">
                      <Lock className="w-5 h-5 text-gray-500 mr-2" />
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        id="confirmpassword"
                        name="ConfirmPassword"
                        value={formData.ConfirmPassword}
                        onChange={handleChange}
                        className="w-full outline-none text-gray-900 placeholder-gray-400"
                      />
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleContinue}
                  className="bg-gradient-to-r from-purple-800 via-puple-600 to-purple-500 w-full bg-blue-600 text-white  py-3 rounded-md hover:bg-purple-700  mb-6 transition"
                >
                  Continue
                </button>
                <div className="flex items-center justify-center gap-2 my-6">
                  <div className="flex-grow border-b border-gray-300"></div>
                  <span className="text-gray-500 text-sm">
                    Or register with
                  </span>
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
                  Already have account?
                  <Link to="/login" className="text-purple-600 hover:underline">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </section>
      ) : (
        <section>
          <form onSubmit={handleSubmit}>
            <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100 py-10">
              <div className="max-w-150 w-full bg-white p-8 rounded-lg shadow-md m-10">
                <p className="text-3xl font-semibold text-gray-900 mb-2 text-center">
                  Create Your Account
                </p>
                <p className="text-gray-600 mb-6 text-center">
                  Professional details to enhance your profile
                </p>
                <div className="flex items-center justify-center mb-8">
                  <button
                    onClick={clickChange}
                    className="flex items-center justify-center w-8 h-8 bg-gray-300 text-gray-600 rounded-full"
                  >
                    1
                  </button>
                  <div className="w-16 border-t border-purple-700"></div>
                  <button
                    onClick={handleContinue}
                    className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-purple-800 via-puple-600 to-purple-500 text-white  rounded-full"
                  >
                    2
                  </button>
                </div>
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <div className="w-full">
                    <label
                      htmlFor="first"
                      className="block mb-1 text-sm font-medium"
                    >
                      Current Job Title
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                      <Briefcase className="w-5 h-5 text-gray-400 mr-2" />
                      <input
                        type="text"
                        placeholder="Frontend Developer"
                        id="first"
                        name="CurrentJob"
                        value={formData.CurrentJob}
                        onChange={handleChange}
                        className="w-full outline-none text-gray-900 placeholder-gray-400"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="block mb-1 text-sm font-medium">
                      Experience Level
                    </p>
                    <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900">
                      <option>Select experience</option>
                      <option>entry level</option>
                      <option>medium</option>
                      <option>intermediate</option>
                      <option>advance</option>
                      <option>expert</option>
                    </select>
                  </div>
                </div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium mb-2"
                >
                  Location
                </label>
                <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 mb-6">
                  <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="text"
                    name="Location"
                    placeholder="New York,NY"
                    id="location"
                    value={formData.Location}
                    onChange={handleChange}
                    className="w-full outline-none text-gray-900 placeholder-gray-400"
                  />
                </div>

                <label htmlFor="description" className="text-sm font-medium">
                  Key Skills
                </label>
                <br />
                <textarea
                  id="description"
                  name="KeySkills"
                  rows={5}
                  cols={40}
                  value={formData.KeySkills}
                  onChange={handleChange}
                  placeholder="React, JavaScript, typrscript, Node.js ...."
                  className=" border border-gray-300 rounded-md px-3 py-2 mt-2 w-full mb-6"
                />
                <br />
                <div className="flex flex-col items-start  relative w-full">
                  <label className="mb-2 text-gray-700 font-medium mb-2 ">
                    Resume/CV (Optional)
                  </label>
                  <Upload className="absolute left-33 top-12 text-gray-500" />
                  <label
                    htmlFor="resume-upload"
                    className="cursor-pointer  p-4 mb-6 w-full border-2 border-dotted border-gray-700 rounded-lg text-gray-500 text-sm text-center hover:bg-gray-50 transition"
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
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <div className="w-full">
                    <label
                      htmlFor="linkedin"
                      className="text-gray-700 font-medium "
                    >
                      Linkedin Profile
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 mt-2">
                      <FaLinkedin className="w-5 h-5 text-gray-400 mr-2" />
                      <input
                        type="url"
                        name="website"
                        placeholder="https://linkedin.com"
                        id="linkedin"
                        className="w-full outline-none text-gray-900 placeholder-gray-400"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="github"
                      className=" text-gray-700 font-medium "
                    >
                      GitHub Profile
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 mt-2">
                      <FaGithub className="w-5 h-5 text-gray-400 mr-2" />
                      <input
                        type="url"
                        name="website"
                        placeholder="https://github.com"
                        id="github"
                        className=" outline-none text-gray-900 placeholder-gray-400"
                      />
                    </div>
                  </div>
                </div>
                <label htmlFor="website" className=" text-sm font-medium">
                  Portfolio Website
                </label>
                <br />
                <input
                  type="url"
                  name="website"
                  id="website"
                  placeholder="https://yourportfolio.com"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 mt-2 mb-6"
                />
                <br />
                <label htmlFor="description" className="text-sm font-medium">
                  Professional Bio
                </label>
                <textarea
                  id="description"
                  name="ProfessionalBio"
                  rows={5}
                  cols={40}
                  value={formData.ProfessionalBio}
                  onChange={handleChange}
                  placeholder="Tell us about youself, your experience, and what you're looking htmlFor.."
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 mt-2 mb-6"
                />
                <div className="p-4 bg-blue-700/3 rounded-xl mb-6">
                  <p className="text-lg font-semibold mb-4">
                    Job Preferences (Optional)
                  </p>
                  <div className="flex flex-col md:flex-row gap-6 mb-4">
                    <div className="w-full">
                      <label
                        htmlFor="job"
                        className="text-gray-600 text-sm font-medium"
                      >
                        Prefered Job Type
                      </label>
                      <select className="w-full border border-gray-300 bg-white rounded-md px-3 py-2 mt-2">
                        <option>Select job type</option>
                        <option></option>
                        <option></option>
                        <option></option>
                      </select>
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="job"
                        className="text-gray-600 text-sm font-medium"
                      >
                        Expected salary range
                      </label>
                      <select className="w-full border border-gray-300 bg-white rounded-md px-3 py-2 mt-2">
                        <option>select salary range</option>
                        <option></option>
                        <option></option>
                        <option></option>
                      </select>
                    </div>
                  </div>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="agree"
                      value="yes"
                      className="mr-2"
                    />
                    Open to remote work opportunities
                  </label>
                </div>
                <div className="flex flex-col bg-blue-50 rounded-xl mb-6 p-4 border border-blue-100 text-sm">
                  <label className="mb-2">
                    <input
                      type="checkbox"
                      name="agree"
                      value="yes"
                      className="mr-2"
                    />
                    i agree to the{" "}
                    <Link className="text-purple-600 hover:underline">
                      Terms of Service
                    </Link>
                    and{" "}
                    <Link className="text-purple-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="agree"
                      value="yes"
                      className="mr-2"
                    />
                    I want to receive job alerts and career updates via email
                  </label>
                </div>
                <div className="flex justify-between items-center">
                  <button
                    onClick={clickChange}
                    className="border border-gray-400 py-2 px-6 rounded-md hover:bg-gray-100"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    onSubmit={handleSubmit}
                    className="bg-gradient-to-r from-purple-800 via-purple-600 to-purple-500 text-white py-2 px-10 rounded-md hover:opacity-90 w-105 transition"
                  >
                   {/* <Link> Create Account</Link> */}
                    Create Account
                  </button>
                </div>
                <p className="text-center text-sm text-gray-600 mt-8">
                  Already have account?
                  <Link to="/login" className="text-purple-600 hover:underline">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </section>
      )}
       <Footer/>
    </>
  );
}

export default SignUpPage;
