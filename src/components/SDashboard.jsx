import React from 'react';
import SSideBar from './SSideBar'; // Assuming the SSideBar component is correctly imported

const SDashboard = () => {
  return (
    <div className="flex">
      <div className="w-64">
        <SSideBar />
      </div>
      <div className="flex-grow">
        {/* Main content area */}
        <div>SDashboard</div>
      </div>
    </div>
  );
};

export default SDashboard;
