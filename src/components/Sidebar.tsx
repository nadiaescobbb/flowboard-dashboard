import { Icon } from './Icon';

interface SidebarProps {
  theme: 'light' | 'dark';
}

export const Sidebar = ({ theme }: SidebarProps) => {
  const isLight = theme === 'light';

  const navItems = [
    { icon: 'dashboard', label: 'Dashboard', active: true },
    { icon: 'bar_chart', label: 'Analytics', active: false },
    { icon: isLight ? 'group' : 'description', label: isLight ? 'Users' : 'Reports', active: false },
    { icon: isLight ? 'payments' : 'group', label: isLight ? 'Revenue' : 'Team', active: false },
    { icon: 'settings', label: 'Settings', active: false, section: 'System' },
  ];

  if (isLight) {
    return (
      <aside className="w-64 border-r border-slate-200 bg-white flex flex-col fixed h-full z-20">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <Icon name="insights" className="text-white text-xl" />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900">FlowBoard</h1>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 py-4">Menu</div>
          {navItems.slice(0, 4).map((item) => (
            <a
              key={item.label}
              href="#"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                item.active
                  ? 'active-nav'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Icon name={item.icon} />
              <span className="font-medium">{item.label}</span>
            </a>
          ))}

          <div className="pt-8 text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 py-4">System</div>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <Icon name="settings" />
            <span className="font-medium">Settings</span>
          </a>
        </nav>

        <div className="p-4 border-t border-slate-100">
          <button className="flex items-center gap-3 px-3 py-2 w-full text-slate-500 hover:text-slate-800 transition-colors">
            <Icon name="side_navigation" />
            <span className="font-medium text-sm">Collapse Sidebar</span>
          </button>
        </div>
      </aside>
    );
  }

  return (
    <aside className="w-64 flex-shrink-0 flex flex-col border-r border-border-dark bg-surface-dark/50 hidden md:flex">
      <div className="p-6 flex items-center gap-3">
        <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-[0_0_15px_rgba(19,127,236,0.4)]">
          <Icon name="insights" className="!text-xl" />
        </div>
        <div>
          <h1 className="text-white text-lg font-bold leading-tight tracking-tight">FlowBoard</h1>
          <p className="text-slate-500 text-xs font-medium uppercase tracking-widest">Analytics</p>
        </div>
      </div>

      <nav className="flex-1 px-3 space-y-1 mt-4">
        {navItems.slice(0, 5).map((item) => (
          <a
            key={item.label}
            href="#"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group ${
              item.active
                ? 'sidebar-item-active'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Icon name={item.icon} className="!text-[22px]" />
            <span className="text-sm font-medium">{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="p-4 border-t border-border-dark space-y-1">
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white transition-all"
        >
          <Icon name="help" className="!text-[22px]" />
          <span className="text-sm font-medium">Support</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white transition-all"
        >
          <Icon name="account_circle" className="!text-[22px]" />
          <span className="text-sm font-medium">Account</span>
        </a>
      </div>
    </aside>
  );
};
