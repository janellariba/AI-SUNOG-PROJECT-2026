import Sidebar from "../components/Sidebar";

export default function ThermalFeeds() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Thermal Feeds</h1>
        {/* thermal feed UI*/}
      </main>
    </div>
  );
}
