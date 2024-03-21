import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HiOutlineVideoCamera } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react"

// const ChapterItem = ({ chapterName, handleClick }) => {
//     return (
//         <div className='flex items-center gap-x-2 text-gray-600 hover:text-gray-900 cursor-pointer ' onClick={handleClick}>
//             <HiOutlineVideoCamera />
//             <p>{chapterName}</p>
//         </div>
//     );
// };

const SCourseSideBar = ({ course }) => {
    const [chapters, setChapters] = useState([]);
    const navigate = useNavigate();
    const { user, isLoading } = useUser()
    if (isLoading) {
        return null;
    }

    useEffect(() => {
        const getChapters = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/tutors/courses/${course}/contents`);
                setChapters(res.data.course.modules || []);
            } catch (error) {
                console.log(error);
            }
        };
        getChapters();
    }, [course]);

    const handleClick = (id) => {
        navigate(`/student/course/${id}`);
    };
    const handleCheck = async (id) => {
        await axios.put(`http://localhost:5000/students/students/${user.id}/modules/${id}`)
    }

    return (
        <div className="h-full flex flex-col overflow-hidden">
            <div className="relative flex-1 overflow-y-auto">
                <div className="bg-white rounded-lg p-4">
                    <nav className="flex flex-col gap-4 min-w-[240px] text-base font-normal  text-gray-700">
                        {chapters && chapters.length > 0 ? (
                            chapters.map((chapter) => (
                                <div
                                    key={chapter._id}
                                    className="flex  justify-between items-center p-3 rounded-lg cursor-pointer  hover:bg-blue-100 hover:scale-110 transition-all"
                                    onClick={() => handleClick(chapter._id)}
                                >
                                    <div className="flex  place-items-center mr-4 ">
                                        <HiOutlineVideoCamera className="h-6 w-6" />
                                        <p>{chapter.title}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No chapters found</p>
                        )}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default SCourseSideBar;
