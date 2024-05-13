import React, { useState } from 'react'
import Wrapper from '../../../shared/Wrapper/Wrapper'


import AttractionsIcon from "@mui/icons-material/Attractions";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import SortIcon from "@mui/icons-material/Sort";
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
const Header = ({eventButton,setEventButton}) => {
    // const [eventButton, setEventButton] = useState('Local Event');

    const handleButtonClick = (buttonName) => {
        setEventButton(buttonName);
    };
  return (
    <div className='bg-bgSecondary-400'>
       <Wrapper>
        <div className="flex flex-wrap justify-center items-center  pt-10  ">
          <div className="bg-white rounded  md:rounded-[100px] grid grid-cols-2 md:block p-5 md:p-0  ">
            <button className="h-[50px] w-[200.333px] px-5 py-[10px]  bg-[#0077EC]  rounded-[100px]  text-white">
              <span>
                <AttractionsIcon /> Attraction
              </span>
            </button>
            <button className="h-[50px] w-[200.333px] px-5 py-[10px]  ">
              <p className="font-semibold text-[#0077EC]">
                <span>
                  <FastfoodOutlinedIcon /> Food
                </span>
              </p>
            </button>
            <button className=" h-[50px] w-[200.333px] px-5 py-[10px]  ">
              <p className="font-semibold text-[#0077EC]">
                <span>
                  <LocationOnOutlinedIcon /> Stay
                </span>
              </p>
            </button>
            <button className="h-[50px] w-[200.333px] px-5 py-[10px]  ">
              <p className="font-semibold text-[#0077EC]">
                <span>
                  <FlightTakeoffIcon /> Flight
                </span>
              </p>
            </button>
          </div>
        </div>
        <div className="max-w-[1080px] mx-auto  ">
          <div className=" pt-5 pb-16  w-full  ">
            <div className=" p-3">
              <div
                className=" flex items-center w-full h-16 rounded-full   bg-white overflow-hidden"
                style={{ boxShadow: "0px 16px 39px -11px rgba(0,0,0,0.32" }}
              >
                <div className="grid place-items-center h-full w-12 text-gray-300 ml-4 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  className="  h-full w-full m-2 text-xl outline-none bg-white font-medium   text-[#8E9295]  "
                  type="text"
                  id="search"
                  placeholder="Where to go ?"
                />
                <div className=" md:flex h-full hidden ">
                  <button className="bg-[#E6F1FE] px-12 rounded-l-lg h-full  font-semibold cursor-pointer    py-4  ">
                    <p className=" flex items-center gap-2  text-[#504F4E] text-xl">
                      <span className="text-xl">
                        <SortIcon />
                      </span>
                      Filter
                    </p>
                  </button>
                  <button className="bg-[#0077EC] h-full px-12 text-xl text-white rounded- font-semibold  py-4  focus:outline-none">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <div
        className="bg-[#C9E4FF] rounded-xl "
        style={{ boxShadow: "0px -3px 73px -3px rgba(201,228,255,1)" }}
      >
        <Wrapper>
        <div className="flex justify-center items-center p-5 h-[100px] gap-3">
      <button
        className={`w-[127px] p-[8px] rounded-full font-medium ${
          eventButton === 'LOCAL'
            ? 'bg-[#0077EC] text-white'
            : 'bg-white text-[#0077EC]'
        }`}
        onClick={() => handleButtonClick('LOCAL')}
      >
        Local Event
      </button>
      <button
        className={`w-[127px] p-[8px] rounded-full font-medium ${
          eventButton === 'ACTIVITY'
            ? 'bg-[#0077EC] text-white'
            : 'bg-white text-[#0077EC]'
        }`}
        onClick={() => handleButtonClick('ACTIVITY')}
      >
        Activity
      </button>
      <button
        className={`w-[127px] p-[8px] rounded-full font-medium ${
          eventButton === 'ATTRACTION'
            ? 'bg-[#0077EC] text-white'
            : 'bg-white text-[#0077EC]'
        }`}
        onClick={() => handleButtonClick('ATTRACTION')}
      >
        Attraction
      </button>
    </div>
        </Wrapper>
      </div>
    </div>
  )
}

export default Header