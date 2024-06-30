import React, { useState } from 'react';
import CreateTender from '../components/Admin/CreateTender';
import ViewTenders from '../components/Admin/ViewTenders';
import Notification from '../components/Common/Notification';

const AdminPanel = () => {
    const [notificationMessage, setNotificationMessage] = useState('');

    const handleCreateTender = async () => {
        try {
            // Assuming createTender function calls an API to create a tender
            // Replace with your actual implementation
            await createTender();
            setNotificationMessage('New tender created successfully.');
        } catch (error) {
            console.error('Error creating tender:', error);
        }
    };

    const handleCloseNotification = () => {
        setNotificationMessage('');
    };

    return (
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-opacity-50 min-h-screen">
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Panel</h1>
                {notificationMessage && <Notification message={notificationMessage} onClose={handleCloseNotification} />}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-1">
                    <div>
                        <CreateTender onCreate={handleCreateTender} />
                    </div>
                    <div>
                        <ViewTenders />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
