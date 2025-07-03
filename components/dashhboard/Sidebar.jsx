import { IconBriefcase, IconCalendarEventFilled, IconChartBar, IconCheckupList, IconPuzzle, IconSettings, IconUser } from '@tabler/icons-react'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col gap-10'>
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <IconBriefcase />
          <span>Event Management</span>
        </div>
        <div className="flex gap-3">
          <IconChartBar />
          <span>Real-Time Dashboard</span>
        </div>
        <div className="flex gap-3">
          <IconPuzzle />
          <span>Matching Tracker</span>
        </div>
        <div className="flex gap-3">
          <IconCalendarEventFilled />
          <span>Meeting Monitoring</span>
        </div>
        <div className="flex gap-3">
          <IconUser />
          <span>Participant Management</span>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-3">

          <div className="flex gap-3">
            <IconCheckupList />
            <span>Reports</span>
          </div>
          <div className="flex gap-3">
            <IconSettings />
            <span>AI Matching Settings</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Sidebar
