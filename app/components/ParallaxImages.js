'use client';

import { useEffect, useState } from 'react';

export default function ParallaxImages() {
    const [scrollY, setScrollY] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        const handleResize = () => {
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        // Set initial window height on client side
        setWindowHeight(window.innerHeight);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {/* Dragon de la izquierda con efecto parallax (sube al bajar) */}
            <div
                className="fixed top-0 left-[-15%] h-screen w-[80%] pointer-events-none z-10"
                style={{
                    backgroundImage: `url('/images/dragon-left.png')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '40%',
                    backgroundPosition: 'left center',
                    transform: `translateY(${typeof window !== 'undefined' ? scrollY * -0.05 : 0}px) rotate(-10deg)`,
                }}
            />

            {/* Nuevo parallax image 1 - Placeholder (right, top) */}
            {/* <div
                className="fixed top-[20%] right-[5%] h-screen w-[60%] pointer-events-none z-0"
                style={{
                    backgroundImage: `url('/images/dragon-left.png')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '30%',
                    backgroundPosition: 'right top',
                    transform: `translateY(${typeof window !== 'undefined' ? scrollY * 0.1 : 0}px) rotate(5deg)`,
                }}
            /> */}

            {/* Dragon central con efecto parallax (se mueve lentamente hacia arriba/abajo) */}
            {/* <div
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/5 h-2/5 pointer-events-none z-0"
                style={{
                    backgroundImage: `url('/images/dragon-center.png')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center center',
                    transform: `translateY(${typeof window !== 'undefined' ? scrollY * 0.01 : 0}px)`,
                }}
            /> */}

            {/* Nuevo parallax image 2 - Placeholder (left, bottom) */}
            {/* <div
                className="fixed bottom-[10%] left-[10%] h-screen w-[70%] pointer-events-none z-0"
                style={{
                    backgroundImage: `url('/images/dragon-left.png')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '35%',
                    backgroundPosition: 'left bottom',
                    transform: `translateY(${typeof window !== 'undefined' ? scrollY * -0.15 : 0}px) rotate(-15deg)`,
                }}
            /> */}

            {/* Olas de la derecha con efecto parallax (aparece a mitad de la página) */}
            <div
                className="fixed top-[100%] right-[-5%] h-screen w-1/4 pointer-events-none z-10"
                style={{
                    backgroundImage: `url('/images/waves-right.png')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'right center',
                    transform: `translateY(${typeof window !== 'undefined' ? scrollY * -0.3 + windowHeight * 0.5 : 0}px)`,
                }}
            />
        </>
    );
}
