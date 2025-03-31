import { Link } from "react-router-dom";
import logo from "../assets/MapaWit.png"; // Import the PNG logo

export default function Navbar() {
  return (
    <nav className="bg-[#FBF6FF] flex justify-between items-center px-10 py-2">
      {/* Left Side - Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="MapaWIT Logo" className="h-50 w-50 inline-block -m-15" />
        <span className="text-[#1D1D1D] text-2xl font-semibold -ml-2">mapaWIT</span>
      </div>

      {/* Right Side - Navigation Links */}
      <div className="flex space-x-10 text-sm text-[#515151] ">
        <Link to="/how-to-use" className="hover:text-purple-400 transition ">
          How to Use MapaWIT
        </Link>
        <Link to="/about" className="hover:text-purple-400 transition">
          About
        </Link>
      </div>
    </nav>
  );
}