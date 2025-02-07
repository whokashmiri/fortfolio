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
    <div className="flex h-[40%] flex-col lg:flex-row items-center justify-center min-h-screen md:px-16  bg-accent dark:bg-primary gap-4">
      <div
        ref={sectionRef}
        className=" h-[40vh] w-[40vh] flex justify-between items-center p-6 bg-[#FEFEFE] dark:bg-secondary  border-2 rounded-2xl "
      >
        {/* First Box */}
        <div className="w-[95%] h-[90%] p-6 dark:bg-[#1D1D1B] rounded-xl shadow-2xl text-center -rotate-6">
          <h1 className="text-6xl font-extrabold text-red-600">{count}+ </h1>
          <p className="text-gray-400">Satisfied Clients</p>
        </div>
        </div>s

        {/* Second Box */}
        <div
        ref={sectionRef}
         className=" h-[40vh] w-[40vh] flex justify-between items-center p-6 bg-[#FEFEFE] dark:bg-secondary  border-2 rounded-2xl "
      >
        <div className="w-[95%] h-[90%] p-6 dark:bg-[#1D1D1B] rounded-xl shadow-2xl text-center ">
          <h1 className="text-6xl font-extrabold text-yellow-500">{count}+</h1>
          <p className="text-gray-400">Projects Completed</p>
        </div>
        </div>

        {/* Third Box */}
        <div
        ref={sectionRef}
         className=" h-[40vh] w-[40vh] flex justify-between items-center p-6 bg-[#FEFEFE] dark:bg-secondary  border-2 rounded-2xl "
      >
        <div className="w-[95%] h-[90%] p-6 dark:bg-[#1D1D1B] rounded-xl shadow-2xl text-center rotate-6">
          <h1  className="text-6xl font-extrabold text-blue-500">{count}+</h1>
          <p className="text-gray-400">Years of Experience</p>
        </div>
      </div>
    </div>
  );
};

export default Clients;
