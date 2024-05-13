import React from 'react'
import Wrapper from '../../../shared/Wrapper/Wrapper'
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

import Sunset from "../../../assets/Sunset.png";

const TrendingSection = () => {
  return (
    <div className="bg-bgPrimary-400   py-5 px-7 ">
    <Wrapper>
      <div>
        <h1 className="text-3xl text-[#005DB9] font-bold text-center">
          Trending
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-3   gap-7 mt-8">
          <div className="w-[360px] relative ">
            <img src={Sunset} alt="" className="w-[360px] h-[275px]" />
            <div className="absolute top-3 right-10 bg-[#F8FCFF] border-[2px] rounded-r-xl rounded-tl-xl border-[#0077EC] px-4 py-[6px] text-lg">
              <p className="text-lg font-bold">$1900</p>
            </div>
            <div>
              <h3 className="text-[28px] font-semibold text-[#1A093F] mt-2 py-1">
                Experience the natural beauty of Finland
              </h3>
              <div className="flex justify-between items-center text-[#8C849F] font-medium mt-2">
                <p>
                  <span className="text-[#0077EC]">
                    <AccessTimeIcon />
                  </span>
                  7D/6N
                </p>
                <p>
                  <span className="text-[#0077EC]">
                    <PeopleOutlineOutlinedIcon />
                  </span>
                  People:5
                </p>
                <p>
                  <span className="text-[#0077EC]">
                    <LocationOnOutlinedIcon />
                  </span>
                  Lappeenranta
                </p>
              </div>

              <div className="flex justify-between items-center  mt-3">
                <div className="flex  items-center gap-2 bg-white px-4 py-[4px] rounded-full">
                  <div className="flex items-center  ">
                    <span className="text-[#0077EC]">
                      <StarRoundedIcon />
                    </span>
                    <span className="text-[#0077EC] ">
                      {" "}
                      <StarRoundedIcon />
                    </span>
                    <span className="text-[#0077EC] ">
                      {" "}
                      <StarRoundedIcon />{" "}
                    </span>
                    <span className="text-[#0077EC] ">
                      {" "}
                      <StarRoundedIcon />
                    </span>
                    <span className="text-[#0077EC] ">
                      <StarRoundedIcon />
                    </span>
                  </div>
                  <p className="mt-[3px] text-[#8C849F]">5.0</p>
                </div>

                <p className="text-[14px] text-[#8C849F]"> (2.5k Reviews)</p>
                <p className="text-[#C9E4FF]">
                  <FavoriteBorderRoundedIcon />
                </p>
              </div>
              <p className="text-[#8D8D8D] text-base pr-14 mt-3 ">
                Lorem ipsum dolor sit amet, consectetur adipi elementum enim
                netus lectus Lorem ipsum dolor sit amet
              </p>
              <button className="mt-3 px-6 py-[10px] bg-[#0077EC] text-sm text-white rounded-full">
                View Details
              </button>
            </div>
          </div>
          <div className="w-[360px] relative ">
            <img src={Sunset} alt="" className="w-[360px] h-[275px]" />
            <div className="absolute top-3 right-10 bg-[#F8FCFF] border-[2px] rounded-r-xl rounded-tl-xl border-[#0077EC] px-4 py-[6px] text-lg">
              <p className="text-lg font-bold">$1900</p>
            </div>
            <div>
              <h3 className="text-[28px] font-semibold text-[#1A093F] mt-2 py-1">
                Experience the natural beauty of Finland
              </h3>
              <div className="flex justify-between items-center text-[#8C849F] font-medium mt-2">
                <p>
                  <span className="text-[#0077EC]">
                    <AccessTimeIcon />
                  </span>
                  7D/6N
                </p>
                <p>
                  <span className="text-[#0077EC]">
                    <PeopleOutlineOutlinedIcon />
                  </span>
                  People:5
                </p>
                <p>
                  <span className="text-[#0077EC]">
                    <LocationOnOutlinedIcon />
                  </span>
                  Lappeenranta
                </p>
              </div>

              <div className="flex justify-between items-center  mt-3">
                <div className="flex  items-center gap-2 bg-white px-4 py-[4px] rounded-full">
                  <div className="flex items-center  ">
                    <span className="text-[#0077EC]">
                      <StarRoundedIcon />
                    </span>
                    <span className="text-[#0077EC] ">
                      {" "}
                      <StarRoundedIcon />
                    </span>
                    <span className="text-[#0077EC] ">
                      {" "}
                      <StarRoundedIcon />{" "}
                    </span>
                    <span className="text-[#0077EC] ">
                      {" "}
                      <StarRoundedIcon />
                    </span>
                    <span className="text-[#0077EC] ">
                      <StarRoundedIcon />
                    </span>
                  </div>
                  <p className="mt-[3px] text-[#8C849F]">5.0</p>
                </div>

                <p className="text-[14px] text-[#8C849F]"> (2.5k Reviews)</p>
                <p className="text-[#C9E4FF]">
                  <FavoriteBorderRoundedIcon />
                </p>
              </div>
              <p className="text-[#8D8D8D] text-base pr-14 mt-3 ">
                Lorem ipsum dolor sit amet, consectetur adipi elementum enim
                netus lectus Lorem ipsum dolor sit amet
              </p>
              <button className="mt-3 px-6 py-[10px] bg-[#0077EC] text-sm text-white rounded-full">
                View Details
              </button>
            </div>
          </div>
          <div className="w-[360px] relative ">
            <img src={Sunset} alt="" className="w-[360px] h-[275px]" />
            <div className="absolute top-3 right-10 bg-[#F8FCFF] border-[2px] rounded-r-xl rounded-tl-xl border-[#0077EC] px-4 py-[6px] text-lg">
              <p className="text-lg font-bold">$1900</p>
            </div>
            <div>
              <h3 className="text-[28px] font-semibold text-[#1A093F] mt-2 py-1">
                Experience the natural beauty of Finland
              </h3>
              <div className="flex justify-between items-center text-[#8C849F] font-medium mt-2">
                <p>
                  <span className="text-[#0077EC]">
                    <AccessTimeIcon />
                  </span>
                  7D/6N
                </p>
                <p>
                  <span className="text-[#0077EC]">
                    <PeopleOutlineOutlinedIcon />
                  </span>
                  People:5
                </p>
                <p>
                  <span className="text-[#0077EC]">
                    <LocationOnOutlinedIcon />
                  </span>
                  Lappeenranta
                </p>
              </div>

              <div className="flex justify-between items-center  mt-3">
                <div className="flex  items-center gap-2 bg-white px-4 py-[4px] rounded-full">
                  <div className="flex items-center  ">
                    <span className="text-[#0077EC]">
                      <StarRoundedIcon />
                    </span>
                    <span className="text-[#0077EC] ">
                      {" "}
                      <StarRoundedIcon />
                    </span>
                    <span className="text-[#0077EC] ">
                      {" "}
                      <StarRoundedIcon />{" "}
                    </span>
                    <span className="text-[#0077EC] ">
                      {" "}
                      <StarRoundedIcon />
                    </span>
                    <span className="text-[#0077EC] ">
                      <StarRoundedIcon />
                    </span>
                  </div>
                  <p className="mt-[3px] text-[#8C849F]">5.0</p>
                </div>

                <p className="text-[14px] text-[#8C849F]"> (2.5k Reviews)</p>
                <p className="text-[#C9E4FF]">
                  <FavoriteBorderRoundedIcon />
                </p>
              </div>
              <p className="text-[#8D8D8D] text-base pr-14 mt-3 ">
                Lorem ipsum dolor sit amet, consectetur adipi elementum enim
                netus lectus Lorem ipsum dolor sit amet
              </p>
              <button className="mt-3 px-6 py-[10px] bg-[#0077EC] text-sm text-white rounded-full">
                View Details
              </button>
            </div>
          </div>
         
         
        </div>
      </div>
    </Wrapper>
  </div>
  )
}

export default TrendingSection