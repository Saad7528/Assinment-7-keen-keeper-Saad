import React from 'react';
import { Plus } from 'lucide-react';

const Header = () => {
  return (
    <div className="text-center flex flex-col items-center mb-10 mt-6">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
        Friends to keep close in your life
      </h1>
      <p className="text-slate-600 text-sm mb-6 max-w-lg">
        Keep track of people you care about and stay in touch.
      </p>

      <button type="button" className="btn bg-[#275345] text-white border-0 gap-2">
        <Plus size={18} />
        Add a Friend
      </button>
    </div>
  );
};

export default Header;