import { motion } from "framer-motion";
import svgPaths from "../assets/imports/svg-gvrh4ey6f0.js";


export default function LoadingAnimation() {
  return (
    <div
      className="w-full h-full flex items-center justify-center "
    >
      <svg
        width="150"
        height="136"
        viewBox="0 0 270 136"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="revealClip">
            <motion.rect
              x="0"
              y="0"
              width="270"
              height="136"
              initial={{ width: 0 }}
              animate={{ width: [0, 280, 280, 0] }}
              transition={{
                duration: 1.5,
                times: [0, 0.5, 0.7, 1],
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 0.3
              }}
            />
          </clipPath>
        </defs>
        <path
          d={svgPaths.p13e459f0}
          fill="#8D21E1"
          clipPath="url(#revealClip)"
        />
      </svg>
    </div>
  );
}
