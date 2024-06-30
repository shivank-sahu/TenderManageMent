import React, { useState } from "react";
import axios from "axios";

const CreateTender = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    startTime: "",
    endTime: "",
    bufferTime: 0,
  });

  const [loading, setLoading] = useState(false);

  const { name, description, startTime, endTime, bufferTime } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/tender/tenders",
        formData
      );
      console.log(res.data);
      setFormData({
        name: "",
        description: "",
        startTime: "",
        endTime: "",
        bufferTime: 0,
      });
      window.location.reload(); // Reload the page after successful form submission
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-xl rounded-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Create New Tender</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Tender Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            className="mt-1 p-2 border rounded w-full text-gray-800 bg-white bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Tender Description</label>
          <textarea
            name="description"
            value={description}
            onChange={onChange}
            className="mt-1 p-2 border rounded w-full text-gray-800 bg-white bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Start Time</label>
          <input
            type="datetime-local"
            name="startTime"
            value={startTime}
            onChange={onChange}
            className="mt-1 p-2 border rounded w-full text-gray-800 bg-white bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">End Time</label>
          <input
            type="datetime-local"
            name="endTime"
            value={endTime}
            onChange={onChange}
            className="mt-1 p-2 border rounded w-full text-gray-800 bg-white bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Buffer Time (minutes)</label>
          <input
            type="number"
            name="bufferTime"
            value={bufferTime}
            onChange={onChange}
            className="mt-1 p-2 border rounded w-full text-gray-800 bg-white bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Tender"}
        </button>
      </form>
    </div>
  );
};

export default CreateTender;
