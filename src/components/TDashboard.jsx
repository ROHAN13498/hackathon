import React, { useState } from 'react';
import SSideBar from './TSideBar'; // Assuming the SSideBar component is correctly imported
import Card from './Card';
import { cn } from "../utils/cn";
import { useNavigate } from 'react-router-dom';
const TDashboard = () => {
    const navigate=useNavigate();
    const [editingCourseId, setEditingCourseId] = useState(null);
    const cardData = [
        {
            id: 1,
            title: 'UI/UX Review Check',
            description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
            imageUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/chris-ried-ieic5Tq8YMk-unsplas_1200x768.jpeg?size=1200:675',
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
        },
        {
            id: 2,
            title: 'UI/UX Review Check',
            description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
            imageUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/chris-ried-ieic5Tq8YMk-unsplas_1200x768.jpeg?size=1200:675',
            chapters: [
                {
                    title: 'C1',
                    Date: '2024-03-01',
                    time: '06:00:00',
                    isLive: 1,
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
                    isLive: 0,
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

        },
        {
            id: 3,
            title: 'UI/UX Review Check',
            description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
            imageUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/chris-ried-ieic5Tq8YMk-unsplas_1200x768.jpeg?size=1200:675',
            chapters: [
                {
                    title: 'C1',
                    Date: '2024-03-01',
                    time: '06:00:00',
                    isLive: 1,
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
                    isLive: 0,
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

        },
        {
            id: 4,
            title: 'UI/UX Review Check',
            description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
            imageUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/chris-ried-ieic5Tq8YMk-unsplas_1200x768.jpeg?size=1200:675',
            chapters: [
                {
                    title: 'C1',
                    Date: '2024-03-01',
                    time: '06:00:00',
                    isLive: 1,
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
                    isLive: 0,
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

        }
    ];
    const handleEdit = (courseId) => {
        setEditingCourseId(courseId);
    };

    const handleModify = () => {
        // Implement modify functionality here
    };

    const handleDelete = () => {
        // Implement delete functionality here
    };
    const [courses, setCourses] = useState(cardData);
    return (
        <div className="flex">
            <div className="w-64">
                <SSideBar />
            </div>
            <div className="flex-grow">
                <div className="flex justify-center m-4">
                    <button
                        className={cn(
                            "p-3 rounded-lg text-start leading-tight transition-all hover:bg-sky-200/40 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none hover:scale-105"
                        )}
                        onClick={()=>navigate('/teacher/addCourse')}
                    >
                        Add Course
                    </button>
                </div>
                <table className="min-w-full bg-blue-100 divide-y divide-gray-200">
                    <thead className="bg-blue-50" style={{ backgroundColor: "#E3F5FE" }}>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                                #
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                                Title
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                                Description
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {courses.map((course, index) => (
                            <tr key={course.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm">{index + 1}.</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{course.title}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{course.description}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                {editingCourseId === course.id ? (
                                        <>
                                            <button onClick={handleModify} className="text-indigo-600 hover:text-indigo-900 mr-2">Modify</button>
                                            <button onClick={handleDelete} className="text-red-600 hover:text-red-900">Delete</button>
                                        </>
                                    ) : (
                                        <button onClick={() => handleEdit(course.id)} className="text-indigo-600 hover:text-indigo-900">Edit</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default TDashboard;
