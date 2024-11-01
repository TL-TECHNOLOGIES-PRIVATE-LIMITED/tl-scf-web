import React from 'react'
import {motion} from 'framer-motion'
import CustomeButton from '../ui/CustomeButton'
function HeroSec() {
  return (
    <div className="relative md:h-screen h-[70vh] bg-cover bg-center bg-[#ede8f5] overflow-hidden" 
     style={{ backgroundImage: "url('/images/LandingPage/hero.jpg')" }} >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800" className="absolute">
  {/* Abstract Network Pattern (Top Right) */}
  <g opacity="0.15" fill="none" stroke="white" strokeWidth="1.5">
    <path d="M1200 100 L1300 150 L1400 100" />
    <path d="M1250 50 L1300 150 L1350 50" />
    <path d="M1300 150 L1300 250" />
    <circle cx="1300" cy="150" r="8" fill="white" />
    <circle cx="1200" cy="100" r="4" fill="white" />
    <circle cx="1400" cy="100" r="4" fill="white" />
    <circle cx="1250" cy="50" r="4" fill="white" />
    <circle cx="1350" cy="50" r="4" fill="white" />
    <circle cx="1300" cy="250" r="4" fill="white" />
  </g>

  {/* Rising Chart Pattern (Bottom Left) */}
  <g opacity="0.20" fill="none" stroke="white" strokeWidth="2">
    <path d="M50 600 C150 580, 200 500, 300 480 S450 450, 550 380" />
    <circle cx="150" cy="580" r="4" fill="white" />
    <circle cx="300" cy="480" r="4" fill="white" />
    <circle cx="450" cy="450" r="4" fill="white" />
    <circle cx="550" cy="380" r="4" fill="white" />
  </g>

  {/* Supply Chain Connection Lines (Middle) */}


  {/* Abstract Shapes (Bottom Right) */}
  <g opacity="0.10" fill="white">
    <path d="M1100 600 L1150 550 L1200 600 Z" />
    <path d="M1200 650 L1250 600 L1300 650 Z" />
    <path d="M1300 600 L1350 550 L1400 600 Z" />
  </g>

  {/* Floating Elements (Top Left) */}
  <g opacity="0.20" fill="white">
    <rect x="100" y="100" width="20" height="20" transform="rotate(45 110 110)" />
    <rect x="150" y="80" width="15" height="15" transform="rotate(45 157.5 87.5)" />
    <rect x="200" y="120" width="25" height="25" transform="rotate(45 212.5 132.5)" />
  </g>

  {/* Currency Symbols Pattern (Scattered) */}
 
</svg>
  {/* Background SVG Container */}
  <div className="absolute inset-0 pointer-events-none">
    {/* Insert the SVG here */}
  </div>
  
  <div className="absolute inset-0 bg-black opacity-30"></div>
  
  <div className="relative z-10 flex md:items-center max-w-7xl p-4 mx-auto md:justify-start items-end justify-end h-full">

    <div className="text-white w-full h-fit text-start flex flex-col  items-start justify-center mt-40 md:mt-20">
    <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8 mb-2">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className=" p-2 sm:p-6 rounded-lg sm:rounded-xl bg-primary  shadow-md sm:shadow-lg"
              >
                <h4 className="text-2xl sm:text-4xl font-bold text-title mb-1 sm:mb-2">$150B+</h4>
                <p className="text-gray-800 text-xs sm:text-base ">Trading Volume</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-title p-2 sm:p-6 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg"
              >
                <h4 className="text-xl sm:text-2xl md:text-4xl font-bold text-blue-100 mb-1 sm:mb-2">100+</h4>
                <p className="text-gray-100 text-xs sm:text-base">Global Programs</p>
              </motion.div>
            </div>
      <h1 className=" main-heading  ">
      Transforming Supply Chain Finance <br /> with Expertise and Innovation
      </h1>
      <p className="tagline">
        Integrating Funding, Technology, and Best Practices for Supply Chain Finance Success
      </p>
      <CustomeButton title={"Get start"}/>
    </div>
  </div>
</div>
  )
}

export default HeroSec