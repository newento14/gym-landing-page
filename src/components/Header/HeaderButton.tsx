'use client'
import {FaPlus} from "react-icons/fa";
import {motion} from "framer-motion";
import React from "react";

const HeaderButton = () => {
  return (
    <motion.div
      whileHover={{rotate: 180 }}
      transition={{duration: 0.4, ease: 'easeIn'}}
      className="flex justify-center items-center w-[35px] h-[35px] bg-[#ff003c] rounded-md">
      <FaPlus size={18} color={'white'} />
    </motion.div>
  );
};

export default HeaderButton;