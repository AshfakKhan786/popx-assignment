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
            <h3 className="font-semibold">Ashfak Khan</h3>
            <p className="text-gray-600 text-sm">ashfak0404@gmail.com</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, dolorem illum? Voluptatem repellendus impedit natus optio inventore obcaecati. Voluptate magnam odio veniam cupiditate commodi iure impedit, beatae voluptatem porro perspiciatis?
        </p>
      </div>
    </div>
  );
};

export default Profile;
