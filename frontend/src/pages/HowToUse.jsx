import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai"; // Home Icon
import logo from "../assets/MapaWit.png";

export default function HowToUse() {
  return (
    <div className="bg-[#FBF6FF] min-h-screen flex flex-col">
    {/* Navbar */}
    <nav className="w-full bg-[#FBF6FF]  py-4 px-8 flex justify-between items-center">
      <Link to="/" className="hover:text-[#D297FF] text-[#8D21E1] text-3xl">
        <AiFillHome />
      </Link>
      <div className="flex space-x-6 text-sm font-normal">
        <Link to="/how-to-use" className="text-[#D297FF]">
          How to Use MapaWIT
        </Link>
        <Link to="/about" className="hover:text-[#D297FF] text-[#757575]">About</Link>
      </div>
    </nav>
{/* Content Layout */}
<div className="flex flex-col md:flex-row justify-between items-start mt-0 max-w-6xl mx-auto gap-8 bg-[#FBF6FF]">
        {/* Left Section - Text */}
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Lost on campus?</h1>
          <p className="text-[#5F4D6D] leading-2font-normal">
            <span className="text-[#8D21E1] font-semibold">MapaWIT</span> helps you find classrooms, offices, and facilities quickly. MapaWIT is your
            ultimate campus navigation companion, designed to help students, faculty, and 
            visitors easily find classrooms, offices, and  essential facilities across all WIT
            campuses. Whether you're a newstudent trying to locate your assigned room, a
            guest looking for an event venue, or a faculty member navigating between buildings.
          </p>
        </div>
        
        {/* Right Section - Logo */}
        <div className=" md:w-1/2 flex items-center justify-self-start space-x-30 mt-8">
                <img src={logo} alt="MapaWIT Logo" className="h-90 w-90  -m-25" />
                <span className="text-[#1D1D1D] text-5xl font-medium -ml-6">mapaWIT</span>
              </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-10">
        {/* Feature 1 */}
        <div className="bg-[#F7EFFE] p-6 rounded-lg shadow-md">
          <h3 className="text-md font-semibold text-[#8D21E1] mb-2">2D Map</h3>
          <p className="text-[#1D1D1D]">
            MapaWIT’s 2D map Navigation feature provides a top-down, interactive campus map that allows students,
            faculty, and visitors to easily locate buildings, classrooms, offices, and facilities within Western
            Institute of Technology (WIT). By offering a clear, detailed layout of the entire campus, MapaWIT helps
            users efficiently plan their routes and navigate from one point to another with ease.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-[#F7EFFE] p-6 rounded-lg shadow-md">
          <h3 className="text-md font-semibold text-[#8D21E1] mb-2">Search and Locate</h3>
          <p className="text-[#1D1D1D]">
            MapaWIT’s Search & Locate feature makes it easy for students, faculty, and visitors to quickly find
            classrooms, offices, and facilities within the Western Institute of Technology (WIT) campus. Instead of
            manually browsing maps, users can simply search for a location.
          </p>
        </div>
      </div>
    </div>
  );
}