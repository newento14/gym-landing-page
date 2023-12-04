import React from 'react';
import {FaFacebookF, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";

const Page = () => {
  return (
    <div>
      <div
        className="flex justify-center items-end p-2 bg-[url('../../public/about/banner.jpg')] h-[300px] object-cover bg-cover bg-no-repeat bg-right">
        <p className="text-4xl font-bold text-white">Contact</p>
      </div>
      <div className="flex w-[100vw] justify-center items-center mt-6">
        <div className="max-w-[1000px] w-full flex gap-x-6 max-[900px]:flex-col max-[900px]:px-12 max-sm:px-2">
          <div className="flex-1 flex flex-col gap-y-7">
            <p className="text-[36px] font-bold">We are here for help you! To Shape Your Body.</p>
            <p className="text-[16px] text-black/70">At Gymate, we are dedicated to helping you achieve the body of your
              dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and
              nutrition plan that helps you reach your specific goals.</p>
            <div className="grid grid-cols-2 grid-rows-2 gap-y-7 min620:grid-cols-1 min620:mx-auto">
              <div>
                <p className="font-bold text-[18px]">New York City, USA</p>
                <div className="h-[4px] w-[25%] bg-[#ff003c] rounded-xl"></div>
                <p className="text-[14px] text-black/70 mt-4">85 Briston Mint Street,
                  <br/>
                  London, E1 8LG, USA</p>
              </div>
              <div>
                <p className="font-bold text-[18px]">Opening Hours</p>
                <div className="h-[4px] w-[25%] bg-[#ff003c] rounded-xl"></div>
                <p className="text-[14px] text-black/70 mt-4">Mon to Fri: 7:30 am — 1:00 am
                  <br/>
                  Mon to Fri: 7:30 am — 1:00 am</p>
              </div>
              <div>
                <p className="font-bold text-[18px]">Information</p>
                <div className="h-[4px] w-[25%] bg-[#ff003c] rounded-xl"></div>
                <p className="text-[14px] text-black/70 mt-4">+800-123-4567
                  <br/>
                  gymat@gymail.com</p>
              </div>
              <div>
                <p className="font-bold text-[18px]">Follow Us On</p>
                <div className="h-[4px] w-[25%] bg-[#ff003c] rounded-xl"></div>
                <div className="flex gap-x-2 my-4">
                  <div
                    className="bg-[#efefef] p-2 rounded-full hover:bg-[#ff003c] hover:text-white transition-all duration-200">
                    <FaFacebookF size={20}/>
                  </div>
                  <div
                    className="bg-[#efefef] p-2 rounded-full hover:bg-[#ff003c] hover:text-white transition-all duration-200">
                    <FaInstagram size={20}/>
                  </div>
                  <div
                    className="bg-[#efefef] p-2 rounded-full hover:bg-[#ff003c] hover:text-white transition-all duration-200">
                    <FaTwitter size={20}/>
                  </div>
                  <div
                    className="bg-[#efefef] p-2 rounded-full hover:bg-[#ff003c] hover:text-white transition-all duration-200">
                    <FaYoutube size={20}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-[#f8f8f8] p-6">
            <p className="text-[28px] font-bold">Leave Us Your Info</p>
            <div className="h-[4px] w-[15%] bg-[#ff003c] rounded-xl"></div>
            <form className="mt-8 gap-y-5 flex flex-col items-center">
              <input className="w-full px-6 py-2 text-[14px]" required={true} placeholder={'Full name *'}/>
              <input className="w-full px-6 py-2 text-[14px]" required={true} placeholder={'Email *'}/>
              <select defaultValue={'DEFAULT'}
                      className="w-full px-6 py-2 text-[14px] border border-solid border-[#e4e4e4] outline-none">
                <option value="DEFAULT" disabled>Select Classes</option>
                <option value="1">Boxing</option>
                <option value="2">Yoga</option>
                <option value="3">Aerobics</option>
                <option value="4">Zumba</option>
                <option value="5">Fitness</option>
                <option value="6">Weight Loss</option>
                <option value="7">Karate</option>
                <option value="7">Cycling</option>
              </select>
              <textarea className="w-full max-h-[200px] px-6 py-2 text-[14px]" required={true} placeholder={'Message *'}/>
              <button className="w-[150px] bg-[#ff003c] text-white py-2 rounded-xl text-[14px]">Send Message</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;