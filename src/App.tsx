import Clients from "./components/Clients"
import Hero from "./components/Hero"
import HireMe from "./components/HireMe"
import Nav from "./components/Nav"
import Work from "./components/Work"

function App() {

  return (
   <div className="text-white font-poppins pb-12">
    <Nav />
    <Hero />
    <Work />
    <Clients />
    <HireMe />
   </div>
  )
}

export default App
