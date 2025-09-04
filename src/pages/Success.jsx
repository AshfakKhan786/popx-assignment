import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-sm w-full bg-white rounded-xl shadow-md p-6 text-center">
        <div className="w-16 h-16 mx-auto flex items-center justify-center bg-green-500 rounded-full mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 
              1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" clipRule="evenodd"/>
          </svg>
        </div>
        <h1 className="text-xl font-bold text-gray-900 mb-2">Login Successful!</h1>
        <p className="text-gray-600 mb-6">Welcome back to your PopX account 🎉</p>
        <button onClick={() => navigate("/")} className="w-full py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition">
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Success;
