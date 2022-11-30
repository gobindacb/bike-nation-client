import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';


const Dashboard = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <p>Dashboard</p>
        </div>
    );
};

export default Dashboard;