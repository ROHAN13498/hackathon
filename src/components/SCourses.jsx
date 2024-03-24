import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUser } from "@clerk/clerk-react";

const SCourses = () => {
    const { course } = useParams();
    const navigate = useNavigate();
    const { isLoaded, user } = useUser();
    const [courseData, setCourseData] = useState(null);
    const [chapters, setChapters] = useState([]);

    useEffect(() => {
        if (isLoaded && course && user.id) {
            const getCourse = async () => {
                try {
                    const res = await axios.get(`http://localhost:5000/students/courses/${course}/modules/${user.id}`);
                    setCourseData(res.data.course);
                    setChapters(res.data.modules);
                } catch (error) {
                    console.error(error);
                }
            };
            getCourse();
        }
    }, [isLoaded, course, user.id]);

    if (!isLoaded) {
        return null; // or return a loading indicator
    }

    if (!courseData) {
        return <div>Course not found.</div>;
    }

    // Function to format date to human-readable format
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    const handleViewChapter = (chapterId) => {
        navigate(`/student/course/${chapterId}`);
    };

    const liveChapters = chapters.filter(chapter => chapter.isLive === 1);
    const uploadedChapters = chapters.filter(chapter => chapter.isLive === 0);

    return (
        <div className="flex justify-start items-start p-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold text-gray-800">{courseData.title}</h2>
                <img className="mt-4 rounded-lg" src={courseData.imageLink} alt={courseData.title} />
                <p className="text-gray-600 mt-4">{courseData.description}</p>

                <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-800">Live Classes</h3>
                    {liveChapters.map((chapter) => (
                        <div key={chapter._id} className="bg-white shadow-md rounded-lg mb-4">
                            <div className="p-4 flex justify-between items-center">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">{chapter.title}</h3>
                                    <p className="text-gray-600">Meeting Date: {formatDate(chapter.meetingDate)}</p>
                                </div>
                                <button className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded transition-all hover:scale-105">
                                    Join
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-800">Uploaded Courses</h3>
                    {uploadedChapters.map((chapter) => (
                        <div key={chapter._id} className="bg-white shadow-md rounded-lg mb-4">
                            <div className="p-4 flex justify-between items-center">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">{chapter.title}</h3>
                                    <p className="text-gray-600">Uploaded Date: {formatDate(chapter.uploadedDate)}</p>
                                </div>
                                <button onClick={() => handleViewChapter(chapter._id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  transition-all hover:scale-105">
                                    View
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SCourses;
