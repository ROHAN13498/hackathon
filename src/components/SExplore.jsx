import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SSideBar from './SSideBar';
import TCard from './TCard';

const SExplore = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [tutors, setTutors] = useState([]);
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        // Function to fetch card data
        const fetchCardData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/students/tutors'); // Assuming your backend API endpoint for fetching courses is /api/courses
                setCardData(response.data); // Assuming response.data contains the card data
                setTutors(response.data)
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching card data:', error);
            }
        };

        // Call the fetchCardData function
        fetchCardData();
    }, []);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        if (value.trim() === '') {
            // If search query is empty, reset courses to original data
            setTutors(cardData); // Assuming cardData contains the original data
        } else {
            // Filter courses based on search query
            const filteredCourses = cardData.filter((tutor) =>
                tutor.name.toLowerCase().includes(value.toLowerCase())
            );
            setTutors(filteredCourses);
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
                    {tutors.map((tutor) => (
                        <TCard
                            key={tutor.userId}
                            title={tutor.name}
                            description={tutor.aboutMe}
                            imageUrl={tutor.imageLink}
                            url="dummy"
                            // btntxt="Enroll"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SExplore;
