import TitleBackground from "@/components/TitleBackground";
import React from "react";
import Image from "next/image";
import {Trainer1, Trainer2, Trainer3, TrainerBG} from "../../../public/trainers";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Trainers = () => {
  return (
    <div className="bg-[url('../../public/trainers/trainers-bg.png')] flex flex-col items-center py-16 gap-y-7 w-full max-[800px]:text-center">
      <div className="relative w-fit h-fit text-white text-[14px] font-semibold">
        <TitleBackground color={'#ff003c'} classes={"scale-110"}/>
        <p className="absolute w-fit z-10 top-[20%] right-0 left-0 ml-auto mr-auto">GYM TRAINERS</p>
      </div>
      <p className="text-4xl text-black font-bold">Team Of Expert Coaches</p>
      <p className="text-[15px] font-medium">Expert team of coaches helps you succeed in any goal, personalized guidance and motivation provided!</p>
      <div className="flex flex-wrap justify-center gap-7">
        <div className="group/item h-[400px] w-[350px]">
          <div className="relative h-full w-full">
            <Image className="absolute left-0 top-0 bottom-0 right-0 m-auto scale-[.9]" src={TrainerBG} alt={'background'} />
            <Image className="absolute left-0 top-0 bottom-0 right-0 m-auto scale-[.95] grayscale group-hover/item:grayscale-0 transition-all duration-300" src={Trainer1} alt={'first trainer'} />
          </div>
          <div className="relative flex flex-col justify-center items-center bottom-[150px] z-10 w-[350px] h-[150px] bg-white rounded-md shadow-xl">
            <p className="font-bold text-xl">John Lewis</p>
            <p className="text-black/70 text-[16px] ">Yoga Trainer</p>
            <div className="flex gap-x-2 mt-4">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <CiMail />
            </div>
            <div className="absolute z-[20] bottom-0 bg-[#ff003c] w-[50px] h-[5px] group-hover/item:w-[350px] ease-in transition-all duration-300 rounded-xl"/>
          </div>
        </div>

        <div className="group/item h-[400px] w-[350px]">
          <div className="relative h-full w-full">
            <Image className="absolute left-0 top-0 bottom-0 right-0 m-auto scale-[.9]" src={TrainerBG} alt={'background'} />
            <Image className="absolute left-0 top-0 bottom-0 right-0 m-auto scale-[.95] grayscale group-hover/item:grayscale-0 transition-all duration-300" src={Trainer2} alt={'first trainer'} />
          </div>
          <div className="relative flex flex-col justify-center items-center bottom-[150px] z-10 w-[350px] h-[150px] bg-white rounded-md shadow-xl">
            <p className="font-bold text-xl">Jonathan Doe</p>
            <p className="text-black/70 text-[16px] ">Crossfit Trainer</p>
            <div className="flex gap-x-2 mt-4">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <CiMail />
            </div>
            <div className="absolute z-[20] bottom-0 bg-[#ff003c] w-[50px] h-[5px] group-hover/item:w-[350px] ease-in transition-all duration-300 rounded-xl"/>
          </div>
        </div>

        <div className="group/item h-[400px] w-[350px]">
          <div className="relative h-full w-full">
            <Image className="absolute left-0 top-0 bottom-0 right-0 m-auto scale-[.9]" src={TrainerBG} alt={'background'} />
            <Image className="absolute left-0 top-0 bottom-0 right-0 m-auto scale-[.95] grayscale group-hover/item:grayscale-0 transition-all duration-300" src={Trainer3} alt={'first trainer'} />
          </div>
          <div className="relative flex flex-col justify-center items-center bottom-[150px] z-10 w-[350px] h-[150px] bg-white rounded-md shadow-xl">
            <p className="font-bold text-xl">Ana June</p>
            <p className="text-black/70 text-[16px] ">Personal Trainer</p>
            <div className="flex gap-x-2 mt-4">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <CiMail />
            </div>
            <div className="absolute z-[20] bottom-0 bg-[#ff003c] w-[50px] h-[5px] group-hover/item:w-[350px] ease-in transition-all duration-300 rounded-xl"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainers;