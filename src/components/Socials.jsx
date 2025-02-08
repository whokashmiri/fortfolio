import { hover, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  FaUpwork,
  FaXTwitter,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa6";

export default function Socials() {
  return (
    <div className="min-h-fit flex flex-col justify-center items-center h-fit w-screen  bg-gray-100 dark:bg-primary">
         <div className="w-[58%] h-fit flex justify-between items-center text-black  dark:text-white  rounded-2xl p-6">
        <h1 className="text-3xl font-bold">Let&apos;s Connect</h1>
        <button
          className="flex items-center gap-2 px-2 py-2  bg-white dark:text-black hover:scale-105 rounded-full transition-all duration-300 shadow-xl"
          onClick={() => window.open("https://github.com/whokashmiri?tab=repositories", "_blank")}
        >
          <ArrowRight size={20} className="" />
        </button>
      </div>
      <div className="w-[58%] text-black rounded-3xl shadow-lg flex justify-center items-center ">
        {/* First Section */}
        <div className="flex flex-col md:flex-row  space-x-1 ">
          {/* Upwork Card */}
          <motion.div
            whileHover={{ borderWidth: 1, borderColor: "black" , }}
            className="bg-accent text-black dark:bg-secondary dark:text-yellow-300   w-[240px] h-[240px] rounded-3xl shadow-lg cursor-pointer flex flex-col items-center justify-center  transition-all mr-3"
          >
            <motion.h2
             whileHover={{ color: "gray" }}
             className="mb-9 text-2xl font-mono text-current transition translate-x-1 duration-200"
            >
             Hire me on
            </motion.h2>

            <motion.div
              whileHover={{ scale: 1.1, rotateX: 15, rotateY: 15 }}
              className="flex items-center space-x-3 transition-all bg-primary   rounded-2xl px-2"
            >
              <FaUpwork size={40} className="text-green-400" />
              <motion.h1
                whileHover={{ scale: 1.1, color: "white"  }}
                className="text-green-400 font-bold text-xl transition-all"
              >
                Upwork
              </motion.h1>
            </motion.div>
          </motion.div>

          {/* X (Twitter) Card */}
          <motion.div
            whileHover={{ borderWidth: 1, borderColor: "white" }}
            className="bg-secondary dark:bg-accent text-white dark:text-black w-[240px] h-[240px] rounded-3xl shadow-lg cursor-pointer flex items-center justify-center transition-all "
          >
            <motion.div whileHover={{ scale: 1.4,  rotate: -6  }}>
              <FaXTwitter size={40} />
            </motion.div>
          </motion.div>
        </div>

        {/* Second Section */}
        <div className="grid grid-cols-2 gap-2 ml-5  place-items-center   items-center">
          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.01, rotate: -6 }} 
            className="bg-accent dark:text-white hover:text-yellow-600 dark:hover:text-yellow-600 dark:bg-secondary w-32 h-[115px] rounded-xl shadow-lg flex items-center justify-center cursor-pointer"
>
        <motion.div>
                <FaEnvelope size={32} />
            </motion.div>
        </motion.div>




          {/* LinkedIn */}
          <motion.div
          whileHover={{ scale: 1.01, rotate: -6 }} 
           className="bg-accent dark:text-white dark:bg-secondary dark:hover:text-blue-600 hover:text-blue-600  w-32 h-[115px] rounded-xl shadow-lg flex items-center justify-center cursor-pointer">
            <motion.div >
              <FaLinkedin size={32} />
            </motion.div>
          </motion.div>

          {/* GitHub */}
          <motion.div
           whileHover={{ scale: 1.01, rotate: -6 }} 
          className="bg-accent dark:text-white dark:bg-secondary dark:hover:text-green-600 hover:text-green-600  w-32 h-[115px] rounded-xl shadow-lg flex items-center justify-center cursor-pointer">
            <motion.div >
              <FaGithub size={32} />
            </motion.div>
          </motion.div>

          {/* Instagram */}
          <motion.div
           whileHover={{ scale: 1.01, rotate: -6 }} 
          className="bg-accent dark:text-white dark:bg-secondary hover:text-red-600  w-32 h-[115px] dark:hover:text-red-600 rounded-xl shadow-lg flex items-center justify-center cursor-pointer">
            <motion.div >
              <FaInstagram size={32} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
