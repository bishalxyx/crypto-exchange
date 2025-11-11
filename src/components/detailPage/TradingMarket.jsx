'use client'
import React, { useState } from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  TimeScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import { CandlestickController, CandlestickElement } from 'chartjs-chart-financial';
import { Chart } from 'react-chartjs-2';

// ✅ Register required components
ChartJS.register(
  LinearScale,
  CategoryScale,
  TimeScale,
  BarElement,
  Tooltip,
  Legend,
  CandlestickController,
  CandlestickElement
);

export default function TradingMarketChart() {
  const [activeTime, setActiveTime] = useState('15m');

  const candleData = [
    { x: new Date('2022-04-22T01:00:00'), o: 61000, h: 61200, l: 60800, c: 61100 },
    { x: new Date('2022-04-22T02:00:00'), o: 61100, h: 61300, l: 61000, c: 61200 },
    { x: new Date('2022-04-22T03:00:00'), o: 61200, h: 61400, l: 61100, c: 61300 },
    { x: new Date('2022-04-22T04:00:00'), o: 61300, h: 61500, l: 61200, c: 61400 },
    { x: new Date('2022-04-22T05:00:00'), o: 61400, h: 61600, l: 61300, c: 61500 },
    { x: new Date('2022-04-22T06:00:00'), o: 61500, h: 61650, l: 61400, c: 61550 },
    { x: new Date('2022-04-22T07:00:00'), o: 61550, h: 61700, l: 61500, c: 61650 },
    { x: new Date('2022-04-22T08:00:00'), o: 61650, h: 61800, l: 61600, c: 61700 },
  ];

  const data = {
    datasets: [
      {
        label: 'BTC/USDT',
        data: candleData,
        type: 'candlestick',
        borderColor: '#000',
        color: {
          up: '#22c55e', // green
          down: '#ef4444', // red
          unchanged: '#9ca3af',
        },
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { mode: 'index', intersect: false },
    },
    scales: {
      x: {
        type: 'time', // ✅ important fix
        time: {
          unit: 'hour',
          displayFormats: { hour: 'HH:mm' },
        },
        grid: { color: '#F3F4F6' },
        ticks: { color: '#6B7280' },
      },
      y: {
        grid: { color: '#F3F4F6' },
        ticks: { color: '#6B7280' },
      },
    },
  };

  const times = ['1m', '5m', '15m', '4h', 'D', 'W', 'M', 'Y'];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Trading market</h2>
        <div className="flex items-center gap-2">
          {times.map((time) => (
            <button
              key={time}
              onClick={() => setActiveTime(time)}
              className={`text-sm px-3 py-1 rounded-md transition ${
                activeTime === time
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Info bar */}
      <div className="flex flex-wrap gap-4 text-xs text-gray-600 mb-3">
        <p>2022-04-22</p>
        <p>Open ≈ <span className="font-semibold text-gray-800">61047.27</span></p>
        <p>Close ≈ <span className="font-semibold text-gray-800">61053.90</span></p>
        <p>High ≈ <span className="font-semibold text-gray-800">61084.62</span></p>
        <p>Low ≈ <span className="font-semibold text-gray-800">61023.94</span></p>
        <p>Volume: <span className="font-semibold text-gray-800">0.098014</span></p>
      </div>

      {/* Chart */}
      <div className="h-[400px]">
        <Chart type="candlestick" data={data} options={options} />
      </div>
    </div>
  );
}
