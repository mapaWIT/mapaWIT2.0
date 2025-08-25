import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5"; // Back arrow icon
import VectorSVG from "../assets/design1.svg"; // Replace with correct path

export default function RTS() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/navigate"); // Back to Navigate.jsx
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-r from-[#6F35A6] to-[#CE94FA] overflow-hidden">
      
      {/* Background SVGs */}
      <img
        src={VectorSVG}
        alt="Decorative Vector"
        className="absolute bottom-5 left-0 w-full z-0 opacity-100 pointer-events-none"
      />

      <div className="absolute bottom-0 right-0 w-full z-0 opacity-90 pointer-events-none">
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

      {/* Foreground content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center -mt-10pt-6 px-4">
        
        {/* Exit Arrow */}
        <div className="w-full max-w-6xl mb-2">
          <button
            onClick={handleBack}
            className="flex items-center text-white hover:text-purple-200 transition"
          >
            <IoArrowBack size={24} className="mr-1" />
            <span className="font-medium">Back</span>
          </button>
        </div>

        {/* Map Container */}
        <div className="w-full max-w-6xl p-4 bg-white border border-[#8D21E1] rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-center mb-4 text-[#1D1D1D]">
            RTS Campus Map
          </h2>
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
