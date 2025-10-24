import { useState } from "react";

export default function Combined() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [path, setPath] = useState([]);

  // 🗺️ All routes inside the campus
  const directions = {
    "Main Gate-Dean of Student Affairs Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-Electrical Utility Room": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-CSU Academic Council": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-RM-104/Chem Lab": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-SHS Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-President's Conference Room": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-Chairman's Office, WIT Inc.": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-HM Dept Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-Graduate School (219) RM-219": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-RM-220/Faculty Room": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-HM Mini Hotel, Restaurant, Bar, and Kitchen": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-Cultural Affair Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-CBA Faculty Room/RM-314": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-Business and Accountancy Dean's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-Computer Room Laboratory/RM 310": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-Accountancy Department Head's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-Terrace": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-Main Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-Library Supervisor's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-Graduate School Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-Speech Laboratory/RM-400B": [
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
          <option value="Main Gate">Main Gate</option>
          <option value="Dean of Student Affairs Office">Dean of Student Affairs Office</option>
          <option value="Electrical Utility Room">Electrical Utility Room</option>
          <option value="CSU Academic Council">CSU Academic Council</option>
          <option value="RM-104/Chem Lab">RM-104/Chem Lab</option>
          <option value="SHS Office">SHS Office</option>
          <option value="President's Conference Room">President's Conference Room</option>
          <option value="Chairman's Office, WIT Inc.">Chairman's Office, WIT Inc.</option>
          <option value="HM Dept Office">HM Dept Office</option>
          <option value="Graduate School (219) RM-219">Graduate School (219) RM-219</option>
          <option value="RM-220/Faculty Room">RM-220/Faculty Room</option>
          <option value="HM Mini Hotel, Restaurant, Bar, and Kitchen">HM Mini Hotel, Restaurant, Bar, and Kitchen</option>
          <option value="Cultural Affair Office">Cultural Affair Office</option>
          <option value="CBA Faculty Room/RM-314">CBA Faculty Room/RM-314</option>
          <option value="Business and Accountancy Dean's Office">Business and Accountancy Dean's Office</option>
          <option value="Computer Room Laboratory/RM 310">Computer Room Laboratory/RM 310</option>
          <option value="Accountancy Department Head's Office">Accountancy Department Head's Office</option>
          <option value="Terrace">Terrace</option>
          <option value="Main Library">Main Library</option>
          <option value="Library Supervisor's Office">Library Supervisor's Office</option>
          <option value="Graduate School Library">Graduate School Library</option>
          <option value="Speech Laboratory/RM-400B">Speech Laboratory/RM-400B</option>
        </select>

        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="border rounded p-2 flex-1"
        >
          <option value="">From...</option>
          <option value="Main Gate">Main Gate</option>
          <option value="Dean of Student Affairs Office">Dean of Student Affairs Office</option>
          <option value="Electrical Utility Room">Electrical Utility Room</option>
          <option value="CSU Academic Council">CSU Academic Council</option>
          <option value="RM-104/Chem Lab">RM-104/Chem Lab</option>
          <option value="SHS Office">SHS Office</option>
          <option value="President's Conference Room">President's Conference Room</option>
          <option value="Chairman's Office, WIT Inc.">Chairman's Office, WIT Inc.</option>
          <option value="HM Dept Office">HM Dept Office</option>
          <option value="Graduate School (219) RM-219">Graduate School (219) RM-219</option>
          <option value="RM-220/Faculty Room">RM-220/Faculty Room</option>
          <option value="HM Mini Hotel, Restaurant, Bar, and Kitchen">HM Mini Hotel, Restaurant, Bar, and Kitchen</option>
          <option value="Cultural Affair Office">Cultural Affair Office</option>
          <option value="CBA Faculty Room/RM-314">CBA Faculty Room/RM-314</option>
          <option value="Business and Accountancy Dean's Office">Business and Accountancy Dean's Office</option>
          <option value="Computer Room Laboratory/RM 310">Computer Room Laboratory/RM 310</option>
          <option value="Accountancy Department Head's Office">Accountancy Department Head's Office</option>
          <option value="Terrace">Terrace</option>
          <option value="Main Library">Main Library</option>
          <option value="Library Supervisor's Office">Library Supervisor's Office</option>
          <option value="Graduate School Library">Graduate School Library</option>
          <option value="Speech Laboratory/RM-400B">Speech Laboratory/RM-400B</option>
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