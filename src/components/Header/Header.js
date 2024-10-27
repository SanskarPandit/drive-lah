import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import profileIcon from '../../assets/avatar.jpg';
import { FaBars, FaTimes } from 'react-icons/fa'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="Drive lah logo" className="logo-img" />
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes color="#fcfcfc" /> : <FaBars color="#fcfcfc" />}
        </div>

        <div className={`right-section ${isMenuOpen ? 'open' : ''}`}>
          <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li>Learn more</li>
              <li>List your car</li>
              <li>Inbox</li>
            </ul>
          </div>

          <div className="profile">
            <img src={profileIcon} alt="User Profile" className="profile-img" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
