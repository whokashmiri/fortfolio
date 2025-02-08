import { motion } from "framer-motion";
import { FaUpwork, FaXTwitter, FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";

export default function Socials() {
  return (
    <div className="min-h-fit flex justify-center items-center h-fit w-screen  bg-gray-100 dark:bg-primary md:px-16  space-y-6">
         <div className=" w-[61%] h-[90%] bg-accent text-black dark:bg-secondary  rounded-3xl shadow-lg flex justify-evenly items-start ">
      {/* First Section */}
      <div className="flex flex-col md:flex-row items-center justify-center space-x-4">
        {/* Upwork Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 text-white p-6 rounded-xl shadow-lg cursor-pointer transition-all"
        >
          <h2 className="text-xl font-semibold text-gray-300 hover:text-white transition-all">Hire me on</h2>
          <motion.div
            whileHover={{ scale: 1.1, rotateX: 15, rotateY: -15 }}
            className="flex items-center mt-2 text-green-400 hover:text-white transition-all text-2xl font-bold"
          >
            <FaUpwork className="mr-2" size={32} />
            Upwork
          </motion.div>
        </motion.div>

        {/* X (Twitter) Card */}
        <motion.div
          whileHover={{ scale: 1.05, backgroundColor: "black" }}
          className="bg-white text-black dark:text-white p-6 rounded-xl shadow-lg cursor-pointer transition-all flex items-center justify-center"
        >
          <FaXTwitter size={40} />
        </motion.div>
      </div>

      {/* Second Section */}
      <div className="grid grid-cols-2 gap-4">
        {/* Email */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="p-6 bg-gray-800 text-white rounded-xl shadow-lg flex items-center justify-center cursor-pointer"
        >
          <FaEnvelope size={32} />
        </motion.div>

        {/* LinkedIn */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="p-6 bg-gray-800 text-white rounded-xl shadow-lg flex items-center justify-center cursor-pointer"
        >
          <FaLinkedin size={32} />
        </motion.div>

        {/* GitHub */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="p-6 bg-gray-800 text-white rounded-xl shadow-lg flex items-center justify-center cursor-pointer"
        >
          <FaGithub size={32} />
        </motion.div>

        {/* Instagram */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="p-6 bg-gray-800 text-white rounded-xl shadow-lg flex items-center justify-center cursor-pointer"
        >
          <FaInstagram size={32} />
        </motion.div>
      </div>
    </div>
    </div>
  );
}
