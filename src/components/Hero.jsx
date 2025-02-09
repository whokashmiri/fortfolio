import { motion } from "framer-motion";
import heroImage from "../assets/bg-hero.png"; 
// import { useState } from "react";


const images = [
 
  "https://images.pexels.com/photos/29214791/pexels-photo-29214791/free-photo-of-breathtaking-view-of-snowcapped-sonamarg-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/29214786/pexels-photo-29214786/free-photo-of-serene-forest-landscape-in-kashmir.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  heroImage,
  "https://images.pexels.com/photos/18527335/pexels-photo-18527335/free-photo-of-trees-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/15363406/pexels-photo-15363406/free-photo-of-feel-the-warmth-of-kashmir-with-snowfall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/29469923/pexels-photo-29469923/free-photo-of-vivid-saffron-flower-at-sunset-in-pampore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/29329806/pexels-photo-29329806/free-photo-of-serene-autumn-forest-pathway-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/13142625/pexels-photo-13142625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7824511/pexels-photo-7824511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/20655200/pexels-photo-20655200/free-photo-of-boats-in-a-lake-in-a-mountain-valley.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/15548423/pexels-photo-15548423/free-photo-of-boats-on-a-lake-with-a-view-of-the-mountain-range.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const text = "WHOKASHMIRI";

export default function Hero() {
  // const [hover , setHover] = useState("@WHOK4SHMIR1")
  const month = new Date();
  const monthName = month.toLocaleString('en-US', {month:'long'})
  return (
    <section className="flex flex-col md:flex-row items-center justify-center h-screen md:px-16  bg-accent dark:bg-primary ">
      {/* Left Section (Text) */}
      <div className="flex lg:flex-row items-center justify-center  h-1/2 w-[65%] rounded-3xl bg-neutral shadow-2xl dark:bg-secondary ">
      <div className="w-full md:w-3/5 space-y-6 " >
        {/* Animated Ping Effect */}
        <motion.p
          className="text-black dark:text-white  relative w-fit bg-slate-200 dark:bg-[#0e2d06]  mr-4 rounded-xl text-lg m-4"
          
        >
         <span className="animate-ping text-xl"
         
         > ● </span> 2 projects left in {monthName}
        </motion.p>

        {/* Hero Text */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white indent-4">
          Hi, I&apos;m Aaqib Mir
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 pl-4">
          A web designer and Full Stack Developer from Bandipora, Kashmir, crafts beautiful 
          and user-friendly websites tailored to your needs.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4 pl-4">
          <button className="px-6 py-3 bg-black text-white dark:text-black font-semibold rounded-3xl hover:bg-gray-800 transition dark:bg-white">
            Book a Call
          </button>
          <button className="px-6 py-3 border border-gray-700 dark:border-white rounded-3xl text-gray-900 dark:text-white font-semibold hover:bg-slate-300 dark:hover:bg-gray-800 transition">
            About Me
          </button>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="w-fit md:w-2/5 flex justify-center overflow-hidden  md:mt-0">
     

      <div className="flex justify-center items-center h-screen ">
      <h1 className="text-8xl font-extrabold font-mono uppercase text-center ">
        {text.split("").map((char, index) => (
          <>
            <span
              key={index}
              className="relative inline-block"
              style={{
                backgroundImage: `url(${images[index % images.length]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {char}
            </span>
            {(index + 1) % 4 === 0 && <br key={`br-${index}`} />}
          </>
        ))}
      </h1>
    </div>
        {/* <img
          src={heroImage}
          alt="Aaqib Mir"
          className="rounded-lg  object-cover w-fit max-w-sm"
        /> */}
      </div>

      </div>
      
    </section>
  );
}
