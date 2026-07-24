import React from 'react'
import Navbar from '../components/Navbar';
import JourneyTimeline from '../components/JourneyTimeline';

import {TravelData} from '../database/TravelData';

const Journey = () => {

  
  return (
    <>
    <Navbar />
    <JourneyTimeline journeyData={TravelData} />
    </>
  )
}

export default Journey