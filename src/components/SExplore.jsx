import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SSideBar from './SSideBar';
import TCard from './TCard';
import { useUser } from '@clerk/clerk-react';

const SExplore = () => {
    const { user, isLoaded } = useUser()
    if (!isLoaded) {
        return null;
    }

    const [searchQuery, setSearchQuery] = useState('');
    const [tutors, setTutors] = useState([]);
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        const updateUser = async () => {
            try {
                await axios.post("http://localhost:5000/students/user-id", { userId: user.id, name: user.username });
            } catch (error) {
                console.log("[UpdateUser:]", error);
            }
        };

        const fetchCardData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/students/tutors');
                setCardData(response.data);
                setTutors(response.data);
            } catch (error) {
                console.error('Error fetching card data:', error);
            }
        };
        updateUser();
        fetchCardData();
    }, [user.id]);

    const handleSearchChange = (e) => {

        const value = e.target.value;
        setSearchQuery(value);
        if (value.trim() === '') {
            setTutors(cardData);
        } else {
            console.log("details:");
            // console.log(cardData)
            const filteredCourses = cardData.filter((tutor) => {
                return tutor.name && tutor.name.toLowerCase().includes(value.toLowerCase());
            });

            // console.log(filteredCourses)
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
                    {tutors.map((tutor, index) => (
                        <div key={index}>
                            <TCard
                                title={tutor.name}
                                description={tutor.aboutMe}
                                imageUrl={tutor.imageLink}
                                url="dummy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SExplore;
