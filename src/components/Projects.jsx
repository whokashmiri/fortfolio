
import { MoveUpRight ,ArrowRight } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen md:px-16 bg-accent dark:bg-primary text-white">
      {/* Header Section */}
      <div className="w-[65%] h-fit flex justify-between items-center text-black  dark:text-white  rounded-2xl pl-5 pr-5">
        <h1 className="text-3xl font-bold">Featured Projects</h1>
        <button
          className="flex items-center gap-2 px-2 py-2  bg-white dark:text-black hover:scale-105 rounded-full transition-all duration-300 shadow-xl"
          onClick={() => window.open("https://github.com/whokashmiri?tab=repositories", "_blank")}
        >
          <ArrowRight size={20} className="" />
        </button>
      </div>

       {/* Projects Section */}
       <div className="w-[65%] mt-8 flex gap-6  pl-5 pr-5">
        {/* Project 1 */}
        <div className="relative w-1/2 group overflow-hidden rounded-2xl">
          <img
            src="https://images.pexels.com/photos/5956807/pexels-photo-5956807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Project 1"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-2xl"  
          />
          <button
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 translate-y-5 opacity-0 flex items-center justify-between px-5 py-3 w-[80%] bg-white text-black font-semibold transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 rounded-3xl shadow-lg hover:shadow-3xl hover:scale-105 border-double border-2 border-gray-600" 
            onClick={() => window.open("https://github.com/", "_blank")}
          >
            GoExalt System 
            <span className="text-slate-400 ml-3">. Website</span>
            <MoveUpRight className="ml-3" />
          </button>
        </div>

        <div className="relative w-1/2 group overflow-hidden rounded-2xl ">
          <img
            src="https://images.pexels.com/photos/9410129/pexels-photo-9410129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Project 2"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-2xl"
          />
          <button
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 translate-y-5 opacity-0 flex items-center justify-between px-5 py-3 w-[80%] bg-white text-black font-semibold transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 rounded-3xl shadow-lg hover:shadow-3xl hover:scale-105 border-double border-2 border-gray-600"
            onClick={() => window.open("https://github.com/", "_blank")}
          >
            NextGen Tech
            <span className="text-slate-400 ml-3">. Website</span>
            <MoveUpRight className="ml-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
