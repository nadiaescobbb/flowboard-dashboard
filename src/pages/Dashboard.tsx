import { useMemo } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { KPICard } from '../components/KPICard';
import { RevenueChart } from '../components/RevenueChart';
import { AcquisitionChart } from '../components/AcquisitionChart';
import { UserTable } from '../components/UserTable';
import { useTheme } from '../contexts/ThemeContext';
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

export const Dashboard = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  
  const kpiCards = useMemo(
    () => (isLight ? kpiCardsLight : kpiCardsDark),
    [isLight]
  );

  const users = useMemo(
    () => (isLight ? usersLight : usersDark),
    [isLight]
  );

  const channels = useMemo(
    () => (isLight ? acquisitionChannelsLight : acquisitionChannelsDark),
    [isLight]
  );

  const revenueData = useMemo(
    () => (isLight ? revenueDataLight : revenueDataDark),
    [isLight]
  );

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <main className="flex-1" role="main" aria-label="Dashboard content">
        <Header />

        <div className="p-8 space-y-8">
          
          {/* KPI Cards Section */}
          <section aria-labelledby="kpi-section-title">
            <h2 id="kpi-section-title" className="sr-only">
              Key Performance Indicators
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {kpiCards.map((card) => (
                <KPICard key={card.id} card={card} />
              ))}
            </div>
          </section>

          {/* Charts Section */}
          <section aria-labelledby="charts-section-title">
            <h2 id="charts-section-title" className="sr-only">
              Analytics Charts
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <RevenueChart data={revenueData} />
              <AcquisitionChart channels={channels} />
            </div>
          </section>

          {/* Users Table Section */}
          <section aria-labelledby="users-section-title">
            <h2 id="users-section-title" className="sr-only">
              Recent Users
            </h2>
            <UserTable users={users} />
          </section>
          
        </div>
      </main>
    </div>
  );
};