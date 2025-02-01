import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ProjectImages from "./components/ProjectImages"
import Projects from "./components/Projects"
// import Quote from "./components/Quote"



const App = () => {
  return (
    <div >
        <Navbar/>
        <Hero/>
        {/* <Quote/> */}
        <Projects/>
        <ProjectImages/>
      
    
    </div>
  )
}

export default App