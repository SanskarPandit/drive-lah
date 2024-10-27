import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { FaCheckCircle } from 'react-icons/fa';
import SubscriptionPath from '../SubscriptionPlan/SubscriptionPath';
import DeviceManagement from '../DeviceManagement/DeviceManagement';

const Dashboard = () => {
  const [selectedSection, setSelectedSection] = useState('Subscription');
  const [isMobile, setIsMobile] = useState(false);  

   
  const [sections, setSections] = useState([
    { name: 'Location', status: 'done' },
    { name: 'About', status: 'done' },
    { name: 'Features', status: 'done' },
    { name: 'Rules', status: 'done' },
    { name: 'Pricing', status: 'done' },
    { name: 'Promotion', status: 'done' },
    { name: 'Pictures', status: 'done' },
    { name: 'Insurance', status: 'done' },
    { name: 'Subscription', status: 'ongoing' },
    { name: 'Device', status: 'pending' },
    { name: 'Easy Access', status: 'pending' }
  ]);

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);  
    };

     
    handleResize();

   
    window.addEventListener('resize', handleResize);

     
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSelectChange = (event) => {
    setSelectedSection(event.target.value);
  };

  const handleNextClick = () => {
    const currentIndex = sections.findIndex(section => section.name === selectedSection);
 
    const updatedSections = sections.map((section, index) => {
      if (index === currentIndex) {
        return { ...section, status: 'done' }; 
      }
      return section;
    });

 
    const nextIndex = currentIndex + 1;
    if (nextIndex < sections.length) {
      setSelectedSection(sections[nextIndex].name); 
    }

    setSections(updatedSections); 
  };

  return (
    <>
      <div className='sidebar'>
        <div className="sidebar-container">
          {isMobile ? (
           
            <select value={selectedSection} onChange={handleSelectChange} className="mobile-select">
              {sections.map((section) => (
                <option key={section.name} value={section.name}>
                  {section.name}
                </option>
              ))}
            </select>
          ) : (
           
            <ul className="sidebar-list">
              {sections.map((section) => (
                <li
                  key={section.name}
                  className={`sidebar-item ${selectedSection === section.name ? 'active' : ''} ${section.status === 'ongoing' ? 'ongoing' : ''} ${section.status === 'done' ? 'done' : ''}`}
                  onClick={() => setSelectedSection(section.name)}
                >
                  {section.name}
                 
                  {section.status === 'done' && <FaCheckCircle className="done-icon" />}
                </li>
              ))}
            </ul>
          )}

          <div className="content-container">
            {selectedSection === 'Subscription' && <SubscriptionPath />}
            {selectedSection === 'Device' && <DeviceManagement />}
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
