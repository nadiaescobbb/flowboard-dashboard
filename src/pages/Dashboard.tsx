import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { KPICard } from '../components/KPICard';
import { RevenueChart } from '../components/RevenueChart';
import { AcquisitionChart } from '../components/AcquisitionChart';
import { UserTable } from '../components/UserTable';
import {
  kpiCardsLight,
  kpiCardsDark,
  usersLight,
  usersDark,
  acquisitionChannelsLight,
  acquisitionChannelsDark,
  revenueDataLight,
  revenueDataDark,
} from '../data/mockData';

interface DashboardProps {
  theme: 'light' | 'dark';
}

export const Dashboard = ({ theme }: DashboardProps) => {
  const isLight = theme === 'light';

  const kpiCards = isLight ? kpiCardsLight : kpiCardsDark;
  const users = isLight ? usersLight : usersDark;
  const channels = isLight ? acquisitionChannelsLight : acquisitionChannelsDark;
  const revenueData = isLight ? revenueDataLight : revenueDataDark;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar theme={theme} />

      {/* Main Content */}
      <main className="flex-1">
        <Header theme={theme} />

        <div className="p-8">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {kpiCards.map((card) => (
              <KPICard key={card.id} card={card} theme={theme} />
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <RevenueChart data={revenueData} theme={theme} />
            <AcquisitionChart channels={channels} theme={theme} />
          </div>

          {/* Users Table */}
          <UserTable users={users} theme={theme} />
        </div>
      </main>
    </div>
  );
};
