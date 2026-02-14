import { User } from '../types';
import { Icon } from './Icon';

interface UserTableProps {
  users: User[];
  theme: 'light' | 'dark';
}

export const UserTable = ({ users, theme }: UserTableProps) => {
  const isLight = theme === 'light';

  const getStatusColor = (status: User['status']) => {
    const colors = {
      Active: isLight
        ? 'bg-emerald-50 text-emerald-600'
        : 'bg-emerald-500/10 text-emerald-500',
      Trial: isLight
        ? 'bg-blue-50 text-primary'
        : 'bg-primary/10 text-primary',
      Cancelled: 'bg-rose-50 text-rose-600',
      Away: 'bg-amber-500/10 text-amber-500',
    };
    return colors[status];
  };

  if (isLight) {
    return (
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center">
          <h3 className="font-bold text-slate-900">Recent Users</h3>
          <button className="text-sm font-semibold text-primary hover:text-primary/80">
            View all users
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Plan
                </th>
                <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Join Date
                </th>
                <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full ${
                          user.id === '2' ? 'bg-blue-100' : 'bg-slate-200'
                        } flex items-center justify-center font-bold ${
                          user.id === '2' ? 'text-primary' : 'text-slate-600'
                        } text-xs`}
                      >
                        {user.initials}
                      </div>
                      <span className="text-sm font-semibold text-slate-900">
                        {user.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900 font-medium">
                    {user.plan}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs font-bold rounded-lg ${getStatusColor(
                        user.status
                      )}`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                    {user.joinDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="material-symbols-outlined text-slate-400 hover:text-slate-600">
                      more_vert
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface-dark border border-border-dark rounded-xl overflow-hidden">
      <div className="p-6 border-b border-border-dark flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h4 className="text-white font-semibold">Recent Activity</h4>
          <p className="text-slate-500 text-xs mt-0.5">
            Latest users joined in the last 24 hours
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-[0_4px_10px_rgba(19,127,236,0.3)]">
          <Icon name="add" className="!text-sm" />
          Invite User
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-white/[0.02]">
            <tr>
              <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                User Details
              </th>
              <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                Status
              </th>
              <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                Plan
              </th>
              <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                Last Activity
              </th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-dark">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-white/[0.02] transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="size-9 rounded-full bg-slate-800 flex items-center justify-center border border-border-dark overflow-hidden">
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
                      <p className="text-sm font-medium text-white">{user.name}</p>
                      <p className="text-xs text-slate-500">{user.email}</p>
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
                  <span className="text-sm text-slate-300">{user.plan}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-slate-500">{user.joinDate}</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-600 hover:text-white transition-colors">
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
