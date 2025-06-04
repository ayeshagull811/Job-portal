import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import LoginPage from './Components/Login';
import SignUpPage from './Components/signUp';
import JobDescription from "./Pages/JobDescription"
import ApplyNow from './Components/ApplyJob';
import axios from "axios";
import React, { useEffect, useState } from "react";
import CompanyName from './Components/Company';

function App() {

return(
    <div className="App">
    <div className='' >
     <Header/>
     
      <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/Signup' element={<SignUpPage/>}/>
            <Route path='/company' element={<CompanyName />}/>
            <Route path='/jobdescription/:id' element={<JobDescription/>}/>
            <Route path='/applynow/:id' element={<ApplyNow/>}/>
      </Routes>
     
     <Footer/>
    </div>
    </div>
  );
}

export default App;
