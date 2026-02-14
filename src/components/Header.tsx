import { Icon } from './Icon';

interface HeaderProps {
  theme: 'light' | 'dark';
}

export const Header = ({ theme }: HeaderProps) => {
  const isLight = theme === 'light';

  const bgClass = isLight
    ? 'bg-surface-light border-border-light'
    : 'bg-surface-dark/50 border-border-dark';

  const titleClass = isLight
    ? 'text-text-primary-light'
    : 'text-text-primary-dark';

  const inputClass = isLight
    ? 'bg-gray-100 text-text-primary-light placeholder:text-text-secondary-light border-border-light'
    : 'bg-white/5 text-slate-300 placeholder:text-slate-600 border-border-dark';

  const notificationBorder = isLight
    ? 'border-background-light'
    : 'border-background-dark';

  const dividerClass = isLight
    ? 'bg-border-light'
    : 'bg-border-dark';

  const secondaryText = isLight
    ? 'text-text-secondary-light'
    : 'text-text-secondary-dark';

  return (
    <header className={`h-16 flex items-center justify-between px-8 border-b sticky top-0 z-30 ${bgClass}`}>
      
      {/* Left */}
      <div className="flex items-center gap-6">
        <h2 className={`text-lg font-semibold ${titleClass}`}>
          Dashboard
        </h2>

        <div className="relative max-w-md hidden lg:block">
          <Icon
            name="search"
            className={`absolute left-3 top-1/2 -translate-y-1/2 ${secondaryText} !text-xl`}
          />
          <input
            type="text"
            placeholder="Search..."
            className={`w-72 rounded-lg pl-10 pr-4 py-1.5 text-sm border focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all ${inputClass}`}
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <button className={`p-2 rounded-lg transition-colors relative ${secondaryText} hover:text-primary`}>
          <Icon name="notifications" />
          <span className={`absolute top-2 right-2.5 size-2 bg-primary rounded-full border-2 ${notificationBorder}`}></span>
        </button>

        <div className={`h-8 w-px mx-1 ${dividerClass}`}></div>

        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className={`text-sm font-medium leading-none ${titleClass}`}>
              Alex Rivera
            </p>
            <p className={`text-[11px] mt-1 ${secondaryText}`}>
              Admin Account
            </p>
          </div>

          <div
            className={`size-9 rounded-full bg-center bg-cover border transition-all ${
              isLight ? 'border-border-light' : 'border-border-dark'
            } group-hover:border-primary/50`}
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgooc7HJ90bNh5i07bE2Ma_LnoCzc5sPD1c8O5xfKB20xi3Oozr2tWSt8aSu-0I6PVxGSZLj5T_adkCHP_2VHJkUwNqYuOGi6_q8tKkeJc4tTqdx7J1y7u3BwiQ1UkEUME2HCQHJJnhT1PtttaA02EhDQSFnkogTtb4uMFeU_wmRqexQCRWSN7d7KVQMbfUkVQZAx1E3Y-jn9w9oudGTJ60f5rhUxrXjWRwm7hLofUzwYxZ-2N1my8ooau-KkUUIDHpgExJqP4rfM")`,
            }}
          ></div>
        </div>
      </div>
    </header>
  );
};
