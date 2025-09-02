import React, { useState } from "react";
import { Building2, Lock, Mail, Phone, Upload, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { useAuth } from "../context/AuthContext";

function CompanyName() {
  const { setAuth } = useAuth();
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: " ",
    description: "",
    PhoneNumber: "",
    jobtitle: "",
    companyname: "",
    role: "",
    email: "",
    password: "",
    ConfirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      role: "company",
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8000/users/signuppage",
        formData
      );
      localStorage.setItem("companyId", res.data.user._id);
      console.log("Company ID saved:", res.data.user._id);
      setAuth({
      isAuthenticated: true,
      userType: "company",
    });

  
    navigate("/login");
      alert(res.data.message);
    } catch (err) {
      console.error(err);
      alert("Signup failed");
    }
  };
  console.log("form data", formData);
  return (
    <>
      <Header />
      <section className="bg-gray-100 py-10 ">
        <h1 className="font-bold text-3xl text-center">
          Register Your Company
        </h1>
        <p className="text-gray-700 mb-9 text-center">
          Start hiring top talent today
        </p>
        <form
          className="bg-white p-8 rounded-2xl shadow-md  mx-70"
          onSubmit={handleSubmit}
        >
          <div className="mb-10">
            <div className="flex mb-5">
              <Building2 className="text-blue-600 w-6 h-6" />
              <p className="pl-2 font-semibold text-xl">Company Information</p>
            </div>
            <label htmlFor="name" className="">
              Company Name<span className="text-red-500 font-semibold">*</span>
            </label>
            <br />
            <input
              type="text"
              id="name"
              name="companyname"
              placeholder="Enter your company name"
              value={formData.companyname}
              onChange={handleChange}
              required
              className="w-full items-center border border-gray-300 rounded-md px-3 py-3 mb-3 mt-2"
            />
            <br />
            <label htmlFor="email">
              Company Email<span className="text-red-500 font-semibold">*</span>
            </label>
            <br />
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-3  mb-3 mt-2 ">
              <Mail className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="company@gmail.com"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="outline-none text-gray-900 placeholder-gray-400"
              />
            </div>
            <div className="flex w-full justify-between mb-3">
              <div>
                <label htmlFor="">
                  Industry<span className="text-red-500 font-semibold">*</span>
                </label>
                <br />
                <select className="border border-gray-300 pr-10 pl-3 py-3 rounded-md w-76 mt-2">
                  <option value="">Select industry</option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>
              <div c>
                <label htmlFor="">
                  Company Size
                  <span className="text-red-500 font-semibold">*</span>
                </label>
                <br />
                <select className="border border-gray-300 pr-10 pl-3 py-3 rounded-md w-76 mt-2">
                  <option value="">Select size</option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>
            </div>
            <label htmlFor="website">Website (Optional)</label>
            <br />
            <input
              type="url"
              name="website"
              required
              placeholder="https://yourcompany.com"
              className="w-full items-center border border-gray-300 rounded-md px-3 py-3 mb-3 mt-2"
            />
          </div>
          <div>
            <div className="flex mb-4">
              <User className="text-blue-600 w-6 h-6" />
              <p className="pl-2 font-semibold text-xl">Contact Person</p>
            </div>
            <div className="flex justify-between mb-3">
              <div>
                <label htmlFor="fullname">
                  Full Name<span className="text-red-500 font-semibold">*</span>
                </label>
                <br />
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={formData.fullname}
                  required
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="border border-gray-300 pr-10 pl-3 py-3 rounded-md w-76 mt-2"
                />
                <br />
              </div>
              <div>
                <label htmlFor="jobtitle">
                  Job Title<span className="text-red-500 font-semibold">*</span>
                </label>
                <br />
                <input
                  type="text"
                  id="jobtitle"
                  placeholder="HR Manager,CEO,etc"
                  onChange={handleChange}
                  value={formData.jobtitle}
                  required
                  name="jobtitle"
                  className="border border-gray-300 pr-10 pl-3 py-3 rounded-md w-76 mt-2"
                />
                <br />
              </div>
            </div>
            <label htmlFor="number">
              Phone Number<span className="text-red-500 font-semibold">*</span>
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-3  mt-2">
              <Phone className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="tel"
                placeholder="+92"
                id="number"
                name="PhoneNumber"
                value={formData.PhoneNumber}
                required
                onChange={handleChange}
                className="w-full outline-none text-gray-900 placeholder-gray-400"
              />
            </div>
          </div>
          <div className="mb-9">
            <div className="flex mt-10">
              <Lock className="text-blue-600 w-6 h-6" />
              <p className="pl-2 font-semibold text-xl">Account Setup</p>
            </div>
            <div className="flex justify-between mt-4">
              <div>
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password<span className="text-red-500 font-semibold">*</span>
                </label>
                <br />
                <div className="flex items-center border border-gray-300 rounded-md w-65 px-3 w-76 py-3 mt-2 ">
                  <Lock className="w-5 h-5 text-gray-500 mr-2" />
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="outline-none text-gray-900 placeholder-gray-400"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="confirmpassword"
                  className="mt-4 text-sm font-medium text-gray-700"
                >
                  Confirm Password
                  <span className="text-red-500 font-semibold">*</span>
                </label>
                <br />
                <div className="flex items-center border border-gray-300 rounded-md w-65 px-3 py-3 w-76 mt-2 ">
                  <Lock className="w-5 h-5 text-gray-500 mr-2" />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    id="confirmpassword"
                    name="ConfirmPassword"
                    value={formData.ConfirmPassword}
                    onChange={handleChange}
                    required
                    className="outline-none text-gray-900 placeholder-gray-400"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xl font-semibold mb-5">
              Additional Information(Optional)
            </p>
            <div className="flex flex-col items-start  relative w-full">
              <label className="mb-2 text-gray-700 font-medium mb-2 ">
                Company Logo
              </label>
              <Upload className="absolute left-40 top-12 text-gray-500" />
              <label
                htmlFor="resume-upload"
                className="cursor-pointer  p-4 mb-6 w-full border-2 border-dashed border-gray-400 bg-gray-100 rounded-lg text-gray-500 text-sm text-center hover:bg-gray-50 transition"
              >
                Upload Logo (PNG,JPG,SVG)
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                id="resume-upload"
                className="hidden"
              />
            </div>
            <label htmlFor="description" className="text-sm font-medium">
              Company Description
            </label>
            <br />
            <textarea
              id="description"
              value={formData.description}
              onChange={handleChange}
              name="description"
              rows={5}
              cols={40}
              placeholder="Brief description of your company and what you do....."
              className=" border border-gray-300 rounded-md px-3 py-2 mt-2 w-full mb-6"
            />
            <br />
          </div>
          <div className="flex flex-col bg-blue-50 rounded-xl my-9 p-4 border border-blue-100 text-sm ">
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
          <button
            type="submit"
            onSubmit={handleSubmit}
            className="bg-gradient-to-r from-purple-800 via-puple-600 to-purple-500 w-full bg-blue-600 text-white  py-3 rounded-md hover:bg-purple-700 transition"
          >
            {/* <Link>Register Company</Link> */}
        Register Company
          </button>
          <p className="text-center text-sm text-gray-600 mt-8">
            Already have account?
            <Link to="/login" className="text-purple-600 hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </section>
      <Footer />
    </>
  );
}

export default CompanyName;
