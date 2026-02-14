import { Icon } from './Icon';

interface HeaderProps {
  theme: 'light' | 'dark';
}

export const Header = ({ theme }: HeaderProps) => {
  const isLight = theme === 'light';

  if (isLight) {
    return (
      <header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold text-slate-800">Overview</h2>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative w-80">
            <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
            <input
              type="text"
              placeholder="Search analytics..."
              className="w-full bg-slate-100 border-none rounded-lg py-2 pl-10 text-sm focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          <button className="relative p-1 text-slate-500 hover:text-primary transition-colors">
            <Icon name="notifications" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          <div className="flex items-center gap-3 pl-4 border-l border-slate-200 cursor-pointer group">
            <div className="text-right">
              <p className="text-sm font-semibold text-slate-900 leading-none">Alex Rivera</p>
              <p className="text-xs text-slate-500 mt-1">Admin Account</p>
            </div>
            <img
              className="w-9 h-9 rounded-full object-cover border border-slate-200 group-hover:border-primary transition-colors"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeQ7AUOIcRR95USkVxnXlbWpWw4EzS7X1HWHQT3xhi26mMQX3RkGBQr3sXCdWR4EMLXr_8LtyINVsinK6hgH5Q_jn6btajCYkhOf9ZbKnjetdmzT7p-j8PQwxhnA_mGElFTJtsuyc2KXf4hsXtQqcEqTD8FM3jfMGzf25SGn5yGgN9rU4t5a2syyYdzf4dw08WwwUJDQK1ePThTFfEI9m9SzgJgJuXUxUlawkFIiKwPzDBGhbGRmcxJtl62XQ1x0Y_CSjjVYpKrYU"
              alt="User avatar"
            />
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="h-16 flex items-center justify-between px-8 border-b border-border-dark glass-header sticky top-0 z-30">
      <div className="flex items-center gap-6">
        <h2 className="text-lg font-semibold text-white">Dashboard</h2>
        <div className="relative max-w-md hidden lg:block">
          <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 !text-xl" />
          <input
            type="text"
            placeholder="Search commands..."
            className="w-72 bg-white/5 border border-border-dark rounded-lg pl-10 pr-4 py-1.5 text-sm text-slate-300 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-lg hover:bg-white/5 text-slate-400 transition-colors relative">
          <Icon name="notifications" />
          <span className="absolute top-2 right-2.5 size-2 bg-primary rounded-full border-2 border-background-dark"></span>
        </button>

        <div className="h-8 w-px bg-border-dark mx-1"></div>

        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-white leading-none">Alex Rivera</p>
            <p className="text-[11px] text-slate-500 mt-1">Admin Account</p>
          </div>
          <div
            className="size-9 rounded-full bg-center bg-cover border border-border-dark group-hover:border-primary/50 transition-all"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgooc7HJ90bNh5i07bE2Ma_LnoCzc5sPD1c8O5xfKB20xi3Oozr2tWSt8aSu-0I6PVxGSZLj5T_adkCHP_2VHJkUwNqYuOGi6_q8tKkeJc4tTqdx7J1y7u3BwiQ1UkEUME2HCQHJJnhT1PtttaA02EhDQSFnkogTtb4uMFeU_wmRqexQCRWSN7d7KVQMbfUkVQZAx1E3Y-jn9w9oudGTJ60f5rhUxrXjWRwm7hLofUzwYxZ-2N1my8ooau-KkUUIDHpgExJqP4rfM")`,
            }}
          ></div>
        </div>
      </div>
    </header>
  );
};
