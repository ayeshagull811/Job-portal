// import React from "react";
// import { Briefcase, MapPin, GitHub, Upload } from "lucide-react";
// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { MdOutlineFileUpload } from "react-icons/md";

// function SignUpPage2() {
//   return (
//     <div className="min-h-screen flex items-center justify-center px-4 py-10 m-20">
//       <div className="max-w-150 w-full bg-white p-8 rounded-lg shadow-md">
//         <p className="text-3xl font-semibold text-gray-900 mb-2 text-center">
//           Create Your Account
//         </p>
//         <p className="text-gray-600 mb-6 text-center">
//           Professional details to enhance your profile
//         </p>
//         <div className="flex items-center justify-center mb-8">
//           <Link
//             to="/Signup"
//             className="flex items-center justify-center w-8 h-8 bg-gray-300 text-gray-600 rounded-full"
//           >
//             1
//           </Link>
//           <div className="w-16 border-t border-purple-700"></div>
//           <Link
//             to="/Signup/account"
//             className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-purple-800 via-puple-600 to-purple-500 text-white  rounded-full"
//           >
//             2
//           </Link>
//         </div>
//         <div className="flex flex-col md:flex-row gap-6 mb-6">
//           <div className="w-full">
//             <label For="first" className="block mb-1 text-sm font-medium">
//               Current Job Title
//             </label>
//             <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
//               <Briefcase className="w-5 h-5 text-gray-400 mr-2" />
//               <input
//                 type="email"
//                 placeholder="Frontend Developer"
//                 id="first"
//                 className="w-full outline-none text-gray-900 placeholder-gray-400"
//               />
//             </div>
//           </div>
//           <div className="w-full">
//             <p className="block mb-1 text-sm font-medium">Experience Level</p>
//             <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900">
//               <option>Select experience</option>
//               <option>entry level</option>
//               <option>medium</option>
//               <option>intermediate</option>
//               <option>advance</option>
//               <option>expert</option>
//             </select>
//           </div>
//         </div>
//         <label For="location" className="block text-sm font-medium mb-2">
//           Location
//         </label>
//         <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 mb-6">
//           <MapPin className="w-5 h-5 text-gray-400 mr-2" />
//           <input
//             type="text"
//             name="location"
//             placeholder="New York,NY"
//             id="location"
//             className="w-full outline-none text-gray-900 placeholder-gray-400"
//           />
//         </div>

//         <label for="description" className="text-sm font-medium">
//           Key Skills
//         </label>
//         <br />
//         <textarea
//           id="description"
//           name="description"
//           rows={5}
//           cols={40}
//           placeholder="React, JavaScript, typrscript, Node.js ...."
//           className=" border border-gray-300 rounded-md px-3 py-2 mt-2 w-full mb-6"
//         />
//         <br />
//         <div className="flex flex-col items-start  relative w-full">
//           <label className="mb-2 text-gray-700 font-medium mb-2 ">
//             Resume/CV (Optional)
//           </label>
//           <Upload className="absolute left-33 top-12 text-gray-500" />
//           <label
//             htmlFor="resume-upload"
//             className="cursor-pointer  p-4 mb-6 w-full border-2 border-dotted border-gray-700 rounded-lg text-gray-500 text-sm text-center hover:bg-gray-50 transition"
//           >
//             Upload Resume (PDF, DOC, DOCX)
//           </label>
//           <input
//             type="file"
//             accept=".pdf,.doc,.docx"
//             id="resume-upload"
//             className="hidden"
//           />
//         </div>
//         <div className="flex flex-col md:flex-row gap-6 mb-6">
//           <div className="w-full">
//             <label for="linkedin" className="text-gray-700 font-medium ">
//               Linkedin Profile
//             </label>
//             <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 mt-2">
//               <FaLinkedin className="w-5 h-5 text-gray-400 mr-2" />
//               <input
//                 type="url"
//                 name="website"
//                 placeholder="https://linkedin.com"
//                 id="linkedin"
//                 className="w-full outline-none text-gray-900 placeholder-gray-400"
//               />
//             </div>
//           </div>
//           <div className="w-full">
//             <label for="github" className=" text-gray-700 font-medium ">
//               GitHub Profile
//             </label>
//             <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 mt-2">
//               <FaGithub className="w-5 h-5 text-gray-400 mr-2" />
//               <input
//                 type="url"
//                 name="website"
//                 placeholder="https://github.com"
//                 id="github"
//                 className=" outline-none text-gray-900 placeholder-gray-400"
//               />
//             </div>
//           </div>
//         </div>
//         <label for="website" className=" text-sm font-medium">
//           Portfolio Website
//         </label>
//         <br />
//         <input
//           type="url"
//           name="website"
//           id="website"
//           placeholder="https://yourportfolio.com"
//           className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 mt-2 mb-6"
//         />
//         <br />
//         <label for="description" className="text-sm font-medium">
//           Professional Bio
//         </label>
//         <textarea
//           id="description"
//           name="description"
//           rows={5}
//           cols={40}
//           placeholder="Tell us about youself, your experience, and what you're looking for.."
//           className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 mt-2 mb-6"
//         />
//         <div className="p-4 bg-blue-700/3 rounded-xl mb-6">
//           <p className="text-lg font-semibold mb-4">
//             Job Preferences (Optional)
//           </p>
//           <div className="flex flex-col md:flex-row gap-6 mb-4">
//             <div className="w-full">
//               <label for="job" className="text-gray-600 text-sm font-medium">
//                 Prefered Job Type
//               </label>
//               <select className="w-full border border-gray-300 bg-white rounded-md px-3 py-2 mt-2">
//                 <option>Select job type</option>
//                 <option></option>
//                 <option></option>
//                 <option></option>
//               </select>
//             </div>
//             <div className="w-full">
//               <label for="job" className="text-gray-600 text-sm font-medium">
//                 Expected salary range
//               </label>
//               <select className="w-full border border-gray-300 bg-white rounded-md px-3 py-2 mt-2">
//                 <option>select salary range</option>
//                 <option></option>
//                 <option></option>
//                 <option></option>
//               </select>
//             </div>
//           </div>
//           <label className="inline-flex items-center">
//             <input type="checkbox" name="agree" value="yes" className="mr-2" />
//             Open to remote work opportunities
//           </label>
//         </div>
//         <div className="flex flex-col bg-blue-50 rounded-xl mb-6 p-4 border border-blue-100 text-sm">
//           <label className="mb-2">
//             <input type="checkbox" name="agree" value="yes" className="mr-2" />i
//             agree to the{" "}
//             <Link className="text-purple-600 hover:underline">
//               Terms of Service
//             </Link>
//             and{" "}
//             <Link className="text-purple-600 hover:underline">
//               Privacy Policy
//             </Link>
//           </label>
//           <label>
//             <input type="checkbox" name="agree" value="yes" className="mr-2" />I
//             want to receive job alerts and career updates via email
//           </label>
//         </div>
//         <div className="flex justify-between items-center">
//           <Link to="/Signup"><button className="border border-gray-400 py-2 px-6 rounded-md hover:bg-gray-100">
//             Previous
//           </button></Link>
//           <button className="bg-gradient-to-r from-purple-800 via-purple-600 to-purple-500 text-white py-2 px-10 rounded-md hover:opacity-90 w-105 transition">
//             Create Account
//           </button>
//         </div>
//         <p className="text-center text-sm text-gray-600 mt-8">
//           Already have account?
//           <Link to="/login" className="text-purple-600 hover:underline">Sign in</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default SignUpPage2;
