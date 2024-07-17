import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Header />
      <nav className="mb-4">
        <Link className="mr-4" to="/">
          Activity Feed
        </Link>
        <Link to="/archive">Archive</Link>
      </nav>
    </div>
  );
};

export default Navbar;
