// AddChapter.jsx
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
const AddChapter = ({teacherId,courseId, onAddChapter }) => {
    const [showInputs, setShowInputs] = useState(false);
    const [newChapterTitle, setNewChapterTitle] = useState('');
    const [newChapterDate, setNewChapterDate] = useState(null); // Change to null for initial state
    const [newChapterTime, setNewChapterTime] = useState('');

    const handleToggleInputs = () => {
        setShowInputs(!showInputs);
        if (!showInputs) {
            setNewChapterTitle('');
            setNewChapterDate(null); // Reset to null for initial state
            setNewChapterTime('');
        }
    };

    const handleAddChapter = async () => {
        // Combine date and time into a single Date object
        const combinedDateTime = new Date(newChapterDate);
        combinedDateTime.setHours(newChapterTime.split(':')[0]);
        combinedDateTime.setMinutes(newChapterTime.split(':')[1]);
    
        const newChapter = {
            title: newChapterTitle,
            meetingDate: combinedDateTime.toISOString(), // Convert to ISO string for MongoDB
            isLive: 0,
            videLink: ''
        };
    
        try {
            const res = await axios.post(`http://localhost:5000/tutors/${teacherId}/courses/${courseId}/modules`, {
                title: newChapterTitle,
                meetingDate: combinedDateTime, // Send combined date object to MongoDB
            });
            console.log(res);
            onAddChapter(newChapter);
            setNewChapterTitle('');
            setNewChapterDate(null); // Reset to null after adding chapter
            setNewChapterTime('');
        } catch (error) {
            console.error("Error:", error);
        }
    };
    

    return (
        <div className="p-6">
            <button onClick={handleToggleInputs} className="bg-blue-500 text-white py-2 px-4 rounded mb-4">
                {showInputs ? 'Get Back' : 'Add Chapter'}
            </button>
            {showInputs && (
                <>
                    <div className="mb-4">
                        <input
                            type="text"
                            value={newChapterTitle}
                            onChange={(e) => setNewChapterTitle(e.target.value)}
                            placeholder="Enter Chapter Title"
                            className="outline-none border-b border-gray-400 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <DatePicker
                            selected={newChapterDate}
                            onChange={(date) => setNewChapterDate(date)}
                            dateFormat="yyyy-MM-dd"
                            placeholderText="Enter Chapter Date"
                            className="outline-none border-b border-gray-400 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="time"
                            value={newChapterTime}
                            onChange={(e) => setNewChapterTime(e.target.value)}
                            placeholder="Enter Chapter Time"
                            className="outline-none border-b border-gray-400 w-full"
                        />
                    </div>
                    <button onClick={handleAddChapter} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                        Add Chapter
                    </button>
                </>
            )}
        </div>
    );
};

export default AddChapter;
