export default function ChartPanel({ title = "Fire Statistics", type = "line" }) {
  return (
    <div className="bg-zinc-900 rounded-xl p-5 h-[300px]">
      <h2 className="font-bold mb-4 text-sm uppercase text-gray-300">
        {title}
      </h2>

      <div className="h-full flex items-center justify-center bg-zinc-800/50 rounded">
        {type === "line" && (
          <div className="w-full h-full p-4 flex items-end justify-between">
            {[30, 28, 25, 22, 20].map((h, i) => (
              <div key={i} className="flex-1 mx-1">
                <div
                  className="bg-gradient-to-t from-orange-500 to-red-500 rounded-t mx-auto"
                  style={{ height: `${h * 3}px`, width: "60%" }}
                ></div>
              </div>
            ))}
          </div>
        )}
        {type === "pie" && (
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-lime-400"></div>
        )}
      </div>
    </div>
  );
}