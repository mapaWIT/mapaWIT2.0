import { useState } from "react";

export default function Combined() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [path, setPath] = useState([]);

  // 🗺️ All routes inside the campus
  const directions = {
    "RTS Gate-CB Building": [
      { step: "Start at RTS Gate", img: "/AlumniOffice.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RTS Gate-New Building": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RTS Gate-SGS (Small Grandstand)": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RTS Gate-BGS (Big Grandstand)": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RTS Gate-SHS Building": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RTS Gate-RTS Canteen": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RTS Gate-Engineering Dept.": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RTS Gate-EE/Electronics Lab Custodian's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RTS Gate-Hydraulic Laboratory": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RTS Gate-ME Laboratories": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RTS Gate-MarE Smoke House": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RTS Gate-MESO Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RTS Gate-Audio Visual Room": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RTS Gate-Drafting Room": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RTS Gate-COE Extension Services Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RTS Gate-RTS Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RTS Gate-Museo Betanico": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
  };

  // 🔍 Handle Route Search
  const handleSearch = () => {
    const key = `${from}-${to}`;
    const reverseKey = `${to}-${from}`;

    if (directions[key]) {
      setPath(directions[key]);
    } else if (directions[reverseKey]) {
      setPath([...directions[reverseKey]].reverse());
    } else {
      setPath([]);
      alert("Sorry, route not found yet.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Campus Photo Navigation</h1>

      {/* Dropdown Selection Section */}
      <div className="flex flex-col md:flex-row gap-3 mb-6 w-full max-w-md">
        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="border rounded p-2 flex-1"
        >
          <option value="">From...</option>
          <option value="RTS Gate">RTS Gate</option>
          <option value="CB Building">CB Building</option>
          <option value="New Building">New Building</option>
          <option value="SGS (Small Grandstand)">SGS (Small Grandstand)</option>
          <option value="BGS (Big Grandstand)">BGS (Big Grandstand)</option>
          <option value="SHS Building">SHS Building</option>
          <option value="RTS Canteen">RTS Canteen</option>
          <option value="Engineering Dept.">Engineering Dept.</option>
          <option value="EE/Electronics Lab Custodian's Office">EE/Electronics Lab Custodian's Office</option>
          <option value="Hydraulic Laboratory">Hydraulic Laboratory</option>
          <option value="ME Laboratories">ME Laboratories</option>
          <option value="MarE Smoke House">MarE Smoke House</option>
          <option value="MESO Office">MESO Office</option>
          <option value="Audio Visual Room">Audio Visual Room</option>
          <option value="Drafting Room">Drafting Room</option>
          <option value="COE Extension Services Office">COE Extension Services Office</option>
          <option value="RTS Library">RTS Library</option>
          <option value="Museo Betanico">Museo Betanico</option>
        </select>

        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="border rounded p-2 flex-1"
        >
          <option value="">To...</option>
          <option value="RTS Gate">RTS Gate</option>
          <option value="CB Building">CB Building</option>
          <option value="New Building">New Building</option>
          <option value="SGS (Small Grandstand)">SGS (Small Grandstand)</option>
          <option value="BGS (Big Grandstand)">BGS (Big Grandstand)</option>
          <option value="SHS Building">SHS Building</option>
          <option value="RTS Canteen">RTS Canteen</option>
          <option value="Engineering Dept.">Engineering Dept.</option>
          <option value="EE/Electronics Lab Custodian's Office">EE/Electronics Lab Custodian's Office</option>
          <option value="Hydraulic Laboratory">Hydraulic Laboratory</option>
          <option value="ME Laboratories">ME Laboratories</option>
          <option value="MarE Smoke House">MarE Smoke House</option>
          <option value="MESO Office">MESO Office</option>
          <option value="Audio Visual Room">Audio Visual Room</option>
          <option value="Drafting Room">Drafting Room</option>
          <option value="COE Extension Services Office">COE Extension Services Office</option>
          <option value="RTS Library">RTS Library</option>
          <option value="Museo Betanico">Museo Betanico</option>
        </select>

        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Show Directions
        </button>
      </div>

      {/* Scrollable Directions Display */}
      <div className="w-full max-w-lg">
        {path.length > 0 ? (
          <div className="space-y-6 max-h-[600px] overflow-y-auto p-2 bg-white rounded shadow-inner">
            {path.map((step, index) => (
              <div key={index} className="bg-white shadow rounded p-3">
                <p className="font-semibold mb-2">{step.step}</p>

                {/* Scrollable image box */}
                <div className="overflow-auto h-60 rounded border">
                  <img
                    src={step.img}
                    alt={step.step}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">
            Enter your starting and destination points to view directions.
          </p>
        )}
      </div>
    </div>
  );
}
