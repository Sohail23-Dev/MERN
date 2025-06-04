import { React } from "react";
import Cart from "../Cart/Cart";
import User from "../User/User";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="nav-container sticky top-0 z-1 rounded-2xl">
        <Link to="/" className="links">
        <h1 className="heading text-4xl">Ecomm</h1>
        </Link>
        <div className="nav-items">
          <Link to="/" className="links ">
            Home
          </Link>
          <Link to="/Contact" className="links ">
            Contact us
          </Link>
          <Link to="/About" className="links ">
            About us
          </Link>
          <Link to="/Review" className="links ">
            Reviews
          </Link>
          <Link to="/FAQ" className="links ">
            FAQ
          </Link>
        </div>
        <Cart className="cart"/>
        <User className="user"/>
      </div>
    </>
  );
};

export default Nav;
