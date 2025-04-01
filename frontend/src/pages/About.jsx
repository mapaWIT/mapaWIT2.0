import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai"; // Home Icon
import {FaInstagram, FaFacebook, FaEnvelope} from "react-icons/fa";
import Dheany from "../assets/Dheany.jpg";
import Audrey from "../assets/Audrey.jpg";
import Krisha from "../assets/Krisha.jpg";
import James from "../assets/James.jpg";
import Justine from "../assets/Justine.jpg";
import Ruzlyn from "../assets/Ruzlyn.jpg";

export default function About() {
  const teamMembers = [
    { name: "Dheany Lyn Jereza", role: "Project Manager", image: Dheany },
    { name: "Audrey Margarette Camaya", role: "UI/UX Designer\nResearcher", image: Audrey },
    { name: "Krisha Geacaniga", role: "UI/UX Designer\nResearcher", image: Krisha },
    { name: "Lebron James De La Cruz", role: "Backend Developer", image: James },
    { name: "Justine Ann Mariano", role: "Backend Developer", image: Justine },
    { name: "Ruzlyn Kaw", role: "Frontend Developer", image: Ruzlyn },
  ];

  return (
    <div className="bg-[#FBF6FF] min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-[#FBF6FF]  py-4 px-8 flex justify-between items-center">
        <Link to="/" className="hover:text-[#D297FF] text-[#8D21E1] text-3xl">
          <AiFillHome />
        </Link>
        <div className="flex space-x-6 text-sm font-normal">
          <Link to="/how-to-use" className="text-[#757575] hover:text-[#D297FF]">
            How to Use MapaWIT
          </Link>
          <Link to="/about" className="text-[#D297FF]">About</Link>
        </div>
      </nav>

      {/* Title */}
      <p className="text-center -mt-6 text-[#5F4D6D] font-normal">Our Team</p>
      <h1 className="text-4xl font-semibold text-center mt-3 text-[#1D1D1D]">Meet the WITThinkers</h1>

      {/* Team Grid - Fixed Card Size */}
      <div className=" max-w-7xl mx-auto px-2 mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className="bg-[#F7EFFE] w-[400px] h-[200px] p-4 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mb-2 border-2 border-purple-500"
            />
            <h2 className="text-lg font-medium">{member.name}</h2>
            <p className="text-black font-light text-sm whitespace-pre-line">{member.role}</p>
          </div>
        ))}
      </div>
    
    {/* Social Media Icons */}
    <div className="fixed bottom-0 right-6 flex space-x-4 ">
    <a href="mailto:example@email.com" className="text-purple-600 text-2xl hover:text-purple-800">
      <FaEnvelope />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 text-2xl hover:text-purple-800">
      <FaInstagram />
    </a>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 text-2xl hover:text-purple-800">
      <FaFacebook />
    </a>
  </div>
</div>
  );
}