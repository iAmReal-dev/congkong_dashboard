import DashboardContent from './DashboardContent'
import Chart from './Chart'
import Matching from './Matching'

export default function RealTimeDashboard({ totalParticipants, realTimeIdentified, avgMatches, avgSatisfaction, totalMeetings, topMatches, topParticipants }) {
  return (
    <>
      <DashboardContent
        total_participants={totalParticipants || 0}
        real_time_identified={realTimeIdentified || 0}
        average_matches={avgMatches || 0}
        average_satisfaction={avgSatisfaction || 0}
        total_meetings={totalMeetings || 0}
      />
      <div className="flex flex-col md:flex-row gap-4 mt-10">
        <Chart />
        <Matching topMatches={topMatches || []} topParticipants={topParticipants || []} />
      </div>
    </>
  )
}