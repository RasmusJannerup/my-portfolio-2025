import { useRef } from "react";

const ContactSummary = () => {

    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section
            ref={containerRef}
            className="flex flex-col items-center justify-center
            min-h-screen gap-12  "
        >
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