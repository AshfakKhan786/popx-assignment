import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const pages = ["/", "/login", "/create-account", "/profile", "/success"];

const FooterNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentIndex = pages.indexOf(location.pathname);

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-72 flex justify-between items-center bg-white rounded-lg shadow px-4 py-2 text-gray-600">

  <button onClick={() => navigate("/")} className="p-2">🏠</button>
  <button disabled={currentIndex <= 0} onClick={() => navigate(pages[currentIndex - 1])}>◀</button>
  <span>{currentIndex + 1} of {pages.length}</span>
  <button disabled={currentIndex >= pages.length - 1} onClick={() => navigate(pages[currentIndex + 1])}>▶</button>
</div>

  );
};

export default FooterNav;
