import React, { useState } from 'react';
import TSideBar from './TSideBar';
import { MdEdit } from 'react-icons/md'; // Import edit icon
import DropboxComponent from './Dropbox'; // Import DropboxComponent

const TProfile = () => {
    const [TData, setTData] = useState({
        "Name": "karthik",
        "imgLink": "https://th.bing.com/th/id/OIP.75OdyX9LQ-UcpVDVn6yylwHaE8?w=266&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "AboutMe": "Teacher AboutMe"
    });

    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingAbout, setIsEditingAbout] = useState(false);
    const [newName, setNewName] = useState(TData.Name);
    const [newAboutMe, setNewAboutMe] = useState(TData.AboutMe);
    const [newImgLink, setNewImgLink] = useState('');
    const [isEditingImage, setIsEditingImage] = useState(false);

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };

    const handleAboutChange = (event) => {
        setNewAboutMe(event.target.value);
    };

    const handleNameEdit = () => {
        setIsEditingName(true);
    };

    const handleAboutEdit = () => {
        setIsEditingAbout(true);
    };

    const handleNameChangeSubmit = () => {
        setTData({ ...TData, Name: newName });
        setIsEditingName(false);
    };

    const handleAboutChangeSubmit = () => {
        setTData({ ...TData, AboutMe: newAboutMe });
        setIsEditingAbout(false);
    };

    const handleImageEdit = () => {
        setIsEditingImage(true);
    };

    const handleImageChange = (files) => {
        if (files && files.length > 0) {
            const reader = new FileReader();
            reader.onload = () => {
                setNewImgLink(reader.result);
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

    const handleImageChangeSubmit = () => {
        if (newImgLink) {
            setTData({ ...TData, imgLink: newImgLink });
            setNewImgLink('');
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
                                <DropboxComponent handleUpload={handleUpload}/>
                                <button onClick={handleImageChangeSubmit}>Change Image</button>
                            </div>
                        ) : (
                            <>
                                <img className="w-full h-64 object-cover object-center rounded-t-lg" src={TData.imgLink} alt="Teacher Profile" />
                                <div className="absolute top-2 right-2 bg-blue-400 rounded-full p-2">
                                    <MdEdit onClick={handleImageEdit} className="text-white cursor-pointer" size={23} />
                                </div>
                            </>
                        )}
                    </div>
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            {isEditingName ? (
                                <>
                                    <input
                                        type="text"
                                        value={newName}
                                        onChange={handleNameChange}
                                        className="outline-none border-b border-gray-400 w-48"
                                    />
                                    <button onClick={handleNameChangeSubmit}>Change</button>
                                </>
                            ) : (
                                <>
                                    <h2 className="text-2xl font-bold text-gray-800">{TData.Name}</h2>
                                    <div className="rounded-full p-1">
                                        <MdEdit onClick={handleNameEdit} className="cursor-pointer" size={16} />
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="flex items-center justify-between">
                            {isEditingAbout ? (
                                <>
                                    <textarea
                                        value={newAboutMe}
                                        onChange={handleAboutChange}
                                        className="outline-none border-b border-gray-400 w-full"
                                    />
                                    <button onClick={handleAboutChangeSubmit}>Change</button>
                                </>
                            ) : (
                                <>
                                    <p className="mt-2 text-gray-600">{TData.AboutMe}</p>
                                    <div className="rounded-full p-1">
                                        <MdEdit onClick={handleAboutEdit} className="cursor-pointer" size={16} />
                                    </div>
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
