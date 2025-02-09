import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { FaJava } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiSpringboot } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { FaGithubAlt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { FaNode } from "react-icons/fa";


export default function TechStack() {
    const [hovered, setHovered] = useState(false);
    const [hovere, setHovere] = useState(false);
  return (
    <>
    <div className="min-h-fit flex flex-col justify-center items-center  h-fit   bg-accent dark:bg-primary">
         <div className="w-[58%] h-fit flex justify-between items-center mt-11 text-black  dark:text-white  rounded-2xl pt-6 pb-7">
        <h1 className="text-3xl font-bold">Programming Languages & Frameworks</h1>
        <button
          className="flex items-center gap-2 px-2 py-2  bg-white dark:text-black hover:scale-105 rounded-full transition-all duration-300 shadow-xl"
          onClick={() => window.open("https://github.com/whokashmiri?tab=repositories", "_blank")}
        >
          <ArrowRight size={20} className="" />
        </button>
      </div>
      <div className="w-[58%] text-black rounded-3xl  flex justify-center  items-center ">
        {/* First Section */}
        <div className="flex flex-col md:flex-row  space-x-1 ">
          {/* Upwork Card */}
          <motion.div
            whileHover={{ borderWidth: 1, borderColor: "black" , }}
            className="bg-accent text-[#0E3B43] dark:bg-secondary dark:text-yellow-300   w-[240px] h-[240px] rounded-3xl shadow-lg cursor-pointer flex flex-col items-center justify-center  transition-all mr-3"
          >
          

            <motion.div
              whileHover={{ scale: 1.5, rotateX: 15, rotateY: 15 }}
              className="flex items-center space-x-3 transition-all   rounded-2xl px-2"
            >
              <FaJava size={120} className="text-yellow-600" />
            
            </motion.div>
          </motion.div>

             {/* Second Section */}
        <div className="grid grid-cols-2 gap-2  place-items-center   items-center">
          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.01, rotate: -6 }} 
            className="bg-accent dark:text-white hover:text-green-500 dark:hover:text-green-600 dark:bg-secondary w-36 h-[115px] rounded-xl shadow-lg flex items-center justify-center cursor-pointer"
>
        <motion.div>
                <SiSpringboot size={60} className="text-green-700 hover:text-green-500" />
            </motion.div>
        </motion.div>


        <motion.div
            whileHover={{ scale: 1.01, rotate: -6 }} 
            className="bg-accent dark:text-white hover:text-green-500 dark:hover:text-green-600 dark:bg-secondary w-36 h-[115px] rounded-xl shadow-lg flex items-center justify-center cursor-pointer"
>
        <motion.div>
                <FaHtml5 size={60} className="text-yellow-700 hover:text-yellow-500" />
            </motion.div>
        </motion.div>

        

        <motion.div
            whileHover={{ scale: 1.01, rotate: -6 }} 
            className="bg-accent dark:text-white hover:text-green-500 dark:hover:text-green-600 dark:bg-secondary w-36 h-[115px] rounded-xl shadow-lg flex items-center justify-center cursor-pointer"
>
        <motion.div>
                <FaGithubAlt size={60} className="text-teal-700 hover:text-teal-500" />
            </motion.div>
        </motion.div>



        <motion.div
            whileHover={{ scale: 1.01, rotate: -6 }} 
            className="bg-accent dark:text-white hover:text-green-500 dark:hover:text-green-600 dark:bg-secondary w-36 h-[115px] rounded-xl shadow-lg flex items-center justify-center cursor-pointer"
>
        <motion.div>
                <IoLogoCss3 size={60} className="text-blue-700 hover:text-blue-500" />
            </motion.div>
        </motion.div>

       
        </div>

          {/* X (Twitter) Card */}
      <motion.div
  className="w-[240px] h-[240px] rounded-3xl shadow-lg cursor-pointer flex items-center justify-center transition-all bg-black dark:bg-white"
  onHoverStart={() => setHovere(true)}
  onHoverEnd={() => setHovere(false)}
  animate={{
    backgroundImage: hovere
      ? "radial-gradient(circle at top, yellow 0%, white 100%)"
      : "",
  }}
  transition={{ 
    duration: 0.7, ease: "easeInOut",
  }}
>
  <motion.div
    animate={{ scale: hovere ? 1.4 : 1, rotate: hovere ? -6 : 0 }}
    transition={{ duration: 0.7, ease: "easeInOut" }}
    className="text-white dark:text-black"
  >
    <IoLogoJavascript size={120} className="text-yellow-700"/>
  </motion.div>
</motion.div>






        </div>

     
      </div>
    </div>




    <div className="min-h-fit flex flex-col justify-center items-center  h-fit   bg-accent dark:bg-primary">
         <div className="w-[58%] h-fit flex justify-between items-center text-black  dark:text-white  rounded-2xl p-1">
        
    
      </div>
      <div className="w-[58%] text-black rounded-3xl flex justify-center items-center ">
    
        <div className="flex flex-col md:flex-row  space-x-1 ">
         
        <div className="grid grid-cols-2 gap-2  place-items-center items-center">
          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.01, rotate: -6 }} 
            className="bg-accent dark:text-white hover:text-green-500 dark:hover:text-green-600 dark:bg-secondary w-36 h-[115px] rounded-xl shadow-lg flex items-center justify-center cursor-pointer"
>
        <motion.div>
                <FaReact size={60} className="text-teal-700 hover:text-teal-500" />
            </motion.div>
        </motion.div>



        <motion.div

          whileHover={{ scale: 1.01, rotate: -6 }}  
            className="bg-accent dark:text-white hover:text-green-500 dark:hover:text-green-600 dark:bg-secondary w-36 h-[115px] rounded-xl shadow-lg flex items-center justify-center cursor-pointer">
            <motion.div >
              <SiTailwindcss size={60} className="text-[#00bcff] hover:text-[#0096cc]" />
            </motion.div>
          </motion.div>

          
          <motion.div
           whileHover={{ scale: 1.01, rotate: -6 }} 
          className="bg-secondary text-white dark:bg-accent hover:text-white  w-36 h-[115px] rounded-xl shadow-lg flex items-center justify-center cursor-pointer">
            <motion.div >
              <RiNextjsFill size={60} className="dark:text-slate-950 dark:hover:text-slate-900
              "/>
            </motion.div>
          </motion.div>

          {/* Instagram */}
          <motion.div
           whileHover={{ scale: 1.01, rotate: -6 }} 
          className="bg-accent dark:text-white dark:bg-secondary hover:text-green-600  w-36 h-[115px] dark:hover:text-red-600 rounded-xl shadow-lg flex items-center justify-center cursor-pointer">
            <motion.div >
              <FaNode size={60} className="dark:text-green-700 dark:hover:text-green-600" />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
            whileHover={{ borderWidth: 1, borderColor: "black" , }}
            className="bg-accent text-[#0E3B43] dark:bg-secondary dark:text-yellow-300   w-[240px] h-[240px] rounded-3xl shadow-lg cursor-pointer flex flex-col items-center justify-center  transition-all mr-3"
          >
            

            <motion.div
              whileHover={{ scale: 1.5, rotateX: 15, rotateY: 15 }}
              className="flex items-center space-x-3 transition-all    rounded-2xl px-2"
            >
              <SiMysql size={120} className="text-blue-800" />
              
            </motion.div>
          </motion.div>

          {/* X (Twitter) Card */}
      <motion.div
  className="w-[240px] h-[240px] rounded-3xl shadow-lg cursor-pointer flex items-center justify-center transition-all bg-black dark:bg-white"
  onHoverStart={() => setHovered(true)}
  onHoverEnd={() => setHovered(false)}
  animate={{
    backgroundImage: hovered
      ? "radial-gradient(circle at top, #33CA7F 0%, white 100%)"
      : "",
  }}
  transition={{ 
    duration: 0.7, ease: "easeInOut",
  }}
>
  <motion.div
    animate={{ scale: hovered ? 1.4 : 1, rotate: hovered ? -6 : 0 }}
    transition={{ duration: 0.7, ease: "easeInOut" }}
    className="text-green-600 dark:text-green-600"
  >
    <DiMongodb size={120} />
  </motion.div>
</motion.div>






        </div>

     
      </div>
    </div>


    </>
  );
}
