"use client"



import { useState } from "react"

import { useRouter } from "next/navigation"



export default function UploadPage() {



  const [file, setFile] = useState<File | null>(null)

  const [loading, setLoading] = useState(false)

  const router = useRouter()



  async function handleUpload() {



    if (!file) return



    setLoading(true)



    const formData = new FormData()

    formData.append("file", file)



    const res = await fetch("/api/upload", {

      method: "POST",

      body: formData

    })



    const data = await res.json()



    const dataset = {

      name: file.name,

      size: file.size,

      cid: data.cid || "pending",

      category: "AI",

      trendScore: Math.floor(Math.random() * 30) + 70

    }



    const old = JSON.parse(localStorage.getItem("datasets") || "[]")



    localStorage.setItem(

      "datasets",

      JSON.stringify([...old, dataset])

    )



    router.push("/dashboard")



  }



  return (



    <div className="min-h-screen bg-pink-500 flex items-center justify-center">



      <div className="bg-zinc-900 p-10 rounded-xl text-white w-[500px]">



        <h1 className="text-2xl font-bold mb-6">

          Shelby Dataset Upload

        </h1>



        <input

          type="file"

          onChange={(e) => setFile(e.target.files?.[0] || null)}

          className="mb-6"

        />



        <button

          onClick={handleUpload}

          className="bg-blue-500 px-6 py-3 rounded-lg"

        >

          {loading ? "Uploading..." : "Upload Dataset"}

        </button>



      </div>



    </div>



  )



}