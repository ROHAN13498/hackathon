import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import { UserButton } from '@clerk/clerk-react';

const Appbar = () => {
  const { userId } = useAuth();
  const navigate = useNavigate();
  const location = useLocation()

  const handleAboutClick = () => {
    navigate('/about');
  };

  const handleContactClick = () => {

    navigate('/contact');
  };

  return (
    <div className="bg-white py-4 px-6 flex justify-between items-center border-b shadow-md">
      <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">
        Edu Connect
      </h5>
      <div className="flex items-center">
        {(userId !== undefined) ? (
          <>

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
