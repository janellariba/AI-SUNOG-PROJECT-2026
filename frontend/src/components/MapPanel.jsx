import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// fix default marker issue in React (very important)
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function MapPanel() {
  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden">
      <div className="bg-zinc-800 p-4 border-b border-zinc-700">
        <h2 className="font-bold text-sm uppercase text-gray-300">
          Geographic Incident Map - Muntinlupa City
        </h2>
      </div>

      <div className="h-[450px]">
        <MapContainer
          center={[14.4081, 121.0415]} // Muntinlupa coords
          zoom={13}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[14.409, 121.045]}>
            <Popup>Brgy. Sucat Incident</Popup>
          </Marker>

          <Marker position={[14.383, 121.041]}>
            <Popup>Brgy. Alabang Incident</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}