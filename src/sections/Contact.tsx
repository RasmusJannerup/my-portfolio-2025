import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

const Contact = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const text = 'Got any questions or want to work together? Feel free to reach out! I\'m always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Let\'s connect and create something amazing together!'


    useGSAP(() => {

        gsap.from(
            '.social-link',
            {
                y: 100,
                opacity: 0,
                stagger: 0.2,
                delay: 0.5,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.social-link',
                }
            }
        )
    }, { scope: containerRef })

    return (
        <section
            ref={containerRef}
            id="contact"
            className="flex flex-col justify-between min-h-screen bg-black"
        >
            <div>
                <AnimatedHeaderSection
                    subTitle="Get in Touch"
                    title="Contact"
                    text={text}
                    textColor="text-white"
                    withScrollTrigger={true}
                ></AnimatedHeaderSection>
                <div className="flex px-10 font-light text-white uppercase lg:text-[32] text-[26px]">
                    <div className="flex flex-col w-full gap-10">
                        <div className="social-link">
                            <h2>
                                E-mail
                            </h2>
                            <div
                                className="w-full h-1 my-2 bg-white opacity-30"
                            />
                            <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">
                                rasmus4700@hotmail.com
                            </p>
                        </div>
                        <div className="social-link">
                            <h2>
                                Location
                            </h2>
                            <div
                                className="w-full h-1 my-2 bg-white opacity-30"
                            />
                            <p className="text-xl tracking-wider md:text-2xl lg:text-3xl">
                                Næstved, Denmark
                            </p>
                        </div>
                        <div className="social-link">
                            <h2>
                                Socials
                            </h2>
                            <div
                                className="w-full h-1 my-2 bg-white opacity-30"
                            />
                            <p className="text-xl tracking-wider  md:text-2xl lg:text-3xl transition-all">
                                <a href="https://www.linkedin.com/in/rasmus-jannerup-6097231ab/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-400 transition-all">LinkedIn</a>
                                <span className="mx-4">|</span>
                                <a href="https://github.com/RasmusJannerup" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-400 transition-all">GitHub</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Contact