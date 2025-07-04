// components/dashboard/DashboardContent.jsx
import {
  IconClock,
  IconPin,
  IconSquareDashed,
  IconStar,
  IconTopologyStar
} from '@tabler/icons-react'
import React from 'react'

const metrics = [
  {
    icon: <IconTopologyStar size={24} className='text-blue-500' />,
    label: 'Total Participants',
    value: '150'
  },
  {
    icon: <IconClock className='text-blue-500' size={24} />,
    label: 'Real-Time Identified',
    value: '29 (19%)'
  },
  {
    icon: <IconPin className='text-blue-500' size={24} />,
    label: 'Average Matches',
    value: '160'
  },
  {
    icon: <IconSquareDashed className='text-blue-500' size={24} />,
    label: 'Average Satisfaction',
    value: '78%'
  },
  {
    icon: <IconStar className='text-blue-500' size={24} />,
    label: 'Total Meetings',
    value: '18'
  },
  {
    icon: <IconStar className='text-blue-500' size={24} />,
    label: 'Peak',
    value: '4.3'
  }
]

const MetricCard = ({ icon, label, value }) => (
  <div className="flex flex-col gap-1 py-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="flex items-center gap-2 text-base sm:text-lg font-bold text-gray-700">{icon}<span>{label}</span></div>
    <span className="font-bold text-xl sm:text-2xl text-gray-900">{value}</span>
  </div>
)

const DashboardContent = () => {
  return (
    <div className="flex overflow-x-auto gap-4">
      {metrics.map((item, index) => (
        <MetricCard key={index} icon={item.icon} label={item.label} value={item.value} />
      ))}
    </div>
  )
}

export default DashboardContent