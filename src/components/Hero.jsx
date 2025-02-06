import { motion } from "framer-motion";
import heroImage from "../assets/bg-hero.png"; // Replace with your image path

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center h-screen px-6 md:px-16  bg-gray-200 dark:bg-gray-950 ">
      {/* Left Section (Text) */}
      <div className="flex lg:flex-row items-center justify-center  h-1/2 w-[65%] rounded-3xl bg-gray-200 shadow-2xl dark:bg-gray-900 ">
      <div className="w-full md:w-3/5 space-y-6 " >
        {/* Animated Ping Effect */}
        <motion.p
          className="text-black font-semibold relative w-fit bg-green-400 mr-4 rounded-xl text-xl m-4"
          
        >
         <span className="animate-ping"
         
         > ● </span> 2 projects left in February
        </motion.p>

        {/* Hero Text */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white indent-4">
          Hi, I&apos;m Aaqib Mir
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 pl-4">
          A web designer and Full Stack Developer from Bandipora, Kashmir, crafts beautiful 
          and user-friendly websites tailored to your needs.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4 p-4">
          <button className="px-6 py-3 bg-black text-white dark:text-black font-semibold rounded-3xl hover:bg-gray-800 transition dark:bg-white">
            Book a Call
          </button>
          <button className="px-6 py-3 border border-gray-700 dark:border-white rounded-3xl text-gray-900 dark:text-white font-semibold hover:bg-slate-300 dark:hover:bg-gray-800 transition">
            About Me
          </button>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full md:w-2/5 flex justify-center overflow-hidden pb-[113px] md:mt-0">
        <img
          src={heroImage}
          alt="Aaqib Mir"
          className="rounded-lg  object-contain w-full max-w-sm"
        />
      </div>

      </div>
      
    </section>
  );
}
