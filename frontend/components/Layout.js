import { LayoutDashboard, GitBranch, Sparkles, ScrollText, BarChart3, Settings, LogOut } from 'lucide-react';

export default function Layout({ children }) {
  const navItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, href: '/' },
    { name: 'Workflows', icon: <GitBranch size={20} />, href: '/workflows' },
    { name: 'AI Builder', icon: <Sparkles size={20} />, href: '/builder' },
    { name: 'Agent Logs', icon: <ScrollText size={20} />, href: '/logs' },
    { name: 'Reports', icon: <BarChart3 size={20} />, href: '/reports' },
  ];

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-sans antialiased text-slate-900">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
        {/* Logo Area */}
        <div className="p-6">
          <div className="flex items-center gap-2 px-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-800">TaskLoft</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-600 rounded-lg transition-all duration-200 hover:bg-slate-50 hover:text-indigo-600 group"
            >
              <span className="text-slate-400 group-hover:text-indigo-600 transition-colors">
                {item.icon}
              </span>
              {item.name}
            </a>
          ))}
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-slate-100">
          <button className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium text-slate-500 hover:text-red-600 transition-colors">
            <Settings size={20} />
            Settings
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header Bar */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Overview</h2>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300"></div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}