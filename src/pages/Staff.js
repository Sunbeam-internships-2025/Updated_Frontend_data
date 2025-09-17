
import React, { useState, useEffect } from 'react';
import StaffList from '../components/StaffList';
import UpdateStaff from '../components/UpdateStaff';
import { getAllStaff } from '../pages/services/staffApi';

const ShowAllStaff = () => {
    const [staff, setStaff] = useState([]);

    const fetchStaff = () => {
        getAllStaff().then(res => setStaff(res.data.data));
    };

    useEffect(() => {
        fetchStaff();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Manage Staff</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <StaffList staff={staff} />
                <UpdateStaff onStaffUpdated={fetchStaff} />
            </div>
        </div>
    );
};

export default ShowAllStaff;
