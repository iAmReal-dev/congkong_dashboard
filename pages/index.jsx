import { createClient } from '@supabase/supabase-js'
import Dashboard from './dashboard'

const supabaseUrl = 'https://duwmdlxbxafgshgnrajp.supabase.co'
const supabase = createClient(supabaseUrl, process.env.SUPABASE_KEY)

export default function Home({ totalParticipants, realTimeIdentified, avgMatches, avgSatisfaction, totalMeetings, topMatches, topParticipants }) {
  return (
    <Dashboard
      totalParticipants={totalParticipants}
      realTimeIdentified={realTimeIdentified}
      avgMatches={avgMatches}
      avgSatisfaction={avgSatisfaction}
      totalMeetings={totalMeetings}
      topMatches={topMatches}
      topParticipants={topParticipants}
    />
  )
}

export async function getServerSideProps() {
  try {
    const { data: users, error: usersError } = await supabase.from('users').select('*')
    const { data: matches, error: matchesError } = await supabase.from('matches').select('*')
    const { data: meetings, error: meetingsError } = await supabase.from('meetings').select('*')

    if (usersError || matchesError || meetingsError) {
      return {
        props: {
          totalParticipants: 0,
          realTimeIdentified: 0,
          avgMatches: 0,
          avgSatisfaction: 0,
          totalMeetings: 0,
          topMatches: [],
          topParticipants: []
        }
      }
    }

    const totalParticipants = users?.length || 0
    const realTimeIdentified = users?.filter(u => u.profile_complete).length || 0
    const userMatchCounts = {}
    matches?.forEach(m => {
      userMatchCounts[m.participant1_id] = (userMatchCounts[m.participant1_id] || 0) + 1
      userMatchCounts[m.participant2_id] = (userMatchCounts[m.participant2_id] || 0) + 1
    })
    const avgMatches = totalParticipants > 0 
      ? Object.values(userMatchCounts).reduce((sum, count) => sum + count, 0) / totalParticipants 
      : 0
    const completedMeetings = meetings?.filter(m => m.status === 'completed' && m.satisfaction_score != null) || []
    const avgSatisfaction = completedMeetings.length > 0 
      ? completedMeetings.reduce((sum, m) => sum + m.satisfaction_score, 0) / completedMeetings.length * 20
      : 0
    const totalMeetings = meetings?.length || 0

    const topMatches = matches
      ?.sort((a, b) => b.match_score - a.match_score)
      .slice(0, 5)
      .map(m => ({
        participant1: users?.find(u => u.id === m.participant1_id)?.name || 'Unknown',
        participant2: users?.find(u => u.id === m.participant2_id)?.name || 'Unknown',
        match_score: m.match_score
      })) || []

    const userMeetingCounts = {}
    meetings?.forEach(meeting => {
      const match = matches?.find(m => m.id === meeting.match_id)
      if (match) {
        userMeetingCounts[match.participant1_id] = (userMeetingCounts[match.participant1_id] || 0) + 1
        userMeetingCounts[match.participant2_id] = (userMeetingCounts[match.participant2_id] || 0) + 1
      }
    })
    const topParticipants = Object.entries(userMeetingCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([user_id, count]) => ({
        name: users?.find(u => u.id == user_id)?.name || 'Unknown',
        meeting_count: count
      })) || []

    return {
      props: {
        totalParticipants,
        realTimeIdentified,
        avgMatches,
        avgSatisfaction,
        totalMeetings,
        topMatches,
        topParticipants
      }
    }
  } catch (error) {
    return {
      props: {
        totalParticipants: 0,
        realTimeIdentified: 0,
        avgMatches: 0,
        avgSatisfaction: 0,
        totalMeetings: 0,
        topMatches: [],
        topParticipants: []
      }
    }
  }
}