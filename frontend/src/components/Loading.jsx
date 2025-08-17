import logo from "../assets/MapaWit.png";

export default function LoadingPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#fbf7ff]">
      {/* Bouncing logo */}
      <div className="animate-bounce">
        <img
          src={logo}
          alt="MapaWIT Logo"
          className="w-[300px] md:w-[400px] lg:w-[500px] mx-auto"
        />
      </div>
    </div>
  );
}
