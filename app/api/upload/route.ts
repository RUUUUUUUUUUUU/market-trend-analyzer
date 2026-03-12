import { NextResponse } from "next/server"

function generateCID() {

  const chars =
    "abcdefghijklmnopqrstuvwxyz123456789"

  let cid = "bafy"

  for (let i = 0; i < 50; i++) {
    cid += chars[Math.floor(Math.random() * chars.length)]
  }

  return cid
}

export async function POST() {

  const cid = generateCID()

  return NextResponse.json({
    cid
  })

}
