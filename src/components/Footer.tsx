import Image from "next/image";
import {MainLogoBlack} from "../../public";
import {FaFacebookF, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center w-full h-fit">
      <div
        className="flex w-fit h-fit gap-x-36 p-16 max-[1100px]:gap-x-24 max-[1000px]:gap-x-6 max-[1000px]:px-2 max-[800px]:flex-col max-[800px]:gap-y-12 max-[800px]:justify-center max-[800px]:items-start">
        <div className="flex flex-col max-w-[350px] text-black/70 text-[15px]">
          <Image className="mb-4" src={MainLogoBlack} alt={'Gymate logo'}/>
          <p className="">Take your health and body to the next level with our comprehensive program designed to help
            you reach your
            fitness goals.</p>
          <div className="flex gap-x-2 my-4">
            <div
              className="bg-[#efefef] p-2 rounded-full hover:bg-[#ff003c] hover:text-white transition-all duration-200">
              <FaFacebookF/>
            </div>
            <div
              className="bg-[#efefef] p-2 rounded-full hover:bg-[#ff003c] hover:text-white transition-all duration-200">
              <FaInstagram/>
            </div>
            <div
              className="bg-[#efefef] p-2 rounded-full hover:bg-[#ff003c] hover:text-white transition-all duration-200">
              <FaTwitter/>
            </div>
            <div
              className="bg-[#efefef] p-2 rounded-full hover:bg-[#ff003c] hover:text-white transition-all duration-200">
              <FaYoutube/>
            </div>
          </div>
          <p>Privacy Policy | © 2023 Gymate</p>
          <p>Design by RadiusTheme</p>
        </div>
        <div>
          <div>
            <p className="text-xl font-bold">Our Classes</p>
            <div className="bg-[#ff003c] w-[50%] h-[4px] rounded-xl"/>
          </div>
          <div className="flex flex-col mt-5 gap-y-5 text-[15px]">
            <p className="text-black hover:text-[#ff003c] hover:font-semibold">Fitness Classes</p>
            <p className="text-black hover:text-[#ff003c] hover:font-semibold">Aerobics Classes</p>
            <p className="text-black hover:text-[#ff003c] hover:font-semibold">Power Yoga</p>
            <p className="text-black hover:text-[#ff003c] hover:font-semibold">Learn Machines</p>
            <p className="text-black hover:text-[#ff003c] hover:font-semibold">Full-body Strength</p>
          </div>
        </div>
        <div>
          <div>
            <p className="text-xl font-bold">Working Hours</p>
            <div className="bg-[#ff003c] w-[50%] h-[4px] rounded-xl"/>
          </div>
          <div className="flex flex-col mt-5 gap-y-5 text-[15px]">
            <p className="font-bold">Monday - Friday:</p>
            <p>7:00am - 21:00pm</p>
            <p className="font-bold">Saturday:</p>
            <p>7:00am - 19:00pm</p>
            <p className="font-bold">Sunday - Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;