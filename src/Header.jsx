import React from "react";
import { Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-7 mb-2 bg-green-500 text-white shadow-lg">
      <div className="flex items-center">
        <WhatsAppIcon fontSize="large" />
        <h1 className="ml-2 text-xl font-bold">Activity</h1>
      </div>
      <nav className="flex space-x-6">
        <Link
          className="hover:underline hover:text-gray-200 transition duration-300"
          to="/"
        >
          Inbox
        </Link>
        <Link
          className="hover:underline hover:text-gray-200 transition duration-300"
          to="/archive"
        >
          Archived
        </Link>
      </nav>
    </header>
  );
};

export default Header;
