import Sidebar from "../components/Sidebar";


export default function Analytics() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">
          <Sidebar />
          <main className="flex-1 p-6">
            <h1 className="text-2xl font-bold">Analytics</h1>
            {/* Analytics UI*/}
          </main>
        </div>
  );
}