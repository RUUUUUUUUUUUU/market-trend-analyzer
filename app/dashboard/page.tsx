"use client"



import { useEffect,useState } from "react"



export default function Dashboard(){



  const [datasets,setDatasets] = useState<any[]>([])



  useEffect(()=>{



    const data = JSON.parse(

      localStorage.getItem("datasets") || "[]"

    )



    setDatasets(data)



  },[])



  return(



    <div className="min-h-screen bg-pink-500 p-10 text-white">



      <a href="/upload" className="underline mb-6 block">

      Upload Dataset

      </a>



      <h1 className="text-3xl font-bold mb-10">

      Market Trend Analyzer

      </h1>



      <div className="bg-zinc-900 rounded-xl overflow-hidden">



        <table className="w-full text-left">



          <thead className="bg-zinc-800">

            <tr>

              <th className="p-4">Dataset</th>

              <th className="p-4">Category</th>

              <th className="p-4">Trend</th>

              <th className="p-4">CID</th>

            </tr>

          </thead>



          <tbody>



            {datasets.map((d,i)=>(



              <tr key={i} className="border-t border-zinc-700">



                <td className="p-4">{d.name}</td>



                <td className="p-4">{d.category}</td>



                <td className="p-4 text-green-400">{d.trend}</td>



                <td className="p-4 text-blue-400 text-sm">{d.cid}</td>



              </tr>



            ))}



          </tbody>



        </table>



      </div>



    </div>



  )



}
