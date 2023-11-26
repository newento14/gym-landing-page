import TitleBackground from "@/components/TitleBackground";
import React from "react";
import Image from "next/image";
import {Image1, Image2, Image3, Image4, Image5, Quotes, TestimonialsImage} from "../../../public/testimonials";
import {IoArrowForward} from "react-icons/io5";


const Testimonials = () => {
  return (
    <div className="flex flex-col items-center gap-y-12 mt-12">
      <div className="relative w-fit h-fit text-white text-[14px] font-semibold">
        <TitleBackground color={'#ff003c'} classes={"scale-110"}/>
        <p className="absolute w-fit z-10 top-[20%] right-0 left-0 ml-auto mr-auto">TESTIMONIALS</p>
      </div>
      <div className="border-[8px] border-[#efefef] p-8 max-w-[1000px] max-h-fit mt-16">
        <div className="flex justify-end items-center relative bg-black w-full h-full p-5">
          <Image className="absolute w-[335px] bottom-0 left-0 rounded-tr-[200px] object-cover max-[950px]:hidden" src={TestimonialsImage}
                 alt={'Testimonials image'}/>
          <div className="flex flex-col gap-y-4 text-black w-fit max-w-[50%] mr-[7%] max-[950px]:max-w-full max-[950px]:p-6">
            <Image className="w-[10%]" src={Quotes} alt={'quotes'}/>
            <p className="text-[15px] italic text-[#dedede]">&ldquo;I&lsquo;ve been a member of Gymate for the past 6
              months and it has been an amazing experience. The trainers are knowledgeable and supportive, the equipment
              is top-notch, and the community of members is friendly and encouraging.&rdquo;</p>
            <div className="flex justify-between">
              <p className="text-white text-xl font-bold">Ana de Armas</p>
              <div className="flex gap-x-[5px]">
                <div className="p-3 bg-white rotate-180 hover:bg-[#ff003c] hover:text-white transition-all duration-200 text-black">
                  <IoArrowForward size={18}/>
                </div>
                <div className="p-3 bg-white hover:bg-[#ff003c] hover:text-white transition-all duration-200 text-black">
                  <IoArrowForward size={18}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-4">
        <Image className="scale-[.8] hover:invert transition-all duration-200" src={Image1} alt={'athletic club'} />
        <Image className="scale-[.8] hover:invert transition-all duration-200" src={Image2} alt={'fitness club'} />
        <Image className="scale-[.8] hover:invert transition-all duration-200" src={Image3} alt={'gym club'} />
        <Image className="scale-[.8] hover:invert transition-all duration-200" src={Image4} alt={'muscle club'} />
        <Image className="scale-[.8] hover:invert transition-all duration-200" src={Image5} alt={'power lifting club'} />
      </div>
    </div>
  );
};

export default Testimonials;