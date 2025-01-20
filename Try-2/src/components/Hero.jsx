import BlueTool from "../assets/BlueTool.avif";
import GreenCube from "../assets/GreenCube.avif";
import GreenPillow from "../assets/GreenPillow.avif";
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
          <div className="relative w-48 h-48 rounded-3xl preserve-3d group-hover:rotate-y-180 duration-700">
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
        <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]">
          {[
            { src: GreenTool, alt: "Image 1", animation: "animate-bounce1",margin: "mt-10"  },
            { src: OrangBall, alt: "Image 2", animation: "animate-bounce2" },
            { src: GreenPillow, alt: "Image 3", animation: "animate-bounce3" },
            { src: PowderBlueCube, alt: "Image 4", animation: "animate-bounce4" },
            { src: GreenCube, alt: "Image 5", animation: "animate-bounce5" , margin:"mr-10" },
            { src: BlueTool, alt: "Image 6", animation: "animate-bounce6", margin: "mt-4", },
          ].map((image, index) => (
            <div
              key={index}
              className={`absolute w-48 h-48 ${image.animation}`}
              style={{
                transform: `rotate(${index * 60}deg) translate(250px) rotate(-${index * 60}deg)`,
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-48 h-48 object-cover rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
