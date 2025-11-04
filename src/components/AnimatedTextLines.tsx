import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextLinesProps {
    text: string;
    className?: string;
}

export const AnimatedTextLines = ({
    text,
    className
}: AnimatedTextLinesProps) => {

    const containerRef = useRef<HTMLDivElement>(null);
    const lineRefs = useRef<HTMLSpanElement[]>([]);
    const lines = text.split('\n').filter(line => line.trim() !== '');

    useGSAP(() => {
        if (lineRefs.current.length === 0) return;
        gsap.from(lineRefs.current, {
            y: 100,
            opacity: 0,
            stagger: 0.3,
            duration: 1,
            ease: "back.out",
            scrollTrigger: {
                trigger: containerRef.current,
            }
        });
    }, { scope: containerRef });

    return <div ref={containerRef} className={className}>
        {lines.map((line, index) => (
            <span
                key={index}
                ref={(el) => {
                    lineRefs.current[index] = el!;
                }}
                className="block leading-relaxed tracking-wide text-pretty"
            >
                {line}
            </span>
        ))}
    </div>
}   