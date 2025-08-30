const Hero: React.FC = () => (
  <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-primary">
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      src="https://cdn.pixabay.com/video/2017/01/14/7348-199627499_large.mp4"
      autoPlay
      loop
      muted
      playsInline
    ></video>
    <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-50"></div>
    <div className="relative text-center z-10 flex flex-col items-center justify-center h-full px-4">
      <h1 className="cormorant-heading text-text animate-fadeIn delay-300 font-light">
        Happy Birthday, Friend's Name!
      </h1>
      <p className="mt-4 sm:mt-6 text-lg sm:text-2xl font-cormorant text-secondary-text animate-fadeIn delay-500">
        A day to celebrate the extraordinary you.
      </p>
    </div>
  </section>
);

export default Hero;