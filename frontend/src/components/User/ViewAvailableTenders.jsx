import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewAvailableTenders = () => {
  const [tenders, setTenders] = useState([]);

  useEffect(() => {
    const fetchTenders = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/tender/tenders');
        setTenders(response.data);
      } catch (error) {
        console.error('Error fetching tenders', error);
      }
    };

    fetchTenders();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-xl rounded-md">
        <thead className="bg-gray-400 text-white">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Start Time</th>
            <th className="border border-gray-300 px-4 py-2 text-left">End Time</th>
          
          </tr>
        </thead>
        <tbody>
          {tenders.map((tender) => (
            <tr key={tender._id} className="bg-white bg-opacity-10">
              <td className="border border-gray-300 px-4 py-2">{tender.name}</td>
              <td className="border border-gray-300 px-4 py-2">{tender.description}</td>
              <td className="border border-gray-300 px-4 py-2">{new Date(tender.startTime).toLocaleString()}</td>
              <td className="border border-gray-300 px-4 py-2">{new Date(tender.endTime).toLocaleString()}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAvailableTenders;
