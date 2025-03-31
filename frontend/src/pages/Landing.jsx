import { Link } from "react-router-dom";

export default function Landing() {
  return (
    
    <div className="w-full h-screen flex flex-col items-center justify-start pt-16 bg-[#FBF6FF] overflow-hidden">
      
      {/* Main Content */}
      <div className="text-center mt-10">
        <h1 className="text-5xl font-semibold text-[#1D1D1D]">
          Navigate WIT campus with Ease!
        </h1>
        <p className="mt-4 text-24px text-[#5F4D6D]">
          Lost on campus? MapaWIT helps you find classrooms, offices, and facilities quickly.
        </p>
        <Link to="/navigate">
          <button className="mt-14 px-4 py-2 bg-[#D297FF] text-[#1D1D1D] text-lg font-normal rounded-full hover:bg-purple-600 border border-[#8D21E1]">
            Start Navigation
          </button>
        </Link>
      </div>
    </div>
  );
}