import Matching from './Matching'

export default function MatchingTracker({ topMatches, topParticipants }) {
  return (
    <div className="space-y-6">
      <Matching topMatches={topMatches} topParticipants={topParticipants} />
    </div>
  )
}