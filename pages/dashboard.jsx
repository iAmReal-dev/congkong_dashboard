import React from 'react'
import Sidebar from '../components/dashhboard/Sidebar'
import DashboardContent from '../components/dashhboard/DashboardContent.jsx'
import Chart from '../components/dashhboard/Chart'
import Matching from '../components/dashhboard/Matching'

const dashboard = () => {
  return (
    <div className='flex mt-10 justify-between'>
      <Sidebar />
      <div className="px-10 w-full">
        <DashboardContent />
        <div className="flex justify-between">
          <Chart />
          <Matching />
        </div>
      </div>
    </div>
  )
}

export default dashboard