import React from "react";
import "../styles/navbar.css";

// Managing the Navbar
const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          Ryo's Coffee Shop
        </span>
        <span className="login" onClick={() => setShow(true)}>
          Login
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
