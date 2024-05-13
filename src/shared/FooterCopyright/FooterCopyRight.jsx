import React from 'react'
import Wrapper from '../Wrapper/Wrapper'

const FooterCopyRight = () => {
  return (
    <div className="bg-[#F0F6FF]">
        <div className="bg-[#005DB9] mt-5">
      <Wrapper>
        <div className="text-center md:flex justify-between items-center md:h-12 p-2">
          <p className="text-white text-sm">Trektil © 2024 All Rights Reserved</p>
          <ul className="flex gap-4 text-white text-sm justify-center mt-2">
            <li >
              <a href="">Privacy Policy &nbsp; &nbsp;|</a>
            </li>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
          </ul>
        </div>
      </Wrapper>
    </div>
    </div>
  )
}

export default FooterCopyRight