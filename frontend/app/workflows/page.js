"use client"

import Layout from "../../components/Layout"
import axios from "axios"
import { useState } from "react"
import { 
  ShoppingBag, 
  Search, 
  ArrowRight, 
  Loader2, 
  PackageCheck, 
  ExternalLink,
  ShieldCheck,
  Info
} from "lucide-react"

export default function Workflows() {
  const [product, setProduct] = useState("")
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const runProcurement = async () => {
    if (!product) return;
    setLoading(true);
    setResult(null);

    try {
      const res = await axios.post(
        "https://8000--019ce2a4-10b7-7096-800f-dccef1e95e43.us-east-1-01.gitpod.dev/run-procurement",
        null,
        { params: { product } }
      )
      setResult(res.data)
    } catch (error) {
      console.error(error)
      setResult({ error: "Agent connection timeout. Please retry." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
            <ShoppingBag className="text-indigo-600" size={32} />
            Procurement Agent
          </h1>
          <p className="text-slate-500 mt-2 max-w-2xl">
            Automate your supply chain research. Our agent will browse verified vendors, 
            compare pricing, and find the best shipping lead times for your hardware needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Input Panel */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                Target Product
              </label>
              <div className="relative group">
                <Search className="absolute left-3 top-3.5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={18} />
                <input
                  type="text"
                  placeholder="e.g. NVIDIA RTX 4090 Bulk (5 units)"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-slate-800"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && runProcurement()}
                />
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <button
                  onClick={runProcurement}
                  disabled={loading || !product}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold transition-all ${
                    loading || !product
                    ? "bg-slate-100 text-slate-400"
                    : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-100 active:scale-95"
                  }`}
                >
                  {loading ? (
                    <><Loader2 className="animate-spin" size={20} /> Deploying Agent...</>
                  ) : (
                    <>Run Procurement <ArrowRight size={18} /></>
                  )}
                </button>
                <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1">
                  <ShieldCheck size={12} /> Encrypted vendor communication enabled
                </p>
              </div>
            </div>

            {/* Hint Box */}
            <div className="mt-6 p-4 bg-indigo-50 rounded-xl border border-indigo-100 flex gap-3">
              <Info className="text-indigo-600 shrink-0" size={20} />
              <p className="text-xs text-indigo-700 leading-relaxed">
                <strong>Pro-Tip:</strong> Be specific about quantity and region to help the agent find accurate tax and shipping estimates.
              </p>
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-7">
            {loading ? (
              <div className="bg-white border border-slate-200 rounded-2xl p-12 flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin"></div>
                  <ShoppingBag className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-800">Agent is Scraping Vendors</h3>
                <p className="text-sm text-slate-500 mt-1 max-w-xs">Connecting to global supplier APIs and comparing stock availability...</p>
              </div>
            ) : result ? (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <div className={`bg-white rounded-2xl border ${result.error ? 'border-red-200' : 'border-slate-200'} shadow-sm overflow-hidden`}>
                  <div className={`px-6 py-4 flex items-center justify-between border-b ${result.error ? 'bg-red-50' : 'bg-slate-50'}`}>
                    <span className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wider">
                      <PackageCheck size={18} className={result.error ? "text-red-500" : "text-emerald-500"} />
                      {result.error ? "Execution Failed" : "Procurement Summary"}
                    </span>
                    {!result.error && (
                      <button className="text-indigo-600 text-xs font-bold hover:underline flex items-center gap-1">
                        Export Report <ExternalLink size={12} />
                      </button>
                    )}
                  </div>

                  <div className="p-6">
                    {result.error ? (
                      <p className="text-red-600 font-medium text-sm">{result.error}</p>
                    ) : (
                      <div className="space-y-4">
                        <p className="text-sm text-slate-500">
                          Product: <span className="font-semibold text-slate-800">{result.product}</span>
                        </p>

                        <p className="text-sm text-slate-500">
                          Execution Time: <span className="font-semibold text-slate-800">{result.timestamp}</span>
                        </p>

                        <div>
                          <h3 className="font-bold text-slate-700 mb-2">Steps Executed</h3>
                          <ul className="space-y-2">
                            {result?.result?.steps_executed?.map((step, index) => (
                              <li key={index} className="flex items-center gap-2 text-sm text-slate-700">
                                <PackageCheck size={16} className="text-emerald-500" />
                                {step}
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>
                    )}
                  </div>

                </div>
              </div>
            ) : (
              <div className="h-full border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center p-12 text-slate-400">
                <div className="bg-slate-50 p-4 rounded-full mb-4">
                  <PackageCheck size={40} className="text-slate-200" />
                </div>
                <p className="font-medium">No Active Procurement</p>
                <p className="text-sm">Initiate a request on the left to start agent execution.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}