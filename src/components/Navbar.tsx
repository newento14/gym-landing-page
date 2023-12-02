'use client'
import React from 'react';
import Link from "next/link";

const links = [
  {name: 'Home', link: '/'},
  {name: 'About', link: '/about'},
  {name: 'Schedule', link: '/schedule'},
  {name: 'Pricing', link: '/pricing'},
  {name: 'Classes', link: '/classes'},
  {name: 'Contact', link: '/contact'},
]

const Navbar = () => {
  return (
    <div className="flex-1 flex items-center justify-center gap-x-4 max-[1100px]:hidden">
      {links.map(link => (
        <Link key={link.name} href={link.link}><p
          className="hover:text-red-600 transition-all duration-500">{link.name}</p></Link>
      ))}
    </div>
  );
};

export default Navbar;