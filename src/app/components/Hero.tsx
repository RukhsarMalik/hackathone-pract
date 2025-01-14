import Image from 'next/image';
import React from 'react';
import { IoMdArrowForward } from "react-icons/io";

export const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row px-5 md:px-[135px] py-8 h-full">
       
        <div className="hidden lg:block py-5 w-[217px] h-full border-r border-gray-300">
            <ul className="space-y-3 text-gray-700 font-sans xl:pl-2 mt-4">
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
        </div>

        <div className="py-8 md:px-20 px-5 w-full flex justify-center items-center">
            {/* Right Section: Image and Advertisement */}
            <div className="md:flex items-center bg-black shadow-md p-4 text-white mx-auto md:w-[892px] md:h-[344px] w-full h-auto flex-col md:flex-row justify-center">
                {/* Advertisement Text */}
                <div className="flex flex-col md:ml-[64px] mb-10 md:mb-0 text-start w-full md:w-1/2">
                    {/* Title Section */}
                    <div className="flex items-center mb-5 gap-6">
                        <Image src="/apple.png" width={48} height={48} alt="iPhone 14" className="w-[48px] h-[48px]" />
                        <p className="text-lg md:text-xl">iPhone 14 Series</p>
                    </div>

                    {/* Heading */}
                    <div className="mb-5">
                        <h1 className="text-3xl md:text-[48px] leading-8 md:leading-[60px] font-bold">
                            Up To 10% <br /> Off Voucher
                        </h1>
                    </div>

                    {/* Shop Now */}
                    <div className="flex flex-row items-center gap-2 cursor-pointer hover:text-blue-500">
                        <p className="underline text-base md:text-lg">Shop Now</p>
                        <IoMdArrowForward className="text-base md:text-lg" />
                    </div>
                </div>

                {/* Product Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <Image
                        src="/hero.png"
                        alt="Featured Product"
                        width={400}
                        height={300}
                        className="rounded-lg shadow-lg w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"
                    />
                </div>
            </div>
        </div>
    </div>
  );
}
