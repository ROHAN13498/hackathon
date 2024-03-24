import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import axios from "axios";
import { useUser } from "@clerk/clerk-react"
import VideoPlayer from './Videoplayer';

const SCourseVideo = () => {
    const { chapterId } = useParams();
    const { isLoaded, user } = useUser();

    if (!isLoaded) {
        return null;
    }

    const [module, setModule] = useState({});

    useEffect(() => {
        const getModule = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/students/modules/${chapterId}/${user.id}`);
                setModule(res.data.module);
                console.log(res.data)
            } catch (error) {
                console.error("Error fetching module:", error);
            }
        };
        getModule();
    }, [chapterId, user])

    // Format uploaded date
    const formattedUploadedDate = new Date(module.uploadedDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="container mx-auto px-4 py-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">{module.title}</h2>
            <div className="relative h-0 pb-16/9">
                <VideoPlayer url={module.link} />
            </div>
        </div>
    );
};

export default SCourseVideo;
