import { Code, Database, Server,  Monitor, Palette,  FileTextIcon } from "lucide-react";
import one from "../assets/first.jpg"
import second from "../assets/second.jpg"
import third from "../assets/third.jpg"
import four from "../assets/four.jpg"
import five from "../assets/five.jpg"
import six from "../assets/six.jpg"


export default function TechText() {
    const cards = [
        { id: 1, bg: one, title: "Java Spring Boot", icon: <Server size={60} /> },
        { id: 2, bg: second, title: "MERN Stack", icon: <Code size={60} /> },
        { id: 3, bg: third, title: "SQL & Databases", icon: <Database size={60} /> },
        { id: 4, bg: four, title: "Docker & Deployment", icon: <FileTextIcon size={60} /> },
        { id: 5, bg: five, title: "Next.js & Tailwind", icon: <Monitor size={60} /> },
        { id: 6, bg: six, title: "ShadCN & Lucide", icon: <Palette size={60} /> },
      ];
    return (
        <>
      <div className="lg:h-screen lg:w-screen sm:w-fit flex flex-col items-start justify-center bg-black text-white p-4">
        <h1 className="sm:text-7xl md:text-8xl lg:text-9xl font-extrabold">
          MY TECH STACK
        </h1>
        <p className="sm:text-3xl md:text-4xl lg:text-5xl text-gray-300 mt-6 text-start w-full sm:w-fit md:w-[80%]">
        I specialize in Full-Stack Development, building scalable web applications with modern technologies. My expertise includes Java Spring Boot, the MERN stack, and SQL for Backend and database management. I use Docker for deployment and Next.js, TailwindCSS, ShadCN, and Lucide React for sleek, user-friendly interfaces. Passionate about high-performance solutions, I continuously explore new technologies.
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {cards.map((card) => (
        <div
          key={card.id}
          className="relative h-48 bg-cover bg-center text-white text-lg font-semibold flex flex-col items-center justify-center gap-3 transition-transform duration-300 ease-out transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl"
          style={{
            backgroundImage: `url(${card.bg})`,
            clipPath: "polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)",
            perspective: "1000px",
          }}
        >
          {/* Glassmorphism Overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-lg hover:bg-black/20 transition-all duration-300"></div>

          {/* Icon and Title */}
          <span className="relative z-10">{card.icon}</span>
          <span className="relative z-10 text-xl font-bold">{card.title}</span>

          {/* 3D Effect on Hover */}
          <div className="absolute inset-0 transform transition-transform duration-500 hover:rotate-x-6 hover:rotate-y-6"></div>
        </div>
      ))}
    </div>

      </>
    );
  }
  