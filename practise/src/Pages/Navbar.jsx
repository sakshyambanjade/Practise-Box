import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
