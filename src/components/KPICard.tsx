import { Icon } from './Icon';
import { KPICard as KPICardType } from '../types';

interface KPICardProps {
  card: KPICardType;
  theme: 'light' | 'dark';
}

export const KPICard = ({ card, theme }: KPICardProps) => {
  const isLight = theme === 'light';
  const isUp = card.trend === 'up';

  const bgClass = isLight
    ? 'bg-surface-light border-border-light'
    : 'bg-surface-dark border-border-dark';

  const labelClass = isLight
    ? 'text-text-secondary-light'
    : 'text-text-secondary-dark';

  const valueClass = isLight
    ? 'text-text-primary-light'
    : 'text-white';

  const trendColor = isUp
    ? 'text-emerald-500'
    : 'text-rose-500';

  const SparklineSVG = () => (
    <svg className="w-full h-full" viewBox="0 0 100 40">
      <path
        d={`M0 ${card.chartData[0]} ${card.chartData
          .map(
            (val, i) =>
              `L ${(i + 1) * (100 / card.chartData.length)} ${val}`
          )
          .join(' ')}`}
        fill="none"
        stroke={card.chartColor}
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );

  return (
    <div className={`rounded-xl p-5 border transition-all group hover:border-primary/30 ${bgClass}`}>
      
      <div className="flex items-center justify-between mb-4">
        <p className={`text-sm font-medium ${labelClass}`}>
          {card.label}
        </p>

        <Icon
          name={
            card.id === '4'
              ? 'shopping_cart'
              : card.id === '1'
              ? 'trending_up'
              : card.id === '2'
              ? 'group'
              : 'speed'
          }
          className="text-primary !text-xl opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </div>

      <div className="flex items-end justify-between">
        <div>
          <h3 className={`text-2xl font-bold tracking-tight ${valueClass}`}>
            {card.value}
          </h3>

          <p className={`${trendColor} text-xs font-semibold mt-1 flex items-center gap-1`}>
            <Icon
              name={isUp ? 'north' : 'south'}
              className="!text-xs"
            />
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
