import axios from "axios";
import {
  BarChart3,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  Download,
  Edit,
  Eye,
  Filter,
  MapPin,
  MoreVertical,
  Pause,
  Play,
  Plus,
  Search,
  Users,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ManageJob() {
//   const [jobs, setJobs] = useState([]);

// useEffect(() => {
//   axios.get("http://localhost:8000/Jobs/get")
//     .then((res) => {
//       setJobs(res.data); // this is your job list from backend
//     })
//     .catch((err) => {
//       console.error("Error fetching jobs:", err);
//     });
// }, []);
const [data, setData] = useState([]);
const { id } = useParams();

console.log("Route param id:", id);

useEffect(() => {
  const fetchTasks = async () => {
    const userId = id || localStorage.getItem("userId");
    console.log("user id in local storage", userId);

    if (!userId) {
      console.error("No user ID found.");
      return;
    }

    try {
      const res = await axios.get(
        `http://localhost:8000/Jobs/getById/${userId}`,
        { withCredentials: true }
      );
      console.log("Tasks fetched:", res.data);
      setData(res.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  fetchTasks();
}, [id]);
  return (
    <div>
      <div className="flex justify-between items-center mx-5 my-6">
        <div>
          <p className="font-bold text-xl">Manage Jobs</p>
          <p className="text-gray-500">Track and manage the job posting</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center border border-gray-400 text-gray-600 px-4 py-2 rounded hover:bg-gray-100 transition">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
          <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            <Plus className="w-5 h-5 mr-2" />
            Post new job
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-2">
        <div className=" flex bg-white rounded-xl p-6 border border-gray-200 items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-60">Total Jobs</p>
            <p className="text-2xl font-bold text-gray-900">5</p>
            <p className="text-sm text-blue-600 mt-2">2 active</p>
          </div>
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
            <BarChart3 size={24} className="text-blue-600" />
          </div>
        </div>
        <div className=" flex bg-white rounded-xl p-6 border border-gray-200 items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-60">
              Total Aplications
            </p>
            <p className="text-2xl font-bold text-gray-900">115</p>
            <p className="text-sm text-blue-600 mt-2 text-green-600">
              Across all jobs
            </p>
          </div>
          <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
            <Users size={24} className="text-green-600" />
          </div>
        </div>
        <div className=" flex bg-white rounded-xl p-6 border border-gray-200 items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-60">Total Views</p>
            <p className="text-2xl font-bold text-gray-900">655</p>
            <p className="text-sm text-blue-600 mt-2 text-purple-600">
              This month
            </p>
          </div>
          <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
            <Eye size={24} className="text-purple-600" />
          </div>
        </div>
        <div className=" flex bg-white rounded-xl p-6 border border-gray-200 items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-60">
              Avg. Applications
            </p>
            <p className="text-2xl font-bold text-gray-900">58</p>
            <p className="text-sm text-blue-600 mt-2 text-orange-600">
              Per job
            </p>
          </div>
          <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
            <Clock size={24} className="text-orange-600" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center mt-4 mx-3 bg-white rounded-xl border border-gray-200 p-6 gap-4">
        <div className="flex items-center border border-gray-300  w-full max-w-md pl-4 pr-2 py-2 rounded-lg bg-white shadow-sm">
          <Search className="w-4 h-4 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Search jobs by title or department..."
            className="w-full outline-none text-gray-900 placeholder-gray-400"
          />
        </div>
        <div className="flex items-center gap-3">
          <select
            name=""
            id=""
            className="border border-gray-300 text-gray-700 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="paused">Paused</option>
            <option value="closed">Closed</option>
          </select>
          <button className="flex items-center border border-gray-300 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition">
            <Filter size={16} className="mr-2" />
            More Filter
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mx-3 my-5">
        <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-gray-200">
            <tr className="bg-gray-200">
              <th className="px-6 py-3 text-left text-xs  text-gray-500">JOB</th>
              <th className="px-6 py-3 text-left text-xs  text-gray-500">STATUS</th>
              <th className="px-6 py-3 text-left text-xs  text-gray-500">APPLICATIONS</th>
              <th className="px-6 py-3 text-left text-xs  text-gray-500">VIEWS</th>
              <th className="px-6 py-3 text-left text-xs  text-gray-500">POSTED</th>
              <th className="px-6 py-3 text-left text-xs  text-gray-500">DEADLINE</th>
              <th className="px-6 py-3 text-left text-xs  text-gray-500">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="text-sm border border-gray-300 text-gray-700 rounded-xl">
            {
              data.map((job) => (
                <>
                <tr className="border border-gray-300 hover:bg-gray-50 transition">
              <td className="py-1  px-1">
                <div>
                  <p className="font-medium pl-3">{job.title}</p>
                  <div className="flex justify-between gap-2 mt-1 text-sm text-gray-500 space-y-1">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span>{job.location}</span>
                    </div>
                    <div>Full-time</div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4 text-gray-500" />
                      $90,000-$120000
                    </div>
                  </div>
                </div>
              </td>
              <td className="py-2 px-4 ">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <p className="text-green-600 font-medium bg-green-200 rounded-xl p-1">Active</p>
                </div>
              </td>
              <td className="p-2 ">
                <div className="text-gray-600 flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <p>24</p>
                  

                  <p className="text-blue-400">(5 interviews)</p>
                </div>
              </td>
              <td className="p-3 ">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4 text-gray-600" />
                  156
                </div>
              </td>
              <td className="p-2 ">
                <div className="flex items-center gap-1">
                  <Calendar className="w-5 h-5 text-gray-600" />
                  1/15/2024
                </div>
              </td>
              <td className="p-2 pl-5 text-gray-600">2/15/2024</td>
              <td className="p-2 ">
                <div className="flex items-center gap-3 text-gray-500">
                  <Eye className="w-4 h-4 hover:text-blue-500 cursor-pointer" />
                  <Edit className="w-4 h-4 hover:text-blue-500 cursor-pointer" />
                  <Play className="w-4 h-4 hover:text-blue-500 cursor-pointer" />
                  <MoreVertical className="w-4 h-4 hover:text-blue-500 cursor-pointer" />
                </div>
              </td>
            </tr>
            {/* <tr className="border border-gray-300 hover:bg-gray-50 transition">
              <td className="py-2 px-3 ">
                <div>
                  <p className="font-medium">Senior Frontend Developer</p>
                  <div className="flex justify-between gap-2 mt-1 text-sm text-gray-500 space-y-1">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span>New York, NY</span>
                    </div>
                    <div>Full-time</div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4 text-gray-500" />
                      $90,000-$120000
                    </div>
                  </div>
                </div>
              </td>
              <td className="py-2 px-4 ">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <p className="text-green-600 font-medium bg-green-200 rounded-xl p-1">Active</p>
                </div>
              </td>
              <td className="p-2 ">
                <div className="text-gray-600 flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <p>24</p>
                  

                  <p className="text-blue-400">(5 interviews)</p>
                </div>
              </td>
              <td className="p-2 ">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4 text-gray-600" />
                  156
                </div>
              </td>
              <td className="p-2 ">
                <div className="flex items-center gap-1">
                  <Calendar className="w-5 h-5 text-gray-600" />
                  1/15/2024
                </div>
              </td>
              <td className="p-2 text-gray-600">2/15/2024</td>
              <td className="p-2 ">
                <div className="flex items-center gap-3 text-gray-500">
                  <Eye className="w-4 h-4 hover:text-blue-500 cursor-pointer" />
                  <Edit className="w-4 h-4 hover:text-blue-500 cursor-pointer" />
                  <Play className="w-4 h-4 hover:text-blue-500 cursor-pointer" />
                  <MoreVertical className="w-4 h-4 hover:text-blue-500 cursor-pointer" />
                </div>
              </td>
            </tr>
            <tr className="border border-gray-300 hover:bg-gray-50 transition">
              <td className="py-2 px-3 ">
                <div>
                  <p className="font-medium">Senior Frontend Developer</p>
                  <div className="flex justify-between gap-2 mt-1 text-sm text-gray-500 space-y-1">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span>New York, NY</span>
                    </div>
                    <div>Full-time</div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4 text-gray-500" />
                      $90,000-$120000
                    </div>
                  </div>
                </div>
              </td>
              <td className="py-2 px-4 ">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <p className="text-green-600 font-medium bg-green-200 rounded-xl p-1">Active</p>
                </div>
              </td>
              <td className="p-2 ">
                <div className="text-gray-600 flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <p>24</p>
                  

                  <p className="text-blue-400">(5 interviews)</p>
                </div>
              </td>
              <td className="p-2 ">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4 text-gray-600" />
                  156
                </div>
              </td>
              <td className="p-2 ">
                <div className="flex items-center gap-1">
                  <Calendar className="w-5 h-5 text-gray-600" />
                  1/15/2024
                </div>
              </td>
              <td className="p-2 text-gray-600">2/15/2024</td>
              <td className="p-2 ">
                <div className="flex items-center gap-3 text-gray-500">
                  <Eye className="w-4 h-4 hover:text-blue-500 cursor-pointer" />
                  <Edit className="w-4 h-4 hover:text-blue-500 cursor-pointer" />
                  <Play className="w-4 h-4 hover:text-blue-500 cursor-pointer" />
                  <MoreVertical className="w-4 h-4 hover:text-blue-500 cursor-pointer" />
                </div>
              </td>
            </tr>
            <tr className="border border-gray-300 hover:bg-gray-50 transition">
              <td className="py-2 px-3 ">
                <div>
                  <p className="font-medium">Senior Frontend Developer</p>
                  <div className="flex justify-between gap-2 mt-1 text-sm text-gray-500 space-y-1">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span>New York, NY</span>
                    </div>
                    <div>Full-time</div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4 text-gray-500" />
                      $90,000-$120000
                    </div>
                  </div>
                </div>
              </td>
              <td className="py-2 px-4 ">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <p className="text-green-600 font-medium bg-green-200 rounded-xl p-1">Active</p>
                </div>
              </td>
              <td className="p-2 ">
                <div className="text-gray-600 flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <p>24</p>
                  

                  <p className="text-blue-400">(5 interviews)</p>
                </div>
              </td>
              <td className="p-2 ">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4 text-gray-600" />
                  156
                </div>
              </td>
              <td className="p-2 ">
                <div className="flex items-center gap-1">
                  <Calendar className="w-5 h-5 text-gray-600" />
                  1/15/2024
                </div>
              </td>
              <td className="p-2 text-gray-600">2/15/2024</td>
              <td className="p-2 ">
                <div className="flex items-center gap-3 text-gray-500">
                  <Eye className="w-4 h-4 hover:text-blue-500 cursor-pointer" />
                  <Edit className="w-4 h-4 hover:text-blue-500 cursor-pointer" />
                  <Play className="w-4 h-4 hover:text-blue-500 cursor-pointer" />
                  <MoreVertical className="w-4 h-4 hover:text-blue-500 cursor-pointer" />
                </div>
              </td>
            </tr>
            <tr className="border border-gray-300 hover:bg-gray-50 transition">
              <td className="py-2 px-3 ">
                <div>
                  <p className="font-medium">Senior Frontend Developer</p>
                  <div className="flex justify-between gap-2 mt-1 text-sm text-gray-500 space-y-1">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span>New York, NY</span>
                    </div>
                    <div>Full-time</div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4 text-gray-500" />
                      $90,000-$120000
                    </div>
                  </div>
                </div>
              </td>
              <td className="py-2 px-4 ">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <p className="text-green-600 font-medium bg-green-200 rounded-xl p-1">Active</p>
                </div>
              </td>
              <td className="p-2 ">
                <div className="text-gray-600 flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <p>24</p>
                  

                  <p className="text-blue-400">(5 interviews)</p>
                </div>
              </td>
              <td className="p-2 ">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4 text-gray-600" />
                  156
                </div>
              </td>
              <td className="p-2 ">
                <div className="flex items-center gap-1">
                  <Calendar className="w-5 h-5 text-gray-600" />
                  1/15/2024
                </div>
              </td>
              <td className="p-2 text-gray-600">2/15/2024</td>
              <td className="p-2 ">
                <div className="flex items-center gap-3 text-gray-500">
                  <Eye className="w-4 h-4 hover:text-blue-500 cursor-pointer" />
                  <Edit className="w-4 h-4 hover:text-blue-500 cursor-pointer" />
                  <Play className="w-4 h-4 hover:text-blue-500 cursor-pointer" />
                  <MoreVertical className="w-4 h-4 hover:text-blue-500 cursor-pointer" />
                </div>
              </td>
            </tr> */}
                </>
              ))}
            
          </tbody>
        </table>
        </div>
      </div>
      <div className="flex justify-between mx-4 mb-5">
        <div className="flex items-center gap-1 text-sm text-gray-600">
          showing <p className="font-semibold text-gray-800">1</p>to <p className="font-semibold text-gray-800">5</p> of <p className="font-semibold text-gray-800">5</p> result
        </div>
        <div className="flex gap-1">
          <button className="border border-gray-600 px-4 py-2 rounded-xl text-gray-500">Previous</button>
          <button className="border bg-blue-600 text-white px-4 py-2 rounded-xl">1</button>
          <button className="border border-gray-600 px-4 py-2 rounded-xl">Next</button>
        </div>
      </div>
    </div>
  );
}

export default ManageJob;
