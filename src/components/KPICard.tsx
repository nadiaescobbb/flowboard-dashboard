import { Icon } from '../../Icon';
import { KPICard as KPICardType } from '../types';

interface KPICardProps {
  card: KPICardType;
  theme: 'light' | 'dark';
}

export const KPICard = ({ card, theme }: KPICardProps) => {
  const isLight = theme === 'light';
  const isUp = card.trend === 'up';

  const SparklineSVG = () => {
    if (isLight) {
      const paths = {
        '1': 'M0 25 Q 10 5, 20 20 T 40 10 T 60 22 T 80 5 T 100 15',
        '2': 'M0 28 Q 20 15, 40 22 T 70 10 T 100 5',
        '3': 'M0 20 Q 25 25, 50 15 T 75 10 T 100 5',
        '4': 'M0 5 Q 30 15, 60 10 T 100 25',
      };
      const path = paths[card.id as keyof typeof paths];
      
      return (
        <svg className="w-full h-full overflow-visible" viewBox="0 0 100 30">
          <path
            d={path}
            fill="none"
            stroke={card.chartColor}
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      );
    }

    return (
      <svg className="w-full h-full" viewBox="0 0 100 40">
        <path
          d={`M0 ${card.chartData[0]} ${card.chartData.map((val, i) => `L ${(i + 1) * (100 / card.chartData.length)} ${val}`).join(' ')}`}
          fill="none"
          stroke={card.chartColor}
          strokeLinecap="round"
          strokeWidth="2"
        />
      </svg>
    );
  };

  if (isLight) {
    return (
      <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-4">
          <p className="text-sm font-medium text-slate-500">{card.label}</p>
          <span className={`flex items-center text-xs font-bold ${isUp ? 'text-emerald-600 bg-emerald-50' : 'text-rose-600 bg-rose-50'} px-2 py-1 rounded-full`}>
            <Icon name={isUp ? 'trending_up' : 'trending_down'} className="text-sm" /> {card.change}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-slate-900">{card.value}</h3>
        <div className="mt-4 h-12 w-full">
          <SparklineSVG />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface-dark border border-border-dark rounded-xl p-5 hover:border-primary/30 transition-all group">
      <div className="flex items-center justify-between mb-4">
        <p className="text-slate-400 text-sm font-medium">{card.label}</p>
        <Icon
          name={card.id === '4' ? 'shopping_cart' : card.id === '1' ? 'trending_up' : card.id === '2' ? 'group' : 'speed'}
          className={`${card.id === '4' ? 'text-rose-500' : 'text-primary'} !text-xl opacity-0 group-hover:opacity-100 transition-opacity`}
        />
      </div>
      <div className="flex items-end justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white tracking-tight">{card.value}</h3>
          <p className={`${isUp ? 'text-emerald-500' : 'text-rose-500'} text-xs font-semibold mt-1 flex items-center gap-1`}>
            <Icon name={isUp ? 'north' : 'south'} className="!text-xs" />
            {card.change}
          </p>
        </div>
        <div className="w-20 h-10">
          <SparklineSVG />
        </div>
      </div>
    </div>
  );
};
