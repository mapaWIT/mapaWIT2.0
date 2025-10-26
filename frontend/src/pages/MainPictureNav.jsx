import { useState } from "react";

export default function Combined() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [path, setPath] = useState([]);

  // 🗺️ All routes inside the campus
  const directions = {
    "Main Gate-SDMC": [
      { step: "Locate the Main building. Main Building is located in front of St. Clements.", img: "/MainBuilding.jpg" },
      { step: "After you cross the pedestrian lane, walk straight ahead until the Main Entrance comes into view.", img: "/MainEntrance.jpg" },
      { step: "Upon entering the entrance in your left you will see the SDMC.", img: "/SDMC.jpg" },
    ],
    "Main Gate-SG Office": [
      { step: "After you cross the pedestrian lane, walk straight ahead until the Main Entrance comes into view.", img: "/MainEntrance.jpg" },
      { step: "Turn to your right, pass behind the table of the guard.", img: "/SGHallway.jpg" },
      { step: "Continue walking through the small hallway leading you to the SG Office.", img: "/SGOffice.jpg" },
    ],
    "Main Gate-Guidance Center": [
      { step: "After you cross the pedestrian lane, walk straight ahead until the Main Entrance comes into view.", img: "/MainEntrance.jpg" },
      { step: "After passing the main entrance continue walking until in the intersection.", img: "/MHAllway1.1.jpg" },
      { step: "Turn right in a hallway leading you to Guidance center.", img: "/GHallway.jpg" },
      { step: "The Guidance center is located in front of the Personnel Office/Student affair.", img: "/GuidanceCenter.jpg" },
    ],
    "Main Gate-Accounting Office (Window)": [
      { step: "After you cross the pedestrian lane, walk straight ahead until the Main Entrance comes into view.", img: "/MainEntrance.jpg" },
      { step: "After passing the main entrance continue walking until in the intersection.", img: "/MHAllway1.1.jpg" },
      { step: "Turn left leading you to the Accounting Office.", img: "/IMG_4647.jpg" },
    ],
    "Main Gate-Personnel Office": [
      { step: "After you cross the pedestrian lane, walk straight ahead until the Main Entrance comes into view.", img: "/MainEntrance.jpg" },
      { step: "After passing the main entrance continue walking until in the intersection.", img: "/MHAllway1.1.jpg" },
      { step: "Turn right in a hallway continue walking leading you to the Personnel office.", img: "/GHallway.jpg" },
      { step: "In front of Guidance center there is a room, enter the room walk straight and you will find the personnel office. The student affairs office, cultural affairs office, and personal office is located inside that room.", img: "/PersonnelOffice.jpg" },
    ],
    "Main Gate-Comptroller Office": [
      { step: "After you cross the pedestrian lane, walk straight ahead until the Main Entrance comes into view.", img: "/MainEntrance.jpg" },
      { step: "After passing the main entrance continue walking until in the intersection.", img: "/MHAllway1.1.jpg" },
      { step: "Enter another corridor, walk straight then turn left to another corridor.", img: "/MHallway2.jpg" },
      { step: "Enter the Accountancy hallway. The first door in your left side is the comptroller office.", img: "/AccountancyHall.jpg" },
    ],
    "Main Gate-Registrar Office": [
      { step: "After you cross the pedestrian lane, walk straight ahead until the Main Entrance comes into view.", img: "/MainEntrance.jpg" },
      { step: "After passing the main entrance continue walking until in the intersection.", img: "/MHAllway1.1.jpg" },
      { step: "Enter another corridor, walk straight then turn left to another corridor.", img: "/MHallway2.jpg" },
      { step: "Enter the Accountancy hallway. After passing the comptroller walk straight until the last window.", img: "/AccountancyHall.jpg" },
    ],
    "Main Gate-Accounting Office": [
      { step: "After you cross the pedestrian lane, walk straight ahead until the Main Entrance comes into view.", img: "/MainEntrance.jpg" },
      { step: "After passing the main entrance continue walking until in the intersection.", img: "/MHAllway1.1.jpg" },
      { step: "Enter another corridor, walk straight then turn left to another corridor.", img: "/MHallway2.jpg" },
      { step: "Enter the Accountancy hallway. After passing the Comptroller Office, the Accounting Office is located right beside.", img: "/AccountancyHall.jpg" },
    ],
    "Main Gate-Dental Clinic": [
      { step: "After you cross the pedestrian lane, walk straight ahead until the Main Entrance comes into view.", img: "/MainEntrance.jpg" },
      { step: "After passing the main entrance continue walking until in the intersection.", img: "/MHAllway1.1.jpg" },
      { step: "Enter another corridor, walk straight until the end.", img: "/MHallway2.jpg" },
      { step: "The end of the hallway is the Head Medical/Dental Department.", img: "/Dental_Academic.jpg" },
    ],
    "Main Gate-Chairman of Academic Affair": [
      { step: "After you cross the pedestrian lane, walk straight ahead until the Main Entrance comes into view.", img: "/MainEntrance.jpg" },
      { step: "After passing the main entrance continue walking until in the intersection.", img: "/MHAllway1.1.jpg" },
      { step: "Enter another corridor, walk straight until the end.", img: "/MHallway2.jpg" },
      { step: "The end of the hallway is the Head Medical/Dental Department.", img: "/Dental_Academic.jpg" },
      { step: "Beside of the Medical/Dental Department is CSU, Academic council.", img: "/Dental_Academic.jpg" },
    ],
    "Main Gate-Cashier": [
      { step: "After you cross the pedestrian lane, walk straight ahead until the Main Entrance comes into view.", img: "/MainEntrance.jpg" },
      { step: "After passing the main entrance continue walking until in the intersection.", img: "/MHAllway1.1.jpg" },
      { step: "Enter another corridor, walk straight until the end.", img: "/MHallway2.jpg" },
      { step: "In front of clinic turn left, you will see a signage CASHIER.", img: "/MHallway4.jpg" },
      { step: "The cashier is located in front of elevator.", img: "/Cashier.jpg" },
    ],
    "Main Gate-Cashier": [
      { step: "After you cross the pedestrian lane, walk straight ahead until the Main Entrance comes into view.", img: "/MainEntrance.jpg" },
      { step: "After passing the main entrance continue walking until in the intersection.", img: "/MHAllway1.1.jpg" },
      { step: "Enter another corridor, walk straight until the end.", img: "/MHallway2.jpg" },
      { step: "In front of clinic turn left, you will see a signage CASHIER.", img: "/MHallway4.jpg" },
      { step: "The cashier is located in front of elevator.", img: "/Cashier.jpg" },
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
        </select>

        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="border rounded p-2 flex-1"
        >
          <option value="">To...</option>
          <option value="SDMC">School Disaster Management Office</option>
          <option value="SG Office">SG Office</option>
          <option value="Guidance Center">Guidance Center</option>
          <option value="Accounting Office (Window)">Accounting Office (Window)</option>
          <option value="Personnel Office">Personnel Office</option>
          <option value="Comptroller Office">Comptroller Office</option>
          <option value="Registrar Office">Registrar Office</option>
          <option value="Accounting Office">Accounting Office</option>
          <option value="Dental Clinic">Medical/Dental Department</option>
          <option value="Cashier">Cashier</option>
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