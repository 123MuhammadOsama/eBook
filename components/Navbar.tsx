"use client";

import { Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { CiMail } from 'react-icons/ci';
import { FaWhatsapp } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white flex flex-wrap items-center justify-between p-5 md:px-10 lg:px-20">
      
      <div className="flex items-center">
        <Image
          src='/logo.png'
          alt="logo"
          width={150}
          height={100}
          className="w-auto h-auto"
        />
      </div>

      <div className="md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? (
          <HiX className="text-3xl cursor-pointer" />
        ) : (
          <HiMenu className="text-3xl cursor-pointer" />
        )}
      </div>

      <div className="hidden md:flex  items-center gap-5 lg:gap-10">
        <Link href='/' className='hover:text-blue-400'>About Us</Link>
        <Link href='/' className='hover:text-blue-400'>Contact Us</Link>
        <Link href='/' className='hover:text-blue-400'>Services</Link>
        <Link href='/' className='hover:text-blue-400'>Blogs</Link>
      </div>

      <div className="hidden md:flex items-center gap-6">
            <div className="hidden sm:flex relative flex-col group overflow-hidden">
            <div className="flex items-center space-x-2 z-10 transition-all duration-300 group-hover:-translate-y-8 group-hover:opacity-0">
              <BsWhatsapp size={22} />
              <Link href=''  className="text-sm md:text-base lg:text-md  hover:text-green-500">+1 234 567 89</Link>
            </div>
            <div className="flex items-center space-x-2 absolute top-0 transition-all duration-300 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:text-green-500">
              <BsWhatsapp size={22} />
              <Link  href=''  className="text-sm md:text-base lg:text-md  hover:text-green-500">+1 234 567 89</Link>
            </div>
            </div>
            <div className="hidden sm:flex relative flex-col group overflow-hidden">
            <div className="flex items-center space-x-2 z-10 transition-all duration-300 group-hover:-translate-y-8 group-hover:opacity-0">
              <Mail size={24} />
              <Link href=''  className="text-sm md:text-base lg:text-md  hover:text-blue-500">info@ebookwritingstudio.com</Link>
            </div>
            <div className="flex items-center space-x-2 absolute top-0 transition-all duration-300 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:text-blue-500">
              <Mail size={24} />
              <Link  href=''  className="text-sm md:text-base lg:text-md  hover:text-blue-500">info@ebookwritingstudio.com</Link>
            </div>
            </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-20 items-start left-20 w-full bg-white shadow-lg p-5 flex flex-col gap-4 md:hidden">
          <Link href='/' onClick={toggleMenu}>About Us</Link>
          <Link href='/' onClick={toggleMenu}>Contact Us</Link>
          <Link href='/' onClick={toggleMenu}>Services</Link>
          <Link href='/' onClick={toggleMenu}>Blogs</Link>

          <div className="flex items-center gap-2 text-sm">
            <FaWhatsapp className="text-lg" />
            <span>+1 234 5678901</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CiMail className="text-lg" />
            <span>info@ebookwritingstudio.com</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
