import { useState } from 'react';

const Wish: React.FC = () => { 
  const [wish, setWish] = useState('');
  const [isWished, setIsWished] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsWished(true);
    const audio = new Audio('https://www.soundjay.com/buttons/beep-01a.mp3');
    audio.play().catch(() => {}); // Fallback for audio play
    setTimeout(() => setIsWished(false), 3000); // Reset after 3s
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      <div className="relative z-10 text-center">
        <h2 className="cormorant-heading text-text mb-12 font-light text-5xl">
          Make a Wish
        </h2>
        <p className="text-1.8xl font-comorant text-secondary-text mb-8">
          A star is falling - make a wish!
        </p>
        <div className="shooting-star"></div>
        <div className="mt-16">
            
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="text"
              value={wish}
              onChange={(e) => setWish(e.target.value)}
              placeholder="Type your wish here..."
              className="w-96 h-2 p-3.5 rounded-lg bg-secondary text-primary text-sm p-none font-montserrat border-2 border-text/20 focus:border-text focus:outline-none resize-none transition-all"
              disabled={isWished}
            />
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-text text-primary rounded-lg hover:bg-text/80 transition-colors disabled:opacity-50"
              disabled={isWished || !wish}
            >
              Asked Everything?
            </button>
          </form>
          {isWished && (
            <p className="mt-4 text-1xl font-montserrat text-secondary-text">
              Wish sent to the stars - do come True!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Wish;