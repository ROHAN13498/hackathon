import React, { useState } from 'react';
import SSideBar from './SSideBar';
import Card from './Card';

const SExplore = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        if (value.trim() === '') {
            // If search query is empty, reset courses to original data
            setCourses(cardData); // Assuming cardData contains the original data
        } else {
            // Filter courses based on search query
            const filteredCourses = courses.filter((course) =>
                course.title.toLowerCase().includes(value.toLowerCase())
            );
            setCourses(filteredCourses);
        }
    };

    const cardData = [
        {
            id: 1,
            title: 'UI/UX Review Check',
            description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
            imageUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/chris-ried-ieic5Tq8YMk-unsplas_1200x768.jpeg?size=1200:675',
            url: 'https://example.com/page1', // URL to explore
        },
        {
            id: 1,
            title: 'CODING',
            description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
            imageUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/chris-ried-ieic5Tq8YMk-unsplas_1200x768.jpeg?size=1200:675',
            url: 'https://example.com/page1', // URL to explore
        },
        {
            id: 1,
            title: 'DOCKER',
            description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
            imageUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/chris-ried-ieic5Tq8YMk-unsplas_1200x768.jpeg?size=1200:675',
            url: 'https://example.com/page1', // URL to explore
        },
        {
            id: 1,
            title: 'REDIS',
            description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
            imageUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/chris-ried-ieic5Tq8YMk-unsplas_1200x768.jpeg?size=1200:675',
            url: 'https://example.com/page1', // URL to explore
        },
        {
            id: 1,
            title: 'NEXT',
            description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
            imageUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/chris-ried-ieic5Tq8YMk-unsplas_1200x768.jpeg?size=1200:675',
            url: 'https://example.com/page1', // URL to explore
        },
        {
            id: 1,
            title: 'RADIX',
            description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
            imageUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/chris-ried-ieic5Tq8YMk-unsplas_1200x768.jpeg?size=1200:675',
            url: 'https://example.com/page1', // URL to explore
        },
        {
            id: 1,
            title: 'DOCKER',
            description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
            imageUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/chris-ried-ieic5Tq8YMk-unsplas_1200x768.jpeg?size=1200:675',
            url: 'https://example.com/page1', // URL to explore
        },
        {
            id: 1,
            title: 'Radix',
            description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
            imageUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/chris-ried-ieic5Tq8YMk-unsplas_1200x768.jpeg?size=1200:675',
            url: 'https://example.com/page1', // URL to explore
        },
        {
            id: 1,
            title: 'Shadcn',
            description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
            imageUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/chris-ried-ieic5Tq8YMk-unsplas_1200x768.jpeg?size=1200:675',
            url: 'https://example.com/page1', // URL to explore
        },
        {
            id: 1,
            title: 'tailwind',
            description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
            imageUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/chris-ried-ieic5Tq8YMk-unsplas_1200x768.jpeg?size=1200:675',
            url: 'https://example.com/page1', // URL to explore
        },
        {
            id: 1,
            title: 'UI/UX Review Check',
            description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
            imageUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/chris-ried-ieic5Tq8YMk-unsplas_1200x768.jpeg?size=1200:675',
            url: 'https://example.com/page1', // URL to explore
        },
        {
            id: 1,
            title: 'UI/UX Review Check',
            description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
            imageUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/chris-ried-ieic5Tq8YMk-unsplas_1200x768.jpeg?size=1200:675',
            url: 'https://example.com/page1', // URL to explore
        },
        {
            id: 1,
            title: 'UI/UX Review Check',
            description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
            imageUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/chris-ried-ieic5Tq8YMk-unsplas_1200x768.jpeg?size=1200:675',
            url: 'https://example.com/page1', // URL to explore
        },
        {
            id: 1,
            title: 'UI/UX Review Check',
            description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
            imageUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/chris-ried-ieic5Tq8YMk-unsplas_1200x768.jpeg?size=1200:675',
            url: 'https://example.com/page1', // URL to explore
        },
        // Add more data as needed
    ];

    const [courses, setCourses] = useState(cardData)
    return (
        <div className="flex">
            <div className="w-64">
                <SSideBar />
            </div>
            <div className="flex-grow p-4">
                <div className="mb-4">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Search..."
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-400"
                    />
                </div>
                <div className='flex flex-wrap'>
                    {courses.map((card) => (
                        <Card
                            key={card.id}
                            title={card.title}
                            description={card.description}
                            imageUrl={card.imageUrl}
                            url={card.url}
                            btntxt="Enroll"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SExplore;
