import { Award, Bookmark, Calendar, FileText, TrendingUp } from "lucide-react";
import React from "react";

function DashBoard() {
  return (
    <div>
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white mb-4">
        <p className="font-bold text-2xl mb-2">Welcome back,John</p>
        <p className="text-indigo-100">
          Continue your job seacrh journey. You have 3 new job matches!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-2">
        <div className=" flex bg-white rounded-xl p-6 border border-gray-200 items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-60">
              Applications Sent
            </p>
            <p className="text-2xl font-bold text-gray-900">24</p>
            <p className="text-sm text-blue-600 mt-2">+3 this week</p>
          </div>
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
            <FileText size={24} className="text-indigo-600" />
          </div>
        </div>
        <div className=" flex bg-white rounded-xl p-6 border border-gray-200 items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-60">Profile Views</p>
            <p className="text-2xl font-bold text-gray-900">127</p>
            <p className="text-sm text-blue-600 mt-2 text-green-600">
              +40% from last week
            </p>
          </div>
          <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
            <TrendingUp size={24} className="text-green-600" />
          </div>
        </div>
        <div className=" flex bg-white rounded-xl p-6 border border-gray-200 items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-60">Saved Jobs</p>
            <p className="text-2xl font-bold text-gray-900">12</p>
            <p className="text-sm text-blue-600 mt-2 text-purple-600">
              6 new matches
            </p>
          </div>
          <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
            <Bookmark size={24} className="text-purple-600" />
          </div>
        </div>
        <div className=" flex bg-white rounded-xl p-6 border border-gray-200 items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-60">Interviews</p>
            <p className="text-2xl font-bold text-gray-900">3</p>
            <p className="text-sm text-blue-600 mt-2 text-orange-600">
              1 scheduled
            </p>
          </div>
          <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
            <Award size={24} className="text-orange-600" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 mt-5 p-6">
          <div className="p-6 border-b border-gray-200">
            <p className="text-lg font-semibold text-gray-900">
              Recent Applications
            </p>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center">
                  <FileText size={24} className="text-indigo-600" />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Senior React Developer
                  </p>
                  <p className="text-sm text-gray-500">
                    TechCorp inc. • Applied 2 days ago
                  </p>
                </div>
              </div>
              <div>
                <p className="bg-yellow-100 text-yellow-600 text-sm rounded-xl p-1 ">
                  In Review
                </p>
              </div>
            </div>
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                  <Award size={24} className="text-green-600" />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Frontend Engineer
                  </p>
                  <p className="text-sm text-gray-500">
                    StartupCo • Applied 5 days ago
                  </p>
                </div>
              </div>
              <div>
                <p className="bg-green-100 text-green-600 text-sm rounded-xl p-1 ">
                  Interview
                </p>
              </div>
            </div>
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                  <FileText size={24} />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-900">
                    UI/UX Developer
                  </p>
                  <p className="text-sm text-gray-500">
                    DesignHub • Applied 1 Week ago
                  </p>
                </div>
              </div>
              <div>
                <p className="bg-red-100 text-red-600 text-sm rounded-xl p-1 ">
                  rejected
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 mt-5 p-6">
          <div className="p-6 border-b border-gray-200">
            <p className="text-lg font-semibold text-gray-900">
              Recommended Jobs
            </p>
          </div>
          <div>
            <div className="pt-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Full Stack Developer
                  </p>
                  <p className="text-sm text-gray-500">Innovatelnc • Remote</p>
                </div>
                <div>
                  <p className="text-indigo-600 bg-indigo-100 rounded-xl p-1 text-sm">
                    95% Match
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-sm text-gray-500">
                  $80,000 - $120,000 • Full-time
                </p>
              </div>
              <div className="flex justify-between mt-4 gap-1">
                <button className="text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl px-38 py-2">
                  Apply Now
                </button>
                <button className="border border-gray-300 rounded-xl px-3 py-2 text-gray-500">
                  Save
                </button>
              </div>
            </div>
            <hr className="text-gray-300 mt-3" />
            <div className="pt-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    React Developer
                  </p>
                  <p className="text-sm text-gray-500">
                    WebSolutions • New York, NY
                  </p>
                </div>
                <div>
                  <p className="bg-green-100 text-green-500 rounded-xl p-1 text-sm">
                    88% Match
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-sm text-gray-500">
                  $70,000 - $95,000 • Full-time
                </p>
              </div>
              <div className="flex justify-between mt-4 gap-1">
                <button className="text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl px-38 py-2">
                  Apply Now
                </button>
                <button className="border border-gray-300 rounded-xl px-3 py-2 text-gray-500">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 mt-5 py-2">
        <div className="px-5 py-6 border-b border-gray-200">
          <p className="text-lg font-semibold text-gray-900">
            Upcoming Interviews
          </p>
        </div>
        <div className="flex bg-orange-50 m-5 rounded justify-between items-center p-3">
          <div className="flex items-center p-2 gap-4">
            <div className="bg-orange-100 p-3 rounded">
              <Calendar className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                Frontend Engineer Interview
              </p>
              <p className="text-sm text-gray-500 mb-1">
                StartupCo • Tomorrow at 2:00 PM
              </p>
              <p className="text-sm text-gray-500">Google Meet • 45 minutes</p>
            </div>
          </div>
          <div>
            <button className="text-orange-50 bg-orange-600 px-6 py-2 rounded-xl">
              Join Meeting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
