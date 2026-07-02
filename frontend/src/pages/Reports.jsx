import Sidebar from "../components/Sidebar";
import LogsPanel from "../components/Reports/LogsPanel";
import ReportPanel from "../components/Reports/ReportPanel";
import SummaryPanel from "../components/Reports/SummaryPanel";

export default function Reports() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">
      <Sidebar />
      <main className="flex-1">
        <div className="p-6 flex gap-6 items-start">
          <div className="flex-1 flex flex-col gap-6">
            <LogsPanel />
            <ReportPanel />
          </div>
          <SummaryPanel />
        </div>
      </main>
    </div>
  );
}