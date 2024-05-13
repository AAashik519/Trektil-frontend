import React, { useEffect, useState } from 'react'
import HappeningNow from '../HappeningNow/HappeningNow'
import Header from '../Header/Header'
import TrendingSection from '../TrendingSection/TrendingSection'
import ExplorSection from '../ExplorSection/ExplorSection'
import axios from 'axios'

const Home = () => {
  const [eventButton, setEventButton] = useState('ATTRACTION');
  const [eventData, setEventData] = useState([]);
  console.log(eventData);


    useEffect(()=>{
    
      fetch(`https://sandbox.trektil.com/api/v1/attraction/?category=${eventButton}`)
      .then(res => res.json())
      .then(data => setEventData(data.results))
  },[eventButton])


  

  return (
    <div>
        <Header eventButton={eventButton}  setEventButton={setEventButton }/>
        <HappeningNow eventData= {eventData} />
        <TrendingSection />
        <ExplorSection />
    </div>
  )
}

export default Home