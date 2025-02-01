import one from "../assets/one.jpg"
import two from "../assets/two.jpg"
import three from "../assets/three.jpg"
import four from "../assets/four.jpg"




const images = [
  { src: one, link: "https://example.com/1" },
  { src: two, link: "https://example.com/2" },
  { src: three, link: "https://example.com/3" },
  { src: four, link: "https://example.com/4" },
];

const ProjectImages = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {images.map((img, index) => (
        <a key={index} href={img.link} target="_blank" rel="noopener noreferrer">
          <div className="relative group overflow-hidden rounded-xl">
            <img
              src={img.src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-white opacity-10 mix-blend-color-dodge group-hover:animate-glitch"></div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ProjectImages;

// Tailwind CSS classes used: grid, gap, rounded-xl, transition, group-hover, and custom glitch effect
// Add this animation to your Tailwind config or global CSS:
// @keyframes 
// }
// .animate-glitch { animation: glitch 0.2s infinite; }
