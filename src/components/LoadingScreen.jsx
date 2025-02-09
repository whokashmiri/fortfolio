import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const LoadingScreen = ({ onFinish }) => {
  const [loadingText, setLoadingText] = useState("...");

  useEffect(() => {
    const phrases = [
      "Driving to Dal Gate...",
      "Buying Hot Noon-Chai...",
      "Customizing My Imaginary Car...",
      "Loading Missions..."
    ];
    
    let index = 0;
    const interval = setInterval(() => {
      setLoadingText(phrases[index]);
      index = (index + 1) % phrases.length;
    }, 500);

    setTimeout(() => {
      clearInterval(interval);
      onFinish();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black  text-2xl">
      <h1 className="font-extrabold text-3xl lg:text-9xl mb-4 text-yellow-500">LOADING...</h1>
      <p className="text-white text-lg lg:text-5xl">{loadingText}</p>
    </div>
  );
};

export default LoadingScreen;
