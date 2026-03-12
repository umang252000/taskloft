"use client"

import Layout from "../components/Layout"
import axios from "axios"
import { useEffect, useState } from "react"
import { CheckCircle2, Clock, DollarSign, TrendingUp, RefreshCcw } from "lucide-react"

export default function Dashboard() {
  const [metrics, setMetrics] = useState({
    total_tasks: 0,
    hours_saved: 0,
    cost_saved: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios.get("https://8000--019ce2a4-10b7-7096-800f-dccef1e95e43.us-east-1-01.gitpod.dev/metrics")
      .then(res => {
        setMetrics(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.error("Failed to fetch metrics", err)
        setLoading(false)
      })
  }, [])

  const cards = [
    { 
      label: "Tasks Automated", 
      value: metrics.total_tasks, 
      icon: <CheckCircle2 className="text-emerald-500" />, 
      color: "bg-emerald-50",
      trend: "+12% vs last month" 
    },
    { 
      label: "Hours Saved", 
      value: `${metrics.hours_saved}h`, 
      icon: <Clock className="text-indigo-500" />, 
      color: "bg-indigo-50",
      trend: "+5.4h today" 
    },
    { 
      label: "Cost Saved", 
      value: `$${metrics.cost_saved.toLocaleString()}`, 
      icon: <DollarSign className="text-amber-500" />, 
      color: "bg-amber-50",
      trend: "Top efficiency" 
    },
  ]

  return (
    <Layout>
      {/* Header Section */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Executive Overview</h1>
          <p className="text-slate-500 text-sm mt-1">Real-time performance metrics for your AI agents.</p>
        </div>
        <button 
          onClick={() => window.location.reload()}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
        >
          <RefreshCcw size={16} />
          Refresh Data
        </button>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className={`p-3 rounded-lg ${card.color}`}>
                {card.icon}
              </div>
              <div className="flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                <TrendingUp size={12} />
                {card.trend}
              </div>
            </div>
            
            <div className="mt-4">
              <h2 className="text-sm font-medium text-slate-500 uppercase tracking-wider">{card.label}</h2>
              <div className="flex items-baseline gap-2 mt-1">
                {loading ? (
                  <div className="h-9 w-24 bg-slate-100 animate-pulse rounded"></div>
                ) : (
                  <p className="text-3xl font-bold text-slate-900">{card.value}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder for future Charts Section */}
      <div className="mt-8 p-12 border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center text-slate-400">
        <p className="font-medium">Workflow Activity Chart</p>
        <p className="text-sm">Connect your database to visualize automation trends.</p>
      </div>
    </Layout>
  )
}