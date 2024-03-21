import React, { useState, useEffect } from 'react';
import TSideBar from './TSideBar';
import { MdEdit } from 'react-icons/md';
import DropboxComponent from './Dropbox';
import AddChapter from './AddChapter';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const AddCourse = () => {
    const navigate = useNavigate();
    const { teacherId, courseId } = useParams();
    const [Course, setCourse] = useState(null);
    const [isEditingImage, setIsEditingImage] = useState(false);
    const [newImgLink, setNewImgLink] = useState('');
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [isEditingDescription, setIsEditingDescription] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newVidLink, setNewVidLink] = useState('');
    useEffect(() => {
        const fetchCourseData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/tutors/courses/${courseId}/contents`);
                console.log(response.data.course);
                setCourse(response.data.course);
            } catch (error) {
                console.error('Error fetching course data:', error);
            }
        };

        fetchCourseData();
        console.log(Course);
    }, []);

    const handleImageEdit = () => {
        setIsEditingImage(true);
    };
    const handlevideoChangeSubmit = async (moduleId) => {
        console.log("Video Added!");
        try {
            await axios.put(`http://localhost:5000/tutors/modules/${moduleId}/addLink`, {
                link: newVidLink
            });
            const updatedModules = Course.modules.map(chapter => {
                if (chapter._id === moduleId) {
                    return { ...chapter, link: newVidLink };
                }
                return chapter;
            });
            setCourse(prevCourse => ({
                ...prevCourse,
                modules: updatedModules
            }));
            setNewVidLink('');
        } catch (error) {
            console.error('Error adding video link:', error);
        }
    };

    const handleImageChangeSubmit = async () => {
        // router.put('/courses/:courseId/image'
        await axios.put(`http://localhost:5000/tutors/courses/${courseId}/image`, {
            imageUrl: newImgLink
        });
        if (newImgLink) {
            setCourse({ ...Course, imageLink: newImgLink });
            setNewImgLink('');
            setIsEditingImage(false);
        }
    };

    const handleTitleEdit = () => {
        setIsEditingTitle(true);
    };

    const handleDescriptionEdit = () => {
        setIsEditingDescription(true);
    };

    const handleTitleChange = (event) => {
        // /courses/:courseId
        setNewTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setNewDescription(event.target.value);
    };

    const handleTitleChangeSubmit = async () => {
        const requestData = {
            title: newTitle,
            description: newDescription !== '' ? newDescription : Course.description,
        };
        try {
            await axios.put(`http://localhost:5000/tutors/courses/${courseId}`, requestData);
            setCourse((prevCourse) => ({
                ...prevCourse,
                title: newTitle,
                description: requestData.description,
            }));
            setIsEditingTitle(false);
        } catch (error) {
            console.error('Error updating course title and description:', error);
        }
    };

    const handleDescriptionChangeSubmit = async () => {
        const requestData = {
            title: newTitle !== '' ? newTitle : Course.title,
            description: newDescription,
        };
        try {
            await axios.put(`http://localhost:5000/tutors/courses/${courseId}`, requestData);
            setCourse((prevCourse) => ({ ...prevCourse, title: requestData.title, description: requestData.description }));
            setIsEditingDescription(false);
        } catch (error) {
            console.error('Error updating course title and description:', error);
        }
    };

    const handleDeleteChapter = async (moduleId) => {
        try {
            await axios.delete(`http://localhost:5000/tutors/courses/${courseId}/modules/${moduleId}`);
            setCourse(prevState => ({
                ...prevState,
                modules: prevState.modules.filter(chapter => chapter._id !== moduleId)
            }));
        } catch (error) {
            console.error('Error deleting chapter:', error);
        }
    };

    if (!Course) {
        return <div>Loading...</div>;
    }
    return (
        <div className="flex">
            <div className="w-64">
                <TSideBar />
            </div>
            <div className="flex-grow pt-3">
                <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="text-center py-4 bg-gray-100">
                        <p className="text-lg text-gray-700">Edit Course Image, Title and Description Below</p>
                    </div>
                    <div className="relative">
                        {isEditingImage ? (
                            <div>
                                <DropboxComponent callback={(url) => setNewImgLink(url)} />
                                <button onClick={handleImageChangeSubmit}>Change Image</button>
                            </div>
                        ) : (
                            <>
                                {Course.imageLink ? (
                                    <img className="w-full h-64 object-cover object-center rounded-t-lg" src={Course.imageLink} alt="Course Image" />
                                ) : (
                                    <div className="w-full h-64 flex items-center justify-center bg-gray-200 text-gray-600 rounded-t-lg">
                                        Add Course Image
                                    </div>
                                )}
                                <div className="absolute top-2 right-2 bg-blue-400 rounded-full p-2">
                                    <MdEdit onClick={handleImageEdit} className="text-white cursor-pointer" size={23} />
                                </div>
                            </>
                        )}
                    </div>

                    <div className="p-6">
                        <div className="mb-4 flex justify-between items-center">
                            {isEditingTitle ? (
                                <>
                                    <input
                                        type="text"
                                        defaultValue={Course.title}
                                        onChange={handleTitleChange}
                                        className="outline-none border-b border-gray-400 flex-grow"
                                    />
                                    <button onClick={handleTitleChangeSubmit}>Change</button>
                                </>
                            ) : (
                                <>
                                    {Course.title !== '' ? (
                                        <>
                                            <h1 className="text-2xl font-bold">{Course.title}</h1>
                                            <MdEdit onClick={handleTitleEdit} className="cursor-pointer" size={20} />
                                        </>
                                    ) : (
                                        <>
                                            <h1 className="text-xl text-gray-500">Add Course Title Here</h1>
                                            <MdEdit onClick={handleTitleEdit} className="cursor-pointer" size={20} />
                                        </>
                                    )}
                                </>

                            )}
                        </div>
                        <div className="flex justify-between items-center">
                            {isEditingDescription ? (
                                <>
                                    <textarea
                                        defaultValue={Course.description}
                                        onChange={handleDescriptionChange}
                                        className="outline-none border-b border-gray-400 w-full"
                                    />
                                    <button onClick={handleDescriptionChangeSubmit}>Change</button>
                                </>
                            ) : (
                                <>
                                    {Course.description !== '' ? (
                                        <>
                                            <p className="text-gray-600">{Course.description}</p>
                                            <MdEdit onClick={handleDescriptionEdit} className="cursor-pointer" size={20} />
                                        </>
                                    ) : (
                                        <>
                                            <p className="text-gray-500">Add Course Description Here</p>
                                            <MdEdit onClick={handleDescriptionEdit} className="cursor-pointer" size={20} />
                                        </>
                                    )}
                                </>

                            )}
                        </div>
                    </div>
                </div>
                <div className="mt-4 ml-6">
                    <h2 className="text-xl font-semibold mb-2 text-gray-900">Chapters</h2>
                    {Course.modules && Course.modules.map((chapter, index) => (
                        <div key={chapter._id} className="bg-white border border-gray-200 rounded-md p-4 mb-4 shadow-md">
                            <p className="text-lg font-medium text-gray-800">{index + 1}. {chapter.title}</p>
                            <p className="text-gray-600">Class Starts on {new Date(chapter.meetingDate).toLocaleDateString()} at {new Date(chapter.meetingDate).toLocaleTimeString()}</p>
                            <div className="flex justify-between items-center mt-2">
                                {chapter.link ? (
                                    <a href={chapter.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-700 rounded ml-2">Video Link</a>
                                ) : (
                                    <div className="flex items-center">
                                        <DropboxComponent callback={(url) => setNewVidLink(url)} />
                                        <button className="text-blue-400 hover:text-blue-700 rounded ml-2" onClick={() => handlevideoChangeSubmit(chapter._id)}>Add Video</button>
                                    </div>
                                )}
                                <button onClick={() => handleDeleteChapter(chapter._id)} className="text-red-600 hover:text-red-900 font py-1 px-2 rounded">
                                    Delete
                                </button>
                                {chapter.link ? <button className="text-green-400 hover:text-green-700 font py-1 px-2 rounded">
                                </button> : <button className="text-green-400 hover:text-green-700 font py-1 px-2 rounded">
                                    Start Class
                                </button>}
                            </div>
                        </div>
                    ))}

                    <AddChapter teacherId={teacherId} courseId={courseId} onAddChapter={(newChapter) => setCourse({ ...Course, modules: [...Course.modules, newChapter] })} />
                </div>
                <div className="text-center mb-10">
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out" onClick={() => navigate('/teacher/dashboard')}>
                        Publish Course
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddCourse;