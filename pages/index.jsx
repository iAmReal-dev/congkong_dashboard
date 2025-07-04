// pages/index.jsx
"use client"
import Navbar from "../components/Navbar"
import Dashboard from "./dashboard"

export default function Home() {
  return (
    <div className="bg-gray-50 max-w-full md:max-w-[80vw] mx-auto py-5 px-4 md:px-0">
      <Navbar />
      <Dashboard />
    </div>
  )
}