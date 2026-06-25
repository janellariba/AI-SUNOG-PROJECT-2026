export default function KPIcard({ title, value, color }) {
  return (
    <div className="flex flex-col">
      <p className="text-gray-400 text-xs uppercase font-semibold tracking-wide">
        {title}
      </p>
      <h2 className={`text-2xl font-bold ${color} mt-1`}>
        {value}
      </h2>
    </div>
  );
}