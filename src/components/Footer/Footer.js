import React from "react";

const Footer = () => (
  <footer className="bg-slate-300 text-black py-10 px-5 md:px-20">
    <div className="flex flex-col md:flex-row justify-between">
      {/* Left Section */}
      <div>
        <p className="text-sm">&copy; 2025 Md Al Mamun</p>
        <button 
          type="button" 
          className="text-sm hover:underline focus:outline-none"
        >
          Privacy Policy
        </button>
      </div>
      
      {/* Middle Section */}
      <div className="text-left mt-5 md:mt-0">
        <p className="text-sm font-medium mb-3">md.al.mamun.26@dartmouth.edu</p>
        <div className="space-y-2">
          <div className="flex items-center">
            <span className="mr-2">→</span>
            <button type="button" className="text-sm hover:underline">Instagram</button>
          </div>
          <div className="flex items-center">
            <span className="mr-2">→</span>
            <button type="button" className="text-sm hover:underline">TikTok</button>
          </div>
          <div className="flex items-center">
            <span className="mr-2">→</span>
            <button type="button" className="text-sm hover:underline">LinkedIn</button>
          </div>
          <div className="flex items-center">
            <span className="mr-2">→</span>
            <button type="button" className="text-sm hover:underline">Behance</button>
          </div>
          <div className="flex items-center">
            <span className="mr-2">→</span>
            <button type="button" className="text-sm hover:underline">Clutch</button>
          </div>
        </div>
      </div>
      
      {/* Right Section */}
      <div className="text-right mt-5 md:mt-0">
        <p className="text-sm font-medium">Join our newsletter to stay up to date</p>
        <div className="mt-2 bg-white rounded-full p-2 border border-black w-fit">
          <input
            type="email"
            placeholder="EMAIL ADDRESS"
            className="px-4 py-2 rounded-l-full border border-black focus:outline-none"
          />
          <button 
            type="button" 
            className="bg-black text-white px-4 py-2 rounded-full hover:opacity-80 focus:outline-none"
          >
            Submit
          </button>
        </div>
        <div className="flex items-center mt-2">
          <label htmlFor="newsletter-agreement" className="text-sm flex items-center">
            <input 
              type="checkbox" 
              id="newsletter-agreement"
              className="mr-2" 
            />
            <span>I agree to receive marketing communications</span>
          </label>
        </div>
      </div>
    </div>
    
    {/* Large Text Footer Branding */}
    <div className="text-[10rem] font-extrabold mt-10 text-center leading-none uppercase">Md Al Mamun.</div>
  </footer>
);

export default Footer;
