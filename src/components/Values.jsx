import { Bell, Heart, ListStartIcon, Rocket } from "lucide-react";



const cards = [
    { id: 1, icon: <ListStartIcon size={50} />, title: "Commitment to quality", text: "Attention to detail is at the core of everything I do. Ensure that each design is of highest standards, delivering cool work." },
    { id: 2, icon: <Heart size={50} />, title: "Able to always adapt", text: "Every project is unique, and we pride ourselves on our ability to adapt to different styles, industries, and challenges.." },
    { id: 3, icon: <Bell size={50} />, title: "User-centric design", text: "Focus on creating intuitive experiences that resonate. Interfaces that not only beautiful but functional." },
    { id: 4, icon: <Rocket size={50} />, title: "Focus on collaboration", text: "Great design is born from strong partnerships. We work closely with clients, valuing their input throughout the process.." },
  ];

export default function values() {
  
  
    return (
        <>
      <div className="lg:h-screen sm:w-fit flex flex-col items-start justify-center bg-black text-white p-4">
        <h1 className="sm:text-7xl md:text-8xl lg:text-9xl font-extrabold">
          MY VALUES
        </h1>
        <p className="sm:text-3xl md:text-4xl lg:text-5xl text-gray-300 mt-2 text-start w-full sm:w-fit md:w-[80%]">
          Explore our recent projects showcasing creativity, innovation, and impactful design solutions.
        </p>
      </div>

      <div className="flex flex-col justify-center lg:flex-row items-start h-screen  gap-6">
  {cards.map((card) => (
    <div
      key={card.id}
      className={`w-72 h-[70%] p-8 bg-opacity-20 bg-gray-800 backdrop-blur-lg shadow-[0_0_20px_rgba(0,255,100,0.6)] rounded-3xl transition-all duration-300 flex flex-col items-center text-center border border-green-500 hover:shadow-[0_0_30px_rgba(0,255,255,0.8) ] 
        ${card.id === 2 ? "rotate-3" : ""}
         ${card.id === 3 ? "rotate-2" : ""}
         ${card.id === 4 ? "-rotate-2" : ""}
         ${card.id === 4 ? "animate-pulse" : ""}
         
        
        `}
    >
      <div className="text-lime-400  text-5xl drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">
        {card.icon}
      </div>
      <h1 className="text-2xl font-extrabold mt-4 text-white drop-shadow-[0_0_10px_rgba(255,0,255,0.8)]">
        {card.title}
      </h1>
      <p className="text-xl  text-gray-300 mt-2 text-start w-full sm:w-fit md:w-[80%]">
        {card.text}
      </p>
    </div>
  ))}
</div>


    </>
    );
  }
  