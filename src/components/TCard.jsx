import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const TCard = ({ key,id, imageUrl, title, description }) => {
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState(location.pathname);
    return (
        <div>
            <div className="relative flex flex-col mt-6 text-gray-700 bg-slate-200 shadow-md bg-clip-border rounded-xl w-96 m-2">
                <div className="p-6">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-36 object-cover mb-4 rounded-lg"
                    />
                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {title}
                    </h5>
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        {description}
                    </p>
                </div>
                <div className="p-6 pt-0 flex justify-between">
                        <Link to={`tutor-course/${id}`} className="inline-block">
                            <button
                                className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                                type="button"
                            >
                                Explore
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    ></path>
                                </svg>
                            </button>
                        </Link>

                </div>
            </div>
        </div>
    );
};

export default TCard;