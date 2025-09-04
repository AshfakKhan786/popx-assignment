import React from "react";
import profilePic from "../../src/assets/portfolioimg.jpg"; 

const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-sm w-full bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Account Settings</h2>
        <div className="flex items-center bg-gray-100 p-3 rounded-lg mb-4">
          <img
            src={profilePic}
            alt="avatar"
            className="w-12 h-12 rounded-full mr-3"
          />
          <div>
            <h3 className="font-semibold">Sumit Chandra</h3>
            <p className="text-gray-600 text-sm">chandra78.sumit1@gmail.com</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
          Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam Erat, Sed Diam
        </p>
      </div>
    </div>
  );
};

export default Profile;
