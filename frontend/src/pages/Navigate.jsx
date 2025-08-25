import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import VectorSVG from "../assets/design1.svg"; // Replace with your actual path
import { AiOutlineArrowLeft } from "react-icons/ai";


export default function Navigate() {
  const [selectedCampus, setSelectedCampus] = useState("");
  const navigate = useNavigate();

  const handleCampusSelection = (campus) => {
    setSelectedCampus(campus);
    navigate(`/${campus.toLowerCase().replace(/\s+/g, "-")}`);
  };

  return (
         <div className="bg-[#FBF6FF] min-h-screen flex flex-col">
             {/* Navbar */}
             <nav className="bg-gradient-to-r from-[#6F35A6] to-[#CE94FA]  flex justify-between items-center px-10 py-2">
               <Link to="/options" className="hover:text-[#8D21E1] text-[#D297FF] text-3xl">
                 <AiOutlineArrowLeft/>
               </Link>
               <div className="flex space-x-5 text-sm font-normal">
                 <Link to="/ar" className="hover:text-[#D297FF] text-[#FBF6FF]">AR</Link>
                 <Link to="/how-to-use" className="hover:text-[#D297FF] text-[#FBF6FF]">
                   How to Use MapaWIT
                 </Link>
                 <Link to="/about" className="hover:text-[#D297FF] text-[#FBF6FF]">About</Link>
               </div>
             </nav>

    <div className="relative w-full min-h-screen bg-gradient-to-r from-[#6F35A6] to-[#CE94FA] overflow-hidden">

      {/* Background SVGs */}
      <img
        src={VectorSVG}
        alt="Decorative Vector"
        className="absolute -bottom-7.5 left-0 w-full z-0 opacity-100 "
      />

      <div className="absolute bottom-7.5 right-0 w-full z-0 opacity-80 ">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,300 C100,500 1080,-400 1440,240 L1440,320 L0,320 Z"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full flex flex-col items-center mt-5 justify-start pt-16 px-6 pb-32 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-white drop-shadow-md">
          Navigate WIT campus with Ease!
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl drop-shadow-sm">
          Lost on campus? MapaWIT helps you find classrooms, offices, and facilities quickly.
        </p>

        <div className="mt-12">
          <h3 className="text-lg font-normal text-white">
            Choose Your Campus to Start Navigating:
          </h3>

          <div className="flex flex-wrap gap-4 mt-4 justify-center">
            {["Main", "RTS", "Science-Building"].map((campus) => (
              <button
                key={campus}
                onClick={() => handleCampusSelection(campus)}
                className={`flex items-center gap-2 px-4 py-2 bg-[#FBF6FF] rounded-full cursor-pointer transition shadow-md
                  ${
                    selectedCampus === campus
                      ? "text-[#783EAE] border-2 border-purple-800"
                      : "text-[#783EAE] border border-purple-600 hover:bg-[#CE94FA]"
                  }
                  hover:border-purple-500  hover:text-purple-600 hover:shadow-lg`}
              >
                <div
                  className={`w-5 h-5 flex items-center justify-center border-2 rounded-full transition ${
                    selectedCampus === campus
                      ? "border-purple-600"
                      : "border-purple-600"
                  }`}
                >
                  {selectedCampus === campus && (
                    <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  )}
                </div>
                {campus}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
</div>
  );
}
