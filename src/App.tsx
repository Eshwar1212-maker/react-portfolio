import About from "./components/About"
import Clients from "./components/Clients"
import Hero from "./components/Hero"
import HireMe from "./components/HireMe"
import Nav from "./components/Nav"
import Work from "./components/Work"

function App() {

  return (
   <div className="text-white font-poppins pb-12">
    <Nav />
    <div id="hero">
    <Hero scrollToHome="hero" scrollToHire="hireme" scrollToAbout="" scrollToProjects="work"/>
    </div>
    <div id="work">
    <Work />
    </div>
    <div id="clients">
    <Clients />
    </div>
    <div id="about">
      <About/>
    </div>
    <div id="hireme">
    <HireMe />
    </div>

   </div>
  )
}

export default App
