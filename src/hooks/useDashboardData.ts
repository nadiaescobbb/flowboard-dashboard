// hooks/useDashboardData.ts
import { useMemo } from 'react';
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

export const useDashboardData = () => {
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

  return {
    kpiCards,
    users,
    channels,
    revenueData,
  };
};