import React, { useState, useEffect } from 'react';
import SSideBar from './TSideBar';
import axios from 'axios';
import { cn } from "../utils/cn";
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

const TDashboard = () => {
    const navigate = useNavigate();
    const { user, isSignedIn, isLoaded } = useUser();
    const [courses, setCourses] = useState([]);
    const [editingCourses, setEditingCourses] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            if (isLoaded && isSignedIn) {
                try {
                    const response = await axios.get(`http://localhost:5000/tutors/courses/${user.id}`);
                    setCourses(response.data);
                    const editingState = {};
                    response.data.forEach(course => {
                        editingState[course._id] = false;
                    });
                    setEditingCourses(editingState);
                } catch (error) {
                    console.error("Error:", error);
                }
            }
        };
        fetchData();

        const postUserData = async () => {
            if (isLoaded && isSignedIn) {
                try {
                    await axios.post('http://localhost:5000/tutors/user-id', {
                        userId: user.id,
                    });
                } catch (error) {
                    console.error("Error:", error);
                }
            }
        };
        postUserData();
    }, [isLoaded, isSignedIn, user]);

    const handleEdit = (courseId) => {
        setEditingCourses(prevState => ({
            ...prevState,
            [courseId]: !prevState[courseId] 
        }));
    };

    const handleModify = (courseId) => {
        navigate(`/teacher/${user.id}/courses/${courseId}`);
    };

    const handleDelete = async (courseId) => {
        try {
            await axios.delete(`http://localhost:5000/tutors/courses/${courseId}`);
            setCourses(prevCourses => prevCourses.filter(course => course._id !== courseId));
            console.log(courseId, " Course Deleted")
        } catch (error) {
            console.error("Error:", error);
        }
    };
    const handleAddCourse = async ()=>{
        const res=await axios.post(`http://localhost:5000/tutors/${user.id}/courses`,{
            title:"",
            description:""
        });
        const courseId=res.data.course._id;
        navigate(`/teacher/${user.id}/courses/${courseId}`);
    }

    return (
        <div className="flex">
            <div className="w-64">
                <SSideBar />
            </div>
            <div className="flex-grow">
                <div className="flex justify-center m-4">
                    <button
                        className={cn(
                            "p-3 rounded-lg text-start leading-tight transition-all hover:bg-sky-200/40 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none hover:scale-105"
                        )}
                        onClick={handleAddCourse}
                    >
                        Add Course
                    </button>
                </div>
                <table className="min-w-full bg-blue-100 divide-y divide-gray-200">
                    <thead className="bg-blue-50" style={{ backgroundColor: "#E3F5FE" }}>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                                #
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                                Title
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                                Description
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {courses.map((course, index) => (
                            <tr key={course._id}>
                                <td className="px-6 py-4 text-sm">{index + 1}.</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{course.title}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{course.description}</td>
                                <td className="px-6 py-4 text-sm font-medium">
                                    {editingCourses[course._id] ? (
                                        <>
                                            <button onClick={() => handleModify(course._id)} className="text-indigo-600 hover:text-indigo-900 mr-2">Modify</button>
                                            <button onClick={() => handleDelete(course._id)} className="text-red-600 hover:text-red-900">Delete</button>
                                        </>
                                    ) : (
                                        <button onClick={() => handleEdit(course._id)} className="text-indigo-600 hover:text-indigo-900">Edit</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TDashboard;
