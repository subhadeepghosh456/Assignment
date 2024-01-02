import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav">
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/cart">
          <span>Cart</span>
        </Link>

        <Link to="/login">
          <span>Login</span>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
