import React from 'react'
import './DeviceManagement.css'

import Device from '../Device/Device'
import { deviceDetails } from '../../utils/deviceDetails'

const DeviceManagement = () => {

  return (
   
      <div className='subscription-container'>
          <div className='info'>
              <p className='heading'>Device Management</p>
              <p className='descp'>Add details of device,if any already installed on your car. If none, then continue to next step</p>
          </div>
        <div className='device-plan-container'>
             <Device deviceDetails={deviceDetails}/>
        </div>

      </div>
    

  )
}

export default DeviceManagement