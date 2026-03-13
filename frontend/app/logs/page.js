"use client"

import Layout from "../../components/Layout"
import axios from "axios"
import { useEffect, useState } from "react"
import { Search, Filter, Download, Activity, CheckCircle, XCircle, Clock } from "lucide-react"

export default function Logs() {
  const [logs, setLogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get("https://taskloft.onrender.com/logs")
      .then(res => {
        setLogs(res.data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const getStatusStyle = (status) => {
    const s = status?.toLowerCase()
    if (s === 'success' || s === 'completed') return "bg-emerald-50 text-emerald-700 border-emerald-100"
    if (s === 'failed' || s === 'error') return "bg-red-50 text-red-700 border-red-100"
    return "bg-amber-50 text-amber-700 border-amber-100" // Pending/Running
  }

  return (
    <Layout>
      <div className="flex flex-col gap-6">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Activity className="text-indigo-600" size={24} />
              Agent Audit Logs
            </h1>
            <p className="text-slate-500 text-sm mt-1">Monitor all automated agent activities and system events.</p>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-2 text-slate-500 bg-white border border-slate-200 rounded-lg hover:bg-slate-50">
              <Download size={18} />
            </button>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="Search logs..." 
                className="pl-10 pr-4 py-2 text-sm border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 w-64 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Timestamp</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Agent</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Action Executed</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                [...Array(5)].map((_, i) => (
                  <tr key={i} className="animate-pulse">
                    <td colSpan="4" className="px-6 py-4"><div className="h-4 bg-slate-100 rounded w-full"></div></td>
                  </tr>
                ))
              ) : (
                logs.map((log, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-4 text-sm text-slate-500 font-mono">
                      {new Date(log.timestamp).toLocaleString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-slate-700">
                      {log.agent}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {log.action}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusStyle(log.status)}`}>
                        {log.status?.toLowerCase() === 'success' ? <CheckCircle size={12}/> : <Clock size={12}/>}
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          
          {/* Pagination Placeholder */}
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Showing {logs.length} results</span>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-white border border-slate-200 rounded hover:bg-slate-50 disabled:opacity-50">Previous</button>
              <button className="px-3 py-1 bg-white border border-slate-200 rounded hover:bg-slate-50 disabled:opacity-50">Next</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
