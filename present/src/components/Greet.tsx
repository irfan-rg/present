import { useState, useEffect } from 'react';

const Greet: React.FC = () => {
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('section');
      if (section) {
        const rect = section.getBoundingClientRect();
        // Trigger only when section is at least 75% in view
        if (rect.top <= window.innerHeight * 0.25 && rect.bottom >= window.innerHeight * 0.75) {
          setIsTyping(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check to avoid pre-typing on load
    const section = document.querySelector('section');
    if (section) {
      const rect = section.getBoundingClientRect();
      if (!(rect.top <= window.innerHeight * 0.25 && rect.bottom >= window.innerHeight * 0.75)) {
        setIsTyping(false);
      }
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-primary text-center">
      <div className="w-full max-w-3xl px-4">
        <h2 className="cormorant-heading text-text mb-8 sm:mb-16 text-center font-light text-3xl sm:text-5xl">
          Birthday Wishes
        </h2>
        <p
          className={`max-w-8xl mx-auto text-1.9xl font-mono text-secondary-text ${
            isTyping ? 'animate-typewriter' : ''
          }`}
        >
          May your year be filled with joy, dreams that soar, and love that shines brighter than the stars.
        </p>
      </div>
    </section>
  );
};

export default Greet;