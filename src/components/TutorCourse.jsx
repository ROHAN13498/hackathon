import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SSideBar from './SSideBar';
import Card from './Card';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';

const TutorCourse = () => {
    const location = useLocation();
    const { id } = useParams();
    const [searchQuery, setSearchQuery] = useState('');
    const [courses, setCourses] = useState([]);
    const [userId, setUserId] = useState(null); // State to store the user ID

    const { userId: fetchedUserId } = useAuth(); // Destructure userId from useAuth()

    useEffect(() => {
        if (fetchedUserId) {
            // If fetchedUserId is available, update the userId state
            setUserId(fetchedUserId);
        }
    }, [fetchedUserId]); // Dependency array ensures this effect runs when fetchedUserId changes

    useEffect(() => {
        // Fetch card data only if userId is available
        if (userId) {
            const fetchCardData = async () => {
                try {
                    const response = await axios.get(`http://localhost:5000/students/courses/${id}/${userId}`);
                    setCourses(response.data);
                } catch (error) {
                    console.error('Error fetching card data:', error);
                }
            };
            fetchCardData();
        }
    }, [id, userId]); // Include userId in the dependency array

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        if (value.trim() === '') {
            setCourses(cardData);
        } else {
            const filteredCourses = cardData.filter((course) =>
                course.title.toLowerCase().includes(value.toLowerCase())
            );
            setCourses(filteredCourses);
        }
    };

    return (
        <div className="flex">
            <div className="w-64">
                <SSideBar />
            </div>
            <div className="flex-grow p-4">
                <div className="mb-4">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Search..."
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-400"
                    />
                </div>
                <div className='flex flex-wrap'>
                    {courses.map((course) => (
                        <Card
                            key={course._id}
                            courseId={course._id}
                            title={course.title}
                            description={course.description}
                            imageUrl={course.imageUrl}
                            userId={userId}
                            isEnrolled={course.isEnrolled}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TutorCourse;