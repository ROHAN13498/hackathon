import React from 'react'
import SSideBar from './SSideBar';

const SExplore = () => {
    return (
        <div className="flex">
            <div className="w-64">
                <SSideBar />
            </div>
            <div className="flex-grow">
                <div>SExplore</div>
            </div>
        </div>
    )
}

export default SExplore