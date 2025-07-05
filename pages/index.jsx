import { getSession, useSession, signIn } from 'next-auth/react'
import { useState, useEffect } from 'react'
import Dashboard from './dashboard'
import Navbar from '../components/Navbar'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://duwmdlxbxafgshgnrajp.supabase.co',
  process.env.SUPABASE_KEY
)

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to CongKong</h1>
        <p className="text-gray-600 mb-8">
          Connect with your peers and expand your professional network.
        </p>
        <button 
          onClick={() => signIn('google')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center mx-auto"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  )
}

const LoadingScreen = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading your dashboard...</p>
      </div>
    </div>
  )
}

export default function Home({
  session,
  totalParticipants,
  realTimeIdentified,
  avgMatches,
  avgSatisfaction,
  totalMeetings,
  topMatches,
  topParticipants
}) {
  const { data: clientSession, status } = useSession()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (clientSession) {
      localStorage.setItem(
        'user',
        JSON.stringify({ 
          name: clientSession.user.name, 
          email: clientSession.user.email 
        })
      )
    } else {
      localStorage.removeItem('user')
    }
  }, [clientSession])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading || status === 'loading') {
    return <LoadingScreen />
  }

  if (!clientSession) {
    return <LandingPage />
  }

  return (
    <div className="xl:max-w-[90vw] mx-auto">
      <Navbar />
      <Dashboard
        totalParticipants={totalParticipants}
        realTimeIdentified={realTimeIdentified}
        avgMatches={avgMatches}
        avgSatisfaction={avgSatisfaction}
        totalMeetings={totalMeetings}
        topMatches={topMatches}
        topParticipants={topParticipants}
      />
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  
  if (session) {
    try {
      const { data: users, error: usersError } = await supabase.from('users').select('*')
      const { data: matches, error: matchesError } = await supabase.from('matches').select('*')
      const { data: meetings, error: meetingsError } = await supabase.from('meetings').select('*')

      if (usersError || matchesError || meetingsError) throw new Error()

      const totalParticipants = users.length
      const realTimeIdentified = users.filter(u => u.profile_complete).length

      const userMatchCounts = {}
      matches.forEach(m => {
        userMatchCounts[m.participant1_id] = (userMatchCounts[m.participant1_id] || 0) + 1
        userMatchCounts[m.participant2_id] = (userMatchCounts[m.participant2_id] || 0) + 1
      })
      const avgMatches = totalParticipants
        ? Object.values(userMatchCounts).reduce((a, b) => a + b, 0) / totalParticipants
        : 0

      const completedMeetings = meetings.filter(m => m.status === 'completed' && m.satisfaction_score != null)
      const avgSatisfaction = completedMeetings.length
        ? (completedMeetings.reduce((sum, m) => sum + m.satisfaction_score, 0) / completedMeetings.length) * 20
        : 0

      const totalMeetings = meetings.length

      const topMatches = matches
        .sort((a, b) => b.match_score - a.match_score)
        .slice(0, 5)
        .map(m => ({
          participant1: users.find(u => u.id === m.participant1_id)?.name || 'Unknown',
          participant2: users.find(u => u.id === m.participant2_id)?.name || 'Unknown',
          match_score: m.match_score
        }))

      const userMeetingCounts = {}
      meetings.forEach(meeting => {
        const match = matches.find(m => m.id === meeting.match_id)
        if (match) {
          userMeetingCounts[match.participant1_id] = (userMeetingCounts[match.participant1_id] || 0) + 1
          userMeetingCounts[match.participant2_id] = (userMeetingCounts[match.participant2_id] || 0) + 1
        }
      })
      const topParticipants = Object.entries(userMeetingCounts)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5)
        .map(([userId, count]) => ({
          name: users.find(u => u.id == userId)?.name || 'Unknown',
          meeting_count: count
        }))

      return {
        props: {
          session,
          totalParticipants,
          realTimeIdentified,
          avgMatches,
          avgSatisfaction,
          totalMeetings,
          topMatches,
          topParticipants
        }
      }
    } catch {
      return {
        props: {
          session,
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

  return {
    props: {
      session: null
    }
  }
}