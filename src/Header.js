import React from "react";
import logo from "./logo512.png";
import "./index.css";
function Header() {
  return (
    <header>
      <nav className="nav">
        <div className="nav-div">
          <img src={logo} alt="React" width="40px" className="align-self" />
          <h1 className="nav-text">React Facts</h1>
        </div>
        <h2>React Course - Project 1</h2>
      </nav>
    </header>
  );
}

export default Header;
