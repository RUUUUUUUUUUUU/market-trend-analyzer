"use client"

import products from "../data/products.json"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js"

import { Bar } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export default function Home() {

  const chartData = {
    labels: products.map((p:any)=>p.name),
    datasets: [
      {
        label: "Product Sales",
        data: products.map((p:any)=>p.sales)
      }
    ]
  }

  return (
    <div style={{padding:"40px"}}>
      <h1 style={{fontSize:"30px",fontWeight:"bold"}}>
        Marketplace Trend Analyzer
      </h1>

      <h2 style={{marginTop:"30px"}}>Top Product Sales</h2>

      <div style={{width:"700px"}}>
        <Bar data={chartData}/>
      </div>

      <h2 style={{marginTop:"40px"}}>Product Dataset</h2>

      <table border={1} cellPadding={10} style={{marginTop:"20px"}}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Sales</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p:any,i:number)=>(
            <tr key={i}>
              <td>{p.name}</td>
              <td>{p.category}</td>
              <td>${p.price}</td>
              <td>{p.rating}</td>
              <td>{p.sales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

