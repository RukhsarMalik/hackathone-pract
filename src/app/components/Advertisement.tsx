"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Advertisement = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Timer logic for 5 days
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 6); 

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-[1170px] h-full md:h-[500px] bg-black mx-auto flex flex-col md:flex-row items-center justify-between text-white px-8 py-6 rounded-lg">
      {/* Left Section: Text and Timer */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start mb-6 md:mb-0">
        <h4 className="text-[#00FF66] text-lg font-semibold mb-2">Category</h4>
        <h2 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[60px] font-bold mb-6">
          Enhance Your Music Experience
        </h2>

        {/* Timer */}
        <div className="flex flex-wrap md:flex-nowrap items-center gap-4 mb-6 justify-center md:justify-start">
          {["days", "hours", "minutes", "seconds"].map((label, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-[60px] h-[60px] bg-white text-black rounded-full mb-4 md:mb-0"
            >
              <span className="text-xl font-semibold">
                {timeLeft[label as keyof typeof timeLeft]}
              </span>
              <span className="text-sm capitalize">{label}</span>
            </div>
          ))}
        </div>

        {/* Buy Now Button */}
        <button className="px-8 py-4 bg-[#00FF66] text-white text-lg rounded-lg hover:bg-green-700 transition duration-200">
          Buy Now
        </button>
      </div>

      {/* Right Section: Image */}
      <div className="w-full md:w-1/2 h-full flex justify-center items-center">
        <Image
          src="/music.png"
          alt="Music Player"
          width={400}
          height={400}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default Advertisement;
