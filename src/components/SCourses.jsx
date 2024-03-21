import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SCourseSideBar from './SCourseSideBar'; // Import the sidebar component
import axios from 'axios';

const SCourses = () => {
    const { course } = useParams();

    if (!course) {
        return <div>Course not found.</div>;
    }

    return (
        <div className="flex">
            <div className="w-64">
                <SCourseSideBar course={course} />
            </div>
            <div className="flex-grow">
                <h1>{course}</h1>
                {/* Other content related to the course */}
            </div>
        </div>
    );
};

export default SCourses;
