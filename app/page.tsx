"use client"

export default function Home(){

return(

<div className="min-h-screen bg-gradient-to-b from-pink-200 to-white flex flex-col items-center justify-center text-center">

<h1 className="text-6xl font-bold mb-6">

Shelby AI Data Storage

</h1>

<p className="text-gray-600 mb-10 max-w-xl">

Analyze marketplace datasets and store results on decentralized Shelby storage.

</p>

<a
href="/dashboard"
className="bg-pink-500 text-white px-8 py-3 rounded-lg"
>

Launch Dashboard

</a>

</div>

)

}