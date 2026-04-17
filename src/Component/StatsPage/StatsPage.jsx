import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useTimeline } from '../../context/TimelineContext.jsx';

const COLORS = {
  text: '#8b5cf6',  
  call: '#275345',  
  video: '#3ba55d', 
};

const StatsPage = () => {
  const { entries } = useTimeline();

  let countText = 0;
  let countCall = 0;
  let countVideo = 0;

  for (let i = 0; i < entries.length; i++) {
    const e = entries[i];
    if (e.type === 'text') countText++;
    else if (e.type === 'call') countCall++;
    else if (e.type === 'video') countVideo++;
  }

  const chartData = [
    { name: 'Call', value: countCall, key: 'call' },
    { name: 'Text', value: countText, key: 'text' },
    { name: 'Video', value: countVideo, key: 'video' }
  ].filter(item => item.value > 0);

  const legendPayload = [
    { value: 'Text', type: 'circle', color: COLORS.text, key: 'text' },
    { value: 'Call', type: 'circle', color: COLORS.call, key: 'call' },
    { value: 'Video', type: 'circle', color: COLORS.video, key: 'video' }
  ].filter(legendItem => chartData.some(dataItem => dataItem.key === legendItem.key));

  const total = entries.length;
  const hasData = chartData.length > 0;

  return (
    <div className='bg-slate-50'>
    <div className="max-w-4xl mx-auto px-4 py-10 md:py-14 ">
      <h1 className="text-3xl font-bold text-slate-800 mb-8">Friendship Analytics</h1>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-10 min-h-[400px]">
        {!hasData ? (
          <div className="flex flex-col items-center justify-center h-full text-center text-slate-500 max-w-md mx-auto pt-20">
            <p className="text-lg text-slate-700 mb-2">No data yet</p>
            <p className="text-sm">
              Use Call / Text / Video on a friend page first. Total logged: {total}
            </p>
          </div>
        ) : (
          <div className="w-full">
            <h2 className="text-[#275345] font-medium text-lg mb-8">By Interaction Type</h2>

            <div className="w-full h-[300px] max-w-md mx-auto">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={85}
                    outerRadius={115}
                    paddingAngle={5}
                    cornerRadius={10}
                    stroke="none"
                  >
                    {chartData.map((entry) => (
                      <Cell key={entry.key} fill={COLORS[entry.key]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend
                    payload={legendPayload}
                    verticalAlign="bottom"
                    align="center"
                    wrapperStyle={{ fontSize: '13px', color: '#64748b', paddingTop: '20px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </div>

    </div>
  );
};

export default StatsPage;