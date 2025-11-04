import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import ServiceSummary from "./sections/ServiceSummary"

const App = () => {
  return (
    <div className="relative w-screen overflow-x-hidden min-h-screen">
      <Navbar />
      <Hero />
      <ServiceSummary />
      <section className="h-screen" />
    </div>
  )
}

export default App