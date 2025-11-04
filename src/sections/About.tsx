import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";

const About = () => {


    const imgRef = useRef<HTMLImageElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const text = `
        Passionate about crafting seamless digital experiences through clean code and innovative design. And keeping up with the latest trends to deliver on what users need.
    `
    const aboutText = `
        I have always been fascinated by design and technology. 
        This passion led me to pursue a degree in Computer Science in Denmark, where I honed my skills in software development. 
        I have since been lucky enough to work on a variety of projects, which have allowed me to be confident in different front-end technologies and frameworks.
        React and Flutter are my go-to tools for building dynamic and responsive user interfaces,
        and I believe that a well-designed application can make a significant difference in user experience.
        I am committed to writing clean, efficient code and am always looking for ways to improve my skills and stay up-to-date with the latest industry trends.
    `;


    useGSAP(() => {
        gsap.to(containerRef.current, {
            scale: 0.95,
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'bottom 80%',
                end: 'bottom 20%',
                scrub: true,
            },
            ease: 'power1.inOut',
        })


        gsap.set(imgRef.current, {
            clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'
        });

        gsap.to(imgRef.current, {
            clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)',
            duration: 2,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: containerRef.current,
            },
        });
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            id="about"
            className="min-h-screen bg-black rounded-b-4xl"
        >
            <AnimatedHeaderSection
                subTitle="Code with purpose, built to scale"
                title="About"
                textColor="text-white"
                text={text}
                withScrollTrigger={true}
            />
            <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
                <img
                    src="images/me.jpg"
                    ref={imgRef}
                    className="aspect-3/4 max-w-md rounded-3xl h-auto object-cover "
                >
                </img>
                <AnimatedTextLines text={aboutText} />
            </div>
        </section>
    )
}

export default About