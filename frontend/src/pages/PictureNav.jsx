import { Link } from "react-router-dom";
import VectorSVG from "../assets/design1.svg";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function PictureNav() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-r from-[#6F35A6] to-[#CE94FA] ">

      {/* Decorative Vector SVG */}
      <img
        src={VectorSVG}
        alt="Decorative Vector"
        className="absolute -bottom-19 left-0 w-full z-0 opacity-100"
      />
{/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-20 bg-gradient-to-r from-[#6F35A6] to-[#CE94FA] flex justify-between items-center px-10 py-2">
        <Link to="/options" className="hover:text-[#8D21E1] text-[#D297FF] text-3xl">
          <AiOutlineArrowLeft />
        </Link>
        <div className="flex space-x-5 text-sm font-normal">
          <Link to="/how-to-use" className="hover:text-[#D297FF] text-[#FBF6FF]">How to Use MapaWIT</Link>
          <Link to="/about" className="hover:text-[#D297FF] text-[#FBF6FF]">About</Link>
        </div>
      </nav>

      {/* Decorative Bottom Wavy Background */}
      <div className="absolute -bottom-3 right-0 w-full z-0 opacity-80">
        <svg viewBox="0 0 1440 320" className="w-full h-auto" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,300 C100,500 1080,-400 1440,240 L1440,320 L0,320 Z"
          />
        </svg>
      </div>

      {/* Main Content: Centered Column */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center gap-8 px-5 -mt-20">

        {/* Text Content */}
        <div className="text-white space-y-2">
          <h1 className="text-[3rem] md:text-[5rem] font-extrabold leading-tight">
            Photo Navigation
          </h1>
          <p className="text-[#FBF6FF] text-lg md:text-2xl font-medium">
            Navigate WIT campus with Ease!
          </p>
          <p className="text-sm text-[#FBF6FF] max-w-md mx-auto ">
            Select Campus for photo navigation:
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-8 mt-10" >
          <Link to='/rtspicturenav'>
            <button className="px-14 py-4 bg-[#FBF6FF] text-[#783EAE] border-2 border-purple-600 font-semibold text-lg rounded-full shadow-md hover:bg-[#CE94FA] transition-all">
              RTS
            </button>
          </Link>
          <Link to='/mainpicturenav'>
            <button className="px-10 py-4 bg-[#FBF6FF] text-[#783EAE] border-2 border-purple-600 font-semibold text-lg rounded-full shadow-md hover:bg-[#CE94FA] transition-all">
              Main
            </button>
          </Link>
          <Link to='/sbpicturenav'>
            <button className="px-10 py-4 bg-[#FBF6FF] text-[#783EAE] border-2 border-purple-600 font-semibold text-lg rounded-full shadow-md hover:bg-[#CE94FA] transition-all">
              Science
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}