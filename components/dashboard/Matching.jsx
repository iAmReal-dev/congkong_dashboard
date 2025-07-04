// components/dashboard/Matching.jsx
import React from 'react'

const namePool = [
  'Alice', 'Bob', 'Charlie', 'Daisy', 'Ethan',
  'Fiona', 'George', 'Hannah', 'Ian', 'Jenny'
]

const colors = [
  'bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400',
  'bg-purple-400', 'bg-pink-400', 'bg-indigo-400', 'bg-teal-400',
  'bg-orange-400', 'bg-emerald-400'
]

const getRandomNames = () => {
  const shuffled = [...namePool].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, 5)
}

const getColor = (index) => colors[index % colors.length]

const renderList = (list) =>
  list.map((name, index) => (
    <li key={index} className="flex items-center gap-3">
      <span className="w-5 text-xs sm:text-sm text-gray-600">{index + 1}.</span>
      <div className={`w-6 h-6 flex items-center justify-center rounded-full text-white text-sm font-bold ${getColor(index)}`}>
        {name[0]}
      </div>
      <span className="text-sm sm:text-base">{name}</span>
    </li>
  ))

const Matching = () => {
  const top5Matching = getRandomNames()
  const participation = getRandomNames()

  return (
    <div className="p-4 space-y-6">
      <div className="p-4">
        <p className="text-base sm:text-lg font-semibold mb-2">Matching Top 5</p>
        <ul className="space-y-2">
          {renderList(top5Matching)}
        </ul>
      </div>
      <div className="p-4">
        <p className="text-base sm:text-lg font-semibold mb-2">Meeting in Participation</p>
        <ul className="space-y-2">
          {renderList(participation)}
        </ul>
      </div>
    </div>
  )
}

export default Matching
