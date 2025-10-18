import { useEffect, useState, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import VectorSVG from "../assets/design1.svg";

// --- Campus coordinates
const campuses = {
  main: { name: "Main Campus", lat: 10.711031, lng: 122.566135 },
  rts: { name: "RTS Campus", lat: 10.708422, lng: 122.563785 },
  science: { name: "Science Building", lat: 10.710697, lng: 122.565102 },
};

// --- Campus icon
const campusIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [35, 35],
});

// --- Pulsing "You" marker
const pulsingIcon = L.divIcon({
  html: `
    <div class="relative flex items-center justify-center">
      <div class="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-blue-400 opacity-75"></div>
      <div class="relative inline-flex rounded-full h-4 w-4 bg-blue-600 border-2 border-white shadow-md"></div>
    </div>
  `,
  className: "",
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

// --- Recenter once for initial location
function RecenterOnce({ position }) {
  const map = useMap();
  const hasCentered = useRef(false);

  useEffect(() => {
    if (position && !hasCentered.current) {
      map.setView(position, 16);
      hasCentered.current = true;
    }
  }, [position, map]);

  return null;
}

// --- Routing with live updates
function Routing({ start, destination, currentPos }) {
  const map = useMap();
  const routingRef = useRef(null);

  // Initialize route
  useEffect(() => {
    if (!start || !destination) return;

    if (routingRef.current) map.removeControl(routingRef.current);

    routingRef.current = L.Routing.control({
      waypoints: [
        L.latLng(start.lat, start.lng),
        L.latLng(destination.lat, destination.lng),
      ],
      routeWhileDragging: false,
      addWaypoints: false,
      draggableWaypoints: false,
      show: false,
      lineOptions: { styles: [{ color: "#7e22ce", weight: 6 }] },
    }).addTo(map);

    return () => routingRef.current && map.removeControl(routingRef.current);
  }, [start, destination, map]);

  // Live update if starting from current location
  useEffect(() => {
    if (start !== "current" || !currentPos) return;
    if (routingRef.current) {
      routingRef.current.setWaypoints([
        L.latLng(currentPos.lat, currentPos.lng),
        L.latLng(destination.lat, destination.lng),
      ]);
    }
  }, [currentPos, destination, start]);

  return null;
}

// --- Smooth moving marker
function SmoothMarker({ position, icon }) {
  const markerRef = useRef(null);
  const [latLng, setLatLng] = useState(position);

  useEffect(() => {
    if (!position) return;

    const frames = 20;
    const duration = 500; // ms
    const deltaLat = (position.lat - latLng.lat) / frames;
    const deltaLng = (position.lng - latLng.lng) / frames;

    let i = 0;
    const anim = setInterval(() => {
      i++;
      setLatLng((prev) => ({
        lat: prev.lat + deltaLat,
        lng: prev.lng + deltaLng,
      }));
      if (i >= frames) clearInterval(anim);
    }, duration / frames);

    return () => clearInterval(anim);
  }, [position]);

  return <Marker position={latLng} icon={icon} ref={markerRef} />;
}

// --- Helper: distance in meters
function getDistance(a, b) {
  const R = 6371000;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;

  const hav =
    Math.sin(dLat / 2) ** 2 +
    Math.sin(dLng / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(hav), Math.sqrt(1 - hav));
  return R * c;
}

// --- Main Component
export default function Navigate() {
  const [currentPos, setCurrentPos] = useState(null);
  const [start, setStart] = useState("current");
  const [destination, setDestination] = useState("rts");

  // GPS tracking with throttling
  useEffect(() => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported.");
      return;
    }

    let lastPos = null;

    const watch = navigator.geolocation.watchPosition(
      (pos) => {
        const newPos = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        if (!lastPos || getDistance(lastPos, newPos) > 5) {
          setCurrentPos(newPos);
          lastPos = newPos;
        }
      },
      (err) => console.error("Location error:", err),
      { enableHighAccuracy: true }
    );

    return () => navigator.geolocation.clearWatch(watch);
  }, []);

  const startPoint =
    start === "current" && currentPos ? currentPos : campuses[start];

  return (
    <div className="bg-[#FBF6FF] min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-[#6F35A6] to-[#CE94FA] flex justify-between items-center px-10 py-2">
        <Link to="/options" className="hover:text-[#8D21E1] text-[#D297FF] text-3xl">
          <AiOutlineArrowLeft />
        </Link>
        <div className="flex space-x-5 text-sm font-normal">
          <Link to="/how-to-use" className="hover:text-[#D297FF] text-[#FBF6FF]">
            How to Use MapaWIT
          </Link>
          <Link to="/about" className="hover:text-[#D297FF] text-[#FBF6FF]">
            About
          </Link>
        </div>
      </nav>

      {/* Background and Map Section */}
      <div className="relative w-full flex-1 bg-gradient-to-r from-[#6F35A6] to-[#CE94FA] overflow-hidden">
        {/* Background SVGs */}
        <img
          src={VectorSVG}
          alt="Decorative Vector"
          className="absolute -bottom-7.5 left-0 w-full z-0 opacity-100"
        />
        <div className="absolute bottom-7.5 right-0 w-full z-0 opacity-80">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,300 C100,500 1080,-400 1440,240 L1440,320 L0,320 Z"
            />
          </svg>
        </div>

        {/* Header */}
        <div className="relative z-10 flex flex-col items-center text-center pt-10 -pb-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-white drop-shadow-md">
            Navigate WIT Campus with Ease!
          </h1>
          <p className="mt-2 text-lg text-white/90">
            Track campus by campus here
          </p>

          {/* Controls */}
          <div className="flex space-x-3 mt-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg">
            <select
              value={start}
              onChange={(e) => setStart(e.target.value)}
              className="px-3 py-1 rounded text-black font-semibold"
            >
              <option value="current">📍 Me (My Location)</option>
              <option value="main">🏫 Main Campus</option>
              <option value="rts">🏢 RTS Campus</option>
              <option value="science">🔬 Science Building</option>
            </select>

            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="px-3 py-1 rounded text-black font-semibold"
            >
              <option value="main">🏫 Main Campus</option>
              <option value="rts">🏢 RTS Campus</option>
              <option value="science">🔬 Science Building</option>
            </select>
          </div>
        </div>

        {/* Map */}
        <div className="relative z-10 w-[90%] h-[70vh] mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/20 mb-10">
          <MapContainer
            center={startPoint || campuses.main}
            zoom={16}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Smooth live marker */}
            {currentPos && <SmoothMarker position={currentPos} icon={pulsingIcon} />}

            {/* Campus markers */}
            {Object.entries(campuses).map(([key, campus]) => (
              <Marker
                key={key}
                position={[campus.lat, campus.lng]}
                icon={campusIcon}
              >
                <Popup>
                  <div className="text-center w-[230px]">
                    <h3 className="font-bold text-purple-700">{campus.name}</h3>
                    <button
                      className="mt-2 bg-purple-600 hover:bg-purple-700 px-3 py-1 text-xs text-white rounded-lg transition"
                      onClick={() => setDestination(key)}
                    >
                      🚶 Go here
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}

            {/* Routing with live updates */}
            {startPoint && destination && (
              <Routing
                start={startPoint}
                destination={campuses[destination]}
                currentPos={currentPos}
              />
            )}

            {/* Recenter only once for initial position */}
            {start === "current" && currentPos && <RecenterOnce position={currentPos} />}
            {start !== "current" && <Recenter position={startPoint} />}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}