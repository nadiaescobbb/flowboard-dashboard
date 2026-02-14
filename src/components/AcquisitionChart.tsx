import { AcquisitionChannel } from '../types';

interface AcquisitionChartProps {
  channels: AcquisitionChannel[];
  theme: 'light' | 'dark';
}

export const AcquisitionChart = ({ channels, theme }: AcquisitionChartProps) => {
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

  const labelClass = isLight
    ? 'text-text-secondary-light'
    : 'text-slate-400';

  const valueClass = isLight
    ? 'text-text-primary-light'
    : 'text-white';

  const progressBg = isLight
    ? 'bg-gray-200'
    : 'bg-white/5';

  const buttonClass = isLight
    ? 'bg-gray-100 border-border-light text-text-secondary-light hover:bg-gray-200'
    : 'bg-white/5 border-border-dark text-slate-300 hover:bg-white/10 hover:text-white';

  return (
    <div className={`rounded-xl p-6 border flex flex-col ${containerClass}`}>
      
      {/* Header */}
      <div className="mb-8">
        <h4 className={`font-semibold ${titleClass}`}>
          Acquisition Sources
        </h4>
        <p className={`text-xs mt-0.5 ${subtitleClass}`}>
          Top performing channels
        </p>
      </div>

      {/* Channels */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="space-y-6">
          {channels.map((channel) => (
            <div key={channel.name}>
              <div className="flex justify-between text-xs mb-2">
                <span className={`${labelClass}`}>
                  {channel.name}
                </span>
                <span className={`font-medium ${valueClass}`}>
                  {channel.percentage}%
                </span>
              </div>

              <div className={`h-2 w-full rounded-full overflow-hidden ${progressBg}`}>
                <div
                  className="h-full bg-primary rounded-full"
                  style={{
                    width: `${channel.percentage}%`,
                    opacity: channel.opacity,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <button
          className={`mt-8 w-full py-2 border rounded-lg text-sm font-medium transition-all ${buttonClass}`}
        >
          View Full Analytics
        </button>
      </div>
    </div>
  );
};
