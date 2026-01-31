import React from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, Cell } from 'recharts';
import { TIMELINE_DATA } from '../constants';

const TimelineChart: React.FC = () => {
  const data = TIMELINE_DATA.map((item, index) => ({
    x: item.year,
    y: 1, // All on same line
    z: 100, // Size
    name: item.label,
    desc: item.description,
    type: item.type,
    index: index
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-stone-50 border border-stone-200 p-4 shadow-xl rounded-md max-w-xs">
          <p className="font-display text-brand-blue font-bold text-lg">{data.name}</p>
          <p className="font-sans text-xs text-stone-500 mb-2">{data.x} AD</p>
          <p className="font-serif text-stone-800 text-sm">{data.desc}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-[300px] md:h-[400px] bg-white rounded-lg shadow-sm border border-stone-200 p-4">
      <h3 className="text-center font-display text-2xl text-stone-800 mb-6">Historical Timeline: 1st - 4th Century</h3>
      <ResponsiveContainer width="100%" height="80%">
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <XAxis 
            type="number" 
            dataKey="x" 
            name="year" 
            unit=" AD" 
            domain={[0, 400]} 
            tick={{ fontSize: 12, fill: '#78716c' }}
            tickCount={8}
          />
          <YAxis type="number" dataKey="y" name="value" height={10} width={0} tick={false} axisLine={false} />
          <ZAxis type="number" dataKey="z" range={[100, 400]} />
          <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="Events" data={data} fill="#8884d8">
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.type === 'Event' ? '#b45309' : '#1e3a8a'} 
              />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
      <div className="flex justify-center gap-6 text-sm text-stone-600 mt-2">
        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-brand-blue rounded-full"></div> Texts</div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-brand-gold rounded-full"></div> Events</div>
      </div>
    </div>
  );
};

export default TimelineChart;