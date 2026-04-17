import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import toast from 'react-hot-toast';
import { Phone, MessageSquare, Video, Pencil, BellOff, Archive, Trash2 } from 'lucide-react';
import { useTimeline } from '../../context/TimelineContext.jsx';
import ErrorUi from '../ErrorUi/ErrorUi';

const statusStyles = {
  overdue: 'bg-red-500 text-white',
  'almost due': 'bg-amber-100 text-amber-900',
  'on-track': 'bg-emerald-100 text-emerald-800',
};

function formatDate(iso) {
  if (!iso) return '-';
  try {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(iso).toLocaleDateString('en-US', options);
  } catch {
    return iso;
  }
}

const FriendDetail = () => {
  const { id } = useParams();
  const { addEntry } = useTimeline();
  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch('/friends.json')
      .then((res) => {
        if (!res.ok) throw new Error('bad');
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        const found = data.find((f) => String(f.id) === String(id));
        if (found) {
          setFriend(found);
        } else {
          setNotFound(true);
        }
      })
      .catch(() => {
        if (!cancelled) setNotFound(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, [id]);

  function handleCheckIn(type) {
    if (!friend) return;
    addEntry(friend.id, friend.name, type);
    const labels = { call: 'Call', text: 'Text', video: 'Video' };
    toast.success(`${labels[type]} with ${friend.name} saved`);
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <span className="loading loading-spinner loading-lg text-[#275345]" />
      </div>
    );
  }

  if (notFound || !friend) {
    return <ErrorUi compact errorCode="404" title="Friend not found" message="No friend with this id." />;
  }

  return (
    <div className='bg-[#f9fafb]'>
    <div className="max-w-6xl mx-auto px-4 py-10 ">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Profile Card */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 ring-2 ring-gray-100">
              <img src={friend.picture} alt={friend.name} className="w-full h-full object-cover" />
            </div>
            <h1 className="text-xl font-bold text-slate-800">{friend.name}</h1>
            
            <div className="mt-2 flex flex-col items-center gap-2">
              <span className={`px-4 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${statusStyles[friend.status] || 'bg-slate-100'}`}>
                {friend.status}
              </span>
              <span className="px-3 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">
                {friend.tags?.[0] || 'Family'}
              </span>
            </div>

            <p className="italic text-slate-500 text-sm mt-4 px-4 leading-relaxed">
              "{friend.bio || 'Former colleague, great mentor'}"
            </p>
            <p className="text-slate-400 text-xs mt-2">Preferred: {friend.preferred_method || 'email'}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2">
            <button className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-gray-200 rounded-xl text-slate-700 font-medium hover:bg-gray-50 transition-colors">
              <BellOff size={18} /> Snooze 2 Weeks
            </button>
            <button className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-gray-200 rounded-xl text-slate-700 font-medium hover:bg-gray-50 transition-colors">
              <Archive size={18} /> Archive
            </button>
            <button className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-gray-200 rounded-xl text-red-500 font-medium hover:bg-red-50 transition-colors">
              <Trash2 size={18} /> Delete
            </button>
          </div>
        </div>

        {/* Right Column: Stats and Actions */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          {/* Top Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
              <p className="text-4xl font-bold text-[#1e3a31]">{friend.days_since_contact}</p>
              <p className="text-slate-500 text-sm mt-1">Days Since Contact</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
              <p className="text-4xl font-bold text-[#1e3a31]">{friend.goal}</p>
              <p className="text-slate-500 text-sm mt-1">Goal (Days)</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
              <p className="text-2xl font-bold text-[#1e3a31]">{formatDate(friend.next_due_date)}</p>
              <p className="text-slate-500 text-sm mt-1">Next Due</p>
            </div>
          </div>

          {/* Relationship Goal Box */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-[#1e3a31]">Relationship Goal</h2>
              <button className="px-4 py-1.5 bg-gray-50 text-slate-600 rounded-lg text-sm font-semibold border border-gray-200 hover:bg-gray-100 flex items-center gap-1">
                Edit
              </button>
            </div>
            <p className="text-slate-600">
              Connect every <span className="font-bold text-slate-900">{friend.goal} days</span>
            </p>
          </div>

          {/* Quick Check-In Box */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-lg font-bold text-[#1e3a31] mb-6">Quick Check-In</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button onClick={() => handleCheckIn('call')} className="flex flex-col items-center justify-center gap-3 p-6 bg-slate-50 hover:bg-slate-100 rounded-2xl transition-all group">
                <Phone className="text-slate-700 group-hover:scale-110 transition-transform" size={24} />
                <span className="font-semibold text-slate-700">Call</span>
              </button>
              <button onClick={() => handleCheckIn('text')} className="flex flex-col items-center justify-center gap-3 p-6 bg-slate-50 hover:bg-slate-100 rounded-2xl transition-all group">
                <MessageSquare className="text-slate-700 group-hover:scale-110 transition-transform" size={24} />
                <span className="font-semibold text-slate-700">Text</span>
              </button>
              <button onClick={() => handleCheckIn('video')} className="flex flex-col items-center justify-center gap-3 p-6 bg-slate-50 hover:bg-slate-100 rounded-2xl transition-all group">
                <Video className="text-slate-700 group-hover:scale-110 transition-transform" size={24} />
                <span className="font-semibold text-slate-700">Video</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>

    </div>
  );
};

export default FriendDetail;