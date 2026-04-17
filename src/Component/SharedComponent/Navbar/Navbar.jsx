import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { Home, Clock, LineChart, Menu, X } from 'lucide-react';

const Navbar = () => {
  // মেনু ওপেন বা ক্লোজ স্টেট ট্র্যাক করার জন্য
  const [isOpen, setIsOpen] = useState(false);

  // বারবার একই ক্লাস না লিখে একটি ভেরিয়েবলে ক্লাসগুলো রাখা হলো
  const navLinkClass = ({ isActive }) =>
    `btn min-h-0 h-10 w-full md:w-auto justify-start md:justify-center rounded-md border-none flex items-center gap-2 px-4 normal-case text-base transition-colors ${
      isActive
        ? 'bg-[#275345] hover:bg-[#1e4236] text-white shadow-sm'
        : 'bg-transparent text-slate-500 hover:text-[#275345] hover:bg-slate-50 shadow-none'
    }`;

  return (
    <div className="shadow-lg relative">
      <div className="w-11/12 mx-auto bg-white px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex-1">
          <NavLink to="/" className="text-2xl">
            <span className="font-bold text-slate-800">Keen</span>
            <span className="font-semibold text-[#275345]">Keeper</span>
          </NavLink>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 text-slate-600 hover:text-[#275345] focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-1">
          <NavLink to="/" end className={navLinkClass}>
            <Home size={17} />
            Home
          </NavLink>
          <NavLink to="/timeline" className={navLinkClass}>
            <Clock size={17} />
            Timeline
          </NavLink>
          <NavLink to="/stats" className={navLinkClass}>
            <LineChart size={17} />
            Stats
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 z-50">
          <div className="flex flex-col gap-1 px-4 py-3 w-11/12 mx-auto">
            <NavLink 
              to="/" 
              end 
              className={navLinkClass}
              onClick={() => setIsOpen(false)} // ক্লিক করার পর মেনু বন্ধ হয়ে যাবে
            >
              <Home size={17} />
              Home
            </NavLink>
            <NavLink 
              to="/timeline" 
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              <Clock size={17} />
              Timeline
            </NavLink>
            <NavLink 
              to="/stats" 
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              <LineChart size={17} />
              Stats
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;