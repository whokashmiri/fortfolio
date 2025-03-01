import { useEffect, useRef, useState } from "react";

const Clients = () => {
  const sectionRef = useRef(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 1;
          const interval = setInterval(() => {
            setCount(start);
            if (start >= 20) {
              clearInterval(interval);
            }
            start++;
          }, 100);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <>
       <div className="flex h-[40%] flex-col lg:flex-row items-center justify-center  bg-accent dark:bg-primary">
    <div className="w-[58%] h-fit flex justify-between items-center text-black  dark:text-white  rounded-2xl ">
        <h1 className="text-3xl font-bold mb-8">Journey Till Now !</h1>
  
      </div>
      </div>
    <div className="flex h-[40%] flex-col lg:flex-row items-center justify-center md:px-16  bg-accent dark:bg-primary gap-4">

      <div
        ref={sectionRef}
        className=" h-[40vh] w-[40vh] flex justify-between items-center p-6 bg-[#FEFEFE] dark:bg-secondary rounded-2xl shadow-xl "
      >
    
        {/* First Box */}
        <div className="w-[95%] h-[90%] p-6 dark:bg-[#181818] rounded-xl shadow-2xl text-center -rotate-12">
          <h1 className="text-7xl font-extrabold text-orange-600">{count-11}+ </h1>
          <p className="text-gray-400">Satisfied Clients</p>
        </div>
        </div>

        {/* Second Box */}
        <div
        ref={sectionRef}
         className=" h-[40vh] w-[40vh] flex justify-between items-center p-6 bg-[#FEFEFE] dark:bg-secondary shadow-xl rounded-2xl "
      >
        <div className="w-[95%] h-[90%] p-6 dark:bg-[#181818] rounded-xl shadow-2xl text-center ">
          <h1 className="text-7xl font-extrabold text-yellow-500">{count-7}+</h1>
          <p className="text-gray-400">Projects Completed</p>
        </div>
        </div>

        {/* Third Box */}
        <div
        ref={sectionRef}
         className=" h-[40vh] w-[40vh] flex justify-between items-center p-6 bg-[#FEFEFE] dark:bg-secondary  rounded-2xl shadow-xl  "
      >
        <div className="w-[95%] h-[90%] p-6 dark:bg-[#181818] rounded-xl shadow-2xl text-center rotate-12">
          <h1  className="text-7xl font-extrabold text-blue-500">{count-18}+</h1>
          <p className="text-gray-400">Years of Experience</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Clients;
