"use client"

import Layout from "../../components/Layout"
import axios from "axios"
import { useState } from "react"
import { Sparkles, Play, Loader2, Terminal, CheckCircle, AlertCircle } from "lucide-react"

export default function Builder() {
  const [task, setTask] = useState("")
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const runWorkflow = async () => {
    if (!task) return;
    setLoading(true);
    setResult(null);
    try {
      const res = await axios.post(
        "https://taskloft.onrender.com/run-workflow",
        { task: task }
      )
      setResult(res.data)
    } catch (error) {
      setResult({ error: "Failed to execute workflow. Please check your connection." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="text-indigo-600" size={24} />
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
              AI Workflow Builder
            </h1>
          </div>
          <p className="text-slate-500">
            Describe your objective in plain English. TaskLoft agents will decompose the request and execute it.
          </p>
        </div>

        {/* Input Card */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-1 bg-slate-50 border-b border-slate-200 flex items-center px-4 py-2 gap-2 text-xs font-semibold text-slate-400 uppercase tracking-widest">
            <Terminal size={14} />
            Prompt Input
          </div>

          <div className="p-6">
            <textarea
              className="w-full h-40 p-4 text-slate-700 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none placeholder:text-slate-400"
              placeholder="Example: Find the cheapest 65W USB-C laptop charger on Amazon and add it to a comparison list..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />

            <div className="mt-4 flex justify-end">
              <button
                onClick={runWorkflow}
                disabled={loading || !task}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all shadow-md ${
                  loading || !task 
                  ? "bg-slate-100 text-slate-400 cursor-not-allowed shadow-none" 
                  : "bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95"
                }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Agent is Thinking...
                  </>
                ) : (
                  <>
                    <Play size={18} fill="currentColor" />
                    Run Workflow
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Result Section */}
        {result && (
          <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

            <div className={`rounded-xl border p-6 ${result.error ? 'bg-red-50 border-red-200' : 'bg-white border-slate-200 shadow-sm'}`}>

              <div className="flex items-center gap-3 mb-4">
                {result.error ? (
                  <AlertCircle className="text-red-500" size={24} />
                ) : (
                  <CheckCircle className="text-emerald-500" size={24} />
                )}

                <h2 className="text-lg font-bold text-slate-800">
                  {result.error ? "Execution Error" : "Workflow Execution Result"}
                </h2>
              </div>

              {result.error ? (

                <p className="text-red-600 font-medium">{result.error}</p>

              ) : (

                <div className="space-y-5">

                  <div>
                    <p className="text-sm text-slate-500">
                      Task:
                    </p>
                    <p className="font-semibold text-slate-800">
                      {result.task}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500 mb-2">
                      Workflow Steps
                    </p>

                    <ul className="space-y-2">
                      {result.steps
                        ?.split("\n")
                        .filter(step => step.trim() !== "")
                        .map((step, index) => (
                          <li key={index} className="flex items-center gap-2 text-slate-700 text-sm">
                            <CheckCircle size={16} className="text-emerald-500"/>
                            {step.trim()}
                          </li>
                        ))}
                    </ul>
                  </div>

                </div>

              )}

              {!result.error && (
                <div className="mt-6 flex gap-4 text-xs font-medium text-slate-400">
                  <span>Tokens: 1,402</span>
                  <span>Latency: 2.4s</span>
                  <span>Model: GPT-4o</span>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </Layout>
  )
}
