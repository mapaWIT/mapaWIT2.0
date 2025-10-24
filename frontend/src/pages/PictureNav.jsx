import { useState } from "react";

export default function PictureNav() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [path, setPath] = useState([]);

  // 🗺️ All routes inside the campus
  const directions = {
    "RTS Gate-CB Building": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],

    "RTS Gate-RTS Gym": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk across the open field", img: "/field.jpg" },
      { step: "Turn left towards the gym entrance", img: "/gym_entrance.jpg" },
      { step: "You have arrived at RTS Gym", img: "/rts gym.jpg" },
    ],

    "CB Building-RTS Gym": [
      { step: "Start at CB Building", img: "/cb building.jpg" },
      { step: "Walk past the library", img: "/library.jpg" },
      { step: "Turn left across the field", img: "/field.jpg" },
      { step: "Arrive at RTS Gym", img: "/rts gym.jpg" },
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
          <option value="RTS Gym">RTS Gym</option>
        </select>

        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="border rounded p-2 flex-1"
        >
          <option value="">To...</option>
          <option value="RTS Gate">RTS Gate</option>
          <option value="CB Building">CB Building</option>
          <option value="RTS Gym">RTS Gym</option>
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
