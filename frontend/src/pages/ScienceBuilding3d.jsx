import React, { Suspense, useState, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import VectorSVG from "../assets/design1.svg";

// --- 3D MODEL ---
function ScienceBuilding3d() {
  const gltf = useGLTF("/Models/SB2glb.glb");
  gltf.scene.position.set(0, 0, 0);
  return <primitive object={gltf.scene} scale={1} />;
}

// --- MAIN VIEWER ---
export default function ScienceBuildingViewer() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [route, setRoute] = useState([]);

  // --- ROOM COORDINATES (XZ-Y) ---
  const rooms = [
    { name: "CR_Female", position: [-85.293, 33.131, 0.967] },
    { name: "CR_Male", position: [-139.92, 32.873, 0.931] },
    { name: "FacultyRm1", position: [-201.07, -209.06, 1.0] },
    { name: "FacultyRm2", position: [-201.07, -257.03, 0.97] },
    { name: "FirstFloor_Practicum", position: [-76.5, -84.31, -2.14] },
    { name: "GuardHouse", position: [-60.19, -0.26, 1.02] },
    { name: "Physics_Lab1", position: [-201.06, -125.98, 1.0] },
    { name: "Physics_Lab2", position: [-201.07, -167.39, 0.97] },
    { name: "Rm1", position: [-205.29, -8.40, 1.07] },
    { name: "Rm2", position: [-254.95, -8.55, 1.06] },
    { name: "Rm3", position: [-305.64, -8.69, 1.03] },
    { name: "SecondFloor_Practicum", position: [-73.22, -249.97, 29.52] },
  ];

  // --- TRANSFORM BLENDER COORDS TO THREE.JS XZ-Y ---
  const transform = ([x, y, z]) => [x, z, -y];
  const transformedRooms = useMemo(
    () => rooms.map(r => ({ ...r, tpos: transform(r.position) })),
    [rooms]
  );

  // --- HANDLE ROUTE (MULTI-POINT SMOOTH ARCH) ---
  const handleSearch = () => {
    const start = transformedRooms.find(r => r.name === from);
    const end = transformedRooms.find(r => r.name === to);

    if (!start || !end) {
      alert("Please select both 'From' and 'To' rooms!");
      return;
    }

    const s = start.tpos;
    const e = end.tpos;

    // Generate multiple intermediate points for smooth arch
    const numPoints = 7; // start + 5 intermediate + end
    const waypoints = [];
    for (let i = 0; i < numPoints; i++) {
      const t = i / (numPoints - 1);
      const x = s[0] + (e[0] - s[0]) * t;
      const z = s[2] + (e[2] - s[2]) * t;
      const y = s[1] + (e[1] - s[1]) * t + Math.sin(Math.PI * t) * 50; // arch height
      waypoints.push([x, y, z]);
    }

    setRoute(waypoints);
  };

  return (
    <div className="bg-[#FBF6FF] min-h-screen flex flex-col">
      {/* --- Navbar --- */}
      <nav className="bg-gradient-to-r from-[#6F35A6] to-[#CE94FA] flex justify-between items-center px-10 py-2">
        <Link to="/options" className="text-[#D297FF] text-3xl hover:text-[#8D21E1]">
          <AiOutlineArrowLeft />
        </Link>
        <div className="flex space-x-5 text-sm font-normal">
          <Link to="/how-to-use" className="hover:text-[#D297FF] text-white">How to Use MapaWIT</Link>
          <Link to="/about" className="hover:text-[#D297FF] text-white">About</Link>
        </div>
      </nav>

      {/* --- Background + 3D Canvas --- */}
      <div className="relative flex-1 bg-gradient-to-r from-[#6F35A6] to-[#CE94FA] overflow-hidden">
        <img src={VectorSVG} alt="Decorative Vector" className="absolute bottom-0 left-0 w-full z-0 opacity-50" />

        <div className="relative z-10 flex flex-col items-center pt-16 px-6 pb-32 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4 drop-shadow-md">
            Science Building 3D Navigation
          </h1>

          {/* --- Room Selection --- */}
          <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
            <select
              value={from}
              onChange={e => setFrom(e.target.value)}
              className="p-2 rounded-md bg-white border-2 border-purple-700"
            >
              <option value="">From</option>
              {rooms.map(r => <option key={r.name} value={r.name}>{r.name}</option>)}
            </select>

            <select
              value={to}
              onChange={e => setTo(e.target.value)}
              className="p-2 rounded-md bg-white border-2 border-purple-700"
            >
              <option value="">To</option>
              {rooms.map(r => <option key={r.name} value={r.name}>{r.name}</option>)}
            </select>

            <button
              onClick={handleSearch}
              className="bg-white text-purple-700 px-4 py-2 rounded-md hover:bg-purple-200 shadow-md"
            >
              Show Route
            </button>
          </div>

          {/* --- 3D CANVAS --- */}
          <div className="w-full max-w-5xl h-[500px] bg-white shadow-lg rounded-lg border-2 border-purple-400">
            <Canvas camera={{ position: [0, 200, 400], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[100, 100, 50]} intensity={1.2} />
              <Suspense fallback={null}>
                <ScienceBuilding3d />
                <Environment preset="sunset" />
              </Suspense>

              {/* --- ROOM MARKERS --- */}
              {transformedRooms.map((r, i) => (
                <mesh key={i} position={r.tpos}>
                  <sphereGeometry args={[2.5, 16, 16]} />
                  <meshStandardMaterial color="#A020F0" emissive="#8000FF" emissiveIntensity={0.6} />
                </mesh>
              ))}

              {/* --- SMOOTH ARCH ROUTE LINE --- */}
              {route.length > 1 && (() => {
                const curve = new THREE.CatmullRomCurve3(route.map(p => new THREE.Vector3(...p)));
                const points = curve.getPoints(100); // smoother with more points
                const geometry = new THREE.BufferGeometry().setFromPoints(points);
                return (
                  <line geometry={geometry}>
                    <lineBasicMaterial color="#8B00FF" linewidth={3} />
                  </line>
                );
              })()}

              <OrbitControls enablePan enableZoom enableRotate />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
}