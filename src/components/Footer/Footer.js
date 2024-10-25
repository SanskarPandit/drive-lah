import React, { useState } from 'react';
import './Footer.css';
import { FaCheckCircle } from 'react-icons/fa'; // Importing the "done" icon from react-icons

const Footer = () => {
  const [selectedSection, setSelectedSection] = useState('Subscription');

  // Define the sections with a "status" field (done or ongoing)
  const sections = [
    { name: 'Location', status: 'done' },
    { name: 'About', status: 'done' },
    { name: 'Features', status: 'done' },
    { name: 'Rules', status: 'done' },
    { name: 'Pricing', status: 'done' },
    { name: 'Promotion', status: 'done' },
    { name: 'Pictures', status: 'done' },
    { name: 'Insurance', status: 'done' },
    { name: 'Subscription', status: 'ongoing' }, // Currently ongoing
    { name: 'Device', status: 'pending' },
    { name: 'Easy Access', status: 'pending' }
  ];

  return (
    <div className="sidebar-container">
      <ul className="sidebar-list">
        {sections.map((section) => (
          <li
            key={section.name}
            className={`sidebar-item ${selectedSection === section.name ? 'active' : ''} ${section.status === 'ongoing' ? 'ongoing' : ''}`}
            onClick={() => setSelectedSection(section.name)}
          >
            {section.name}

            {/* Show the done icon for completed sections */}
            {section.status === 'done' && <FaCheckCircle className="done-icon" />}
          </li>
        ))}
      </ul>

      <div className="content-container">
        {selectedSection === 'Subscription' && <Subscription />}
        {selectedSection === 'Device' && <Device />}
        {/* Add other components for different sections */}
      </div>
    </div>
  );
};

// Placeholder components for the content
const Subscription = () => {
  return <h2>Subscription Content</h2>;
};

const Device = () => {
  return <h2>Device Content</h2>;
};

export default Footer;
