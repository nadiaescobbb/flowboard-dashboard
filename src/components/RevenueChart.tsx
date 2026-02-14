import { RevenueDataPoint } from '../types';

interface RevenueChartProps {
  data: RevenueDataPoint[];
  theme: 'light' | 'dark';
}

export const RevenueChart = ({ data, theme }: RevenueChartProps) => {
  const isLight = theme === 'light';

  const containerClass = isLight
    ? 'bg-surface-light border-border-light'
    : 'bg-surface-dark border-border-dark';

  const titleClass = isLight
    ? 'text-text-primary-light'
    : 'text-white';

  const subtitleClass = isLight
    ? 'text-text-secondary-light'
    : 'text-text-secondary-dark';

  const buttonInactive = isLight
    ? 'bg-gray-100 border-border-light text-text-secondary-light hover:bg-gray-200'
    : 'bg-white/5 border-border-dark text-slate-300 hover:bg-white/10';

  const buttonActive = 'bg-primary/20 border border-primary/40 text-primary';

  const monthClass = isLight
    ? 'text-text-secondary-light'
    : 'text-slate-600';

  return (
    <div className={`lg:col-span-2 rounded-xl p-6 border flex flex-col ${containerClass}`}>
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h4 className={`font-semibold ${titleClass}`}>
            Revenue Over Time
          </h4>
          <p className={`text-xs mt-0.5 ${subtitleClass}`}>
            Performance tracking
          </p>
        </div>

        <div className="flex gap-2">
          <button
            className={`px-3 py-1 rounded text-xs font-medium border transition-all ${buttonInactive}`}
          >
            Monthly
          </button>
          <button
            className={`px-3 py-1 rounded text-xs font-medium ${buttonActive}`}
          >
            Weekly
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="flex-1 min-h-[300px] relative">
        <svg
          className="w-full h-[300px]"
          viewBox="0 0 800 300"
          preserveAspectRatio="none"
        >
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

        {/* Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`border-b w-full ${
                isLight ? 'border-gray-200' : 'border-white/5'
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Months */}
      <div className="flex justify-between mt-4 px-2">
        {data.map((point) => (
          <span
            key={point.month}
            className={`text-[11px] font-bold ${monthClass}`}
          >
            {point.month}
          </span>
        ))}
      </div>
    </div>
  );
};
