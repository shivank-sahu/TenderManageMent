import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SubmitQuotation = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    bidCost: '',
    tenderId: '',
  });

  const [tenders, setTenders] = useState([]);

  const { companyName, bidCost, tenderId } = formData;

  useEffect(() => {
    const fetchTenders = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/tender/tenders');
        setTenders(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTenders();
  }, []);

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/bid/bids', formData);
      console.log(res.data);
      window.location.reload()
      // Optionally reset the form or show a success message
    } catch (err) {
      console.error(err);
      // Optionally show an error message
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-xl rounded-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Submit Quotation</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={companyName}
            onChange={onChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Bid Cost</label>
          <input
            type="number"
            name="bidCost"
            value={bidCost}
            onChange={onChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Tender</label>
          <select
            name="tenderId"
            value={tenderId}
            onChange={onChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select a Tender</option>
            {tenders.map((tender) => (
              <option key={tender._id} value={tender._id}>
                {tender.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit Quotation
        </button>
      </form>
    </div>
  );
};

export default SubmitQuotation;
