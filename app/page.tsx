"use client"

import { useState } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

const chartData = [
  { name: "Amazon", score: 82 },
  { name: "Crypto", score: 91 },
  { name: "AI Tools", score: 74 },
  { name: "Gaming", score: 65 },
  { name: "Fashion", score: 58 }
]

export default function Home() {

  const [file, setFile] = useState<File | null>(null)

  return (
    <div className="min-h-screen bg-pink-400 text-white p-10">

      <h1 className="text-4xl font-bold mb-10">
        AI Market Trend Analyzer
      </h1>

      {/* Upload */}
      <div className="bg-zinc-900 p-6 rounded-xl mb-10">
        <h2 className="text-xl mb-4">Upload Dataset</h2>

        <input
          type="file"
          onChange={(e)=>setFile(e.target.files?.[0] || null)}
          className="text-black"
        />

        {file && (
          <p className="mt-3 text-green-400">
            Dataset Ready: {file.name}
          </p>
        )}
      </div>

      {/* Chart */}
      <div className="bg-zinc-900 p-6 rounded-xl mb-10">
        <h2 className="text-xl mb-4">Market Trend Score</h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <XAxis dataKey="name" stroke="#fff"/>
            <YAxis stroke="#fff"/>
            <Tooltip />
            <Line type="monotone" dataKey="score" stroke="#ff4da6" strokeWidth={3}/>
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Table */}
      <div className="bg-zinc-900 p-6 rounded-xl">

        <h2 className="text-xl mb-4">
          Dataset Explorer
        </h2>

        <table className="w-full">

          <thead>
            <tr className="text-left text-zinc-400">
              <th>Dataset</th>
              <th>Category</th>
              <th>Trend Score</th>
              <th>Storage</th>
            </tr>
          </thead>

          <tbody className="space-y-2">

            <tr>
              <td>Amazon Electronics</td>
              <td>Ecommerce</td>
              <td className="text-green-400">82</td>
              <td>Pending</td>
            </tr>

            <tr>
              <td>Crypto Market</td>
              <td>Finance</td>
              <td className="text-green-400">91</td>
              <td>Pending</td>
            </tr>

            <tr>
              <td>AI Tools</td>
              <td>AI</td>
              <td className="text-yellow-400">74</td>
              <td>Pending</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  )
}