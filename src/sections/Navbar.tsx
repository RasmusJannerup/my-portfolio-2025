import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { Link } from 'react-scroll';
import { socials } from "../constants";
const Navbar = () => {

    const navRef = useRef<HTMLElement>(null);
    const linksRef = useRef<HTMLDivElement[]>([]);
    const contactRef = useRef<HTMLDivElement>(null);
    const topLineRef = useRef<HTMLSpanElement>(null);
    const bottomLineRef = useRef<HTMLSpanElement>(null);
    const tl = useRef<GSAPTimeline | null>(null);
    const iconTl = useRef<GSAPTimeline | null>(null);

    const [isOpen, setIsOpen] = useState(false);
    const [showBurger, setShowBurger] = useState(true);

    useGSAP(() => {
        gsap.set(navRef.current, { xPercent: 100 });
        gsap.set([linksRef.current, contactRef.current], {
            autoAlpha: 0,
            x: -20
        });

        tl.current = gsap.timeline({
            paused: true,
        }).to(navRef.current, {
            xPercent: 0,
            duration: 1,
            ease: "power3.out"
        }).to([linksRef.current, contactRef.current], {
            autoAlpha: 1,
            x: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: "power2.out"
        }, "<").to(contactRef.current, {
            autoAlpha: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.out"
        }, "<+0.2");

        iconTl.current = gsap.timeline({ paused: true }).to(topLineRef.current, {
            rotation: 135,
            y: 3.3,
            duration: 0.3,
            ease: "power2.inOut"
        }).to(bottomLineRef.current, {
            rotation: -135,
            y: -3.3,
            duration: 0.3,
            ease: "power2.inOut"
        }, "<");
    }, { scope: navRef });



    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScroll = () => {

            const currentScrollY = window.scrollY;

            setShowBurger(currentScrollY < lastScrollY || currentScrollY < 10);

            lastScrollY = currentScrollY;

        };
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);


    const toggleMenu = () => {
        if (isOpen) {
            tl.current?.reverse();
            iconTl.current?.reverse();
        } else {
            tl.current?.play();
            iconTl.current?.play();
        }
        setIsOpen(!isOpen);
    }

    return (
        <>
            <nav
                ref={navRef}
                className="fixed z-50 flex flex-col justify-between
        w-full h-full px-10  py-28
        uppercase bg-black text-white/80
        gap-y-10 md:w-1/2 md:left-1/2">
                <div
                    className="flex flex-col text-5xl gap-y-2 md:text-6xl lg:text-8xl"
                >
                    {["home", "services", "about", "work", "contact"].map((section, index) => (
                        <div key={index} ref={(el) => {
                            linksRef.current[index] = el!;
                        }}>
                            <Link
                                key={index}
                                to={section}
                                smooth={true}
                                offset={0}
                                duration={500}
                                className="transition-all duration-300 cursor-pointer hover:text-white"
                            >
                                {section}
                            </Link>
                        </div>
                    ))}
                </div>
                <div ref={contactRef} className="flex flex-col flex-wrap justify-between gap-8 md:flex-row">
                    <div>
                        <p className="tracking-wider text-white/50">E-mail</p>
                        <p className="text-xl tracking-widest lowercase text-pretty">rasmus4700@hotmail.com</p>
                    </div>
                    <div className="font-light">
                        <p className="tracking-wider text-white/50">
                            Social Media
                        </p>
                        <div className="flex flex-col flex-wrap md:flex-row gap-x-2">
                            {socials.map((social) => (
                                <a
                                    key={social.name}
                                    className="text-sm leading-loose tracking-widest hover:text-white transition-colors duration-300"
                                    href={social.url}>

                                    {`[${social.name}]`}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
            <div
                style={{
                    clipPath: isOpen ? undefined : showBurger ? "circle(50% at 50% 50%)" : "circle(0% at 50% 50%)"
                }}
                onClick={() => {
                    toggleMenu();
                }}
                className="fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 bg-black rounded-full cursor-pointer w-14 h-14 md:w-20 md:h-20 top-4 right-10">
                <span
                    ref={topLineRef}
                    className="block w-8 h-0.5 bg-white rounded-full"
                />
                <span
                    ref={bottomLineRef}
                    className="block w-8 h-0.5 bg-white rounded-full"
                />
            </div>
        </>

    )
}

export default Navbar