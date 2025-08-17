import { Link } from "react-router-dom";
import LaptopImage from "../assets/Laptop.png";
import VectorSVG from "../assets/design1.svg"; // <-- Add this line

export default function Landing() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-r  from-[#6F35A6] to-[#CE94FA] ">

      {/* Decorative Vector SVG - Top Right */}
      <img
        src={VectorSVG}
        alt="Decorative Vector"
        className="absolute bottom-5 left-0 w-full z-0 opacity100"
      />

      {/* Decorative Bottom Wavy Background */}
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
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-10 md:pl-18 h-full -gap-60 pt-25">
        
        {/* Left Text Content */}
        <div className="flex flex-col md:w-1/2 text-white text-center md:text-left space-y-2 -mt-100">
          <h1 className="text-[3rem] md:text-[4rem] font-extrabold leading-tight">
            mapa<span className="text-[#FBF6FF]">WIT</span>
          </h1>
          <p className="text-[#FBF6FF] text-lg md:text-xl font-medium">
            Navigate WIT campus with Ease!
          </p>
          <p className="text-sm text-[#FBF6FF] max-w-md mx-auto md:mx-0">
            Lost on campus? MapaWIT helps you find classrooms, offices, and facilities quickly.
          </p>

          <div className="pt-4">
            <Link to="/combined">
              <button className="px-15 py-3 bg-[#FBF6FF] text-[#783EAE] font-semibold text-lg rounded-full shadow-md hover:bg-[#CE94FA] transition-all">
                Start Navigation
              </button>
            </Link>
          </div>
        </div>

        {/* Right Laptop Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end -mt-[24rem] z-20 overflow-visible">
        <img
  src={LaptopImage}
  alt="Laptop showing MapaWIT"
  className="w-[900px] md:w-[1200px] transform scale-110 translate-x-[-20px] md:translate-x-[10px] drop-shadow-2xl"
/>

        </div>
      </div>
    </div>
  );
}
