export default function MeetingMonitoring() {
  const meetings = [
    { id: 1, participants: 'Alice & Bob', date: '2025-07-04', status: 'Completed' },
    { id: 2, participants: 'Charlie & Daisy', date: '2025-07-05', status: 'Scheduled' },
    { id: 3, participants: 'Ethan & Fiona', date: '2025-07-06', status: 'Canceled' }
  ]

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Meeting Monitoring</h2>
      <ul className="space-y-2">
        {meetings.map(meeting => (
          <li key={meeting.id} className="flex items-center gap-4 p-2 border rounded-lg">
            <span>{meeting.participants}</span>
            <span>{meeting.date}</span>
            <span>{meeting.status}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}