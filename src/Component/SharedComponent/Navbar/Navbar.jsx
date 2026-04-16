import React, { useState } from 'react';
import { Home, Clock, LineChart } from 'lucide-react';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = [
    { id: 'Home', label: 'Home', Icon: Home },
    { id: 'Timeline', label: 'Timeline', Icon: Clock },
    { id: 'Stats', label: 'Stats', Icon: LineChart },
  ];

  return (
    <div className="navbar bg-white w-full px-6 py-3 border-b border-gray-100 shadow-sm">
      {/* Logo Section */}
      <div className="flex-1">
        <a className="text-2xl cursor-pointer">
          <span className="font-extrabold text-slate-800">Keen</span>
          <span className="font-semibold text-[#275345]">Keeper</span>
        </a>
      </div>

      {/* Navigation Links */}
      <div className="flex-none hidden sm:flex gap-2">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`btn min-h-0 h-10 rounded-md border-none flex items-center gap-2 px-4 normal-case text-base transition-colors ${
                isActive
                  ? 'bg-[#275345] hover:bg-[#1e4236] text-white shadow-sm'
                  : 'bg-transparent text-slate-500 hover:text-[#275345] hover:bg-slate-50 shadow-none'
              }`}
            >
              <item.Icon size={18} strokeWidth={2} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;