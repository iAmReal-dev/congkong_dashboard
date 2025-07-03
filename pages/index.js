// pages/index.jsx
"use client";

import Navbar from "../components/Navbar.jsx";
import Dashboard from "./dashboard.jsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 max-w-[80vw] mx-auto">
      <Navbar />
      <Dashboard />
    </div>
  );
}