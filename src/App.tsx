import { useProgress } from "@react-three/drei"
import ReactLenis from "lenis/react"
import { useEffect, useState } from "react"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import Services from "./sections/Services"
import ServiceSummary from "./sections/ServiceSummary"
import Works from "./sections/Works"

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

const App = () => {

  const { progress } = useProgress();

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setIsReady(true);
    }

    return () => {
      setIsReady(false);
    }
  }, [progress]);

  return (
    <ReactLenis root className="relative w-screen overflow-x-hidden min-h-screen">
      {!isReady && (
        <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 font-light">
          <p className="mb-4 text-xl tracking-widest animate-pulse">
            Loading {Math.floor(progress)}%
          </p>
          <div className="relative h-1 overflow-hidden rounded w-60 bg-white/20">
            <div className="absolute top-0 left-0 h-full transition-all duration-300 bg-white" style={{ width: `${progress}%` }}>

            </div>
          </div>
        </div>
      )}
      <div className={classNames(isReady ? "opacity-100 transition-opacity duration-1000" : "opacity-0", 'transition-all')}>

        <Navbar />
        <Hero />
        <ServiceSummary />
        <Services />
        <About />
        <Works />
        <Contact />
      </div>
    </ReactLenis>
  )
}

export default App