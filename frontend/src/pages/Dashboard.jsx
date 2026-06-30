import Sidebar from "../components/Sidebar";
import KPIcard from "../components/KPIcard";
import MapPanel from "../components/MapPanel";
import ChartPanel from "../components/ChartPanel";
import RightPanel from "../components/RightPanel";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">
      <Sidebar />

      <main className="flex-1">
        {/* Top KPI Bar */}
          <div className="flex items-center justify-between">
            <div className="flex gap-4 p-6">
              <KPIcard title="Active" value="3" color="text-red-500" />
              <KPIcard title="Responding" value="2" color="text-orange-500" />
              <KPIcard title="Resolved" value="4" color="text-lime-400" />
              <KPIcard title="Total Today" value="3" color="text-cyan-400" />
              <KPIcard title="Avg. Response Time" value="5m 13s" color="text-white" />
            </div>
            <div className="px-4 py-2 bg-red-600 rounded-full text-sm font-bold flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              LIVE
            </div>
          </div>



        {/* Main Content */}
        <div className="p-6 flex gap-6">
          <div className="flex-1 flex flex-col gap-6">
            <MapPanel />
            
            <div className="charts-row">
              <ChartPanel title="Incident by Barangay" type="line"/>
              <ChartPanel title="Fire Type Breakdown" type="pie" />
            </div>
          </div>

          <RightPanel />
        </div>
      </main>
    </div>
  );
}