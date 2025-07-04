import {
  IconClock,
  IconPin,
  IconSquareDashed,
  IconStar,
  IconTopologyStar
} from '@tabler/icons-react'
import React from 'react'

const MetricCard = ({ icon, label, value }) => (
  <div className="flex flex-col gap-1 py-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="flex items-center gap-2 text-base sm:text-lg font-bold text-gray-700">{icon}<span>{label}</span></div>
    <span className="font-bold text-xl sm:text-2xl text-gray-900">{value}</span>
  </div>
)

const DashboardContent = ({
  total_participants = 0,
  real_time_identified = 0,
  average_matches = 0,
  average_satisfaction = 0,
  total_meetings = 0
}) => {
  const metrics = [
    { icon: <IconTopologyStar size={24} className='text-blue-500' />, label: 'Total Participants', value: total_participants },
    { icon: <IconClock size={24} className='text-green-500' />, label: 'Real-Time Identified', value: real_time_identified },
    { icon: <IconPin size={24} className='text-yellow-500' />, label: 'Average Matches', value: average_matches.toFixed(2) },
    { icon: <IconSquareDashed size={24} className='text-red-500' />, label: 'Average Satisfaction', value: `${average_satisfaction.toFixed(2)}%` },
    { icon: <IconStar size={24} className='text-purple-500' />, label: 'Total Meetings', value: total_meetings },
    { icon: <IconStar size={24} className='text-blue-500' />, label: 'Peak', value: '4.3' } // Static value as not in DB
  ]

  return (
    <div className="flex overflow-x-auto gap-4 justify-between w-[95vw] md:w-[70vw]">
      {metrics.map((item, index) => (
        <MetricCard key={index} icon={item.icon} label={item.label} value={item.value} />
      ))}
    </div>
  )
}

export default DashboardContent