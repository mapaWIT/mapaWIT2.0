import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai"; // Home Icon
import logo from "../assets/MapaWit.png";
import VectorSVG from "../assets/design2.svg";

export default function HowToUse() {
  return (
    <div className="bg-[#FBF6FF] min-h-screen flex flex-col">
    {/* Navbar */}
    <nav className="w-full bg-[#FBF6FF]  py-4 px-8 flex justify-between items-center">
      <Link to="/" className="hover:text-[#D297FF] text-[#8D21E1] text-3xl">
        <AiFillHome />
      </Link>
      <div className="flex space-x-5 text-sm font-normal">
        <Link to="/how-to-use" className="hover:text-[#D297FF] text-[#757575]">
          How to Use MapaWIT
        </Link>
        <Link to="/about" className="hover:text-[#D297FF] text-[#757575]">About</Link>
      </div>
    </nav>
{/* Hero Section */}

<div className="relative flex flex-col items-center justify-center h-64 text-center">
  {/* SVG background */}
  <img
    src={VectorSVG}
    alt="Decorative Vector"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

  {/* Text in front */}
  <h1 className="relative z-10 text-6xl font-bold text-white -mt-25">
    Lost on campus?
  </h1>
  <p className="relative z-10 text-xl text-white mt-2 max-w-lg mr-33 whitespace-nowrap">
    MapaWIT helps you find classrooms, offices, and facilities quickly
  </p>
</div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between items-start -mt-20 z-10 max-w-6xl mx-auto gap-8 px-6">
        
        {/* Left Section - Text */}
        <div className="md:w-1/2">
          <p className="text-[#1D1D1D] leading-7">
            <span className="text-[#8D21E1] font-semibold">MapaWIT</span> helps you find classrooms, offices, and 
            facilities quickly. MapaWIT is your ultimate campus navigation companion, designed to help students, 
            faculty, and visitors easily find classrooms, offices, and essential facilities across all WIT campuses. 
              Whether you're a new student trying to locate your assigned room, a guest looking for an event venue, 
            or a faculty member navigating between buildings.
          </p>
        </div>

        {/* Right Section - Logo */}
        <div className=" md:w-1/2 flex items-center justify-self-start space-x-30 mt-8">
                <img src={logo} alt="MapaWIT Logo" className="h-100 w-100  -m-30" />
                <span className="text-[#1D1D1D] text-7xl font-medium -ml-6">mapaWIT</span>
              </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-10 px-6 mb-12">
        {/* Feature 1 */}
        <div className="bg-[#F7EFFE] p-6 rounded-lg shadow-md">
          <h3 className="text-md font-semibold text-[#8D21E1] mb-2">3D Navigation</h3>
          <p className="text-[#1D1D1D]">
            MapaWIT’s 3D navigation revolutionizes campus exploration at the Western Institute of Technology (WIT) by offering an immersive, interactive experience. 
            Through detailed 3D models of buildings and pathways, users can visualize their route from a bird’s-eye view or street-level perspective, making it easier to navigate the campus with clarity and confidence.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-[#F7EFFE] p-6 rounded-lg shadow-md">
          <h3 className="text-md font-semibold text-[#8D21E1] mb-2">Search and Locate</h3>
          <p className="text-[#1D1D1D]">
            MapaWIT’s Search & Locate feature makes it easy for students, faculty, and visitors to quickly find classrooms, offices, and facilities within the Western Institute of Technology (WIT) campus. Instead of manually browsing maps, users can simply search for a location.
          </p>
        </div>
      </div>
    </div>
  );
}