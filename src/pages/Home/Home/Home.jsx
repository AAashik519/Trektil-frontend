import React, { useEffect, useState } from 'react'
import HappeningNow from '../HappeningNow/HappeningNow'
import Header from '../Header/Header'
import TrendingSection from '../TrendingSection/TrendingSection'
import ExplorSection from '../ExplorSection/ExplorSection'
import axios from 'axios'

import { useGetAttractionApiQuery } from '../../../app/services/attraction'
import LoadingUi from '../../../components/LoadingUi/LoadingUi'

const Home = () => {
  const [eventButton, setEventButton] = useState('LOCAL');
  // const [eventData, setEventData] = useState([]);
  
  const { data, error, isLoading } = useGetAttractionApiQuery(eventButton)
  
  


  if (isLoading) {
    return  <LoadingUi /> // Render loading indicator
  }

  console.log(data.results);

  return (
    <div>
        <Header eventButton={eventButton}  setEventButton={setEventButton }/>
        <HappeningNow eventData= {data.results} isLoading={isLoading} />
        <TrendingSection />
        <ExplorSection />
    </div>
  )
}

export default Home