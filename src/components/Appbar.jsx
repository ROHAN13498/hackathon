import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import { UserButton } from '@clerk/clerk-react';

const Appbar = () => {
  const { userId } = useAuth();
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate('/about');
  };

  const handleContactClick = () => {

    navigate('/contact');
  };

  return (
    <div className="bg-white py-4 px-6 flex justify-between items-center border-b border-sky-950">
      <div className="text-sky-500 text-2xl font-bold font-sans">Edu Connect</div>
      <div className="flex items-center">
        {(userId !== undefined) ? (
          <>
            <a href="#" className="text-sky-500 mr-4 hover:text-gray-300 scale-110 text-baseyy">Courses</a>
            <a href="#" className="text-sky-500 mr-4 hover:text-gray-300 scale-110 text-baseyy">Live Classes</a>
            <UserButton afterSignOutUrl='/' />
          </>
        ) : (
          <>
            <a href="#" className="text-sky-500 mr-4 hover:text-gray-300 scale-110 text-baseyy" onClick={handleAboutClick}>About</a>
            <a href="#" className="text-sky-500 hover:text-gray-300 text-lg" onClick={handleContactClick}>Contact</a>
          </>
        )}
      </div>
    </div>
  );
};

export default Appbar;
