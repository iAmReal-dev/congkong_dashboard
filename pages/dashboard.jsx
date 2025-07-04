// pages/dashboard.jsx
import React from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import DashboardContent from '../components/dashboard/DashboardContent'
import Chart from '../components/dashboard/Chart'
import Matching from '../components/dashboard/Matching'

const Dashboard = () => {
  return (
    <div className='flex flex-col md:flex-row mt-10 gap-4'>
      <Sidebar className="w-full md:w-96" />
      <div className="w-full px-4 md:px-10">
        <DashboardContent />
        <div className="flex flex-col md:flex-row justify-between gap-4 mt-10">
          <Chart />
          <Matching />
        </div>
      </div>
    </div>
  )
}

export default Dashboard