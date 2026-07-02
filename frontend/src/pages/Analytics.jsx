import Sidebar from "../components/Sidebar";

export default function Analytics() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Analytics</h1>
        {/* analytics UI*/}
      </main>
    </div>
  );
}