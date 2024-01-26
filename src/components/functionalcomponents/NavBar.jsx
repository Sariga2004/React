//import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from 'react-router-dom'
import "../../css/navbar.css";

const NavBar = () => {
  return (
    <nav>
    
      <ol>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ol>
    </nav>
  );
}

export default NavBar;
