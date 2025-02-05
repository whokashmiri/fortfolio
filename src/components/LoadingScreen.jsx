import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const LoadingScreen = ({ onFinish }) => {
  const [loadingText, setLoadingText] = useState("Loading...");

  useEffect(() => {
    const phrases = [
      "Driving to Los Santos...",
      "Buying Hot Coffee...",
      "Escaping 5-Star Wanted Level...",
      "Customizing Lowrider...",
      "Loading Missions..."
    ];
    
    let index = 0;
    const interval = setInterval(() => {
      setLoadingText(phrases[index]);
      index = (index + 1) % phrases.length;
    }, 2000);

    setTimeout(() => {
      clearInterval(interval);
      onFinish();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-neonPink text-2xl">
      <h1 className="font-extrabold text-4xl mb-4">Welcome to Aaqib&apos;s World</h1>
      <p>{loadingText}</p>
    </div>
  );
};

export default LoadingScreen;
