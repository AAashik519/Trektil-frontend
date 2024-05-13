import React, { useState } from "react";
import Wrapper from "../../../shared/Wrapper/Wrapper";

import img1 from "../../../assets/Cart_photo (1).jpeg";
import img2 from "../../../assets/Cart_photo (6).jpeg";
import img3 from "../../../assets/Cart_photo (2).jpeg";
import img4 from "../../../assets/Cart_photo (3).jpeg";
import img5 from "../../../assets/Cart_photo.jpeg";

import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import conditions from "../../../assets/conditions.png";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import Carousel from "react-simply-carousel";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";


const HappeningNow = ({eventData}) => {
  
  console.log(eventData);
    const [activeSlide, setActiveSlide] = useState(0);
    const demoData = [
        {
          id: 1,
          image: img1,
          title: "Enjoy the Beauty of the Rialto Bridge",
          subTitle: "Lappeenranta,Finland",
          rating: "4.8",
        },
        {
          id: 2,
          image: img2,
          title: "Enjoy the Beauty of the Rialto Bridge",
          subTitle: "Lappeenranta,Finland",
          rating: "4.8",
        },
        {
          id: 3,
          image: img3,
          title: "Enjoy the Beauty of the Rialto Bridge",
          subTitle: "Lappeenranta,Finland",
          rating: "4.8",
        },
        {
          id: 4,
          image: img4,
          title: "Enjoy the Beauty of the Rialto Bridge",
          subTitle: "Lappeenranta,Finland",
          rating: "4.8",
        },
        {
          id: 5,
          image: img5,
          title: "Enjoy the Beauty of the Rialto Bridge",
          subTitle: "Lappeenranta,Finland",
          rating: "4.8",
        },
      ];
  return (
    <div className="bg-bgSecondary-400 pt-8 pb-12 px-5 ">
      <Wrapper>
      <div  >
          <div className="flex items-center gap-4  text-4xl font-bold text-[#F00033] ">
            <img src={conditions} alt="" className="w-6 h-6" />
            <h1>Happening Now! </h1>
          </div>
          <Carousel
            containerProps={{
              style: {
                width: "100%",
                justifyContent: "space-between",
                userSelect: "text",
              },
            }}
            activeSlideIndex={activeSlide}
            onRequestChange={setActiveSlide}
            itemsToShow={4}
            speed={700}
          >
            {eventData?.map((data, index) => (
              
              <div
                style={{
                  width: 350,
                  // height: 300,
                  boxSizing: "border-box",
                  padding: "0 10px",
              
                }}
                key={index}
              >
                <div className="pt-5 pb-5 "  >
                  <div className="relative  ">
                    <img
                      src={data.images.length > 0 ? data.images[0].image : ""}
                      alt=""
                      className="w-[350px] h-[464px] rounded-3xl   " style={{boxShadow: '0px 6px 14px 0px rgba(0, 119, 236, 0.3)'}}
                    />
                    <div className="absolute top-6 right-6">
                      <p className="bg-white p-2 rounded-full">
                        {" "}
                        <span className="text-[#F00033]">
                          {" "}
                          <FavoriteBorderIcon />
                        </span>
                      </p>
                    </div>
                    <div
                      className="absolute bottom-4 left-8 rounded-lg border  #b4a5a579 border-t-neutral-300 border-r-neutral-700 border-b-neutral-700"
                      style={{
                        borderTopColor: "#b4a5a579",
                        borderBottomColor: "#b4a5a579",
                        width: "40%",
                      }}
                    >
                      <div className="w-[267px]  bg-opacity-65   backdrop-filter backdrop-blur-[7.5px] p-4 rounded-lg">
                        <h3 className="text-xl text-white font-semibold">
                          Enjoy the Beauty of the Rialto Bridge
                        </h3>
                        <p className="text-[#E8E8E8] font-light text-base  my-3">
                          Lappeenranta,Finland
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="flex items-center gap-1">
                            <span className="text-[#FF3762] ">
                              <StarRateRoundedIcon />
                            </span> 
                            <span className="text-[#FFFFFF] mt-1 ">4.8</span>
                          </p>
                          <p>
                            <span className="text-[#F8FCFF]">
                              <EastRoundedIcon /> 
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </Wrapper>
    </div>
  );
};

export default HappeningNow;
