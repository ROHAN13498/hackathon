import React from 'react';
import { useNavigate } from 'react-router-dom';

const Coursecard = ({ title, description, url, tutor, imageLink }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(url);
    };

    return (
        <div className="max-w-xs mx-auto my-4">
            <div className="bg-white border shadow-2xl rounded-lg overflow-hidden">
                <img
                    className="w-full h-auto rounded-t-lg"
                    style={{ width: '100%', height: '200px' }}  // Adjust the height as per your requirement
                    src={(imageLink) ? imageLink : "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBjb3Vyc2VzfGVufDB8fDB8fHww"}
                    alt="Course"
                />
                <div className="p-4 md:p-5 bg-gray-100">
                    <h1 className="text-xl font-semibold text-gray-800 mb-2">
                        {title}
                    </h1>
                    <h2 className="text-lg font-bold text-red-900 mb-2">
                        Mentor:{tutor}
                    </h2>
                    <p className="text-gray-600 mb-4 truncate">
                        {description}
                    </p>
                    <button
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
                        onClick={handleClick}
                    >
                        View
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Coursecard;
