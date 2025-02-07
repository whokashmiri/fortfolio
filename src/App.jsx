import { useState } from "react";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import Hero from "./components/Hero";
import  Projects  from "./components/Projects";
import Clients from "./components/Clients";
import Services from "./components/Services";



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
          <Projects/>
          <Clients/>
          <Services/>
        
        </>
      )}
    </>
  );
}

export default App;
