import aaqib from "../../assets/phto.jpg";

const HoverReveal = () => {
  return (
    <div className="relative group w-64 h-64 perspective">
      {/* Image */}
      <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-500 group-hover-rotate-y-180">
        <img
          src={aaqib}
          alt="Hover Reveal"
          className="w-full h-full object-cover rounded-lg backface-hidden"
        />

        {/* Text Overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-bold opacity-0 group-hover-opacity-100 transition-opacity duration-300 rounded-lg transform rotate-y-180 backface-hidden"
        >
          Your Text Here
        </div>
      </div>
    </div>
  );
};

export default HoverReveal;
