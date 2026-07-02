export default function RightPanel() {
  const alerts = [
    { location: "Brgy. Sucat", status: "ONGOING", color: "bg-red-600", badge: "🔴" },
    { location: "Brgy. Alabang", status: "CONTAINED", color: "bg-yellow-600", badge: "🟡" },
    { location: "Brgy. Tunasan", status: "CONTAINED", color: "bg-yellow-600", badge: "🟡" },
  ];

  const stations = [
    { name: "Station 7 - Alabang", status: "AVAILABLE", units: "3 units", personnel: "12 personnel" },
    { name: "Station 3 - Sucat", status: "AVAILABLE", units: "2 units", personnel: "11 personnel" },
  ];

  const cameras = [
    { id: "CAM-01", status: "ONLINE" },
    { id: "CAM-02", status: "OFFLINE" },
    { id: "CAM-03", status: "OFFLINE" },
  ];

  return (
    <aside className="w-80">
      {/* Real-Time Alerts */}
      <div className="bg-zinc-900 rounded-xl p-5 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-red-500 text-xl">🚨</span>
          <h2 className="font-bold text-lg">Real-Time Alerts</h2>
        </div>

        <div className="space-y-3">
          {alerts.map((alert, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 bg-zinc-800 rounded">
              <div className="w-3 h-3 mt-1 rounded-full" style={{ backgroundColor: alert.color === "bg-red-600" ? "#dc2626" : "#eab308" }}></div>
              <div className="flex-1">
                <p className="text-sm font-medium">{alert.location}</p>
                <p className={`text-xs ${alert.color === "bg-red-600" ? "text-red-400" : "text-yellow-400"}`}>
                  {alert.status}
                </p>
              </div>
              <span className="text-lg">{alert.badge}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Responder Stations */}
      <div className="bg-zinc-900 rounded-xl p-5 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-green-500 text-xl">🏢</span>
          <h2 className="font-bold text-lg">Responder Stations</h2>
        </div>

        <div className="space-y-3">
          {stations.map((station, idx) => (
            <div key={idx} className="p-3 bg-zinc-800 rounded">
              <p className="text-sm font-medium">{station.name}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="px-2 py-1 bg-green-600/20 text-green-400 text-xs rounded">
                  {station.status}
                </span>
              </div>
              <div className="text-xs text-gray-400 mt-2 space-y-1">
                <p>{station.units}</p>
                <p>{station.personnel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Thermal Cameras */}
      <div className="bg-zinc-900 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-orange-500 text-xl">📷</span>
          <h2 className="font-bold text-lg">Thermal Cameras</h2>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {cameras.map((camera, idx) => (
            <div
              key={idx}
              className={`p-3 rounded text-center border-2 ${
                camera.status === "ONLINE"
                  ? "animate-pulse border-red-600 bg-red-600/10"
                  : "border-zinc-700 bg-zinc-800/50"
              }`}
            >
              <p className="text-sm font-bold">{camera.id}</p>
              <p className={`text-xs ${camera.status === "ONLINE" ? "text-red-400" : "text-gray-400"}`}>
                {camera.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}