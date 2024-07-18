import React from "react";
import { Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-7 bg-green-500 text-white shadow-lg">
      <div className="flex items-center">
        <WhatsAppIcon fontSize="large" />
        <h1 className="ml-2 text-xl font-bold">Activity</h1>
      </div>
      <nav className="flex space-x-4">
        {/* <Link className="hover:underline" to="/">
          Activity Feed
        </Link> */}
        <Link className="hover:underline" to="/archive">
          Archived
        </Link>
      </nav>
    </header>
  );
};

export default Header;
