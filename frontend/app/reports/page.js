import Layout from "../../components/Layout"
import { BarChart3, TrendingUp, Calendar, ArrowUpRight, ArrowDownRight, Target } from "lucide-react"

export default function Reports() {
  const weeklyInsights = [
    { label: "Efficiency Gain", value: "12.4h", change: "+14%", positive: true },
    { label: "Success Rate", value: "98.2%", change: "+2.1%", positive: true },
    { label: "AI Response Time", value: "1.2s", change: "-0.4s", positive: true },
  ]

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        {/* Header with Date Picker UI */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
              <BarChart3 className="text-indigo-600" size={28} />
              Automation Reports
            </h1>
            <p className="text-slate-500 mt-1">Detailed analysis of agent productivity and ROI.</p>
          </div>
          <div className="flex items-center gap-3 bg-white border border-slate-200 p-1.5 rounded-lg shadow-sm">
            <button className="px-4 py-1.5 text-sm font-medium text-slate-600 bg-slate-50 rounded-md">Weekly</button>
            <button className="px-4 py-1.5 text-sm font-medium text-slate-400 hover:text-slate-600">Monthly</button>
            <div className="h-4 w-[1px] bg-slate-200 mx-1"></div>
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-600">
              <Calendar size={16} />
              March 2026
            </button>
          </div>
        </div>

        {/* Insight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {weeklyInsights.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
              <div className="flex items-end justify-between">
                <h3 className="text-3xl font-bold text-slate-900">{stat.value}</h3>
                <span className={`flex items-center text-xs font-bold px-2 py-1 rounded-full ${
                  stat.positive ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
                }`}>
                  {stat.positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ROI Summary */}
          <div className="bg-indigo-600 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <Target className="text-indigo-200" size={20} />
                <span className="text-sm font-semibold uppercase tracking-widest text-indigo-100">Weekly Achievement</span>
              </div>
              <h2 className="text-2xl font-semibold mb-4">
                Businesses saved <span className="text-emerald-400">12 hours</span> of manual work this week.
              </h2>
              <p className="text-indigo-100 leading-relaxed mb-6">
                Your automation workflows are performing 18% above the sector average. At this rate, you're on track to save 500+ hours annually.
              </p>
              <button className="bg-white text-indigo-600 px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-indigo-50 transition-colors">
                Download PDF Report
              </button>
            </div>
            {/* Decorative Background Element */}
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-indigo-500 rounded-full opacity-20"></div>
          </div>

          {/* Goal Progress */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Automation Goal Progress</h3>
            <div className="space-y-6">
              {[
                { name: "Task Completion", progress: 85 },
                { name: "Cost Reduction", progress: 62 },
                { name: "Agent Reliability", progress: 98 },
              ].map((goal) => (
                <div key={goal.name}>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-slate-600">{goal.name}</span>
                    <span className="text-slate-900">{goal.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-indigo-600 rounded-full transition-all duration-1000" 
                      style={{ width: `${goal.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}