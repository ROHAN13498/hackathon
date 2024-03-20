import React from 'react';
import SSideBar from './SSideBar';
import UploadWidget from './UploadWidget';// Assuming the SSideBar component is correctly imported

const SDashboard = () => {

  
  return (
    <div className="flex">
      <div className="w-64">
        <SSideBar />
      </div>
      <div className="flex-grow">
        
      </div>
    </div>
  );
};

export default SDashboard;
