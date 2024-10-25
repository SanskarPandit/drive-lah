import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import profileIcon from '../../assets/avatar.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo on the left */}
        <div className="logo">
          <img src={logo} alt="Drive lah logo" className="logo-img" />
        </div>
        {/* Menu and Profile on the right */}
        <div className="right-section">
          <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li>Learn more</li>
              <li>List your car</li>
              <li>Inbox</li>
            </ul>
          </div>

          {/* Profile Image */}
          <div className="profile">
            <img src={profileIcon} alt="User Profile" className="profile-img" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
