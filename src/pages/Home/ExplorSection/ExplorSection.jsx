import React, { useState } from 'react'

import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import Carousel from "react-simply-carousel";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


import img1 from "../../../assets/Cart_photo (1).jpeg";
import img2 from "../../../assets/Cart_photo (6).jpeg";
import img3 from "../../../assets/Cart_photo (2).jpeg";
import img4 from "../../../assets/Cart_photo (3).jpeg";
import img5 from "../../../assets/Cart_photo.jpeg";
import Wrapper from '../../../shared/Wrapper/Wrapper';


const ExplorSection = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const happyData = [
        {
          id: 1,
          image: img1,
          title: "Enjoy the Beauty of the Rialto Bridge",
          subTitle: " Lahati, Finland",
          review:'(2.5k Reviews)',
          rating: "4.8",
        },
        {
          id: 2,
          image: img2,
          title: "Enjoy the Beauty of the Rialto Bridge",
          subTitle: " Lahati, Finland",
          review:'(2.5k Reviews)',
          rating: "4.8",
        },
        {
          id: 3,
          image: img3,
          title: "Enjoy the Beauty of the Rialto Bridge",
          subTitle: " Lahati, Finland",
          review:'(2.5k Reviews)',
          rating: "4.8",
        },
        {
          id: 4,
          image: img4,
          title: "Enjoy the Beauty of the Rialto Bridge",
          subTitle: " Lahati, Finland",
          review:'(2.5k Reviews)',
          rating: "4.8",
        },
        {
          id: 5,
          image: img5,
          title: "Enjoy the Beauty of the Rialto Bridge",
          subTitle: " Lahati, Finland",
          review:'(2.5k Reviews)',
          rating: "4.8",
        },
      ];
  return (
    <div className="bg-[#f0F6FF] pb-[70px] px-6 " >
    <div className="bg-[#E7F3FF] pt-4 pb-5">
     <Wrapper>
       <div>
         <div className="flex items-center justify-between 4 ">
           <div>
             <h6 className="text-[#F00033] text-xl font-semibold"> Top Event</h6>
             <h1 className="text-4xl font-bold">Explore All New Events </h1>
           </div>
           <div className="flex items-center gap-2">
              <button className="p-2 bg-[#0077EC] text-white rounded-full"> <KeyboardArrowLeftIcon /></button>
              <button   className="p-2 bg-[#0077EC] text-white rounded-full"> <KeyboardArrowRightIcon />  </button>
       
           </div>
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
           speed={600}
         >
            
           {
             happyData.map((data , index)=>(
               <div
               style={{
                 width: 350,
                
                 boxSizing: "border-box",
                 padding: "0 10px",
               }}
               key={index}
             >
               <div className="pt-5 pb-5">
                 <div className="relative ">
                   <img
                     src={data.image}
                     alt=""
                     className="w-[350px] h-[300px] rounded-3xl cursor-pointer   " />
                   <div className="      ">
                     <div className="w-[267px]  ">
                       {/* bg-gradient-to-r from-white to-transparent border-l-4 border-white  */}
                       <h3 className="text-xl font-semibold pt-3">
                         {data.title}
                       </h3>
                       <p className=" font-light text-base text-[#0077EC] pt-3">
                         Lahati, Finland
                       </p>
                       <div className="flex items-center gap-3 pt-2">
                         <p className="flex items-center justify-center gap-[2px] bg-[#C9E4FF] px-4 py-1 rounded-full">
                           <span className="text-[#FF3762]  ">
                             <StarRateRoundedIcon />
                           </span> 
                           <span className=" mt-1 ">4.8</span>
                         </p>
                         <p className="text-[#0077EC] mt-1">
                           {data.review} 
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             ))
           }
         </Carousel>
       </div>
     </Wrapper>
   </div>
  </div>
  )
}

export default ExplorSection