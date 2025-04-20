import { useEffect, useRef } from 'react';

const Gallery: React.FC = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const photosRow1 = [
    'https://ferrari-view.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1440x900/2a22fabf-bda3-44fa-b135-dfcecb7b91be.jpg?v=146',
    'https://ferrari-view.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1440x900/857e5854-43be-422c-b2a9-197afb29848d.jpg?v=146',
    'https://ferrari-view.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1440x900/bf903589-9b61-4cf7-8e2f-d1927a696822.jpg?v=146',
  ];

  const photosRow2 = [
    'https://ferrari-view.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1440x900/82eb7eec-7e6a-443c-9858-c15cb97db1ef.jpg?v=146',
    'https://ferrari-view.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1440x900/8b419b04-5f3c-4d0d-9900-a78b5646143e.jpg?v=146',
    'https://ferrari-view.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1440x900/4a57e540-c94e-43b3-b36e-2b8c3208cc8c.jpg?v=146',
  ];


  useEffect(() => {
    const animate = () => {
      if (row1Ref.current) row1Ref.current.style.transform = `translateX(${window.scrollY * 0.1}px)`;
      if (row2Ref.current) row2Ref.current.style.transform = `translateX(-${window.scrollY * 0.1}px)`;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-secondary py-20">
      <div className="w-full max-w-6xl px-4">
        <h2 className="cormorant-heading text-text mb-16 text-center font-light text-5xl">
          Cherished Memories
        </h2>
        <div className="overflow-hidden">
          {/* Row 1: Left to Right */}
          <div ref={row1Ref} className="flex animate-infinite-left whitespace-nowrap">
            {/* Clone the content multiple times for seamless infinity */}
            {[...Array(3)].flatMap(() => photosRow1).map((photo, index) => (
              <div
                key={index}
                className="inline-block w-80 h-80 mx-6 bg-cover bg-center rounded-lg border-2 border-text/50 hover:border-text transition-all"
                style={{ backgroundImage: `url(${photo})` }}
              />
            ))}
          </div>
          {/* Row 2: Right to Left */}
          <div ref={row2Ref} className="flex animate-infinite-right mt-12 whitespace-nowrap">
            {[...Array(3)].flatMap(() => photosRow2).map((photo, index) => (
              <div
                key={index}
                className="inline-block w-80 h-80 mx-6 bg-cover bg-center rounded-lg border-2 border-text/50 hover:border-text transition-all"
                style={{ backgroundImage: `url(${photo})` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;