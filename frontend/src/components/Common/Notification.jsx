import React, { useEffect, useState } from 'react';

const Notification = ({ message, onClose }) => {
    const [show, setShow] = useState(false); // Initially hide notification

    useEffect(() => {
        if (message) {
            setShow(true); // Show notification when message is set
            const timer = setTimeout(() => {
                onClose(); // Automatically close notification after some time (optional)
            }, 5000); // Adjust timeout duration as needed

            return () => clearTimeout(timer);
        } else {
            setShow(false); // Hide notification when message is empty
        }
    }, [message, onClose]);

    const handleClose = () => {
        setShow(false);
        onClose();
    };

    return (
        <div className={`fixed bottom-0 right-0 m-6 p-4 bg-gray-800 text-white rounded-md ${show ? 'block' : 'hidden'}`}>
            <p>{message}</p>
            <button className="ml-2 text-sm font-semibold text-gray-300 hover:text-white focus:outline-none" onClick={handleClose}>
                Close
            </button>
        </div>
    );
};

export default Notification;
