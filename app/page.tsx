"use client"

import Link from "next/link"

export default function Home() {
  return (

<div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-pink-500 text-white">

{/* NAVBAR */}

<nav className="flex justify-between items-center px-12 py-6">

<h1 className="text-xl font-bold">
Shelby AI Storage
</h1>

<div className="flex gap-8 text-sm items-center">

<a href="#features">Features</a>
<a href="#storage">Storage</a>
<a href="#analytics">Analytics</a>

<Link
href="/dashboard"
className="bg-white text-black px-5 py-2 rounded-lg"
>
Start Building
</Link>

</div>

</nav>


{/* HERO */}

<section className="max-w-6xl mx-auto py-32 px-8">

<h1 className="text-7xl font-bold leading-tight mb-8">

Decentralized  
<br/>
AI Dataset Storage

</h1>

<p className="max-w-lg text-purple-200 text-lg mb-10">

Upload AI datasets, analyze marketplace trends,
and store results permanently on the Shelby decentralized network.

</p>

<Link
href="/dashboard"
className="bg-white text-black px-8 py-4 rounded-lg text-lg"
>
Launch Dashboard
</Link>

</section>


{/* FEATURE SECTION */}

<section id="features" className="max-w-6xl mx-auto grid grid-cols-3 gap-10 pb-32 px-8">

<div className="bg-white/10 backdrop-blur-md p-8 rounded-xl">

<h3 className="font-bold text-xl mb-3">
Decentralized Storage
</h3>

<p className="text-purple-200">
Store AI datasets across Shelby distributed nodes
with permanent CID addressing.
</p>

</div>


<div className="bg-white/10 backdrop-blur-md p-8 rounded-xl">

<h3 className="font-bold text-xl mb-3">
Marketplace Analytics
</h3>

<p className="text-purple-200">
Analyze marketplace trends and generate AI insights
from uploaded datasets.
</p>

</div>


<div className="bg-white/10 backdrop-blur-md p-8 rounded-xl">

<h3 className="font-bold text-xl mb-3">
Global Data Access
</h3>

<p className="text-purple-200">
Access stored files anywhere using Shelby CID gateways.
</p>

</div>


</section>


{/* CTA */}

<section className="text-center pb-32">

<h2 className="text-4xl font-bold mb-6">
Build AI Storage Apps on Shelby
</h2>

<p className="text-purple-200 mb-10">
Upload datasets, generate analytics, and store results permanently.
</p>

<Link
href="/dashboard"
className="bg-white text-black px-8 py-4 rounded-lg text-lg"
>
Open Dashboard
</Link>

</section>


</div>

)
}