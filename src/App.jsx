import { useState } from "react";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import Hero from "./components/Hero";



function App() {
  const [loading, setLoading] = useState(true);

  return ( 
    <>
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <>
         
          <Navbar />
          <Hero/>
        
        </>
      )}
    </>
  );
}

export default App;
