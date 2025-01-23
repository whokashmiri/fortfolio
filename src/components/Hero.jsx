import BlueTool from "../assets/BlueTool.avif";
import GreenCube from "../assets/GreenCube.avif";
import PowderBlueStar from "../assets/PowderBlueStar.avif";
import GreenTool from "../assets/GreenTool.avif";
import OrangBall from "../assets/OrangBall.avif";
import PowderBlueCube from "../assets/PowderBlueCube.avif";
import { useEffect } from "react";
import Aaqib from '../assets/IMG_20180124_130547.jpg'

const Hero = () => {
  useEffect(() => {
    const image = document.querySelector('.bending-image');
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const rotateX = (clientY / innerHeight - 0.7) * 60;
      const rotateY = (clientX / innerWidth - 0.7) * -60;
      image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full flex items-center">
          <div className="absolute w-full animate-scroll whitespace-nowrap">
            <h1 className="text-[12rem] font-extrabold text-black tracking-wider text-center">
              AAQIB BASHIR MIR &nbsp; AAQIB BASHIR MIR &nbsp; AAQIB BASHIR MIR
            </h1>
          </div>
        </div>
      </div>

      
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <h2 className="text-4xl font-semibold text-black mb-4">Hi, I am <span className="font-normal text-teal-500">
        Aaqib
          </span> </h2>

   

        <div className="relative w-72 h-72  shadow-2xl bending-image z-10">
          <img
        src={Aaqib}
        alt="Aaqib"
        className="w-full h-full object-cover rounded-3xl bending-image"
          />
         </div>
       
      


        {/* Circular Layout for Side Images */}
        <div className="absolute flex justify-between w-screen h-screen overflow-y-auto">
  {/* First set of images */}
  <div className="relative flex flex-col items-center justify-center w-1/2">
    <div className="flex flex-col items-center -space-y-16"> {/* Overlapping images */}
      <img src={BlueTool} alt="Blue Tool" className="w-72 h-72 ml-24 mt-20 z-10 animate-bounce1 " />
      <img src={OrangBall} alt="Orange Ball" className="w-72 h-72 z-20 animate-bounce2" />
      <img src={GreenCube} alt="Green Cube" className="w-72 h-72 ml-24 z-30 animate-bounce3" />
    </div>
  </div>
  {/* Second set of images */}
  <div className="relative flex flex-col items-center justify-center w-1/2 ">
    <div className="flex flex-col items-center -space-y-16"> {/* Overlapping images */}
      <img src={PowderBlueStar} alt="Blue Star" className="w-72 h-72 mr-24 animate-bounce4" />
      <img src={PowderBlueCube} alt="Blue Cube" className="w-72 h-72 z-20 animate-bounce5 " />
      <img src={GreenTool} alt="Green Tool" className="w-72 h-72 mr-24 z-30 animate-bounce6" />
    </div>
  </div>
</div>




      </div>
    </section>
  );
};

export default Hero;
