import React from 'react';
import logo from '../images/Logo.svg'
import { useEffect, useState } from "react";


export default function Nav() {

  const [menuOpen, setMenu] = useState(false);

  function toggleMenu() {
    if (menuOpen === false) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  }

  return (


    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <a href="/"><img src={logo} alt="logo"/></a>

      {}
      <div className = "menuicon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>

      </div>

      {}
      <ul className = {`nav-links ${menuOpen ? "visible" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Service</a>
        </li>
        <li>
          <a href="/">Our Menu</a>
        </li>
        <li>
          <a href="/">Reserve a Table</a>
        </li>
        <li>
          <a href="/">Online Order</a>
        </li>
        <li>
          <a href="/">Log In</a>
        </li>
      </ul>
    </nav>
  );
}
