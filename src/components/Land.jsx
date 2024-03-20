import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TypewriterEffectSmooth } from "./ui/TypeWriter";
import { UserButton } from '@clerk/clerk-react'

const Landing = ({ setIsTeacher, isTeacher, setuser }) => {
    const navigate = useNavigate();

    const words = [
        {
            text: "Learn",
            className: "text-sky-500 dark:text-sky-500",
        },
        {
            text: "From",
            className: "text-sky-500 dark:text-sky-500",
        },
        {
            text: "Awesome",
            className: "text-sky-500 dark:text-sky-500",
        },
        {
            text: "Mentors",
            className: "text-sky-500 dark:text-sky-500",
        },
    ];

    const navigateToLogin = (isTeacherClicked) => {
        navigate('/login');
        setIsTeacher(isTeacherClicked);
        setuser(isTeacherClicked ? "teacher" : "student");
    };

    return (
        <div>
            <UserButton afterSignOutUrl='/' />
            <div className="flex justify-center -mt-32">
                <div className="flex flex-col items-center justify-center h-[40rem]">
                    <p className="text-black text-xs sm:text-base">
                        The road to Learn starts from here
                    </p>
                    <TypewriterEffectSmooth words={words} />
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <button className="w-40 h-10 rounded-xl bg-sky-500 text-white text-sm hover:scale-110 transition" onClick={() => navigateToLogin(true)}>
                            Teacher
                        </button>
                        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm  hover:scale-110 transition" onClick={() => navigateToLogin(false)}>
                            Student
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
