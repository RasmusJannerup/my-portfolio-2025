import { useRef } from "react"
import Marquee from "../components/Marquee";

const ContactSummary = () => {

    const containerRef = useRef<HTMLDivElement>(null);
    const items = ['Contact me', 'Say hello', 'Get in touch'];
    return (
        <section
            ref={containerRef}
            className="fle flex-col items-center justify-between
            min-h-screen gap-12 mt-16"
        >
            <Marquee items={items} />
            <div className="overflow-hidden font-light text-center contact-text-responsive">
                <p>
                    <span className="text-black">Let's build a </span>
                    <span className="text-black">digital experience </span><br />
                    <span className="text-black">together.</span>
                </p>
            </div>
        </section>
    )
}

export default ContactSummary