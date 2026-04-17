import React from 'react';

const StatsSection = ({ friends }) => {
  const totalFriends = friends.length;
  const onTrackCount = friends.filter((f) => f.status === 'on-track').length;
  const needAttentionCount = friends.filter(
    (f) => f.status === 'overdue' || f.status === 'almost due'
  ).length;
  const interactionsThisMonth = friends.filter((f) => f.days_since_contact <= 30).length;

  const stats = [
    { label: 'Total Friends', value: totalFriends },
    { label: 'On Track', value: onTrackCount },
    { label: 'Need Attention', value: needAttentionCount },
    { label: 'Interactions This Month', value: interactionsThisMonth },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto mb-16">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-xl py-8 px-6 border border-gray-200 shadow-sm flex flex-col items-center"
        >
          <span className="text-3xl font-bold text-[#275345] mb-2">{stat.value}</span>
          <span className="text-slate-500 text-sm">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
