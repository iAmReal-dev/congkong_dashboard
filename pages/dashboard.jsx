import { useState } from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import EventManagement from '../components/dashboard/EventManagement'
import RealTimeDashboard from '../components/dashboard/RealTimeDashboard'
import MatchingTracker from '../components/dashboard/MatchingTracker'
import MeetingMonitoring from '../components/dashboard/MeetingMonitoring'
import ParticipantManagement from '../components/dashboard/ParticipantManagement'
import Reports from '../components/dashboard/Reports'
import AIMatchingSettings from '../components/dashboard/AIMatchingSettings'

export default function Dashboard({ totalParticipants, realTimeIdentified, avgMatches, avgSatisfaction, totalMeetings, topMatches, topParticipants }) {
  const [activeTab, setActiveTab] = useState('Real-Time Dashboard')
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'Event Management':
        return <EventManagement />
      case 'Real-Time Dashboard':
        return (
          <RealTimeDashboard
            totalParticipants={totalParticipants || 0}
            realTimeIdentified={realTimeIdentified || 0}
            avgMatches={avgMatches || 0}
            avgSatisfaction={avgSatisfaction || 0}
            totalMeetings={totalMeetings || 0}
            topMatches={topMatches || []}
            topParticipants={topParticipants || []}
          />
        )
      case 'Matching Tracker':
        return <MatchingTracker topMatches={topMatches || []} topParticipants={topParticipants || []} />
      case 'Meeting Monitoring':
        return <MeetingMonitoring />
      case 'Participant Management':
        return <ParticipantManagement />
      case 'Reports':
        return <Reports />
      case 'AI Matching Settings':
        return <AIMatchingSettings />
      default:
        return (
          <RealTimeDashboard
            totalParticipants={totalParticipants || 0}
            realTimeIdentified={realTimeIdentified || 0}
            avgMatches={avgMatches || 0}
            avgSatisfaction={avgSatisfaction || 0}
            totalMeetings={totalMeetings || 0}
            topMatches={topMatches || []}
            topParticipants={topParticipants || []}
          />
        )
    }
  }

  return (
    <div className="flex flex-col md:flex-row my-5 md:my-10 ">
      <Sidebar className="md:min-w-[300px]" activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="w-full pl-6 md:p-4">
        {renderTabContent()}
      </div>
    </div>
  )
}
