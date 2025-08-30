import { useEffect, useRef } from 'react';

const Gallery: React.FC = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const photosRow1 = [

    'https://i.pinimg.com/1200x/24/2f/06/242f060c9c7f695b70706dd5b0178f04.jpg',
    'https://i.pinimg.com/736x/4e/eb/13/4eeb1383130bc80aa158a941872a7459.jpg',
    'https://i.pinimg.com/736x/23/ae/43/23ae4358e04144516ff1777605983fdf.jpg',
    'https://i.pinimg.com/1200x/f2/a7/36/f2a736d2a3f8ae7acabc251131ed0055.jpg',

    'https://i.pinimg.com/736x/8e/e8/6b/8ee86beec57577fbcb66336b84080155.jpg',
    'https://i.pinimg.com/736x/7b/83/76/7b8376abf5050596cabfa79c8384f80a.jpg',
    'https://i.pinimg.com/1200x/b2/12/76/b21276fa977aa13453979623bc52e7d4.jpg',
    'https://i.pinimg.com/736x/37/f2/fd/37f2fd0f3cc42588ab4a85c4c28418a3.jpg'
  ];

  const photosRow2 = [
    'https://i.pinimg.com/736x/8e/e8/6b/8ee86beec57577fbcb66336b84080155.jpg',
    'https://i.pinimg.com/736x/7b/83/76/7b8376abf5050596cabfa79c8384f80a.jpg',
    'https://i.pinimg.com/1200x/b2/12/76/b21276fa977aa13453979623bc52e7d4.jpg',
    'https://i.pinimg.com/736x/37/f2/fd/37f2fd0f3cc42588ab4a85c4c28418a3.jpg',
    
    'https://i.pinimg.com/1200x/24/2f/06/242f060c9c7f695b70706dd5b0178f04.jpg',
    'https://i.pinimg.com/736x/4e/eb/13/4eeb1383130bc80aa158a941872a7459.jpg',
    'https://i.pinimg.com/736x/23/ae/43/23ae4358e04144516ff1777605983fdf.jpg',
    'https://i.pinimg.com/1200x/f2/a7/36/f2a736d2a3f8ae7acabc251131ed0055.jpg'
  ];

  // const photosRow1 = [
  //   'https://ferrari-view.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1440x900/2a22fabf-bda3-44fa-b135-dfcecb7b91be.jpg?v=146',
  //   'https://ferrari-view.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1440x900/857e5854-43be-422c-b2a9-197afb29848d.jpg?v=146',
  //   'https://ferrari-view.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1440x900/bf903589-9b61-4cf7-8e2f-d1927a696822.jpg?v=146',
  // ];

  // const photosRow2 = [
  //   'https://ferrari-view.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1440x900/82eb7eec-7e6a-443c-9858-c15cb97db1ef.jpg?v=146',
  //   'https://ferrari-view.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1440x900/8b419b04-5f3c-4d0d-9900-a78b5646143e.jpg?v=146',
  //   'https://ferrari-view.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1440x900/4a57e540-c94e-43b3-b36e-2b8c3208cc8c.jpg?v=146',
  // ];


  useEffect(() => {
    const animate = () => {
      if (row1Ref.current) row1Ref.current.style.transform = `translateX(${window.scrollY * 0.1}px)`;
      if (row2Ref.current) row2Ref.current.style.transform = `translateX(-${window.scrollY * 0.1}px)`;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-secondary py-20 px-4 sm:px-6">
      <div className="w-full max-w-6xl">
        <h2 className="cormorant-heading text-text mb-8 sm:mb-16 text-center font-light text-3xl sm:text-5xl">
          Cherished Memories
        </h2>
        <div className="overflow-hidden">
          {/* Row 1: Left to Right */}
          <div ref={row1Ref} className="flex animate-infinite-left whitespace-nowrap overflow-x-auto sm:overflow-visible scrollbar-hide">
            {[...Array(3)].flatMap(() => photosRow1).map((photo, index) => (
              <div
                key={index}
                className="inline-block min-w-[10rem] min-h-[10rem] w-40 h-60 sm:w-60 sm:h-80 mx-2 sm:mx-6 bg-cover bg-center rounded-lg border-2 border-text/50 hover:border-text transition-all flex-shrink-0"
                style={{ backgroundImage: `url(${photo})` }}
              />
            ))}
          </div>
          {/* Row 2: Right to Left */}
          <div ref={row2Ref} className="flex animate-infinite-right mt-6 sm:mt-12 whitespace-nowrap overflow-x-auto sm:overflow-visible scrollbar-hide">
            {[...Array(3)].flatMap(() => photosRow2).map((photo, index) => (
              <div
                key={index}
                className="inline-block min-w-[10rem] min-h-[10rem] w-40 h-60 sm:w-60 sm:h-80 mx-2 sm:mx-6 bg-cover bg-center rounded-lg border-2 border-text/50 hover:border-text transition-all flex-shrink-0"
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