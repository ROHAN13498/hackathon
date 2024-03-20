import React, { useState } from 'react';
import TSideBar from './TSideBar';
import { MdEdit } from 'react-icons/md';
import DropboxComponent from './Dropbox';
import AddChapter from './AddChapter';
const AddCourse = () => {
    const [Course, setCourse] = useState({
        id: 1,
        title: 'UI/UX Review Check',
        description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
        imageLink: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/chris-ried-ieic5Tq8YMk-unsplas_1200x768.jpeg?size=1200:675',
        chapters: [
            {
                title: 'C1',
                Date: '2024-03-01',
                time: '06:00:00',
                isLive: 0,
                videLink: 'https://www.youtube.com/watch?v=JxIN5fruFFo&pp=ygUMMTAgc2VjIHZpZGVv'
            },
            {
                title: 'C2',
                Date: '2024-03-01',
                time: '06:00:00',
                isLive: 0,
                videLink: 'https://www.youtube.com/watch?v=JxIN5fruFFo&pp=ygUMMTAgc2VjIHZpZGVv'
            },
            {
                title: 'C3',
                Date: '2024-03-01',
                time: '06:00:00',
                isLive: 0,
                videLink: 'https://www.youtube.com/watch?v=JxIN5fruFFo&pp=ygUMMTAgc2VjIHZpZGVv'
            },
            {
                title: 'C4',
                Date: '2024-03-01',
                time: '06:00:00',
                isLive: 1,
                videLink: 'https://www.youtube.com/watch?v=JxIN5fruFFo&pp=ygUMMTAgc2VjIHZpZGVv'
            },
            {
                title: 'C5',
                Date: '2024-03-01',
                time: '06:00:00',
                isLive: 0,
                videLink: 'https://www.youtube.com/watch?v=JxIN5fruFFo&pp=ygUMMTAgc2VjIHZpZGVv'
            }
        ]
    });
    const [isEditingImage, setIsEditingImage] = useState(false);
    const [newImgLink, setNewImgLink] = useState(Course.imageLink);
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [isEditingDescription, setIsEditingDescription] = useState(false);
    const [newTitle, setNewTitle] = useState(Course.title);
    const [newDescription, setNewDescription] = useState(Course.description);

    const handleImageEdit = () => {
        setIsEditingImage(true);
    };

    const handleImageChangeSubmit = () => {
        if (newImgLink) {
            setCourse({ ...Course, imageLink: newImgLink });
            setNewImgLink('');
            setIsEditingImage(false);
        }
    };

    const handleUpload= (error, result) => {
        if (error) {
            console.error('Upload failed:', error);
        } else {
            console.log('Upload successful from add course IMAGE:', result.info.url);
        }
    };
    const handleImageUpload = (error, result) => {
        if (error) {
            console.error('Upload failed:', error);
        } else {
            console.log('Upload successful from add course IMAGE:', result.info.url);
        }
    };

    const handleTitleEdit = () => {
        setIsEditingTitle(true);
    };

    const handleDescriptionEdit = () => {
        setIsEditingDescription(true);
    };

    const handleTitleChange = (event) => {
        setNewTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setNewDescription(event.target.value);
    };

    const handleTitleChangeSubmit = () => {
        setCourse({ ...Course, title: newTitle });
        setIsEditingTitle(false);
    };

    const handleDescriptionChangeSubmit = () => {
        setCourse({ ...Course, description: newDescription });
        setIsEditingDescription(false);
    };

    return (
        <div className="flex">
            <div className="w-64">
                <TSideBar />
            </div>
            <div className="flex-grow pt-3">
                <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="text-center py-4 bg-gray-100">
                        <p className="text-lg text-gray-700">Edit Course Image Title And Description Below</p>
                    </div>
                    <div className="relative">
                        {isEditingImage ? (
                            <div>
                                <DropboxComponent handleUpload={handleImageUpload} />
                                <button onClick={handleImageChangeSubmit}>Change Image</button>
                            </div>
                        ) : (
                            <>
                                <img className="w-full h-64 object-cover object-center rounded-t-lg" src={Course.imageLink} alt="Course Image" />
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
                                        value={newTitle}
                                        onChange={handleTitleChange}
                                        className="outline-none border-b border-gray-400 flex-grow"
                                    />
                                    <button onClick={handleTitleChangeSubmit}>Change</button>
                                </>
                            ) : (
                                <>
                                    <h1 className="text-2xl font-bold">{Course.title}</h1>
                                    <MdEdit onClick={handleTitleEdit} className="cursor-pointer" size={20} />
                                </>
                            )}
                        </div>
                        <div className="flex justify-between items-center">
                            {isEditingDescription ? (
                                <>
                                    <textarea
                                        value={newDescription}
                                        onChange={handleDescriptionChange}
                                        className="outline-none border-b border-gray-400 w-full"
                                    />
                                    <button onClick={handleDescriptionChangeSubmit}>Change</button>
                                </>
                            ) : (
                                <>
                                    <p className="text-gray-600">{Course.description}</p>
                                    <MdEdit onClick={handleDescriptionEdit} className="cursor-pointer" size={20} />
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="mt-4 ml-6">
                    <h2 className="text-xl font-semibold mb-2 text-gray-900">Chapters</h2>
                    {Course.chapters.map((chapter, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-md p-4 mb-4 shadow-md">
                            <p className="text-lg font-medium text-gray-800">{index + 1}. {chapter.title}</p>
                            <p className="text-gray-600">Class Starts on {chapter.Date} at {chapter.time}</p>
                            <div className="flex justify-between mt-2">
                                <DropboxComponent handleUpload={handleUpload}></DropboxComponent>
                                <button className="text-green-400 hover:text-green-700 font py-1 px-2 rounded">
                                    Start Class
                                </button>
                            </div>
                        </div>
                    ))}
                    <AddChapter onAddChapter={(newChapter) => setCourse({ ...Course, chapters: [...Course.chapters, newChapter] })} />
                </div>
            </div>
        </div>
    );
};

export default AddCourse;