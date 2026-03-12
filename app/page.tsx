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



  const [file,setFile] = useState<File | null>(null)

  const [cid,setCid] = useState("bafybeigdyrzt123examplecid")



  const walletAddress = "0xA91f...29Fa"



  return (

    <div className="min-h-screen bg-pink-400 text-white p-10">



      <h1 className="text-4xl font-bold mb-10">

        AI Market Trend Analyzer

      </h1>



      {/* WALLET PANEL */}



      <div className="bg-zinc-900 p-6 rounded-xl mb-8">

        <h2 className="text-xl mb-3">Wallet</h2>

        <p className="text-green-400">{walletAddress}</p>

        <p className="text-zinc-400 text-sm">Shelby Testnet</p>

      </div>





      {/* UPLOAD */}



      <div className="bg-zinc-900 p-6 rounded-xl mb-8">

        <h2 className="text-xl mb-3">Upload Dataset</h2>



        <input

          type="file"

          className="text-black"

          onChange={(e)=>setFile(e.target.files?.[0] || null)}

        />



        {file && (

          <p className="mt-3 text-green-400">

            Dataset Ready: {file.name}

          </p>

        )}

      </div>





      {/* STORAGE */}



      <div className="bg-zinc-900 p-6 rounded-xl mb-8">



        <h2 className="text-xl mb-3">

          Shelby Storage

        </h2>



        <p className="text-zinc-400">

          CID

        </p>



        <p className="text-green-400 break-all">

          {cid}

        </p>



        <a

          className="text-blue-400"

          href={`https://gateway.shelby.xyz/ipfs/${cid}`}

          target="_blank"

        >

          Open Gateway

        </a>



      </div>





      {/* CHART */}



      <div className="bg-zinc-900 p-6 rounded-xl mb-8">



        <h2 className="text-xl mb-4">

          Market Trend Score

        </h2>



        <ResponsiveContainer width="100%" height={300}>

          <LineChart data={chartData}>

            <XAxis dataKey="name" stroke="#fff"/>

            <YAxis stroke="#fff"/>

            <Tooltip/>

            <Line type="monotone" dataKey="score" stroke="#ff4da6" strokeWidth={3}/>

          </LineChart>

        </ResponsiveContainer>



      </div>





      {/* DATASET TABLE */}



      <div className="bg-zinc-900 p-6 rounded-xl">



        <h2 className="text-xl mb-4">

          Dataset Explorer

        </h2>



        <table className="w-full">



          <thead>

            <tr className="text-left text-zinc-400">

              <th>Dataset</th>

              <th>Category</th>

              <th>Score</th>

              <th>CID</th>

            </tr>

          </thead>



          <tbody>



            <tr>

              <td>Amazon Electronics</td>

              <td>Ecommerce</td>

              <td className="text-green-400">82</td>

              <td className="text-zinc-400">bafy...</td>

            </tr>



            <tr>

              <td>Crypto Market</td>

              <td>Finance</td>

              <td className="text-green-400">91</td>

              <td className="text-zinc-400">bafy...</td>

            </tr>



            <tr>

              <td>AI Tools</td>

              <td>AI</td>

              <td className="text-yellow-400">74</td>

              <td className="text-zinc-400">bafy...</td>

            </tr>



          </tbody>



        </table>



      </div>



    </div>

  )

}
