import { useState } from 'react';

const Wish: React.FC = () => {
  const [wish, setWish] = useState('');
  const [isWished, setIsWished] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsWished(true);
    setTimeout(() => {
      setWish('');
    }, 3500);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-primary relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      {/* Shooting Star */}
      {!isWished && <div className="shooting-star" key="looping-star" />}

      {/* Scoped CSS */}
      <style>{`
        .shooting-star {
          position: absolute;
          top: -10%;
          left: -10%;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle at right, white 60%, rgba(255, 255, 255, 0.3) 100%);
          border-radius: 50% 20% 20% 50%;
          box-shadow: 0 0 20px 4px rgb(202, 202, 202);
          animation: shooting 3s linear infinite;
          z-index: 20;
          transform: rotate(-20deg);
        }

        .shooting-star::after {
          content: '';
          position: absolute;
          left: -100px;
          top: 0;
          width: 100px;
          height: 2px;
          background: linear-gradient(to right, rgba(255, 255, 255, 0), #e0d9b6);
          filter: blur(2px);
          opacity: 0.8;
          border-radius: 2px;
          transform: rotate(-20deg);
          transform-origin: right center;
        }

        @keyframes shooting {
          0% {
            transform: translate(0, 0) rotate(45deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(140vw, 140vh) rotate(45deg);
            opacity: 0;
          }
        }
      `}</style>

      {/* UI Content */}
      <div className="relative z-10 text-center">
        <h2 className="cormorant-heading text-text mb-12 font-light text-5xl">
          Make a Wish
        </h2>
        <p className="text-1.8xl font-comorant text-secondary-text mb-8">
          A star is falling - make a wish!
        </p>

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