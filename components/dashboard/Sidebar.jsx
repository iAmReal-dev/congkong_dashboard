import {
  IconBriefcase,
  IconCalendarEventFilled,
  IconChartBar,
  IconCheckupList,
  IconPuzzle,
  IconSettings,
  IconUser
} from '@tabler/icons-react'
import React from 'react'

export default function Sidebar({ className = '', activeTab, onTabChange }) {
  const menuItems = [
    { icon: <IconBriefcase />, label: 'Event Management' },
    { icon: <IconChartBar />, label: 'Real-Time Dashboard' },
    { icon: <IconPuzzle />, label: 'Matching Tracker' },
    { icon: <IconCalendarEventFilled />, label: 'Meeting Monitoring' },
    { icon: <IconUser />, label: 'Participant Management' }
  ]

  const bottomItems = [
    { icon: <IconCheckupList />, label: 'Reports' },
    { icon: <IconSettings />, label: 'AI Matching Settings' }
  ]

  const Item = ({ icon, label }) => (
    <div
      className={`flex items-center gap-3 px-3 sm:px-5 py-2 rounded-lg text-sm sm:text-base text-gray-700 transition-colors duration-300 cursor-pointer ${
        activeTab === label ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'
      }`}
      onClick={() => onTabChange(label)}
    >
      {icon}
      <span>{label}</span>
    </div>
  )

  return (
    <div className={`flex flex-col gap-5 p-4 ${className}`}>
      <div className="flex flex-col gap-3">
        {menuItems.map((item, i) => (
          <Item key={i} icon={item.icon} label={item.label} />
        ))}
      </div>
      <div className="border-b-[1px]"></div>
      <div className="flex flex-col gap-3">
        {bottomItems.map((item, i) => (
          <Item key={i} icon={item.icon} label={item.label} />
        ))}
      </div>
    </div>
  )
}