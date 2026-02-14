import { User } from '../types';
import { Icon } from './Icon';

interface UserTableProps {
  users: User[];
  theme: 'light' | 'dark';
}

export const UserTable = ({ users, theme }: UserTableProps) => {
  const isLight = theme === 'light';

  const containerClass = isLight
    ? 'bg-surface-light border-border-light'
    : 'bg-surface-dark border-border-dark';

  const titleClass = isLight
    ? 'text-text-primary-light'
    : 'text-white';

  const subtitleClass = isLight
    ? 'text-text-secondary-light'
    : 'text-text-secondary-dark';

  const tableHeadClass = isLight
    ? 'bg-gray-50 text-text-secondary-light'
    : 'bg-white/[0.02] text-slate-500';

  const rowHoverClass = isLight
    ? 'hover:bg-gray-50'
    : 'hover:bg-white/[0.02]';

  const textPrimary = isLight
    ? 'text-text-primary-light'
    : 'text-white';

  const textSecondary = isLight
    ? 'text-text-secondary-light'
    : 'text-slate-500';

  const dividerClass = isLight
    ? 'divide-border-light'
    : 'divide-border-dark';

  const getStatusColor = (status: User['status']): string => {
    const colors: Record<User['status'], string> = {
      Active: isLight
        ? 'bg-emerald-100 text-emerald-600'
        : 'bg-emerald-500/10 text-emerald-500',
      Trial: isLight
        ? 'bg-blue-100 text-primary'
        : 'bg-primary/10 text-primary',
      Cancelled: isLight
        ? 'bg-rose-100 text-rose-600'
        : 'bg-rose-500/10 text-rose-500',
      Away: isLight
        ? 'bg-amber-100 text-amber-600'
        : 'bg-amber-500/10 text-amber-500',
    };
    return colors[status];
  };

  return (
    <div className={`rounded-xl border overflow-hidden ${containerClass}`}>
      
      {/* Header */}
      <div className="p-6 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h4 className={`font-semibold ${titleClass}`}>
            Recent Users
          </h4>
          <p className={`text-xs mt-0.5 ${subtitleClass}`}>
            Latest users joined
          </p>
        </div>

        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
            isLight
              ? 'bg-primary text-white hover:bg-primary/90'
              : 'bg-primary text-white hover:bg-primary/90 shadow-[0_4px_10px_rgba(19,127,236,0.3)]'
          }`}
        >
          <Icon name="add" className="!text-sm" />
          Invite User
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className={tableHeadClass}>
            <tr>
              <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest">
                User Details
              </th>
              <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest">
                Status
              </th>
              <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest">
                Plan
              </th>
              <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest">
                Join Date
              </th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>

          <tbody className={`divide-y ${dividerClass}`}>
            {users.map((user) => (
              <tr
                key={user.id}
                className={`transition-colors group ${rowHoverClass}`}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="size-9 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                      {user.avatar ? (
                        <img
                          className="size-full object-cover"
                          src={user.avatar}
                          alt={user.name}
                        />
                      ) : (
                        <Icon name="person" className="text-slate-400 !text-lg" />
                      )}
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${textPrimary}`}>
                        {user.name}
                      </p>
                      <p className={`text-xs ${textSecondary}`}>
                        {user.email}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-2.5 py-1 text-[10px] font-bold rounded-full uppercase tracking-wider ${getStatusColor(
                      user.status
                    )}`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <span className={`text-sm ${textSecondary}`}>
                    {user.plan}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <span className={`text-sm ${textSecondary}`}>
                    {user.joinDate}
                  </span>
                </td>

                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-primary transition-colors">
                    <Icon name="more_horiz" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
