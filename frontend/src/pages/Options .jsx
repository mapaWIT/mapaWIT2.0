import { Link } from "react-router-dom";
import VectorSVG from "../assets/design1.svg";
import Map2D from "../assets/2dmap.svg";
import Map3D from "../assets/3dmap.svg";
import Campus from "../assets/camp2camp.svg";
import Photo from "../assets/photonav.svg";

export default function Options() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-r from-[#6F35A6] to-[#CE94FA] flex flex-col items-center justify-center">
      {/* Decorative Vector SVG */}
      <img
        src={VectorSVG}
        alt="Decorative Vector"
        className="absolute bottom-5 left-0 w-full z-0 opacity-100"
      />

      {/* Wavy Bottom Background */}
      <div className="absolute bottom-20 right-0 w-full z-0 opacity-80">
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
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-8 py-16 text-center -mt-60">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          Navigate WIT with Ease!
        </h1>
        <p className="text-[#FBF6FF] mt-2 text-base md:text-lg max-w-2xl">
          Lost on campus? <span className="font-semibold">MapaWIT</span> helps you find classrooms, offices, and facilities quickly.
        </p>

        {/* Card Container */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl px-6 ">
          {/* 2D MAP */}
          <Link to="/navigate">
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl p-9 transition-transform transform hover:-translate-y-2 cursor-pointer">
              <div className="flex flex-col items-center text-center space-y-4">
                <img src={Map2D} alt="2D Map Icon" className="w-14 h-14" />
                <h3 className="text-lg font-bold text-purple-700">2D MAP</h3>
                <p className="text-gray-600 text-sm">
                  For a quick and traditional overview of the campus.
                </p>
              </div>
            </div>
          </Link>

          {/* 3D MAP */}
          <Link to="/3D">
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl p-9 transition-transform transform hover:-translate-y-2 cursor-pointer">
              <div className="flex flex-col items-center text-center space-y-4">
                <img src={Map3D} alt="3D Map Icon" className="w-14 h-14" />
                <h3 className="text-lg font-bold text-purple-700">3D MAP</h3>
                <p className="text-gray-600 text-sm">
                  Experience an immersive, rotatable 3D model with detailed buildings.
                </p>
              </div>
            </div>
          </Link>

          {/* CAMPUS TO CAMPUS */}
          <Link to="/ar">
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl p-9 transition-transform transform hover:-translate-y-2 cursor-pointer">
              <div className="flex flex-col items-center text-center space-y-4">
                <img src={Campus} alt="Campus Navigation Icon" className="w-14 h-14" />
                <h3 className="text-lg font-bold text-purple-700">Campus-Campus</h3>
                <p className="text-gray-600 text-sm">
                  Navigate the campus-to-campus routes with real-time experience.
                </p>
              </div>
            </div>
          </Link>

          {/* PHOTO NAVIGATION */}
          <Link to="/combined">
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl p-9 transition-transform transform hover:-translate-y-2 cursor-pointer">
              <div className="flex flex-col items-center text-center space-y-4">
                <img src={Photo} alt="Photo Navigation Icon" className="w-14 h-14" />
                <h3 className="text-lg font-bold text-purple-700">Photo Navigation</h3>
                <p className="text-gray-600 text-sm">
                  Get realistic, step-by-step photo directions to your destination.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}