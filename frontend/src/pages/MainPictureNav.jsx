import React, { useState } from "react";
import { Link } from "react-router-dom";
import VectorSVG from "../assets/design1.svg";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function MainPictureNav() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [path, setPath] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🗺️ All routes inside the campus
  const directions = {
    "Main Gate-SB Entrance": [
      { step: "Cross the pedestrian lane in front of ST. Clements.", img: "/Main road 1.jpg" },
      { step: "Pass the waiting shed in front of main building.", img: "/RTS road 7.jpg" },
      { step: "Proceed straight, then make a left turn.", img: "/RTS road 8.jpg" },
      { step: "Walk straight then turn right.", img: "/RTS road 9.jpg" },
      { step: "Walk straight ahead until the SB Entrance comes into view.", img: "/SB Entrance.jpg" },
    ],

    "Main Gate-RTS ENTRANCE":[
      { step: "Cross the pedestrian lane in front of ST. Clements.", img: "/Main road 1.jpg" },
      { step: "Walk straight until you reach the waiting shed.", img: "SB road 3.jpg" },
      { step: "Walk straight until you reach St. Clements.", img: "/SB road 4.jpg" },
      { step: "Walk until you reach the you Hyun Gadgets.", img: "SB road 5.jpg" },
      { step: "Pass the CZ and palawan.", img: "/SB road 6.jpg" },
      { step: "Walk straight then make a left turn.", img: "/SB road 7.jpg" },
      { step: "Proceed walking then make a right turn.", img: "/SB road 8.jpg" },
      { step: "Walk straight until rts gate.", img: "/SB road 9.jpg" },
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/RTS ENTRANCE.jpg" },
    ],

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
      { step: "In front of clinic turn left, you will see a signage CASHIER.", img: "/Mhallway4.jpg" },
      { step: "The cashier is located in front of elevator.", img: "/Cashier.jpg" },
    ],
    "Main Gate-SIO": [
      { step: "After you cross the pedestrian lane, walk straight ahead until the Main Entrance comes into view.", img: "/MainEntrance.jpg" },
      { step: "After passing the main entrance continue walking until in the intersection.", img: "/MHAllway1.1.jpg" },
      { step: "Enter another corridor, walk straight until the end.", img: "/MHallway2.jpg" },
      { step: "In front of clinic turn left, you will see a signage CASHIER.", img: "/Mhallway4.jpg" },
      { step: "The cashier is located in front of elevator.", img: "/Cashier.jpg" },
      { step: "Walk in the pathway beneath the elevator.", img: "/Mhallway4.jpg" },
      { step: "After passing the wash area, the first room is the supply and inventory office.", img: "/SIO.jpg" },
    ],
    "Main Gate-PCO": [
      { step: "After you cross the pedestrian lane, walk straight ahead until the Main Entrance comes into view.", img: "/MainEntrance.jpg" },
      { step: "After passing the main entrance continue walking until in the intersection.", img: "/MHAllway1.1.jpg" },
      { step: "Enter another corridor, walk straight until the end.", img: "/MHallway2.jpg" },
      { step: "In front of clinic turn left, you will see a signage CASHIER.", img: "/Mhallway4.jpg" },
      { step: "The cashier is located in front of elevator.", img: "/Cashier.jpg" },
      { step: "Walk in the pathway beneath the elevator.", img: "/Mhallway4.jpg" },
      { step: "Walk straight and past the washing area.", img: "/Mhallway5.jpg" },
      { step: "The PCO is located beside the Supply and inventory office.", img: "/PCO.jpg" },
    ],
    "Main Gate-MIS Office": [
      { step: "After you cross the pedestrian lane, walk straight ahead until the Main Entrance comes into view.", img: "/MainEntrance.jpg" },
      { step: "After passing the main entrance continue walking until in the intersection.", img: "/MHAllway1.1.jpg" },
      { step: "Enter another corridor, walk straight until the end.", img: "/MHallway2.jpg" },
      { step: "In front of clinic turn left, you will see a signage CASHIER.", img: "/Mhallway4.jpg" },
      { step: "The cashier is located in front of elevator.", img: "/Cashier.jpg" },
      { step: "Walk in the pathway beneath the elevator.", img: "/Mhallway4.jpg" },
      { step: "Walk straight and past the washing area.", img: "/Mhallway5.jpg" },
      { step: "Pass the PCO and continue walking in the next door, you will see the MIS Office.", img: "/MISOffice.jpg" },
    ],
    "Main Gate-Bio Lab": [
      { step: "After you cross the pedestrian lane, walk straight ahead until the Main Entrance comes into view.", img: "/MainEntrance.jpg" },
      { step: "After passing the main entrance continue walking until in the intersection.", img: "/MHAllway1.1.jpg" },
      { step: "Enter another corridor, walk straight until the end.", img: "/MHallway2.jpg" },
      { step: "In front of clinic turn left, you will see a signage CASHIER.", img: "/Mhallway4.jpg" },
      { step: "The cashier is located in front of elevator.", img: "/Cashier.jpg" },
      { step: "Walk in the pathway beneath the elevator.", img: "/Mhallway4.jpg" },
      { step: "Walk straight and past the washing area.", img: "/Mhallway5.jpg" },
      { step: "Continue walking through the pathway.", img: "/MHAllway6.jpg" },
      { step: "The Bio laboratory is located at room 106.", img: "/BioLab.jpg" },
    ],
    "Main Gate-Canteen": [
      { step: "After you cross the pedestrian lane, walk straight ahead until the Main Entrance comes into view.", img: "/MainEntrance.jpg" },
      { step: "Continue walking and pass through SDMC.", img: "/SDMC.jpg" },
      { step: "After passing the parking lot, walk straight to the canteen.", img: "/Parkinglot.jpg" },
      { step: "After passing the parking lot, walk straight to the canteen.", img: "/canteen.jpg" },
    ],
    "Main Gate-Smoking Area": [
      { step: "After you cross the pedestrian lane, walk straight ahead until the Main Entrance comes into view.", img: "/MainEntrance.jpg" },
      { step: "Continue walking and pass through SDMC.", img: "/SDMC.jpg" },
      { step: "The smoking area is located beside the Electrical utility room.", img: "/SmokingArea.jpg" },
    ],
    "Main Gate-Electrical Utility Room": [
      { step: "After you cross the pedestrian lane, walk straight ahead until the Main Entrance comes into view.", img: "/MainEntrance.jpg" },
      { step: "Continue walking and pass through SDMC.", img: "/SDMC.jpg" },
      { step: "The Electrical utility room is located beside the canteen.", img: "/EUR.jpg" },
    ],
    "Main Gate-Chemistry Lab": [
      { step: "After you cross the pedestrian lane, walk straight ahead until the Main Entrance comes into view.", img: "/MainEntrance.jpg" },
      { step: "Continue walking and pass through SDMC.", img: "/SDMC.jpg" },
      { step: "The Electrical utility room is located beside the canteen.", img: "/EUR.jpg" },
      { step: "Continue walking until you arrived at the hallway.", img: "/MHallway7.jpg" },
      { step: "Through walking you will pass by room 101.", img: "/MHallway8.jpg" },
      { step: "Walk straight the corridor until you see a signage chem lab.", img: "/ChemLab.jpg" },
    ],
    "Main Gate-CAS Laboratory": [
      { step: "After you cross the pedestrian lane, walk straight ahead until the Main Entrance comes into view.", img: "/MainEntrance.jpg" },
      { step: "Continue walking and pass through SDMC.", img: "/SDMC.jpg" },
      { step: "The Electrical utility room is located beside the canteen.", img: "/EUR.jpg" },
      { step: "Continue walking until you arrived at the hallway.", img: "/MHallway7.jpg" },
      { step: "Through walking you will pass by room 101.", img: "/MHallway8.jpg" },
      { step: "Walk straight until the end of the hallway. The CAS Laboratory is the room at that endpoint.", img: "/CasLab.jpg" },
    ],
    "Main Gate-President's Office": [
      { step: "After you cross the pedestrian lane, walk straight ahead until the Main Entrance comes into view.", img: "/MainEntrance.jpg" },
      { step: "After passing the main entrance continue walking until in the intersection.", img: "/MHAllway1.1.jpg" },
      { step: "Enter another corridor, walk straight until the end.", img: "/MHallway2.jpg" },
      { step: "In front of clinic turn left, you will see a signage CASHIER.", img: "/Mhallway4.jpg" },
      { step: "The cashier is located in front of elevator.", img: "/Cashier.jpg" },
      { step: "Walk in the pathway beneath the elevator.", img: "/Mhallway4.jpg" },
      { step: "Walk straight in a small pathway and take the stair leading you to second floor.", img: "/MHallway9.jpg" },
      { step: "Once you are on the Second Floor, walk straight. There is a pathway beneath the stairs that leads you directly to the President's Office.", img: "/Mhallway10.jpg" },
      { step: "The room located at the endpoint of the corridor is the President's Office.", img: "PresOffice.jpg" },
    ],
    "Main Gate-HRM Workshop": [
      { step: "After you cross the pedestrian lane, walk straight ahead until the Main Entrance comes into view.", img: "/MainEntrance.jpg" },
      { step: "Continue walking and pass through SDMC.", img: "/SDMC.jpg" },
      { step: "Continue walking until you arrived at the hallway.", img: "/MHallway7.jpg" },
      { step: "Pass the room 101, walk straight until the end point you will see a stair leading you to second floor.", img: "/MHallway8.jpg" },
      { step: "Walk straight and you will see the HRM Workshop", img: "/MHallway8.jpg" },
    ],
    "Main Gate-College of Arts and Science/Dean's Office": [
      { step: "After you cross the pedestrian lane, walk straight ahead until the Main Entrance comes into view.", img: "/MainEntrance.jpg" },
      { step: "Enter another corridor, walk straight until the end.", img: "/MHallway2.jpg" },
      { step: "Walk in the pathway beneath the elevator.", img: "/Mhallway4.jpg" },
      { step: "Walk straight in a small pathway and take the stair leading you to second floor.", img: "/MHallway9.jpg" },
      { step: "Once you are on the Second Floor, turn right to the hallway.", img: "/Mhallway10.jpg" },
      { step: "Walk straight the long hallway until the end.", img: "/MHallway13.jpg" },
      { step: "The last room beside witdio is College of arts and science head office/dean’s office.", img: "/casdean.jpg" },
    ],
    "Main Gate-Witdio": [
      { step: "After you cross the pedestrian lane, walk straight ahead until the Main Entrance comes into view.", img: "/MainEntrance.jpg" },
      { step: "Enter another corridor, walk straight until the end.", img: "/MHallway2.jpg" },
      { step: "Walk in the pathway beneath the elevator.", img: "/Mhallway4.jpg" },
      { step: "Walk straight in a small pathway and take the stair leading you to second floor.", img: "/MHallway9.jpg" },
      { step: "Once you are on the Second Floor, turn right to the hallway.", img: "/Mhallway10.jpg" },
      { step: "Walk straight the long hallway until the end.", img: "/MHallway13.jpg" },
      { step: "The witdio is beside College of arts and science head office/dean’s office", img: "/Witdio.jpg" },
    ],
    "Main Gate-Computer Lab 1": [
      { step: "After you cross the pedestrian lane, walk straight ahead until the Main Entrance comes into view.", img: "/MainEntrance.jpg" },
      { step: "Continue walking and pass through SDMC.", img: "/SDMC.jpg" },
      { step: "The Electrical utility room is located beside the canteen.", img: "/EUR.jpg" },
      { step: "Continue walking until you arrived at the hallway.", img: "/MHallway7.jpg" },
      { step: "Take the stairs beside room 101 leading you to third floor.", img: "/MHallway8.jpg" },
      { step: "The first room in your right side is the Computer Lab 1.", img: "/ComputerLab.jpg" },
    ],
    "Main Gate-Computer Lab 2": [
      { step: "After you cross the pedestrian lane, walk straight ahead until the Main Entrance comes into view.", img: "/MainEntrance.jpg" },
      { step: "Continue walking and pass through SDMC.", img: "/SDMC.jpg" },
      { step: "The Electrical utility room is located beside the canteen.", img: "/EUR.jpg" },
      { step: "Continue walking until you arrived at the hallway.", img: "/MHallway7.jpg" },
      { step: "Take the stairs beside room 101 leading you to third floor.", img: "/MHallway8.jpg" },
      { step: "The first room in your right side is the Computer Lab 2.", img: "/complab2.jpg" },
    ],
    "Main Gate-Dean College of Business and Accountancy": [
      { step: "After you cross the pedestrian lane, walk straight ahead until the Main Entrance comes into view.", img: "/MainEntrance.jpg" },
      { step: "Continue walking and pass through SDMC.", img: "/SDMC.jpg" },
      { step: "The Electrical utility room is located beside the canteen.", img: "/EUR.jpg" },
      { step: "Continue walking until you arrived at the hallway.", img: "/MHallway7.jpg" },
      { step: "Take the stairs beside room 101 leading you to third floor.", img: "/MHallway8.jpg" },
      { step: "The room in front of you is the College of Business and Accountancy.", img: "/CBA.jpg" },
    ],
    "Main Gate-Ladies Hall": [
      { step: "After you cross the pedestrian lane, walk straight ahead until the Main Entrance comes into view.", img: "/MainEntrance.jpg" },
      { step: "Continue walking and pass through SDMC.", img: "/SDMC.jpg" },
      { step: "The Electrical utility room is located beside the canteen.", img: "/EUR.jpg" },
      { step: "Continue walking until you arrived at the hallway.", img: "/MHallway7.jpg" },
      { step: "Take the stairs beside room 101 leading you to third floor.", img: "/MHallway8.jpg" },
      { step: "After seeing the CBA Office, turn right into the hallway and follow it to the end. Once there, turn right again into the new corridor.", img: "/CBA.jpg" },
      { step: "The last door in the corridor is the Ladies hall.", img: "/LadiesHall.jpg" },
    ],
    "Main Gate-Head of Accountancy": [
      { step: "After you cross the pedestrian lane, walk straight ahead until the Main Entrance comes into view.", img: "/MainEntrance.jpg" },
      { step: "Enter another corridor, walk straight until the end.", img: "/MHallway2.jpg" },
      { step: "Walk in the pathway and take the elevator up until third floor.", img: "/Mhallway4.jpg" },
      { step: "After you exit the elevator, the Head Accountancy Office will be immediately in your view.", img: "/HeadAccountancy.jpg" },
    ],
    "Main Gate-Graduate School Library": [
      { step: "After you cross the pedestrian lane, walk straight ahead until the Main Entrance comes into view.", img: "/MainEntrance.jpg" },
      { step: "Enter another corridor, walk straight until the end.", img: "/MHallway2.jpg" },
      { step: "Walk in the pathway and take the elevator up until fourth floor.", img: "/Mhallway4.jpg" },
      { step: "After you exit the elevator, the Graduate School Library will be immediately in your view.", img: "/GradLibrary.jpg" },
    ],
    "Main Gate-Main Library": [
      { step: "After you cross the pedestrian lane, walk straight ahead until the Main Entrance comes into view.", img: "/MainEntrance.jpg" },
      { step: "Continue walking and pass through SDMC.", img: "/SDMC.jpg" },
      { step: "The Electrical utility room is located beside the canteen.", img: "/EUR.jpg" },
      { step: "Continue walking until you arrived at the hallway.", img: "/MHallway7.jpg" },
      { step: "Take the stair up to 4th floor.", img: "/MHallway8.jpg" },
      { step: "The Graduate School Library will be immediately in your view.", img: "/MainLibrary.jpg" },
    ],
    "Main Gate-Terrace": [
      { step: "After you cross the pedestrian lane, walk straight ahead until the Main Entrance comes into view.", img: "/MainEntrance.jpg" },
      { step: "Continue walking and pass through SDMC.", img: "/SDMC.jpg" },
      { step: "The Electrical utility room is located beside the canteen.", img: "/EUR.jpg" },
      { step: "Continue walking until you arrived at the hallway.", img: "/MHallway7.jpg" },
      { step: "Take the stair up to 4th floor.", img: "/MHallway8.jpg" },
      { step: "The rooftop will be immediately in your view.", img: "/IMG_4687.jpg" },
    ],
  };

  // 🔍 Handle search
    const handleSearch = () => {
      const key = `${from}-${to}`;
      const reverseKey = `${to}-${from}`;
      if (directions[key]) {
        setPath(directions[key]);
        setCurrentIndex(0);
      } else if (directions[reverseKey]) {
        setPath([...directions[reverseKey]].reverse());
        setCurrentIndex(0);
      } else {
        setPath([]);
        alert("Sorry, route not found yet.");
      }
    };
  
    // ⬅️➡️ Navigation
    const handlePrev = () => {
      if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };
    const handleNext = () => {
      if (currentIndex < path.length - 1) setCurrentIndex(currentIndex + 1);
    };
  
    return (
      <div className="relative min-h-screen">
        {/* Background */}
        <div className="fixed inset-0 bg-gradient-to-r from-[#6F35A6] to-[#CE94FA] overflow-hidden z-0 mt-11">
          <img
            src={VectorSVG}
            alt="Decorative Vector"
            className="absolute -bottom-19 left-0 w-full opacity-100"
          />
          <div className="absolute -bottom-4 right-0 w-full opacity-80">
            <svg viewBox="0 0 1440 320" className="w-full h-auto" preserveAspectRatio="none">
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,300 C100,500 1080,-400 1440,240 L1440,320 L0,320 Z"
              />
            </svg>
          </div>
        </div>
    
  {/* Navbar */}
    <nav className="fixed top-0 left-0 w-full z-20 bg-gradient-to-r from-[#6F35A6] to-[#CE94FA] flex justify-between items-center px-10 py-2">
      <Link to="/picnav" className="hover:text-[#8D21E1] text-[#D297FF] text-3xl">
        <AiOutlineArrowLeft />
      </Link>
      <div className="flex space-x-5 text-sm font-normal">
        <Link to="/how-to-use" className="hover:text-[#D297FF] text-[#FBF6FF]">How to Use MapaWIT</Link>
        <Link to="/about" className="hover:text-[#D297FF] text-[#FBF6FF]">About</Link>
      </div>
    </nav>

    {/* Main Content */}
    <div className="relative z-10 flex -mt-30 flex-col items-center justify-start pt-24 pb-32 px-6 text-center min-h-screen overflow-y-auto">
      <h1 className="text-4xl md:text-5xl font-semibold text-white drop-shadow-md mb-8">
        Campus Photo Navigation
      </h1>

      {/* Dropdowns */}
      <div className="flex flex-wrap justify-center gap-3 mb-8 -mt-6">
        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="px-4 py-2 rounded shadow bg-white border border-black text-gray-800"
        >
          <option value="">From...</option>
          <option value="Main Gate">Main Gate</option>
          
        </select>

        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="px-4 py-2 rounded shadow bg-white border border-black text-gray-800 w-[160px] truncate"
        >
          <option value="">To...</option>
           <option value="SB Entrance">SB Entrance</option>
             <option value="RTS ENTRANCE">RTS Entrance</option>
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
          <option value="SIO">Supply and Inventory Office</option>
          <option value="PCO">PCO</option>
          <option value="MIS Office">MIS Office</option>
          <option value="Bio Lab">Bio Laboratory</option>
          <option value="Canteen">Canteen</option>
          <option value="Smoking Area">Smoking Area</option>
          <option value="Electrical Utility Room">Electrical Utility Room</option>
          <option value="Chemistry Lab">Chemistry Laboratory</option>
          <option value="CAS Laboratory">CAS Laboratory</option>
          <option value="President's Office">President's Office</option>
          <option value="HRM Workshop">HRM Workshop</option>
          <option value="College of Arts and Science/Dean's Office">College of Arts and Science/Dean's Office</option>
          <option value="Witdio">Witdio</option>
          <option value="Computer Lab 1">Computer Lab 1</option>
          <option value="Computer Lab 2">Computer Lab 2</option>
          <option value="Dean College of Business and Accountancy">Dean College of Business and Accountancy</option>
          <option value="Ladies Hall">Ladies Hall</option>
          <option value="Head of Accountancy">Head of Accountancy</option>
          <option value="Graduate School Library">Graduate School Library</option>
          <option value="Main Library">Main Library</option>
          <option value="Terrace">Terrace</option>
        </select>

         <button
            onClick={handleSearch}
            className="bg-purple-700 text-white px-6 py-2 rounded shadow hover:bg-purple-800 transition"
          >
            Show Directions
          </button>
        </div>

        {/* Photo Card Navigation */}
        {path.length > 0 ? (
          <div className="w-full max-w-3xl -mt-3">
            <div className="bg-white rounded-2xl shadow-lg p-4 text-center">
              {/* ✅ Description ABOVE the image */}
              <h2 className="text-lg md:text-l font-medium text-gray-800 mb-4 px-3 leading-relaxed">
                {path[currentIndex].step}
              </h2>

              {/* 🖼️ Image BELOW the description */}
              <img
                src={path[currentIndex].img}
                alt="Campus Path"
                className="rounded-lg shadow-md object-cover w-full max-h-[400px] mb-4"
              />

              {/* Navigation Buttons */}
              <div className="flex justify-center gap-120 -mt-2">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="bg-purple-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-purple-700 transition disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentIndex === path.length - 1}
                  className="bg-purple-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-purple-700 transition disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>

              <p className="text-gray-500 mt-3 text-sm">
                Step {currentIndex + 1} of {path.length}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-white text-lg mt-10">
            Select your starting and destination points to view directions.
          </p>
        )}
      </div>
    </div>
  );
}