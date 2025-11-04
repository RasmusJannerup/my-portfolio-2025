import ReactLenis from "lenis/react"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import Services from "./sections/Services"
import ServiceSummary from "./sections/ServiceSummary"

const App = () => {
  return (
    <ReactLenis root className="relative w-screen overflow-x-hidden min-h-screen">
      <Navbar />
      <Hero />
      <ServiceSummary />
      <Services />
      <section
        className="h-screen"
      ></section>
    </ReactLenis>
  )
}

export default App