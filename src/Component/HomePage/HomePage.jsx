import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import StatsSection from '../StatsSection/StatsSection';
import FriendCard from './FriendCard';

const HomePage = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadFriends() {
      try {
        const res = await fetch('/friends.json');
        if (!res.ok) {
          if (!cancelled) setError('Could not load friends.json');
          return;
        }
        const data = await res.json();
        if (cancelled) return;
        if (Array.isArray(data)) {
          setFriends(data);
        } else {
          setFriends([]);
        }
      } catch (err) {
        if (!cancelled) {
          const msg = err && err.message ? err.message : 'Something went wrong';
          setError(msg);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadFriends();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-4">
        <span className="loading loading-spinner loading-lg text-[#275345]" />
        <p className="text-slate-500 text-sm">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-lg mx-auto px-4 py-16 text-center">
        <p className="text-red-600 font-medium mb-2">Error</p>
        <p className="text-slate-600 text-sm">{error}</p>
      </div>
    );
  }

  return (
    <div className="px-4 pb-16">
      <Header />
      <StatsSection friends={friends} />
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Your friends</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
