import React, { useState } from "react";
import { Link } from "react-router-dom";
import VectorSVG from "../assets/design1.svg";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function CampusPhotoNavigation() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [path, setPath] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🗺️ Directions with descriptions
  const directions = {
    "RTS Gate-CB Building": [
      {
        img: "/AVR.jpg",
        desc: "Begin your walk from the RTS Gate heading straight down the main path.",
      },
      {
        img: "/rts pool.jpg",
        desc: "Walk straight along this main pathway for about 150 meters. You will pass the Student Center on your right.",
      },
      {
        img: "/new-building.jpg",
        desc: "When you reach the Admin Office, make a right turn toward the next pathway.",
      },
      {
        img: "/library.jpg",
        desc: "You’ll see the CB Building straight ahead. You have reached your destination.",
      },
    ],
    "RTS Gate-RTS Gym": [
      {
        img: "/rts-gate.jpg",
        desc: "Start your walk from the RTS Gate and proceed straight ahead.",
      },
      {
        img: "/field.jpg",
        desc: "Continue walking across the open field towards the far side.",
      },
      {
        img: "/gym_entrance.jpg",
        desc: "Turn left when you reach the open area beside the field.",
      },
      {
        img: "/rts gym.jpg",
        desc: "You’ve arrived at the RTS Gym. Congratulations!",
      },
    ],
  };

  const handleSearch = () => {
    const key = `${from}-${to}`;
    const reverseKey = `${to}-${from}`;

    if (directions[key]) {
      setPath(directions[key]);
      setCurrentIndex(0);
    } else if (directions[reverseKey]) {
      setPath([...directions[reverseKey]].reverse());
      setCurrentIndex(0);
    } else {
      setPath([]);
      alert("Sorry, route not found yet.");
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < path.length - 1) setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="relative min-h-screen">
     
      <div className="fixed inset-0 bg-gradient-to-r from-[#6F35A6] to-[#CE94FA] overflow-hidden z-0 mt-11">
        <img
          src={VectorSVG}
          alt="Decorative Vector"
          className="absolute -bottom-19 left-0 w-full opacity-100"
        />
        <div className="absolute -bottom-4 right-0 w-full opacity-80">
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

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-20 bg-gradient-to-r from-[#6F35A6] to-[#CE94FA] flex justify-between items-center px-10 py-2">
        <Link to="/options" className="hover:text-[#8D21E1] text-[#D297FF] text-3xl">
          <AiOutlineArrowLeft />
        </Link>
        <div className="flex space-x-5 text-sm font-normal">
          <Link to="/how-to-use" className="hover:text-[#D297FF] text-[#FBF6FF]">
            How to Use MapaWIT
          </Link>
          <Link to="/about" className="hover:text-[#D297FF] text-[#FBF6FF]">
            About
          </Link>
        </div>
      </nav>

      {/*  Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-start pt-24 pb-32 px-6 text-center min-h-screen overflow-y-auto -mt-8">
        <h1 className="text-4xl md:text-5xl font-semibold text-white drop-shadow-md mb-8">
          Campus Photo Navigation
        </h1>

        {/* Dropdowns */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 -mt-6">
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="px-4 py-2 rounded shadow bg-white border border-black text-gray-800"
          >
            <option value="">From...</option>
            <option value="RTS Gate">RTS Gate</option>
            <option value="CB Building">CB Building</option>
            <option value="RTS Gym">RTS Gym</option>
          </select>

          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="px-4 py-1 rounded shadow bg-white border border-black text-gray-800"
          >
            <option value="">To...</option>
            <option value="RTS Gate">RTS Gate</option>
            <option value="CB Building">CB Building</option>
            <option value="RTS Gym">RTS Gym</option>
          </select>

          <button
            onClick={handleSearch}
            className="bg-purple-700 text-white px-6 py-2 rounded shadow hover:bg-purple-800 transition"
          >
            Show Directions
          </button>
        </div>

        {/* Directions Card */}
        {path.length > 0 && (
          <div className="relative flex flex-col items-center justify-center w-full max-w-3xl -mt-4">
            {/* Card */}
            <div className="bg-white rounded-2xl shadow-lg p-4 w-full text-center">
              {/* Description */}
              <h2 className="text-lg md:text-l font-medium text-gray-800 mb-4 px-3 leading-relaxed">
                {path[currentIndex].desc}
              </h2>

              {/* Image */}
              <img
                src={path[currentIndex].img}
                alt="Campus Path"
                className="rounded-lg shadow-md object-cover w-full max-h-[400px] mb-4"
              />

              {/* Buttons under the photo */}
              <div className="flex justify-center gap-120 -mt-2">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="bg-purple-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-purple-700 transition disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Previous
                </button>

                <button
                  onClick={handleNext}
                  disabled={currentIndex === path.length - 1}
                  className="bg-purple-600 text-white px-10 -py-10 rounded-full shadow-lg hover:bg-purple-700 transition disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>

              {/* Step indicator */}
              <p className="text-gray-500 mt-3 text-sm">
                Step {currentIndex + 1} of {path.length}
              </p>
            </div>
          </div>
        )}

        {path.length === 0 && (
          <p className="text-white text-lg mt-10">
            Select your starting and destination points to view directions.
          </p>
        )}
      </div>
    </div>
  );
}
