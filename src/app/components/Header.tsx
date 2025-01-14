import React from 'react';
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  return (
    <div>
      {/* Top Border */}
      <div className="flex flex-wrap bg-black h-auto md:justify-around justify-center items-center md:px-[135px] py-2">
        <p className="text-white text-center font-sans font-light text-xs sm:text-sm">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
          <span className="underline mx-2 sm:mx-4 font-sans font-bold">ShopNow</span>
        </p>
        <select className="bg-black px-2 py-1 text-white text-xs sm:text-sm mt-2 sm:mt-0">
          <option value="">English</option>
          <option value="">Japanese</option>
          <option value="">French</option>
        </select>
      </div>
       {/* Header Section */}
        <header className='flex flex-wrap justify-between items-center md:px-[135px] py-4 md:py-6 bg-white shadow-md sticky top-0 z-50'>
             {/* Left Section (Exclusive) */}
        <div className='text-shadow text-lg md:text-xl font-semibold'>
          Exclusive
        </div>

        {/* Navigation Menu (Hidden on mobile) */}
        <ul className='hidden md:flex space-x-10 items-center'>
          <Link href="/"> <li className='text-shadow text-lg hover:text-blue-600 cursor-pointer'>Home</li> </Link>
          
          <li className='text-lg text-shadow hover:text-blue-600 cursor-pointer'>Contact</li>
          <li className='text-lg text-shadow hover:text-blue-600 cursor-pointer'>About</li>
          <li className='text-lg text-shadow hover:text-blue-600 cursor-pointer'>Sign Up</li>
        </ul>

        {/* Search Bar and Icons */}
        <div className='relative flex items-center w-48 md:w-80'>
          {/* Search Input */}
          
          <input
            type="text"
            placeholder="What are you looking for?"
            className="pl-10 pr-4 py-2 md:w-full w-40 bg-gray-100 border rounded-lg text-xs sm:text-sm outline-none"
          />
          {/* Search Icon */}
          <CiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black text-sm sm:text-lg" />
          {/* Heart Icon */}
          <CiHeart className='absolute top-4 right-4 md:top-1/2 md:right-12 transform -translate-y-1/2 text-black text-sm sm:text-lg' />
          {/* Cart Icon */}
          <IoCartOutline className='absolute top-4 right-0 md:top-1/2 md:right-3 transform -translate-y-1/2 text-black text-sm sm:text-lg' />
        </div>

        {/* Mobile Menu (Hidden on medium and larger screens) */}
      <Sheet>
        <SheetTrigger className="md:hidden" aria-label="Open mobile menu">
          <Menu />
        </SheetTrigger>
        <SheetContent aria-label="Mobile navigation">
          <SheetTitle className="text-lg font-semibold text-yellow-blue mb-5">Menu</SheetTitle>
          <ul className="flex flex-col gap-1 list-none">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          <li className="hover:text-blue-600 cursor-pointer">Login</li>
          <li className="hover:text-blue-600 cursor-pointer">Women&apos;s Fashion</li>
          <li className="hover:text-blue-600 cursor-pointer">Men&apos;s Fashion</li>
          <li className="hover:text-blue-600 cursor-pointer">Electronics</li>
          <li className="hover:text-blue-600 cursor-pointer">Home &amp; Lifestyle</li>
          <li className="hover:text-blue-600 cursor-pointer">Medicine</li>
          <li className="hover:text-blue-600 cursor-pointer">Sports &amp; Outdoor</li>
          <li className="hover:text-blue-600 cursor-pointer">Baby&apos;s &amp; Toys</li>
          <li className="hover:text-blue-600 cursor-pointer">Groceries &amp; Pets</li>
          <li className="hover:text-blue-600 cursor-pointer">Health &amp; Beauty</li>
          </ul>
        </SheetContent>
      </Sheet>
        </header>
    

      
    </div>
  );
};

export default Header;
