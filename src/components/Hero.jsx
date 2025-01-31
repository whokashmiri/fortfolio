import {useEffect} from "react";
import AOS from 'aos';
import "aos/dist/aos.css"; 


const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])
  return (
<>
    <div className="flex flex-col items-center justify-center h-[90vh] text-center px-4">
      {/* Availability Section */}
      <div className="flex items-start gap-1 py-2  rounded-lg max-w-screen-sm">
        <h3 className="text-xl sm:text-5xl md:text-6xl lg:text-2xl font-semibold leading-4 text-gray-600 font-mono">
          <span className="text-lime-500 text-xl sm:text-9xl font-bold animate-pulse pt-2 pr-3">.</span>
          AVAILABLE FOR WORK
        </h3>
      </div>

      {/* Name Section */}
      <div className="flex flex-col max-w-screen-sm mb-12">
        <h1 className="text-white text-4xl sm:text-7xl md:text-8xl lg:text-8xl font-extrabold" data-aos="fade-right">AAQIB</h1>
        <h1 className="text-white text-3xl sm:text-5xl md:text-8xl lg:text-8xl font-extrabold" data-aos="fade-left">BASHIR MIR</h1>
      </div>
     

      <div className="w-full border-b-2 p-4 flex justify-between items-center">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        
        <span className="text-lg  font-semibold ">BASED IN KMR, BANDIPORA</span>
        
       
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
      <span className="text-lg  font-semibold "># ; # CODER</span>

        <button className="relative bg-lime-500 h-8 text-black font-bold overflow-hidden transition duration-300 clip-path-polygon2 group">
  <span className="absolute inset-0 bg-white transition-all duration-1000 group-hover:translate-y-[-100%]"></span>
  <span className="relative z-10 uppercase">+  FULL STACK DEVELOPER</span>
</button>


      </div>
    </div>

    
    </div>



    {/* DIGITAL */}

    <div className="flex  min-h-screen ">
      <div className="w-full  p-6  shadow-lg rounded-lg text-start">
        <h1 className="text-6xl font-bold mt-10">THE FUTURE IS DIGITAL, <br /> AND I DESIGN IT.</h1>  {/* add glitchy effect on this */}
        <button className="relative bg-lime-500 w-48 h-12 mt-10 text-black font-bold overflow-hidden transition duration-300 clip-path-polygon2 group">
      <span className="absolute inset-0 bg-white transition-all duration-1000 group-hover:translate-x-[100%]"></span>
       <span className="relative mt-16 z-10">VIEW ABOUT ABM 1*</span>
      </button>
        <h2 className="text-2xl font-extrabold mt-20">ABOUT ABM!</h2>
        <p className="text-gray-300 text-2xl font-mono mt-8  w-3/4 uppercase [word-spacing:0.5rem] ">I merge no-code innovation with development expertise to engineer seamless, future-ready experiences. My unconventional approach transforms challenges into opportunities, crafting AI-driven tools, automation, and full-scale applications that bridge technology and design. With a relentless dedication to my craft, I don’t just build—I create solutions that redefine possibilities.</p>

<h2 className="text-2xl font-extrabold mt-20">CHALLENGES AND APPROACH</h2>
        <p className="text-gray-300 text-2xl font-mono mt-8  w-3/4 uppercase [word-spacing:0.5rem] ">I focused on user-centered design principles, ensuring each element served a purpose while enhancing the overall visual appeal. I employed responsive design techniques to maintain consistency across all devices and optimized performance to keep load times fast.</p>
      </div>
    </div>

    </>
  );
};

export default Hero;
