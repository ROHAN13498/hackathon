import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import Appbar from './components/Appbar';
import Landing from './components/Land';
import Login from './components/Login';
import TDashboard from './components/TDashboard';
import SDashboard from './components/SDashboard';
import SExplore from './components/SExplore';
import TProfile from './components/TProfile';
import AddCourse from './components/AddCourse';
import SCourses from './components/SCourses';
import SCourseVideo from './components/SCourseVideo';
import TutorCourse from "./components/TutorCourse"
export default function App() {
  const [isTeacher, setIsTeacher] = useState(null)
  const [user, setuser] = useState("");
  return (
    <Router>
      <Appbar />
      <Routes>
        <Route path="/" element={<Landing setIsTeacher={setIsTeacher} isTeacher={isTeacher} setuser={setuser} />} />
        <Route path="/login" element={<Login user={user} />} />
        <Route path="/teacher/dashboard" element={<TDashboard />} />
        <Route path="/student/dashboard" element={<SDashboard />} />
        <Route path="/student/explore" element={<SExplore />} />
        <Route path="/teacher/profile" element={<TProfile />} />
        <Route path="/student/:course" element={<SCourses />} />
        <Route path="/teacher/addCourse" element={<AddCourse />} />
        <Route path="/student/course/:chapterId" element={<SCourseVideo />} />
        <Route path='/student/explore/tutor-course/:id' element={<TutorCourse/>}/>
      </Routes>
    </Router>
  );
}