import React, { useState } from 'react';
import TSideBar from './TSideBar';
import { MdEdit } from 'react-icons/md'; // Import edit icon
import DropboxComponent from './Dropbox'; // Import DropboxComponent
import { useUser } from '@clerk/clerk-react';
import { useEffect } from 'react';
import axios from 'axios';
const TProfile = () => {
    const { user, isLoaded, isSignedIn } = useUser();
    const [TData, setTData] = useState({});
    useEffect(() => {
        const fetchProfileData = async () => {
            if (isLoaded && isSignedIn) {
                try {
                    const response = await axios.get(`http://localhost:5000/tutors/${user.id}/profile`);
                    console.log(response);
                    setTData(response.data);
                } catch (error) {
                    console.error('Error fetching profile data:', error);
                }
            }
        };

        fetchProfileData();
    }, [isLoaded, isSignedIn]);
    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingAbout, setIsEditingAbout] = useState(false);
    const [newName, setNewName] = useState(TData.name);
    const [newaboutMe, setNewaboutMe] = useState(TData.aboutMe);
    const [newimageLink, setNewimageLink] = useState('');
    const [isEditingImage, setIsEditingImage] = useState(false);

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };

    const handleAboutChange = (event) => {
        setNewaboutMe(event.target.value);
    };

    const handleNameEdit = () => {
        setIsEditingName(true);
    };

    const handleAboutEdit = () => {
        setIsEditingAbout(true);
    };

    const handleNameChangeSubmit = async () => {
        if (newName) {
            const res = await axios.put(`http://localhost:5000/tutors/${user.id}/name`, {
                name: newName
            });
            console.log(res);
        }
        setTData({ ...TData, name: newName });
        setIsEditingName(false);
    };

    const handleAboutChangeSubmit = async () => {
        if (newaboutMe) {
            const res = await axios.put(`http://localhost:5000/tutors/${user.id}/aboutMe`, {
                aboutMe: newaboutMe
            });
            console.log(res);
        }
        setTData({ ...TData, aboutMe: newaboutMe });
        setIsEditingAbout(false);
    };

    const handleImageEdit = () => {
        setIsEditingImage(true);
    };

    const handleImageChange = (files) => {
        if (files && files.length > 0) {
            const reader = new FileReader();
            reader.onload = () => {
                setNewimageLink(reader.result);
            };
            reader.readAsDataURL(files[0]);
        }
    };

    const handleUpload = (error, result) => {
        if (error) {
            console.error('Upload failed:', error);
        } else {
            console.log('Upload successful from add :', result.info.url);
        }
    };

    const handleImageChangeSubmit = async () => {
        if (newimageLink) {
            await axios.put(`http://localhost:5000/tutors/${user.id}/imageLink`, {
                imageLink: newimageLink
            })
            setTData({ ...TData, imageLink: newimageLink });
            setNewimageLink('');
            setIsEditingImage(false);
        }
    };

    return (
        <div className="flex">
            <div className="w-64">
                <TSideBar />
            </div>
            <div className="flex-grow flex mt-10 mb-10">
                <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative">
                        {isEditingImage ? (
                            <div>
                                <DropboxComponent callback={(url) => setNewimageLink(url)} handleUpload={handleUpload} />
                                <button onClick={handleImageChangeSubmit}>Change Image</button>
                            </div>
                        ) : (
                            <>
                                {TData.imageLink ? (
                                    <>
                                        <img className="w-full h-64 object-cover object-center rounded-t-lg" src={TData.imageLink} alt="Teacher Profile" />
                                        <div className="absolute top-2 right-2 bg-blue-400 rounded-full p-2">
                                            <MdEdit onClick={handleImageEdit} className="text-white cursor-pointer" size={23} />
                                        </div>
                                    </>
                                ) : (
                                    <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-t-lg">
                                        <p className="text-gray-500">Add Your Image Here</p>
                                        <div className="absolute top-2 right-2 bg-blue-400 rounded-full p-2">
                                            <MdEdit onClick={handleImageEdit} className="text-white cursor-pointer" size={23} />
                                        </div>
                                    </div>
                                )}
                            </>

                        )}
                    </div>
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            {isEditingName ? (
                                <>
                                    <input
                                        type="text"
                                        defaultValue={TData.name}
                                        onChange={handleNameChange}
                                        className="outline-none border-b border-gray-400 w-48"
                                    />
                                    <button onClick={handleNameChangeSubmit}>Change</button>
                                </>
                            ) : (
                                <>
                                    {TData.name ? (
                                        <>
                                            <h2 className="text-2xl font-bold text-gray-800">{TData.name}</h2>
                                            <div className="rounded-full p-1">
                                                <MdEdit onClick={handleNameEdit} className="cursor-pointer" size={16} />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <p className="text-gray-500">Add Your Name Here</p>
                                            <div className="rounded-full p-1">
                                                <MdEdit onClick={handleNameEdit} className="cursor-pointer" size={16} />
                                            </div>
                                        </>
                                    )}
                                </>

                            )}
                        </div>
                        <div className="flex items-center justify-between">
                            {isEditingAbout ? (
                                <>
                                    <textarea
                                        defaultValue={TData.aboutMe}
                                        onChange={handleAboutChange}
                                        className="outline-none border-b border-gray-400 w-full"
                                    />
                                    <button onClick={handleAboutChangeSubmit}>Change</button>
                                </>
                            ) : (
                                <>
                                    {TData.aboutMe ? (
                                        <>
                                            <p className="mt-2 text-gray-600">{TData.aboutMe}</p>
                                            <div className="rounded-full p-1">
                                                <MdEdit onClick={handleAboutEdit} className="cursor-pointer" size={16} />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <p className="text-gray-500">Add Your Bio Here</p>
                                            <div className="rounded-full p-1">
                                                <MdEdit onClick={handleAboutEdit} className="cursor-pointer" size={16} />
                                            </div>
                                        </>
                                    )}
                                </>

                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TProfile;
