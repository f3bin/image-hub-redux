import React from "react";
import "./Navbar.scss";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const favouriteList = useSelector((state) => state.favourites);
  return (
    <div className="navbar-container">
      <div className="navbar-items">
        <Link to="/" className="links">
          <h1>Image-hub</h1>
        </Link>
        <Link to="/favourites" className="links">
          <div className="fav-count">
            <AiFillHeart size={30} color="black" className="heart-icon" />
            <span> {favouriteList.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
