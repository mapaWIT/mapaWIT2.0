import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

export default function RTSCampus() {
  return (
    <div className="bg-[#FBF6FF] min-h-screen flex flex-col items-center">
      {/* Navbar */}
      <nav className="w-full bg-[#FBF6FF] py-4 px-8 flex justify-between items-center">
        <Link to="/navigate" className="hover:text-[#D297FF] text-[#8D21E1] text-3xl">
          <AiFillHome />
        </Link>
        <div className="flex space-x-6 text-sm font-normal">
          <Link to="/how-to-use" className="text-[#757575] hover:text-[#D297FF]">
            How to Use MapaWIT
          </Link>
          <Link to="/about" className="hover:text-[#D297FF] text-[#757575]">
            About
          </Link>
        </div>
      </nav>

      {/* Centered Campus Map Container */}
      <div className="w-full flex justify-center mt-0 ">
        <div className="w-full max-w-6xl p-4 bg-[#FBF6FF] border-1 border-[#8D21E1] rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-center mb-1">RTS Campus Map</h2>
          <iframe 
            src="https://app.mappedin.com/map/67de22cbaa7c59000baf8d76?embedded=true"
            title="Mappedin Map"
            width="100%" 
            height="430"
            frameBorder="0" 
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}