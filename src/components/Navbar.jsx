import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/users">Users</Link>
      {/* <Link to="/users/:id"></Link> */}
    </div>
  );
};

export default Navbar;
