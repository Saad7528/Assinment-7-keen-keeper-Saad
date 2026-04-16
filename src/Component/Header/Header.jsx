import React from 'react';
import { Plus } from 'lucide-react';

const Header = () => {
  return (
    <div className="text-center flex flex-col items-center mb-10 mt-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4 tracking-tight">
        Friends to keep close in your life
      </h1>
      <p className="text-slate-500 text-sm md:text-base mb-8 max-w-[550px] leading-relaxed">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
      </p>
      
      <button className="btn bg-[#275345] hover:bg-[#1e4236] text-white border-none flex items-center gap-2 px-6 min-h-0 h-11 rounded-md shadow-sm transition-all">
        <Plus size={18} strokeWidth={2.5} />
        <span className="font-medium normal-case text-base">Add a Friend</span>
      </button>
    </div>
  );
};

export default Header;