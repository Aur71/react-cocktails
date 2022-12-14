import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="logo-wrapper">
          <Link to="/">
            <h2>
              Cock<span>tails</span>
            </h2>
          </Link>
        </div>

        <ul className="links-container">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
