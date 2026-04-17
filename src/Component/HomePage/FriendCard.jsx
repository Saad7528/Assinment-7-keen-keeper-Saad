import React from 'react';
import { Link } from 'react-router';

const statusStyles = {
  overdue: 'bg-[#ef4444] text-white', 
  'almost due': 'bg-[#f5a623] text-white', 
  'on-track': 'bg-[#2b4c3b] text-white', 
};

const FriendCard = ({ friend }) => {
  
  let statusClass = statusStyles[friend.status?.toLowerCase()];
  if (!statusClass) {
    statusClass = 'bg-slate-100 text-slate-800';
  }

  return (
    <Link
      to={'/friends/' + friend.id}
      className="flex flex-col items-center text-center bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      
      <div className="w-20 h-20 rounded-full overflow-hidden mb-4 bg-slate-100">
        <img src={friend.picture} alt={friend.name} className="w-full h-full object-cover" />
      </div>

      
      <h3 className="font-bold text-slate-800 text-lg mb-1">{friend.name}</h3>
      
      
      <p className="text-slate-400 text-xs mb-4">
        {friend.days_since_contact}d ago
      </p>

      
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {friend.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-full bg-[#d1f5df] text-[#2b6b4a]"
          >
            {tag}
          </span>
        ))}
      </div>

      
      <div className={`inline-block px-4 py-1 rounded-full text-xs font-semibold capitalize ${statusClass}`}>
        {friend.status}
      </div>
    </Link>
  );
};

export default FriendCard;