import { Link } from "react-router-dom";
import LaptopImage from "../assets/Laptop.png";
import VectorSVG from "../assets/design1.svg"; // <-- Add this line

export default function Ar() {
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
      <div>
        <h1 className="text-[3rem] md:text-[4rem] font-extrabold leading-tight">
            Coming<span className="text-[#FBF6FF]">Soon</span>
          </h1>
      </div>
    </div>
  );
}