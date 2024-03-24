import React from 'react';

const HorizontalCard = ({ title, id }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden m-4 max-w-sm">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">ID: {id}</p>
        <div className="mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
