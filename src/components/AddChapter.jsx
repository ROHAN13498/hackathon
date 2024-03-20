// AddChapter.jsx

import React, { useState } from 'react';

const AddChapter = ({ onAddChapter }) => {
    const [showInputs, setShowInputs] = useState(false);
    const [newChapterTitle, setNewChapterTitle] = useState('');
    const [newChapterDate, setNewChapterDate] = useState('');
    const [newChapterTime, setNewChapterTime] = useState('');

    const handleToggleInputs = () => {
        setShowInputs(!showInputs);
        // Reset input fields when hiding inputs
        if (!showInputs) {
            setNewChapterTitle('');
            setNewChapterDate('');
            setNewChapterTime('');
        }
    };

    const handleAddChapter = () => {
        const newChapter = {
            title: newChapterTitle,
            Date: newChapterDate,
            time: newChapterTime,
            isLive: 0,
            videLink: ''
        };
        onAddChapter(newChapter);
        // Reset input fields
        setNewChapterTitle('');
        setNewChapterDate('');
        setNewChapterTime('');
    };

    return (
        <div className="p-6">
            <button onClick={handleToggleInputs} className="bg-blue-500 text-white py-2 px-4 rounded mb-4">{showInputs ? 'Get Back' : 'Add Chapter'}</button>
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
                        <input
                            type="text"
                            value={newChapterDate}
                            onChange={(e) => setNewChapterDate(e.target.value)}
                            placeholder="Enter Chapter Date"
                            className="outline-none border-b border-gray-400 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            value={newChapterTime}
                            onChange={(e) => setNewChapterTime(e.target.value)}
                            placeholder="Enter Chapter Time"
                            className="outline-none border-b border-gray-400 w-full"
                        />
                    </div>
                    <button onClick={handleAddChapter} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add Chapter</button>
                </>
            )}
        </div>
    );
};

export default AddChapter;
