import Sidebar from "../components/Sidebar";

export default function Reports() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Reports</h1>
        {/* reports UI*/}
      </main>
    </div>
  );
}