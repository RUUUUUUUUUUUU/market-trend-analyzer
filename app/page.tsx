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
        data: products.map((p:any)=>p.sales),
        backgroundColor:"#ec4899"
      }
    ]
  }

  return (

    <div style={{
      minHeight:"100vh",
      background:"linear-gradient(135deg,#fdf2f8,#eef2ff)",
      padding:"40px"
    }}>

      <div style={{
        maxWidth:"1100px",
        margin:"auto"
      }}>

        <h1 style={{
          fontSize:"40px",
          fontWeight:"bold",
          color:"#111827"
        }}>
          Marketplace Trend Analyzer
        </h1>

        <p style={{
          color:"#6b7280",
          marginBottom:"30px"
        }}>
          Shelby Powered Dataset Analytics
        </p>


        <div style={{
          display:"flex",
          gap:"20px",
          marginBottom:"30px"
        }}>

          <div style={{
            flex:1,
            background:"#ffffff",
            padding:"25px",
            borderRadius:"14px",
            boxShadow:"0 10px 30px rgba(0,0,0,0.05)"
          }}>
            <h3>Total Products</h3>
            <h2>{products.length}</h2>
          </div>

          <div style={{
            flex:1,
            background:"#ffffff",
            padding:"25px",
            borderRadius:"14px",
            boxShadow:"0 10px 30px rgba(0,0,0,0.05)"
          }}>
            <h3>Top Category</h3>
            <h2>Electronics</h2>
          </div>

        </div>


        <div style={{
          background:"#ffffff",
          padding:"30px",
          borderRadius:"14px",
          marginBottom:"30px",
          boxShadow:"0 10px 30px rgba(0,0,0,0.05)"
        }}>

          <h2>Sales Analytics</h2>

          <div style={{maxWidth:"900px"}}>
            <Bar data={chartData}/>
          </div>

        </div>


        <div style={{
          background:"#ffffff",
          padding:"30px",
          borderRadius:"14px",
          boxShadow:"0 10px 30px rgba(0,0,0,0.05)"
        }}>

          <h2>Product Dataset</h2>

          <table style={{
            width:"100%",
            marginTop:"20px",
            borderCollapse:"collapse"
          }}>

            <thead>
              <tr style={{background:"#f9fafb"}}>
                <th style={{padding:"12px"}}>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Sales</th>
              </tr>
            </thead>

            <tbody>

            {products.map((p:any,i:number)=>(
              <tr key={i}>
                <td style={{padding:"12px"}}>{p.name}</td>
                <td>{p.category}</td>
                <td>${p.price}</td>
                <td>{p.rating}</td>
                <td>{p.sales}</td>
              </tr>
            ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  )
}