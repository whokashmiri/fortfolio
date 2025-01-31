import {useEffect} from "react";
import AOS from 'aos';
import "aos/dist/aos.css"; 


const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])
  return (

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

    <div className="h-screen flex bg-red-500 flex-row md:flex-row w-full">
      {/* First Half */}
      <div className="h-1/2 md:h-full md:w-4/5 bg-blue-500 flex flex-col justify-center items-center p-6 text-white">
        <h1 className="text-2xl md:text-4xl lg:text-8xl font-bold mb-4 text-start">THE FUTURE IS DIGITAL, <br className="text-start" /> AND I DESIGN IT.</h1>
        <button className="relative bg-lime-500 h-8 text-black font-bold overflow-hidden transition duration-300 clip-path-polygon2 group">
  <span className="absolute inset-0 bg-white transition-all duration-1000 group-hover:translate-y-[-100%]"></span>
  <span className="relative z-10 uppercase">VIEW ABOUT  ABM 1*</span>
</button>
      
      
      </div>  


      <div className="h-1/2 md:h-full md:w-4/5 bg-blue-500 flex flex-col justify-center items-center p-6 text-white">
        <h1 className="text-2xl md:text-4xl lg:text-8xl font-bold mb-4 text-start">THE FUTURE IS DIGITAL, <br className="text-start" /> AND I DESIGN IT.</h1>
        <button className="relative bg-lime-500 h-8 text-black font-bold overflow-hidden transition duration-300 clip-path-polygon2 group">
  <span className="absolute inset-0 bg-white transition-all duration-1000 group-hover:translate-y-[-100%]"></span>
  <span className="relative z-10 uppercase">VIEW ABOUT  ABM 1*</span>
</button>
      
      
      </div>  

      
      
     
    </div>
    </div>
  );
};

export default Hero;
