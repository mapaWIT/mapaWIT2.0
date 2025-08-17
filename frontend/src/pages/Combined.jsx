import { Link } from "react-router-dom";
import VectorSVG from "../assets/design1.svg";

export default function Combined() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-r from-[#6F35A6] to-[#CE94FA]">
      
      {/* Decorative Vector SVG - Bottom */}
      <img
        src={VectorSVG}
        alt="Decorative Vector"
        className="absolute bottom-5 left-0 w-full z-0 opacity-100"
      />

      {/* White Curvy Wave at Bottom */}
      <div className="absolute bottom-0 right-0 w-full z-0 opacity-90">
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
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 -mt-30">
        <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-4">
          Navigate WIT with Ease!
        </h1>
        <p className="text-[#EEDCFF] max-w-2xl text-base md:text-lg mb-8">
          Lost on campus? MapaWIT helps you find classrooms, offices, and facilities quickly.
        </p>

        {/* Search + 3D Viewer Box */}
        <div className="w-full max-w-7xl bg-white rounded-xl shadow-xl border-2 border-[#6F35A6] overflow-hidden -mt-5">
          {/* Search Bar (now inside the box) */}
          <div className="w-full flex items-center px-4 py-4 border-b border-gray-200">
            <input
              type="text"
              placeholder="Search for a place.. (eg. Library, IT Lab, Registrar)"
              className="flex-grow p-2 outline-none text-gray-800 border border-gray-300 rounded-md"
            />
            <button className="bg-[#6F35A6] hover:bg-[#8645b9] text-white font-semibold px-6 py-2 rounded-md ml-2 transition-all">
              Search
            </button>
          </div>

          {/* 3D Viewer */}
          <div className="w-full h-[400px] ">
            <iframe
              title="Blender 3D Viewer"
              src="https://your-3d-viewer-link.com"
              frameBorder="0"
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}
