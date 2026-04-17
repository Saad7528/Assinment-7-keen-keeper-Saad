import React, { useState } from 'react';
import { Handshake, MessageCircle, Video, Phone } from 'lucide-react';
import { useTimeline } from '../../context/TimelineContext.jsx';

const TimeLine = () => {
  const { entries } = useTimeline();
  const [filter, setFilter] = useState('all');

  function getDisplayedEntries() {
    let list = [];
    if (filter === 'all') {
      list = entries.slice();
    } else {
      list = entries.filter((entry) => entry.type === filter);
    }

    list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return list;
  }

  const displayed = getDisplayedEntries();

  const formatDate = (dateString) => {
    try {
      const options = { month: 'long', day: 'numeric', year: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
    } catch {
      return dateString;
    }
  };

  return (
    <div className='bg-[#f8fafc]'>
    <div className="max-w-6xl mx-auto px-4 py-10 ">
      <h1 className="text-3xl font-bold text-slate-800 mb-6">Timeline</h1>

      <div className="mb-8">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-500 bg-white focus:outline-none focus:ring-1 focus:ring-gray-300 w-48 shadow-sm cursor-pointer"
        >
          <option value="all">Filter timeline</option>
          <option value="meetup">Meetup</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
          <option value="call">Call</option>
        </select>
      </div>

      {displayed.length === 0 ? (
        <p className="text-gray-500 text-center py-10 border border-dashed rounded-lg bg-white">
          {entries.length === 0 ? 'Nothing here yet. Add from a friend page.' : 'No matches.'}
        </p>
      ) : (
        <ul className="space-y-3">
          {displayed.map((entry) => {
            let IconComponent = Handshake; 
            let typeName = entry.type ? entry.type.charAt(0).toUpperCase() + entry.type.slice(1) : 'Event';
            let iconColor = "text-gray-500";
            
            if (entry.type === 'call') {
              IconComponent = Phone;
              iconColor = "text-slate-700";
            } else if (entry.type === 'text') {
              IconComponent = MessageCircle;
              iconColor = "text-gray-400";
            } else if (entry.type === 'video') {
              IconComponent = Video;
              iconColor = "text-slate-600";
            } else if (entry.type === 'meetup') {
              IconComponent = Handshake; 
              iconColor = "text-amber-500";
            }

            const when = formatDate(entry.date);
            const personName = entry.friendName || entry.title?.split('with')[1]?.trim() || "Someone";

            return (
              <li key={entry.id} className="bg-white border border-gray-100 rounded-lg shadow-sm p-4 flex items-center gap-4">
                <div>
                  <IconComponent size={24} className={iconColor} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-slate-700 text-sm">
                    <span className="font-bold text-slate-800">{typeName}</span> with {personName}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{when}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>

    </div>
  );
};

export default TimeLine;