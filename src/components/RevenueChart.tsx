import { RevenueDataPoint } from '../types';

interface RevenueChartProps {
  data: RevenueDataPoint[];
  theme: 'light' | 'dark';
}

export const RevenueChart = ({ data, theme }: RevenueChartProps) => {
  const isLight = theme === 'light';

  if (isLight) {
    return (
      <div className="lg:col-span-2 bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="font-bold text-slate-900">Revenue over time</h3>
            <p className="text-sm text-slate-500">Monthly overview of subscription revenue</p>
          </div>
          <select className="text-sm border-slate-200 rounded-lg bg-slate-50">
            <option>Last 12 months</option>
            <option>Last 6 months</option>
          </select>
        </div>
        <div className="h-64 relative">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 600 200">
            <defs>
              <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#137fec" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#137fec" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 160 Q 50 140, 100 150 T 200 110 T 300 130 T 400 60 T 500 80 T 600 30 V 200 H 0 Z"
              fill="url(#chartGradient)"
            />
            <path
              d="M0 160 Q 50 140, 100 150 T 200 110 T 300 130 T 400 60 T 500 80 T 600 30"
              fill="none"
              stroke="#137fec"
              strokeWidth="3"
            />
            <circle cx="400" cy="60" r="4" fill="white" stroke="#137fec" strokeWidth="2" />
          </svg>
          <div className="flex justify-between mt-4 text-xs font-medium text-slate-400">
            {data.map((point) => (
              <span key={point.month}>{point.month}</span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="xl:col-span-2 bg-surface-dark border border-border-dark rounded-xl p-6 flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h4 className="text-white font-semibold">Revenue Over Time</h4>
          <p className="text-slate-500 text-xs mt-0.5">Performance tracking from the last 30 days</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-white/5 border border-border-dark text-slate-300 px-3 py-1 rounded text-xs font-medium hover:bg-white/10 transition-all">
            Monthly
          </button>
          <button className="bg-primary/20 border border-primary/40 text-primary px-3 py-1 rounded text-xs font-medium transition-all">
            Weekly
          </button>
        </div>
      </div>
      <div className="flex-1 min-h-[300px] relative">
        <svg className="w-full h-[300px] chart-glow" viewBox="0 0 800 300" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#137fec" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#137fec" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 250 C 100 240, 150 100, 200 120 S 300 260, 400 180 S 550 50, 600 80 S 750 200, 800 150 V 300 H 0 Z"
            fill="url(#chartGradient)"
          />
          <path
            d="M0 250 C 100 240, 150 100, 200 120 S 300 260, 400 180 S 550 50, 600 80 S 750 200, 800 150"
            fill="none"
            stroke="#137fec"
            strokeLinecap="round"
            strokeWidth="3"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="border-b border-white/5 w-full h-0"></div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-4 px-2">
        {data.map((point) => (
          <span key={point.month} className="text-slate-600 text-[11px] font-bold">
            {point.month}
          </span>
        ))}
      </div>
    </div>
  );
};
