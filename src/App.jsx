import About from "./Components/About/About"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Portfolio from "./Components/Portfolio/Portfolio"
import Skill from "./Components/Skills/Skill"


function App() {
  

  return (
    <>
      <div>
          <Navbar />
          <Home />
          <About />
          <Portfolio />
          <Skill />
          <Footer />
       </div>
    </>
  )
}

export default App
