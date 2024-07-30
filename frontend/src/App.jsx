import { BrowserRouter } from "react-router-dom";

import { About, Contact, Cursor, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-x-hidden">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <div className="bg-primary text-white bg-gradient-to-b from-primary to-tertiary">
          <Experience />
        </div>
        <div className="bg-primary text-white py-[72px] sm:py-24 bg-gradient-to-b from-tertiary to-primary ">
          <Tech />
        </div>
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Cursor />

      </div>
    </BrowserRouter>
  )
}

export default App
