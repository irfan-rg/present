import { useState, useRef } from 'react';

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope: React.FC<EnvelopeProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);
  const envelopeRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsOpening(true);
    if (envelopeRef.current) {
      envelopeRef.current.addEventListener('transitionend', () => {
        onOpen(); // Trigger only after animation ends
      }, { once: true });
    }
  };

  return (
    <div
      ref={envelopeRef}
      className={`fixed inset-0 bg-primary flex items-center justify-center z-50 transition-opacity duration-1000 ease-in-out ${
        isOpening ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div
        className="relative w-[280px] h-[350px] sm:w-[400px] sm:h-[500px] cursor-pointer"
        onClick={handleClick}
        style={{ perspective: '1000px' }}
      >
        <svg viewBox="0 0 400 500" className="w-full h-full">
          {/* Envelope Body */}
          <rect x="20" y="20" width="360" height="460" fill="#F5F5F0" rx="20" />
          <rect x="15" y="15" width="370" height="470" fill="none" stroke="#D4AF37" strokeWidth="5" rx="25" />

          {/* Filigree Left */}
          <path
            d="M50 50 Q70 30 90 50 T130 50 T170 70 T190 90 T210 110 T230 130 T250 150"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="2"
          />

          {/* Filigree Right */}
          <path
            d="M350 50 Q330 30 310 50 T270 50 T230 70 T210 90 T190 110 T170 130 T150 150"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="2"
          />

          {/* Flap */}
          <polygon
            points="20,20 200,100 380,20"
            fill="#F5F5F0"
            stroke="#D4AF37"
            strokeWidth="5"
            className={`transform origin-top transition-transform duration-1000 ease-in-out ${
              isOpening ? 'rotate-x-[180deg]' : ''
            }`}
            style={{
              transformStyle: 'preserve-3d',
              transform: isOpening ? 'rotateX(180deg)' : 'rotateX(0deg)',
              transformOrigin: 'top center',
            }}
          />

          {/* Wax Seal (Outer) */}
          <circle
            cx="200"
            cy="420"
            r="30"
            fill="#D4AF37"
            className={`transition-opacity duration-700 ease-in-out ${
              isOpening ? 'opacity-0' : 'opacity-80'
            }`}
          />
          {/* Wax Seal (Inner) */}
          <circle
            cx="200"
            cy="420"
            r="25"
            fill="#F5F5F0"
            className={`transition-opacity duration-700 ease-in-out ${
              isOpening ? 'opacity-0' : 'opacity-50'
            }`}
          />
        </svg>

        {/* Text */}
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-cormorant text-text text-center px-6">
          Open It !
        </p>
        {/* Text */}
        <p className="absolute bottom left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-cormorant text-text text-center px-6 md:bottom-11 ">
        𐙚
        </p>
      </div>
    </div>
  );
};

export default Envelope;