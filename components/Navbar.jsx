import { IconBellFilled } from '@tabler/icons-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow px-6 py-3 flex justify-end items-center gap-4">
      <button className="relative p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
        <IconBellFilled size={20} className="text-gray-600" />
        {/* Optional red dot for notifications */}
        <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
      </button>
      <button className="px-4 py-1.5 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-600 transition">
        Login
      </button>
    </div>
  )
}

export default Navbar
