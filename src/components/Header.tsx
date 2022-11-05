import React from "react";
import { RiShoppingBasketFill } from "react-icons/ri";
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      {/* desktop */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={'/'} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-gray-800  text-xl font-bold">City</p>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-gray-600 hover:text-gray-800  duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-base text-gray-600 hover:text-gray-800  duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-base text-gray-600 hover:text-gray-800  duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-base text-gray-600 hover:text-gray-800  duration-100 transition-all ease-in-out cursor-pointer">
              Service
            </li>
          </ul>

          <div className="relative flex items-center justify-center">
            <RiShoppingBasketFill className="text-gray-500 text-2xl cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-600 flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>

          <motion.img whileTap={{scale: 0.6}} src={Avatar} className='w-10 min-w-[40px] h-10 min-h-[40px] shadow-xl cursor-pointer' alt="avatar" />
        </div>
      </div>

      {/* mobile */}
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
};

export default Header;
