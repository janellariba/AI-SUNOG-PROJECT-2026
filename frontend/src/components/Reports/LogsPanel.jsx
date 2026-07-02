export default function LogsPanel() {
  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden">
      <div className="bg-zinc-800 p-4 border-b border-zinc-700">
        <h2 className="font-bold text-sm text-gray-300">
          Incident Logs
        </h2>
        <table class="table-auto md:table-fixed border-collapse border-spacing-2 bg-zinc-700 w-full text-left text-gray-300 text-sm mt-2 pl-1.5">
  <thead>
    <tr>
      <th class="bg-zinc-600">Date</th>
      <th class="bg-zinc-600">Time</th>
      <th class="bg-zinc-600">Camera</th>
      <th class="bg-zinc-600">Latitude</th>
      <th class="bg-zinc-600">Longitude</th>
      <th class="bg-zinc-600">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-500 pl-2">07/02/2026</td>
      <td class="border border-gray-500 pl-2">14:30</td>
      <td class="border border-gray-500 pl-2">Camera 1</td>
      <td class="border border-gray-500 pl-2">10.7626</td>
      <td class="border border-gray-500 pl-2">122.9455</td>
      <td class="border border-gray-500 pl-2">Active</td>
    </tr>
  </tbody>
</table>
      </div>
    </div>
  );
}