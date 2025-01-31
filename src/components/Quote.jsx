import side from "../assets/Side.jpg"
import full from "../assets/full.jpg"
export default function Quote() {
    return (
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 p-8 bg-black min-h-screen">
        
        {/* Left Image */}
        <div className="relative group w-full md:w-1/2 overflow-hidden">
          <img 
            src={side} 
            alt="Cyberpunk Left" 
            className="w-full h-auto object-cover transform rounded-3xl transition duration-500 group-hover:scale-110 group-hover:rotate-2"
          />
          <div className="absolute inset-0 bg-pink-500 rounded-3xl opacity-20 mix-blend-hard-light transition duration-500 group-hover:opacity-40"></div>
        </div>
  
        {/* Quote in the Middle */}
        <div className="relative text-center text-white text-2xl md:text-4xl font-bold uppercase tracking-wide leading-snug neon-text">
          <span className="relative z-10">
            &quot;The future is now, make it neon!&quot;
          </span>
          <div className="absolute inset-0 animate-glitch text-purple-500 opacity-60">
            &quot;The future is now, make it neon!&quot;
          </div>
        </div>
  
        {/* Right Image */}
        <div className="relative group w-full md:w-1/2 overflow-hidden">
          <img 
            src={full}
            alt="Cyberpunk Right" 
            className="w-full h-auto object-cover transform rounded-3xl transition duration-500 group-hover:scale-110 group-hover:-rotate-2"
          />
          <div className="absolute inset-0 bg-blue-500 opacity-20 mix-blend-hard-light transition duration-500 group-hover:opacity-40"></div>
        </div>
  
        {/* Glitchy Effect CSS */}
        <style>
          {`
            .neon-text {
              text-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 15px #ff00ff;
            }
            @keyframes glitch {
              0% { transform: translate(0, 0); opacity: 0.8; }
              20% { transform: translate(-2px, 2px); opacity: 1; }
              40% { transform: translate(2px, -2px); opacity: 0.8; }
              60% { transform: translate(-2px, 2px); opacity: 1; }
              80% { transform: translate(2px, -2px); opacity: 0.8; }
              100% { transform: translate(0, 0); opacity: 1; }
            }
            .animate-glitch {
              animation: glitch 1s infinite;
            }
          `}
        </style>
      </div>
    );
  }
  