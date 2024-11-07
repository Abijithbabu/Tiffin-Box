"use client"
import React, { useEffect } from 'react'

const Scrollbar = () => {
   useEffect(() => {
      const handleScroll = () => {
         const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
         const scrolledPercentage = (window.scrollY / scrollableHeight) * 100;
         const scrollbar = document.getElementById("scrollbar");
         if (scrollbar) {
            scrollbar.style.height = `${scrolledPercentage}%`;
         }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);
   return (
      <div className="fixed top-0 h-[50vh] transform -translate-y-1/2 bg-[rgba(114,109,109,0.35)] backdrop-blur-lg rounded-full">
         <div
            id="scrollbar"
            className="w-1 bg-yellow transition-all duration-300"
            style={{ height: '0%', minHeight: '40px' }}
         ></div>
      </div>
   )
}

export default Scrollbar