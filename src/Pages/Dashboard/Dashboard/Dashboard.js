import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';


const Dashboard = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <p className='text-3xl text-center font-bold'>Dashboard of {user?.displayName}</p>
        </div>
    );
};

export default Dashboard;