export default function AIMatchingSettings() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">AI Matching Settings</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Match Score Threshold</label>
          <input
            type="number"
            className="w-full p-2 border rounded-lg"
            placeholder="0.8"
            disabled
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Preference Weight</label>
          <input
            type="number"
            className="w-full p-2 border rounded-lg"
            placeholder="1.0"
            disabled
          />
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg" disabled>
          Save Settings
        </button>
      </div>
    </div>
  )
}