import { Link } from "react-router-dom";
import VectorSVG from "../assets/design1.svg";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function Ar() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#6F35A6] to-[#CE94FA] relative">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-2 z-10">
        <Link to="/options" className="hover:text-[#8D21E1] text-[#D297FF] text-3xl">
          <AiOutlineArrowLeft />
        </Link>
        <div className="flex space-x-5 text-sm font-normal">
          <Link to="/ar" className="hover:text-[#D297FF] text-[#FBF6FF]">AR</Link>
          <Link to="/how-to-use" className="hover:text-[#D297FF] text-[#FBF6FF]">
            How to Use MapaWIT
          </Link>
          <Link to="/about" className="hover:text-[#D297FF] text-[#FBF6FF]">About</Link>
        </div>
      </nav>

      {/* Content - stays top-left */}
      <div className="relative z-10 px-10 mt-10">
        <h1 className="text-[3rem] md:text-[5rem] font-extrabold leading-tight text-black">
          Coming<span className="text-[#FBF6FF]">Soon</span>
        </h1>
      </div>

     {/* Background SVGs */}
           <img
             src={VectorSVG}
             alt="Decorative Vector"
             className="absolute -bottom-19 left-0 w-full z-0 opacity-100 pointer-events-none"
           />
     
           <div className="absolute -bottom-4 right-0 w-full z-0 opacity-80 pointer-events-none">
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
    </div>
  );
}
