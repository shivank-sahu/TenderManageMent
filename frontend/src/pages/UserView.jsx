import React from "react";
import ViewAvailableTenders from "../components/User/ViewAvailableTenders"; // Adjust the path as per your project structure
import SubmitQuotation from "../components/User/SubmitQuotation"; // Adjust the path as per your project structure

const UserView = () => {
  return (
    <div className="bg-gray-100 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-opacity-50 min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">User View</h1>

        {/* View Tenders Component */}
        <div className="mb-4">
          <ViewAvailableTenders />
        </div>

        {/* Submit Quotation Component */}
        <div>
          <SubmitQuotation />
        </div>
      </div>
    </div>
  );
};

export default UserView;
