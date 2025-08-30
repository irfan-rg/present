import { useState, useEffect } from 'react';

const Greet: React.FC = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const fullText = "May your year be filled with joy, dreams that soar, and love that shines brighter than the stars. Here's to another year of adventures, laughter, and beautiful memories. You deserve all the happiness this world has to offer!";

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('section');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.25 && rect.bottom >= window.innerHeight * 0.75) {
          setIsTyping(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    const section = document.querySelector('section');
    if (section) {
      const rect = section.getBoundingClientRect();
      if (!(rect.top <= window.innerHeight * 0.25 && rect.bottom >= window.innerHeight * 0.75)) {
        setIsTyping(false);
        setDisplayText('');
      }
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isTyping) {
      let index = 0;
      const typeInterval = setInterval(() => {
        if (index < fullText.length) {
          setDisplayText(fullText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typeInterval);
        }
      }, 100); // 100ms per character for natural typing speed

      return () => clearInterval(typeInterval);
    }
  }, [isTyping]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-primary text-center">
      <div className="w-full max-w-3xl px-4">
        <h2 className="cormorant-heading text-text mb-8 sm:mb-16 text-center font-light text-3xl sm:text-5xl">
          Birthday Wishes
        </h2>
        <p className="max-w-2xl mx-auto text-sm sm:text-lg font-mono text-secondary-text">
          {displayText}
          {isTyping && <span className="border-r-2 border-gold-500 animate-pulse"> </span>}
        </p>
      </div>
    </section>
  );
};

export default Greet;