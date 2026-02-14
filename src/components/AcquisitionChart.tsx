import { AcquisitionChannel } from '../types/index';

interface AcquisitionChartProps {
  channels: AcquisitionChannel[];
  theme: 'light' | 'dark';
}

export const AcquisitionChart = ({ channels, theme }: AcquisitionChartProps) => {
  const isLight = theme === 'light';

  if (isLight) {
    return (
      <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-900 mb-1">User acquisition</h3>
        <p className="text-sm text-slate-500 mb-8">Performance by channel</p>
        <div className="space-y-6">
          {channels.map((channel) => (
            <div key={channel.name} className="space-y-2">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-slate-700">{channel.name}</span>
                <span className="text-slate-900">{channel.percentage}%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
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
      </div>
    );
  }

  return (
    <div className="bg-surface-dark border border-border-dark rounded-xl p-6 flex flex-col">
      <div className="mb-8">
        <h4 className="text-white font-semibold">Acquisition Sources</h4>
        <p className="text-slate-500 text-xs mt-0.5">Top performing channels</p>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div className="space-y-6">
          {channels.map((channel) => (
            <div key={channel.name}>
              <div className="flex justify-between text-xs mb-2">
                <span className="text-slate-400">{channel.name}</span>
                <span className="text-white font-medium">{channel.percentage}%</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
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
        <button className="mt-8 w-full py-2 bg-white/5 border border-border-dark text-slate-300 rounded-lg text-sm font-medium hover:bg-white/10 hover:text-white transition-all">
          View Full Analytics
        </button>
      </div>
    </div>
  );
};