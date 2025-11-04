import { useGSAP } from '@gsap/react';
import { useGLTF } from '@react-three/drei';
import { gsap } from 'gsap';
import { useRef } from 'react';

export function Planet(props: any) {
    const { nodes, materials } = useGLTF('/models/Planet.glb');
    const shapeContainer = useRef(null);
    const spheresContainer = useRef(null);
    const ringContainer = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from((shapeContainer.current as any).position, {
            y: 5,
            duration: 3,
            ease: 'circ.out',
        });
        tl.from((spheresContainer.current as any).rotation, {
            x: 0,
            z: -Math.PI,
            y: Math.PI,
            duration: 10,
            ease: 'power1.inOut',
        }, "-=25%");
        tl.from((ringContainer.current as any).rotation, {
            x: 0.8,
            y: 0,
            z: 0,
            duration: 10,
            ease: 'power1.inOut',
        }, "<")
    }, { scope: shapeContainer });

    return (
        <group ref={shapeContainer} {...props} dispose={null}>
            <group ref={spheresContainer}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={(nodes.Sphere as any).geometry}
                    material={materials['Material.002']}
                    rotation={[0, 0, 0.741]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={(nodes.Sphere2 as any).geometry}
                    material={materials['Material.001']}
                    position={[0.647, 1.03, -0.724]}
                    rotation={[0, 0, 0.741]}
                    scale={0.223}
                />
            </group>
            <mesh
                ref={ringContainer}
                castShadow
                receiveShadow
                geometry={(nodes.Ring as any).geometry}
                material={materials['Material.001']}
                rotation={[-0.124, 0.123, -0.778]}
                scale={2}
            />
        </group>
    )
}

useGLTF.preload('/models/Planet.glb')