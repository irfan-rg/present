import { useState, useEffect } from 'react';
import Envelope from './components/Envelope';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Greet from './components/Greet';
import Message from './components/Message';
import CustomCursor from './components/CustomCursor';
import Wish from './components/Wish';


function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-parallax]');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const scrollY = window.scrollY;
        const offset = (rect.top + scrollY - window.innerHeight) * 0.1;
        (el as HTMLElement).style.transform = `translateY(${offset}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="text-cream-white bg-primary min-h-screen">
      <CustomCursor />
      {!isEnvelopeOpen && <Envelope onOpen={() => setIsEnvelopeOpen(true)} />}
      {isEnvelopeOpen && (
        <div
          className="opacity-0 transition-opacity duration-1000 ease-in-out"
          style={{ animation: 'fadeIn 1s forwards' }}
        >
          <Hero />
          <Gallery />
          <Greet />
          <Message />
          <Wish/>
        </div>
      )}
    </div>
  );
}

export default App;