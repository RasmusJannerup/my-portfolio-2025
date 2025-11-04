import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const ServiceSummary = () => {

    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to("#title-service-1", {
            xPercent: 20,
            scrollTrigger: {
                trigger: '#title-service-1',
                scrub: true,
            }
        });

        gsap.to("#title-service-2", {
            xPercent: -30,
            scrollTrigger: {
                trigger: '#title-service-2',
                scrub: true,
            }
        });
        gsap.to("#title-service-3", {
            xPercent: 26,
            scrollTrigger: {
                trigger: '#title-service-3',
                scrub: true,
            }
        });
        gsap.to("#title-service-4", {
            xPercent: -30,
            scrollTrigger: {
                trigger: '#title-service-4',
                scrub: true,
                start: "top bottom",
                end: "bottom top",
            }
        });
    }, { scope: containerRef });

    return (
        <section
            className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive"
            ref={containerRef}
        >
            <div id="title-service-1">
                <p>
                    Architecture
                </p>
            </div>
            <div id="title-service-2" className="flex items-center justify-center gap-3 translate-x-16">
                <p className="font-normal">
                    Development
                </p>
                <div className="w-10 h-1 md:w-32 bg-gold" />
                <p>
                    Deployment
                </p>
            </div>
            <div id="title-service-3" className="flex items-center justify-center gap-3 -translate-x-48">
                <p>
                    API's
                </p>
                <div className="w-10 h-1 md:w-32 bg-gold" />
                <p className="font-normal">
                    Frontends
                </p>
                <div className="w-10 h-1 md:w-32 bg-gold" />
                <p>
                    Scalability
                </p>
            </div>
            <div id="title-service-4" className="flex items-center justify-center gap-3 translate-x-48">
                <p>
                    Databases
                </p>

            </div>
        </section>
    )
}

export default ServiceSummary