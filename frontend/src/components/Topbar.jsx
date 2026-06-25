function KPI({ title, value, color }) {
  return (
    <div className="bg-zinc-900 rounded-xl p-4 min-w-[120px]">
      <p className="text-xs uppercase text-gray-400">
        {title}
      </p>

      <h2 className={`text-2xl font-bold ${color}`}>
        {value}
      </h2>
    </div>
  );
}

export default function Topbar() {
  return (
    <header className="flex gap-4 p-5">
      <KPI
        title="Active"
        value="3"
        color="text-red-500"
      />

      <KPI
        title="Responding"
        value="2"
        color="text-orange-500"
      />

      <KPI
        title="Resolved"
        value="4"
        color="text-lime-400"
      />
    </header>
  );
}