import { useState, useEffect, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeXmark } from '@fortawesome/free-solid-svg-icons'
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons'

import Envelope from './components/Envelope';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Greet from './components/Greet';
import Message from './components/Message';
import CustomCursor from './components/CustomCursor';
import Wish from './components/Wish';
import audioFile from './assets/music-bg.mp3';

function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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

  useEffect(() => {
    if (isEnvelopeOpen) {
      audioRef.current = new Audio(audioFile); // Assign to ref
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;
      if (!isMuted) {
        audioRef.current.play().catch((err) => console.log("Audio play failed:", err));
      }
      return () => audioRef.current?.pause(); // Cleanup
    }
  }, [isEnvelopeOpen, isMuted]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      if (!isMuted) {
        audioRef.current.play().catch((err) => console.log("Audio play failed:", err));
      }
    } else {
      console.log("Audio ref is null, check initialization");
    }
  };

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
          <Wish />
        </div>
      )}

      {isEnvelopeOpen && (
        <button
          onClick={toggleMute}
          className="fixed bottom-4 right-4 bg-text/55 text-primary p-2 rounded-full hover:bg-text/80 transition-colors z-50"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <FontAwesomeIcon icon={faVolumeXmark} /> : <FontAwesomeIcon icon={faVolumeHigh} />}
        </button>
      )}
    </div>
  );
}

export default App;