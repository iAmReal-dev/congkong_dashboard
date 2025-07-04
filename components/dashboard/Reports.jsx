export default function Reports() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Reports</h2>
      <div className="space-y-4">
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-medium">Match Success Report</h3>
          <p>Summary of matching success rates across events.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-medium">Participant Engagement</h3>
          <p>Analysis of participant activity and meeting attendance.</p>
        </div>
      </div>
    </div>
  )
}