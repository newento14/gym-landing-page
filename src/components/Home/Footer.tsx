import Image from "next/image";
import {MainLogo} from "../../../public";
import {FaFacebookF, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center w-full h-fit">
      <div className="flex w-fit h-fit">
        <div className="flex flex-col max-w-[300px] text-black/70 text-[15px]">
          <Image className="mb-4" src={MainLogo} alt={'Gymate logo'}/>
          <p className="">Take your health and body to the next level with our comprehensive program designed to help you reach your
            fitness goals.</p>
          <div className="flex gap-x-2 my-4">
            <div className="bg-[#efefef] p-2 rounded-full hover:bg-[#ff003c] hover:text-white transition-all duration-200">
              <FaFacebookF/>
            </div>
            <div className="bg-[#efefef] p-2 rounded-full hover:bg-[#ff003c] hover:text-white transition-all duration-200">
              <FaInstagram/>
            </div>
            <div className="bg-[#efefef] p-2 rounded-full hover:bg-[#ff003c] hover:text-white transition-all duration-200">
              <FaTwitter/>
            </div>
            <div className="bg-[#efefef] p-2 rounded-full hover:bg-[#ff003c] hover:text-white transition-all duration-200">
              <FaYoutube />
            </div>
          </div>
          <p>Privacy Policy | © 2023 Gymate</p>
          <p>Design by RadiusTheme</p>
        </div>
        <div>
          <p>Our Classes</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;