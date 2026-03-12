"use client"

import Link from "next/link"

export default function Home() {
  return (

<div className="min-h-screen bg-gradient-to-b from-pink-200 via-white to-purple-100 text-gray-800">

{/* NAVBAR */}

<nav className="flex justify-between items-center px-10 py-6">

<h1 className="font-bold text-xl">
Shelby AI Storage
</h1>

<div className="flex gap-6">

<a href="#features">Features</a>
<a href="#flow">How it Works</a>
<Link href="/dashboard" className="bg-pink-500 text-white px-4 py-2 rounded-lg">
Dashboard
</Link>

</div>

</nav>



{/* HERO */}

<section className="text-center py-24 px-6">

<h1 className="text-6xl font-bold mb-6">
Decentralized Storage
<br/>
for AI Datasets
</h1>

<p className="text-gray-600 max-w-xl mx-auto mb-10">
Analyze marketplace data and store results securely on the decentralized Shelby network.
</p>

<Link
href="/dashboard"
className="bg-pink-500 text-white px-8 py-4 rounded-xl text-lg"
>
Launch Dashboard
</Link>

</section>



{/* STATS */}

<section className="grid grid-cols-4 gap-6 max-w-5xl mx-auto text-center mb-24">

<div className="bg-white p-6 rounded-xl shadow">
<h2 className="text-3xl font-bold text-pink-500">10TB+</h2>
<p className="text-gray-500">Storage Volume</p>
</div>

<div className="bg-white p-6 rounded-xl shadow">
<h2 className="text-3xl font-bold text-pink-500">99.9%</h2>
<p className="text-gray-500">Uptime SLA</p>
</div>

<div className="bg-white p-6 rounded-xl shadow">
<h2 className="text-3xl font-bold text-pink-500">&lt;100ms</h2>
<p className="text-gray-500">Retrieval Speed</p>
</div>

<div className="bg-white p-6 rounded-xl shadow">
<h2 className="text-3xl font-bold text-pink-500">3M+</h2>
<p className="text-gray-500">Dataset Requests</p>
</div>

</section>



{/* FEATURES */}

<section id="features" className="grid grid-cols-3 gap-10 max-w-6xl mx-auto mb-32 px-6">

<div className="bg-white p-8 rounded-xl shadow">
<h3 className="font-bold text-lg mb-3">
Decentralized Storage
</h3>
<p className="text-gray-500">
Store AI datasets across distributed Shelby nodes ensuring reliability and scalability.
</p>
</div>

<div className="bg-white p-8 rounded-xl shadow">
<h3 className="font-bold text-lg mb-3">
Lightning Fast Retrieval
</h3>
<p className="text-gray-500">
Access your data instantly using Shelby's optimized gateway infrastructure.
</p>
</div>

<div className="bg-white p-8 rounded-xl shadow">
<h3 className="font-bold text-lg mb-3">
AI Dataset Analytics
</h3>
<p className="text-gray-500">
Analyze marketplace trends and visualize insights with built-in analytics dashboard.
</p>
</div>

</section>



{/* STORAGE FLOW */}

<section id="flow" className="max-w-6xl mx-auto text-center mb-32 px-6">

<h2 className="text-3xl font-bold mb-10">
How Shelby Storage Works
</h2>

<div className="grid grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl shadow">
<h3 className="font-bold mb-2">1 Upload Dataset</h3>
<p className="text-gray-500">
Upload AI dataset through the dashboard interface.
</p>
</div>

<div className="bg-white p-8 rounded-xl shadow">
<h3 className="font-bold mb-2">2 Shelby Storage</h3>
<p className="text-gray-500">
Files are stored on decentralized Shelby nodes and CID is generated.
</p>
</div>

<div className="bg-white p-8 rounded-xl shadow">
<h3 className="font-bold mb-2">3 Access Anywhere</h3>
<p className="text-gray-500">
Retrieve data globally using the CID through Shelby gateways.
</p>
</div>

</div>

</section>



{/* CTA */}

<section className="text-center pb-32">

<h2 className="text-4xl font-bold mb-6">
Start Building on Shelby
</h2>

<p className="text-gray-600 mb-10">
Upload datasets, analyze markets, and power your AI pipelines.
</p>

<Link
href="/dashboard"
className="bg-pink-500 text-white px-8 py-4 rounded-xl text-lg"
>
Open Dashboard
</Link>

</section>


</div>

)
}