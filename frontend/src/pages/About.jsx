import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

import Dheany from "../assets/Dheany.jpg";
import Audrey from "../assets/Audrey.jpg";
import Krisha from "../assets/Krisha.jpg";
import James from "../assets/James.jpg";
import Justine from "../assets/Justine.jpg";
import Ruzlyn from "../assets/Ruzlyn.jpg";

import Design1 from "../assets/design3.svg";
import Design2 from "../assets/design4.svg";
import Design3 from "../assets/design5.svg";

export default function About() {
  const teamMembers = [
    { name: "Dheany Lyn Jereza", role: "Project Manager", image: Dheany },
    { name: "Audrey Camaya", role: "UI/UX Designer\nResearcher", image: Audrey },
    { name: "Krisha Geacaniga", role: "UI/UX Designer\nResearcher", image: Krisha },
    { name: "Charles Vincent Jablo", role: "Backend Developer", image: James },
    { name: "Justine Mariano", role: "Backend Developer", image: Justine },
    { name: "Ruzlyn Kaw", role: "Frontend Developer", image: Ruzlyn },
    { name: "Karl Jaspher Bolohabo", role: "Leader\nFull Stack Developer", image: Audrey },
    { name: "Joshua Porras", role: "Full Stack Developer", image: James },
    { name: "Gery Espina", role: "Full Stack Developer", image: Ruzlyn },
    { name: "Adrian Acculador", role: "UI/UX\nFront-end Developer", image: Krisha },
    { name: "Jan Grey Fuertes", role: "Back-end Developer", image: James },
    { name: "Enzi Torento", role: "UI/UX\nFront-end Developer", image: Dheany },
  ];

  return (
    <div className="relative bg-[#FBF6FF] min-h-screen flex flex-col overflow-hidden">
      {/* Background SVGs */}
      <img src={Design1} alt="Design 1" className="absolute top-0 left-0 w-full h-auto z-0" />
      <img src={Design2} alt="Design 2" className="absolute top-28 left-0 w-full h-auto z-0" />
      <img src={Design3} alt="Design 3" className="absolute top-[400px] left-0 w-full h-auto z-0" />

      {/* Navbar */}
      <nav className="w-full py-4 px-8 flex justify-between items-center z-10">
        <Link to="/" className="hover:text-[#D297FF] text-[#8D21E1] text-3xl">
          <AiFillHome />
        </Link>
        <div className="flex space-x-6 text-sm font-normal">
          <Link to="/ar" className="hover:text-[#D297FF] text-[#757575]">AR</Link>
          <Link to="/how-to-use" className="hover:text-[#D297FF] text-[#757575]">How to Use MapaWIT</Link>
          <Link to="/about" className="hover:text-[#D297FF] text-[#757575]">About</Link>
        </div>
      </nav>

      {/* Title Section */}
      <div className="z-10 -mt-6 text-center">
        <p className="text-[#5F4D6D] font-normal">Our Team</p>
        <h1 className="text-4xl font-semibold text-[#1D1D1D] mt-2">Meet the Team</h1>
      </div>

      {/* Team Grid - 2 Rows of 6 */}
      <div className="z-10 mt-10 flex flex-col items-center space-y-10">
        {[0, 6].map((startIdx) => (
          <div key={startIdx} className="flex justify-center gap-4 flex-wrap max-w-[1440px] px-4">
            {teamMembers.slice(startIdx, startIdx + 6).map((member, index) => (
              <div
                key={index}
                className="bg-[#F7EFFE] w-[200px] h-[220px] p-4 rounded-xl shadow-md flex flex-col items-center text-center cursor-pointer"
                style={{ transition: "transform 0.3s ease-in-out" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                onMouseDown={(e) => (e.currentTarget.style.transform = "scale(1.25)")}
                onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mb-3 border-2 border-purple-500 object-cover"
                />
                <h2 className="text-base font-semibold text-[#1D1D1D]">{member.name}</h2>
                <p className="text-sm font-light text-[#333] whitespace-pre-line">{member.role}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Social Icons */}
      <div className="fixed bottom-4 right-6 flex space-x-4 z-30">
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
