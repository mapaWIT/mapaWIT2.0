import { Link } from "react-router-dom";
import logo from "../assets/whitelogo1.1.png"; // Import the PNG logo

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-[#6F35A6] to-[#CE94FA]  flex justify-between items-center px-10 py-2">
      {/* Left Side - Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="MapaWIT Logo" className="h-50 w-50 inline-block -m-15" />
       <span> <Link to="/" className=" text-[#FBF6FF] text-2xl font-semibold -ml-2">mapaWIT </Link></span>
      </div>

      {/* Right Side - Navigation Links */}
      <div className="flex space-x-10 text-sm text-[#FBF6FF] ">
        <Link to="/how-to-use" className="hover:text-[#6F35A6] transition ">
          How to Use MapaWIT
        </Link>
        <Link to="/about" className="hover:text-[#6F35A6] transition">
          About
        </Link>
      </div>
    </nav>
  );
}