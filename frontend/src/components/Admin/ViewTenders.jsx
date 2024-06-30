import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewTenders = () => {
  const [tenders, setTenders] = useState([]);
  const [selectedTender, setSelectedTender] = useState(null);
  const [bids, setBids] = useState([]);

  useEffect(() => {
    const fetchTenders = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/tender/tenders'); // Correct route for fetching tenders
        setTenders(response.data);
      } catch (error) {
        console.error('Error fetching tenders', error);
      }
    };

    fetchTenders();
  }, []);

  const isRecentBid = (bidTime, endTime) => {
    const bidTimestamp = new Date(bidTime).getTime();
    const endTimestamp = new Date(endTime).getTime();
    return endTimestamp - bidTimestamp <= 5 * 60 * 1000; // 5 minutes in milliseconds
  };

  const handleDetailClick = async (tenderId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/bid/bids/${tenderId}`); // Adjusted route for fetching bids related to a tender
      setBids(response.data);
      setSelectedTender(tenderId);
    } catch (error) {
      console.error(`Error fetching bids for tender ${tenderId}`, error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-opacity-50 shadow-xl rounded-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">View Previous Tenders</h2>
      <div className="overflow-x-auto">
        <table className="table-auto min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Description</th>
              <th className="border border-gray-300 p-2">Start Time</th>
              <th className="border border-gray-300 p-2">End Time</th>
              <th className="border border-gray-300 p-2">Check Bids</th>
            </tr>
          </thead>
          <tbody>
            {tenders.map((tender) => (
              <tr key={tender._id} className="bg-white bg-opacity-10">
                <td className="border border-gray-300 p-2">{tender.name}</td>
                <td className="border border-gray-300 p-2">{tender.description}</td>
                <td className="border border-gray-300 p-2">{new Date(tender.startTime).toLocaleString()}</td>
                <td className="border border-gray-300 p-2">{new Date(tender.endTime).toLocaleString()}</td>
                <td className="border border-gray-300 p-2">
                  <button
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => handleDetailClick(tender._id)}
                  >
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedTender && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Bids for {tenders.find((tender) => tender._id === selectedTender)?.name}</h3>
          <div className="overflow-x-auto">
            <table className="table-auto min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2">Company Name</th>
                  <th className="border border-gray-300 p-2">Bid Time</th>
                  <th className="border border-gray-300 p-2">Bid Cost</th>
                  <th className="border border-gray-300 p-2">flag</th>
                </tr>
              </thead>
              <tbody>
                {bids.map((bid) => (
                  <tr key={bid._id} className="bg-white bg-opacity-10">
                    <td className="border border-gray-300 p-2">{bid.companyName}</td>
                    <td className="border border-gray-300 p-2">{new Date(bid.bidTime).toLocaleString()}</td>
                    <td className="border border-gray-300 p-2">{bid.bidCost}</td>
                    <td className="border border-gray-300 px-6 py-4">
                      {isRecentBid(bid.bidTime, bid.tenderEndTime) ? (
                        <span className="bg-green-500 text-white py-1 px-3 rounded-full text-xs">flag</span>
                      ) : (
                        <span className="  py-1 px-3 rounded-full text-xl ">not flag</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewTenders;
