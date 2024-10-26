import React from 'react'
import './DeviceManagement.css'
import PlanCard from '../PlanCard/PlanCard'
import { cardDetails } from '../../utils/cardDetails'

const DeviceManagement = () => {

  return (
   
      <div className='subscription-container'>
          <div className='info'>
              <p className='heading'>Device Management</p>
              <p className='descp'>Add details of device,if any already installed on your car. If none, then continue to next step</p>
          </div>
        <div className='plan-container'>
          <p className='select-plan'>Device 1</p>
            <div className='cards'>
              <PlanCard cardDetails={cardDetails} />
            </div>
        </div>
        <div className='learn-more'>
          Learn more about the plans here - <span><a href='https://www.google.com'>What is the right plan for me?</a></span>
        </div>
        <div className='descp'>
          <p>You will be able to switch between plans easily later as well. Speak to our host success team if you need any calculations</p>
        </div>
      </div>
    

  )
}

export default DeviceManagement