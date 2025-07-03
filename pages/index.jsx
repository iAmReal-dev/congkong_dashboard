// pages/index.jsx
"use client";

import Navbar from "../components/Navbar.jsx";
import Dashboard from "./dashboard.jsx";

export default function Home() {
  return (
    <div className="bg-gray-50 max-w-[80vw] py-5 mx-auto">
      <Navbar />
      <Dashboard />
    </div>
  );
}