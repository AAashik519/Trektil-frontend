import React from 'react'
import Wrapper from '../Wrapper/Wrapper'
import QR from '../../assets/QR_Code.svg'
import Arrow from '../../assets/arrow.svg'
import FooterCopyRight from '../FooterCopyright/FooterCopyRight'
const Footer = () => {
  return (
    <div>
         <div className=" bg-[#0077EC]   ">
      <Wrapper> 
        <div className="flex flex-col-reverse md:flex md:flex-row justify-center items-center gap-9 md:min-h-[350px] py-10 md:py-0">
            <div className="flex flex-col    md:flex md:flex-row justify-center items-center gap-9 ">
                <img src={QR} alt="" />
                <img src={Arrow} alt="" />
            </div>
            <div className="    text-center md:text-left">
                <p className="text-xl text-white pb-2">We make Trektil for you </p>
                <h1 className="text-4xl md:text-[53px] font-bold text-white">Crafting Joyful Journey</h1>
                <button className="bg-[#F00033] px-6 py-[10px] rounded-full text-white mt-5">Get Better Experience</button>
            </div>
        </div>
 
      </Wrapper>
    </div>
    <FooterCopyRight />
    </div>
  )
}

export default Footer