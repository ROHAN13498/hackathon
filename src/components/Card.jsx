import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Card = ({ imageUrl, title, description, courseId,userId ,isEnrolled}) => {
    const location = useLocation();
    // const [isEnrolled, setIsEnrolled] = useState(false);
    // const isEnrolled=isEnrolled
// console.log(isEnrolled,title)
    const handleEnrollment = async () => {
        try {
            if (!isEnrolled) {
                // Enroll student
                await axios.post(`http://localhost:5000/students/enroll`, { userId: userId,courseId: courseId}); 
                isEnrolled=true
                  // Reload the page
                  window.location.reload();

            }
        } catch (error) {
            console.error('Error enrolling student:', error);
        }
    };
    

    return (
        <div>
            <div className="relative flex flex-col mt-6 text-gray-700 bg-slate-200 shadow-md bg-clip-border rounded-xl w-96 m-2">
                <div className="p-6">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-36 object-cover mb-4 rounded-lg"
                    />
                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {title}
                    </h5>
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        {description}
                    </p>
                </div>
                <div className="p-6 pt-0 flex justify-between">
                    {isEnrolled ? (
                        <p className="text-sm text-gray-500">Enrolled!!</p>
                    ) : (
                        <button
                            className="border border-red-900 rounded-md px-3 py-1"
                            onClick={handleEnrollment}
                        >
                            Enroll
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;