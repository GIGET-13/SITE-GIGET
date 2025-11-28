import { useState, useRef } from "react";

const Map = ({ address = "97+Avenue+de+la+Corse+13007+Marseille" }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="absolute inset-0 z-0 w-[120%] -left-[20%] h-full bg-slate-200"
    >
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-slate-100">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-slate-300 border-t-giget-red rounded-full animate-spin"></div>
            <span className="text-slate-400 text-sm tracking-widest uppercase animate-pulse">
              Chargement de la carte...
            </span>
          </div>
        </div>
      )}
      <iframe
        width="100%"
        height="100%"
        src={`https://maps.google.com/maps?q=${address}&t=m&z=15&ie=UTF8&iwloc=&output=embed`}
        title="Carte"
        className={`w-full h-full transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ pointerEvents: "none" }}
        onLoad={() => setIsLoaded(true)}
      />
      {/* Layer 2: Grayscale Overlay (Masked) */}
      <div
        className={`absolute inset-0 pointer-events-none bg-slate-200/20 backdrop-grayscale backdrop-contrast-[0.9] transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          maskImage: `radial-gradient(circle 120px at ${cursorPos.x}px ${cursorPos.y}px, transparent 0%, black 100%)`,
          WebkitMaskImage: `radial-gradient(circle 120px at ${cursorPos.x}px ${cursorPos.y}px, transparent 0%, black 100%)`,
        }}
      />
      {/* Layer 3: Subtle dark ring to emphasize the flashlight edge */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: `radial-gradient(circle 125px at ${cursorPos.x}px ${cursorPos.y}px, transparent 95%, rgba(0,0,0,0.1) 100%)`,
        }}
      />
    </div>
  );
};

export default Map;
