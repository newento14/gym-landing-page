'use client'
import * as React from 'react';
import {motion} from "framer-motion";
import Modal from '@mui/material/Modal';
import { IoIosClose } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  border: '2px solid #000',
  p: 4,
};

const links = [
  {name: 'Home', link: '/'},
  {name: 'About', link: '/about'},
  {name: 'Gallery', link: '/gallery'},
  {name: 'Schedule', link: '/schedule'},
  {name: 'Pricing', link: '/pricing'},
  {name: 'Classes', link: '/classes'},
  {name: 'Contact', link: '/contact'},
]

interface NavbarProps {
  value: boolean,
  setVisible: (x: boolean) => void,
}

export default function NavbarMobile({value, setVisible}:NavbarProps) {
  const handleClose = () => setVisible(false);
  const path = usePathname();

  return (
    <div>
      <Modal
        open={value}
        onClose={handleClose}
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{x: 0, opacity: 1}}
          exit={{x: -100, opacity: 0}}
          transition={{type: 'tween'}}
          className="flex relative justify-center items-center w-[100vw] h-[100vh] ">
          <span className="absolute top-0 right-0" onClick={handleClose}>
            <IoIosClose size={100} color={'white'} />
          </span>
          <div className="h-full w-full flex flex-col justify-center items-center border-r-[3px] border-black bg-[#282828] text-5xl text-white/70 gap-y-4">
            {links.map(link => (
              <Link key={link.link} className="relative" href={link.link}>
                {((path.includes(link.link) && link.link !== '/') || (path === '/' && link.link === '/')) &&
                  <motion.span layoutId="undreline" className="absolute left-0 -bottom-1 block h-[2px] w-full bg-[#94221a] rounded-xl" />}

                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </Modal>
    </div>
  );
}