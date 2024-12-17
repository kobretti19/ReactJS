import React from "react";
import "./Header.css";
import netflixImage from "../assets/netflixx.png";

const Header = () => {
  return (
    <header className="header--view">
      <img src={netflixImage} width="200px" />
      <a href="#">Home</a>
      <a href="#">Tv Shows</a>
      <a href="#">Movies</a>
      <a href="#">Latest</a>
      <a href="#">My List</a>
    </header>
  );
};

export default Header;
