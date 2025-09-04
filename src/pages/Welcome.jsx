import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-sm w-full bg-white rounded-xl shadow-md p-6 text-center flex flex-col justify-between min-h-[85vh]">
        
        

        {/* Bottom Section (title + description + buttons) */}
        <div className="mt-auto">
          <h1 className="text-2xl font-bold mb-4">Welcome to PopX 👋</h1>
          <p className="text-gray-600 mb-6">
            Join us and explore amazing features to manage your account effortlessly.
          </p>

          <button
            onClick={() => navigate("/create-account")}
            className="w-full py-3 bg-purple-600 text-white rounded-lg mb-3 hover:bg-purple-700 font-medium"
          >
            Create Account
          </button>
          <button
            onClick={() => navigate("/login")}
            className="w-full py-3 bg-purple-200 rounded-lg text-purple-900 hover:bg-purple-300 font-semibold"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
