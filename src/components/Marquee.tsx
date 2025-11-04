import { useGSAP } from '@gsap/react';
import { Icon } from '@iconify/react';
import { useRef } from 'react'
import { gsap } from 'gsap';

interface MarqueeProps {
    className?: string;
    items: string[];
    icon?: string;
    iconClassName?: string;
    reverse?: boolean;
}

const Marquee = ({ className = 'text-white bg-black', items, icon = 'mdi:star-four-points', iconClassName, reverse = false }: MarqueeProps) => {

    const containerRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<Array<HTMLSpanElement | null>>([]);

    useGSAP(() => {
        const animation = gsap.to(itemsRef.current, {
            xPercent: reverse ? 100 : -100,
            ease: 'none',
            duration: 20,
            repeat: -1,
        });


    }, { scope: containerRef });

    return (
        <div ref={containerRef} className={`overflow-hidden w-full h-20 md:h-[100px] flex items-center marquee-text-responsive font-light uppercase whitespace-nowrap ${className}`}>

            <div className='flex'>
                {items.map((item, index) => (
                    <span key={index} ref={(el) => { itemsRef.current[index] = el!; }} className='flex items-center px-16 gap-x-32'>
                        {item} <Icon icon={icon} className={iconClassName} />
                    </span>
                ))}
            </div>

        </div>
    )
}

export default Marquee