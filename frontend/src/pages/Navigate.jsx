import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navigate() {
    const [selectedCampus, setSelectedCampus] = useState("");
    const navigate = useNavigate(); // Initialize navigation

    const handleCampusSelection = (campus) => {
        setSelectedCampus(campus);
        navigate(`/${campus.toLowerCase().replace(/\s+/g, "-")}`); 
    };

    return (
        <div className="w-full h-screen flex flex-col items-center justify-start pt-16 bg-[#FBF6FF] overflow-hidden">
            {/* Main Content */}
            <div className="text-center mt-6">
                <h1 className="text-5xl font-semibold text-[#1D1D1D]">
                    Navigate WIT campus with Ease!
                </h1>
                <p className="mt-4 text-24px text-[#5F4D6D]">
                    Lost on campus? MapaWIT helps you find classrooms, offices, and facilities quickly.
                </p>
            </div>

            {/* Campus Selection */}
            <div className="mt-12 text-center">
                <h3 className="text-lg font-normal text-black">
                    Choose Your Campus to Start Navigating:
                </h3>
                <div className="flex gap-4 mt-4">
                    {["Main", "RTS", "Science-Building"].map((campus) => (
                        <button
                            key={campus}
                            onClick={() => handleCampusSelection(campus)}
                            className={`flex items-center gap-2 px-4 py-2 border rounded-full cursor-pointer transition ${
                                selectedCampus === campus
                                    ? "border-purple-600 text-purple-600"
                                    : "border-[#757575] text-[#757575]"}
                                    hover:border-purple-500 hover:text-purple-600 hover:shadow-lg`}
                                    >
                            <div
                                className={`w-5 h-5 flex items-center justify-center border-2 rounded-full transition ${
                                    selectedCampus === campus ? "border-purple-600" : "border-gray-400"
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
    );
}

