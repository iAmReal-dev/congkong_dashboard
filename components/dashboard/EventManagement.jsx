export default function EventManagement() {
  const events = [
    { id: 1, name: 'Networking Event 2025', date: '2025-07-10', status: 'Upcoming' },
    { id: 2, name: 'Tech Meetup', date: '2025-06-15', status: 'Completed' },
    { id: 3, name: 'Startup Pitch', date: '2025-08-01', status: 'Scheduled' }
  ]

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Event Management</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Event Name</th>
            <th className="p-2 text-left">Date</th>
            <th className="p-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.id} className="border-b">
              <td className="p-2">{event.name}</td>
              <td className="p-2">{event.date}</td>
              <td className="p-2">{event.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}