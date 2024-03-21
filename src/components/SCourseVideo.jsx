import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import axios from "axios";

const SCourseVideo = () => {
    const { chapterId } = useParams();
    const [module, setModule] = useState({});

    useEffect(() => {
        const getModule = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/students/modules/${chapterId}`);
                setModule(res.data);
            } catch (error) {
                console.error("Error fetching module:", error);
            }
        };
        getModule();
    }, [chapterId]);

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">{module.title}</h2>
            <div className="relative h-0 pb-16/9">
                <ReactPlayer className="absolute top-0 left-0" url={module.link} controls={true} />
            </div>
            <div className="mt-4">
                <p className="text-gray-700">Uploaded Date: {module.uploadedDate}</p>
            </div>
        </div>
    );
};

export default SCourseVideo;
