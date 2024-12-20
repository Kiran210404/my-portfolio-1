import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-title">
        <h1>Kiran Bajirao Mane</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
