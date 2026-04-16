import React from 'react';

const StatsSection = ({ friends }) => {
  // ডাইনামিক ক্যালকুলেশন
  const totalFriends = friends.length;
  const onTrackCount = friends.filter(f => f.status === 'on-track').length;
  // overdue বা almost due হলে need attention এ কাউন্ট হবে
  const needAttentionCount = friends.filter(f => f.status === 'overdue' || f.status === 'almost due').length;
  
  // গত ৩০ দিনে যাদের সাথে কন্টাক্ট হয়েছে তাদের সংখ্যা বের করা হলো
  const interactionsThisMonth = friends.filter(f => f.days_since_contact <= 30).length;

  const stats = [
    { label: 'Total Friends', value: totalFriends },
    { label: 'On Track', value: onTrackCount },
    { label: 'Need Attention', value: needAttentionCount },
    { label: 'Interactions This Month', value: interactionsThisMonth },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl mx-auto mb-16">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="bg-white rounded-xl py-8 px-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-gray-100 flex flex-col items-center justify-center"
        >
          <span className="text-3xl font-extrabold text-[#275345] mb-2">
            {stat.value}
          </span>
          <span className="text-slate-500 text-sm font-medium">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;