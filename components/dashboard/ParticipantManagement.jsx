export default function ParticipantManagement() {
  const participants = [
    { id: 1, name: 'Alice', email: 'alice@example.com', status: 'Active' },
    { id: 2, name: 'Bob', email: 'bob@example.com', status: 'Active' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', status: 'Inactive' }
  ]

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Participant Management</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {participants.map(participant => (
            <tr key={participant.id} className="border-b">
              <td className="p-2">{participant.name}</td>
              <td className="p-2">{participant.email}</td>
              <td className="p-2">{participant.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}