import React from 'react';

const Coursecard = ({ title, description, url, tutor }) => {
    return (
        <div className="max-w-xs mx-auto my-4">
            <div className="bg-white border shadow-2xl rounded-lg overflow-hidden">
                <img className="w-full h-auto rounded-t-lg" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" alt="Course" />
                <div className="p-4 md:p-5 bg-gray-100">
                    <h1 className="text-lg font-bold text-red-900 mb-2">
                        {tutor}
                    </h1>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        {title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                        {description}
                    </p>
                    <a className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg" href="#">
                        View
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Coursecard;
