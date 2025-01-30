const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[90vh] text-center px-4">
      {/* Availability Section */}
      <div className="flex items-start gap-1 py-2 rounded-lg max-w-screen-sm">
        <h3 className="text-xl sm:text-5xl md:text-6xl lg:text-4xl font-semibold leading-4 text-gray-600 font-mono">
          <span className="text-lime-500 text-xl sm:text-9xl font-bold animate-pulse pt-2 pr-3">.</span>
          AVAILABLE FOR WORK
        </h3>
      </div>

      {/* Name Section */}
      <div className="flex flex-col max-w-screen-sm">
        <h1 className="text-white text-4xl sm:text-7xl md:text-8xl lg:text-8xl font-extrabold">AAQIB</h1>
        <h1 className="text-white text-3xl sm:text-5xl md:text-8xl lg:text-8xl font-extrabold">BASHIR MIR</h1>
      </div>
    </div>
  );
};

export default Hero;
