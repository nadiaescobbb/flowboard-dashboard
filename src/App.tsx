import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Dashboard } from './pages/Dashboard';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Icon } from './components/Icon';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
});

function AppContent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`${
        theme === 'dark' ? 'bg-background-dark text-slate-100' : 'bg-background-light text-slate-900'
      } min-h-screen transition-colors duration-300`}
    >
      <Dashboard />

      <button
        onClick={toggleTheme}
        className="fixed bottom-8 left-8 z-50 p-3 bg-primary text-white rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        <Icon name={theme === 'light' ? 'dark_mode' : 'light_mode'} />
      </button>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <AppContent />
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;