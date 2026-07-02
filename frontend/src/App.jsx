import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Analytics from "./pages/Analytics";
import ThermalFeeds from "./pages/ThermalFeeds";
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Reports" element={<Reports />} />
        <Route path="/Analytics" element={<Analytics />} />
        <Route path="/thermal-feeds" element={<ThermalFeeds />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;