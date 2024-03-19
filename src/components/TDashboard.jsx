import React from 'react'
import { useAuth, useUser } from '@clerk/clerk-react'
const TDashboard = () => {
    const { userId, isLoaded } = useAuth()
    const { user } = useUser()
    console.log(user)

    if (!isLoaded) {
        return <div>Loading...</div>;
    }
    if (!userId) {
        return <p>User not Logged in</p>
    }
    return (
        <div className='flex items-center justify-center'>
            Hello Mr {user.username}
        </div>
    )
}

export default TDashboard