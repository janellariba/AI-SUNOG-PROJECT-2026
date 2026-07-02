export default function AlertPanel() {
  return (
    <div className="bg-zinc-900 rounded-xl p-5">
      <h2 className="font-bold text-xl mb-4">
        Real-Time Alerts
      </h2>

      <div className="space-y-4">
        <div className="border-b border-zinc-700 pb-2">
          <p>Brgy. Sucat</p>
          <span className="text-red-500">
            Active Fire
          </span>
        </div>

        <div className="border-b border-zinc-700 pb-2">
          <p>Brgy. Alabang</p>
          <span className="text-yellow-500">
            Responding
          </span>
        </div>
      </div>
    </div>
  );
}