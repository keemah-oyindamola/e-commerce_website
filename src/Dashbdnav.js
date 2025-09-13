import React from "react";
import "./Dashbdnav.css";
import logo from "./Fashion-Logo-5.png";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Dashbdnav = ({ cartCount = 0 }) => {
  return (
    <nav className="main-div">
      {/* Logo */}
      <div className="logo-div">
        <img src={logo} alt="Fashion Logo" />
      </div>

      {/* Center Nav Links */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Right Side: Cart + Auth */}
      <div className="right-nav">
        <div className="cart-div">
          <Link to="/cart" className="cart-link">
            <FaShoppingCart size={20} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </div>

        <div className="sign-log-btn-div">
          <div className="signup-btn">
            <Link to="/signup">
              <button>Sign Up</button>
            </Link>
          </div>
          <div className="login-btn">
            <Link to="/login">
              <button>Log In</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Dashbdnav;
