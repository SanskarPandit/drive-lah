import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { FaCheckCircle } from 'react-icons/fa';
import SubscriptionPath from '../SubscriptionPlan/SubscriptionPath';
import DeviceManagement from '../DeviceManagement/DeviceManagement';

const Dashboard = () => {
  const [selectedSection, setSelectedSection] = useState('Subscription');
  const [isMobile, setIsMobile] = useState(false); // To track if the view is mobile

  // Define the sections with a "status" field (done or ongoing)
  const [sections, setSections] = useState([
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
  ]);

  // Check the screen size on mount and update the isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set to true if width is less than or equal to 768px (mobile screen)
    };

    // Set the initial value
    handleResize();

    // Add event listener for resizing the window
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSelectChange = (event) => {
    setSelectedSection(event.target.value);
  };

  const handleNextClick = () => {
    const currentIndex = sections.findIndex(section => section.name === selectedSection);

    // Update the current section's status to done
    const updatedSections = sections.map((section, index) => {
      if (index === currentIndex) {
        return { ...section, status: 'done' }; // Mark current as done
      }
      return section;
    });

    // Set the next section if available
    const nextIndex = currentIndex + 1;
    if (nextIndex < sections.length) {
      setSelectedSection(sections[nextIndex].name); // Move to the next section
    }

    setSections(updatedSections); // Update the sections state
  };

  return (
    <>
      <div className='sidebar'>
        <div className="sidebar-container">
          {isMobile ? (
            // Mobile view: Render as a select dropdown
            <select value={selectedSection} onChange={handleSelectChange} className="mobile-select">
              {sections.map((section) => (
                <option key={section.name} value={section.name}>
                  {section.name}
                </option>
              ))}
            </select>
          ) : (
            // Desktop view: Render the sidebar list
            <ul className="sidebar-list">
              {sections.map((section) => (
                <li
                  key={section.name}
                  className={`sidebar-item ${selectedSection === section.name ? 'active' : ''} ${section.status === 'ongoing' ? 'ongoing' : ''} ${section.status === 'done' ? 'done' : ''}`}
                  onClick={() => setSelectedSection(section.name)}
                >
                  {section.name}
                  {/* Show the done icon for completed sections */}
                  {section.status === 'done' && <FaCheckCircle className="done-icon" />}
                </li>
              ))}
            </ul>
          )}

          <div className="content-container">
            {selectedSection === 'Subscription' && <SubscriptionPath />}
            {selectedSection === 'Device' && <DeviceManagement />}
            {/* Add other components for different sections */}
          </div>
        </div>
      </div>
      <footer>
        <div className='btn-container'>
          <button className='next-button' onClick={handleNextClick}>Next</button>
        </div>
      </footer>
    </>
  );
};

export default Dashboard;
