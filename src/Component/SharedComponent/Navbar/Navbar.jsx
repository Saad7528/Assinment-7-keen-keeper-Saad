import React from 'react';
import { NavLink } from 'react-router';
import { Home, Clock, LineChart } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='shadow-lg'>
    <div className="navbar w-11/12 mx-auto bg-white px-4 py-3 flex-wrap gap-2">
      <div className="flex-1">
        <NavLink to="/" className="text-2xl">
          <span className="font-bold text-slate-800">Keen</span>
          <span className="font-semibold text-[#275345]">Keeper</span>
        </NavLink>
      </div>

      <div className="flex flex-wrap gap-1">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `btn min-h-0 h-10 rounded-md border-none flex items-center gap-2 px-4 normal-case text-base transition-colors ${
                isActive
                  ? 'bg-[#275345] hover:bg-[#1e4236] text-white shadow-sm'
                  : 'bg-transparent text-slate-500 hover:text-[#275345] hover:bg-slate-50 shadow-none'
              }`
          }
        >
          <Home size={17} />
          Home
        </NavLink>
        <NavLink
          to="/timeline"
          className={({ isActive }) =>
            `btn min-h-0 h-10 rounded-md border-none flex items-center gap-2 px-4 normal-case text-base transition-colors ${
                isActive
                  ? 'bg-[#275345] hover:bg-[#1e4236] text-white shadow-sm'
                  : 'bg-transparent text-slate-500 hover:text-[#275345] hover:bg-slate-50 shadow-none'
              }`
          }
        >
          <Clock size={17} />
          Timeline
        </NavLink>
        <NavLink
          to="/stats"
          className={({ isActive }) =>
            `btn min-h-0 h-10 rounded-md border-none flex items-center gap-2 px-4 normal-case text-base transition-colors ${
                isActive
                  ? 'bg-[#275345] hover:bg-[#1e4236] text-white shadow-sm'
                  : 'bg-transparent text-slate-500 hover:text-[#275345] hover:bg-slate-50 shadow-none'
              }`
          }
        >
          <LineChart size={17} />
          Stats
        </NavLink>
      </div>
    </div>

    </div>
  );
};

export default Navbar;
