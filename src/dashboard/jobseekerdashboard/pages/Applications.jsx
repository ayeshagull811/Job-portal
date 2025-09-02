import {
  BarChart3,
  Building2,
  Calendar,
  Clock,
  Download,
  Eye,
  FileText,
  Filter,
  Locate,
  LocationEdit,
  MapPin,
  MessageSquare,
  MoreVertical,
  Search,
  Star,
  TrendingUp,
} from "lucide-react";
import React from "react";

function Applications() {
  return (
    <div>
      <div className="flex justify-between items-center mx-5 my-6">
        <div>
          <p className="font-bold text-xl">Application Histroy</p>
          <p className="text-gray-500">
            Track all ypur job applications and their status
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center border border-gray-400 text-gray-600 px-4 py-2 rounded hover:bg-gray-100 transition">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
          <button className="flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            <Search className="w-4 h-4 mr-2" />
            Find More Jobs
          </button>
        </div>
      </div>
      <div className="grid  lg:grid-cols-5 gap-2 mx-2">
        <div className=" flex bg-white rounded-xl p-4 border border-gray-200 items-center justify-between">
          <div>
            <p className="text-sm  text-gray-60">Total Applications</p>
            <p className="text-xl font-semibold text-gray-900">6</p>
          </div>
          <div className="p-2 bg-indigo-50 rounded-lg flex items-center justify-center">
            <FileText size={20} className="text-indigo-600" />
          </div>
        </div>
        <div className=" flex bg-white rounded-xl p-4 border border-gray-200 items-center justify-between">
          <div>
            <p className="text-sm  text-gray-60">Uder Review</p>
            <p className="text-xl font-semibold text-gray-900">1</p>
          </div>
          <div className="p-2 bg-yellow-100 rounded-lg flex items-center justify-center">
            <Eye size={20} className="text-yellow-600" />
          </div>
        </div>
        <div className="flex bg-white rounded-xl p-4 border border-gray-200 items-center justify-between">
          <div>
            <p className="text-sm  text-gray-60">Interviews</p>
            <p className="text-xl font-semibold text-gray-900">2</p>
          </div>
          <div className="p-2 bg-purple-50 rounded-lg flex items-center justify-center">
            <Calendar size={20} className="text-purple-600" />
          </div>
        </div>
        <div className=" flex bg-white rounded-xl p-4 border border-gray-200 items-center justify-between">
          <div>
            <p className="text-sm  text-gray-60">Responsive Rate</p>
            <p className="text-xl font-semibold text-gray-900">83%</p>
          </div>
          <div className="p-2 bg-green-50 rounded-lg flex items-center justify-center">
            <TrendingUp size={20} className="text-green-600" />
          </div>
        </div>
        <div className=" flex bg-white rounded-xl p-4 border border-gray-200 items-center justify-between">
          <div>
            <p className="text-sm  text-gray-60">Pending</p>
            <p className="text-xl font-semibold text-gray-900">1</p>
          </div>
          <div className="p-2 bg-blue-50 rounded-lg flex items-center justify-center">
            <Clock size={20} className="text-blue-600" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center mt-4 bg-white rounded-xl border border-gray-200 p-4 gap-4 mx-2">
        <div className="flex items-center border border-gray-300  w-full max-w-md pl-4 pr-2 py-2 rounded-lg bg-white">
          <Search className="w-4 h-4 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Search Applications..."
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

          <select
            name=""
            id=""
            className="border border-gray-300 text-gray-700 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <option value="">All Time</option>
            <option value="active">Active</option>
            <option value="paused">Paused</option>
            <option value="closed">Closed</option>
          </select>

          <button className="flex items-center border border-gray-300 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition">
            <Filter size={16} className="mr-2" />
            More
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow mt-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4 flex-1">
            <div className="p-3 rounded-lg border border-gray-200 flex items-center justify-center bg-gray-50">
              <Building2 className="text-gray-600 w-6 h-6" />
            </div>
            <div>
              <p className="text-xl font-bold ">Senior Frontend Developer</p>
              <div className="flex gap-3 text-sm text-gray-500">
                <p className="flex items-center gap-1">
                  <Building2 className=" w-4 h-4" />
                  TechCorp Solutions
                </p>
                <p className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 " />
                  New York, NY
                </p>
                <p>$90,000 - $120,000</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Calendar className="w-4 h-4 text-purple-600" />
            <p className="text-purple-700 font-semibold bg-purple-100 rounded-2xl p-1">
              Interview Scheduled
            </p>
            <Eye className="w-4 h-4 text-gray-400" />
            <MessageSquare className="w-4 h-4 text-gray-400" />
            <MoreVertical className="w-4 h-4 text-gray-400 cursor-pointer" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 mt-4 ml-15">
          <div>
            <p className="text-xs font-medium text-gray-500 mb-1">
              Applied Date
            </p>
            <p className="text-sm text-gray-900 flex items-center gap-1">
              <Calendar className="w-4 h-4 text-gray-400" />
              1/20/2024
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 mb-1">
              Last Update
            </p>
            <p className="text-sm text-gray-900 flex items-center gap-1">
              1/22/2024
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 mb-1">
              Application Method
            </p>
            <p className="text-sm text-gray-900 flex items-center gap-1">
              Platform
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center bg-purple-100 p-3 rounded-lg text-purple-700 ml-15 mr-15">
          <Calendar className="w-4 h-4" />
          Interview Scheduled 1/25/2024 at 2:00 PM
        </div>
        <div className="bg-gray-50 p-3 rounded-lg text-gray-700 my-4 ml-15 mr-15">
          <p>Great culture fit, technical interview scheduled</p>
        </div>
        <div>
          <p className="flex gap-1 items-center ml-15">
            Interest Level:
            <Star
              size={16}
             className="text-yellow-400 fill-yellow-400"
            />
            <Star
              size={16}
             className="text-yellow-400 fill-yellow-400"
            />
            <Star
              size={16}
             className="text-yellow-400 fill-yellow-400"
            />
            <Star
              size={16}
             className="text-yellow-400 fill-yellow-400"
            />
            <Star
              size={16}
             className="text-yellow-400 fill-yellow-400"
            />
          </p>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow mt-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4 flex-1">
            <div className="p-3 rounded-lg border border-gray-200 flex items-center justify-center bg-gray-50">
              <Building2 className="text-gray-600 w-6 h-6" />
            </div>
            <div>
              <p className="text-xl font-bold ">Senior Frontend Developer</p>
              <div className="flex gap-3 text-sm text-gray-500">
                <p className="flex items-center gap-1">
                  <Building2 className=" w-4 h-4" />
                  TechCorp Solutions
                </p>
                <p className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 " />
                  New York, NY
                </p>
                <p>$90,000 - $120,000</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Calendar className="w-4 h-4 text-purple-600" />
            <p className="text-purple-700 font-semibold bg-purple-100 rounded-2xl p-1">
              Interview Scheduled
            </p>
            <Eye className="w-4 h-4 text-gray-400" />
            <MessageSquare className="w-4 h-4 text-gray-400" />
            <MoreVertical className="w-4 h-4 text-gray-400 cursor-pointer" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 mt-4 ml-15">
          <div>
            <p className="text-xs font-medium text-gray-500 mb-1">
              Applied Date
            </p>
            <p className="text-sm text-gray-900 flex items-center gap-1">
              <Calendar className="w-4 h-4 text-gray-400" />
              1/20/2024
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 mb-1">
              Last Update
            </p>
            <p className="text-sm text-gray-900 flex items-center gap-1">
              1/22/2024
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 mb-1">
              Application Method
            </p>
            <p className="text-sm text-gray-900 flex items-center gap-1">
              Platform
            </p>
          </div>
        </div>
       
        <div className="bg-gray-50 p-3 rounded-lg text-gray-700 my-4 ml-15 mr-15">
          <p>Great culture fit, technical interview scheduled</p>
        </div>
        <div>
          <p className="flex gap-1 items-center ml-15">
            Interest Level:
            <Star
              size={16}
             className="text-yellow-400 fill-yellow-400"
            />
            <Star
              size={16}
             className="text-yellow-400 fill-yellow-400"
            />
            <Star
              size={16}
             className="text-yellow-400 fill-yellow-400"
            />
            <Star
              size={16}
             className="text-yellow-400 fill-yellow-400"
            />
            <Star
              size={16}
             className="text-yellow-400 fill-yellow-400"
            />
          </p>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow mt-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4 flex-1">
            <div className="p-3 rounded-lg border border-gray-200 flex items-center justify-center bg-gray-50">
              <Building2 className="text-gray-600 w-6 h-6" />
            </div>
            <div>
              <p className="text-xl font-bold ">Senior Frontend Developer</p>
              <div className="flex gap-3 text-sm text-gray-500">
                <p className="flex items-center gap-1">
                  <Building2 className=" w-4 h-4" />
                  TechCorp Solutions
                </p>
                <p className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 " />
                  New York, NY
                </p>
                <p>$90,000 - $120,000</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Calendar className="w-4 h-4 text-purple-600" />
            <p className="text-purple-700 font-semibold bg-purple-100 rounded-2xl p-1">
              Interview Scheduled
            </p>
            <Eye className="w-4 h-4 text-gray-400" />
            <MessageSquare className="w-4 h-4 text-gray-400" />
            <MoreVertical className="w-4 h-4 text-gray-400 cursor-pointer" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 mt-4 ml-15">
          <div>
            <p className="text-xs font-medium text-gray-500 mb-1">
              Applied Date
            </p>
            <p className="text-sm text-gray-900 flex items-center gap-1">
              <Calendar className="w-4 h-4 text-gray-400" />
              1/20/2024
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 mb-1">
              Last Update
            </p>
            <p className="text-sm text-gray-900 flex items-center gap-1">
              1/22/2024
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 mb-1">
              Application Method
            </p>
            <p className="text-sm text-gray-900 flex items-center gap-1">
              Platform
            </p>
          </div>
        </div>
       
        <div className="bg-gray-50 p-3 rounded-lg text-gray-700 my-4 ml-15 mr-15">
          <p>Great culture fit, technical interview scheduled</p>
        </div>
        <div>
          <p className="flex gap-1 items-center ml-15">
            Interest Level:
            <Star
              size={16}
             className="text-yellow-400 fill-yellow-400"
            />
            <Star
              size={16}
             className="text-yellow-400 fill-yellow-400"
            />
            <Star
              size={16}
             className="text-yellow-400 fill-yellow-400"
            />
            <Star
              size={16}
             className="text-yellow-400 fill-yellow-400"
            />
            <Star
              size={16}
             className="text-yellow-400 fill-yellow-400"
            />
          </p>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow mt-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4 flex-1">
            <div className="p-3 rounded-lg border border-gray-200 flex items-center justify-center bg-gray-50">
              <Building2 className="text-gray-600 w-6 h-6" />
            </div>
            <div>
              <p className="text-xl font-bold ">Senior Frontend Developer</p>
              <div className="flex gap-3 text-sm text-gray-500">
                <p className="flex items-center gap-1">
                  <Building2 className=" w-4 h-4" />
                  TechCorp Solutions
                </p>
                <p className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 " />
                  New York, NY
                </p>
                <p>$90,000 - $120,000</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Calendar className="w-4 h-4 text-purple-600" />
            <p className="text-purple-700 font-semibold bg-purple-100 rounded-2xl p-1">
              Interview Scheduled
            </p>
            <Eye className="w-4 h-4 text-gray-400" />
            <MessageSquare className="w-4 h-4 text-gray-400" />
            <MoreVertical className="w-4 h-4 text-gray-400 cursor-pointer" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 mt-4 ml-15">
          <div>
            <p className="text-xs font-medium text-gray-500 mb-1">
              Applied Date
            </p>
            <p className="text-sm text-gray-900 flex items-center gap-1">
              <Calendar className="w-4 h-4 text-gray-400" />
              1/20/2024
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 mb-1">
              Last Update
            </p>
            <p className="text-sm text-gray-900 flex items-center gap-1">
              1/22/2024
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 mb-1">
              Application Method
            </p>
            <p className="text-sm text-gray-900 flex items-center gap-1">
              Platform
            </p>
          </div>
        </div>
       
        <div className="bg-gray-50 p-3 rounded-lg text-gray-700 my-4 ml-15 mr-15">
          <p>Great culture fit, technical interview scheduled</p>
        </div>
        <div>
          <p className="flex gap-1 items-center ml-15">
            Interest Level:
            <Star
              size={16}
             className="text-yellow-400 fill-yellow-400"
            />
            <Star
              size={16}
             className="text-yellow-400 fill-yellow-400"
            />
            <Star
              size={16}
             className="text-yellow-400 fill-yellow-400"
            />
            <Star
              size={16}
             className="text-yellow-400 fill-yellow-400"
            />
            <Star
              size={16}
             className="text-yellow-400 fill-yellow-400"
            />
          </p>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow mt-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4 flex-1">
            <div className="p-3 rounded-lg border border-gray-200 flex items-center justify-center bg-gray-50">
              <Building2 className="text-gray-600 w-6 h-6" />
            </div>
            <div>
              <p className="text-xl font-bold ">Senior Frontend Developer</p>
              <div className="flex gap-3 text-sm text-gray-500">
                <p className="flex items-center gap-1">
                  <Building2 className=" w-4 h-4" />
                  TechCorp Solutions
                </p>
                <p className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 " />
                  New York, NY
                </p>
                <p>$90,000 - $120,000</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Calendar className="w-4 h-4 text-purple-600" />
            <p className="text-purple-700 font-semibold bg-purple-100 rounded-2xl p-1">
              Interview Scheduled
            </p>
            <Eye className="w-4 h-4 text-gray-400" />
            <MessageSquare className="w-4 h-4 text-gray-400" />
            <MoreVertical className="w-4 h-4 text-gray-400 cursor-pointer" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 mt-4 ml-15">
          <div>
            <p className="text-xs font-medium text-gray-500 mb-1">
              Applied Date
            </p>
            <p className="text-sm text-gray-900 flex items-center gap-1">
              <Calendar className="w-4 h-4 text-gray-400" />
              1/20/2024
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 mb-1">
              Last Update
            </p>
            <p className="text-sm text-gray-900 flex items-center gap-1">
              1/22/2024
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 mb-1">
              Application Method
            </p>
            <p className="text-sm text-gray-900 flex items-center gap-1">
              Platform
            </p>
          </div>
        </div>
       
        <div className="bg-gray-50 p-3 rounded-lg text-gray-700 my-4 ml-15 mr-15">
          <p>Great culture fit, technical interview scheduled</p>
        </div>
        <div>
          <p className="flex gap-1 items-center ml-15">
            Interest Level:
            <Star
              size={16}
             className="text-yellow-400 fill-yellow-400"
            />
            <Star
              size={16}
             className="text-yellow-400 fill-yellow-400"
            />
            <Star
              size={16}
             className="text-yellow-400 fill-yellow-400"
            />
            <Star
              size={16}
             className="text-yellow-400 fill-yellow-400"
            />
            <Star
              size={16}
             className="text-yellow-400 fill-yellow-400"
            />
          </p>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow mt-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4 flex-1">
            <div className="p-3 rounded-lg border border-gray-200 flex items-center justify-center bg-gray-50">
              <Building2 className="text-gray-600 w-6 h-6" />
            </div>
            <div>
              <p className="text-xl font-bold ">Senior Frontend Developer</p>
              <div className="flex gap-3 text-sm text-gray-500">
                <p className="flex items-center gap-1">
                  <Building2 className=" w-4 h-4" />
                  TechCorp Solutions
                </p>
                <p className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 " />
                  New York, NY
                </p>
                <p>$90,000 - $120,000</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Calendar className="w-4 h-4 text-purple-600" />
            <p className="text-purple-700 font-semibold bg-purple-100 rounded-2xl p-1">
              Interview Scheduled
            </p>
            <Eye className="w-4 h-4 text-gray-400" />
            <MessageSquare className="w-4 h-4 text-gray-400" />
            <MoreVertical className="w-4 h-4 text-gray-400 cursor-pointer" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 mt-4 ml-15">
          <div>
            <p className="text-xs font-medium text-gray-500 mb-1">
              Applied Date
            </p>
            <p className="text-sm text-gray-900 flex items-center gap-1">
              <Calendar className="w-4 h-4 text-gray-400" />
              1/20/2024
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 mb-1">
              Last Update
            </p>
            <p className="text-sm text-gray-900 flex items-center gap-1">
              1/22/2024
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 mb-1">
              Application Method
            </p>
            <p className="text-sm text-gray-900 flex items-center gap-1">
              Platform
            </p>
          </div>
        </div>
       
        <div className="bg-gray-50 p-3 rounded-lg text-gray-700 my-4 ml-15 mr-15">
          <p>Great culture fit, technical interview scheduled</p>
        </div>
        <div>
          <p className="flex gap-1 items-center ml-15">
            Interest Level:
            <Star
              size={16}
             className="text-yellow-400 fill-yellow-400"
            />
            <Star
              size={16}
             className="text-yellow-400 fill-yellow-400"
            />
            <Star
              size={16}
             className="text-yellow-400 fill-yellow-400"
            />
            <Star
              size={16}
             className="text-yellow-400 fill-yellow-400"
            />
            <Star
              size={16}
             className="text-yellow-400 fill-yellow-400"
            />
          </p>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow mt-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4 flex-1">
            <div className="p-3 rounded-lg border border-gray-200 flex items-center justify-center bg-gray-50">
              <Building2 className="text-gray-600 w-6 h-6" />
            </div>
            <div>
              <p className="text-xl font-bold ">Senior Frontend Developer</p>
              <div className="flex gap-3 text-sm text-gray-500">
                <p className="flex items-center gap-1">
                  <Building2 className=" w-4 h-4" />
                  TechCorp Solutions
                </p>
                <p className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 " />
                  New York, NY
                </p>
                <p>$90,000 - $120,000</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Calendar className="w-4 h-4 text-purple-600" />
            <p className="text-purple-700 font-semibold bg-purple-100 rounded-2xl p-1">
              Interview Scheduled
            </p>
            <Eye className="w-4 h-4 text-gray-400" />
            <MessageSquare className="w-4 h-4 text-gray-400" />
            <MoreVertical className="w-4 h-4 text-gray-400 cursor-pointer" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 mt-4 ml-15">
          <div>
            <p className="text-xs font-medium text-gray-500 mb-1">
              Applied Date
            </p>
            <p className="text-sm text-gray-900 flex items-center gap-1">
              <Calendar className="w-4 h-4 text-gray-400" />
              1/20/2024
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 mb-1">
              Last Update
            </p>
            <p className="text-sm text-gray-900 flex items-center gap-1">
              1/22/2024
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 mb-1">
              Application Method
            </p>
            <p className="text-sm text-gray-900 flex items-center gap-1">
              Platform
            </p>
          </div>
        </div>
       
        <div className="bg-gray-50 p-3 rounded-lg text-gray-700 my-4 ml-15 mr-15">
          <p>Great culture fit, technical interview scheduled</p>
        </div>
        <div>
          <p className="flex gap-1 items-center ml-15">
            Interest Level:
            <Star
              size={16}
             className="text-yellow-400 fill-yellow-400"
            />
            <Star
              size={16}
             className="text-yellow-400 fill-yellow-400"
            />
            <Star
              size={16}
             className="text-yellow-400 fill-yellow-400"
            />
            <Star
              size={16}
             className="text-yellow-400 fill-yellow-400"
            />
            <Star
              size={16}
             className="text-yellow-400 fill-yellow-400"
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Applications;
