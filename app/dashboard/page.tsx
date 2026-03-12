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
{ name:"Amazon", score:82 },
{ name:"Crypto", score:91 },
{ name:"AI Tools", score:74 },
{ name:"Gaming", score:63 },
{ name:"Fashion", score:57 }
]

export default function Dashboard(){

const [wallet,setWallet] = useState<string | null>(null)
const [cid,setCid] = useState("")
const [files,setFiles] = useState<any[]>([])

async function connectPetra(){

if((window as any).aptos){

const res = await (window as any).aptos.connect()

setWallet(res.address)

}

}

async function connectOKX(){

if((window as any).okxwallet){

const res = await (window as any).okxwallet.connect()

setWallet(res.address)

}

}

async function uploadFile(file:any){

const formData = new FormData()

formData.append("file",file)

const res = await fetch("/api/upload",{
method:"POST",
body:formData
})

const data = await res.json()

setCid(data.cid)

setFiles(prev=>[
{ name:file.name,cid:data.cid },
...prev
])

}

function handleChange(e:any){

uploadFile(e.target.files[0])

}

function handleDrop(e:any){

e.preventDefault()

uploadFile(e.dataTransfer.files[0])

}

return(

<div className="min-h-screen bg-gray-50 flex">


{/* SIDEBAR */}

<div className="w-64 bg-white border-r p-6">

<h2 className="text-xl font-bold text-pink-500 mb-6">
Shelby Vault
</h2>

<div className="space-y-3">

<button
onClick={connectPetra}
className="bg-pink-500 text-white w-full py-2 rounded"
>

Connect Petra

</button>

<button
onClick={connectOKX}
className="bg-gray-200 w-full py-2 rounded"
>

Connect OKX

</button>

</div>

{wallet && (

<p className="text-sm text-gray-500 mt-4">

{wallet.slice(0,10)}...

</p>

)}

</div>


{/* MAIN */}

<div className="flex-1 p-10">

<h1 className="text-3xl font-bold mb-8">

AI Market Storage Dashboard

</h1>


{/* ANALYTICS CARDS */}

<div className="grid grid-cols-3 gap-6 mb-8">

<div className="bg-white p-6 rounded shadow">

<p className="text-gray-500">Datasets</p>

<h2 className="text-3xl font-bold">

{files.length}

</h2>

</div>

<div className="bg-white p-6 rounded shadow">

<p className="text-gray-500">Storage Used</p>

<h2 className="text-3xl font-bold">

{files.length * 5} MB

</h2>

</div>

<div className="bg-white p-6 rounded shadow">

<p className="text-gray-500">Latest CID</p>

<h2 className="text-sm text-blue-500">

{cid ? cid.slice(0,12)+"..." : "-"}

</h2>

</div>

</div>


{/* DRAG DROP */}

<div
onDrop={handleDrop}
onDragOver={(e)=>e.preventDefault()}
className="bg-white border-2 border-dashed border-gray-300 p-10 rounded-xl text-center mb-8"
>

<p className="font-semibold mb-2">

Drag & Drop Dataset

</p>

<input type="file" onChange={handleChange}/>

</div>


{/* CHART */}

<div className="bg-white p-6 rounded-xl shadow mb-8">

<h2 className="font-bold mb-4">

Market Trend Analytics

</h2>

<ResponsiveContainer width="100%" height={300}>

<LineChart data={chartData}>

<XAxis dataKey="name"/>

<YAxis/>

<Tooltip/>

<Line
type="monotone"
dataKey="score"
stroke="#ec4899"
strokeWidth={3}
/>

</LineChart>

</ResponsiveContainer>

</div>


{/* STORAGE EXPLORER */}

<div className="bg-white p-6 rounded-xl shadow">

<h2 className="font-bold mb-4">

Storage Explorer

</h2>

<table className="w-full text-sm">

<thead>

<tr>

<th>File</th>
<th>CID</th>
<th>Open</th>

</tr>

</thead>

<tbody>

{files.map((item,i)=>(

<tr key={i}>

<td>{item.name}</td>

<td>{item.cid.slice(0,20)}...</td>

<td>

<a
href={`https://gateway.shelby.xyz/ipfs/${item.cid}`}
className="text-blue-500"
>

Open

</a>

</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

</div>

)

}