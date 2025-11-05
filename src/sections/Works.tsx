import { useGSAP } from "@gsap/react";
import { Icon } from "@iconify/react";
import { gsap } from "gsap";
import { useRef, useState } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";
const Works = () => {

    const [currentIndex, setCurrentIndex] = useState<number | undefined>(undefined);
    const previewRef = useRef<HTMLDivElement>(null);
    const overlayRefs = useRef<Array<HTMLDivElement | null>>([]);
    const moveX = useRef<any>(null);
    const moveY = useRef<any>(null);
    const mouse = useRef({ x: 0, y: 0 });
    useGSAP(() => {
        moveX.current = gsap.quickTo(
            previewRef.current,
            'x',
            {
                duration: 1.5,
                ease: 'power3.out',
            }
        )
        moveY.current = gsap.quickTo(
            previewRef.current,
            'y',
            {
                duration: 2,
                ease: 'power3.out',
            }
        )

        gsap.from("#project", {
            y: 100,
            opacity: 0,
            stagger: 0.3,
            duration: 1,
            ease: 'power2.out',
            delay: 0.3,
            scrollTrigger: {
                trigger: "#project",
            }
        })

    }, { scope: previewRef });
    const handleMouseEnter = (index: number) => {
        if (window.innerWidth < 768) return;
        setCurrentIndex(index);

        const el = overlayRefs.current[index];
        if (!el) return;

        gsap.killTweensOf(el);
        gsap.fromTo(el, {
            clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'
        }, {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            duration: 0.15,
            ease: 'power2.out',
        });

        gsap.to(previewRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
        });
    }

    const handleMouseLeave = (index: number) => {
        if (window.innerWidth < 768) return;
        setCurrentIndex(undefined);

        const el = overlayRefs.current[index];
        if (!el) return;

        gsap.killTweensOf(el);
        gsap.to(el, {
            clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
            duration: 0.2,
            ease: 'power2.in',
        });
        gsap.to(previewRef.current, {
            opacity: 0,
            scale: 0.95,
            duration: 0.3,
            ease: 'power2.out',
        });
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (window.innerWidth < 768) return;
        mouse.current.x = e.clientX + 24;
        mouse.current.y = e.clientY + 24;
        moveX.current(mouse.current.x);
        moveY.current(mouse.current.y);
    }

    return (

        <section
            id="work"
            className="min-h-screen flex flex-col "
        >
            <AnimatedHeaderSection
                subTitle="Crafting digital experiences with code"
                title="My Work"
                text={`Explore a selection of my projects`}
                textColor="text-black"
                withScrollTrigger={true}
            ></AnimatedHeaderSection>
            <div
                onMouseMove={(e) => {
                    handleMouseMove(e);
                }}
                className="relative flex flex-col font-light">
                {
                    projects.map((project, index) => (
                        <div
                            key={project.id}
                            id="project"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                            className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
                        >
                            {/* Overlay */}
                            <div
                                ref={el => { overlayRefs.current[index] = el! }}
                                className="absolute inset-0 hidden md:block duration-200 bg-black -z-10 clip-path"
                            />

                            {/* title */}
                            <div className="flex justify-between px-10 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white">
                                <h2 className="lg:text-[32px] text-[26px] leading-none">
                                    {project.name}
                                </h2>
                                <Icon icon='lucide:arrow-up-right' className="md:size-6 size-5"></Icon>
                            </div>
                            {/* divider */}
                            <div
                                className="w-full h-0.5 bg-black/80"
                            />
                            <div className="flex px-10 text-xs leading-loose uppercase transition-all duration-500 md:text-sm gap-x-5 md:group-hover:px-12">
                                {project.frameworks.map((framework) => (
                                    <p
                                        key={framework.id}
                                        className="text-black transition-colors duration-500 md:group-hover:text-white"
                                    >
                                        {framework.name}
                                    </p>
                                ))}
                            </div>
                            {/* Mobile preview images */}
                            <div className="relative flex items-center justify-center px-10 md:hidden h-[400px]">
                                <img
                                    src={project.bgImage}
                                    className="object-cover w-full h-full rounded-md brightness-50"
                                />
                                <img src={project.image} className="absolute bg-center px-14 rounded-xl" />
                            </div>
                            {/* Desktop preview images */}
                            <div
                                ref={previewRef}
                                className="fixed -top-2/6 left-0 z-50 overflow-hidden border-8 border-black pointer-events-none w-[960px] md:block hidden opacity-0">
                                {
                                    currentIndex !== undefined &&
                                    <img
                                        src={projects[currentIndex].image}
                                        alt="Project Preview"
                                        className="object-cover w-full h-full"
                                    />}
                            </div>

                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Works