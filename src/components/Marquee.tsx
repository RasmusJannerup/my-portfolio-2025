import { useGSAP } from '@gsap/react';
import { Icon } from '@iconify/react';
import { gsap } from 'gsap';
import { useRef } from 'react';

interface MarqueeProps {
    className?: string;
    items: string[];
    icon?: string;
    iconClassName?: string;
    reverse?: boolean;
    speed?: number;
}

const Marquee = ({ className = 'text-white bg-black', items, icon = 'mdi:star-four-points', iconClassName, reverse = false, speed = 100 }: MarqueeProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {

        const track = trackRef.current;
        if (!track) return;

        const children = track.children;
        const totalWidth = Array.from(children).reduce(
            (acc, el) => acc + (el as HTMLElement).offsetWidth,
            0
        );

        // duplicate content once
        track.appendChild(track.cloneNode(true));

        gsap.to(track, {
            x: reverse ? `+=${totalWidth}` : `-=${totalWidth}`,
            duration: totalWidth / speed,
            ease: "none",
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
            },
        });

    }, { dependencies: [speed, reverse], scope: containerRef });

    return (
        <div
            ref={containerRef}
            className={`overflow-hidden w-full h-20 md:h-[100px] flex items-center ${className}`}
        >
            <div ref={trackRef} className="flex whitespace-nowrap">
                {items.map((item, i) => (
                    <span
                        key={i}
                        className="flex items-center px-16 gap-x-32 font-light uppercase text-2xl md:text-4xl lg:text-5xl"
                    >
                        {item} <Icon icon={icon} className={iconClassName} />
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Marquee