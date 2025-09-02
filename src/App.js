import { Navigate, Route, Routes } from "react-router-dom";
// import Footer from './Components/Footer';
// import Header from './Components/Header';
import HomePage from "./Pages/HomePage";
import LoginPage from "./Components/Login";
import SignUpPage from "./Components/signUp";
import JobDescription from "./Pages/JobDescription";
import ApplyNow from "./Components/ApplyJob";
import CompanyName from "./Components/Company";
import Dashboard from "./dashboard/userdashboard/dashboard";
import PostJob from "./dashboard/userdashboard/components/PostJob";
import ManageJob from "./dashboard/userdashboard/components/ManageJob";
import CompanyDashboard from "./dashboard/jobseekerdashboard/dashbord";
import JobForm from "./dashboard/userdashboard/pages/JobForm";
import DashBoard from "./dashboard/jobseekerdashboard/pages/Dashboard";
import Applications from "./dashboard/jobseekerdashboard/pages/Applications";
import JobDetails from "./dashboard/userdashboard/pages/JobDetails";
import Requirement from "./dashboard/userdashboard/pages/Requirement";
import Application from "./dashboard/userdashboard/pages/Application";
import Compensation from "./dashboard/userdashboard/pages/Compenstion";
import  ProtectedRoute  from "./protectiveRoute/protective";

function App() {
  return (
    <div className="App">
      <div className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Signup" element={<SignUpPage />} />
          <Route path="/company" element={<CompanyName />} />
          <Route path="/jobdescription/:id" element={<JobDescription />} />
          <Route path="/applynow/:id" element={<ApplyNow />} />


          <Route path="/employer-dashboard/:id" element={<ProtectedRoute  allowedRole="company"><Dashboard /></ProtectedRoute>}>
            <Route index element={<Navigate to="postjob" replace />} />
            <Route path="postjob" element={<PostJob />}>
           
              <Route index element={<Navigate to="BasicInfo" replace />} />
              <Route path="BasicInfo" element={<JobForm />} />
              <Route path="JobDetails" element={<JobDetails />} />
              <Route path="Requirement" element={<Requirement />} />
              <Route path="Compensation" element={<Compensation />} />
              <Route path="Application" element={<Application />} />
            </Route>
            <Route path="managejobs" element={<ManageJob />}></Route>
          </Route>

          
          <Route path="/jobseeker-dashboard/:id" element={<ProtectedRoute allowedRole="user"><CompanyDashboard /></ProtectedRoute>}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="Applications" element={<Applications />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
