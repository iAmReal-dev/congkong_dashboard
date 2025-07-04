import React from 'react'

const colors = [
  'bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400',
  'bg-purple-400', 'bg-pink-400', 'bg-indigo-400', 'bg-teal-400',
  'bg-orange-400', 'bg-emerald-400'
]

const getColor = (index) => colors[index % colors.length]

const renderList = (list = [], type) =>
  list.map((item, index) => (
    <li key={index} className="flex items-center gap-3">
      <span className="w-5 text-xs sm:text-sm text-gray-600">{index + 1}.</span>
      <div className={`w-6 h-6 flex items-center justify-center rounded-full text-white text-sm font-bold ${getColor(index)}`}>
        {type === 'matches' ? item.participant1[0] : item.name[0]}
      </div>
      <span className="text-sm sm:text-base">
        {type === 'matches' ? `${item.participant1} & ${item.participant2}` : item.name}
      </span>
    </li>
  ))

export default function Matching({ topMatches = [], topParticipants = [] }) {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-base sm:text-lg font-semibold mb-2">Matching Top 5</p>
        <ul className="space-y-2">
          {topMatches.length > 0 ? renderList(topMatches, 'matches') : <p>No matches available</p>}
        </ul>
      </div>
      <div>
        <p className="text-base sm:text-lg font-semibold mb-2">Meeting in Participation</p>
        <ul className="space-y-2">
          {topParticipants.length > 0 ? renderList(topParticipants, 'participants') : <p>No participants available</p>}
        </ul>
      </div>
    </div>
  )
}