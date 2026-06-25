export default function Sidebar() {
  return (
    <aside className="w-56 bg-red-950 p-5 flex flex-col justify-between min-h-screen">
      <div>
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <div className="text-2xl">🔥</div>
          </div>
          <h1 className="text-lg font-bold">AI SUNOG</h1>
          <p className="text-xs text-red-200">FIRE INTELLIGENCE</p>
          <p className="text-xs text-red-200">PLATFORM</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xs font-bold text-red-200 mb-3 uppercase">Main</h3>
          <nav className="space-y-2">
            <button className="block w-full text-left px-4 py-2 rounded bg-white/15 text-white hover:bg-white/20">
              📊 Dashboard
            </button>
            <button className="block w-full text-left px-4 py-2 rounded text-red-100 hover:bg-white/10">
              📈 Reports
            </button>
            <button className="block w-full text-left px-4 py-2 rounded text-red-100 hover:bg-white/10">
              📉 Analytics
            </button>
            <button className="block w-full text-left px-4 py-2 rounded text-red-100 hover:bg-white/10">
              🌡️ Thermal Feeds
            </button>
          </nav>
        </div>

        <div>
          <h3 className="text-xs font-bold text-red-200 mb-3 uppercase">Operations</h3>
          <nav className="space-y-2">
            <button className="block w-full text-left px-4 py-2 rounded text-red-100 hover:bg-white/10">
              🚨 Alerts
            </button>
            <button className="block w-full text-left px-4 py-2 rounded text-red-100 hover:bg-white/10">
              👥 Responders
            </button>
            <button className="block w-full text-left px-4 py-2 rounded text-red-100 hover:bg-white/10">
              📍 Stations
            </button>
          </nav>
        </div>
      </div>

      <nav className="space-y-2">
        <button className="block w-full text-left px-4 py-2 rounded text-red-100 hover:bg-white/10">
          👤 Account
        </button>
        <button className="block w-full text-left px-4 py-2 rounded text-red-100 hover:bg-white/10">
          ❓ Help & Support
        </button>
        <button className="block w-full text-left px-4 py-2 rounded text-red-100 hover:bg-white/10">
          🚪 Log Out
        </button>
      </nav>
    </aside>
  );
}