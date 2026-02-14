import { useState } from 'react';
import { Dashboard } from './pages/Dashboard';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <div className={theme}>
      <div className={`${theme === 'dark' ? 'bg-background-dark text-slate-100' : 'bg-background-light text-slate-900'} min-h-screen transition-colors duration-300`}>
        <Dashboard theme={theme} />
        
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="fixed bottom-8 left-8 z-50 p-3 bg-primary text-white rounded-full shadow-lg hover:scale-110 transition-transform"
          aria-label="Toggle theme"
        >
          <span className="material-symbols-outlined">
            {theme === 'light' ? 'dark_mode' : 'light_mode'}
          </span>
        </button>
      </div>
    </div>
  );
}

export default App;
