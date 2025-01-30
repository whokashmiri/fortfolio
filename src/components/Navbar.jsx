import { useState, useEffect } from "react";
import { Search, Phone } from "lucide-react";
// import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full border-b-2 p-4 flex justify-between items-center">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <span className="text-sm">LOCAL :- </span>
        <span className="text-lg w-[120px] font-semibold ">{time}</span>
        <div className="w-10 h-10  bg-slate-800 transform duration-300 flex rounded-2xl justify-center items-center">
        <Phone className=" " />
        </div>
       
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <Search className="w-5 h-5 cursor-pointer" />
        <button >MENU</button>
      </div>
    </div>
  );
}
