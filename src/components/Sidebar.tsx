import { Icon } from './Icon';

interface SidebarProps {
  theme: 'light' | 'dark';
}

export const Sidebar = ({ theme }: SidebarProps) => {
  const isLight = theme === 'light';

  const navItems = [
    { icon: 'dashboard', label: 'Dashboard', active: true },
    { icon: 'bar_chart', label: 'Analytics', active: false },
    { icon: 'group', label: 'Users', active: false },
    { icon: 'payments', label: 'Revenue', active: false },
    { icon: 'settings', label: 'Settings', active: false },
  ];

  const baseClasses =
    'hidden md:flex w-64 flex-shrink-0 flex-col border-r';

  const themeClasses = isLight
    ? 'bg-surface-light border-border-light'
    : 'bg-surface-dark/50 border-border-dark';

  const titleClass = isLight
    ? 'text-text-primary-light'
    : 'text-text-primary-dark';

  const subtitleClass = isLight
    ? 'text-text-secondary-light'
    : 'text-text-secondary-dark';

  const itemBase =
    'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all';

  const itemInactive = isLight
    ? 'text-text-secondary-light hover:bg-gray-100'
    : 'text-text-secondary-dark hover:text-white hover:bg-white/5';

  const itemActive = isLight
    ? 'bg-gray-100 text-primary'
    : 'sidebar-item-active';

  const footerBorder = isLight
    ? 'border-border-light'
    : 'border-border-dark';

  const footerText = isLight
    ? 'text-text-secondary-light hover:text-text-primary-light'
    : 'text-text-secondary-dark hover:text-white';

  return (
    <aside className={`${baseClasses} ${themeClasses}`}>
      {/* Header */}
      <div className="p-6 flex items-center gap-3">
        <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-[0_0_15px_rgba(19,127,236,0.4)]">
          <Icon name="insights" className="!text-xl" />
        </div>
        <div>
          <h1 className={`text-lg font-bold leading-tight tracking-tight ${titleClass}`}>
            FlowBoard
          </h1>
          <p className={`text-xs font-medium uppercase tracking-widest ${subtitleClass}`}>
            Analytics
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-1 mt-4">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`${itemBase} ${
              item.active ? itemActive : itemInactive
            }`}
          >
            <Icon name={item.icon} className="!text-[22px]" />
            <span className="text-sm font-medium">{item.label}</span>
          </a>
        ))}
      </nav>

      {/* Footer */}
      <div className={`p-4 border-t space-y-1 ${footerBorder}`}>
        <a
          href="#"
          className={`${itemBase} ${footerText}`}
        >
          <Icon name="help" className="!text-[22px]" />
          <span className="text-sm font-medium">Support</span>
        </a>
      </div>
    </aside>
  );
};
