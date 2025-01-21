import BlueTool from "../assets/BlueTool.avif";
import GreenCube from "../assets/GreenCube.avif";
import PowderBlueStar from "../assets/PowderBlueStar.avif";
import GreenTool from "../assets/GreenTool.avif";
import OrangBall from "../assets/OrangBall.avif";
import PowderBlueCube from "../assets/PowderBlueCube.avif";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Hero Background with Infinite Marquee */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full flex items-center">
          <div className="absolute w-full animate-scroll whitespace-nowrap">
            <h1 className="text-[12rem] font-extrabold text-black tracking-wider text-center">
              AAQIB BASHIR MIR &nbsp; AAQIB BASHIR MIR &nbsp; AAQIB BASHIR MIR
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        {/* "Hi, I am Aaqib" */}
        <h2 className="text-4xl font-semibold text-black mb-4">Hi, I am Aaqib</h2>

        {/* Flip Image */}
        <div className="relative z-50 group perspective">
          <div className="relative w-72 h-72 rounded-3xl preserve-3d group-hover:rotate-y-180 duration-700">
            {/* Front */}
            <div className="absolute backface-hidden w-full h-full">
              <img
                src="https://images.pexels.com/photos/30142098/pexels-photo-30142098/free-photo-of-cozy-cafe-latte-with-frothy-milk-art.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Aaqib"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            {/* Back */}
            <div className="absolute backface-hidden rotate-y-180 w-full h-full flex items-center justify-center bg-gray-700 rounded-3xl">
              <div className="text-center text-white font-bold text-xl md:text-2xl">
                <div className="border-2 border-white rounded-3xl p-4">
                  WANNA KNOW MORE? SCROLL DOWN...
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Circular Layout for Side Images */}
        <div className="absolute flex justify-between w-screen h-screen overflow-y-auto">
  {/* First set of images */}
  <div className="relative flex flex-col items-center justify-center w-1/2">
    <div className="flex flex-col items-center -space-y-16"> {/* Overlapping images */}
      <img src={BlueTool} alt="Blue Tool" className="w-72 h-72 ml-24 mt-20 z-10 animate-bounce1 " />
      <img src={OrangBall} alt="Orange Ball" className="w-72 h-72 z-20 " />
      <img src={GreenCube} alt="Green Cube" className="w-72 h-72 ml-24 z-30 " />
    </div>
  </div>
  {/* Second set of images */}
  <div className="relative flex flex-col items-center justify-center w-1/2 ">
    <div className="flex flex-col items-center -space-y-16"> {/* Overlapping images */}
      <img src={PowderBlueStar} alt="Blue Star" className="w-72 h-72 mr-24 " />
      <img src={PowderBlueCube} alt="Blue Cube" className="w-72 h-72 z-20 " />
      <img src={GreenTool} alt="Green Tool" className="w-72 h-72 mr-24 z-30 " />
    </div>
  </div>
</div>




      </div>
    </section>
  );
};

export default Hero;
