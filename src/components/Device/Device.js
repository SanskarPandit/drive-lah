import React, { useState } from 'react';
import './Device.css';

const Device = ({ deviceDetails }) => {
  // State to track which device is selected for custom fields
  const [selectedDevice, setSelectedDevice] = useState(null);

  // Toggle change handler
  const handleToggleChange = (no) => {
    // If the same device is toggled, reset to null; otherwise, set the selected device number
    setSelectedDevice(selectedDevice === no ? null : no);
  };

  return (
    <div className='device-container'>
      {deviceDetails && deviceDetails.map((device) => (
        <div key={device.no} className='device-details'>
      <div className='device-type'>
            <p className='device-no'>Device {device.no}</p>
          </div>
          <div className='device-info'>
            <div className='device-inputs'>
              <p className='select-deviceType'>Device Type</p>
              <input className='device-input' type='text' value={device.type} readOnly />
            </div>
            <div className='device-toggle'>
              <div className='toggle-container'>
                <span className='toggle-label'>Bringing your own device?</span>
                <label className='switch'>
                  <input 
                    type='checkbox' 
                    checked={selectedDevice === device.no} 
                    onChange={() => handleToggleChange(device.no)}
                  />
                  <span className='slider'></span>
                </label>
              </div>
              <p className='toggle-description'>
                Toggle this on if you're bringing your own device. Leave it off if Drive Mate is to provide the device.
              </p>
            </div>
          </div>

          {/* Conditionally rendered fields based on selectedDevice */}
          {selectedDevice === device.no && (
            <div className='device-additional-fields'>
              <div>
                <label>Serial Number</label>
                <input type='text' placeholder='Enter the serial number of the device' className='device-input' />
              </div>
              <div className='upload-image'>
                <label className='upload-label'>Upload an image of the device</label>
                <button>Click to upload</button>
               
              </div>

            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Device;
