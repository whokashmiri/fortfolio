import { useState } from "react";


const images = [
  { 
    src:"https://images.pexels.com/photos/8107819/pexels-photo-8107819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
    link: "https://exaltsystem.com/", 
    title: "Exalt System", 
    description: " Modern React app with Tailwind CSS, DaisyUI, Zustand, React Router, and AOS. Features:  Sleek UI with DaisyUI + Tailwind  Global state with Zustand  Seamless navigation with React Router  Smooth scroll animations using AOS. A fully responsive and engaging experience!."
  },
  { 
    src: "https://images.pexels.com/photos/8107978/pexels-photo-8107978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
    link: "https://github.com/whokashmiri/chat-me", 
    title: "MERN CHAT APP", 
    description: "ChatMe is a modern real-time chat application that enables seamless communication between users. Built with React, Express, Socket.io, and MongoDB, it offers instant messaging with a smooth and responsive UI."
  },
  { 
    src: "https://images.pexels.com/photos/21840663/pexels-photo-21840663/free-photo-of-a-robot-in-a-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
    link: "https://github.com/whokashmiri/Nutrify", 
    title: "Nutrify", 
    description: "Nutrify is a powerful and intuitive nutrition tracking app that helps you monitor your daily food intake, track calories, and maintain a healthy diet. Whether you want to lose weight, gain muscle, or simply eat healthier, Nutrify makes it easy to log your meals and track your progress over time."
  },
  { 
    src: "https://images.pexels.com/photos/7688587/pexels-photo-7688587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
    link: "https://github.com/excelr-projs", 
    title: "PaiseBhej", 
    description: "PaiseBhej is a fast, secure, and seamless digital wallet-to-wallet payment system that allows users to send and receive money effortlessly. Built with Spring Boot, React, and MySQL, it provides a reliable solution for hassle-free transactions with real-time notifications."
  },
];

const ProjectImages = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const handleMouseMove = (e, index) => {
    setCursorPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    setHoveredIndex(index);
  };

  return (
    <div className="grid grid-cols-2 gap-8 p-8 ">
      {images.map((img, index) => (
        <a key={index} href={img.link} target="_blank" rel="noopener noreferrer">
          <div 
            className="relative group overflow-hidden rounded-xl" 
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-110 opacity-50"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col text-start justify-end text-white p-4 z-10">
              <h1 className="text-6xl font-bold uppercase">{img.title}</h1>
              <p className="text-sm opacity-75">{img.description}</p>
            </div>
            <div className="absolute inset-0 bg-white opacity-5 mix-blend-color-dodge group-hover:animate-glitch"></div>
            {hoveredIndex === index && (
              <div
                className="absolute bg-black text-white text-xl font-bold px-5 py-3 rounded-full shadow-lg pointer-events-none"
                style={{ top: `${cursorPosition.y}px`, left: `${cursorPosition.x}px` }}
              >
                CLICK
              </div>
            )}
          </div>
        </a>
      ))}
    </div>
  );
};

export default ProjectImages;
