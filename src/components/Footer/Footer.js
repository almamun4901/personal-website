import React from "react";

const Footer = () => (
  <footer className="bg-slate-300 text-black py-8 md:py-10 px-4 sm:px-5 md:px-10 lg:px-20">
    <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4">
      {/* Left Section */}
      <div className="order-1 md:order-none">
        <p className="text-xs sm:text-sm">&copy; 2025 Md Al Mamun</p>
        <button 
          type="button" 
          className="text-xs sm:text-sm hover:underline focus:outline-none mt-1"
        >
          Privacy Policy
        </button>
      </div>
      
      {/* Middle Section */}
      <div className="order-3 md:order-none text-left md:mt-0">
        <p className="text-xs sm:text-sm md:text-base font-medium mb-2 sm:mb-3">md.al.mamun.26@dartmouth.edu</p>
        <div className="space-y-1 sm:space-y-2">
          {['Instagram', 'TikTok', 'LinkedIn', 'Behance', 'Clutch'].map((item) => (
            <div key={item} className="flex items-center">
              <span className="mr-2 text-sm">→</span>
              <button type="button" className="text-xs sm:text-sm hover:underline">{item}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    {/* Large Text Footer Branding */}
    <div className="text-[4rem] sm:text-[4rem] md:text-[6rem] lg:text-[10rem] font-extrabold mt-6 md:mt-10 text-center leading-none uppercase">
      Md Al Mamun.
    </div>
  </footer>
);

export default Footer;
