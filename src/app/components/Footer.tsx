import React from 'react'
import { VscSend } from "react-icons/vsc";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterLine } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import { LiaLinkedinIn } from "react-icons/lia";
import Image from 'next/image';

export const Footer = () => {
  return (
    <div className='w-full  md:h-[440px] bg-black  text-white flex py-[20px] flex-col items-center justify-between' >
        <div className='flex lg:w-[1170px] lg:h-[236px] py-[80px] gap-[87px] px-[50px] lg:flex-row flex-col '>
            {/* Exclusive Box */}
            <div className='flex flex-col w-[217px] h-[188px] gap-[20px]'>
              <div className='flex flex-col w-[206px] h-[124px] gap-[24px]'>
                  <h1 className='font-bold text-[24px]'>
                    Exclusive
                  </h1>
                  <h2 className='text-[20px] w-[101px] h-[28px] '>
                    Subscribe
                  </h2>
                  <h3 className='w-[206px] h-[24px] text-[12px]'>
                    Get 10% OFF your first order
                  </h3>
              </div>
              <div className='flex bg-black flex-row w-[217px] h-[48px] border-r-[4px] border-[1.5px] pl-[16px] items-center gap-[8px] rounded-lg'>
                <input
                  className='w-[130px] h-[24px] bg-black text-white text-[16px] placeholder-opacity-40 placeholder-white focus:outline-none'
                  type="text"
                  placeholder='Enter Your Email'
                />
                <button className='flex items-center justify-center text-white'>
                  <VscSend />
                </button>
              </div>
            </div>

            {/* Support Box */}
            <div className='flex flex-col gap-[24px] leading-[24px] w-[175px] h-[180px]'>
              <h2 className='text-[20px]'>
                Support
              </h2>
              <div className='flex flex-col gap-[24px]'>
                <p className='text-[14px]'>
                  111 Bijoy Sirani Dhaka, <br /> DH1515, Bangladesh
                </p>
                <p className='text-[16px]'>exclusive@gmail.com</p>
                <p className='text-[16px]'>+88015-88888-9999</p>
              </div>
            </div>


            {/* Account */}
            <div className='flex flex-col w-[123px] h-[236px] gap-[24px]'>
              <h2 className='w-[85px] h-[28px] text-[20px]'>
                Account
              </h2>
              
              <div className='flex flex-col gap-[16px] w-[123px] h-[184px] '>
                <p className='text-[14px]'>My Account</p>
                <p className='text-[14px]'>Login / Register</p>
                <p className='text-[14px]'>Cart</p>
                <p className='text-[14px]'>Wishlist</p>
                <p className='text-[14px]'>Shop</p>
              </div>
            </div>


          
          {/* Quick Link Box */}
          <div className='flex flex-col w-[109px] h-[196px] gap-[24px] '>

            <h2 className='w-[101px] h-[28px] text-[20px] leading-[24px] '>
              Quick Link</h2>
            <div className='flex flex-col w-[109px] h-[144px] gap-[16px] '>
              <p className='text-[14px] '>Privacy Policy</p>
              <p className='text-[14px] '>Terms Of Use</p>
              <p className='text-[14px] '>FAQ</p>
              <p className='text-[14px] '>Contact</p>
            </div>

          </div>

          {/* Download Box */}
          <div className='flex flex-col w-[198px] h-[210px] gap-[24px] '>
              <div className='flex flex-col w-[198px] h-[162px] gap-[24px] '>
                <h2 className='w-[148px] h-[28px] text-[20px] leading-[28px] ' >Download App</h2>
                
                <div className='flex flex-col w-[198px] h-[110px] gap-[8px] '>
                  <p className='w-[194px] h-[18px] text-[12px] leading-[18px] opacity-[70%] '>Save $3 with App New User Only </p>
                  <div className='flex flex-row w-[198px] h-[84px] gap-[8px] items-center '>
                    <Image className='w-[76px] h-[76px] border-[2.5px] pt-[2px] pl-[2px] cursor-pointer ' width={76} height={76} src="/Qrcode-1.png" alt="" />
                    <div className='flex flex-col w-[110px] h-[84px] gap-[4px] '>
                        <Image className='w-[110px] h-[40px] cursor-pointer ' width={110} height={40} src="/GooglePlay.png" alt="" />
                        <Image className='w-[110px] h-[40px] cursor-pointer ' width={110} height={40} src="/app-store.png" alt="" />
                    </div>
                  </div>
              </div>

              <div className='flex flex-row w-[168px] h-[24px] gap-[24px justify-between '>

                <FaFacebookF className='w-[24px] h-[24px] cursor-pointer ' />
                <RiTwitterLine className='w-[24px] h-[24px] cursor-pointer ' />
                <GrInstagram className='w-[24px] h-[24px] cursor-pointer ' />
                <LiaLinkedinIn className='w-[24px] h-[24px] cursor-pointer ' />

              </div>
              
            </div>
          </div>
        </div>
       
        <div className='w-full h-[40px] text-center py-[12px] border-t border-gray-800'>
          <p className='opacity-[40%] text-[12px]'>
            © Copyright Rimel 2022 All Right Reserved
          </p>
        </div>

    </div>
  )
}
