export default function KPIcard({ title, value, color }) {
  return (
    <div className={`flex flex-col items-center justify-center border border-gray-700 rounded-lg px-3 py-0.5 min-w-max gap-1 text-center ${color}`}>
      <p className="text-gray-500 text-xs uppercase font tracking-widest">
        {title}
      </p>
      <h2 className="text-xl font mt-1">
        {value}
      </h2>
    </div>
  );
}