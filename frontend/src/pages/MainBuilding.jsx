export default function MainBuilding(){
  return(
    <div className="w-full flex justify-center mt-0 ">
      <div className="w-full max-w-6xl p-4 bg-[#FBF6FF] border-1 border-[#8D21E1] rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-center mb-1">Main Campus Map</h2>
        <iframe 
          src="https://app.mappedin.com/map/67c26a2ff724c8000b05f0f5"
          title="Mappedin Map"
          width="100%" 
          height="430"
          frameBorder="0" 
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}