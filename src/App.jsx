import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import Appbar from './components/Appbar';
import Landing from './components/Land';
import Login from './components/Login';
import TDashboard from './components/TDashboard';

export default function App() {
  const [isTeacher, setIsTeacher] = useState(0)
  const [user,setuser]=useState("");
  return (
    <Router>
      <Appbar />
      <Routes>
        <Route path="/" element={<Landing setIsTeacher={setIsTeacher} isTeacher={isTeacher} setuser={setuser} />} />
        <Route path="/login" element={<Login user={user}  />} />
        <Route path="/teacher/dashboard" element={<TDashboard />} />
      </Routes>
    </Router>
  );
}


