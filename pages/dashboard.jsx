import Sidebar from '../components/dashboard/Sidebar'
import DashboardContent from '../components/dashboard/DashboardContent'
import Chart from '../components/dashboard/Chart'
import Matching from '../components/dashboard/Matching'

export default function Dashboard({ totalParticipants, realTimeIdentified, avgMatches, avgSatisfaction, totalMeetings, topMatches, topParticipants }) {
  return (
    <div className='flex flex-col md:flex-row mt-10 gap-4'>
      <Sidebar className="w-full md:w-96" />
      <div className="w-full px-4 md:px-10">
        <DashboardContent 
          total_participants={totalParticipants || 0}
          real_time_identified={realTimeIdentified || 0}
          average_matches={avgMatches || 0}
          average_satisfaction={avgSatisfaction || 0}
          total_meetings={totalMeetings || 0}
        />
        <div className="flex flex-col md:flex-row justify-between gap-4 mt-10">
          <Chart />
          <Matching topMatches={topMatches || []} topParticipants={topParticipants || []} />
        </div>
      </div>
    </div>
  )
}