import React, { useEffect, useState } from 'react';
import SSideBar from './SSideBar';
import axios from 'axios';
import UploadWidget from './UploadWidget';
import Coursecard from './Coursecard';
import { useUser } from '@clerk/clerk-react';

const SDashboard = () => {
  const { user, isLoaded } = useUser();
  if (!isLoaded) {
    return null
  }
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const getEnrolledCourses = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/students/enrolled-courses/${user.id}`);
        setEnrolledCourses(response.data); // Assuming the response is an array of courses
      } catch (error) {
        console.log("[getEnrolledCourses]:", error);
      }
    };

    if (isLoaded) {
      getEnrolledCourses();
    }
  }, [isLoaded, user.id]);

  return (
    <div className="flex">
      <div className="w-64">
        <SSideBar />
      </div>
      <div className="flex-grow p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {enrolledCourses.map(course => (
            <Coursecard
              key={course.id}
              title={course.title}
              description={course.description}
              tutor={course.tutor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SDashboard;
