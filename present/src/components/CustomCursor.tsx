import { useEffect, useState } from "react";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setTrail((prev) => [...prev.slice(-5), { x: e.clientX, y: e.clientY }]);
    };

    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    window.addEventListener("mousemove", updateCursor);
    return () => {
      window.removeEventListener("mousemove", updateCursor);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (isMobile) return null;

  return (
    <div className="fixed top-0 left-0 pointer-events-none z-[9999]">

      {/* Main cursor dot */}
      <div
        className="w-4 h-4 rounded-full"
        style={{
          backgroundColor: "#D4AF37",
          opacity: 0.85,
          transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
          position: "absolute",
          transition: "transform 0.1s ease-out",
        }}
      />

      {/* Trailing dots */}
      {trail.map((point, index) => (
        <div
          key={index}
          className="w-2 h-2 rounded-full absolute"
          style={{
            backgroundColor: "#D4AF37",
            transform: `translate(${point.x - 4}px, ${point.y - 4}px)`,
            opacity: 0.4 - index * 0.08,
            transition: "transform 0.2s ease-out, opacity 0.3s ease-out",
          }}
        />
      ))}
    </div>
  );
};

export default CustomCursor;
