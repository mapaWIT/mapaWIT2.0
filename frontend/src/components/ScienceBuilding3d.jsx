import React, { Suspense, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html, Line } from "@react-three/drei";
import rooms from "../data/rooms.json";

/**
 * ScienceBuildingModel
 * - Loads GLB from public/models
 */
function ScienceBuildingModel(props) {
  const { scene } = useGLTF("/models/science_building.glb");
  return <primitive object={scene} {...props} />;
}

/**
 * RoomMarker - small sphere + label
 */
function RoomMarker({ position, name, onClick }) {
  return (
    <mesh position={position} onClick={(e) => { e.stopPropagation(); onClick(); }}>
      <sphereGeometry args={[0.12, 24, 24]} />
      <meshStandardMaterial color="deepskyblue" metalness={0.2} roughness={0.6} />
      <Html distanceFactor={8}>
        <div style={{
          background: "rgba(0,0,0,0.65)",
          color: "white",
          padding: "4px 6px",
          borderRadius: 6,
          fontSize: 12,
          whiteSpace: "nowrap",
          userSelect: "none"
        }}>
          {name}
        </div>
      </Html>
    </mesh>
  );
}

/**
 * DirectionPath - draws a line between two points
 */
function DirectionPath({ from, to }) {
  return <Line points={[from, to]} lineWidth={3} />;
}

/**
 * ScienceBuilding3D - main component
 */
export default function ScienceBuilding3D() {
  const [fromRoom, setFromRoom] = useState(null);
  const [toRoom, setToRoom] = useState(null);
  const [pickedPoint, setPickedPoint] = useState(null);
  const canvasRef = useRef();

  // When user clicks on the 3D canvas (not on markers), we capture actual 3D point:
  function handleCanvasPointerDown(event) {
    // event.point is the 3D position of click (provided by react-three-fiber)
    // stopPropagation already used in RoomMarker; this handler runs for clicks on model
    const p = event.point;
    setPickedPoint([Number(p.x.toFixed(3)), Number(p.y.toFixed(3)), Number(p.z.toFixed(3))]);
    // copy to clipboard for convenience
    const text = [${Number(p.x.toFixed(3))}, ${Number(p.y.toFixed(3))}, ${Number(p.z.toFixed(3))}];
    // optional: navigator.clipboard is available in browsers
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
  }

  return (
    <div style={{ width: "100%", height: "100vh", background: "#0b1220", position: "relative" }}>
      <Canvas
        ref={canvasRef}
        camera={{ position: [5, 5, 5], fov: 50 }}
        onPointerDown={handleCanvasPointerDown}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.0} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <Suspense fallback={null}>
          <ScienceBuildingModel scale={[1.0, 1.0, 1.0]} />
        </Suspense>

        {/* markers */}
        {rooms.map((r, i) => (
          <RoomMarker
            key={i}
            position={r.position}
            name={r.name}
            onClick={() => {
              if (!fromRoom) setFromRoom(r);
              else if (!toRoom) setToRoom(r);
              else {
                setFromRoom(r);
                setToRoom(null);
              }
            }}
          />
        ))}

        {/* direction line */}
        {fromRoom && toRoom && (
          <DirectionPath from={fromRoom.position} to={toRoom.position} />
        )}

        <OrbitControls enablePan enableZoom enableRotate />
      </Canvas>

      {/* overlay UI */}
      <div style={{
        position: "absolute",
        left: 12,
        top: 12,
        background: "rgba(0,0,0,0.6)",
        color: "white",
        padding: 12,
        borderRadius: 8,
        fontSize: 14
      }}>
        <div><strong>From:</strong> {fromRoom ? fromRoom.name : "— (click a marker)"}</div>
        <div style={{ marginTop: 6 }}><strong>To:</strong> {toRoom ? toRoom.name : "— (click a marker)"}</div>
        {fromRoom && toRoom && (
          <button
            onClick={() => { setFromRoom(null); setToRoom(null); }}
            style={{ marginTop: 8, padding: "6px 10px", cursor: "pointer" }}
          >Clear</button>
        )}

        <div style={{ marginTop: 10, fontSize: 12, opacity: 0.9 }}>
          <div><strong>Coordinate picker:</strong> Click the model to get coords</div>
          <div style={{ marginTop: 6 }}>
            {pickedPoint ? (
              <div>
                <div>[{pickedPoint.join(", ")}]</div>
                <div style={{ fontSize: 11, opacity: 0.8 }}>Copied to clipboard</div>
              </div>
            ) : <div style={{ opacity: 0.8 }}>No pick yet — click anywhere on model</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
